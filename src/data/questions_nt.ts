import { Question } from './questions';

export const questionsNT: Question[] = [
  // --- Group A: Type Locking (1-20) ---
  {
    id: 1,
    text: "你的精神世界是一座高塔，这座塔的构造是？",
    options: [
      { label: "A", text: "通天巨塔：结构严密，每一层都为了支撑顶端的王座，俯瞰众生。", typeScores: { ENTJ: 2 } },
      { label: "B", text: "隐秘堡垒：外表低调甚至隐形，内部却有着只有我懂的精密迷宫。", typeScores: { INTJ: 1, INTP: 1 } },
      { label: "C", text: "移动城堡：不断变形、重组，长出机械臂，随心所欲地漫游。", typeScores: { ENTP: 2 } },
      { label: "D", text: "晶体网络：没有实体，纯粹由能量和数据流构成的悬浮矩阵。", typeScores: { INTP: 2 } }
    ]
  },
  {
    id: 2,
    text: "面前有一盘死局的棋，你会？",
    options: [
      { label: "A", text: "掀翻棋盘：规则束缚了我，我重新定义规则，甚至发明一种新棋。", typeScores: { ENTP: 2 } },
      { label: "B", text: "降维打击：我不看棋子，我看透了下棋人的心理漏洞，直接攻心。", typeScores: { INTJ: 2 } },
      { label: "C", text: "完美解法：一定存在一个最优解，我用穷举法也要算出来。", typeScores: { INTP: 2 } },
      { label: "D", text: "铁腕控场：即使牺牲大半棋子，我也要强行杀出一条血路。", typeScores: { ENTJ: 2 } }
    ]
  },
  {
    id: 3,
    text: "你认为“时间”的本质是？",
    options: [
      { label: "A", text: "资源：它是燃料，必须被高效燃烧以转化为功。", typeScores: { ENTJ: 2, INTJ: 1 } }, // Te
      { label: "B", text: "河流：它流向一个注定的终点，我早已在终点等待。", typeScores: { INTJ: 2, ENTJ: 1 } }, // Ni
      { label: "C", text: "维度：它只是一个变量，如果能折叠，过去和未来可以重叠。", typeScores: { ENTP: 2, INTP: 1 } }, // Ne
      { label: "D", text: "幻觉：只要逻辑存在，时间就没意义，真理是永恒的。", typeScores: { INTP: 2, ENTP: 1 } } // Ti
    ]
  },
  {
    id: 4,
    text: "假如你是一把武器，你希望自己是？",
    options: [
      { label: "A", text: "权杖：象征统治和秩序，只需挥动，万物臣服。", typeScores: { ENTJ: 2 } },
      { label: "B", text: "手术刀：极度精准，剖开表象，切除病灶。", typeScores: { INTP: 2 } },
      { label: "C", text: "狙击枪：在千米之外，无声无息，一击必杀。", typeScores: { INTJ: 2 } },
      { label: "D", text: "魔方：看似玩具，转动瞬间却能改变物理法则。", typeScores: { ENTP: 2 } }
    ]
  },
  {
    id: 5,
    text: "面对愚蠢（逻辑混乱）的人，你的潜意识反应？",
    options: [
      { label: "A", text: "清除：像清理电脑垃圾一样，把他从我的系统中移除。", typeScores: { INTJ: 2 } },
      { label: "B", text: "玩弄：设个逻辑陷阱，看他像小白鼠一样在里面打转。", typeScores: { ENTP: 2 } },
      { label: "C", text: "碾压：直接用事实和逻辑的大锤把他砸扁，让他闭嘴。", typeScores: { ENTJ: 2 } },
      { label: "D", text: "解剖：好奇他为什么会这么蠢？他的大脑结构哪里短路了？", typeScores: { INTP: 2 } }
    ]
  },
  {
    id: 6,
    text: "你的能量像什么？",
    options: [
      { label: "A", text: "核反应堆：向外持续输出巨大的热能和辐射。", typeScores: { ENTJ: 2, ENTP: 2 } }, // E
      { label: "B", text: "激光束：聚焦、高亮，但只照向我感兴趣的一点。", typeScores: { INTJ: 1, ENTJ: 1 } }, // E偏I or I focused
      { label: "C", text: "黑洞：向内坍缩，吞噬一切信息，连光都逃不掉。", typeScores: { INTP: 2, INTJ: 2 } }, // I
      { label: "D", text: "深海暗流：表面平静，水下有着摧毁一切的压力。", typeScores: { INTJ: 2, INTP: 2 } } // I
    ]
  },
  {
    id: 7,
    text: "你眼中的“混乱”？",
    options: [
      { label: "A", text: "游乐场：混乱就是机会，是阶梯，我在混乱中如鱼得水。", typeScores: { ENTP: 2 } },
      { label: "B", text: "待办事项：混乱是暂时的，它存在的意义就是等着被我整理。", typeScores: { ENTJ: 2 } },
      { label: "C", text: "素材库：混乱中包含着宇宙的真理，我试图从中提取模型。", typeScores: { INTP: 2 } },
      { label: "D", text: "噪音：干扰我思考，让我烦躁，必须屏蔽。", typeScores: { INTJ: 2 } }
    ]
  },
  {
    id: 8,
    text: "如果必须在孤独的太空舱生活十年？",
    options: [
      { label: "A", text: "享受：终于没人烦我了，我可以思考终极问题。", typeScores: { INTJ: 1, INTP: 1 } }, // I
      { label: "B", text: "适应：只要给我联网，让我能获取信息，我就能活。", typeScores: { INTJ: 1, INTP: 1 } }, // I/N
      { label: "C", text: "煎熬：没有对手，没有听众，我的思想会枯萎。", typeScores: { ENTJ: 1, ENTP: 1 } }, // E
      { label: "D", text: "发疯：我会试图劫持飞船，哪怕坠毁也要搞点动静。", typeScores: { ENTP: 2, ENTJ: 1 } } // E
    ]
  },
  {
    id: 9,
    text: "真理对你来说是？",
    options: [
      { label: "A", text: "工具：有用即真理，能解决问题的才是好理论。", typeScores: { ENTJ: 2, INTJ: 1 } }, // Te
      { label: "B", text: "美：逻辑的自洽具有一种数学上的美感。", typeScores: { INTP: 2, ENTP: 1 } }, // Ti
      { label: "C", text: "光：它刺眼且冷酷，但只有它能照亮黑暗。", typeScores: { INTJ: 2, ENTJ: 1 } }, // Ni
      { label: "D", text: "火：它是变化的，昨天的真理可能是今天的谬误。", typeScores: { ENTP: 2, INTP: 1 } } // Ne
    ]
  },
  {
    id: 10,
    text: "你的社交面具？",
    options: [
      { label: "A", text: "冷面君王：不怒自威，让人不敢造次。", typeScores: { ENTJ: 2, INTJ: 1 } },
      { label: "B", text: "疯帽子：古怪、幽默、说话跳跃。", typeScores: { ENTP: 2 } },
      { label: "C", text: "透明人：我在场，但我好像不在场。", typeScores: { INTP: 2 } },
      { label: "D", text: "指导者：好为人师，喜欢输出观点。", typeScores: { ENTJ: 1, ENTP: 1 } }
    ]
  },
  {
    id: 11,
    text: "你的办公桌/大脑的工作区？",
    options: [
      { label: "A", text: "指挥台：只有必要的文件，随时准备下达指令。", typeScores: { ENTJ: 2, INTJ: 2 } }, // J
      { label: "B", text: "实验室：堆满了只有我懂的半成品和草稿。", typeScores: { ENTP: 2, INTP: 2 } }, // P
      { label: "C", text: "展览馆：摆放着显示我成就或品味的物品。", typeScores: { ENTJ: 1, ENTP: 1 } }, // E
      { label: "D", text: "洞穴：尽量遮挡视线，防止别人窥屏。", typeScores: { INTJ: 1, INTP: 1 } } // I
    ]
  },
  {
    id: 12,
    text: "旅行对你来说是？",
    options: [
      { label: "A", text: "征途：去征服一座山，或完成一个打卡目标。", typeScores: { ENTJ: 2, INTJ: 2 } }, // J
      { label: "B", text: "流浪：漫无目的，走到哪算哪，期待随机事件。", typeScores: { ENTP: 2, INTP: 2 } }, // P
      { label: "C", text: "考察：去研究当地的人文、历史或商业模式。", typeScores: { ENTJ: 1, INTJ: 1, ENTP: 1, INTP: 1 } }, // NT
      { label: "D", text: "隐居：换个没人认识我的地方思考。", typeScores: { INTJ: 2, INTP: 2 } } // I
    ]
  },
  {
    id: 13,
    text: "面对手机里的未读消息？",
    options: [
      { label: "A", text: "清零：看到红点必须点掉，事情必须处理完。", typeScores: { ENTJ: 2, INTJ: 2 } }, // J
      { label: "B", text: "堆积：99+，只回重要的，其他的意念回复。", typeScores: { ENTP: 2, INTP: 2 } }, // P
      { label: "C", text: "筛选：一眼扫过，提取有效信息，忽略废话。", typeScores: { ENTJ: 1, INTJ: 1, INTP: 1, ENTP: 1 } }, // T
      { label: "D", text: "秒回：如果是感兴趣的话题，我会立刻展开辩论。", typeScores: { ENTP: 2, ENTJ: 1 } } // E/Ne
    ]
  },
  {
    id: 14,
    text: "关于“规则”？",
    options: [
      { label: "A", text: "利用：规则是给弱者遵守的，强者利用规则。", typeScores: { ENTJ: 2 } },
      { label: "B", text: "质疑：谁制定的？合理吗？有漏洞吗？", typeScores: { ENTP: 2 } },
      { label: "C", text: "无视：如果规则阻碍了效率，那就绕过它。", typeScores: { INTJ: 2 } },
      { label: "D", text: "重构：这套规则太烂了，我要写一套新的。", typeScores: { INTP: 2 } }
    ]
  },
  {
    id: 15,
    text: "你更像哪种反派？",
    options: [
      { label: "A", text: "灭霸：为了宇宙平衡，即便被误解也要执行。", typeScores: { INTJ: 2 } },
      { label: "B", text: "小丑：Why so serious? 混乱就是阶梯。", typeScores: { ENTP: 2 } },
      { label: "C", text: "伏地魔：追求永生和极致的力量。", typeScores: { ENTJ: 2 } },
      { label: "D", text: "汉尼拔：优雅、高智商，将犯罪视为艺术。", typeScores: { INTP: 2 } }
    ]
  },
  {
    id: 16,
    text: "深夜失眠时，你在想？",
    options: [
      { label: "A", text: "战略：未来五年的规划图。", typeScores: { INTJ: 2, ENTJ: 2 } }, // Ni/Te
      { label: "B", text: "脑洞：如果人类有尾巴，社会结构会怎样？", typeScores: { ENTP: 2, INTP: 1 } }, // Ne
      { label: "C", text: "复盘：白天那个人逻辑谬误在哪里。", typeScores: { INTP: 2, ENTP: 1 } }, // Ti
      { label: "D", text: "终极：宇宙大爆炸之前的奇点是什么。", typeScores: { INTJ: 1, INTP: 1 } } // Ni/Ti
    ]
  },
  {
    id: 17,
    text: "你最讨厌的词？",
    options: [
      { label: "A", text: "“差不多”：什么叫差不多？精准的数据呢？", typeScores: { ENTJ: 1, INTJ: 1, INTP: 1 } }, // T
      { label: "B", text: "“一直都是这样”：所以呢？就不能改吗？", typeScores: { ENTP: 2, INTP: 1, INTJ: 1 } }, // N
      { label: "C", text: "“大家觉得”：真理往往掌握在少数人手里。", typeScores: { INTJ: 1, INTP: 1, ENTJ: 1, ENTP: 1 } }, // NT
      { label: "D", text: "“听话”：我只听逻辑的，不听人的。", typeScores: { ENTJ: 1, INTJ: 1, ENTP: 1, INTP: 1 } } // NT
    ]
  },
  {
    id: 18,
    text: "给你的大脑装一个补丁，你选？",
    options: [
      { label: "A", text: "超级处理器：运算速度提升1000倍。", typeScores: { INTP: 1, ENTJ: 1, INTJ: 1, ENTP: 1 } }, // T
      { label: "B", text: "情绪屏蔽器：彻底关闭感性干扰。", typeScores: { INTP: 2, INTJ: 2, ENTJ: 1 } }, // T
      { label: "C", text: "预知模块：能看到所有决策的结局。", typeScores: { INTJ: 2, ENTJ: 2 } }, // N (Ni)
      { label: "D", text: "知识下载：瞬间学会所有人类语言和技能。", typeScores: { ENTP: 2, INTP: 2 } } // N (Ne)
    ]
  },
  {
    id: 19,
    text: "面对突发危机？",
    options: [
      { label: "A", text: "兴奋：终于有点挑战了。", typeScores: { ENTP: 2 } },
      { label: "B", text: "冷静：迅速接管指挥权。", typeScores: { ENTJ: 2 } },
      { label: "C", text: "撤退：回到安全屋分析局势。", typeScores: { INTJ: 2 } },
      { label: "D", text: "观察：看看事态会如何演变。", typeScores: { INTP: 2 } }
    ]
  },
  {
    id: 20,
    text: "你的人生结局？",
    options: [
      { label: "A", text: "建立了一个帝国。", typeScores: { ENTJ: 2 } },
      { label: "B", text: "留下了一个思想体系。", typeScores: { INTP: 2 } },
      { label: "C", text: "改变了历史进程。", typeScores: { INTJ: 2 } },
      { label: "D", text: "成为一个传说。", typeScores: { ENTP: 2 } }
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
