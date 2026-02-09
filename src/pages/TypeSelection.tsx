import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Check, Brain, Sparkles, Shield, Flame, ArrowRight, Lock } from 'lucide-react';
import { PERSONALITY_GROUPS } from '../data/types';
import { getTheme } from '../utils/theme';

import { verifyAuthCode } from '../utils/security';

export default function TypeSelection() {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authCode, setAuthCode] = useState('');
  const [authError, setAuthError] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const theme = getTheme(category || 'NT');
  
  const group = PERSONALITY_GROUPS.find(g => g.name === category) || PERSONALITY_GROUPS[0];
  const types = group.types;

  const handleStart = () => {
    if (selectedType) {
      setShowAuthModal(true);
    }
  };

  const handleVerify = async () => {
    setIsVerifying(true);
    try {
      const isValid = await verifyAuthCode(authCode);
      if (isValid) {
        navigate(`/assessment?category=${category}&initialType=${selectedType}`);
      } else {
        setAuthError(true);
      }
    } catch (error) {
      console.error('Verification failed', error);
      setAuthError(true);
    } finally {
      setIsVerifying(false);
    }
  };

  const getIcon = () => {
    const iconProps = { className: "w-8 h-8 text-white drop-shadow-md" };
    if (category === 'NF') return <Sparkles {...iconProps} />;
    if (category === 'SJ') return <Shield {...iconProps} />;
    if (category === 'SP') return <Flame {...iconProps} />;
    return <Brain {...iconProps} />;
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center relative overflow-hidden font-sans transition-colors duration-700"
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
      <div className="w-full flex items-center justify-between p-6 px-6 md:px-12 relative z-10">
        <button 
          onClick={() => navigate('/')}
          className="group p-3 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
        </button>
        
        <div className="flex flex-col items-center">
          <div 
            className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-[0_8px_30px_-6px_rgba(0,0,0,0.2)] mb-3 transition-transform hover:scale-105 duration-500 relative overflow-hidden group"
            style={{ 
              background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})` 
            }}
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            {getIcon()}
          </div>
        </div>
        
        <div className="w-11"></div> 
      </div>

      <div className={`w-full max-w-md px-8 text-center mb-10 transition-all duration-1000 ease-out z-10 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-3xl font-black text-gray-900 mb-3 tracking-tight">
          选择您的<span className="relative inline-block mx-2">
            <span className="relative z-10" style={{ color: theme.primary }}>{group.name}</span>
            <span 
              className="absolute bottom-1 left-0 w-full h-3 opacity-20 -rotate-2 rounded-full"
              style={{ backgroundColor: theme.primary }}
            />
          </span>原型
        </h1>
        <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-xs mx-auto">
          {group.subtitle}
        </p>
      </div>

      {/* Type Cards */}
      <div className="w-full px-5 md:px-12 space-y-5 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 pb-40 z-10">
        {types.map((type, index) => (
          <button
            key={type.code}
            onClick={() => setSelectedType(type.code)}
            className={`w-full text-left p-6 rounded-3xl transition-all duration-500 relative overflow-hidden group
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              ${selectedType === type.code 
                ? 'shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] scale-[1.02]' 
                : 'bg-white/70 hover:bg-white border border-white/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.1)] hover:-translate-y-1'
              }`}
            style={{
              transitionDelay: `${index * 80}ms`,
              ...(selectedType === type.code ? {
                background: 'white',
                border: `2px solid ${theme.primary}`,
              } : {})
            }}
          >
            {/* Selection Glow Effect */}
            {selectedType === type.code && (
              <div 
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})` }}
              />
            )}

            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className="flex items-center gap-4">
                 <span 
                   className="text-3xl font-black tracking-tighter transition-colors duration-300" 
                   style={{ color: selectedType === type.code ? theme.primary : '#1f2937' }}
                 >
                   {type.code}
                 </span>
                 <span 
                   className={`px-3 py-1.5 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 shadow-sm
                     ${selectedType === type.code ? 'text-white shadow-md' : 'text-gray-500 bg-gray-100/80'}`}
                   style={selectedType === type.code ? { 
                     background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})` 
                   } : {}}
                 >
                   {type.name}
                 </span>
              </div>
              
              <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-500 shadow-sm
                ${selectedType === type.code ? 'scale-100 opacity-100 rotate-0' : 'scale-50 opacity-0 -rotate-45'}`}
                style={{ 
                  background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                  boxShadow: `0 4px 12px -2px ${theme.primary}66`
                }}
              >
                <Check className="w-4 h-4 text-white stroke-[3]" />
              </div>
            </div>
            
            <p className={`text-sm leading-relaxed font-medium transition-colors duration-300 relative z-10
              ${selectedType === type.code ? 'text-gray-700' : 'text-gray-500'}`}>
              {type.description}
            </p>
          </button>
        ))}
      </div>

      {/* Bottom Action */}
      <div className="fixed bottom-8 w-full max-w-md left-1/2 -translate-x-1/2 px-6 z-20">
        <button
          onClick={handleStart}
          disabled={!selectedType}
          className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-500 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.1)]
            ${selectedType 
              ? 'text-white hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:scale-[1.02] active:scale-[0.98]' 
              : 'bg-gray-100/80 text-gray-400 cursor-not-allowed backdrop-blur-md'}`}
          style={selectedType ? { 
            background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
            boxShadow: `0 15px 30px -8px ${theme.primary}55`
          } : {}}
        >
          {selectedType ? (
            <>
              <span className="tracking-wide">开启深度诊断</span>
              <ArrowRight className="w-5 h-5 animate-pulse" />
            </>
          ) : (
            <span className="font-medium opacity-80">请选择一个类型以继续</span>
          )}
        </button>
      </div>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
            onClick={() => setShowAuthModal(false)} 
          />
          <div className="bg-white rounded-3xl p-8 w-full max-w-sm relative z-10 shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="flex justify-center mb-6">
              <a 
                href="https://xhslink.com/m/AGcYFI8Bebo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-1.5 bg-red-50 text-red-500 border border-red-100 rounded-full text-sm font-bold tracking-wide hover:bg-red-100 transition-colors"
              >
                小红书：心声事务所
              </a>
            </div>

            <div className="flex flex-col items-center justify-center mb-6">
               <div 
                 className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3 mb-3"
                 style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})` }}
               >
                 <Lock className="w-8 h-8 text-white" />
               </div>
               <p className="text-xs text-gray-400 font-medium">
                 可在上方点击小红书店铺，获得授权码
               </p>
            </div>
            
            <h3 className="text-2xl font-black text-gray-900 mb-2 text-center">请输入授权码</h3>
            <p className="text-sm text-gray-500 mb-8 text-center leading-relaxed">
              此测评为深度心智诊断系统，<br/>请输入访问授权码以解锁完整测试。
            </p>
            
            <div className="relative mb-2">
              <input
                type="text" // using text to avoid number spinners
                inputMode="numeric"
                value={authCode}
                onChange={(e) => {
                  // Remove whitespace immediately to avoid confusion
                  setAuthCode(e.target.value.replace(/\s/g, ''));
                  setAuthError(false);
                }}
                onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
                placeholder="在此输入授权码"
                className={`w-full px-4 py-4 rounded-xl bg-gray-50 border-2 text-center font-bold tracking-[0.2em] text-xl transition-all placeholder:font-normal placeholder:tracking-normal placeholder:text-gray-400
                  ${authError 
                    ? 'border-red-300 bg-red-50 text-red-600 focus:border-red-500 focus:ring-4 focus:ring-red-100' 
                    : 'border-gray-100 focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100 text-gray-800'
                  }`}
              />
            </div>
            
            {authError && (
              <p className="text-red-500 text-xs text-center mb-6 font-bold animate-pulse flex items-center justify-center gap-1">
                <span className="w-1 h-1 rounded-full bg-red-500" />
                授权码无效，请重试
              </p>
            )}
            
            <div className="flex gap-3 mt-6">
              <button 
                onClick={() => setShowAuthModal(false)}
                className="flex-1 py-3.5 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-colors"
              >
                取消
              </button>
              <button 
                onClick={handleVerify}
                disabled={isVerifying}
                className="flex-1 py-3.5 rounded-xl font-bold text-white shadow-lg shadow-purple-200 hover:shadow-purple-300 hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})` }}
              >
                {isVerifying ? '验证中...' : '确认解锁'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}