import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useRef, useState, useMemo, useEffect } from 'react';
import { getPersonalityData } from '../data/personalities';
import { NT_AWAKENING_DIAGNOSIS } from '../data/nt_diagnosis';
import { NF_AWAKENING_DIAGNOSIS } from '../data/nf_diagnosis';
import { SJ_AWAKENING_DIAGNOSIS } from '../data/sj_diagnosis';
import { SP_AWAKENING_DIAGNOSIS } from '../data/sp_diagnosis';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import { ChevronLeft, Share, RefreshCcw, BookOpen, Heart, Briefcase, Zap, AlertTriangle, List, Plus } from 'lucide-react';
import html2canvas from 'html2canvas';
import { getTheme } from '../utils/theme';

import { saveTestResult } from '../utils/storage';

export default function Result() {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const resultRef = useRef<HTMLDivElement>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const hasSaved = useRef(false);
  
  // Rolling text state
  const [displayLevel, setDisplayLevel] = useState("计算中...");
  const [isRolling, setIsRolling] = useState(true);
  const STAGES = ['本能期', '觉醒期', '整合期', '高阶'];

  // Combine static data with assessment result
  const data = useMemo(() => {
    const baseData = getPersonalityData(type || 'ENTP');
    const state = location.state as { score?: number; levelTitle?: string; isAssessmentResult?: boolean; category?: string } | null;

    if (!state?.isAssessmentResult) return { ...baseData, category: 'NT' }; // Default category

    const currentScore = state.score || 0;
    const currentLevel = state.levelTitle || baseData.levelTitle;
    const category = state.category || 'NT';

    // Check if we have specific diagnosis for NT/NF types in Awakening phase
    // Awakening phase: 46-75
    // const isAwakening = currentScore >= 46 && currentScore <= 75;
    
    let diagnosisDB;
    if (category === 'NF') diagnosisDB = NF_AWAKENING_DIAGNOSIS;
    else if (category === 'SJ') diagnosisDB = SJ_AWAKENING_DIAGNOSIS;
    else if (category === 'SP') diagnosisDB = SP_AWAKENING_DIAGNOSIS;
    else diagnosisDB = NT_AWAKENING_DIAGNOSIS;

    // Always try to load diagnosis data regardless of score to ensure content richness
    const diagnosisData = baseData.code in diagnosisDB 
      ? diagnosisDB[baseData.code] 
      : null;

    if (diagnosisData) {
      // Determine status title based on score
      let statusTitlePrefix = "当前状态诊断";
      if (currentScore >= 91) statusTitlePrefix = "潜在风险警示"; // High level: warn about regression
      else if (currentScore <= 45) statusTitlePrefix = "核心困境解析"; // Low level: explain current struggle

      return {
        ...baseData,
        category, // Include category in data
        levelTitle: currentLevel,
        // Override with diagnosis content
        quote: diagnosisData.quote,
        radar: diagnosisData.radar,
        careers: diagnosisData.compass.talents,
        soulmates: diagnosisData.compass.soulmates.map(sm => ({ code: sm, match: 95 })), // Simplified match
        sections: [
          {
            title: "天赋原力",
            content: `${diagnosisData.deconstruction.force.name}：${diagnosisData.deconstruction.force.desc}`
          },
          {
            title: "潜在盲区",
            content: `${diagnosisData.deconstruction.blindspot.name}：${diagnosisData.deconstruction.blindspot.desc}`
          },
          {
            title: "进化清单",
            list: diagnosisData.evolution
          }
        ],
        deconstruction: diagnosisData.deconstruction,
        prototype: diagnosisData.prototype,
        diagnosis: {
            title: `${statusTitlePrefix}: ${diagnosisData.status.name}`,
            content: diagnosisData.status.desc
          },
          social: diagnosisData.social,
          shadow: diagnosisData.shadow,
          warning: diagnosisData.warning
        };
      }

    // Default fallback if no specific diagnosis
    return {
      ...baseData,
      category, // Include category in data
      levelTitle: currentLevel,
    };
  }, [type, location.state]);

  // Rolling Animation Effect
  useEffect(() => {
    if (!data.levelTitle) return;

    let currentIndex = 0;
    const intervalTime = 100; // Speed of rolling
    const duration = 1500; // Total duration of rolling
    const startTime = Date.now();

    const interval = setInterval(() => {
      // Randomly pick a stage or cycle through
      setDisplayLevel(STAGES[currentIndex % STAGES.length]);
      currentIndex++;

      // Stop after duration
      if (Date.now() - startTime > duration) {
        clearInterval(interval);
        setDisplayLevel(data.levelTitle || ""); // Set final result
        setIsRolling(false);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [data.levelTitle]);

  // Save result when data is ready and calculation finishes
  useEffect(() => {
    if (!isRolling && data.code && !hasSaved.current) {
      saveTestResult({
        type: data.code,
        name: data.name,
        score: score,
        levelTitle: data.levelTitle || "未知阶段",
        category: data.category
      });
      hasSaved.current = true;
    }
  }, [isRolling, data, score]);

  const theme = getTheme(data.category);

  const score = (location.state as any)?.score || 88; // Default to 88 if not provided

  // Chart Data
  const chartData = data.radar.map(item => ({
    subject: item.label,
    A: item.value,
    fullMark: item.fullMark,
  }));

  const handleRetest = () => {
    navigate('/');
  };

  const handleSaveScreenshot = async () => {
    if (!resultRef.current) return;
    
    try {
      setIsCapturing(true);
      const canvas = await html2canvas(resultRef.current, {
        useCORS: true,
        scale: 2, // Better quality
        backgroundColor: '#FDFBFD',
      });
      
      const image = canvas.toDataURL("image/png");
      const link = document.createElement('a');
      link.href = image;
      link.download = `16人格测评结果-${data.code}.png`;
      link.click();
    } catch (error) {
      console.error("Screenshot failed:", error);
    } finally {
      setIsCapturing(false);
    }
  };

  return (
    <div 
      className="flex flex-col min-h-screen relative overflow-hidden font-sans transition-colors duration-700" 
      ref={resultRef}
      style={{ background: `linear-gradient(135deg, ${theme.bgLight} 0%, ${theme.primary}66 100%)` }}
    >
      {/* Dynamic Background with Noise & Mesh Gradient */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] z-[1]" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
             }} 
        />
        <div 
          className="absolute -top-[30%] -left-[10%] w-[90%] h-[70%] rounded-full blur-[120px] opacity-30 animate-pulse mix-blend-multiply"
          style={{ backgroundColor: theme.primary }}
        />
        <div 
          className="absolute top-[20%] -right-[20%] w-[80%] h-[80%] rounded-full blur-[130px] opacity-25 animate-pulse mix-blend-multiply"
          style={{ backgroundColor: theme.secondary, animationDelay: '2s' }}
        />
        <div 
          className="absolute -bottom-[20%] left-[20%] w-[70%] h-[60%] rounded-full blur-[100px] opacity-25 animate-pulse mix-blend-multiply"
          style={{ backgroundColor: theme.primary, animationDelay: '4s' }}
        />
      </div>

      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white/60 backdrop-blur-md sticky top-0 z-10 border-b border-white/40 shadow-sm" data-html2canvas-ignore>
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/50 rounded-full transition-colors">
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <span className="font-medium text-gray-700">16人格·心智阶位测评</span>
        <div className="flex gap-4 text-gray-500">
          <Plus className="w-5 h-5" />
          <RefreshCcw className="w-5 h-5" />
        </div>
      </header>

      <div className="p-4 space-y-6 pb-28 max-w-md mx-auto w-full relative z-10">
        {/* Top Card - Gradient */}
        <div 
          className="rounded-3xl p-8 text-white shadow-xl shadow-gray-200 relative overflow-hidden transition-transform hover:scale-[1.01]"
          style={{ background: `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientTo})` }}
        >
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

          <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold tracking-wide border border-white/10">
             总分: {score}
          </div>
          
          <div className="flex items-center gap-5 mb-6 relative z-10">
            <h1 className={`text-5xl font-bold tracking-tighter opacity-90 transition-all duration-300 ${isRolling ? 'animate-pulse blur-[2px]' : ''}`}>
              {displayLevel}
            </h1>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
            <div>
              <h1 className="text-4xl font-black leading-none tracking-tight">{data.code}</h1>
              <div className="text-xs uppercase opacity-80 font-bold tracking-[0.2em] mt-1">{data.name}</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8 relative z-10">
            {data.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-xs font-medium backdrop-blur-md">
                {tag}
              </span>
            ))}
          </div>

          <div className="border-t border-white/10 pt-5 relative z-10">
            <p className="text-sm italic leading-relaxed opacity-90 font-medium">
              "{data.quote}"
            </p>
          </div>
        </div>

        {/* Radar Chart */}
        <div className="bg-white/70 backdrop-blur-md rounded-3xl p-6 shadow-xl shadow-gray-100/50 border border-white/50">
          <h3 className="font-bold text-lg text-gray-800 mb-6 flex items-center gap-2">
            <div className="w-1 h-5 rounded-full" style={{ backgroundColor: theme.primary }}></div>
            阶位能量图谱
          </h3>
          <div className="h-64 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                <PolarGrid stroke="#E5E7EB" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#4B5563', fontSize: 11, fontWeight: 500 }} />
                <Radar
                  name="Energy"
                  dataKey="A"
                  stroke={theme.accent}
                  strokeWidth={3}
                  fill={theme.accent}
                  fillOpacity={0.4}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Score Bars */}
        <div className="bg-white rounded-3xl p-6 shadow-xl shadow-gray-100/50 border border-gray-50 space-y-5">
          {data.radar.map(item => (
            <div key={item.label} className="flex items-center gap-4">
              <span className="w-20 text-xs font-bold text-gray-500">{item.label}</span>
              <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                <div 
                  className="h-full rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: `${item.value}%`, backgroundColor: theme.primary }}
                ></div>
              </div>
              <span className="w-8 text-sm font-bold text-right" style={{ color: theme.text }}>{item.value}</span>
            </div>
          ))}
        </div>

        {/* Prototype & Core Identity */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-white/60 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
               <div className="p-2.5 rounded-xl bg-gray-900 text-white shadow-lg">
                 <Zap className="w-5 h-5" />
               </div>
               <h3 className="font-bold text-xl text-gray-800">灵魂原型 & 核心构造</h3>
            </div>

            <div className="mb-8">
              <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">ARCHETYPE</div>
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                {data.prototype || "未定义的漫游者"}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
               {/* Force */}
               <div className="group/card relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 bg-gradient-to-br from-amber-50/80 to-orange-50/80 border border-amber-100/50">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-200/20 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover/card:scale-110"></div>
                 
                 <div className="relative z-10">
                   <div className="flex items-center gap-3 mb-4">
                     <div className="p-2 rounded-lg bg-amber-100/50 text-amber-600 shadow-sm ring-1 ring-amber-200/50">
                       <Zap className="w-5 h-5" />
                     </div>
                     <span className="text-amber-800 font-bold tracking-wide text-sm uppercase">天赋原力 (Force)</span>
                   </div>
                   
                   <h4 className="text-xl font-black text-gray-900 mb-3 tracking-tight">
                     {data.deconstruction?.force.name || "Loading..."}
                   </h4>
                   <p className="text-gray-600 leading-relaxed text-sm font-medium">
                     {data.deconstruction?.force.desc}
                   </p>
                 </div>
               </div>

               {/* Blindspot */}
               <div className="group/card relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 bg-gradient-to-br from-red-50/80 to-pink-50/80 border border-red-100/50">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-200/20 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover/card:scale-110"></div>
                 
                 <div className="relative z-10">
                   <div className="flex items-center gap-3 mb-4">
                     <div className="p-2 rounded-lg bg-red-100/50 text-red-600 shadow-sm ring-1 ring-red-200/50">
                       <AlertTriangle className="w-5 h-5" />
                     </div>
                     <span className="text-red-800 font-bold tracking-wide text-sm uppercase">潜在盲区 (Blindspot)</span>
                   </div>
                   
                   <h4 className="text-xl font-black text-gray-900 mb-3 tracking-tight">
                     {data.deconstruction?.blindspot.name || "Loading..."}
                   </h4>
                   <p className="text-gray-600 leading-relaxed text-sm font-medium">
                     {data.deconstruction?.blindspot.desc}
                   </p>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Social Mask & Reality - New Section */}
        {data.social && (
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-white/60">
             <div className="flex items-center gap-3 mb-6">
               <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600">
                 <BookOpen className="w-5 h-5" />
               </div>
               <h3 className="font-bold text-xl text-gray-800">社交面具与真实</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-50/50 rounded-2xl p-6 border border-purple-100/50">
                 <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">PERSONA</div>
                 <h4 className="text-lg font-bold text-purple-900 mb-2">{data.social.persona}</h4>
              </div>
              <div className="bg-indigo-50/50 rounded-2xl p-6 border border-indigo-100/50">
                 <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">REALITY</div>
                 <h4 className="text-lg font-bold text-indigo-900 mb-2">{data.social.reality}</h4>
              </div>
            </div>
          </div>
        )}

        {/* Shadow & Warning - New Section */}
        {(data.shadow || data.warning) && (
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-white/60">
             <div className="flex items-center gap-3 mb-6">
               <div className="p-2.5 rounded-xl bg-gray-800 text-white">
                 <AlertTriangle className="w-5 h-5" />
               </div>
               <h3 className="font-bold text-xl text-gray-800">阴影与禁忌</h3>
            </div>
            
            <div className="space-y-4">
              {data.shadow && (
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                   <h4 className="text-base font-bold text-gray-900 mb-2">阴影人格 (Shadow)</h4>
                   <p className="text-gray-600 leading-relaxed text-sm">{data.shadow}</p>
                </div>
              )}
              {data.warning && (
                <div className="bg-red-50/50 rounded-2xl p-6 border border-red-100/50">
                   <h4 className="text-base font-bold text-red-900 mb-2">相处禁忌 (Warning)</h4>
                   <p className="text-red-800/80 leading-relaxed text-sm">{data.warning}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Current Status Diagnosis */}
        {data.diagnosis && (
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-white/60">
             <div className="flex items-center gap-3 mb-6">
               <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                 <AlertTriangle className="w-5 h-5" />
               </div>
               <h3 className="font-bold text-xl text-gray-800">当前状态诊断</h3>
            </div>
            
            <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100/50">
               <h4 className="text-lg font-bold text-blue-900 mb-3">{data.diagnosis.title}</h4>
               <p className="text-blue-800/80 leading-relaxed">
                 {data.diagnosis.content}
               </p>
            </div>
          </div>
        )}

        {/* Career & Soulmate Split */}
        <div className="grid grid-cols-1 gap-6">
           {/* Career */}
           <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg shadow-gray-100/50 border border-white/60">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                   <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-gray-800">天赋职业方向</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.careers.map(career => (
                  <span key={career} className="px-4 py-2.5 bg-white border border-gray-100 rounded-xl text-sm font-bold text-gray-600 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default">
                    {career}
                  </span>
                ))}
              </div>
           </div>

           {/* Soulmate */}
           <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg shadow-gray-100/50 border border-white/60">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-rose-50 text-rose-600">
                   <Heart className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-gray-800">灵魂伴侣契合度</h3>
              </div>
              <div className="space-y-4">
                {data.soulmates.map(mate => (
                  <div key={mate.code} className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:border-rose-100 hover:bg-rose-50/30 transition-colors">
                    <span className="w-16 font-black text-gray-700 text-lg">{mate.code.split(' ')[0]}</span>
                    <div className="flex-1">
                      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden mb-1.5">
                        <div 
                          className="h-full bg-gradient-to-r from-rose-300 to-rose-500 rounded-full group-hover:animate-pulse" 
                          style={{ width: `${mate.match}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-400 line-clamp-1">{mate.code.split(' ').slice(1).join(' ').replace(/[()]/g, '')}</p>
                    </div>
                    <span className="text-rose-500 font-bold">{mate.match}%</span>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* Evolution List */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-white/60">
           <div className="flex items-center gap-3 mb-6">
             <div className="p-2.5 rounded-xl bg-violet-50 text-violet-600">
               <List className="w-5 h-5" />
             </div>
             <h3 className="font-bold text-xl text-gray-800">高阶进化清单</h3>
           </div>
           
           <div className="space-y-4">
             {data.sections.find(s => s.title === '进化清单')?.list?.map((item, idx) => (
               <div key={idx} className="flex gap-4 items-start p-4 rounded-2xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-md transition-all duration-300">
                 <div className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-bold text-sm mt-0.5">
                   {idx + 1}
                 </div>
                 <p className="text-gray-700 leading-relaxed pt-1 font-medium">{item}</p>
               </div>
             ))}
           </div>
        </div>

        {/* Diagnosis */}
        <div className="bg-white rounded-3xl p-6 shadow-xl shadow-gray-100/50 border border-gray-50">
           <div className="flex items-center gap-2 mb-6 font-bold text-gray-800 border-b border-gray-100 pb-4">
            <div className="p-2 rounded-lg bg-gray-50" style={{ color: theme.primary }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            </div>
            <h3>当前能量状态诊断</h3>
          </div>
          
          <div className="mb-2">
            <h4 className="font-bold text-gray-800 text-lg mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: theme.accent }}></span>
                {data.diagnosis.title}
            </h4>
            <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 text-gray-600 text-sm leading-relaxed">
               {highlightKeywords(data.diagnosis.content, theme.primary)}
            </div>
          </div>
        </div>

      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 w-full max-w-md bg-white border-t p-4 flex gap-4 z-20 pb-8" data-html2canvas-ignore>
        <button 
          onClick={handleRetest}
          className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
        >
          <RefreshCcw className="w-4 h-4" />
          重测
        </button>
        <button 
          onClick={handleSaveScreenshot}
          disabled={isCapturing}
          className="flex-1 py-3 text-white rounded-full font-medium flex items-center justify-center gap-2 shadow-lg transition-colors disabled:opacity-70"
          style={{ backgroundColor: theme.primary, boxShadow: `0 10px 15px -3px ${theme.primary}40` }}
        >
          <Share className="w-4 h-4" />
          {isCapturing ? '生成中...' : '保存结果长截图'}
        </button>
      </div>
      
    </div>
  );
}

// Helper to highlight specific keywords (simple version)
function highlightKeywords(text: string, color: string) {
  // This is a simplified highlighter. In a real app, you'd parse this better.
  const parts = text.split(/(低阶|外向直觉 \(Ne\)|Si|三分钟热度)/g);
  return parts.map((part, i) => {
    if (['低阶', '外向直觉 (Ne)', 'Si', '三分钟热度'].includes(part)) {
      return <span key={i} className="font-medium" style={{ color }}>{part}</span>;
    }
    return part;
  });
}
