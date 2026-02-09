export interface TestResult {
  id: string;
  date: string;
  type: string; // e.g., 'INTJ'
  name: string; // e.g., '建筑师'
  score: number;
  levelTitle: string; // e.g., '觉醒期'
  category: string; // e.g., 'NT'
}

const STORAGE_KEY = 'personality_test_history';

export const saveTestResult = (result: Omit<TestResult, 'id' | 'date'>) => {
  try {
    const history = getTestHistory();
    const newResult: TestResult = {
      ...result,
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
    };
    
    // Add to beginning of array
    const newHistory = [newResult, ...history];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
    return newResult;
  } catch (error) {
    console.error('Failed to save test result:', error);
    return null;
  }
};

export const getTestHistory = (): TestResult[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to get test history:', error);
    return [];
  }
};

export const clearTestHistory = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear test history:', error);
  }
};
