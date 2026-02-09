import { Question } from './questions';

export const questionsNF: Question[] = [
  // --- Group A: Type Locking (1-20) ---
  {
    id: 1,
    text: "你的灵魂深处有一片水域，它是？",
    options: [
      { label: "A", text: "阳光下的海浪：波光粼粼，拍打着每一个靠近的人，温暖而热烈。", typeScores: { ENFJ: 1, ENFP: 1 } },
      { label: "B", text: "深不见底的湖：表面静如止水，底部却藏着古老的秘密和巨大的生物。", typeScores: { INFJ: 2 } },
      { label: "C", text: "雨后的水洼：倒映着整个天空，虽然小，但里面有一个完整的世界。", typeScores: { INFP: 2 } },
      { label: "D", text: "流动的溪流：清澈见底，唱着歌流向远方，滋养沿途的花草。", typeScores: { ENFP: 2 } }
    ]
  },
  {
    id: 2,
    text: "看到别人流血（受伤/痛苦），你的第一感觉？",
    options: [
      { label: "A", text: "幻痛：我的身体同一部位也开始隐隐作痛，甚至比他更痛。", typeScores: { INFJ: 1, INFP: 1, ENFJ: 1, ENFP: 1 } },
      { label: "B", text: "使命：我是唯一的疗愈者，这是上天给我的任务。", typeScores: { ENFJ: 2 } },
      { label: "C", text: "愤怒：是谁干的？这个世界为什么如此残忍？", typeScores: { INFP: 2 } },
      { label: "D", text: "逃避：太痛了，我不敢看，我必须躲起来保护自己。", typeScores: { INFP: 1 } }
    ]
  },
  {
    id: 3,
    text: "你是一面镜子，你照出的是？",
    options: [
      { label: "A", text: "美颜滤镜：我照出你潜能中最好的样子，让你相信那就是你。", typeScores: { ENFJ: 2 } },
      { label: "B", text: "哈哈镜：我照出你的荒谬和有趣，让你发笑。", typeScores: { ENFP: 2 } },
      { label: "C", text: "X光片：我直接照穿你的皮囊，看到你的骨头和灵魂。", typeScores: { INFJ: 2 } },
      { label: "D", text: "黑镜：我照出我自己，你只是我内心投射的一个影子。", typeScores: { INFP: 2 } }
    ]
  },
  {
    id: 4,
    text: "关于“拯救”？",
    options: [
      { label: "A", text: "普渡众生：我想造一艘大船，把所有人都带上岸。", typeScores: { ENFJ: 2 } },
      { label: "B", text: "点化：我只渡有缘人，能救一个是一个。", typeScores: { INFJ: 2 } },
      { label: "C", text: "殉道：如果必须牺牲我才能换来光明，我愿意。", typeScores: { INFJ: 1, INFP: 1, ENFJ: 1, ENFP: 1 } },
      { label: "D", text: "自救：连自己都救不了，谈何救人？", typeScores: { INFP: 2 } }
    ]
  },
  {
    id: 5,
    text: "你的社交能量像什么？",
    options: [
      { label: "A", text: "烟花：瞬间绽放，照亮夜空，吸引所有人抬头看。", typeScores: { ENFP: 2 } },
      { label: "B", text: "篝火：温暖、噼啪作响，大家围着我取暖。", typeScores: { ENFJ: 2 } },
      { label: "C", text: "月光：清冷、遥远，只在深夜慰藉孤独的人。", typeScores: { INFJ: 2 } },
      { label: "D", text: "萤火虫：微弱、闪烁，只在草丛里忽明忽暗。", typeScores: { INFP: 2 } }
    ]
  },
  {
    id: 6,
    text: "你最想拥有的魔法？",
    options: [
      { label: "A", text: "读心术：瞬间听懂所有人未说出口的话。", typeScores: { ENFJ: 1, INFJ: 1 } },
      { label: "B", text: "治愈术：手放在哪里，哪里的伤口就愈合。", typeScores: { INFP: 1, ENFJ: 1 } },
      { label: "C", text: "变形术：变成鸟、变成树，体验万物的视角。", typeScores: { ENFP: 2 } },
      { label: "D", text: "隐身术：在人群中消失，只做观察者。", typeScores: { INFJ: 2 } }
    ]
  },
  {
    id: 7,
    text: "面对“邪恶”？",
    options: [
      { label: "A", text: "感化：我相信他内心深处有良知，我要唤醒它。", typeScores: { ENFJ: 2 } },
      { label: "B", text: "理解：没有绝对的恶，只有受伤的灵魂。", typeScores: { INFJ: 2 } },
      { label: "C", text: "对抗：为了正义，为了保护弱者，我要战斗。", typeScores: { ENFP: 2 } },
      { label: "D", text: "悲悯：他是可悲的，是时代的产物。", typeScores: { INFP: 2 } }
    ]
  },
  {
    id: 8,
    text: "你的梦境通常是？",
    options: [
      { label: "A", text: "史诗：宏大的叙事，关于人类命运或世界末日。", typeScores: { INFJ: 2 } },
      { label: "B", text: "童话：会说话的动物，会飞的房子，奇幻色彩。", typeScores: { ENFP: 2 } },
      { label: "C", text: "情感碎片：强烈的悲伤或喜悦，醒来记得感觉但不记得情节。", typeScores: { INFP: 2 } },
      { label: "D", text: "预言：梦里的事，后来真的在现实中发生了。", typeScores: { ENFJ: 2 } }
    ]
  },
  {
    id: 9,
    text: "爱对你来说是？",
    options: [
      { label: "A", text: "融合：不再有你我之分，我们合二为一。", typeScores: { ENFJ: 1, INFJ: 1 } },
      { label: "B", text: "自由：两棵并排生长的树，根在地下交织，叶在云端相触。", typeScores: { ENFP: 2 } },
      { label: "C", text: "信仰：爱是唯一值得我为之生、为之死的东西。", typeScores: { INFJ: 1, INFP: 1, ENFJ: 1, ENFP: 1 } },
      { label: "D", text: "理解：你看穿了我的不堪，却依然拥抱我。", typeScores: { INFP: 2 } }
    ]
  },
  {
    id: 10,
    text: "当世界崩塌时，你会？",
    options: [
      { label: "A", text: "站在高处：发表演讲，告诉大家希望在哪里。", typeScores: { ENFJ: 2 } },
      { label: "B", text: "躲进洞穴：构建一个完美的精神避难所。", typeScores: { INFP: 2 } },
      { label: "C", text: "寻找同类：哪怕只有一个人懂我，我就不害怕。", typeScores: { INFJ: 2 } },
      { label: "D", text: "起舞：在废墟上跳舞，庆祝旧世界的毁灭和新世界的诞生。", typeScores: { ENFP: 2 } }
    ]
  },
  {
    id: 11,
    text: "你的房间（私密空间）是？",
    options: [
      { label: "A", text: "巢穴：堆满了我想象中的宝物，乱但温馨。", typeScores: { INFP: 2 } },
      { label: "B", text: "圣殿：极简、神圣，只有几件对我意义非凡的物品。", typeScores: { INFJ: 2 } },
      { label: "C", text: "派对现场：随时准备好迎接朋友，充满合照和纪念品。", typeScores: { ENFJ: 2 } },
      { label: "D", text: "盲盒：每天都在变，甚至墙纸都要经常换。", typeScores: { ENFP: 2 } }
    ]
  },
  {
    id: 12,
    text: "在人群中感到孤独时？",
    options: [
      { label: "A", text: "戴上面具：假装我很开心，不想破坏气氛。", typeScores: { ENFJ: 2 } },
      { label: "B", text: "灵魂出窍：肉体在这里，灵魂已经飞到外太空。", typeScores: { INFP: 2 } },
      { label: "C", text: "寻找眼神：试图找到那个同样孤独的人。", typeScores: { INFJ: 2 } },
      { label: "D", text: "制造混乱：搞点恶作剧或者讲个笑话来打破沉默。", typeScores: { ENFP: 2 } }
    ]
  },
  {
    id: 13,
    text: "你写的日记通常是？",
    options: [
      { label: "A", text: "情绪宣泄：全是“我感觉...”，字迹潦草。", typeScores: { INFP: 2 } },
      { label: "B", text: "未来信件：充满了对人类和命运的思考。", typeScores: { INFJ: 2 } },
      { label: "C", text: "脑洞合集：画满了涂鸦和奇怪的故事。", typeScores: { ENFP: 2 } },
      { label: "D", text: "感恩笔记：记录今天遇到的美好的人和事。", typeScores: { ENFJ: 2 } }
    ]
  },
  {
    id: 14,
    text: "被背叛后？",
    options: [
      { label: "A", text: "关门 (Door Slam)：彻底把你关在门外，永不原谅，像你从未存在过。", typeScores: { INFJ: 2 } },
      { label: "B", text: "心碎：在被窝里哭三天，觉得世界都不好了。", typeScores: { INFP: 2 } },
      { label: "C", text: "质问：为什么要这么对我？我对你那么好。", typeScores: { ENFJ: 2 } },
      { label: "D", text: "遗忘：难过一会儿，然后被新事物吸引走了。", typeScores: { ENFP: 2 } }
    ]
  },
  {
    id: 15,
    text: "你更像哪种艺术家？",
    options: [
      { label: "A", text: "诗人：用最精准的词刺痛人心。", typeScores: { INFP: 2 } },
      { label: "B", text: "演员：演什么像什么，体验千种人生。", typeScores: { ENFP: 2 } },
      { label: "C", text: "导演：安排所有人的位置，导出一出大戏。", typeScores: { ENFJ: 2 } },
      { label: "D", text: "先知：画出未来世界的毁灭与重生。", typeScores: { INFJ: 2 } }
    ]
  },
  {
    id: 16,
    text: "对于“物质/金钱”？",
    options: [
      { label: "A", text: "够用就行：它是维持我肉体存在的必要麻烦。", typeScores: { INFP: 2 } },
      { label: "B", text: "工具：用来实现我宏大愿景的资源。", typeScores: { ENFJ: 2 } },
      { label: "C", text: "玩具：钱就是拿来买快乐体验的。", typeScores: { ENFP: 2 } },
      { label: "D", text: "幻象：由于过于关注精神，经常忘记交水电费。", typeScores: { INFJ: 2 } }
    ]
  },
  {
    id: 17,
    text: "如果能穿越，你去？",
    options: [
      { label: "A", text: "乌托邦：一个没有痛苦的完美世界。", typeScores: { INFJ: 1, INFP: 1, ENFJ: 1, ENFP: 1 } },
      { label: "B", text: "奇幻大陆：有龙和魔法的世界。", typeScores: { ENFP: 2 } },
      { label: "C", text: "每个人心里：我想去看看别人的灵魂长什么样。", typeScores: { INFJ: 2 } },
      { label: "D", text: "过去：去弥补那些遗憾。", typeScores: { INFP: 2 } }
    ]
  },
  {
    id: 18,
    text: "你的眼泪？",
    options: [
      { label: "A", text: "珍珠：珍贵，只为值得的人流。", typeScores: { INFP: 2 } },
      { label: "B", text: "雨水：情绪来了就下，下完天就晴。", typeScores: { ENFP: 2 } },
      { label: "C", text: "河流：为了众生的苦难而流。", typeScores: { ENFJ: 2 } },
      { label: "D", text: "冰：很少流泪，因为痛到深处是无声的。", typeScores: { INFJ: 2 } }
    ]
  },
  {
    id: 19,
    text: "面对流浪猫？",
    options: [
      { label: "A", text: "带回家：不管能不能养，先救了再说。", typeScores: { ENFP: 2 } },
      { label: "B", text: "喂食：每天定点来喂，跟它说话。", typeScores: { ENFJ: 2 } },
      { label: "C", text: "编故事：想象它是被贬下凡的王子。", typeScores: { INFP: 2 } },
      { label: "D", text: "感应：盯着它的眼睛，感觉我们前世认识。", typeScores: { INFJ: 2 } }
    ]
  },
  {
    id: 20,
    text: "你的墓志铭？",
    options: [
      { label: "A", text: "“他爱过，也被爱过。”", typeScores: { ENFJ: 2 } },
      { label: "B", text: "“他终于醒了。”", typeScores: { INFJ: 2 } },
      { label: "C", text: "“去下一个星球探险了。”", typeScores: { ENFP: 2 } },
      { label: "D", text: "“一个真实的灵魂。”", typeScores: { INFP: 2 } }
    ]
  },
  // --- Group B: Level Assessment (21-30) ---
  {
    id: 21,
    text: "你内心的野兽（情绪控制力）？",
    options: [
      { label: "A", text: "失控的疯狗：经常咬伤别人，也咬伤自己。", levelScore: 2 },
      { label: "B", text: "笼中的困兽：我在压抑它，它在嘶吼，我很痛苦。", levelScore: 5 },
      { label: "C", text: "被驯化的狼：它听我的指挥，帮我捕猎，保护我。", levelScore: 8 },
      { label: "D", text: "神兽坐骑：它已化为我的力量源泉，我骑着它遨游天际。", levelScore: 10 }
    ]
  },
  {
    id: 22,
    text: "面对镜子里的自己（阴暗面接纳度）？",
    options: [
      { label: "A", text: "打碎镜子：我不看，那不是我，我是完美的。", levelScore: 2 },
      { label: "B", text: "厌恶注视：你怎么这么丑陋？这么软弱？我讨厌你。", levelScore: 5 },
      { label: "C", text: "擦拭镜子：我看到了污点，我正在试图接纳并清洗它。", levelScore: 8 },
      { label: "D", text: "与之对视：我爱我的光芒，也爱我的阴影，那使我完整。", levelScore: 10 }
    ]
  },
  {
    id: 23,
    text: "你的“壳”（防御机制）？",
    options: [
      { label: "A", text: "刺猬：谁靠近我扎谁，先下手为强。", levelScore: 2 },
      { label: "B", text: "乌龟：一有风吹草动就缩进去，死都不出来。", levelScore: 5 },
      { label: "C", text: "盾牌：我有防御，但我也知道什么时候该放下盾牌拥抱。", levelScore: 8 },
      { label: "D", text: "水：我没有壳，因为我至柔，刀枪不入，包容万物。", levelScore: 10 }
    ]
  },
  {
    id: 24,
    text: "面对命运的巨浪（抗逆力）？",
    options: [
      { label: "A", text: "溺水：大喊救命，怨天尤人，呛水沉底。", levelScore: 2 },
      { label: "B", text: "挣扎：拼命划水，精疲力竭，充满恐惧。", levelScore: 5 },
      { label: "C", text: "冲浪：调整姿态，站上浪尖，利用浪的力量前行。", levelScore: 8 },
      { label: "D", text: "化身大海：浪就是我，我就是浪，何来恐惧？", levelScore: 10 }
    ]
  },
  {
    id: 25,
    text: "你的孤独感（独处质量）？",
    options: [
      { label: "A", text: "黑洞：吞噬我，让我发疯，我必须抓个人来填补。", levelScore: 2 },
      { label: "B", text: "迷雾：让我在人群中也感到寒冷，迷失方向。", levelScore: 5 },
      { label: "C", text: "隐室：这是我充电的地方，虽然冷清但必要。", levelScore: 8 },
      { label: "D", text: "星空：我独自一人，却感觉与整个宇宙相连，无比充实。", levelScore: 10 }
    ]
  },
  {
    id: 26,
    text: "你的自尊地基（价值来源）？",
    options: [
      { label: "A", text: "沙堆：建立在别人的评价上，风一吹就塌。", levelScore: 2 },
      { label: "B", text: "木桩：建立在我的成就上，一旦失败就摇摇欲坠。", levelScore: 5 },
      { label: "C", text: "砖石：建立在我的能力和原则上，比较稳固。", levelScore: 8 },
      { label: "D", text: "大地：建立在“我存在”本身，不可动摇。", levelScore: 10 }
    ]
  },
  {
    id: 27,
    text: "你对“不同”的态度（格局）？",
    options: [
      { label: "A", text: "消灭：异教徒必须死，非我族类其心必异。", levelScore: 2 },
      { label: "B", text: "忍受：虽然我不爽，但我尽量不表现出来。", levelScore: 5 },
      { label: "C", text: "研究：为什么他会这么想？真有趣。", levelScore: 8 },
      { label: "D", text: "融合：万物并育而不相害，你的不同丰富了我的世界。", levelScore: 10 }
    ]
  },
  {
    id: 28,
    text: "你的行动力（知行合一）？",
    options: [
      { label: "A", text: "梦游：只在梦里走了千里，醒来还在床上。", levelScore: 2 },
      { label: "B", text: "跛行：走两步退一步，自我怀疑，内耗严重。", levelScore: 5 },
      { label: "C", text: "行军：有节奏，有目标，虽然累但一直在走。", levelScore: 8 },
      { label: "D", text: "飞翔：心念一动，身已至此，知行合一。", levelScore: 10 }
    ]
  },
  {
    id: 29,
    text: "过去对你的影响（时间观）？",
    options: [
      { label: "A", text: "幽灵：它缠着我，恐吓我，让我不敢前行。", levelScore: 2 },
      { label: "B", text: "包袱：我很想丢掉它，但它沉重地压在肩上。", levelScore: 5 },
      { label: "C", text: "标本：我把它陈列起来，偶尔看看，吸取教训。", levelScore: 8 },
      { label: "D", text: "燃料：无论好坏，都燃烧成了推动我向前的动力。", levelScore: 10 }
    ]
  },
  {
    id: 30,
    text: "你当下的灵魂状态（总评）？",
    options: [
      { label: "A", text: "破碎 (Fragmented)", levelScore: 2 },
      { label: "B", text: "凝固 (Frozen)", levelScore: 5 },
      { label: "C", text: "生长 (Growing)", levelScore: 8 },
      { label: "D", text: "流光 (Luminous)", levelScore: 10 }
    ]
  }
];
