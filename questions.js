const DEFAULT_QUESTION_BANK = [
  {
    id: "mm-001",
    type: "mcq",
    topic: "多模态基础",
    difficulty: "easy",
    question: "CLIP 训练目标的核心思想是什么？",
    options: [
      "只做图像分类监督学习",
      "通过图文对比学习，让匹配的图文表示更接近",
      "先做 OCR 再做语言建模",
      "仅使用自回归语言建模预测下一个 token"
    ],
    answer: 1,
    explanation: "CLIP 的关键是双塔图文编码 + 对比学习，使正确图文对的相似度高于负样本对。"
  },
  {
    id: "mm-002",
    type: "mcq",
    topic: "视觉编码器",
    difficulty: "easy",
    question: "ViT 中把图片切成 patch 后，最接近 NLP 中哪个操作？",
    options: [
      "把句子切成 token",
      "做序列标注",
      "做 beam search",
      "做 LoRA 微调"
    ],
    answer: 0,
    explanation: "ViT 将图像划分为 patch，并将每个 patch 嵌入后当作序列 token 送入 Transformer。"
  },
  {
    id: "mm-003",
    type: "mcq",
    topic: "训练目标",
    difficulty: "medium",
    question: "在图文生成式多模态模型中，引入 instruction tuning 的主要目的通常是？",
    options: [
      "降低显存占用",
      "提高模型对人类任务指令的遵循能力",
      "只提升图片分辨率",
      "替代预训练"
    ],
    answer: 1,
    explanation: "Instruction tuning 主要提升模型对任务格式、回答风格和多步要求的遵循能力。"
  },
  {
    id: "mm-004",
    type: "mcq",
    topic: "多模态对齐",
    difficulty: "medium",
    question: "把视觉特征接入 LLM 时，使用 projector 的常见目的是什么？",
    options: [
      "把图像压缩为 JPEG",
      "将视觉编码器输出映射到 LLM 可消费的嵌入空间",
      "替代 tokenizer",
      "生成训练标签"
    ],
    answer: 1,
    explanation: "Projector 负责桥接视觉侧表示与语言模型嵌入空间，常见做法有线性层或 MLP。"
  },
  {
    id: "mm-005",
    type: "mcq",
    topic: "OCR 与文档理解",
    difficulty: "medium",
    question: "处理票据、表格、扫描件时，下面哪项最可能决定模型效果上限？",
    options: [
      "训练日志颜色",
      "文本布局与细粒度 OCR 能力",
      "batch size 名字是否好听",
      "prompt 长度固定为 32"
    ],
    answer: 1,
    explanation: "文档场景高度依赖文字识别、版面关系建模和高分辨率细节理解。"
  },
  {
    id: "mm-006",
    type: "mcq",
    topic: "评测",
    difficulty: "medium",
    question: "如果一个多模态问答 benchmark 主要是开放式生成答案，最适合额外关注的评测问题是？",
    options: [
      "词表大小是否为 32k",
      "仅看 exact match 是否足够",
      "GPU 温度是否稳定",
      "训练集文件后缀是否统一"
    ],
    answer: 1,
    explanation: "开放式答案常出现同义表达，仅看 exact match 容易低估表现，往往需人工或 LLM-as-a-judge 辅助。"
  },
  {
    id: "mm-007",
    type: "mcq",
    topic: "数据工程",
    difficulty: "medium",
    question: "构建图文训练数据时，去重的重要原因不包括哪项？",
    options: [
      "降低数据污染与 benchmark 泄漏风险",
      "减少重复样本导致的过拟合倾向",
      "让数据分布更健康",
      "保证模型一定学会数学推理"
    ],
    answer: 3,
    explanation: "去重不能保证模型一定学会数学推理，但能显著降低重复与污染问题。"
  },
  {
    id: "mm-008",
    type: "mcq",
    topic: "推理部署",
    difficulty: "easy",
    question: "多图输入场景中，上下文长度压力通常主要来自哪里？",
    options: [
      "视觉 token 数量快速增长",
      "网线长度",
      "显示器刷新率",
      "Python 版本号"
    ],
    answer: 0,
    explanation: "每张图像都会引入一批视觉 token，多图拼接时上下文长度和显存开销会迅速上升。"
  },
  {
    id: "mm-009",
    type: "mcq",
    topic: "多模态 Agent",
    difficulty: "medium",
    question: "在“看图后调用工具”的 Agent 系统中，最关键的一步通常是？",
    options: [
      "让模型始终输出超长答案",
      "将视觉理解结果结构化，并可靠地路由到工具调用",
      "禁用所有外部工具",
      "仅依赖 temperature=0"
    ],
    answer: 1,
    explanation: "Agent 核心不是只会看图，而是把理解结果转成可执行的结构化动作或工具参数。"
  },
  {
    id: "mm-010",
    type: "mcq",
    topic: "训练策略",
    difficulty: "hard",
    question: "下面哪种现象最符合 catastrophic forgetting？",
    options: [
      "视觉微调后，模型在原有通用语言能力上明显退化",
      "显存占用降低",
      "推理延迟减少",
      "训练 loss 前期下降较快"
    ],
    answer: 0,
    explanation: "如果模型在新任务上适应后丢失原有语言或通用能力，就属于典型遗忘问题。"
  },
  {
    id: "mm-011",
    type: "mcq",
    topic: "定位与检测",
    difficulty: "medium",
    question: "如果岗位强调 grounding / referring expression comprehension，面试时最好重点准备什么？",
    options: [
      "如何把语言描述对齐到图像区域或框",
      "如何写 prettier 配置",
      "如何安装浏览器",
      "如何打印 PDF"
    ],
    answer: 0,
    explanation: "Grounding 关注文本描述与图像局部区域的精确对齐与定位。"
  },
  {
    id: "mm-012",
    type: "mcq",
    topic: "视频理解",
    difficulty: "medium",
    question: "视频多模态模型相比单图模型新增的关键挑战通常是？",
    options: [
      "时序建模与跨帧信息压缩",
      "只能用 CPU",
      "不能做分类",
      "不能输出中文"
    ],
    answer: 0,
    explanation: "视频除了空间信息外，还需处理时间维度、一致性和长视频压缩。"
  },
  {
    id: "mm-013",
    type: "mcq",
    topic: "对齐与偏好优化",
    difficulty: "hard",
    question: "多模态偏好优化（如基于人类偏好的对齐）主要解决什么问题？",
    options: [
      "让图片文件更小",
      "让输出更符合人类偏好、安全性与任务要求",
      "彻底替代预训练数据",
      "让 tokenizer 不再需要"
    ],
    answer: 1,
    explanation: "偏好优化主要是提升回答质量、风格、安全性和用户满意度，而不是替代预训练本身。"
  },
  {
    id: "mm-014",
    type: "mcq",
    topic: "评测",
    difficulty: "hard",
    question: "面试时如果被问“线上效果和离线 benchmark 不一致”，最合理的第一反应是什么？",
    options: [
      "说明 benchmark 绝对没用",
      "检查数据分布、任务定义、评测口径与线上用户行为是否一致",
      "直接把模型参数翻倍",
      "改前端颜色"
    ],
    answer: 1,
    explanation: "离线与线上不一致常来自分布偏移、标签口径、用户意图差异和指标定义不同。"
  },
  {
    id: "mm-015",
    type: "mcq",
    topic: "高分辨率理解",
    difficulty: "hard",
    question: "处理高分辨率长图或复杂文档时，常见工程策略是什么？",
    options: [
      "直接强行缩成很小分辨率，忽略细节",
      "切块 / 金字塔 / 区域采样，再做全局融合",
      "始终只保留左上角",
      "只依赖语言 prompt"
    ],
    answer: 1,
    explanation: "高分辨率场景通常要在细节保留与 token 成本之间权衡，分块或多尺度是常见解法。"
  },
  {
    id: "mm-016",
    type: "mcq",
    topic: "数据标注",
    difficulty: "medium",
    question: "当简答类视觉问答数据噪声较大时，优先值得做的事情通常是？",
    options: [
      "直接扩大十倍训练轮数",
      "建立数据清洗与抽样质检机制",
      "把所有答案统一改成一句话",
      "去掉验证集"
    ],
    answer: 1,
    explanation: "脏数据会显著限制上限，清洗、抽检、重标注通常比盲目堆训练更有效。"
  },
  {
    id: "mm-017",
    type: "mcq",
    topic: "检索增强",
    difficulty: "medium",
    question: "在多模态 RAG 中，图像检索模块的价值主要是？",
    options: [
      "替代 LLM 推理",
      "提供与当前问题相关的视觉证据或相似样本",
      "减少显示器亮度",
      "避免任何数据存储"
    ],
    answer: 1,
    explanation: "多模态 RAG 的核心在于补充证据，图像检索能为回答提供相似视觉上下文。"
  },
  {
    id: "mm-018",
    type: "mcq",
    topic: "岗位理解",
    difficulty: "easy",
    question: "面试多模态岗位时，下面哪种项目描述最容易打动面试官？",
    options: [
      "我看过很多论文",
      "我做过从数据、训练、评测到上线闭环的完整项目",
      "我会复制代码",
      "我没有做过实验但很感兴趣"
    ],
    answer: 1,
    explanation: "工程闭环和结果导向的项目经历通常更能体现岗位匹配度。"
  },
  {
    id: "mm-019",
    type: "short",
    topic: "多模态基础",
    difficulty: "easy",
    question: "请你用 2~3 分钟解释：什么是多模态大模型？它和纯文本大模型最大的区别是什么？",
    reference: "可以从“输入模态更多、表示对齐、更复杂的数据与评测”三个层次回答。先定义：多模态大模型能处理图像、文本、音频、视频等多种模态，并在统一框架下完成理解、推理和生成。再讲和纯文本 LLM 的差异：一是要解决跨模态表征对齐；二是训练数据形态更复杂，清洗与标注成本更高；三是评测更难，很多任务不是标准唯一答案；四是工程部署受视觉 token、分辨率、时序长度等约束更明显。",
    keypoints: ["定义清楚多模态", "提到跨模态对齐", "提到数据/评测复杂度", "提到工程约束"]
  },
  {
    id: "mm-020",
    type: "short",
    topic: "视觉编码器",
    difficulty: "medium",
    question: "如果面试官问你：为什么很多 VLM 会保留预训练好的视觉编码器，而不是从头联合训练？你会怎么回答？",
    reference: "可以从成本、稳定性和迁移性回答。预训练视觉编码器已经具备较强视觉表征能力，直接复用能降低训练成本和数据需求；从头联合训练通常更不稳定，对算力和数据规模要求更高；保留成熟视觉 backbone 可以更快迭代 projector 和 instruction tuning；同时也便于模块化替换。不过如果数据量极大且目标任务与通用视觉差异明显，端到端联合训练也可能获得更优上限。",
    keypoints: ["成本更低", "训练更稳定", "迁移已有视觉表征", "承认端到端有上限优势"]
  },
  {
    id: "mm-021",
    type: "short",
    topic: "训练目标",
    difficulty: "medium",
    question: "请比较 contrastive learning、image-text matching、generative captioning 这三类多模态训练目标的差异与适用场景。",
    reference: "可按目标粒度回答。Contrastive learning 强调全局对齐，适合做检索和通用表征学习；image-text matching 更关注图文是否匹配，常用于细化对齐判断；generative captioning 通过生成文本让模型学会把视觉内容转成语言，更有助于后续问答和 instruction-following。实际系统常混合多种目标，以兼顾表示能力和生成能力。",
    keypoints: ["对比学习=全局对齐", "ITM=匹配判别", "captioning=生成能力", "提到多目标混合"]
  },
  {
    id: "mm-022",
    type: "short",
    topic: "OCR 与文档理解",
    difficulty: "hard",
    question: "你要做一个文档多模态模型，用于发票/合同/表格抽取。你会从哪些方面搭建方案？",
    reference: "可以从数据、模型、评测、上线四块讲。数据上要覆盖扫描件、拍照件、不同版式和语言，并建立字段级标注与质检；模型上要考虑高分辨率输入、OCR/布局信息融合、区域级对齐和结构化输出；评测上除了字段准确率，还应看表格结构恢复、长尾字段、复杂场景鲁棒性；上线要考虑延迟、吞吐、隐私、失败兜底与人工审核链路。",
    keypoints: ["数据覆盖与标注", "高分辨率+布局理解", "结构化输出", "线上兜底机制"]
  },
  {
    id: "mm-023",
    type: "short",
    topic: "评测",
    difficulty: "medium",
    question: "多模态问答任务为什么经常不能只看一个 benchmark 分数？",
    reference: "因为多模态任务存在分布差异、开放式答案、多步骤推理、OCR 依赖和线上任务偏差。单一 benchmark 可能只覆盖某一能力，比如感知、知识、OCR 或推理中的一部分。若只看一个分数，容易高估模型真实可用性。更合理的做法是分能力维度构建评测集，并结合线上指标、人工评估和失败案例分析。",
    keypoints: ["单 benchmark 覆盖有限", "开放式答案难评估", "线上线下分布不同", "多维评测更合理"]
  },
  {
    id: "mm-024",
    type: "short",
    topic: "数据工程",
    difficulty: "hard",
    question: "如果训练多模态模型时发现 loss 在降，但线上回答越来越“幻觉”，你会怎么排查？",
    reference: "可以从数据、目标、解码、评测四层排查。先检查训练数据是否存在弱标注、错误 caption、伪对齐样本；再看训练目标是否过度强调语言流畅性而弱化视觉 grounding；再检查推理 prompt、system instruction、temperature 等设置；最后核对离线评测是否真正覆盖了视觉证据依赖场景。必要时加入更强的 grounding 数据、拒答机制和 evidence-based 评测。",
    keypoints: ["排查数据噪声", "检查 grounding 是否不足", "检查推理解码设置", "补充证据型评测"]
  },
  {
    id: "mm-025",
    type: "short",
    topic: "推理部署",
    difficulty: "medium",
    question: "多图/长视频场景下，上下文太长导致成本过高，你有哪些优化思路？",
    reference: "可以从输入压缩、选择性处理和系统设计回答。输入侧可做帧采样、关键帧提取、区域裁剪、视觉 token 压缩；流程侧可分两阶段：先粗检索或摘要，再对候选片段精看；系统侧可做缓存、异步处理和多级模型路由。核心是让高成本视觉理解只发生在最必要的部分。",
    keypoints: ["采样/裁剪/压缩", "两阶段处理", "缓存与路由", "强调成本与效果权衡"]
  },
  {
    id: "mm-026",
    type: "short",
    topic: "多模态 Agent",
    difficulty: "hard",
    question: "请设计一个“看商品图后自动生成卖点文案并调用审核工具”的多模态 Agent 流程。",
    reference: "一个完整回答可以包括：1）输入商品图与类目信息；2）视觉模型抽取属性，如颜色、材质、款式、场景；3）结构化结果进入文案生成模块；4）生成后调用审核工具检查夸大宣传、违禁词和品牌风险；5）若审核失败则回写原因并重生成；6）记录日志与人工兜底。重点不是只会生成文案，而是整个可执行闭环。",
    keypoints: ["视觉属性抽取", "结构化中间表示", "工具审核", "失败回路与兜底"]
  },
  {
    id: "mm-027",
    type: "short",
    topic: "对齐与偏好优化",
    difficulty: "hard",
    question: "你会如何向面试官解释：SFT、DPO/RLHF 在多模态模型里各自扮演什么角色？",
    reference: "SFT 更像是把模型教会任务格式、基本行为和指令遵循；DPO/RLHF 则是在多个可行回答中进一步优化“更符合人类偏好”的那一个，比如更安全、更有帮助、更少幻觉。多模态里，这种偏好不仅体现在语言表达，还体现在是否真正基于图像证据回答、是否避免看错图胡说。",
    keypoints: ["SFT=学会任务行为", "DPO/RLHF=偏好优化", "多模态偏好涉及视觉证据", "减少幻觉和不安全输出"]
  },
  {
    id: "mm-028",
    type: "short",
    topic: "视频理解",
    difficulty: "hard",
    question: "为什么视频理解比单图更难？请从建模和工程两方面回答。",
    reference: "建模上，视频不仅有空间信息，还有时序依赖、事件边界、跨帧一致性和长程因果关系；工程上，帧数增加会带来巨大的 token 成本、显存占用和推理时延。很多系统要在“看得足够多”和“算得起”之间做折中，因此会用采样、摘要、分阶段路由、记忆机制等方法。",
    keypoints: ["时序建模更复杂", "长程依赖", "token/显存/时延成本高", "需要采样和分阶段策略"]
  },
  {
    id: "mm-029",
    type: "short",
    topic: "项目表达",
    difficulty: "medium",
    question: "如果你有一个多模态项目经历，面试时应该如何在 3 分钟内讲清楚，才能更有说服力？",
    reference: "可以按“业务目标—技术方案—关键难点—结果指标—你的贡献”五段式来讲。先说这个项目解决什么问题、为什么重要；再说模型结构和数据方案；接着突出你如何解决数据脏、评测不准、推理成本高等难点；最后给出可量化结果，并明确你亲自负责了哪些部分。比起泛泛而谈论文名词，更重要的是闭环和结果。",
    keypoints: ["目标", "方案", "难点", "结果", "个人贡献"]
  },
  {
    id: "mm-030",
    type: "short",
    topic: "评测",
    difficulty: "hard",
    question: "请说明你会如何设计一个多模态模型的线上 A/B 测试指标体系。",
    reference: "可以分为四层：业务指标、模型质量指标、系统指标、安全指标。业务指标如点击、转化、采纳率；质量指标如正确率、人工偏好、拒答合理性、证据一致性；系统指标如延迟、失败率、成本；安全指标如违规率、幻觉率、投诉率。还应注意分场景分桶观察，避免平均数掩盖关键问题。",
    keypoints: ["业务/质量/系统/安全四层", "人工偏好或一致性", "延迟与成本", "分桶分析"]
  },
  {
    id: "mm-031",
    type: "mcq",
    topic: "训练策略",
    difficulty: "hard",
    question: "参数高效微调（如 LoRA）在多模态模型中的一个主要优势是？",
    options: [
      "能完全替代所有数据清洗工作",
      "在较低训练成本下快速适配新任务或新领域",
      "保证任何任务都超过全参微调",
      "不再需要验证集"
    ],
    answer: 1,
    explanation: "LoRA 的主要价值在于降低训练成本并提高迭代效率，而不是绝对性能保证。"
  },
  {
    id: "mm-032",
    type: "mcq",
    topic: "鲁棒性",
    difficulty: "medium",
    question: "如果模型在清晰图片上表现不错，但遇到模糊、遮挡、低光就退化明显，最准确的描述是？",
    options: [
      "模型缺少鲁棒性",
      "模型太大了",
      "模型一定过拟合语言",
      "说明 tokenizer 有 bug"
    ],
    answer: 0,
    explanation: "这是典型的鲁棒性不足问题，需要通过数据增强、困难样本和真实场景评测改进。"
  },
  {
    id: "mm-033",
    type: "mcq",
    topic: "安全",
    difficulty: "medium",
    question: "多模态模型的安全问题相比纯文本新增了什么维度？",
    options: [
      "视觉输入可能包含隐私、敏感场景或对抗性图像",
      "不能输出标点符号",
      "不会产生幻觉",
      "只需做文本过滤即可"
    ],
    answer: 0,
    explanation: "多模态安全不仅要管文本输出，还要处理视觉输入中敏感内容、隐私和攻击样本。"
  },
  {
    id: "mm-034",
    type: "short",
    topic: "安全",
    difficulty: "medium",
    question: "如果你做一个看图问答产品，怎样降低模型“看错图还很自信回答”的风险？",
    reference: "可从模型、产品、评测三个层面回答。模型层面强化 grounding、加入拒答训练和不确定性表达；产品层面展示证据、允许用户追问、对高风险场景加人工审核；评测层面构建幻觉集、低质图像集和误导性问题集，持续监控。关键是让模型在看不清时学会保守而不是瞎答。",
    keypoints: ["grounding 和拒答", "产品层面证据/审核", "专门构建幻觉评测集", "让模型学会保守"]
  },
  {
    id: "mm-035",
    type: "short",
    topic: "检索增强",
    difficulty: "medium",
    question: "请解释一下：什么时候多模态 RAG 会比单纯把图片直接喂给模型更有价值？",
    reference: "当当前输入图像本身信息不够、需要外部知识或相似案例支撑时，多模态 RAG 更有价值。例如工业质检、商品识别、医疗辅助、企业知识问答等场景，仅靠当前图片可能无法判断，需要检索历史样本、说明文档、商品库或案例库来补证据。",
    keypoints: ["图片信息不足时", "需要外部知识或历史案例", "举出适用场景", "强调补充证据"]
  },
  {
    id: "mm-036",
    type: "short",
    topic: "岗位理解",
    difficulty: "easy",
    question: "如果你现在投多模态大模型岗位，面试前一周最值得重点补的三件事是什么？",
    reference: "建议补三类：第一，基本模型与训练范式，如 CLIP、ViT、VLM 架构、SFT/偏好优化；第二，自己的项目表达，把经历整理成可量化、可复盘、可追问的故事；第三，高频开放题，如数据构建、评测设计、幻觉治理、推理成本优化。这样既能答基础，又能展示业务和工程思维。",
    keypoints: ["基础范式", "项目表达", "开放题准备", "兼顾理论和工程"]
  }
];
