import { DiagnosisData } from './nt_diagnosis';

export const SP_AWAKENING_DIAGNOSIS: Record<string, DiagnosisData> = {
  ISTP: {
    title: "冷酷的独狼",
    prototype: "锻造炉 (The Forge)",
    quote: "哪怕是机器，也需要润滑油才能运转。",
    radar: [
      { label: "理性决策", value: 90, fullMark: 100 },
      { label: "人生格局", value: 30, fullMark: 100 },
      { label: "自我接纳", value: 65, fullMark: 100 },
      { label: "社会适应", value: 40, fullMark: 100 },
      { label: "情绪稳定", value: 70, fullMark: 100 }
    ],
    compass: { talents: ["机械工程", "外科手术", "特工"], soulmates: ["ESTJ (给你秩序)", "ESFJ"] },
    deconstruction: {
      force: { name: "天赋原力 (Ti)", desc: "你是冷静的解题高手。你在危机时刻最冷静，用最省力的方式解决问题。" },
      blindspot: { name: "潜在盲区 (Fe)", desc: "社交障碍。你不知道如何处理复杂的情感纠葛，遇到情绪问题只想逃跑。" }
    },
    social: {
      persona: "沉默的手艺人",
      reality: "狂野的冒险家。平时是省电模式，一旦遇到感兴趣的事，比谁都疯。"
    },
    shadow: "情绪失控 (Fe Grip)。平时冷酷，压力下会变得情绪化、抱怨，甚至大吵大闹。",
    warning: "情绪勒索，问他“你到底在想什么”。",
    status: { name: "Ti-Ni Loop (阴谋论者)", desc: "你切断了与现实的联系，在脑子里构建各种负面的未来推测，变得愤世嫉俗、多疑。" },
    evolution: ["承诺管理：答应的事必须按时做到。", "每周主动发起一次不带目的的聊天。", "做事前告诉别人你为什么要这么做（解释动机）。"]
  },
  ISFP: {
    title: "自由的猫",
    prototype: "壁炉火光 (The Hearth Fire)",
    quote: "才华如果不能兑现为作品，就只是自我感动的幻觉。",
    radar: [
      { label: "理性决策", value: 20, fullMark: 100 },
      { label: "人生格局", value: 40, fullMark: 100 },
      { label: "自我接纳", value: 90, fullMark: 100 },
      { label: "社会适应", value: 30, fullMark: 100 },
      { label: "情绪稳定", value: 40, fullMark: 100 }
    ],
    compass: { talents: ["珠宝设计", "主厨", "时尚"], soulmates: ["ESTJ (管住你)", "ENFJ"] },
    deconstruction: {
      force: { name: "天赋原力 (Fi)", desc: "你拥有独特的审美和强烈的个人风格。你活在当下，对美有极高的敏感度。" },
      blindspot: { name: "潜在盲区 (Te)", desc: "懒散无序。做事全凭心情。遇到困难容易躺平，觉得自己是受害者。" }
    },
    social: {
      persona: "佛系的艺术家",
      reality: "暴躁的自我中心者。平时很随和，但如果有人干涉你的自由，你会瞬间炸毛。"
    },
    shadow: "专横独断 (Te Grip)。平时优柔寡断，压力下变得极其挑剔、武断，只看重结果。",
    warning: "强迫他做决定，或者批评他的审美。",
    status: { name: "Fi-Ni Loop (被害妄想)", desc: "你过度解读别人的意图，觉得自己不被理解，被全世界孤立。" },
    evolution: ["制定一个3个月的小目标，拆解执行。", "接受批评：听到反馈时，默念“他在说事，不是攻击我”。", "少想多做，用作品说话。"]
  },
  ESTP: {
    title: "迅猛的猎豹",
    prototype: "森林大火 (The Wildfire)",
    quote: "停下来思考不是认怂，而是为了跳得更远。",
    radar: [
      { label: "理性决策", value: 80, fullMark: 100 },
      { label: "人生格局", value: 30, fullMark: 100 },
      { label: "自我接纳", value: 70, fullMark: 100 },
      { label: "社会适应", value: 85, fullMark: 100 },
      { label: "情绪稳定", value: 60, fullMark: 100 }
    ],
    compass: { talents: ["销售冠军", "危机公关", "极限运动"], soulmates: ["ISFJ (你的港湾)", "ISTJ"] },
    deconstruction: {
      force: { name: "天赋原力 (Se)", desc: "你是行动的巨人，极具魅力。你活在此时此刻，哪里有刺激，哪里就有你。" },
      blindspot: { name: "潜在盲区 (Ni)", desc: "缺乏远见。你只顾眼前的快乐和利益，不计后果，容易陷入赌徒心态。" }
    },
    social: {
      persona: "仗义的大哥",
      reality: "唯利是图的商人。你很现实，所有的关系其实都在心里暗暗算过账。"
    },
    shadow: "偏执幻想 (Ni Grip)。平时乐天，压力下会觉得未来一片黑暗，陷入宿命论。",
    warning: "把他关在笼子里，或者跟他讲大道理。",
    status: { name: "Se-Fe Loop (表演型人格)", desc: "为了获得掌声，你变得浮夸、甚至通过操纵他人来维持地位。" },
    evolution: ["延迟满足：推迟购买欲望，强制存钱。", "做决定前问“一年后这会有什么影响？”", "读长篇内容，锻炼耐心。"]
  },
  ESFP: {
    title: "耀眼的孔雀",
    prototype: "聚光灯 (The Spotlight)",
    quote: "青春饭好吃，但不够吃一辈子。",
    radar: [
      { label: "理性决策", value: 30, fullMark: 100 },
      { label: "人生格局", value: 20, fullMark: 100 },
      { label: "自我接纳", value: 60, fullMark: 100 },
      { label: "社会适应", value: 90, fullMark: 100 },
      { label: "情绪稳定", value: 45, fullMark: 100 }
    ],
    compass: { talents: ["娱乐主播", "幼教", "活动主持"], soulmates: ["ISTJ (给你安全感)", "ISFJ"] },
    deconstruction: {
      force: { name: "天赋原力 (Se)", desc: "你是天生的明星。你的快乐极具感染力，能让最无聊的聚会变得生动。" },
      blindspot: { name: "潜在盲区 (Ni)", desc: "逃避深度。你害怕严肃的话题，害怕思考未来。一旦快乐消失，你就会恐慌。" }
    },
    social: {
      persona: "派对之王",
      reality: "害怕孤独的空心人。你不能停下来，因为一停下来就要面对内心的空虚。"
    },
    shadow: "阴郁多疑 (Ni Grip)。平时开朗，压力下会变得疑神疑鬼，觉得所有人都在针对你。",
    warning: "忽视他，或者让他感到无聊。",
    status: { name: "Se-Te Loop (强制快乐)", desc: "你即使精疲力竭也要强行社交，通过消费来麻痹自己，变得暴躁。" },
    evolution: ["学会一个人待着不看手机。", "开始记账，控制冲动消费。", "找朋友聊一次关于“未来”的话题。"]
  }
};
