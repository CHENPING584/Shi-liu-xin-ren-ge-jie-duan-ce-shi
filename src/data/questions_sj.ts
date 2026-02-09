import { Question } from './questions';

export const questionsSJ: Question[] = [
  // --- Group A: Type Locking (1-20) ---
  {
    id: 1,
    text: "你是一棵树，你的根系？",
    options: [
      { label: "A", text: "盘根错节：深深扎入地下，抓紧每一寸土壤，甚至穿透岩石，谁也别想动我。", typeScores: { ISTJ: 2 } }, // Si - ISTJ
      { label: "B", text: "广阔蔓延：向四周伸展，连接着周围所有小树的根，形成互助网络。", typeScores: { ESFJ: 2 } }, // Fe - ESFJ
      { label: "C", text: "化石：我就是大地的一部分，经历千万年风雨而不倒，我是历史的见证。", typeScores: { ISFJ: 2 } }, // Si - ISFJ
      { label: "D", text: "行道树：整齐排列，不仅扎根，还要修剪得符合规划，为了城市的秩序。", typeScores: { ESTJ: 2 } } // Te - ESTJ
    ]
  },
  {
    id: 2,
    text: "面对一个从未见过的怪物（新事物/新流程），你会？",
    options: [
      { label: "A", text: "查阅图鉴：翻找古籍或SOP，看以前有没有人记录过它，怎么处理最稳妥。", typeScores: { ISTJ: 2 } }, // Si - ISTJ
      { label: "B", text: "建立围栏：不管它是什么，先把它隔离起来，制定规则，确保安全。", typeScores: { ESTJ: 2 } }, // Te - ESTJ
      { label: "C", text: "感到恐惧：它的不可预测性让我极度不安，我想回到熟悉的避难所。", typeScores: {} }, // Si 阴影
      { label: "D", text: "试图驯化：如果它能遵守我们的规则，也许可以共存，甚至照顾它。", typeScores: { ISFJ: 2 } } // Fe - ISFJ
    ]
  },
  {
    id: 3,
    text: "你的记忆像什么？",
    options: [
      { label: "A", text: "高清录像带：连当天的气温、气味、衣服的褶皱都记得清清楚楚，细节就是真相。", typeScores: { ISTJ: 1, ISFJ: 1 } }, // Si Dominant
      { label: "B", text: "图书馆：分类归档，索引清晰，需要的时候能准确调取那本书。", typeScores: { ESTJ: 2, ISTJ: 1 } }, // Te/Si
      { label: "C", text: "相册：充满了情感滤镜，记得当时的温馨或感动，细节服务于情感。", typeScores: { ESFJ: 1, ISFJ: 1 } }, // Fe/Si
      { label: "D", text: "石刻：一旦刻上去，风吹雨打都磨不掉，那是我的信条。", typeScores: { ISTJ: 2 } } // Si/Fi
    ]
  },
  {
    id: 4,
    text: "假如你是守夜人，长夜漫漫，你会？",
    options: [
      { label: "A", text: "巡逻：按照既定路线，每小时走一圈，绝不懈怠，确保无死角。", typeScores: { ESTJ: 2 } },
      { label: "B", text: "添柴：照顾好篝火，给睡着的人盖好被子，让他们睡得安稳。", typeScores: { ISFJ: 2 } },
      { label: "C", text: "警惕：盯着黑暗处，任何风吹草动都让我握紧武器，脑补各种危险。", typeScores: { ISTJ: 1, ISFJ: 1 } }, // Si/Ne Loop
      { label: "D", text: "记录：把今晚发生的一切写进日志，留给接班人，这是我的职责。", typeScores: { ISTJ: 2 } }
    ]
  },
  {
    id: 5,
    text: "你的社交形态？",
    options: [
      { label: "A", text: "村长：大家有事都来找我，我负责分配任务，维持秩序，哪怕得罪人。", typeScores: { ESTJ: 2 } },
      { label: "B", text: "管家：我不站C位，但我负责让每个人都吃好喝好，没人被冷落。", typeScores: { ESFJ: 2 } },
      { label: "C", text: "隐士：我守着我的小屋，没事别来敲门，我只对我的小圈子负责。", typeScores: { ISTJ: 2 } },
      { label: "D", text: "侍卫：我站在重要的人身后，做他最坚实的后盾，不求回报。", typeScores: { ISFJ: 2 } }
    ]
  },
  {
    id: 6,
    text: "承诺（契约）对你来说？",
    options: [
      { label: "A", text: "神谕：一旦立誓，天塌下来也要履行，这是底线，不可动摇。", typeScores: { ISTJ: 1, ESTJ: 1 } }, // Si/Te
      { label: "B", text: "枷锁：虽然重，但我必须背负，这是我存在的意义，哪怕我很累。", typeScores: { ISTJ: 2 } }, // Si/Fi
      { label: "C", text: "纽带：它把我们连在一起，背叛承诺就是切断关系，这让我心碎。", typeScores: { ESFJ: 2 } }, // Fe
      { label: "D", text: "法律：白纸黑字，违约者必须受到惩罚，没有借口。", typeScores: { ESTJ: 2 } } // Te
    ]
  },
  {
    id: 7,
    text: "你的爱像什么？",
    options: [
      { label: "A", text: "面包：朴实、管饱，每天都有，必不可少，虽然不浪漫。", typeScores: { ISTJ: 1, ESTJ: 1 } }, // ST
      { label: "B", text: "棉袄：贴身、保暖，把你裹得严严实实，怕你冷怕你摔。", typeScores: { ISFJ: 1, ESFJ: 1 } }, // SF
      { label: "C", text: "盾牌：替你挡下所有的风雨和攻击，只要我在你就安全。", typeScores: { ESTJ: 2 } },
      { label: "D", text: "港湾：无论你走多远，灯永远为你亮着，随时欢迎回家。", typeScores: { ISFJ: 2 } }
    ]
  },
  {
    id: 8,
    text: "面对混乱的房间（或局面）？",
    options: [
      { label: "A", text: "生理性不适：感觉呼吸困难，必须立刻马上动手收拾，一刻都不能忍。", typeScores: { ESTJ: 1, ESFJ: 1 } }, // J
      { label: "B", text: "强迫症：那个杯子的把手必须朝右，书必须按高矮排，歪一点都不行。", typeScores: { ISTJ: 1, ESTJ: 1 } }, // Si/Te
      { label: "C", text: "归位：万物皆有其位，我只是帮它们回家，恢复出厂设置。", typeScores: { ISTJ: 1, ISFJ: 1 } }, // Si
      { label: "D", text: "无视：只要我自己坐的地方是干净的就行，别人的乱我管不着。", typeScores: { ISTJ: 2 } } // ISTJ 独善其身
    ]
  },
  {
    id: 9,
    text: "你最怕什么？",
    options: [
      { label: "A", text: "变故：原本定好的事突然变了，我会崩溃，不知道该怎么办。", typeScores: { ISTJ: 1, ISFJ: 1 } }, // Si
      { label: "B", text: "背叛：我信任的人打破了规则或伤害了我，这是不可原谅的。", typeScores: { ESFJ: 1, ISFJ: 1 } }, // Fe/Fi
      { label: "C", text: "无序：社会失去法律，世界陷入无政府状态，那是地狱。", typeScores: { ESTJ: 2 } }, // Te
      { label: "D", text: "无用：我不再被需要，成了累赘，找不到自己的价值。", typeScores: { ESFJ: 2 } } // Fe
    ]
  },
  {
    id: 10,
    text: "时间对你来说？",
    options: [
      { label: "A", text: "钟表：滴答滴答，每一秒都精准，不能浪费，不能快也不能慢。", typeScores: { ESTJ: 1, ISTJ: 1 } }, // J
      { label: "B", text: "年轮：一圈一圈，记录着我的成长和积累，过去塑造了现在。", typeScores: { ISTJ: 1, ISFJ: 1 } }, // Si
      { label: "C", text: "循环：太阳升起落下，四季更替，生活就是重复，这让我安心。", typeScores: { ISTJ: 1, ISFJ: 1 } }, // Si
      { label: "D", text: "倒计时：截止日期在逼近，我必须在响铃前完成任务。", typeScores: { ESTJ: 2 } } // Te
    ]
  },
  {
    id: 11,
    text: "你随身携带的包里？",
    options: [
      { label: "A", text: "百宝箱：纸巾、创可贴、备用电池、雨伞，应有尽有，以防万一。", typeScores: { ISFJ: 2 } },
      { label: "B", text: "工具包：只有最实用的笔记本、笔、U盘，为了工作。", typeScores: { ISTJ: 2 } },
      { label: "C", text: "礼品袋：准备给朋友的小零食，或者刚买的伴手礼。", typeScores: { ESFJ: 2 } },
      { label: "D", text: "公文包：文件、印章、行程表，随时准备开会。", typeScores: { ESTJ: 2 } }
    ]
  },
  {
    id: 12,
    text: "假如世界失去重力（规则消失）？",
    options: [
      { label: "A", text: "抓紧地面：寻找任何可以固定的东西，死也不松手。", typeScores: { ISTJ: 1, ISFJ: 1 } }, // Si
      { label: "B", text: "建立新引力：既然没有重力，我来制造重力，制定新规则。", typeScores: { ESTJ: 2 } }, // Te
      { label: "C", text: "拉住大家：确保没有人飘走，大家手拉手才安全。", typeScores: { ESFJ: 2 } }, // Fe
      { label: "D", text: "极度恐慌：这种失控感让我崩溃，世界末日来了。", typeScores: {} } // Si 阴影
    ]
  },
  {
    id: 13,
    text: "对待“老物件”？",
    options: [
      { label: "A", text: "珍藏：这是我回忆的载体，绝对不能扔，上面有故事。", typeScores: { ISTJ: 1, ISFJ: 1 } }, // Si
      { label: "B", text: "归档：贴上标签，放入储藏室，方便以后查找。", typeScores: { ESTJ: 1, ISTJ: 1 } }, // Te/Si
      { label: "C", text: "传承：这是家族的象征，要传给下一代，不能断了香火。", typeScores: { ESFJ: 1, ISFJ: 1 } }, // Fe/Si
      { label: "D", text: "断舍离：只有在有用时留着，没用就扔，别占地方。", typeScores: { ESTJ: 2 } } // Te
    ]
  },
  {
    id: 14,
    text: "家庭聚餐时，你是？",
    options: [
      { label: "A", text: "大厨：在厨房忙得热火朝天，投喂所有人，看着大家吃我就开心。", typeScores: { ESFJ: 1, ISFJ: 1 } },
      { label: "B", text: "组织者：安排座位，致祝酒词，控制流程，确保大家不冷场。", typeScores: { ESTJ: 2 } },
      { label: "C", text: "收拾者：默默吃完，默默洗碗，默默打扫卫生。", typeScores: { ISTJ: 1, ISFJ: 1 } },
      { label: "D", text: "点评家：甚至会点评这道菜咸了淡了，如果不合规矩会指出来。", typeScores: { ESTJ: 2 } }
    ]
  },
  {
    id: 15,
    text: "对于“惊喜”？",
    options: [
      { label: "A", text: "讨厌：别搞这些，请按计划行事，惊吓多于惊喜。", typeScores: { ISTJ: 1, ESTJ: 1 } }, // J
      { label: "B", text: "配合：虽然吓一跳，但为了让你开心我会假装惊喜，这是礼貌。", typeScores: { ESFJ: 2 } }, // Fe
      { label: "C", text: "预防：我早就猜到了，因为我有B计划，一切尽在掌握。", typeScores: { ESTJ: 1, ISTJ: 1 } }, // Te/Si
      { label: "D", text: "无感：只要不是坏消息就好。", typeScores: { ISTJ: 1, ISFJ: 1 } } // Si
    ]
  },
  {
    id: 16,
    text: "你的“安全感”来源？",
    options: [
      { label: "A", text: "存款余额：看得见的数字最实在。", typeScores: { ISTJ: 1, ESTJ: 1 } }, // Si/Te
      { label: "B", text: "家人的笑容：大家在一起平平安安就是福。", typeScores: { ESFJ: 2, ISFJ: 1 } }, // Fe
      { label: "C", text: "稳定的职位：掌控权力和资源让我安心。", typeScores: { ESTJ: 2 } }, // Te
      { label: "D", text: "熟悉的环境：每天走一样的路，见一样的人。", typeScores: { ISTJ: 1, ISFJ: 1 } } // Si
    ]
  },
  {
    id: 17,
    text: "如果让你做一天国王？",
    options: [
      { label: "A", text: "颁布法典：确保国家井井有条，消除混乱。", typeScores: { ESTJ: 2 } },
      { label: "B", text: "大赦天下：让所有人都感恩戴德，举国同庆。", typeScores: { ESFJ: 2 } },
      { label: "C", text: "查账：看看国库里到底有多少钱，有没有浪费。", typeScores: { ISTJ: 2 } },
      { label: "D", text: "退位：只要别让我当国王就行，责任太重，我只想做个百姓。", typeScores: { ISFJ: 2 } }
    ]
  },
  {
    id: 18,
    text: "你的笔记本（手帐）？",
    options: [
      { label: "A", text: "待办清单：打勾是我最爽的时刻，今日事今日毕。", typeScores: { ESTJ: 2 } }, // Te
      { label: "B", text: "日记：记录每天发生的流水账，连吃了什么都记。", typeScores: { ISTJ: 1, ISFJ: 1 } }, // Si
      { label: "C", text: "账本：每一笔开销都记得清清楚楚，不能有糊涂账。", typeScores: { ISTJ: 1, ESTJ: 1 } }, // Si/Te
      { label: "D", text: "纪念册：贴满了票根和照片，全是回忆。", typeScores: { ESFJ: 1, ISFJ: 1 } } // Fe/Si
    ]
  },
  {
    id: 19,
    text: "面对不守规矩的人（如插队）？",
    options: [
      { label: "A", text: "愤怒：你怎么能插队？大声呵斥，让他排队。", typeScores: { ESTJ: 2 } }, // Te
      { label: "B", text: "鄙视：真没教养，心里默默拉黑，离他远点。", typeScores: { ISTJ: 1, ISFJ: 1 } }, // Si
      { label: "C", text: "劝阻：大家都要排队，请你遵守秩序，别让大家难做。", typeScores: { ESFJ: 2 } }, // Fe
      { label: "D", text: "记录：如果有黑名单机制，我一定举报他。", typeScores: { ISTJ: 2 } }
    ]
  },
  {
    id: 20,
    text: "你的座右铭？",
    options: [
      { label: "A", text: "“无规矩不成方圆”", typeScores: { ESTJ: 2 } },
      { label: "B", text: "“吃亏是福”", typeScores: { ISFJ: 2 } },
      { label: "C", text: "“好记性不如烂笔头”", typeScores: { ISTJ: 2 } },
      { label: "D", text: "“家和万事兴”", typeScores: { ESFJ: 2 } }
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
