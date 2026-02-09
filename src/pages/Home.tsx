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
    <div className="flex flex-col min-h-screen w-full relative overflow-hidden font-sans bg-gradient-to-br from-[#f3f5f9] via-[#f0f4ff] to-[#fdf2f8]">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[60%] rounded-full blur-[120px] opacity-30 bg-violet-400/40 animate-pulse mix-blend-multiply"></div>
        <div className="absolute top-[40%] right-[-10%] w-[60%] h-[60%] rounded-full blur-[100px] opacity-30 bg-blue-400/40 animate-pulse mix-blend-multiply" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-30 bg-indigo-300/40 animate-pulse mix-blend-multiply" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-[20%] right-[30%] w-[40%] h-[40%] rounded-full blur-[100px] opacity-25 bg-fuchsia-300/40 animate-pulse mix-blend-multiply" style={{ animationDelay: '3s' }}></div>
        
        {/* Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
             }} 
        />
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-20 transition-all duration-700 backdrop-blur-[2px] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="flex justify-between items-center p-6 w-full px-6 md:px-12">
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
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-6 md:px-12 pt-8 pb-24 text-center w-full relative z-10">
        
        {/* Hero Section */}
        <div className={`mb-12 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500 to-fuchsia-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative w-24 h-24 md:w-32 md:h-32 bg-white rounded-[2rem] flex items-center justify-center shadow-xl shadow-purple-100/50 rotate-3 hover:rotate-6 transition-transform duration-500">
               <Brain className="w-10 h-10 md:w-14 md:h-14 text-gray-800" />
               <div className="absolute -top-2 -right-2 w-8 h-8 md:w-10 md:h-10 bg-gray-900 rounded-full flex items-center justify-center border-4 border-white">
                 <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
               </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
            探索你的<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">真实人格阶段</span>
          </h1>
          <p className="text-gray-500 text-sm md:text-lg font-medium leading-relaxed max-w-xs md:max-w-2xl mx-auto">
            基于荣格八维认知功能的深度心智解析系统，揭示你潜意识中的天赋与盲区。
          </p>
          
          <div className="mt-6 inline-flex items-center gap-1.5 px-4 py-2 bg-amber-50 text-amber-700 text-xs md:text-sm font-bold rounded-full border border-amber-100/50 shadow-sm animate-bounce duration-[2000ms]">
             <Star className="w-3 h-3 fill-current" />
             <span>建议先测自己属于什么类型的人格，再进行测试</span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full px-4 md:px-0">
          {categories.map((cat, index) => (
            <button
              key={cat.id}
              onClick={() => navigate(`/select-type/${cat.id}`)}
              className={`group relative overflow-hidden p-1 rounded-3xl transition-all duration-700 ease-out h-full
                ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${cat.delay}ms` }}
            >
              <div className="absolute inset-0 bg-white rounded-3xl shadow-lg shadow-gray-100 transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]"></div>
              
              <div 
                className="relative p-5 flex md:flex-col md:items-start md:text-left items-center justify-between h-full bg-white/40 backdrop-blur-md rounded-[22px] overflow-hidden border transition-all duration-300 group-hover:bg-transparent group-hover:border-transparent"
                style={{ 
                  '--theme-primary': cat.theme.primary,
                  '--theme-secondary': cat.theme.secondary,
                  borderColor: `${cat.theme.primary}40`
                } as React.CSSProperties}
              >
                {/* Gradient Background */}
                <div 
                  className="absolute inset-0 opacity-[0.15] transition-all duration-500 group-hover:opacity-100"
                  style={{ background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))` }}
                />

                <div className="flex md:flex-col items-center md:items-start gap-5 md:gap-4 z-10 w-full">
                  <div 
                    className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-white group-hover:shadow-xl shrink-0"
                    style={{ 
                      background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                      boxShadow: `0 8px 16px -4px ${cat.theme.primary}66`
                    }}
                  >
                     <cat.icon className="w-7 h-7 md:w-8 md:h-8 group-hover:text-[var(--theme-primary)] transition-colors duration-300" />
                  </div>
                  
                  <div className="text-left w-full">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-lg md:text-xl text-gray-800 transition-colors duration-300 group-hover:text-white">{cat.name}</span>
                      <span 
                        className="text-[10px] md:text-xs px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border transition-all duration-300 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/40"
                        style={{ 
                          backgroundColor: `${cat.theme.primary}10`, 
                          color: cat.theme.primary,
                          borderColor: `${cat.theme.primary}20`
                        }}
                      >
                        {cat.role}
                      </span>
                    </div>
                    <div className="text-xs md:text-sm text-gray-500 font-medium transition-colors duration-300 group-hover:text-white/90 line-clamp-2">
                      {cat.desc}
                    </div>
                  </div>
                </div>

                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 -translate-x-4 md:translate-x-0 md:translate-y-4 transition-all duration-300 z-10 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:bg-white/20 md:absolute md:bottom-5 md:right-5"
                  style={{ backgroundColor: `${cat.theme.primary}15` }}
                >
                  <ArrowRight className="w-4 h-4 transition-colors duration-300 group-hover:text-white" style={{ color: cat.theme.primary }} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </main>

      {/* Footer/Nav */}
      <div className="fixed bottom-0 w-full bg-white/80 backdrop-blur-xl border-t border-gray-100 p-4 z-20">
        <div className="max-w-md md:max-w-2xl mx-auto flex justify-around items-center">
          <button className="flex flex-col items-center gap-1 text-purple-600">
            <Brain className="w-6 h-6" />
            <span className="text-[10px] font-bold">测评</span>
          </button>
          <div className="w-12 h-12 -mt-8 bg-gradient-to-tr from-gray-900 to-gray-800 rounded-full flex items-center justify-center text-white shadow-lg shadow-purple-900/20 ring-4 ring-white">
             <Sparkles className="w-6 h-6 animate-pulse" />
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
