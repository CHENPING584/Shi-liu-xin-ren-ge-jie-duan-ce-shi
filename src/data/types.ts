export interface PersonalityData {
  code: string;
  name: string; // Added name (e.g. "建筑师")
  level: string;
  levelTitle: string; // e.g. "低阶"
  tags: string[];
  quote: string;
  radar: {
    label: string;
    value: number; // 0-100
    fullMark: number;
  }[];
  careers: string[];
  soulmates: {
    code: string;
    match: number;
  }[];
  sections: {
    title: string;
    icon?: string;
    content: string;
    list?: string[];
  }[];
  diagnosis: {
    title: string;
    content: string;
    subContent?: string;
  };
}

export interface PersonalityGroup {
  name: string;
  subtitle: string;
  types: {
    code: string;
    name: string;
    description: string;
  }[];
}

export const PERSONALITY_GROUPS: PersonalityGroup[] = [
  {
    name: "分析家",
    subtitle: "Analysts (NT)",
    types: [
      { code: "INTJ", name: "建筑师", description: "想象力丰富、战略性强的思想家。" },
      { code: "INTP", name: "逻辑学家", description: "具有创造力的发明家，对知识有无穷渴望。" },
      { code: "ENTJ", name: "指挥官", description: "大胆、富有想象力且意志强大的领导者。" },
      { code: "ENTP", name: "辩论家", description: "聪明好奇的思想者，不畏挑战。" },
    ]
  },
  {
    name: "外交家",
    subtitle: "Diplomats (NF)",
    types: [
      { code: "INFJ", name: "提倡者", description: "安静而神秘，同时也是鼓舞人心且不倦的理想主义者。" },
      { code: "INFP", name: "调解者", description: "诗意、善良且利他的人，总是渴望帮助他人。" },
      { code: "ENFJ", name: "主人公", description: "富有魅力、鼓舞人心的领导者。" },
      { code: "ENFP", name: "竞选者", description: "热情、富有创造力且自由自在的灵魂。" },
    ]
  },
  {
    name: "守护者",
    subtitle: "Sentinels (SJ)",
    types: [
      { code: "ISTJ", name: "物流师", description: "务实且注重事实，可靠性不容置疑。" },
      { code: "ISFJ", name: "守卫者", description: "非常专注且温暖的守护者，时刻准备保护爱的人。" },
      { code: "ESTJ", name: "总经理", description: "出色的管理者，在管理事物或人方面无与伦比。" },
      { code: "ESFJ", name: "执政官", description: "极具同情心、合群且受欢迎的人。" },
    ]
  },
  {
    name: "探险家",
    subtitle: "Explorers (SP)",
    types: [
      { code: "ISTP", name: "鉴赏家", description: "大胆且实际的实验家，擅长使用各类工具。" },
      { code: "ISFP", name: "探险家", description: "灵活、魅力十足的艺术家，随时准备探索新事物。" },
      { code: "ESTP", name: "企业家", description: "聪明、精力充沛且感知的实干家，享受冒险。" },
      { code: "ESFP", name: "表演者", description: "自发的、精力充沛且热情的表演者。" },
    ]
  }
];

export const PERSONALITY_TYPES = PERSONALITY_GROUPS.flatMap(g => g.types.map(t => t.code));
