import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RefreshCcw, Plus, Brain, Sparkles, Shield, Flame, Zap, ArrowRight, Star } from 'lucide-react';
import { getTheme } from '../utils/theme';

export default function Home() {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    {
      id: 'NT',
      name: 'NT 理性者',
      role: '分析家',
      desc: '追求真理与知识的解构者',
      icon: Brain,
      theme: getTheme('NT'),
      delay: 100
    },
    {
      id: 'NF',
      name: 'NF 理想者',
      role: '外交家',
      desc: '探寻意义与连接的治愈者',
      icon: Sparkles,
      theme: getTheme('NF'),
      delay: 200
    },
    {
      id: 'SJ',
      name: 'SJ 护卫者',
      role: '守护者',
      desc: '维护秩序与传统的基石',
      icon: Shield,
      theme: getTheme('SJ'),
      delay: 300
    },
    {
      id: 'SP',
      name: 'SP 艺术者',
      role: '探险家',
      desc: '拥抱当下与自由的行者',
      icon: Flame,
      theme: getTheme('SP'),
      delay: 400
    }
  ];

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden font-sans bg-slate-50">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[60%] rounded-full blur-[120px] opacity-20 bg-purple-400/30 animate-pulse"></div>
        <div className="absolute top-[40%] right-[-10%] w-[60%] h-[60%] rounded-full blur-[100px] opacity-20 bg-blue-400/30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-20 bg-amber-400/30 animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
             }} 
        />
      </div>

      {/* Header */}
      <header className={`flex justify-between items-center p-6 sticky top-0 z-20 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-gradient-to-tr from-gray-900 to-gray-700 rounded-xl flex items-center justify-center text-white shadow-lg">
            <Zap className="w-4 h-4 fill-current" />
          </div>
          <span className="font-bold text-gray-800 text-lg tracking-tight">Psyche<span className="text-gray-400 font-light">.Map</span></span>
        </div>
        <div className="flex gap-4">
          <button className="p-2 rounded-full hover:bg-white/50 transition-colors text-gray-500">
            <Plus className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-white/50 transition-colors text-gray-500">
            <RefreshCcw className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-6 pt-8 pb-24 text-center max-w-lg mx-auto w-full relative z-10">
        
        {/* Hero Section */}
        <div className={`mb-12 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500 to-fuchsia-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center shadow-xl shadow-purple-100/50 rotate-3 hover:rotate-6 transition-transform duration-500">
               <Brain className="w-10 h-10 text-gray-800" />
               <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center border-4 border-white">
                 <Star className="w-4 h-4 text-yellow-400 fill-current" />
               </div>
            </div>
          </div>

          <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
            探索你的<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">真实人格阶段</span>
          </h1>
          <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-xs mx-auto">
            基于荣格八维认知功能的深度心智解析系统，揭示你潜意识中的天赋与盲区。
          </p>
          
          <div className="mt-6 inline-flex items-center gap-1.5 px-4 py-2 bg-amber-50 text-amber-700 text-xs font-bold rounded-full border border-amber-100/50 shadow-sm animate-bounce duration-[2000ms]">
             <Star className="w-3 h-3 fill-current" />
             <span>建议先测自己属于什么类型的人格，再进行测试</span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-4 w-full">
          {categories.map((cat, index) => (
            <button
              key={cat.id}
              onClick={() => navigate(`/select-type/${cat.id}`)}
              className={`group relative overflow-hidden p-1 rounded-3xl transition-all duration-700 ease-out
                ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${cat.delay}ms` }}
            >
              <div className="absolute inset-0 bg-white rounded-3xl shadow-lg shadow-gray-100 transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]"></div>
              
              <div className="relative p-5 flex items-center justify-between bg-white rounded-[22px] overflow-hidden border border-gray-100">
                {/* Hover Gradient Background */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${cat.theme.primary}, ${cat.theme.secondary})` }}
                />

                <div className="flex items-center gap-5">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{ background: `linear-gradient(135deg, ${cat.theme.primary}, ${cat.theme.secondary})` }}
                  >
                     <cat.icon className="w-7 h-7" />
                  </div>
                  
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-lg text-gray-800 group-hover:text-gray-900">{cat.name}</span>
                      <span 
                        className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider"
                        style={{ backgroundColor: `${cat.theme.primary}15`, color: cat.theme.primary }}
                      >
                        {cat.role}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400 font-medium group-hover:text-gray-500 transition-colors">
                      {cat.desc}
                    </div>
                  </div>
                </div>

                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  style={{ backgroundColor: `${cat.theme.primary}15` }}
                >
                  <ArrowRight className="w-4 h-4" style={{ color: cat.theme.primary }} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </main>

      {/* Footer/Nav */}
      <div className="fixed bottom-0 w-full bg-white/80 backdrop-blur-xl border-t border-gray-100 p-4 z-20">
        <div className="max-w-md mx-auto flex justify-around items-center">
          <button className="flex flex-col items-center gap-1 text-gray-800">
            <Brain className="w-6 h-6" />
            <span className="text-[10px] font-bold">测评</span>
          </button>
          <div className="w-12 h-12 -mt-8 bg-gray-900 rounded-full flex items-center justify-center text-white shadow-lg shadow-gray-900/30 ring-4 ring-white">
             <Sparkles className="w-6 h-6" />
          </div>
          <button 
            onClick={() => navigate('/archive')}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <Shield className="w-6 h-6" />
            <span className="text-[10px] font-bold">档案</span>
          </button>
        </div>
      </div>
    </div>
  );
}
