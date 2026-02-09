import { Question } from './questions';

export const questionsSP: Question[] = [
  // --- Group A: Type Locking (1-20) ---
  {
    id: 1,
    text: "你的灵魂是一团火，它是？",
    options: [
      { label: "A", text: "森林大火：吞噬一切，不可阻挡，所到之处寸草不生又充满生机。", typeScores: { ESTP: 2 } },
      { label: "B", text: "舞台聚光灯：耀眼夺目，不仅照亮别人，更照亮我自己，我是焦点。", typeScores: { ESFP: 2 } },
      { label: "C", text: "锻造炉火：高温、蓝色火焰，在沉默中把废铁炼成宝剑。", typeScores: { ISTP: 2 } },
      { label: "D", text: "壁炉火光：美妙、跳跃、私密，看着它让人想跳舞或发呆。", typeScores: { ISFP: 2 } }
    ]
  },
  {
    id: 2,
    text: "给你一把锋利的刀，你会？",
    options: [
      { label: "A", text: "切开世界：我想看看表皮下面到底是什么构造，拆解它。", typeScores: { ISTP: 2 } }, // Ti
      { label: "B", text: "雕刻：把它变成一件艺术品，或者在树上刻下我的名字。", typeScores: { ISFP: 2 } }, // Fi
      { label: "C", text: "挥舞：听风的声音，感受肌肉的收缩，这感觉太爽了。", typeScores: { ESTP: 2 } }, // Se
      { label: "D", text: "展示：看，这把刀多帅！我也很帅！", typeScores: { ESFP: 2 } } // Se/Fe
    ]
  },
  {
    id: 3,
    text: "你是一只动物，你是？",
    options: [
      { label: "A", text: "猎豹：速度之王，为了目标全力冲刺，抓不到就换下一个。", typeScores: { ESTP: 2 } },
      { label: "B", text: "孔雀：即便在荒野，我也要开屏，美是我的尊严。", typeScores: { ESFP: 2 } },
      { label: "C", text: "独狼：独来独往，人狠话不多，别惹我。", typeScores: { ISTP: 2 } },
      { label: "D", text: "猫：随性、优雅，想理你理你，不想理你走开。", typeScores: { ISFP: 2 } }
    ]
  },
  {
    id: 4,
    text: "面对悬崖？",
    options: [
      { label: "A", text: "跳下去：我有降落伞，或者我相信下面有水，刺激！", typeScores: { ESTP: 2 } }, // Se 极致
      { label: "B", text: "观赏：这景色太美了，我要拍下来，或者画下来。", typeScores: { ISFP: 2 } }, // Fi/Se
      { label: "C", text: "测量：目测高度、风速，计算跳下去存活的概率。", typeScores: { ISTP: 2 } }, // Ti/Se
      { label: "D", text: "大喊：对着山谷喊一嗓子，听回音。", typeScores: { ESFP: 2 } } // Fe/Se
    ]
  },
  {
    id: 5,
    text: "你的双手？",
    options: [
      { label: "A", text: "是工具：它们能拆解机器，能修理一切坏掉的东西。", typeScores: { ISTP: 2 } },
      { label: "B", text: "是画笔：它们能创造美，触摸质感，表达情绪。", typeScores: { ISFP: 2 } },
      { label: "C", text: "是武器：它们有力，随时准备出击，击倒对手。", typeScores: { ESTP: 2 } },
      { label: "D", text: "是乐器：它们能打节拍，能抚摸，能传递快乐。", typeScores: { ESFP: 2 } }
    ]
  },
  {
    id: 6,
    text: "你的能量流向？",
    options: [
      { label: "A", text: "喷发：像火山一样，如果不释放我会爆炸。", typeScores: { ESTP: 2 } },
      { label: "B", text: "流动：像风一样，穿过人群，带走快乐。", typeScores: { ESFP: 2 } },
      { label: "C", text: "蓄力：像拉满的弓，静止是为了那一瞬间的爆发。", typeScores: { ISTP: 2 } },
      { label: "D", text: "沉浸：像潜水，独自在五彩斑斓的海底漫游。", typeScores: { ISFP: 2 } }
    ]
  },
  {
    id: 7,
    text: "你最讨厌的东西？",
    options: [
      { label: "A", text: "说明书：别教我怎么做，我自己试两下就知道了。", typeScores: { ISTP: 1, ISFP: 1, ESTP: 1, ESFP: 1 } }, // SP 通病
      { label: "B", text: "会议室：一群人坐着说废话，简直是坐牢，我想动。", typeScores: { ESTP: 1, ESFP: 1 } },
      { label: "C", text: "虚伪：装模作样，一点都不real，真恶心。", typeScores: { ISFP: 2 } },
      { label: "D", text: "等待：排队、红灯、加载中，浪费生命。", typeScores: { ESTP: 2 } }
    ]
  },
  {
    id: 8,
    text: "如果明天就是世界末日？",
    options: [
      { label: "A", text: "狂欢：花光所有的钱，开最大的派对，死也要死在High点。", typeScores: { ESFP: 2 } },
      { label: "B", text: "飙车：去那条一直想去的公路，开到爆表。", typeScores: { ESTP: 2 } },
      { label: "C", text: "看海：找个最美的地方，静静地看着夕阳落下。", typeScores: { ISFP: 2 } },
      { label: "D", text: "求生：末日？那是对别人的，我肯定能活下来。", typeScores: { ISTP: 2 } }
    ]
  },
  {
    id: 9,
    text: "你的人生哲学？",
    options: [
      { label: "A", text: "YOLO：You Only Live Once（你只活一次），及时行乐，别想太多。", typeScores: { ESFP: 2 } },
      { label: "B", text: "Just Do It：别想了，做就完了，错了再说。", typeScores: { ESTP: 2 } },
      { label: "C", text: "Style：做人最重要的就是要有型，要忠于自己的风格。", typeScores: { ISFP: 2 } },
      { label: "D", text: "Craft：技艺近乎道，我要做那个最强的人。", typeScores: { ISTP: 2 } }
    ]
  },
  {
    id: 10,
    text: "你的社交风格？",
    options: [
      { label: "A", text: "组局王：哪里有我，哪里就是局，我来控场。", typeScores: { ESTP: 2 } },
      { label: "B", text: "开心果：负责搞笑，负责气氛，大家开心我就开心。", typeScores: { ESFP: 2 } },
      { label: "C", text: "冷场王：不想说话的时候，谁的面子也不给。", typeScores: { ISTP: 2 } },
      { label: "D", text: "观察员：在角落看着大家发疯，偶尔露一手惊艳全场。", typeScores: { ISFP: 2 } }
    ]
  },
  {
    id: 11,
    text: "你的衣柜？",
    options: [
      { label: "A", text: "功能性：全是冲锋衣、速干裤、工装，口袋多，随时准备出发。", typeScores: { ISTP: 2 } },
      { label: "B", text: "秀场：亮片、豹纹、最潮的单品，必须吸睛。", typeScores: { ESFP: 2 } },
      { label: "C", text: "质感：面料要舒服，剪裁要独特，要有“写着我名字”的感觉。", typeScores: { ISFP: 2 } },
      { label: "D", text: "随意：抓到哪件穿哪件，反正我穿什么都帅，这就是自信。", typeScores: { ESTP: 2 } }
    ]
  },
  {
    id: 12,
    text: "对于“计划表”？",
    options: [
      { label: "A", text: "废纸：写完就丢，反正我不会按着做，计划赶不上变化。", typeScores: { ISTP: 1, ISFP: 1, ESTP: 1, ESFP: 1 } },
      { label: "B", text: "束缚：看到密密麻麻的字我就头疼，别管我。", typeScores: { ESTP: 1, ESFP: 1 } },
      { label: "C", text: "摆设：我也想执行，但总有更好玩的事打断我。", typeScores: { ISTP: 1, ISFP: 1 } },
      { label: "D", text: "只有在需要配合别人的时候才勉强看看。", typeScores: { ESTP: 1, ESFP: 1 } }
    ]
  },
  {
    id: 13,
    text: "你的车（或者理想的交通工具）？",
    options: [
      { label: "A", text: "改装车：性能必须炸裂，不仅快，还要响，要亲手改装。", typeScores: { ISTP: 2 } },
      { label: "B", text: "敞篷跑车：拉风，颜色要骚，适合兜风和吸引目光。", typeScores: { ESFP: 2 } },
      { label: "C", text: "复古机车：有独特的造型和灵魂，孤独的骑士。", typeScores: { ISFP: 1, ISTP: 1 } },
      { label: "D", text: "重型越野：能碾压一切地形，没有我去不了的地方。", typeScores: { ESTP: 2 } }
    ]
  },
  {
    id: 14,
    text: "在KTV里，你是？",
    options: [
      { label: "A", text: "麦霸：从头唱到尾，甚至站在桌子上唱，这是我的演唱会。", typeScores: { ESFP: 2 } },
      { label: "B", text: "气氛组：负责摇骰子、劝酒、起哄，绝不让场子冷下来。", typeScores: { ESTP: 2 } },
      { label: "C", text: "独唱者：点一首很小众的歌，深情地唱给自己听，不管别人。", typeScores: { ISFP: 2 } },
      { label: "D", text: "玩手机：除非有人叫我，否则我只关心什么时候走，或者偷偷溜走。", typeScores: { ISTP: 2 } }
    ]
  },
  {
    id: 15,
    text: "遇到如果不讲理的人？",
    options: [
      { label: "A", text: "动手：能动手尽量别甚至，直接制服，讲道理没用。", typeScores: { ESTP: 2 } },
      { label: "B", text: "嘲讽：用最刻薄、最精准的逻辑怼得他哑口无言。", typeScores: { ISTP: 2 } },
      { label: "C", text: "翻白眼：懒得理这种low人，直接走开，但他影响了我心情。", typeScores: { ISFP: 2 } },
      { label: "D", text: "拉拢：把他哄开心了，让他别闹了，或者转移他注意力。", typeScores: { ESFP: 2 } }
    ]
  },
  {
    id: 16,
    text: "对于“匠人精神”？",
    options: [
      { label: "A", text: "沉迷：我可以花一天时间打磨一个零件，直到完美，这种专注很爽。", typeScores: { ISTP: 2 } },
      { label: "B", text: "欣赏：但我坐不住，我更喜欢快节奏和新鲜感。", typeScores: { ESTP: 2 } },
      { label: "C", text: "感动：那是对美的极致追求，我希望能创造出这样的作品。", typeScores: { ISFP: 2 } },
      { label: "D", text: "无聊：有这时间不如多去体验几种生活，人生苦短。", typeScores: { ESFP: 2 } }
    ]
  },
  {
    id: 17,
    text: "如果让你去荒野求生，你带？",
    options: [
      { label: "A", text: "刀和火种：生存才是第一位的，其他的都是累赘。", typeScores: { ISTP: 2 } },
      { label: "B", text: "吉他：饿死事小，无聊事大，精神食粮不能少。", typeScores: { ISFP: 2 } },
      { label: "C", text: "摄像机/GoPro：我要把我的英姿拍下来给别人看，记录这一刻。", typeScores: { ESTP: 2 } },
      { label: "D", text: "朋友：一个人去有什么意思？大家一起去玩才好玩。", typeScores: { ESFP: 2 } }
    ]
  },
  {
    id: 18,
    text: "你的身体语言？",
    options: [
      { label: "A", text: "慵懒：能躺着绝不坐着，像只猫，但在需要时反应极快。", typeScores: { ISFP: 1, ISTP: 1 } },
      { label: "B", text: "躁动：抖腿、转笔、摸摸这碰碰那，根本停不下来。", typeScores: { ESTP: 2 } },
      { label: "C", text: "夸张：大笑、大动作，表情丰富，极具感染力。", typeScores: { ESFP: 2 } },
      { label: "D", text: "敏捷：走路带风，眼神锐利，随时观察周围环境。", typeScores: { ISTP: 1, ESTP: 1 } }
    ]
  },
  {
    id: 19,
    text: "对于“理论书”？",
    options: [
      { label: "A", text: "垫桌角：太厚了，看着眼晕，全是废话。", typeScores: { ESTP: 1, ESFP: 1 } }, // Se
      { label: "B", text: "撕书：把有用的几页撕下来，剩下的扔了，我不背书包。", typeScores: { ISTP: 2 } }, // Ti
      { label: "C", text: "画画：在空白处涂鸦比看书有意思多了。", typeScores: { ISFP: 2 } }, // Fi
      { label: "D", text: "除非那是本《花花公子》或者漫画书。", typeScores: { ESTP: 1, ESFP: 1 } } // Se
    ]
  },
  {
    id: 20,
    text: "你的墓志铭？",
    options: [
      { label: "A", text: "“不虚此行。”", typeScores: { ESTP: 1, ESFP: 1 } }, // Se
      { label: "B", text: "“他修好了所有东西，除了他自己。”", typeScores: { ISTP: 2 } }, // Ti
      { label: "C", text: "“这里睡着一个自由的灵魂。”", typeScores: { ISFP: 2 } }, // Fi
      { label: "D", text: "“别哭，开个派对庆祝我的一生吧。”", typeScores: { ESFP: 2 } } // Fe
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
