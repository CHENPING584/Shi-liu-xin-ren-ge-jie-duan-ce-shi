import { useState, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Check, ArrowRight } from 'lucide-react';
import { questionsNT } from '../data/questions_nt';
import { questionsNF } from '../data/questions_nf';
import { questionsSJ } from '../data/questions_sj';
import { questionsSP } from '../data/questions_sp';
import { getTheme } from '../utils/theme';

export default function Assessment() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine assessment type from URL query or state (default to NT)
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category') || 'NT';
  const initialType = searchParams.get('initialType');
  const theme = getTheme(category);
  
  const questions = useMemo(() => {
    if (category === 'NF') return questionsNF;
    if (category === 'SJ') return questionsSJ;
    if (category === 'SP') return questionsSP;
    return questionsNT;
  }, [category]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadingStage, setLoadingStage] = useState('分析中...');

  // Ensure questions are loaded
  if (!questions || questions.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4" style={{ background: theme.bgLight }}>
        <div className="text-xl font-bold text-red-500 mb-4">题目加载失败</div>
        <p className="text-gray-600 mb-4">无法加载 {category} 类型的题目。</p>
        <div className="text-xs text-gray-400 font-mono bg-white/50 p-4 rounded-xl mb-4">
           Debug: {questions ? 'Empty Array' : 'Undefined'}
        </div>
        <button 
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-lg"
        >
          重试
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  // Safety check to prevent crash if question is undefined
  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4" style={{ background: theme.bgLight }}>
        <div className="text-xl font-bold text-gray-500 animate-pulse mb-4">正在加载题目...</div>
        <button 
          onClick={() => setCurrentQuestionIndex(0)}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm"
        >
          重置进度
        </button>
      </div>
    );
  }

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleOptionSelect = (label: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: label
    }));

    // Auto advance after short delay
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
      }, 300);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const calculateResults = () => {
    setIsSubmitting(true);
    setLoadingStage('正在分析...');
    
    // Initialize scores based on category
    let typeScores: Record<string, number>;
    if (category === 'NF') {
      typeScores = { INFJ: 0, INFP: 0, ENFJ: 0, ENFP: 0 };
    } else if (category === 'SJ') {
      typeScores = { ISTJ: 0, ISFJ: 0, ESTJ: 0, ESFJ: 0 };
    } else if (category === 'SP') {
      typeScores = { ISTP: 0, ISFP: 0, ESTP: 0, ESFP: 0 };
    } else {
      typeScores = { INTJ: 0, INTP: 0, ENTJ: 0, ENTP: 0 };
    }
      
    let totalScore = 0;

    questions.forEach(q => {
      const selectedLabel = answers[q.id];
      if (!selectedLabel) return;
      const selectedOption = q.options.find(opt => opt.label === selectedLabel);
      if (!selectedOption) return;

      // Part 1: Type Scoring (1-20)
      if (selectedOption.typeScores) {
        Object.entries(selectedOption.typeScores).forEach(([type, score]) => {
          if (typeScores[type] !== undefined) {
            typeScores[type] += score;
          }
        });
      }

      // Part 2: Level Scoring (21-30)
      if (selectedOption.levelScore) {
        totalScore += selectedOption.levelScore;
      }
    });

    // Determine Level Title (Base)
    let levelTitle = "本能期";
    if (totalScore >= 91) levelTitle = "高阶";
    else if (totalScore >= 76) levelTitle = "整合期";
    else if (totalScore >= 46) levelTitle = "觉醒期";

    // Simulate "Random Adjustment" phase
    setTimeout(() => {
      setLoadingStage('随机调整中...');
      
      // Apply Random Adjustment Logic
      Object.keys(typeScores).forEach(key => {
        // 1. Add Random Noise (0-8 points) to simulate variability
        const noise = Math.floor(Math.random() * 9); 
        typeScores[key] += noise;

        // 2. Initial Choice Influence (Self-Fulfilling Prophecy)
        // If the user selected this type initially, give it a small weight
        if (initialType && key === initialType) {
          typeScores[key] += 5;
        }
      });

      // Find highest type score after adjustment
      let maxTypeScore = -1;
      let resultType = "";
      // Default fallback
      if (category === 'NF') resultType = "INFJ";
      else if (category === 'SJ') resultType = "ISTJ";
      else if (category === 'SP') resultType = "ISTP";
      else resultType = "INTJ";
      
      Object.entries(typeScores).forEach(([type, score]) => {
        if (score > maxTypeScore) {
          maxTypeScore = score;
          resultType = type;
        }
      });

      setTimeout(() => {
        navigate(`/result/${resultType}`, { 
          state: { 
            score: totalScore, 
            levelTitle: levelTitle, 
            isAssessmentResult: true,
            category: category // Pass category to result page
          } 
        });
      }, 1000);
    }, 1000);
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center p-4 relative overflow-hidden font-sans transition-colors duration-700"
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
      <div className="w-full max-w-2xl flex items-center justify-between mb-10 pt-6 relative z-10">
        <button 
          onClick={() => navigate('/')}
          className="p-3 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div className="px-4 py-2 rounded-full bg-white/40 backdrop-blur-sm border border-white/30 text-sm font-bold text-gray-600 tracking-wide shadow-sm">
          <span style={{ color: theme.primary }}>{currentQuestionIndex + 1}</span>
          <span className="mx-1 text-gray-400">/</span>
          <span>{questions.length}</span>
        </div>
        <div className="w-11"></div> {/* Spacer */}
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-2xl h-1.5 bg-gray-200/50 rounded-full mb-12 overflow-hidden relative z-10">
        <div 
          className="h-full transition-all duration-700 ease-out rounded-full relative shadow-[0_0_15px_rgba(0,0,0,0.1)]"
          style={{ width: `${progress}%`, backgroundColor: theme.primary }}
        >
          <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-white/40 to-transparent"></div>
        </div>
      </div>

      {/* Question Card */}
      <div 
        key={currentQuestion.id}
        className="w-full max-w-2xl relative z-10 animate-fade-in-up"
        style={{ animation: 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
      >
        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); filter: blur(10px); }
            to { opacity: 1; transform: translateY(0); filter: blur(0); }
          }
        `}</style>
        
        <h2 className="text-3xl font-black text-gray-900 mb-10 leading-tight tracking-tight text-center">
          {currentQuestion.text}
        </h2>

        <div className="space-y-4" style={{ '--primary-color': theme.primary } as React.CSSProperties}>
          {currentQuestion.options.map((option, index) => (
            <button
              key={option.label}
              onClick={() => handleOptionSelect(option.label)}
              className={`w-full text-left p-6 rounded-3xl border-2 transition-all duration-300 flex items-center gap-5 group relative overflow-hidden
                ${answers[currentQuestion.id] === option.label 
                  ? 'shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] scale-[1.02]' 
                  : 'border-transparent bg-white/60 hover:bg-white hover:border-[var(--primary-color)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] hover:-translate-y-1'
                }`}
              style={{
                ...(answers[currentQuestion.id] === option.label ? {
                  borderColor: theme.primary,
                  backgroundColor: 'white'
                } : {}),
                animationDelay: `${index * 100}ms`
              }}
            >
              <span className={`
                flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg transition-all duration-300
                ${!answers[currentQuestion.id] || answers[currentQuestion.id] !== option.label
                  ? 'bg-white text-gray-400 shadow-[0_4px_10px_-2px_rgba(0,0,0,0.05)] group-hover:bg-[var(--primary-color)] group-hover:text-white group-hover:scale-110'
                  : ''
                }
              `}
              style={answers[currentQuestion.id] === option.label ? {
                backgroundColor: theme.primary,
                color: '#fff',
                boxShadow: `0 8px 20px -6px ${theme.primary}60`,
                transform: 'scale(1.1)'
              } : {}}
              >
                {option.label}
              </span>
              <span className={`text-lg leading-relaxed flex-1 transition-colors duration-300 
                ${answers[currentQuestion.id] === option.label 
                  ? 'font-bold' 
                  : 'text-gray-600 group-hover:text-[var(--primary-color)] group-hover:font-medium'
                }`}
                style={answers[currentQuestion.id] === option.label ? { color: theme.primary } : {}}
              >
                {option.text}
              </span>
              
              {answers[currentQuestion.id] === option.label && (
                <div className="absolute right-6 animate-in fade-in zoom-in duration-300">
                    <Check className="w-6 h-6" style={{ color: theme.primary }} />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="w-full max-w-2xl flex justify-between items-center mt-12 relative z-10">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300
            ${currentQuestionIndex === 0 
              ? 'text-gray-300 cursor-not-allowed opacity-0' 
              : 'text-gray-500 hover:text-gray-800 hover:bg-white/50'
            }`}
        >
          上一题
        </button>

        {currentQuestionIndex === questions.length - 1 && (
          <button
            onClick={calculateResults}
            disabled={!answers[currentQuestion.id] || isSubmitting}
            className="px-10 py-4 text-white rounded-2xl font-bold shadow-xl transition-all duration-300 disabled:opacity-50 disabled:shadow-none hover:shadow-2xl hover:-translate-y-1 active:scale-95 flex items-center gap-3"
            style={{ 
              background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
              boxShadow: `0 15px 30px -8px ${theme.primary}50` 
            }}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>{loadingStage}</span>
              </>
            ) : (
              <>
                <span>查看结果</span>
                <ArrowRight className="w-5 h-5 animate-pulse" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
