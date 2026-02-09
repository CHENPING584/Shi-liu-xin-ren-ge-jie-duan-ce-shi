export interface DiagnosisData {
  title: string; // e.g., 虚空的立法者
  prototype: string; // 灵魂原型
  quote: string; // 金句
  radar: {
    label: string;
    value: number;
    fullMark: number;
  }[];
  compass: {
    talents: string[];
    soulmates: string[];
  };
  deconstruction: {
    force: { name: string; desc: string }; // 天赋原力
    blindspot: { name: string; desc: string }; // 潜在盲区
  };
  social: {
    persona: string; // 社交面具
    reality: string; // 真实面目
  };
  shadow: string; // 阴影人格
  warning: string; // 相处禁忌
  status: {
    name: string;
    desc: string;
  };
  evolution: string[]; // 进化清单
}

export const NT_AWAKENING_DIAGNOSIS: Record<string, DiagnosisData> = {
  INTJ: {
    title: "虚空的立法者",
    prototype: "隐秘堡垒 (The Hidden Fortress)",
    quote: "你的计划完美无缺，除了“人类”这个充满Bug的变量。",
    radar: [
      { label: "理性", value: 95, fullMark: 100 },
      { label: "格局", value: 90, fullMark: 100 },
      { label: "接纳", value: 40, fullMark: 100 },
      { label: "适应", value: 20, fullMark: 100 },
      { label: "情绪", value: 50, fullMark: 100 }
    ],
    compass: {
      talents: ["系统架构", "战略幕僚", "科幻创作"],
      soulmates: ["ENFP (只有这只疯狗能撞开你的门)"]
    },
    deconstruction: {
      force: { name: "天赋原力 (Ni)", desc: "上帝视角，能一眼看穿系统的终局。" },
      blindspot: { name: "潜在盲区 (Se)", desc: "感官屏蔽。活在未来，现实生活能力几乎为零，行动力被完美主义锁死。" }
    },
    social: {
      persona: "冷漠的高智商机器",
      reality: "渴望被理解的幼稚鬼，内心藏着一个柔软的理想国。"
    },
    shadow: "暴饮暴食或感官纵欲 (Se Grip)。压力下会沉迷于低级快乐，或者强迫性地整理家务。",
    warning: "试图在逻辑上糊弄他，或者打断他的长远规划。",
    status: {
      name: "Ni-Fi Loop (偏执循环)",
      desc: "你切断了与外界的联系，认为全世界都针对你，陷入孤独的自恋与自我厌恶中。"
    },
    evolution: [
      "每天20分钟做家务(强制连接现实)。",
      "接受“完成比完美重要”。",
      "尝试向一个人表达“我需要你”。"
    ]
  },
  INTP: {
    title: "真理的解剖者",
    prototype: "悬浮的晶体 (The Floating Crystal)",
    quote: "你构建了宇宙模型，却忘了洗昨天的袜子。",
    radar: [
      { label: "理性", value: 98, fullMark: 100 },
      { label: "格局", value: 85, fullMark: 100 },
      { label: "接纳", value: 50, fullMark: 100 },
      { label: "适应", value: 15, fullMark: 100 },
      { label: "情绪", value: 60, fullMark: 100 }
    ],
    compass: {
      talents: ["算法工程", "哲学", "理论物理"],
      soulmates: ["ENTJ (带你落地)", "INFJ (懂你精神)"]
    },
    deconstruction: {
      force: { name: "天赋原力 (Ti)", desc: "你的大脑是手术刀，能拆解任何复杂的概念。" },
      blindspot: { name: "潜在盲区 (Fe)", desc: "情感虚无。视情绪为低效噪音，但压力下会爆发幼稚的情绪炸弹。" }
    },
    social: {
      persona: "随和的呆萌极客",
      reality: "傲慢的智力歧视者，内心在给每个人的智商打分。",
    },
    shadow: "情绪大爆发 (Fe Grip)。平时没脾气，一爆发就歇斯底里，像个委屈的巨婴。",
    warning: "强迫他参与无意义的社交寒暄，或者限制他的思维自由。",
    status: {
      name: "Ti-Si Loop (分析瘫痪)",
      desc: "害怕未知的失败，用过去经验吓唬自己，想了一万种可能，一步都没动。"
    },
    evolution: [
      "3秒法则：有想法3秒内做动作。",
      "列出生活琐事清单并划掉。",
      "承认自己也有情绪。"
    ]
  },
  ENTJ: {
    title: "权力的执剑人",
    prototype: "通天巨塔 (The Tower)",
    quote: "效率不是衡量生命的唯一单位，虽然你很难承认。",
    radar: [
      { label: "理性", value: 95, fullMark: 100 },
      { label: "格局", value: 80, fullMark: 100 },
      { label: "接纳", value: 60, fullMark: 100 },
      { label: "适应", value: 70, fullMark: 100 },
      { label: "情绪", value: 40, fullMark: 100 }
    ],
    compass: {
      talents: ["企业统帅", "资本运作", "政治领袖"],
      soulmates: ["INTP (最强智囊)", "INFP (让你柔软)"]
    },
    deconstruction: {
      force: { name: "天赋原力 (Te)", desc: "天生元帅，拥有极强的现实扭曲力场。" },
      blindspot: { name: "潜在盲区 (Fi)", desc: "情感暴君。为了效率可以碾压一切感受，最后发现自己众叛亲离。" }
    },
    social: {
      persona: "霸道的独裁者",
      reality: "忠诚的守护者。只要你证明了能力，他会为你挡下所有子弹。",
    },
    shadow: "极度敏感 (Fi Grip)。觉得自己一无是处，没人爱，陷入深刻的自我怀疑。",
    warning: "公开质疑他的能力，或者在他面前表现得拖泥带水。",
    status: {
      name: "Te-Se Loop (暴躁推土机)",
      desc: "为了掩饰内心的空虚，你疯狂行动，追求即时满足，变得鲁莽且极具攻击性。"
    },
    evolution: [
      "每天花10分钟冥想（什么都不做）。",
      "练习倾听：对方说完前不要打断。",
      "承认“我不懂”不是弱点。"
    ]
  },
  ENTP: {
    title: "混乱的魔术师",
    prototype: "疯狂实验室 (The Mad Lab)",
    quote: "无聊比死亡更可怕。",
    radar: [
      { label: "理性", value: 85, fullMark: 100 },
      { label: "格局", value: 95, fullMark: 100 },
      { label: "接纳", value: 60, fullMark: 100 },
      { label: "适应", value: 80, fullMark: 100 },
      { label: "情绪", value: 50, fullMark: 100 }
    ],
    compass: {
      talents: ["连续创业者", "脱口秀", "律师"],
      soulmates: ["INFJ (只有他能让你闭嘴)", "INTJ"]
    },
    deconstruction: {
      force: { name: "天赋原力 (Ne)", desc: "脑洞无限。你能看见一万种可能性，是天生的创新引擎。" },
      blindspot: { name: "潜在盲区 (Si)", desc: "细节黑洞。你讨厌重复和细节，经常虎头蛇尾，承诺多兑现少。" }
    },
    social: {
      persona: "幽默的乐子人",
      reality: "冷血的辩论家。为了验证观点，你可以站在任何立场，毫不在乎他人感受。",
    },
    shadow: "强迫症发作 (Si Grip)。过度关注身体细节，疑神疑鬼，变得极度保守和挑剔。",
    warning: "束缚他，让他做重复枯燥的工作，或者不回应他的梗。",
    status: {
      name: "Ne-Fe Loop (讨好型小丑)",
      desc: "为获关注抛出惊人言论，甚至牺牲逻辑迎合气氛，内心空虚。"
    },
    evolution: [
      "1、Yes, And：练习肯定。",
      "2、两分钟原则：立刻做。",
      "3、建立每日微小习惯。"
    ]
  }
};
