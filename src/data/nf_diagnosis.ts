import { DiagnosisData } from './nt_diagnosis';

export const NF_AWAKENING_DIAGNOSIS: Record<string, DiagnosisData> = {
  INFJ: {
    title: "悲悯的先知",
    prototype: "深不见底的湖 (The Deep Lake)",
    quote: "你无法拯救世界，如果你连自己都照顾不好。",
    radar: [
      { label: "理性决策", value: 50, fullMark: 100 },
      { label: "人生格局", value: 95, fullMark: 100 },
      { label: "自我接纳", value: 40, fullMark: 100 },
      { label: "社会适应", value: 75, fullMark: 100 },
      { label: "情绪稳定", value: 30, fullMark: 100 }
    ],
    compass: {
      talents: ["心理咨询", "灵性写作", "幕后导师"],
      soulmates: ["ENTP (互相激发)", "ENFP"]
    },
    deconstruction: {
      force: {
        name: "天赋原力 (Ni)",
        desc: "你是灵魂的X光机，无需言语就能洞察他人的痛苦与本质。"
      },
      blindspot: {
        name: "潜在盲区 (Se)",
        desc: "肉体断联。你过度吸收他人的情绪垃圾，导致身心俱疲，活在精神世界里，像个幽灵。"
      }
    },
    social: {
      persona: "温柔的倾听者",
      reality: "绝情的审判官。你的温柔有边界，一旦越界，Door Slam 比谁都快。"
    },
    shadow: "感官纵欲 (Se Grip)。压力下会疯狂购物、暴食或沉迷声色，完全变了一个人。",
    warning: "欺骗他（他能看穿），或者践踏他的价值观。",
    status: {
      name: "Ni-Ti Loop (冷血避世)",
      desc: "因为对他人的失望，你关闭了情感通道，躲在逻辑的堡垒里批判世界，变得愤世嫉俗。"
    },
    evolution: [
      "Door Slam警告：不要等到忍无可忍才突然断联，学会在平时建立边界。",
      "养植物或做饭(落地生活)。",
      "停止读心，不要预设别人的恶意。"
    ]
  },
  INFP: {
    title: "破碎的治愈者",
    prototype: "雨后的水洼 (The Puddle reflecting Sky)",
    quote: "世界不欠你一份理解，你的才华需要现实的骨架。",
    radar: [
      { label: "理性决策", value: 20, fullMark: 100 },
      { label: "人生格局", value: 85, fullMark: 100 },
      { label: "自我接纳", value: 90, fullMark: 100 },
      { label: "社会适应", value: 30, fullMark: 100 },
      { label: "情绪稳定", value: 25, fullMark: 100 }
    ],
    compass: {
      talents: ["艺术创作", "独立撰稿", "疗愈师"],
      soulmates: ["ENFJ (守护者)", "ENTJ (霸道总裁文照进现实)"]
    },
    deconstruction: {
      force: {
        name: "天赋原力 (Fi)",
        desc: "你拥有最纯净的内核，对美、善、真有着极致的感知力。"
      },
      blindspot: {
        name: "潜在盲区 (Te)",
        desc: "执行力黑洞。你有无数美好的蓝图，但极度缺乏条理。面对批评，你会立刻开启防御模式。"
      }
    },
    social: {
      persona: "柔弱的小白兔",
      reality: "固执的道德卫士。平时很好说话，一旦触及原则，比谁都头铁。"
    },
    shadow: "逻辑暴君 (Te Grip)。平时温和，压力下变得尖酸刻薄，攻击所有人的逻辑漏洞。",
    warning: "贬低他的情感，或者告诉他“由于现实原因你必须妥协”。",
    status: {
      name: "Fi-Si Loop (反刍痛苦)",
      desc: "你沉浸在过去的创伤和失败中无法自拔，把自己锁在房间里，一遍遍播放悲伤的电影。"
    },
    evolution: [
      "清单管理：每天列出3件必须做的小事，做完划掉。",
      "课题分离：别人的评价≠你的价值。",
      "不管完不完美，先发布你的作品。"
    ]
  },
  ENFJ: {
    title: "燃烧的太阳",
    prototype: "阳光下的海浪 (The Sunlit Wave)",
    quote: "有时候，让别人失望是一种必要的勇气。",
    radar: [
      { label: "理性决策", value: 40, fullMark: 100 },
      { label: "人生格局", value: 70, fullMark: 100 },
      { label: "自我接纳", value: 50, fullMark: 100 },
      { label: "社会适应", value: 95, fullMark: 100 },
      { label: "情绪稳定", value: 50, fullMark: 100 }
    ],
    compass: {
      talents: ["社群领袖", "演说家", "教育家"],
      soulmates: ["INFP (需要指引)", "ISFP"]
    },
    deconstruction: {
      force: {
        name: "天赋原力 (Fe)",
        desc: "你是天生的教主，能瞬间点燃团队的热情，让每个人都觉得自己被看见。"
      },
      blindspot: {
        name: "潜在盲区 (Ti)",
        desc: "自我迷失。你太在意“大家怎么看”，为了维护和谐，你经常牺牲真理，甚至弄丢了自己。"
      }
    },
    social: {
      persona: "完美的救世主",
      reality: "操纵情感的教主。你太懂人心，有时会为了“为了你好”而隐形控制他人。"
    },
    shadow: "冷酷批判 (Ti Grip)。压力下会变得冷漠、多疑，认为所有人都没用，只有自己是对的。",
    warning: "忽视他的付出，或者让他感到自己被群体排斥。",
    status: {
      name: "Fe-Se Loop (肤浅社交)",
      desc: "你为了获得关注和认可，疯狂参加社交活动，变得浮夸、虚荣，内心却感到深深的孤独。"
    },
    evolution: [
      "强制独处：每周至少半天完全断网。",
      "练习表达反对意见，相信真正的关系经得起冲突。",
      "尝试对一个不合理的要求冷血地说“我不在乎”。"
    ]
  },
  ENFP: {
    title: "追光的彼得潘",
    prototype: "永恒的烟花 (The Eternal Firework)",
    quote: "别让任何人熄灭你眼里的光。",
    radar: [
      { label: "理性决策", value: 30, fullMark: 100 },
      { label: "人生格局", value: 90, fullMark: 100 },
      { label: "自我接纳", value: 85, fullMark: 100 },
      { label: "社会适应", value: 80, fullMark: 100 },
      { label: "情绪稳定", value: 40, fullMark: 100 }
    ],
    compass: {
      talents: ["创意总监", "记者", "环球旅行家"],
      soulmates: ["INTJ (你的锚)", "INFJ"]
    },
    deconstruction: {
      force: {
        name: "天赋原力 (Ne)",
        desc: "你是可能性的探险家。只要是你感兴趣的事，你就有无穷的能量去感染全世界。"
      },
      blindspot: {
        name: "潜在盲区 (Si)",
        desc: "始乱终弃。你热爱开始，痛恨结束。你的承诺像蒲公英一样多，但也一样轻。"
      }
    },
    social: {
      persona: "快乐的小狗",
      reality: "极度抑郁的哲学家。外表有多疯，内心就有多深沉，经常深夜emo。"
    },
    shadow: "斤斤计较 (Si Grip)。压力下变得极度保守、强迫症，纠结于无关紧要的细节。" ,
    warning: "给他设限，或者对他进行冷暴力。",
    status: {
      name: "Ne-Te Loop (忙碌的陀螺)",
      desc: "你为了逃避内心的空虚，疯狂接任务、参加活动，看起来很忙，其实内心荒芜。"
    },
    evolution: [
      "一次只做一件事，坚持完再开下一个。",
      "允许自己悲伤，不要强颜欢笑。",
      "定期清理你的承诺清单。"
    ]
  }
};
