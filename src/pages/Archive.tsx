import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Trash2, Clock, Brain, AlertCircle } from 'lucide-react';
import { getTestHistory, clearTestHistory, TestResult } from '../utils/storage';
import { getTheme } from '../utils/theme';

export default function Archive() {
  const navigate = useNavigate();
  const [history, setHistory] = useState<TestResult[]>([]);

  useEffect(() => {
    setHistory(getTestHistory());
  }, []);

  const handleClear = () => {
    if (confirm('确定要清空所有历史记录吗？')) {
      clearTestHistory();
      setHistory([]);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('zh-CN', {
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleItemClick = (result: TestResult) => {
    // Navigate to result page with saved state
    navigate(`/result/${result.type}`, {
      state: {
        score: result.score,
        levelTitle: result.levelTitle,
        isAssessmentResult: true,
        category: result.category
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white sticky top-0 z-10 border-b border-gray-100 shadow-sm">
        <button 
          onClick={() => navigate('/')} 
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <span className="font-bold text-gray-800">测试档案</span>
        <button 
          onClick={handleClear}
          disabled={history.length === 0}
          className={`p-2 rounded-full transition-colors ${
            history.length === 0 ? 'text-gray-300' : 'text-gray-600 hover:bg-red-50 hover:text-red-500'
          }`}
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </header>

      {/* Content */}
      <main className="flex-1 p-4 max-w-md mx-auto w-full">
        {history.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-gray-400">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-10 h-10 text-gray-300" />
            </div>
            <p className="font-medium">暂无测试记录</p>
            <button 
              onClick={() => navigate('/')}
              className="mt-6 px-6 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-bold shadow-lg shadow-gray-200 active:scale-95 transition-all"
            >
              开始新的测试
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {history.map((item) => {
              const theme = getTheme(item.category);
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className="w-full bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 transition-all hover:shadow-md hover:-translate-y-0.5 active:scale-[0.99] group text-left"
                >
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-md font-bold text-lg shrink-0"
                    style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})` }}
                  >
                    {item.type}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-gray-900 truncate">{item.name}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 font-medium">
                        {item.levelTitle}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {formatDate(item.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        得分: {item.score}
                      </span>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-gray-100 group-hover:text-gray-600 transition-colors">
                    <ChevronLeft className="w-4 h-4 rotate-180" />
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
