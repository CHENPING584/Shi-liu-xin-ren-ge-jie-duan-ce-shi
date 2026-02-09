export interface Theme {
  primary: string;
  secondary: string;
  gradientFrom: string;
  gradientTo: string;
  accent: string;
  bgLight: string;
  text: string;
}

export const CATEGORY_THEMES: Record<string, Theme> = {
  NT: {
    primary: '#5B4DFF', // High saturation Blue-Purple
    secondary: '#4538C2',
    gradientFrom: '#6B5EFE',
    gradientTo: '#3F32A3',
    accent: '#8278FF',
    bgLight: '#F0F2FF',
    text: '#322B8C'
  },
  NF: {
    primary: '#4A90E2',
    secondary: '#357ABD',
    gradientFrom: '#4A90E2',
    gradientTo: '#2E6DA4',
    accent: '#63B3ED',
    bgLight: '#EBF8FF', // Blue-50 ish
    text: '#2C5282'
  },
  SJ: {
    primary: '#E0A800',
    secondary: '#C69500',
    gradientFrom: '#E0A800',
    gradientTo: '#B7791F',
    accent: '#F6E05E',
    bgLight: '#FFFFF0', // Yellow-50 ish
    text: '#975A16'
  },
  SP: {
    primary: '#D84315',
    secondary: '#BF360C',
    gradientFrom: '#D84315',
    gradientTo: '#A63600',
    accent: '#FC8181',
    bgLight: '#FFF5F5', // Red-50 ish
    text: '#9B2C2C'
  }
};

export const getTheme = (category: string = 'NT'): Theme => {
  return CATEGORY_THEMES[category] || CATEGORY_THEMES['NT'];
};
