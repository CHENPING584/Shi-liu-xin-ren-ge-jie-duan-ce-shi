import { DiagnosisData } from './nt_diagnosis';

export const SJ_AWAKENING_DIAGNOSIS: Record<string, DiagnosisData> = {
  ISTJ: {
    title: "沉默的磐石",
    prototype: "化石 (The Fossil)",
    quote: "规则是用来服务人的，不是用来囚禁人的。",
    radar: [
      { label: "理性决策", value: 85, fullMark: 100 },
      { label: "人生格局", value: 20, fullMark: 100 },
      { label: "自我接纳", value: 60, fullMark: 100 },
      { label: "社会适应", value: 90, fullMark: 100 },
      { label: "情绪稳定", value: 80, fullMark: 100 }
    ],
    compass: {
      talents: ["审计", "财务", "后端开发"],
      soulmates: ["ESFP (带你玩)", "ESTP"]
    },
    deconstruction: {
      force: { name: "天赋原力 (Si)", desc: "你是社会的基石，拥有最强的责任感和记忆力。只要交给你，就绝对不会出错。" },
      blindspot: { name: "潜在盲区 (Ne)", desc: "灾难化思维。你极度抗拒改变，一旦有突发状况，你就会想象出最坏的结果，变得僵化、冷漠。" }
    },
    social: {
      persona: "刻板的公务员",
      reality: "最可靠的战友。不善言辞，但会把所有细节都默默替你打理好。"
    },
    shadow: "灾难化思维 (Ne Grip)。平时沉稳，压力下会变得歇斯底里，觉得世界要毁灭了。",
    warning: "突然改变计划，或者不遵守约定。",
    status: {
      name: "Si-Fi Loop (自闭固执)",
      desc: "你觉得自己被误解，不仅不解释，还固执地坚持过时的流程，内心积攒了大量的委屈。"
    },
    evolution: [
      "每天尝试走一条新路回家，打破惯性。",
      "口头表扬一个人的优点。",
      "对一个新的提议说“试试看”。"
    ]
  },
  ISFJ: {
    title: "温暖的港湾",
    prototype: "灯塔 (The Lighthouse)",
    quote: "你的善良必须带点锋芒，否则就是软弱。",
    radar: [
      { label: "理性决策", value: 40, fullMark: 100 },
      { label: "人生格局", value: 30, fullMark: 100 },
      { label: "自我接纳", value: 50, fullMark: 100 },
      { label: "社会适应", value: 95, fullMark: 100 },
      { label: "情绪稳定", value: 60, fullMark: 100 }
    ],
    compass: {
      talents: ["行政", "护理", "幼儿教育"],
      soulmates: ["ESTP (保护你)", "ESFP"]
    },
    deconstruction: {
      force: { name: "天赋原力 (Si)", desc: "你是最温暖的守护者，记得所有人的喜好。你默默付出，维持着团队的运转。" },
      blindspot: { name: "潜在盲区 (Ne)", desc: "过度焦虑。你总是担心“如果出错了怎么办”，很难拒绝别人，导致自己过劳。" }
    },
    social: {
      persona: "卑微的老好人",
      reality: "记仇的账房先生。你的付出都在暗中标好了价格，一旦失望积攒够了，你会彻底黑化。"
    },
    shadow: "灾难化思维 (Ne Grip)。压力下会脑补出无数可怕的未来，变得极度悲观和神经质。",
    warning: "把他的付出当理所当然，或者批评他的品味。",
    status: {
      name: "Si-Ti Loop (钻牛角尖)",
      desc: "你过度分析过去的细节，试图找出逻辑漏洞来证明全是自己的错，陷入深深的自责。"
    },
    evolution: [
      "优先自己：每天先做一件让自己开心的事。",
      "直接询问，不要靠猜别人的心思。",
      "学会求助，告诉别人“我搞不定”。"
    ]
  },
  ESTJ: {
    title: "秩序的城墙",
    prototype: "行道树 (The Ordered Trees)",
    quote: "你可以是对的，但这不代表别人就得听你的。",
    radar: [
      { label: "理性决策", value: 98, fullMark: 100 },
      { label: "人生格局", value: 40, fullMark: 100 },
      { label: "自我接纳", value: 70, fullMark: 100 },
      { label: "社会适应", value: 80, fullMark: 100 },
      { label: "情绪稳定", value: 60, fullMark: 100 }
    ],
    compass: {
      talents: ["项目管理", "执法", "工厂厂长"],
      soulmates: ["ISFP (让你柔软)", "ISTP"]
    },
    deconstruction: {
      force: { name: "天赋原力 (Te)", desc: "你是天生的管理者，效率至上。你维护传统和规则，是混乱局面的终结者。" },
      blindspot: { name: "潜在盲区 (Fi)", desc: "情感盲区。你很难理解他人的情绪，觉得那都是矫情。你的直言不讳常常在无意中重伤他人。" }
    },
    social: {
      persona: "严厉的教导主任",
      reality: "脆弱的渴望认可者。所有的强硬都是为了掩饰内心对“做不到”的恐惧。"
    },
    shadow: "情绪崩溃 (Fi Grip)。平时铁面无私，压力下会觉得自己没人爱，哭得像个孩子。",
    warning: "挑战他的权威，或者不守时。",
    status: {
      name: "Te-Ne Loop (焦虑扩张)",
      desc: "为了掩饰不安，你疯狂制定不切实际的“创新”计划，把下属折磨得够呛。"
    },
    evolution: [
      "放权练习：这一周内，忍住不纠正别人的一个小错误。",
      "沟通前先问“你现在感觉怎么样？”",
      "强制自己休息，不做任何产出性的事。"
    ]
  },
  ESFJ: {
    title: "丰盛的晚宴",
    prototype: "藤蔓 (The Vine)",
    quote: "没有原则的好人，往往会成为平庸之恶的帮凶。",
    radar: [
      { label: "理性决策", value: 30, fullMark: 100 },
      { label: "人生格局", value: 40, fullMark: 100 },
      { label: "自我接纳", value: 45, fullMark: 100 },
      { label: "社会适应", value: 98, fullMark: 100 },
      { label: "情绪稳定", value: 50, fullMark: 100 }
    ],
    compass: {
      talents: ["公关", "活动统筹", "客户服务"],
      soulmates: ["ISFJ (互相照顾)", "INTP"]
    },
    deconstruction: {
      force: { name: "天赋原力 (Fe)", desc: "你是天生的东道主。你致力于创造和谐的氛围，确保每个人都感到舒适。" },
      blindspot: { name: "潜在盲区 (Ti)", desc: "逻辑依赖。你过于依赖他人的反馈来定义自己，缺乏独立的逻辑判断。" }
    },
    social: {
      persona: "热情的交际花",
      reality: "控制欲极强的管家。我对你好，所以你也必须对我好，否则就是背叛。"
    },
    shadow: "冷漠批判 (Ti Grip)。压力下会变得尖酸刻薄，攻击别人的智商，认为周围人都是蠢货。",
    warning: "在公开场合让他丢面子，或者拒绝他的好意。",
    status: {
      name: "Fe-Ne Loop (八卦焦虑)",
      desc: "你过度关注外部的各种可能性和评价，变得像无头苍蝇一样讨好所有人，失去了自我。"
    },
    evolution: [
      "停止讨好：每周拒绝一次别人的请求。",
      "学会独处：每天给自己1小时不被打扰的时间。",
      "建立逻辑边界：做决定前问自己“这合逻辑吗”而不是“大家会高兴吗”。"
    ]
  }
};
