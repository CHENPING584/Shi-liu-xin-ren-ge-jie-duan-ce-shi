import { PersonalityData, PERSONALITY_GROUPS } from './types';

const defaultRadar = [
  { label: "理性决策", value: 50, fullMark: 100 },
  { label: "自我接纳", value: 50, fullMark: 100 },
  { label: "情绪稳定", value: 50, fullMark: 100 },
  { label: "社会适应", value: 50, fullMark: 100 },
  { label: "人生格局", value: 50, fullMark: 100 },
];

const entpData: Partial<PersonalityData> = {
    level: "Low",
    levelTitle: "低阶",
    tags: ["发明家", "意识复苏", "自我博弈"],
    quote: "当才华遇上纪律，你的魔法才真正开始生效。",
    radar: [
      { label: "理性决策", value: 60, fullMark: 100 },
      { label: "自我接纳", value: 47, fullMark: 100 },
      { label: "情绪稳定", value: 60, fullMark: 100 },
      { label: "社会适应", value: 66, fullMark: 100 },
      { label: "人生格局", value: 66, fullMark: 100 },
    ],
    careers: ["风险投资", "产品经理", "脱口秀/主持", "市场营销"],
    soulmates: [
      { code: "INFJ", match: 99 },
      { code: "INTJ", match: 93 },
    ],
    sections: [
      {
        title: "天赋原力",
        content: "你是思想的魔术师，外向直觉 (Ne) 赋予了你无穷的脑洞。你善于从互不相关的事物中发现联系，挑战传统，打破常规。你的机智和幽默感极具感染力，是团队的创新引擎。"
      },
      {
        title: "潜在盲区",
        content: "你的兴趣点转移得太快。你享受头脑风暴的快感，却往往忽视了落地的艰辛。如果不加以控制，你可能会变成一个充满想法却难以产出成果的人，由于缺乏深耕而浪费了才华。"
      },
      {
        title: "进化行动清单",
        content: "",
        list: [
          "两分钟原则：任何能在2分钟内完成的事，立刻去做。",
          "肯定对方观点 (Yes, and...) 。",
          "建立每日微小惯例。"
        ]
      }
    ],
    diagnosis: {
      title: "当前阶段：低阶",
      content: "你正处于 低阶 的觉醒期。你开始厌倦了“三分钟热度”带来的挫败感。虽然灵感依然源源不断，但你意识到缺乏执行力 (Si) 正在成为你的短板。你正在学习如何在看似无聊的细节中坚持。",
      subContent: "当前核心困境：..."
    }
};

export const personalities: Record<string, PersonalityData> = {};

// Initialize with defaults from groups
PERSONALITY_GROUPS.forEach(group => {
  group.types.forEach(typeInfo => {
    personalities[typeInfo.code] = {
      code: typeInfo.code,
      name: typeInfo.name,
      level: "Low",
      levelTitle: "初始",
      tags: [typeInfo.name, group.name.split(' ')[0]], // simple tag generation
      quote: typeInfo.description,
      radar: defaultRadar,
      careers: ["待探索"],
      soulmates: [],
      sections: [
        {
          title: "性格特质",
          content: typeInfo.description
        }
      ],
      diagnosis: {
        title: "当前状态",
        content: "保持探索，发现更多可能。"
      }
    };
  });
});

// Override with specific detailed data
if (personalities['ENTP']) {
  Object.assign(personalities['ENTP'], entpData);
}

export const getPersonalityData = (type: string): PersonalityData => {
  return personalities[type] || personalities['ENTP'];
};
