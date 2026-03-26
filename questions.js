const DEFAULT_QUESTION_BANK = [
  {
    "id": "q-0001",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "easy",
    "question": "关于 Sigmoid，下面哪项最能概括它的典型优势？",
    "options": [
      "计算简单，正区间梯度稳定，缓解深层网络梯度消失",
      "输出可解释为概率，常用于二分类输出层或门控结构",
      "零中心，较 Sigmoid 更利于隐藏层优化",
      "负半轴保留小斜率，缓解死亡ReLU"
    ],
    "answer": 1,
    "explanation": "Sigmoid 的常见优势是：输出可解释为概率，常用于二分类输出层或门控结构。"
  },
  {
    "id": "q-0002",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "下面哪种场景最适合优先考虑使用 Sigmoid？",
    "options": [
      "需要把输出映射为概率或门值时",
      "希望让负半轴斜率自适应学习时",
      "严格满足自归一化网络设定时",
      "既想保留负值又希望输出更平滑时"
    ],
    "answer": 0,
    "explanation": "Sigmoid 更适合的场景是：需要把输出映射为概率或门值时。"
  },
  {
    "id": "q-0003",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "下列关于 Sigmoid 的说法，哪一项正确？",
    "options": [
      "Sigmoid 的常见输出范围可概括为 (0,1)",
      "Sigmoid 的核心缺点是：仍然会在饱和区出现梯度消失",
      "Sigmoid 一般最典型的场景是：深层前馈网络、CNN、ViT 的 MLP 中常见",
      "Sigmoid 与 Tanh 完全等价"
    ],
    "answer": 0,
    "explanation": "正确说法是其输出范围或行为特点：Sigmoid 的范围可概括为 (0,1)。"
  },
  {
    "id": "q-0004",
    "type": "judge",
    "topic": "激活函数",
    "difficulty": "easy",
    "question": "判断：Sigmoid不是零中心激活。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。输出可解释为概率，常用于二分类输出层或门控结构；同时要注意其局限：大正大负时容易饱和并导致梯度变小。"
  },
  {
    "id": "q-0005",
    "type": "judge",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "判断：Sigmoid 最典型的部署位置是所有隐藏层和所有输出层都统一使用。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "不同层的激活往往按任务来选，Sigmoid 更典型的场景是：需要把输出映射为概率或门值时。"
  },
  {
    "id": "q-0006",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "easy",
    "question": "关于 Tanh，下面哪项最能概括它的典型优势？",
    "options": [
      "零中心，较 Sigmoid 更利于隐藏层优化",
      "计算简单，正区间梯度稳定，缓解深层网络梯度消失",
      "输出可解释为概率，常用于二分类输出层或门控结构",
      "负半轴保留小斜率，缓解死亡ReLU"
    ],
    "answer": 0,
    "explanation": "Tanh 的常见优势是：零中心，较 Sigmoid 更利于隐藏层优化。"
  },
  {
    "id": "q-0007",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "下面哪种场景最适合优先考虑使用 Tanh？",
    "options": [
      "希望让负半轴斜率自适应学习时",
      "需要有界且零中心的隐藏表示时",
      "严格满足自归一化网络设定时",
      "既想保留负值又希望输出更平滑时"
    ],
    "answer": 1,
    "explanation": "Tanh 更适合的场景是：需要有界且零中心的隐藏表示时。"
  },
  {
    "id": "q-0008",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "下列关于 Tanh 的说法，哪一项正确？",
    "options": [
      "Tanh 的常见输出范围可概括为 (-1,1)",
      "Tanh 的核心缺点是：大正大负时容易饱和并导致梯度变小",
      "Tanh 一般最典型的场景是：深层前馈网络、CNN、ViT 的 MLP 中常见",
      "Tanh 与 Sigmoid 完全等价"
    ],
    "answer": 0,
    "explanation": "正确说法是其输出范围或行为特点：Tanh 的范围可概括为 (-1,1)。"
  },
  {
    "id": "q-0009",
    "type": "judge",
    "topic": "激活函数",
    "difficulty": "easy",
    "question": "判断：Tanh输出在-1到1之间。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。零中心，较 Sigmoid 更利于隐藏层优化；同时要注意其局限：仍然会在饱和区出现梯度消失。"
  },
  {
    "id": "q-0010",
    "type": "judge",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "判断：Tanh 最典型的部署位置是所有隐藏层和所有输出层都统一使用。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "不同层的激活往往按任务来选，Tanh 更典型的场景是：需要有界且零中心的隐藏表示时。"
  },
  {
    "id": "q-0011",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "easy",
    "question": "关于 ReLU，下面哪项最能概括它的典型优势？",
    "options": [
      "零中心，较 Sigmoid 更利于隐藏层优化",
      "计算简单，正区间梯度稳定，缓解深层网络梯度消失",
      "负半轴保留小斜率，缓解死亡ReLU",
      "输出可解释为概率，常用于二分类输出层或门控结构"
    ],
    "answer": 1,
    "explanation": "ReLU 的常见优势是：计算简单，正区间梯度稳定，缓解深层网络梯度消失。"
  },
  {
    "id": "q-0012",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "下面哪种场景最适合优先考虑使用 ReLU？",
    "options": [
      "严格满足自归一化网络设定时",
      "希望让负半轴斜率自适应学习时",
      "既想保留负值又希望输出更平滑时",
      "深层前馈网络、CNN、ViT 的 MLP 中常见"
    ],
    "answer": 3,
    "explanation": "ReLU 更适合的场景是：深层前馈网络、CNN、ViT 的 MLP 中常见。"
  },
  {
    "id": "q-0013",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "下列关于 ReLU 的说法，哪一项正确？",
    "options": [
      "ReLU 的常见输出范围可概括为 [0,+∞)",
      "ReLU 的核心缺点是：大正大负时容易饱和并导致梯度变小",
      "ReLU 一般最典型的场景是：需要有界且零中心的隐藏表示时",
      "ReLU 与 LeakyReLU 完全等价"
    ],
    "answer": 0,
    "explanation": "正确说法是其输出范围或行为特点：ReLU 的范围可概括为 [0,+∞)。"
  },
  {
    "id": "q-0014",
    "type": "judge",
    "topic": "激活函数",
    "difficulty": "easy",
    "question": "判断：ReLU在负区间输出为0。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。计算简单，正区间梯度稳定，缓解深层网络梯度消失；同时要注意其局限：负半轴梯度为0，可能出现死亡ReLU。"
  },
  {
    "id": "q-0015",
    "type": "judge",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "判断：ReLU 最典型的部署位置是所有隐藏层和所有输出层都统一使用。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "不同层的激活往往按任务来选，ReLU 更典型的场景是：深层前馈网络、CNN、ViT 的 MLP 中常见。"
  },
  {
    "id": "q-0016",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "easy",
    "question": "关于 LeakyReLU，下面哪项最能概括它的典型优势？",
    "options": [
      "零中心，较 Sigmoid 更利于隐藏层优化",
      "负半轴保留小斜率，缓解死亡ReLU",
      "计算简单，正区间梯度稳定，缓解深层网络梯度消失",
      "输出可解释为概率，常用于二分类输出层或门控结构"
    ],
    "answer": 1,
    "explanation": "LeakyReLU 的常见优势是：负半轴保留小斜率，缓解死亡ReLU。"
  },
  {
    "id": "q-0017",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "下面哪种场景最适合优先考虑使用 LeakyReLU？",
    "options": [
      "严格满足自归一化网络设定时",
      "希望让负半轴斜率自适应学习时",
      "既想保留负值又希望输出更平滑时",
      "担心大量神经元落入负区间时"
    ],
    "answer": 3,
    "explanation": "LeakyReLU 更适合的场景是：担心大量神经元落入负区间时。"
  },
  {
    "id": "q-0018",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "下列关于 LeakyReLU 的说法，哪一项正确？",
    "options": [
      "LeakyReLU 的常见输出范围可概括为 (-∞,+∞)",
      "LeakyReLU 的核心缺点是：大正大负时容易饱和并导致梯度变小",
      "LeakyReLU 一般最典型的场景是：需要有界且零中心的隐藏表示时",
      "LeakyReLU 与 ReLU 完全等价"
    ],
    "answer": 0,
    "explanation": "正确说法是其输出范围或行为特点：LeakyReLU 的范围可概括为 (-∞,+∞)。"
  },
  {
    "id": "q-0019",
    "type": "judge",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "判断：LeakyReLU负区间通常不是0斜率。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。负半轴保留小斜率，缓解死亡ReLU；同时要注意其局限：负半轴斜率通常需要人为设定。"
  },
  {
    "id": "q-0020",
    "type": "judge",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "判断：LeakyReLU 最典型的部署位置是所有隐藏层和所有输出层都统一使用。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "不同层的激活往往按任务来选，LeakyReLU 更典型的场景是：担心大量神经元落入负区间时。"
  },
  {
    "id": "q-0021",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "关于 PReLU，下面哪项最能概括它的典型优势？",
    "options": [
      "输出可解释为概率，常用于二分类输出层或门控结构",
      "将负半轴斜率设为可学习参数，表达能力更强",
      "零中心，较 Sigmoid 更利于隐藏层优化",
      "计算简单，正区间梯度稳定，缓解深层网络梯度消失"
    ],
    "answer": 1,
    "explanation": "PReLU 的常见优势是：将负半轴斜率设为可学习参数，表达能力更强。"
  },
  {
    "id": "q-0022",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "下面哪种场景最适合优先考虑使用 PReLU？",
    "options": [
      "希望让负半轴斜率自适应学习时",
      "严格满足自归一化网络设定时",
      "担心大量神经元落入负区间时",
      "既想保留负值又希望输出更平滑时"
    ],
    "answer": 0,
    "explanation": "PReLU 更适合的场景是：希望让负半轴斜率自适应学习时。"
  },
  {
    "id": "q-0023",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "下列关于 PReLU 的说法，哪一项正确？",
    "options": [
      "PReLU 的常见输出范围可概括为 (-∞,+∞)",
      "PReLU 的核心缺点是：大正大负时容易饱和并导致梯度变小",
      "PReLU 一般最典型的场景是：需要有界且零中心的隐藏表示时",
      "PReLU 与 LeakyReLU 完全等价"
    ],
    "answer": 0,
    "explanation": "正确说法是其输出范围或行为特点：PReLU 的范围可概括为 (-∞,+∞)。"
  },
  {
    "id": "q-0024",
    "type": "judge",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "判断：PReLU的负半轴斜率可以学习。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。将负半轴斜率设为可学习参数，表达能力更强；同时要注意其局限：参数略多，可能增加过拟合风险。"
  },
  {
    "id": "q-0025",
    "type": "judge",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "判断：PReLU 最典型的部署位置是所有隐藏层和所有输出层都统一使用。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "不同层的激活往往按任务来选，PReLU 更典型的场景是：希望让负半轴斜率自适应学习时。"
  },
  {
    "id": "q-0026",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "关于 ELU，下面哪项最能概括它的典型优势？",
    "options": [
      "负区间平滑且输出均值更接近0",
      "计算简单，正区间梯度稳定，缓解深层网络梯度消失",
      "零中心，较 Sigmoid 更利于隐藏层优化",
      "输出可解释为概率，常用于二分类输出层或门控结构"
    ],
    "answer": 0,
    "explanation": "ELU 的常见优势是：负区间平滑且输出均值更接近0。"
  },
  {
    "id": "q-0027",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "下面哪种场景最适合优先考虑使用 ELU？",
    "options": [
      "既想保留负值又希望输出更平滑时",
      "担心大量神经元落入负区间时",
      "希望让负半轴斜率自适应学习时",
      "严格满足自归一化网络设定时"
    ],
    "answer": 0,
    "explanation": "ELU 更适合的场景是：既想保留负值又希望输出更平滑时。"
  },
  {
    "id": "q-0028",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "下列关于 ELU 的说法，哪一项正确？",
    "options": [
      "ELU 的常见输出范围可概括为 (-1,+∞)附近",
      "ELU 的核心缺点是：大正大负时容易饱和并导致梯度变小",
      "ELU 一般最典型的场景是：需要有界且零中心的隐藏表示时",
      "ELU 与 ReLU 完全等价"
    ],
    "answer": 0,
    "explanation": "正确说法是其输出范围或行为特点：ELU 的范围可概括为 (-1,+∞)附近。"
  },
  {
    "id": "q-0029",
    "type": "judge",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "判断：ELU在负区间是平滑的指数形式。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。负区间平滑且输出均值更接近0；同时要注意其局限：指数计算比 ReLU 更贵。"
  },
  {
    "id": "q-0030",
    "type": "judge",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "判断：ELU 最典型的部署位置是所有隐藏层和所有输出层都统一使用。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "不同层的激活往往按任务来选，ELU 更典型的场景是：既想保留负值又希望输出更平滑时。"
  },
  {
    "id": "q-0031",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "关于 SELU，下面哪项最能概括它的典型优势？",
    "options": [
      "输出可解释为概率，常用于二分类输出层或门控结构",
      "计算简单，正区间梯度稳定，缓解深层网络梯度消失",
      "零中心，较 Sigmoid 更利于隐藏层优化",
      "配合特定初始化和 AlphaDropout 时有自归一化倾向"
    ],
    "answer": 3,
    "explanation": "SELU 的常见优势是：配合特定初始化和 AlphaDropout 时有自归一化倾向。"
  },
  {
    "id": "q-0032",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "下面哪种场景最适合优先考虑使用 SELU？",
    "options": [
      "既想保留负值又希望输出更平滑时",
      "担心大量神经元落入负区间时",
      "希望让负半轴斜率自适应学习时",
      "严格满足自归一化网络设定时"
    ],
    "answer": 3,
    "explanation": "SELU 更适合的场景是：严格满足自归一化网络设定时。"
  },
  {
    "id": "q-0033",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "下列关于 SELU 的说法，哪一项正确？",
    "options": [
      "SELU 的常见输出范围可概括为 近似(-∞,+∞)",
      "SELU 的核心缺点是：大正大负时容易饱和并导致梯度变小",
      "SELU 一般最典型的场景是：需要有界且零中心的隐藏表示时",
      "SELU 与 ELU 完全等价"
    ],
    "answer": 0,
    "explanation": "正确说法是其输出范围或行为特点：SELU 的范围可概括为 近似(-∞,+∞)。"
  },
  {
    "id": "q-0034",
    "type": "judge",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "判断：SELU常与AlphaDropout配合。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。配合特定初始化和 AlphaDropout 时有自归一化倾向；同时要注意其局限：依赖较强的使用前提，并非所有架构都适配。"
  },
  {
    "id": "q-0035",
    "type": "judge",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "判断：SELU 最典型的部署位置是所有隐藏层和所有输出层都统一使用。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "不同层的激活往往按任务来选，SELU 更典型的场景是：严格满足自归一化网络设定时。"
  },
  {
    "id": "q-0036",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "关于 GELU，下面哪项最能概括它的典型优势？",
    "options": [
      "计算简单，正区间梯度稳定，缓解深层网络梯度消失",
      "输出可解释为概率，常用于二分类输出层或门控结构",
      "零中心，较 Sigmoid 更利于隐藏层优化",
      "平滑地按输入大小调制激活，Transformer 中非常常见"
    ],
    "answer": 3,
    "explanation": "GELU 的常见优势是：平滑地按输入大小调制激活，Transformer 中非常常见。"
  },
  {
    "id": "q-0037",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "下面哪种场景最适合优先考虑使用 GELU？",
    "options": [
      "既想保留负值又希望输出更平滑时",
      "担心大量神经元落入负区间时",
      "BERT、ViT 等 Transformer 前馈层",
      "希望让负半轴斜率自适应学习时"
    ],
    "answer": 2,
    "explanation": "GELU 更适合的场景是：BERT、ViT 等 Transformer 前馈层。"
  },
  {
    "id": "q-0038",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "下列关于 GELU 的说法，哪一项正确？",
    "options": [
      "GELU 的常见输出范围可概括为 (-∞,+∞)",
      "GELU 的核心缺点是：大正大负时容易饱和并导致梯度变小",
      "GELU 一般最典型的场景是：需要有界且零中心的隐藏表示时",
      "GELU 与 ReLU 完全等价"
    ],
    "answer": 0,
    "explanation": "正确说法是其输出范围或行为特点：GELU 的范围可概括为 (-∞,+∞)。"
  },
  {
    "id": "q-0039",
    "type": "judge",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "判断：GELU常见于Transformer的FFN。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。平滑地按输入大小调制激活，Transformer 中非常常见；同时要注意其局限：计算略复杂于 ReLU。"
  },
  {
    "id": "q-0040",
    "type": "judge",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "判断：GELU 最典型的部署位置是所有隐藏层和所有输出层都统一使用。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "不同层的激活往往按任务来选，GELU 更典型的场景是：BERT、ViT 等 Transformer 前馈层。"
  },
  {
    "id": "q-0041",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "关于 SiLU/Swish，下面哪项最能概括它的典型优势？",
    "options": [
      "输出可解释为概率，常用于二分类输出层或门控结构",
      "零中心，较 Sigmoid 更利于隐藏层优化",
      "计算简单，正区间梯度稳定，缓解深层网络梯度消失",
      "平滑且在正区间近似线性，很多现代模型中表现稳定"
    ],
    "answer": 3,
    "explanation": "SiLU/Swish 的常见优势是：平滑且在正区间近似线性，很多现代模型中表现稳定。"
  },
  {
    "id": "q-0042",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "下面哪种场景最适合优先考虑使用 SiLU/Swish？",
    "options": [
      "希望让负半轴斜率自适应学习时",
      "既想保留负值又希望输出更平滑时",
      "现代CNN、检测模型、部分LLM/VLM组件",
      "担心大量神经元落入负区间时"
    ],
    "answer": 2,
    "explanation": "SiLU/Swish 更适合的场景是：现代CNN、检测模型、部分LLM/VLM组件。"
  },
  {
    "id": "q-0043",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "下列关于 SiLU/Swish 的说法，哪一项正确？",
    "options": [
      "SiLU/Swish 的常见输出范围可概括为 (-∞,+∞)",
      "SiLU/Swish 的核心缺点是：大正大负时容易饱和并导致梯度变小",
      "SiLU/Swish 一般最典型的场景是：需要有界且零中心的隐藏表示时",
      "SiLU/Swish 与 GELU 完全等价"
    ],
    "answer": 0,
    "explanation": "正确说法是其输出范围或行为特点：SiLU/Swish 的范围可概括为 (-∞,+∞)。"
  },
  {
    "id": "q-0044",
    "type": "judge",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "判断：SiLU可写成 x * sigmoid(x)。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。平滑且在正区间近似线性，很多现代模型中表现稳定；同时要注意其局限：比 ReLU 计算更复杂。"
  },
  {
    "id": "q-0045",
    "type": "judge",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "判断：SiLU/Swish 最典型的部署位置是所有隐藏层和所有输出层都统一使用。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "不同层的激活往往按任务来选，SiLU/Swish 更典型的场景是：现代CNN、检测模型、部分LLM/VLM组件。"
  },
  {
    "id": "q-0046",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "关于 Mish，下面哪项最能概括它的典型优势？",
    "options": [
      "零中心，较 Sigmoid 更利于隐藏层优化",
      "输出可解释为概率，常用于二分类输出层或门控结构",
      "计算简单，正区间梯度稳定，缓解深层网络梯度消失",
      "平滑且保留小负值，经验上有时比 ReLU 更稳"
    ],
    "answer": 3,
    "explanation": "Mish 的常见优势是：平滑且保留小负值，经验上有时比 ReLU 更稳。"
  },
  {
    "id": "q-0047",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "下面哪种场景最适合优先考虑使用 Mish？",
    "options": [
      "希望让负半轴斜率自适应学习时",
      "担心大量神经元落入负区间时",
      "追求训练平滑性且不太敏感于额外算力时",
      "既想保留负值又希望输出更平滑时"
    ],
    "answer": 2,
    "explanation": "Mish 更适合的场景是：追求训练平滑性且不太敏感于额外算力时。"
  },
  {
    "id": "q-0048",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "下列关于 Mish 的说法，哪一项正确？",
    "options": [
      "Mish 的常见输出范围可概括为 (-∞,+∞)",
      "Mish 的核心缺点是：大正大负时容易饱和并导致梯度变小",
      "Mish 一般最典型的场景是：需要有界且零中心的隐藏表示时",
      "Mish 与 SiLU/Swish 完全等价"
    ],
    "answer": 0,
    "explanation": "正确说法是其输出范围或行为特点：Mish 的范围可概括为 (-∞,+∞)。"
  },
  {
    "id": "q-0049",
    "type": "judge",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "判断：Mish是平滑的非单调激活。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。平滑且保留小负值，经验上有时比 ReLU 更稳；同时要注意其局限：计算较复杂，部署端未必划算。"
  },
  {
    "id": "q-0050",
    "type": "judge",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "判断：Mish 最典型的部署位置是所有隐藏层和所有输出层都统一使用。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "不同层的激活往往按任务来选，Mish 更典型的场景是：追求训练平滑性且不太敏感于额外算力时。"
  },
  {
    "id": "q-0051",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "关于 Softmax，下面哪项最能概括它的典型优势？",
    "options": [
      "输出可解释为概率，常用于二分类输出层或门控结构",
      "可把一组logits转成类别分布",
      "计算简单，正区间梯度稳定，缓解深层网络梯度消失",
      "零中心，较 Sigmoid 更利于隐藏层优化"
    ],
    "answer": 1,
    "explanation": "Softmax 的常见优势是：可把一组logits转成类别分布。"
  },
  {
    "id": "q-0052",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "下面哪种场景最适合优先考虑使用 Softmax？",
    "options": [
      "担心大量神经元落入负区间时",
      "多分类输出层",
      "既想保留负值又希望输出更平滑时",
      "希望让负半轴斜率自适应学习时"
    ],
    "answer": 1,
    "explanation": "Softmax 更适合的场景是：多分类输出层。"
  },
  {
    "id": "q-0053",
    "type": "mcq",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "下列关于 Softmax 的说法，哪一项正确？",
    "options": [
      "Softmax 的常见输出范围可概括为 各分量在(0,1)且和为1",
      "Softmax 的核心缺点是：大正大负时容易饱和并导致梯度变小",
      "Softmax 一般最典型的场景是：需要有界且零中心的隐藏表示时",
      "Softmax 与 Sigmoid 完全等价"
    ],
    "answer": 0,
    "explanation": "正确说法是其输出范围或行为特点：Softmax 的范围可概括为 各分量在(0,1)且和为1。"
  },
  {
    "id": "q-0054",
    "type": "judge",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "判断：Softmax常用于互斥多分类输出。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。可把一组logits转成类别分布；同时要注意其局限：不适合作为隐藏层通用激活。"
  },
  {
    "id": "q-0055",
    "type": "judge",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "判断：Softmax 最典型的部署位置是所有隐藏层和所有输出层都统一使用。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "不同层的激活往往按任务来选，Softmax 更典型的场景是：多分类输出层。"
  },
  {
    "id": "q-0056",
    "type": "short",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "请比较 Sigmoid 和 Softmax 的核心差异、优缺点，以及各自更常见的使用场景。",
    "reference": "Sigmoid 与 Softmax 的比较可从三点展开：一是函数形状和梯度性质，二是训练稳定性与计算代价，三是典型应用位置。分别适用于二分类/多标签概率建模和互斥多分类归一化。回答时最好说明何时更关心平滑性、何时更关心计算简单和部署效率。",
    "keypoints": [
      "先说明两种函数的形状与输出范围/梯度特点",
      "再比较训练稳定性、是否容易梯度消失或死亡神经元",
      "补充各自更常见的模型与部署场景"
    ]
  },
  {
    "id": "q-0057",
    "type": "short",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "请比较 ReLU 和 LeakyReLU 的核心差异、优缺点，以及各自更常见的使用场景。",
    "reference": "ReLU 与 LeakyReLU 的比较可从三点展开：一是函数形状和梯度性质，二是训练稳定性与计算代价，三是典型应用位置。核心区别在于负半轴是否保留非零斜率。回答时最好说明何时更关心平滑性、何时更关心计算简单和部署效率。",
    "keypoints": [
      "先说明两种函数的形状与输出范围/梯度特点",
      "再比较训练稳定性、是否容易梯度消失或死亡神经元",
      "补充各自更常见的模型与部署场景"
    ]
  },
  {
    "id": "q-0058",
    "type": "short",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "请比较 LeakyReLU 和 PReLU 的核心差异、优缺点，以及各自更常见的使用场景。",
    "reference": "LeakyReLU 与 PReLU 的比较可从三点展开：一是函数形状和梯度性质，二是训练稳定性与计算代价，三是典型应用位置。核心区别在于负半轴斜率是固定还是可学习。回答时最好说明何时更关心平滑性、何时更关心计算简单和部署效率。",
    "keypoints": [
      "先说明两种函数的形状与输出范围/梯度特点",
      "再比较训练稳定性、是否容易梯度消失或死亡神经元",
      "补充各自更常见的模型与部署场景"
    ]
  },
  {
    "id": "q-0059",
    "type": "short",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "请比较 ELU 和 SELU 的核心差异、优缺点，以及各自更常见的使用场景。",
    "reference": "ELU 与 SELU 的比较可从三点展开：一是函数形状和梯度性质，二是训练稳定性与计算代价，三是典型应用位置。SELU在特定前提下强调自归一化，ELU更一般。回答时最好说明何时更关心平滑性、何时更关心计算简单和部署效率。",
    "keypoints": [
      "先说明两种函数的形状与输出范围/梯度特点",
      "再比较训练稳定性、是否容易梯度消失或死亡神经元",
      "补充各自更常见的模型与部署场景"
    ]
  },
  {
    "id": "q-0060",
    "type": "short",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "请比较 GELU 和 ReLU 的核心差异、优缺点，以及各自更常见的使用场景。",
    "reference": "GELU 与 ReLU 的比较可从三点展开：一是函数形状和梯度性质，二是训练稳定性与计算代价，三是典型应用位置。GELU更平滑，Transformer中更常见。回答时最好说明何时更关心平滑性、何时更关心计算简单和部署效率。",
    "keypoints": [
      "先说明两种函数的形状与输出范围/梯度特点",
      "再比较训练稳定性、是否容易梯度消失或死亡神经元",
      "补充各自更常见的模型与部署场景"
    ]
  },
  {
    "id": "q-0061",
    "type": "short",
    "topic": "激活函数",
    "difficulty": "medium",
    "question": "请比较 GELU 和 SiLU/Swish 的核心差异、优缺点，以及各自更常见的使用场景。",
    "reference": "GELU 与 SiLU/Swish 的比较可从三点展开：一是函数形状和梯度性质，二是训练稳定性与计算代价，三是典型应用位置。两者都平滑，GELU在Transformer更常见，SiLU在很多现代视觉模型中也常见。回答时最好说明何时更关心平滑性、何时更关心计算简单和部署效率。",
    "keypoints": [
      "先说明两种函数的形状与输出范围/梯度特点",
      "再比较训练稳定性、是否容易梯度消失或死亡神经元",
      "补充各自更常见的模型与部署场景"
    ]
  },
  {
    "id": "q-0062",
    "type": "mcq",
    "topic": "归一化",
    "difficulty": "easy",
    "question": "BatchNorm 的归一化统计通常主要发生在哪个粒度上？",
    "options": [
      "把通道分组后在组内做归一化",
      "在 batch 维度上对每个通道统计均值和方差",
      "在单个样本的特征维度上归一化",
      "对单个样本单个通道内部做归一化"
    ],
    "answer": 1,
    "explanation": "BatchNorm 的统计粒度是：在 batch 维度上对每个通道统计均值和方差。"
  },
  {
    "id": "q-0063",
    "type": "mcq",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "相较于 LayerNorm，BatchNorm 更典型的优势是什么？",
    "options": [
      "实现简单、数值稳定，在很多 LLM 中常用",
      "通常能加速收敛，并对较大学习率更友好",
      "对 batch size 不敏感，视觉任务中小 batch 也较稳定",
      "归一化发生在参数上而非激活上，能改善优化条件"
    ],
    "answer": 1,
    "explanation": "BatchNorm 的典型优势是：通常能加速收敛，并对较大学习率更友好。"
  },
  {
    "id": "q-0064",
    "type": "mcq",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "下面哪种任务或架构更常优先使用 BatchNorm？",
    "options": [
      "风格迁移、生成任务",
      "现代大语言模型、部分多模态大模型",
      "CNN 和较大 batch 的视觉任务",
      "检测分割等小 batch 视觉任务"
    ],
    "answer": 2,
    "explanation": "BatchNorm 更常见的场景是：CNN 和较大 batch 的视觉任务。"
  },
  {
    "id": "q-0065",
    "type": "judge",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "判断：BatchNorm 训练时依赖 batch 统计量。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。BatchNorm 的优势在于：通常能加速收敛，并对较大学习率更友好；但也有局限：依赖 batch 统计量，小 batch 或分布不稳定时效果可能变差。"
  },
  {
    "id": "q-0066",
    "type": "judge",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "判断：BatchNorm 完全不受实现细节、batch 大小或分组数影响。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "该说法错误。BatchNorm 的实际效果与统计方式、batch 设置、分组数或模型结构都有关系。"
  },
  {
    "id": "q-0067",
    "type": "mcq",
    "topic": "归一化",
    "difficulty": "easy",
    "question": "LayerNorm 的归一化统计通常主要发生在哪个粒度上？",
    "options": [
      "对单个样本单个通道内部做归一化",
      "把通道分组后在组内做归一化",
      "在单个样本的特征维度上归一化",
      "在 batch 维度上对每个通道统计均值和方差"
    ],
    "answer": 2,
    "explanation": "LayerNorm 的统计粒度是：在单个样本的特征维度上归一化。"
  },
  {
    "id": "q-0068",
    "type": "mcq",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "相较于 BatchNorm，LayerNorm 更典型的优势是什么？",
    "options": [
      "对 batch size 不敏感，视觉任务中小 batch 也较稳定",
      "实现简单、数值稳定，在很多 LLM 中常用",
      "不依赖 batch 大小，适合 NLP、Transformer 和小 batch 场景",
      "归一化发生在参数上而非激活上，能改善优化条件"
    ],
    "answer": 2,
    "explanation": "LayerNorm 的典型优势是：不依赖 batch 大小，适合 NLP、Transformer 和小 batch 场景。"
  },
  {
    "id": "q-0069",
    "type": "mcq",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "下面哪种任务或架构更常优先使用 LayerNorm？",
    "options": [
      "现代大语言模型、部分多模态大模型",
      "检测分割等小 batch 视觉任务",
      "Transformer、RNN、LLM/VLM",
      "风格迁移、生成任务"
    ],
    "answer": 2,
    "explanation": "LayerNorm 更常见的场景是：Transformer、RNN、LLM/VLM。"
  },
  {
    "id": "q-0070",
    "type": "judge",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "判断：LayerNorm 不需要跨样本统计。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。LayerNorm 的优势在于：不依赖 batch 大小，适合 NLP、Transformer 和小 batch 场景；但也有局限：在卷积视觉任务中未必总优于 BatchNorm。"
  },
  {
    "id": "q-0071",
    "type": "judge",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "判断：LayerNorm 完全不受实现细节、batch 大小或分组数影响。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "该说法错误。LayerNorm 的实际效果与统计方式、batch 设置、分组数或模型结构都有关系。"
  },
  {
    "id": "q-0072",
    "type": "mcq",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "InstanceNorm 的归一化统计通常主要发生在哪个粒度上？",
    "options": [
      "把通道分组后在组内做归一化",
      "在 batch 维度上对每个通道统计均值和方差",
      "在单个样本的特征维度上归一化",
      "对单个样本单个通道内部做归一化"
    ],
    "answer": 3,
    "explanation": "InstanceNorm 的统计粒度是：对单个样本单个通道内部做归一化。"
  },
  {
    "id": "q-0073",
    "type": "mcq",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "相较于 BatchNorm，InstanceNorm 更典型的优势是什么？",
    "options": [
      "对 batch size 不敏感，视觉任务中小 batch 也较稳定",
      "常用于风格迁移，能减弱样本级风格差异",
      "归一化发生在参数上而非激活上，能改善优化条件",
      "实现简单、数值稳定，在很多 LLM 中常用"
    ],
    "answer": 1,
    "explanation": "InstanceNorm 的典型优势是：常用于风格迁移，能减弱样本级风格差异。"
  },
  {
    "id": "q-0074",
    "type": "mcq",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "下面哪种任务或架构更常优先使用 InstanceNorm？",
    "options": [
      "风格迁移、生成任务",
      "现代大语言模型、部分多模态大模型",
      "检测分割等小 batch 视觉任务",
      "Transformer、RNN、LLM/VLM"
    ],
    "answer": 0,
    "explanation": "InstanceNorm 更常见的场景是：风格迁移、生成任务。"
  },
  {
    "id": "q-0075",
    "type": "judge",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "判断：InstanceNorm 常见于风格迁移。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。InstanceNorm 的优势在于：常用于风格迁移，能减弱样本级风格差异；但也有局限：可能削弱与实例风格相关的全局对比度信息。"
  },
  {
    "id": "q-0076",
    "type": "judge",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "判断：InstanceNorm 完全不受实现细节、batch 大小或分组数影响。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "该说法错误。InstanceNorm 的实际效果与统计方式、batch 设置、分组数或模型结构都有关系。"
  },
  {
    "id": "q-0077",
    "type": "mcq",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "GroupNorm 的归一化统计通常主要发生在哪个粒度上？",
    "options": [
      "把通道分组后在组内做归一化",
      "对单个样本单个通道内部做归一化",
      "在 batch 维度上对每个通道统计均值和方差",
      "在单个样本的特征维度上归一化"
    ],
    "answer": 0,
    "explanation": "GroupNorm 的统计粒度是：把通道分组后在组内做归一化。"
  },
  {
    "id": "q-0078",
    "type": "mcq",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "相较于 BatchNorm，GroupNorm 更典型的优势是什么？",
    "options": [
      "归一化发生在参数上而非激活上，能改善优化条件",
      "常用于风格迁移，能减弱样本级风格差异",
      "对 batch size 不敏感，视觉任务中小 batch 也较稳定",
      "实现简单、数值稳定，在很多 LLM 中常用"
    ],
    "answer": 2,
    "explanation": "GroupNorm 的典型优势是：对 batch size 不敏感，视觉任务中小 batch 也较稳定。"
  },
  {
    "id": "q-0079",
    "type": "mcq",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "下面哪种任务或架构更常优先使用 GroupNorm？",
    "options": [
      "现代大语言模型、部分多模态大模型",
      "风格迁移、生成任务",
      "Transformer、RNN、LLM/VLM",
      "检测分割等小 batch 视觉任务"
    ],
    "answer": 3,
    "explanation": "GroupNorm 更常见的场景是：检测分割等小 batch 视觉任务。"
  },
  {
    "id": "q-0080",
    "type": "judge",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "判断：GroupNorm 对 batch 大小不敏感。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。GroupNorm 的优势在于：对 batch size 不敏感，视觉任务中小 batch 也较稳定；但也有局限：分组数需要设计，极端设置可能退化为 IN 或 LN。"
  },
  {
    "id": "q-0081",
    "type": "judge",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "判断：GroupNorm 完全不受实现细节、batch 大小或分组数影响。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "该说法错误。GroupNorm 的实际效果与统计方式、batch 设置、分组数或模型结构都有关系。"
  },
  {
    "id": "q-0082",
    "type": "mcq",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "RMSNorm 的归一化统计通常主要发生在哪个粒度上？",
    "options": [
      "对单个样本单个通道内部做归一化",
      "在单个样本的特征维度上归一化",
      "只按均方根缩放，通常不显式减去均值",
      "在 batch 维度上对每个通道统计均值和方差"
    ],
    "answer": 2,
    "explanation": "RMSNorm 的统计粒度是：只按均方根缩放，通常不显式减去均值。"
  },
  {
    "id": "q-0083",
    "type": "mcq",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "相较于 LayerNorm，RMSNorm 更典型的优势是什么？",
    "options": [
      "常用于风格迁移，能减弱样本级风格差异",
      "归一化发生在参数上而非激活上，能改善优化条件",
      "实现简单、数值稳定，在很多 LLM 中常用",
      "对 batch size 不敏感，视觉任务中小 batch 也较稳定"
    ],
    "answer": 2,
    "explanation": "RMSNorm 的典型优势是：实现简单、数值稳定，在很多 LLM 中常用。"
  },
  {
    "id": "q-0084",
    "type": "mcq",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "下面哪种任务或架构更常优先使用 RMSNorm？",
    "options": [
      "检测分割等小 batch 视觉任务",
      "Transformer、RNN、LLM/VLM",
      "现代大语言模型、部分多模态大模型",
      "风格迁移、生成任务"
    ],
    "answer": 2,
    "explanation": "RMSNorm 更常见的场景是：现代大语言模型、部分多模态大模型。"
  },
  {
    "id": "q-0085",
    "type": "judge",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "判断：RMSNorm 通常不做均值中心化。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。RMSNorm 的优势在于：实现简单、数值稳定，在很多 LLM 中常用；但也有局限：与 LayerNorm 的行为不完全相同。"
  },
  {
    "id": "q-0086",
    "type": "judge",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "判断：RMSNorm 完全不受实现细节、batch 大小或分组数影响。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "该说法错误。RMSNorm 的实际效果与统计方式、batch 设置、分组数或模型结构都有关系。"
  },
  {
    "id": "q-0087",
    "type": "mcq",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "WeightNorm 的归一化统计通常主要发生在哪个粒度上？",
    "options": [
      "在 batch 维度上对每个通道统计均值和方差",
      "在单个样本的特征维度上归一化",
      "重参数化权重向量的长度和方向",
      "对单个样本单个通道内部做归一化"
    ],
    "answer": 2,
    "explanation": "WeightNorm 的统计粒度是：重参数化权重向量的长度和方向。"
  },
  {
    "id": "q-0088",
    "type": "mcq",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "相较于 BatchNorm，WeightNorm 更典型的优势是什么？",
    "options": [
      "实现简单、数值稳定，在很多 LLM 中常用",
      "归一化发生在参数上而非激活上，能改善优化条件",
      "对 batch size 不敏感，视觉任务中小 batch 也较稳定",
      "常用于风格迁移，能减弱样本级风格差异"
    ],
    "answer": 1,
    "explanation": "WeightNorm 的典型优势是：归一化发生在参数上而非激活上，能改善优化条件。"
  },
  {
    "id": "q-0089",
    "type": "mcq",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "下面哪种任务或架构更常优先使用 WeightNorm？",
    "options": [
      "Transformer、RNN、LLM/VLM",
      "检测分割等小 batch 视觉任务",
      "风格迁移、生成任务",
      "某些需要重参数化优化的模型"
    ],
    "answer": 3,
    "explanation": "WeightNorm 更常见的场景是：某些需要重参数化优化的模型。"
  },
  {
    "id": "q-0090",
    "type": "judge",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "判断：WeightNorm 作用对象是参数而不是激活。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。WeightNorm 的优势在于：归一化发生在参数上而非激活上，能改善优化条件；但也有局限：它不是传统意义上的激活归一化层。"
  },
  {
    "id": "q-0091",
    "type": "judge",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "判断：WeightNorm 完全不受实现细节、batch 大小或分组数影响。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "该说法错误。WeightNorm 的实际效果与统计方式、batch 设置、分组数或模型结构都有关系。"
  },
  {
    "id": "q-0092",
    "type": "short",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "请系统比较 BatchNorm 和 LayerNorm。",
    "reference": "比较 BatchNorm 和 LayerNorm 时，不要只说“一个好一个坏”。应从统计维度、对 batch 的依赖、训练/推理行为、适用任务和工程 trade-off 展开。重点包括：比较统计维度、对 batch size 的依赖、在 CNN/Transformer 中的典型用法。",
    "keypoints": [
      "先说明归一化统计在什么维度上计算",
      "再比较对 batch size、分布漂移和训练稳定性的影响",
      "最后结合具体任务说明选型依据"
    ]
  },
  {
    "id": "q-0093",
    "type": "short",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "请系统比较 LayerNorm 和 RMSNorm。",
    "reference": "比较 LayerNorm 和 RMSNorm 时，不要只说“一个好一个坏”。应从统计维度、对 batch 的依赖、训练/推理行为、适用任务和工程 trade-off 展开。重点包括：比较是否做均值中心化、数值稳定性和在 LLM 中的常见原因。",
    "keypoints": [
      "先说明归一化统计在什么维度上计算",
      "再比较对 batch size、分布漂移和训练稳定性的影响",
      "最后结合具体任务说明选型依据"
    ]
  },
  {
    "id": "q-0094",
    "type": "short",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "请系统比较 BatchNorm 和 GroupNorm。",
    "reference": "比较 BatchNorm 和 GroupNorm 时，不要只说“一个好一个坏”。应从统计维度、对 batch 的依赖、训练/推理行为、适用任务和工程 trade-off 展开。重点包括：比较小 batch 视觉任务中的稳定性差异。",
    "keypoints": [
      "先说明归一化统计在什么维度上计算",
      "再比较对 batch size、分布漂移和训练稳定性的影响",
      "最后结合具体任务说明选型依据"
    ]
  },
  {
    "id": "q-0095",
    "type": "short",
    "topic": "归一化",
    "difficulty": "medium",
    "question": "请系统比较 InstanceNorm 和 GroupNorm。",
    "reference": "比较 InstanceNorm 和 GroupNorm 时，不要只说“一个好一个坏”。应从统计维度、对 batch 的依赖、训练/推理行为、适用任务和工程 trade-off 展开。重点包括：比较它们在风格迁移与通用视觉建模中的适配性。",
    "keypoints": [
      "先说明归一化统计在什么维度上计算",
      "再比较对 batch size、分布漂移和训练稳定性的影响",
      "最后结合具体任务说明选型依据"
    ]
  },
  {
    "id": "q-0096",
    "type": "mcq",
    "topic": "泛化与正则化",
    "difficulty": "easy",
    "question": "下列哪项最符合“过拟合”的核心含义？",
    "options": [
      "模型记住训练集细节而泛化差",
      "让显存占用固定不变",
      "保证训练集和测试集指标完全一致",
      "只与前端界面有关"
    ],
    "answer": 0,
    "explanation": "过拟合 的核心是：模型记住训练集细节而泛化差。"
  },
  {
    "id": "q-0097",
    "type": "mcq",
    "topic": "泛化与正则化",
    "difficulty": "medium",
    "question": "关于 过拟合，哪一项最典型？",
    "options": [
      "训练误差低、验证误差高",
      "一定会提升训练集精度",
      "只能用于无监督学习",
      "与模型泛化无关"
    ],
    "answer": 0,
    "explanation": "过拟合 的典型现象或作用是：训练误差低、验证误差高。"
  },
  {
    "id": "q-0098",
    "type": "mcq",
    "topic": "泛化与正则化",
    "difficulty": "medium",
    "question": "面对 过拟合 相关问题，下面哪项处理最合理？",
    "options": [
      "数据增强、早停、权重衰减、降低模型容量",
      "盲目把学习率调到 0",
      "删除验证集",
      "只看单次训练结果"
    ],
    "answer": 0,
    "explanation": "更合理的处理包括：数据增强、早停、权重衰减、降低模型容量。"
  },
  {
    "id": "q-0099",
    "type": "judge",
    "topic": "泛化与正则化",
    "difficulty": "medium",
    "question": "判断：过拟合 与模型的泛化能力、数据规模或训练策略无关。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "该说法错误。过拟合 往往和 模型容量过大、数据太少或正则不足 直接相关。"
  },
  {
    "id": "q-0100",
    "type": "mcq",
    "topic": "泛化与正则化",
    "difficulty": "easy",
    "question": "下列哪项最符合“欠拟合”的核心含义？",
    "options": [
      "模型连训练集都学不好",
      "让显存占用固定不变",
      "保证训练集和测试集指标完全一致",
      "只与前端界面有关"
    ],
    "answer": 0,
    "explanation": "欠拟合 的核心是：模型连训练集都学不好。"
  },
  {
    "id": "q-0101",
    "type": "mcq",
    "topic": "泛化与正则化",
    "difficulty": "medium",
    "question": "关于 欠拟合，哪一项最典型？",
    "options": [
      "训练误差和验证误差都较高",
      "一定会提升训练集精度",
      "只能用于无监督学习",
      "与模型泛化无关"
    ],
    "answer": 0,
    "explanation": "欠拟合 的典型现象或作用是：训练误差和验证误差都较高。"
  },
  {
    "id": "q-0102",
    "type": "mcq",
    "topic": "泛化与正则化",
    "difficulty": "medium",
    "question": "面对 欠拟合 相关问题，下面哪项处理最合理？",
    "options": [
      "增大模型、训练更久、提高特征表达",
      "盲目把学习率调到 0",
      "删除验证集",
      "只看单次训练结果"
    ],
    "answer": 0,
    "explanation": "更合理的处理包括：增大模型、训练更久、提高特征表达。"
  },
  {
    "id": "q-0103",
    "type": "judge",
    "topic": "泛化与正则化",
    "difficulty": "medium",
    "question": "判断：欠拟合 与模型的泛化能力、数据规模或训练策略无关。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "该说法错误。欠拟合 往往和 模型容量不足、训练不充分或特征表达弱 直接相关。"
  },
  {
    "id": "q-0104",
    "type": "mcq",
    "topic": "泛化与正则化",
    "difficulty": "easy",
    "question": "下列哪项最符合“数据增强”的核心含义？",
    "options": [
      "扩展样本多样性",
      "让显存占用固定不变",
      "保证训练集和测试集指标完全一致",
      "只与前端界面有关"
    ],
    "answer": 0,
    "explanation": "数据增强 的核心是：扩展样本多样性。"
  },
  {
    "id": "q-0105",
    "type": "mcq",
    "topic": "泛化与正则化",
    "difficulty": "medium",
    "question": "关于 数据增强，哪一项最典型？",
    "options": [
      "常用于缓解过拟合",
      "一定会提升训练集精度",
      "只能用于无监督学习",
      "与模型泛化无关"
    ],
    "answer": 0,
    "explanation": "数据增强 的典型现象或作用是：常用于缓解过拟合。"
  },
  {
    "id": "q-0106",
    "type": "mcq",
    "topic": "泛化与正则化",
    "difficulty": "medium",
    "question": "面对 数据增强 相关问题，下面哪项处理最合理？",
    "options": [
      "随机裁剪、翻转、颜色扰动、Mixup/CutMix 等",
      "盲目把学习率调到 0",
      "删除验证集",
      "只看单次训练结果"
    ],
    "answer": 0,
    "explanation": "更合理的处理包括：随机裁剪、翻转、颜色扰动、Mixup/CutMix 等。"
  },
  {
    "id": "q-0107",
    "type": "judge",
    "topic": "泛化与正则化",
    "difficulty": "medium",
    "question": "判断：数据增强 与模型的泛化能力、数据规模或训练策略无关。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "该说法错误。数据增强 往往和 训练数据有限 直接相关。"
  },
  {
    "id": "q-0108",
    "type": "mcq",
    "topic": "泛化与正则化",
    "difficulty": "easy",
    "question": "下列哪项最符合“Dropout”的核心含义？",
    "options": [
      "训练时随机失活部分神经元",
      "让显存占用固定不变",
      "保证训练集和测试集指标完全一致",
      "只与前端界面有关"
    ],
    "answer": 0,
    "explanation": "Dropout 的核心是：训练时随机失活部分神经元。"
  },
  {
    "id": "q-0109",
    "type": "mcq",
    "topic": "泛化与正则化",
    "difficulty": "medium",
    "question": "关于 Dropout，哪一项最典型？",
    "options": [
      "降低协同适应",
      "一定会提升训练集精度",
      "只能用于无监督学习",
      "与模型泛化无关"
    ],
    "answer": 0,
    "explanation": "Dropout 的典型现象或作用是：降低协同适应。"
  },
  {
    "id": "q-0110",
    "type": "mcq",
    "topic": "泛化与正则化",
    "difficulty": "medium",
    "question": "面对 Dropout 相关问题，下面哪项处理最合理？",
    "options": [
      "推理时通常关闭并做期望补偿",
      "盲目把学习率调到 0",
      "删除验证集",
      "只看单次训练结果"
    ],
    "answer": 0,
    "explanation": "更合理的处理包括：推理时通常关闭并做期望补偿。"
  },
  {
    "id": "q-0111",
    "type": "judge",
    "topic": "泛化与正则化",
    "difficulty": "medium",
    "question": "判断：Dropout 与模型的泛化能力、数据规模或训练策略无关。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "该说法错误。Dropout 往往和 减少过拟合 直接相关。"
  },
  {
    "id": "q-0112",
    "type": "mcq",
    "topic": "泛化与正则化",
    "difficulty": "easy",
    "question": "下列哪项最符合“Weight Decay”的核心含义？",
    "options": [
      "惩罚过大的参数范数",
      "让显存占用固定不变",
      "保证训练集和测试集指标完全一致",
      "只与前端界面有关"
    ],
    "answer": 0,
    "explanation": "Weight Decay 的核心是：惩罚过大的参数范数。"
  },
  {
    "id": "q-0113",
    "type": "mcq",
    "topic": "泛化与正则化",
    "difficulty": "medium",
    "question": "关于 Weight Decay，哪一项最典型？",
    "options": [
      "抑制模型过度复杂化",
      "一定会提升训练集精度",
      "只能用于无监督学习",
      "与模型泛化无关"
    ],
    "answer": 0,
    "explanation": "Weight Decay 的典型现象或作用是：抑制模型过度复杂化。"
  },
  {
    "id": "q-0114",
    "type": "mcq",
    "topic": "泛化与正则化",
    "difficulty": "medium",
    "question": "面对 Weight Decay 相关问题，下面哪项处理最合理？",
    "options": [
      "在 AdamW 中与自适应更新解耦",
      "盲目把学习率调到 0",
      "删除验证集",
      "只看单次训练结果"
    ],
    "answer": 0,
    "explanation": "更合理的处理包括：在 AdamW 中与自适应更新解耦。"
  },
  {
    "id": "q-0115",
    "type": "judge",
    "topic": "泛化与正则化",
    "difficulty": "medium",
    "question": "判断：Weight Decay 与模型的泛化能力、数据规模或训练策略无关。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "该说法错误。Weight Decay 往往和 作为正则手段改善泛化 直接相关。"
  },
  {
    "id": "q-0116",
    "type": "mcq",
    "topic": "泛化与正则化",
    "difficulty": "easy",
    "question": "下列哪项最符合“Early Stopping”的核心含义？",
    "options": [
      "在验证集性能不再提升时停止训练",
      "让显存占用固定不变",
      "保证训练集和测试集指标完全一致",
      "只与前端界面有关"
    ],
    "answer": 0,
    "explanation": "Early Stopping 的核心是：在验证集性能不再提升时停止训练。"
  },
  {
    "id": "q-0117",
    "type": "mcq",
    "topic": "泛化与正则化",
    "difficulty": "medium",
    "question": "关于 Early Stopping，哪一项最典型？",
    "options": [
      "防止后期继续拟合噪声",
      "一定会提升训练集精度",
      "只能用于无监督学习",
      "与模型泛化无关"
    ],
    "answer": 0,
    "explanation": "Early Stopping 的典型现象或作用是：防止后期继续拟合噪声。"
  },
  {
    "id": "q-0118",
    "type": "mcq",
    "topic": "泛化与正则化",
    "difficulty": "medium",
    "question": "面对 Early Stopping 相关问题，下面哪项处理最合理？",
    "options": [
      "与保存最佳 checkpoint 配合",
      "盲目把学习率调到 0",
      "删除验证集",
      "只看单次训练结果"
    ],
    "answer": 0,
    "explanation": "更合理的处理包括：与保存最佳 checkpoint 配合。"
  },
  {
    "id": "q-0119",
    "type": "judge",
    "topic": "泛化与正则化",
    "difficulty": "medium",
    "question": "判断：Early Stopping 与模型的泛化能力、数据规模或训练策略无关。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "该说法错误。Early Stopping 往往和 训练轮数过多 直接相关。"
  },
  {
    "id": "q-0120",
    "type": "mcq",
    "topic": "泛化与正则化",
    "difficulty": "easy",
    "question": "下列哪项最符合“Label Smoothing”的核心含义？",
    "options": [
      "把 one-hot 标签软化",
      "让显存占用固定不变",
      "保证训练集和测试集指标完全一致",
      "只与前端界面有关"
    ],
    "answer": 0,
    "explanation": "Label Smoothing 的核心是：把 one-hot 标签软化。"
  },
  {
    "id": "q-0121",
    "type": "mcq",
    "topic": "泛化与正则化",
    "difficulty": "medium",
    "question": "关于 Label Smoothing，哪一项最典型？",
    "options": [
      "降低模型过度自信",
      "一定会提升训练集精度",
      "只能用于无监督学习",
      "与模型泛化无关"
    ],
    "answer": 0,
    "explanation": "Label Smoothing 的典型现象或作用是：降低模型过度自信。"
  },
  {
    "id": "q-0122",
    "type": "mcq",
    "topic": "泛化与正则化",
    "difficulty": "medium",
    "question": "面对 Label Smoothing 相关问题，下面哪项处理最合理？",
    "options": [
      "分类任务中常见",
      "盲目把学习率调到 0",
      "删除验证集",
      "只看单次训练结果"
    ],
    "answer": 0,
    "explanation": "更合理的处理包括：分类任务中常见。"
  },
  {
    "id": "q-0123",
    "type": "judge",
    "topic": "泛化与正则化",
    "difficulty": "medium",
    "question": "判断：Label Smoothing 与模型的泛化能力、数据规模或训练策略无关。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "该说法错误。Label Smoothing 往往和 改善校准与泛化 直接相关。"
  },
  {
    "id": "q-0124",
    "type": "mcq",
    "topic": "泛化与正则化",
    "difficulty": "easy",
    "question": "下列哪项最符合“Cross Validation”的核心含义？",
    "options": [
      "用多折验证评估稳定性",
      "让显存占用固定不变",
      "保证训练集和测试集指标完全一致",
      "只与前端界面有关"
    ],
    "answer": 0,
    "explanation": "Cross Validation 的核心是：用多折验证评估稳定性。"
  },
  {
    "id": "q-0125",
    "type": "mcq",
    "topic": "泛化与正则化",
    "difficulty": "medium",
    "question": "关于 Cross Validation，哪一项最典型？",
    "options": [
      "减少单次划分偶然性",
      "一定会提升训练集精度",
      "只能用于无监督学习",
      "与模型泛化无关"
    ],
    "answer": 0,
    "explanation": "Cross Validation 的典型现象或作用是：减少单次划分偶然性。"
  },
  {
    "id": "q-0126",
    "type": "mcq",
    "topic": "泛化与正则化",
    "difficulty": "medium",
    "question": "面对 Cross Validation 相关问题，下面哪项处理最合理？",
    "options": [
      "常用于传统 ML 或小数据深度学习",
      "盲目把学习率调到 0",
      "删除验证集",
      "只看单次训练结果"
    ],
    "answer": 0,
    "explanation": "更合理的处理包括：常用于传统 ML 或小数据深度学习。"
  },
  {
    "id": "q-0127",
    "type": "judge",
    "topic": "泛化与正则化",
    "difficulty": "medium",
    "question": "判断：Cross Validation 与模型的泛化能力、数据规模或训练策略无关。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "该说法错误。Cross Validation 往往和 样本量有限时更重要 直接相关。"
  },
  {
    "id": "q-0128",
    "type": "judge",
    "topic": "优化与训练技巧",
    "difficulty": "medium",
    "question": "判断：训练时不应让验证集或测试集信息泄漏到特征、标准化统计或调参流程中。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确，属于 数据泄漏 的核心理解。"
  },
  {
    "id": "q-0129",
    "type": "mcq",
    "topic": "优化与训练技巧",
    "difficulty": "medium",
    "question": "下面哪项最能概括 数据泄漏 的作用？",
    "options": [
      "训练时不应让验证集或测试集信息泄漏到特征、标准化统计或调参流程中",
      "让模型一定不需要验证集",
      "完全消除噪声标签",
      "只影响前向速度不影响泛化"
    ],
    "answer": 0,
    "explanation": "数据泄漏 的核心理解是：训练时不应让验证集或测试集信息泄漏到特征、标准化统计或调参流程中。"
  },
  {
    "id": "q-0130",
    "type": "judge",
    "topic": "优化与训练技巧",
    "difficulty": "medium",
    "question": "判断：不能只看 overall accuracy，常要结合 F1、AUC、PR 曲线或重加权。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确，属于 类别不平衡 的核心理解。"
  },
  {
    "id": "q-0131",
    "type": "mcq",
    "topic": "优化与训练技巧",
    "difficulty": "medium",
    "question": "下面哪项最能概括 类别不平衡 的作用？",
    "options": [
      "不能只看 overall accuracy，常要结合 F1、AUC、PR 曲线或重加权",
      "让模型一定不需要验证集",
      "完全消除噪声标签",
      "只影响前向速度不影响泛化"
    ],
    "answer": 0,
    "explanation": "类别不平衡 的核心理解是：不能只看 overall accuracy，常要结合 F1、AUC、PR 曲线或重加权。"
  },
  {
    "id": "q-0132",
    "type": "judge",
    "topic": "优化与训练技巧",
    "difficulty": "medium",
    "question": "判断：通过对样本和标签做线性插值来提升泛化。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确，属于 Mixup 的核心理解。"
  },
  {
    "id": "q-0133",
    "type": "mcq",
    "topic": "优化与训练技巧",
    "difficulty": "medium",
    "question": "下面哪项最能概括 Mixup 的作用？",
    "options": [
      "通过对样本和标签做线性插值来提升泛化",
      "让模型一定不需要验证集",
      "完全消除噪声标签",
      "只影响前向速度不影响泛化"
    ],
    "answer": 0,
    "explanation": "Mixup 的核心理解是：通过对样本和标签做线性插值来提升泛化。"
  },
  {
    "id": "q-0134",
    "type": "judge",
    "topic": "优化与训练技巧",
    "difficulty": "medium",
    "question": "判断：把一张图的局部区域替换为另一张图，同时混合标签。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确，属于 CutMix 的核心理解。"
  },
  {
    "id": "q-0135",
    "type": "mcq",
    "topic": "优化与训练技巧",
    "difficulty": "medium",
    "question": "下面哪项最能概括 CutMix 的作用？",
    "options": [
      "把一张图的局部区域替换为另一张图，同时混合标签",
      "让模型一定不需要验证集",
      "完全消除噪声标签",
      "只影响前向速度不影响泛化"
    ],
    "answer": 0,
    "explanation": "CutMix 的核心理解是：把一张图的局部区域替换为另一张图，同时混合标签。"
  },
  {
    "id": "q-0136",
    "type": "judge",
    "topic": "优化与训练技巧",
    "difficulty": "medium",
    "question": "判断：用教师模型的软目标帮助学生模型学习。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确，属于 知识蒸馏 的核心理解。"
  },
  {
    "id": "q-0137",
    "type": "mcq",
    "topic": "优化与训练技巧",
    "difficulty": "medium",
    "question": "下面哪项最能概括 知识蒸馏 的作用？",
    "options": [
      "用教师模型的软目标帮助学生模型学习",
      "让模型一定不需要验证集",
      "完全消除噪声标签",
      "只影响前向速度不影响泛化"
    ],
    "answer": 0,
    "explanation": "知识蒸馏 的核心理解是：用教师模型的软目标帮助学生模型学习。"
  },
  {
    "id": "q-0138",
    "type": "judge",
    "topic": "优化与训练技巧",
    "difficulty": "medium",
    "question": "判断：教师和学生可以来自同一模型族或不同训练阶段。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确，属于 自蒸馏 的核心理解。"
  },
  {
    "id": "q-0139",
    "type": "mcq",
    "topic": "优化与训练技巧",
    "difficulty": "medium",
    "question": "下面哪项最能概括 自蒸馏 的作用？",
    "options": [
      "教师和学生可以来自同一模型族或不同训练阶段",
      "让模型一定不需要验证集",
      "完全消除噪声标签",
      "只影响前向速度不影响泛化"
    ],
    "answer": 0,
    "explanation": "自蒸馏 的核心理解是：教师和学生可以来自同一模型族或不同训练阶段。"
  },
  {
    "id": "q-0140",
    "type": "judge",
    "topic": "优化与训练技巧",
    "difficulty": "medium",
    "question": "判断：主要用于抑制梯度爆炸，而不是直接解决梯度消失。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确，属于 梯度裁剪 的核心理解。"
  },
  {
    "id": "q-0141",
    "type": "mcq",
    "topic": "优化与训练技巧",
    "difficulty": "medium",
    "question": "下面哪项最能概括 梯度裁剪 的作用？",
    "options": [
      "主要用于抑制梯度爆炸，而不是直接解决梯度消失",
      "让模型一定不需要验证集",
      "完全消除噪声标签",
      "只影响前向速度不影响泛化"
    ],
    "answer": 0,
    "explanation": "梯度裁剪 的核心理解是：主要用于抑制梯度爆炸，而不是直接解决梯度消失。"
  },
  {
    "id": "q-0142",
    "type": "judge",
    "topic": "优化与训练技巧",
    "difficulty": "medium",
    "question": "判断：在训练初期逐步增大学习率，避免不稳定更新。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确，属于 学习率预热 的核心理解。"
  },
  {
    "id": "q-0143",
    "type": "mcq",
    "topic": "优化与训练技巧",
    "difficulty": "medium",
    "question": "下面哪项最能概括 学习率预热 的作用？",
    "options": [
      "在训练初期逐步增大学习率，避免不稳定更新",
      "让模型一定不需要验证集",
      "完全消除噪声标签",
      "只影响前向速度不影响泛化"
    ],
    "answer": 0,
    "explanation": "学习率预热 的核心理解是：在训练初期逐步增大学习率，避免不稳定更新。"
  },
  {
    "id": "q-0144",
    "type": "judge",
    "topic": "优化与训练技巧",
    "difficulty": "medium",
    "question": "判断：后期平滑降低学习率，帮助更稳定收敛。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确，属于 余弦退火 的核心理解。"
  },
  {
    "id": "q-0145",
    "type": "mcq",
    "topic": "优化与训练技巧",
    "difficulty": "medium",
    "question": "下面哪项最能概括 余弦退火 的作用？",
    "options": [
      "后期平滑降低学习率，帮助更稳定收敛",
      "让模型一定不需要验证集",
      "完全消除噪声标签",
      "只影响前向速度不影响泛化"
    ],
    "answer": 0,
    "explanation": "余弦退火 的核心理解是：后期平滑降低学习率，帮助更稳定收敛。"
  },
  {
    "id": "q-0146",
    "type": "judge",
    "topic": "优化与训练技巧",
    "difficulty": "medium",
    "question": "判断：训练时随机跳过某些残差块，作为一种正则。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确，属于 随机深度 的核心理解。"
  },
  {
    "id": "q-0147",
    "type": "mcq",
    "topic": "优化与训练技巧",
    "difficulty": "medium",
    "question": "下面哪项最能概括 随机深度 的作用？",
    "options": [
      "训练时随机跳过某些残差块，作为一种正则",
      "让模型一定不需要验证集",
      "完全消除噪声标签",
      "只影响前向速度不影响泛化"
    ],
    "answer": 0,
    "explanation": "随机深度 的核心理解是：训练时随机跳过某些残差块，作为一种正则。"
  },
  {
    "id": "q-0148",
    "type": "mcq",
    "topic": "优化器",
    "difficulty": "easy",
    "question": "SGD 的典型优势是什么？",
    "options": [
      "更新简单、泛化有时更好",
      "一定比所有优化器显存更低",
      "不需要学习率",
      "只能做推理不能训练"
    ],
    "answer": 0,
    "explanation": "SGD 的优势通常是：更新简单、泛化有时更好。"
  },
  {
    "id": "q-0149",
    "type": "mcq",
    "topic": "优化器",
    "difficulty": "medium",
    "question": "下列哪种场景更常优先尝试 SGD？",
    "options": [
      "大规模视觉训练或需强泛化时",
      "只在规则引擎中部署时",
      "只在标签完全错误时",
      "只在无需梯度的任务中"
    ],
    "answer": 0,
    "explanation": "SGD 常见场景是：大规模视觉训练或需强泛化时。"
  },
  {
    "id": "q-0150",
    "type": "judge",
    "topic": "优化器",
    "difficulty": "medium",
    "question": "判断：SGD 的一个常见局限是：对学习率更敏感，收敛可能较慢。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。SGD 的优势是 更新简单、泛化有时更好，但局限也确实包括 对学习率更敏感，收敛可能较慢。"
  },
  {
    "id": "q-0151",
    "type": "mcq",
    "topic": "优化器",
    "difficulty": "easy",
    "question": "Momentum 的典型优势是什么？",
    "options": [
      "在 SGD 基础上积累历史梯度，减小振荡",
      "一定比所有优化器显存更低",
      "不需要学习率",
      "只能做推理不能训练"
    ],
    "answer": 0,
    "explanation": "Momentum 的优势通常是：在 SGD 基础上积累历史梯度，减小振荡。"
  },
  {
    "id": "q-0152",
    "type": "mcq",
    "topic": "优化器",
    "difficulty": "medium",
    "question": "下列哪种场景更常优先尝试 Momentum？",
    "options": [
      "峡谷地形优化中加快收敛",
      "只在规则引擎中部署时",
      "只在标签完全错误时",
      "只在无需梯度的任务中"
    ],
    "answer": 0,
    "explanation": "Momentum 常见场景是：峡谷地形优化中加快收敛。"
  },
  {
    "id": "q-0153",
    "type": "judge",
    "topic": "优化器",
    "difficulty": "medium",
    "question": "判断：Momentum 的一个常见局限是：仍需仔细调学习率和动量系数。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Momentum 的优势是 在 SGD 基础上积累历史梯度，减小振荡，但局限也确实包括 仍需仔细调学习率和动量系数。"
  },
  {
    "id": "q-0154",
    "type": "mcq",
    "topic": "优化器",
    "difficulty": "easy",
    "question": "Adam 的典型优势是什么？",
    "options": [
      "按一阶二阶矩自适应调节步长，上手快",
      "一定比所有优化器显存更低",
      "不需要学习率",
      "只能做推理不能训练"
    ],
    "answer": 0,
    "explanation": "Adam 的优势通常是：按一阶二阶矩自适应调节步长，上手快。"
  },
  {
    "id": "q-0155",
    "type": "mcq",
    "topic": "优化器",
    "difficulty": "medium",
    "question": "下列哪种场景更常优先尝试 Adam？",
    "options": [
      "Transformer、NLP、快速原型",
      "只在规则引擎中部署时",
      "只在标签完全错误时",
      "只在无需梯度的任务中"
    ],
    "answer": 0,
    "explanation": "Adam 常见场景是：Transformer、NLP、快速原型。"
  },
  {
    "id": "q-0156",
    "type": "judge",
    "topic": "优化器",
    "difficulty": "medium",
    "question": "判断：Adam 的一个常见局限是：有时泛化不如精调的 SGD/AdamW。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Adam 的优势是 按一阶二阶矩自适应调节步长，上手快，但局限也确实包括 有时泛化不如精调的 SGD/AdamW。"
  },
  {
    "id": "q-0157",
    "type": "mcq",
    "topic": "优化器",
    "difficulty": "easy",
    "question": "AdamW 的典型优势是什么？",
    "options": [
      "将权重衰减与自适应更新解耦",
      "一定比所有优化器显存更低",
      "不需要学习率",
      "只能做推理不能训练"
    ],
    "answer": 0,
    "explanation": "AdamW 的优势通常是：将权重衰减与自适应更新解耦。"
  },
  {
    "id": "q-0158",
    "type": "mcq",
    "topic": "优化器",
    "difficulty": "medium",
    "question": "下列哪种场景更常优先尝试 AdamW？",
    "options": [
      "现代 Transformer/LLM/VLM 训练",
      "只在规则引擎中部署时",
      "只在标签完全错误时",
      "只在无需梯度的任务中"
    ],
    "answer": 0,
    "explanation": "AdamW 常见场景是：现代 Transformer/LLM/VLM 训练。"
  },
  {
    "id": "q-0159",
    "type": "judge",
    "topic": "优化器",
    "difficulty": "medium",
    "question": "判断：AdamW 的一个常见局限是：仍需调学习率和权重衰减系数。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。AdamW 的优势是 将权重衰减与自适应更新解耦，但局限也确实包括 仍需调学习率和权重衰减系数。"
  },
  {
    "id": "q-0160",
    "type": "mcq",
    "topic": "损失函数",
    "difficulty": "easy",
    "question": "下面哪种任务最适合优先使用 Cross Entropy？",
    "options": [
      "单标签多分类",
      "回归连续值",
      "只用于 UI 渲染",
      "只与 batch size 相关"
    ],
    "answer": 0,
    "explanation": "Cross Entropy 更常用于：单标签多分类。"
  },
  {
    "id": "q-0161",
    "type": "mcq",
    "topic": "损失函数",
    "difficulty": "medium",
    "question": "关于 Cross Entropy，哪项说法正确？",
    "options": [
      "常配合 softmax 使用",
      "与标签设计完全无关",
      "不会影响梯度",
      "与优化目标无关"
    ],
    "answer": 0,
    "explanation": "Cross Entropy 的核心特征是：常配合 softmax 使用。"
  },
  {
    "id": "q-0162",
    "type": "judge",
    "topic": "损失函数",
    "difficulty": "medium",
    "question": "判断：Cross Entropy 常见误用之一是把它直接用于 回归连续值。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Cross Entropy 的主场景是 单标签多分类，而不是 回归连续值。"
  },
  {
    "id": "q-0163",
    "type": "mcq",
    "topic": "损失函数",
    "difficulty": "easy",
    "question": "下面哪种任务最适合优先使用 Binary Cross Entropy？",
    "options": [
      "二分类或多标签分类",
      "互斥多分类的一般主损失",
      "只用于 UI 渲染",
      "只与 batch size 相关"
    ],
    "answer": 0,
    "explanation": "Binary Cross Entropy 更常用于：二分类或多标签分类。"
  },
  {
    "id": "q-0164",
    "type": "mcq",
    "topic": "损失函数",
    "difficulty": "medium",
    "question": "关于 Binary Cross Entropy，哪项说法正确？",
    "options": [
      "常配合 sigmoid 使用",
      "与标签设计完全无关",
      "不会影响梯度",
      "与优化目标无关"
    ],
    "answer": 0,
    "explanation": "Binary Cross Entropy 的核心特征是：常配合 sigmoid 使用。"
  },
  {
    "id": "q-0165",
    "type": "judge",
    "topic": "损失函数",
    "difficulty": "medium",
    "question": "判断：Binary Cross Entropy 常见误用之一是把它直接用于 互斥多分类的一般主损失。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Binary Cross Entropy 的主场景是 二分类或多标签分类，而不是 互斥多分类的一般主损失。"
  },
  {
    "id": "q-0166",
    "type": "mcq",
    "topic": "损失函数",
    "difficulty": "easy",
    "question": "下面哪种任务最适合优先使用 MSE？",
    "options": [
      "回归",
      "作为标准互斥分类的首选损失",
      "只用于 UI 渲染",
      "只与 batch size 相关"
    ],
    "answer": 0,
    "explanation": "MSE 更常用于：回归。"
  },
  {
    "id": "q-0167",
    "type": "mcq",
    "topic": "损失函数",
    "difficulty": "medium",
    "question": "关于 MSE，哪项说法正确？",
    "options": [
      "对大误差敏感",
      "与标签设计完全无关",
      "不会影响梯度",
      "与优化目标无关"
    ],
    "answer": 0,
    "explanation": "MSE 的核心特征是：对大误差敏感。"
  },
  {
    "id": "q-0168",
    "type": "judge",
    "topic": "损失函数",
    "difficulty": "medium",
    "question": "判断：MSE 常见误用之一是把它直接用于 作为标准互斥分类的首选损失。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。MSE 的主场景是 回归，而不是 作为标准互斥分类的首选损失。"
  },
  {
    "id": "q-0169",
    "type": "mcq",
    "topic": "损失函数",
    "difficulty": "medium",
    "question": "下面哪种任务最适合优先使用 MAE？",
    "options": [
      "回归且希望对异常值更稳",
      "标准对比学习",
      "只用于 UI 渲染",
      "只与 batch size 相关"
    ],
    "answer": 0,
    "explanation": "MAE 更常用于：回归且希望对异常值更稳。"
  },
  {
    "id": "q-0170",
    "type": "mcq",
    "topic": "损失函数",
    "difficulty": "medium",
    "question": "关于 MAE，哪项说法正确？",
    "options": [
      "梯度在零点不可导但次梯度可用",
      "与标签设计完全无关",
      "不会影响梯度",
      "与优化目标无关"
    ],
    "answer": 0,
    "explanation": "MAE 的核心特征是：梯度在零点不可导但次梯度可用。"
  },
  {
    "id": "q-0171",
    "type": "judge",
    "topic": "损失函数",
    "difficulty": "medium",
    "question": "判断：MAE 常见误用之一是把它直接用于 标准对比学习。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。MAE 的主场景是 回归且希望对异常值更稳，而不是 标准对比学习。"
  },
  {
    "id": "q-0172",
    "type": "mcq",
    "topic": "损失函数",
    "difficulty": "medium",
    "question": "下面哪种任务最适合优先使用 Huber Loss？",
    "options": [
      "回归且希望兼顾 MSE 与 MAE",
      "语言建模的 next-token 训练",
      "只用于 UI 渲染",
      "只与 batch size 相关"
    ],
    "answer": 0,
    "explanation": "Huber Loss 更常用于：回归且希望兼顾 MSE 与 MAE。"
  },
  {
    "id": "q-0173",
    "type": "mcq",
    "topic": "损失函数",
    "difficulty": "medium",
    "question": "关于 Huber Loss，哪项说法正确？",
    "options": [
      "小误差像 MSE，大误差像 MAE",
      "与标签设计完全无关",
      "不会影响梯度",
      "与优化目标无关"
    ],
    "answer": 0,
    "explanation": "Huber Loss 的核心特征是：小误差像 MSE，大误差像 MAE。"
  },
  {
    "id": "q-0174",
    "type": "judge",
    "topic": "损失函数",
    "difficulty": "medium",
    "question": "判断：Huber Loss 常见误用之一是把它直接用于 语言建模的 next-token 训练。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Huber Loss 的主场景是 回归且希望兼顾 MSE 与 MAE，而不是 语言建模的 next-token 训练。"
  },
  {
    "id": "q-0175",
    "type": "mcq",
    "topic": "损失函数",
    "difficulty": "medium",
    "question": "下面哪种任务最适合优先使用 Triplet Loss？",
    "options": [
      "度量学习与检索",
      "标准像素级分割监督",
      "只用于 UI 渲染",
      "只与 batch size 相关"
    ],
    "answer": 0,
    "explanation": "Triplet Loss 更常用于：度量学习与检索。"
  },
  {
    "id": "q-0176",
    "type": "mcq",
    "topic": "损失函数",
    "difficulty": "medium",
    "question": "关于 Triplet Loss，哪项说法正确？",
    "options": [
      "拉近正样本、推远负样本",
      "与标签设计完全无关",
      "不会影响梯度",
      "与优化目标无关"
    ],
    "answer": 0,
    "explanation": "Triplet Loss 的核心特征是：拉近正样本、推远负样本。"
  },
  {
    "id": "q-0177",
    "type": "judge",
    "topic": "损失函数",
    "difficulty": "medium",
    "question": "判断：Triplet Loss 常见误用之一是把它直接用于 标准像素级分割监督。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Triplet Loss 的主场景是 度量学习与检索，而不是 标准像素级分割监督。"
  },
  {
    "id": "q-0178",
    "type": "mcq",
    "topic": "损失函数",
    "difficulty": "medium",
    "question": "下面哪种任务最适合优先使用 Contrastive / InfoNCE？",
    "options": [
      "对比学习、图文对齐、表征学习",
      "直接替代所有生成式训练",
      "只用于 UI 渲染",
      "只与 batch size 相关"
    ],
    "answer": 0,
    "explanation": "Contrastive / InfoNCE 更常用于：对比学习、图文对齐、表征学习。"
  },
  {
    "id": "q-0179",
    "type": "mcq",
    "topic": "损失函数",
    "difficulty": "medium",
    "question": "关于 Contrastive / InfoNCE，哪项说法正确？",
    "options": [
      "提升正对相似度并区分负样本",
      "与标签设计完全无关",
      "不会影响梯度",
      "与优化目标无关"
    ],
    "answer": 0,
    "explanation": "Contrastive / InfoNCE 的核心特征是：提升正对相似度并区分负样本。"
  },
  {
    "id": "q-0180",
    "type": "judge",
    "topic": "损失函数",
    "difficulty": "medium",
    "question": "判断：Contrastive / InfoNCE 常见误用之一是把它直接用于 直接替代所有生成式训练。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Contrastive / InfoNCE 的主场景是 对比学习、图文对齐、表征学习，而不是 直接替代所有生成式训练。"
  },
  {
    "id": "q-0181",
    "type": "mcq",
    "topic": "损失函数",
    "difficulty": "medium",
    "question": "下面哪种任务最适合优先使用 Focal Loss？",
    "options": [
      "类别极不平衡的检测或分类",
      "让所有样本权重完全一致",
      "只用于 UI 渲染",
      "只与 batch size 相关"
    ],
    "answer": 0,
    "explanation": "Focal Loss 更常用于：类别极不平衡的检测或分类。"
  },
  {
    "id": "q-0182",
    "type": "mcq",
    "topic": "损失函数",
    "difficulty": "medium",
    "question": "关于 Focal Loss，哪项说法正确？",
    "options": [
      "降低易分类样本权重，聚焦难例",
      "与标签设计完全无关",
      "不会影响梯度",
      "与优化目标无关"
    ],
    "answer": 0,
    "explanation": "Focal Loss 的核心特征是：降低易分类样本权重，聚焦难例。"
  },
  {
    "id": "q-0183",
    "type": "judge",
    "topic": "损失函数",
    "difficulty": "medium",
    "question": "判断：Focal Loss 常见误用之一是把它直接用于 让所有样本权重完全一致。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Focal Loss 的主场景是 类别极不平衡的检测或分类，而不是 让所有样本权重完全一致。"
  },
  {
    "id": "q-0184",
    "type": "short",
    "topic": "泛化与正则化",
    "difficulty": "medium",
    "question": "请解释过拟合与欠拟合的区别，并分别给出至少三种缓解方法。",
    "reference": "回答要明确：过拟合是训练好但泛化差，欠拟合是训练和泛化都差。缓解过拟合常从数据、正则、模型容量、训练时长入手；缓解欠拟合常从模型容量、特征表达、训练预算和优化设置入手。",
    "keypoints": [
      "先定义两者并说明典型诊断信号",
      "再分别列出原因",
      "最后给出有针对性的缓解手段"
    ]
  },
  {
    "id": "q-0185",
    "type": "short",
    "topic": "优化与训练技巧",
    "difficulty": "medium",
    "question": "为什么现代深度学习训练中常配合使用学习率预热、余弦退火和梯度裁剪？",
    "reference": "三者分别对应不同阶段或不同风险：预热缓解初期不稳定，余弦退火帮助后期平滑收敛，梯度裁剪抑制梯度爆炸。回答时可结合 Transformer 大模型训练说明。",
    "keypoints": [
      "分别解释三种技术的作用",
      "说明它们对应的训练风险",
      "补充在大模型训练中的工程价值"
    ]
  },
  {
    "id": "q-0186",
    "type": "short",
    "topic": "损失函数",
    "difficulty": "medium",
    "question": "请比较 Cross Entropy、BCE、MSE、Huber 和 Focal Loss 的适用任务与 trade-off。",
    "reference": "比较损失函数不能只背定义，要同时讲标签形式、输出层设计、对异常值或难例的敏感性，以及与评价指标的匹配关系。",
    "keypoints": [
      "逐个说明适用任务",
      "比较对误差/难例/异常值的敏感性",
      "结合实际任务说明如何选型"
    ]
  },
  {
    "id": "q-0187",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "easy",
    "question": "Self-Attention 的核心作用最接近下面哪一项？",
    "options": [
      "让序列中每个 token 与同一序列的其他 token 交互",
      "只用于图像压缩",
      "只负责损失函数计算",
      "只决定 batch size"
    ],
    "answer": 0,
    "explanation": "Self-Attention 的核心作用是：让序列中每个 token 与同一序列的其他 token 交互。"
  },
  {
    "id": "q-0188",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "关于 Self-Attention，哪项是更典型的优势？",
    "options": [
      "能建模长距离依赖",
      "完全没有计算开销",
      "一定替代所有其他模块",
      "只对前端页面有效"
    ],
    "answer": 0,
    "explanation": "Self-Attention 的典型优势是：能建模长距离依赖。"
  },
  {
    "id": "q-0189",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "下列哪种场景最常会用到 Self-Attention？",
    "options": [
      "编码文本、视觉 token 或多模态 token 内部关系",
      "打印日志颜色配置",
      "浏览器主题切换",
      "手工标注界面美化"
    ],
    "answer": 0,
    "explanation": "Self-Attention 常见于：编码文本、视觉 token 或多模态 token 内部关系。"
  },
  {
    "id": "q-0190",
    "type": "judge",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "判断：Self-Attention 的一个常见局限是：复杂度通常随序列长度平方增长。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Self-Attention 的确存在这样的局限：复杂度通常随序列长度平方增长。"
  },
  {
    "id": "q-0191",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "easy",
    "question": "Cross-Attention 的核心作用最接近下面哪一项？",
    "options": [
      "让一个序列查询另一个序列的信息",
      "只用于图像压缩",
      "只负责损失函数计算",
      "只决定 batch size"
    ],
    "answer": 0,
    "explanation": "Cross-Attention 的核心作用是：让一个序列查询另一个序列的信息。"
  },
  {
    "id": "q-0192",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "关于 Cross-Attention，哪项是更典型的优势？",
    "options": [
      "适合跨模态融合和 encoder-decoder 交互",
      "完全没有计算开销",
      "一定替代所有其他模块",
      "只对前端页面有效"
    ],
    "answer": 0,
    "explanation": "Cross-Attention 的典型优势是：适合跨模态融合和 encoder-decoder 交互。"
  },
  {
    "id": "q-0193",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "下列哪种场景最常会用到 Cross-Attention？",
    "options": [
      "文本查询图像特征、解码器读取编码器输出",
      "打印日志颜色配置",
      "浏览器主题切换",
      "手工标注界面美化"
    ],
    "answer": 0,
    "explanation": "Cross-Attention 常见于：文本查询图像特征、解码器读取编码器输出。"
  },
  {
    "id": "q-0194",
    "type": "judge",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "判断：Cross-Attention 的一个常见局限是：需要设计好 query 与 key/value 的来源。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Cross-Attention 的确存在这样的局限：需要设计好 query 与 key/value 的来源。"
  },
  {
    "id": "q-0195",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "easy",
    "question": "Multi-Head Attention 的核心作用最接近下面哪一项？",
    "options": [
      "把注意力拆成多个子空间并行学习",
      "只用于图像压缩",
      "只负责损失函数计算",
      "只决定 batch size"
    ],
    "answer": 0,
    "explanation": "Multi-Head Attention 的核心作用是：把注意力拆成多个子空间并行学习。"
  },
  {
    "id": "q-0196",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "关于 Multi-Head Attention，哪项是更典型的优势？",
    "options": [
      "提升模型从不同关系子空间建模的能力",
      "完全没有计算开销",
      "一定替代所有其他模块",
      "只对前端页面有效"
    ],
    "answer": 0,
    "explanation": "Multi-Head Attention 的典型优势是：提升模型从不同关系子空间建模的能力。"
  },
  {
    "id": "q-0197",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "下列哪种场景最常会用到 Multi-Head Attention？",
    "options": [
      "Transformer 标配结构",
      "打印日志颜色配置",
      "浏览器主题切换",
      "手工标注界面美化"
    ],
    "answer": 0,
    "explanation": "Multi-Head Attention 常见于：Transformer 标配结构。"
  },
  {
    "id": "q-0198",
    "type": "judge",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "判断：Multi-Head Attention 的一个常见局限是：头太多可能带来冗余和开销。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Multi-Head Attention 的确存在这样的局限：头太多可能带来冗余和开销。"
  },
  {
    "id": "q-0199",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "easy",
    "question": "Q/K/V 的核心作用最接近下面哪一项？",
    "options": [
      "Query 用于发起匹配，Key 用于被匹配，Value 提供被聚合内容",
      "只用于图像压缩",
      "只负责损失函数计算",
      "只决定 batch size"
    ],
    "answer": 0,
    "explanation": "Q/K/V 的核心作用是：Query 用于发起匹配，Key 用于被匹配，Value 提供被聚合内容。"
  },
  {
    "id": "q-0200",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "关于 Q/K/V，哪项是更典型的优势？",
    "options": [
      "把匹配与内容读取解耦",
      "完全没有计算开销",
      "一定替代所有其他模块",
      "只对前端页面有效"
    ],
    "answer": 0,
    "explanation": "Q/K/V 的典型优势是：把匹配与内容读取解耦。"
  },
  {
    "id": "q-0201",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "下列哪种场景最常会用到 Q/K/V？",
    "options": [
      "所有注意力模块",
      "打印日志颜色配置",
      "浏览器主题切换",
      "手工标注界面美化"
    ],
    "answer": 0,
    "explanation": "Q/K/V 常见于：所有注意力模块。"
  },
  {
    "id": "q-0202",
    "type": "judge",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "判断：Q/K/V 的一个常见局限是：实现和理解上比简单加权平均更复杂。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Q/K/V 的确存在这样的局限：实现和理解上比简单加权平均更复杂。"
  },
  {
    "id": "q-0203",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "easy",
    "question": "Scaled Dot-Product 的核心作用最接近下面哪一项？",
    "options": [
      "用 QK^T / sqrt(d_k) 再 softmax 得到权重",
      "只用于图像压缩",
      "只负责损失函数计算",
      "只决定 batch size"
    ],
    "answer": 0,
    "explanation": "Scaled Dot-Product 的核心作用是：用 QK^T / sqrt(d_k) 再 softmax 得到权重。"
  },
  {
    "id": "q-0204",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "关于 Scaled Dot-Product，哪项是更典型的优势？",
    "options": [
      "缩放有助于避免高维点积过大导致 softmax 饱和",
      "完全没有计算开销",
      "一定替代所有其他模块",
      "只对前端页面有效"
    ],
    "answer": 0,
    "explanation": "Scaled Dot-Product 的典型优势是：缩放有助于避免高维点积过大导致 softmax 饱和。"
  },
  {
    "id": "q-0205",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "下列哪种场景最常会用到 Scaled Dot-Product？",
    "options": [
      "标准注意力计算",
      "打印日志颜色配置",
      "浏览器主题切换",
      "手工标注界面美化"
    ],
    "answer": 0,
    "explanation": "Scaled Dot-Product 常见于：标准注意力计算。"
  },
  {
    "id": "q-0206",
    "type": "judge",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "判断：Scaled Dot-Product 的一个常见局限是：序列很长时仍然有显存和算力压力。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Scaled Dot-Product 的确存在这样的局限：序列很长时仍然有显存和算力压力。"
  },
  {
    "id": "q-0207",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "Residual Connection 的核心作用最接近下面哪一项？",
    "options": [
      "把输入直接加回输出形成捷径",
      "只用于图像压缩",
      "只负责损失函数计算",
      "只决定 batch size"
    ],
    "answer": 0,
    "explanation": "Residual Connection 的核心作用是：把输入直接加回输出形成捷径。"
  },
  {
    "id": "q-0208",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "关于 Residual Connection，哪项是更典型的优势？",
    "options": [
      "改善深层网络梯度传播",
      "完全没有计算开销",
      "一定替代所有其他模块",
      "只对前端页面有效"
    ],
    "answer": 0,
    "explanation": "Residual Connection 的典型优势是：改善深层网络梯度传播。"
  },
  {
    "id": "q-0209",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "下列哪种场景最常会用到 Residual Connection？",
    "options": [
      "Transformer、ResNet 等深层网络",
      "打印日志颜色配置",
      "浏览器主题切换",
      "手工标注界面美化"
    ],
    "answer": 0,
    "explanation": "Residual Connection 常见于：Transformer、ResNet 等深层网络。"
  },
  {
    "id": "q-0210",
    "type": "judge",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "判断：Residual Connection 的一个常见局限是：不是所有训练不稳都能靠残差解决。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Residual Connection 的确存在这样的局限：不是所有训练不稳都能靠残差解决。"
  },
  {
    "id": "q-0211",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "Pre-Norm 的核心作用最接近下面哪一项？",
    "options": [
      "先做归一化再做子层变换",
      "只用于图像压缩",
      "只负责损失函数计算",
      "只决定 batch size"
    ],
    "answer": 0,
    "explanation": "Pre-Norm 的核心作用是：先做归一化再做子层变换。"
  },
  {
    "id": "q-0212",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "关于 Pre-Norm，哪项是更典型的优势？",
    "options": [
      "深层 Transformer 训练通常更稳",
      "完全没有计算开销",
      "一定替代所有其他模块",
      "只对前端页面有效"
    ],
    "answer": 0,
    "explanation": "Pre-Norm 的典型优势是：深层 Transformer 训练通常更稳。"
  },
  {
    "id": "q-0213",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "下列哪种场景最常会用到 Pre-Norm？",
    "options": [
      "现代 LLM/ViT/VLM 常见",
      "打印日志颜色配置",
      "浏览器主题切换",
      "手工标注界面美化"
    ],
    "answer": 0,
    "explanation": "Pre-Norm 常见于：现代 LLM/ViT/VLM 常见。"
  },
  {
    "id": "q-0214",
    "type": "judge",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "判断：Pre-Norm 的一个常见局限是：与 Post-Norm 的表现差异受任务和实现影响。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Pre-Norm 的确存在这样的局限：与 Post-Norm 的表现差异受任务和实现影响。"
  },
  {
    "id": "q-0215",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "Post-Norm 的核心作用最接近下面哪一项？",
    "options": [
      "先过子层再归一化",
      "只用于图像压缩",
      "只负责损失函数计算",
      "只决定 batch size"
    ],
    "answer": 0,
    "explanation": "Post-Norm 的核心作用是：先过子层再归一化。"
  },
  {
    "id": "q-0216",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "关于 Post-Norm，哪项是更典型的优势？",
    "options": [
      "早期 Transformer 常见，部分浅层场景可用",
      "完全没有计算开销",
      "一定替代所有其他模块",
      "只对前端页面有效"
    ],
    "answer": 0,
    "explanation": "Post-Norm 的典型优势是：早期 Transformer 常见，部分浅层场景可用。"
  },
  {
    "id": "q-0217",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "下列哪种场景最常会用到 Post-Norm？",
    "options": [
      "原始 Transformer 配置",
      "打印日志颜色配置",
      "浏览器主题切换",
      "手工标注界面美化"
    ],
    "answer": 0,
    "explanation": "Post-Norm 常见于：原始 Transformer 配置。"
  },
  {
    "id": "q-0218",
    "type": "judge",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "判断：Post-Norm 的一个常见局限是：很深时可能更难训。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Post-Norm 的确存在这样的局限：很深时可能更难训。"
  },
  {
    "id": "q-0219",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "FFN/MLP 的核心作用最接近下面哪一项？",
    "options": [
      "逐 token 的非线性变换层",
      "只用于图像压缩",
      "只负责损失函数计算",
      "只决定 batch size"
    ],
    "answer": 0,
    "explanation": "FFN/MLP 的核心作用是：逐 token 的非线性变换层。"
  },
  {
    "id": "q-0220",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "关于 FFN/MLP，哪项是更典型的优势？",
    "options": [
      "提升通道维表达能力",
      "完全没有计算开销",
      "一定替代所有其他模块",
      "只对前端页面有效"
    ],
    "answer": 0,
    "explanation": "FFN/MLP 的典型优势是：提升通道维表达能力。"
  },
  {
    "id": "q-0221",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "下列哪种场景最常会用到 FFN/MLP？",
    "options": [
      "每个 Transformer block 内",
      "打印日志颜色配置",
      "浏览器主题切换",
      "手工标注界面美化"
    ],
    "answer": 0,
    "explanation": "FFN/MLP 常见于：每个 Transformer block 内。"
  },
  {
    "id": "q-0222",
    "type": "judge",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "判断：FFN/MLP 的一个常见局限是：参数和算力占比不低。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。FFN/MLP 的确存在这样的局限：参数和算力占比不低。"
  },
  {
    "id": "q-0223",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "Positional Encoding 的核心作用最接近下面哪一项？",
    "options": [
      "为 token 注入顺序信息",
      "只用于图像压缩",
      "只负责损失函数计算",
      "只决定 batch size"
    ],
    "answer": 0,
    "explanation": "Positional Encoding 的核心作用是：为 token 注入顺序信息。"
  },
  {
    "id": "q-0224",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "关于 Positional Encoding，哪项是更典型的优势？",
    "options": [
      "让注意力区分位置",
      "完全没有计算开销",
      "一定替代所有其他模块",
      "只对前端页面有效"
    ],
    "answer": 0,
    "explanation": "Positional Encoding 的典型优势是：让注意力区分位置。"
  },
  {
    "id": "q-0225",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "下列哪种场景最常会用到 Positional Encoding？",
    "options": [
      "所有序列建模任务",
      "打印日志颜色配置",
      "浏览器主题切换",
      "手工标注界面美化"
    ],
    "answer": 0,
    "explanation": "Positional Encoding 常见于：所有序列建模任务。"
  },
  {
    "id": "q-0226",
    "type": "judge",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "判断：Positional Encoding 的一个常见局限是：不同编码方式在外推长度和相对位置建模上有差异。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Positional Encoding 的确存在这样的局限：不同编码方式在外推长度和相对位置建模上有差异。"
  },
  {
    "id": "q-0227",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "Absolute Position Embedding 的核心作用最接近下面哪一项？",
    "options": [
      "直接给每个位置一个绝对位置向量",
      "只用于图像压缩",
      "只负责损失函数计算",
      "只决定 batch size"
    ],
    "answer": 0,
    "explanation": "Absolute Position Embedding 的核心作用是：直接给每个位置一个绝对位置向量。"
  },
  {
    "id": "q-0228",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "关于 Absolute Position Embedding，哪项是更典型的优势？",
    "options": [
      "实现简单",
      "完全没有计算开销",
      "一定替代所有其他模块",
      "只对前端页面有效"
    ],
    "answer": 0,
    "explanation": "Absolute Position Embedding 的典型优势是：实现简单。"
  },
  {
    "id": "q-0229",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "下列哪种场景最常会用到 Absolute Position Embedding？",
    "options": [
      "BERT、ViT 等",
      "打印日志颜色配置",
      "浏览器主题切换",
      "手工标注界面美化"
    ],
    "answer": 0,
    "explanation": "Absolute Position Embedding 常见于：BERT、ViT 等。"
  },
  {
    "id": "q-0230",
    "type": "judge",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "判断：Absolute Position Embedding 的一个常见局限是：长度外推能力可能较弱。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Absolute Position Embedding 的确存在这样的局限：长度外推能力可能较弱。"
  },
  {
    "id": "q-0231",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "Relative Position Bias 的核心作用最接近下面哪一项？",
    "options": [
      "显式建模 token 间相对位置信息",
      "只用于图像压缩",
      "只负责损失函数计算",
      "只决定 batch size"
    ],
    "answer": 0,
    "explanation": "Relative Position Bias 的核心作用是：显式建模 token 间相对位置信息。"
  },
  {
    "id": "q-0232",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "关于 Relative Position Bias，哪项是更典型的优势？",
    "options": [
      "更符合“相对距离”归纳偏置",
      "完全没有计算开销",
      "一定替代所有其他模块",
      "只对前端页面有效"
    ],
    "answer": 0,
    "explanation": "Relative Position Bias 的典型优势是：更符合“相对距离”归纳偏置。"
  },
  {
    "id": "q-0233",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "下列哪种场景最常会用到 Relative Position Bias？",
    "options": [
      "长序列或视觉相对关系建模",
      "打印日志颜色配置",
      "浏览器主题切换",
      "手工标注界面美化"
    ],
    "answer": 0,
    "explanation": "Relative Position Bias 常见于：长序列或视觉相对关系建模。"
  },
  {
    "id": "q-0234",
    "type": "judge",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "判断：Relative Position Bias 的一个常见局限是：实现更复杂。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Relative Position Bias 的确存在这样的局限：实现更复杂。"
  },
  {
    "id": "q-0235",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "Causal Mask 的核心作用最接近下面哪一项？",
    "options": [
      "阻止当前位置看到未来 token",
      "只用于图像压缩",
      "只负责损失函数计算",
      "只决定 batch size"
    ],
    "answer": 0,
    "explanation": "Causal Mask 的核心作用是：阻止当前位置看到未来 token。"
  },
  {
    "id": "q-0236",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "关于 Causal Mask，哪项是更典型的优势？",
    "options": [
      "保证自回归生成的因果性",
      "完全没有计算开销",
      "一定替代所有其他模块",
      "只对前端页面有效"
    ],
    "answer": 0,
    "explanation": "Causal Mask 的典型优势是：保证自回归生成的因果性。"
  },
  {
    "id": "q-0237",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "下列哪种场景最常会用到 Causal Mask？",
    "options": [
      "GPT、解码器语言建模",
      "打印日志颜色配置",
      "浏览器主题切换",
      "手工标注界面美化"
    ],
    "answer": 0,
    "explanation": "Causal Mask 常见于：GPT、解码器语言建模。"
  },
  {
    "id": "q-0238",
    "type": "judge",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "判断：Causal Mask 的一个常见局限是：不适合双向编码任务。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Causal Mask 的确存在这样的局限：不适合双向编码任务。"
  },
  {
    "id": "q-0239",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "Bidirectional Encoding 的核心作用最接近下面哪一项？",
    "options": [
      "允许 token 同时看左侧和右侧上下文",
      "只用于图像压缩",
      "只负责损失函数计算",
      "只决定 batch size"
    ],
    "answer": 0,
    "explanation": "Bidirectional Encoding 的核心作用是：允许 token 同时看左侧和右侧上下文。"
  },
  {
    "id": "q-0240",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "关于 Bidirectional Encoding，哪项是更典型的优势？",
    "options": [
      "理解任务中上下文更充分",
      "完全没有计算开销",
      "一定替代所有其他模块",
      "只对前端页面有效"
    ],
    "answer": 0,
    "explanation": "Bidirectional Encoding 的典型优势是：理解任务中上下文更充分。"
  },
  {
    "id": "q-0241",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "下列哪种场景最常会用到 Bidirectional Encoding？",
    "options": [
      "BERT 类编码器",
      "打印日志颜色配置",
      "浏览器主题切换",
      "手工标注界面美化"
    ],
    "answer": 0,
    "explanation": "Bidirectional Encoding 常见于：BERT 类编码器。"
  },
  {
    "id": "q-0242",
    "type": "judge",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "判断：Bidirectional Encoding 的一个常见局限是：不能直接按同样方式做自回归生成。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Bidirectional Encoding 的确存在这样的局限：不能直接按同样方式做自回归生成。"
  },
  {
    "id": "q-0243",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "Encoder-Decoder 的核心作用最接近下面哪一项？",
    "options": [
      "编码输入，再由解码器条件生成输出",
      "只用于图像压缩",
      "只负责损失函数计算",
      "只决定 batch size"
    ],
    "answer": 0,
    "explanation": "Encoder-Decoder 的核心作用是：编码输入，再由解码器条件生成输出。"
  },
  {
    "id": "q-0244",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "关于 Encoder-Decoder，哪项是更典型的优势？",
    "options": [
      "天然适合 seq2seq",
      "完全没有计算开销",
      "一定替代所有其他模块",
      "只对前端页面有效"
    ],
    "answer": 0,
    "explanation": "Encoder-Decoder 的典型优势是：天然适合 seq2seq。"
  },
  {
    "id": "q-0245",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "下列哪种场景最常会用到 Encoder-Decoder？",
    "options": [
      "机器翻译、图像描述、ASR",
      "打印日志颜色配置",
      "浏览器主题切换",
      "手工标注界面美化"
    ],
    "answer": 0,
    "explanation": "Encoder-Decoder 常见于：机器翻译、图像描述、ASR。"
  },
  {
    "id": "q-0246",
    "type": "judge",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "判断：Encoder-Decoder 的一个常见局限是：结构比纯 decoder 更复杂。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Encoder-Decoder 的确存在这样的局限：结构比纯 decoder 更复杂。"
  },
  {
    "id": "q-0247",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "KV Cache 的核心作用最接近下面哪一项？",
    "options": [
      "推理时缓存历史 key/value 避免重复计算",
      "只用于图像压缩",
      "只负责损失函数计算",
      "只决定 batch size"
    ],
    "answer": 0,
    "explanation": "KV Cache 的核心作用是：推理时缓存历史 key/value 避免重复计算。"
  },
  {
    "id": "q-0248",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "关于 KV Cache，哪项是更典型的优势？",
    "options": [
      "显著降低长序列自回归推理成本",
      "完全没有计算开销",
      "一定替代所有其他模块",
      "只对前端页面有效"
    ],
    "answer": 0,
    "explanation": "KV Cache 的典型优势是：显著降低长序列自回归推理成本。"
  },
  {
    "id": "q-0249",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "下列哪种场景最常会用到 KV Cache？",
    "options": [
      "LLM/VLM 生成阶段",
      "打印日志颜色配置",
      "浏览器主题切换",
      "手工标注界面美化"
    ],
    "answer": 0,
    "explanation": "KV Cache 常见于：LLM/VLM 生成阶段。"
  },
  {
    "id": "q-0250",
    "type": "judge",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "判断：KV Cache 的一个常见局限是：会占用额外显存。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。KV Cache 的确存在这样的局限：会占用额外显存。"
  },
  {
    "id": "q-0251",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "Attention Complexity 的核心作用最接近下面哪一项？",
    "options": [
      "标准全注意力复杂度通常是 O(n^2)",
      "只用于图像压缩",
      "只负责损失函数计算",
      "只决定 batch size"
    ],
    "answer": 0,
    "explanation": "Attention Complexity 的核心作用是：标准全注意力复杂度通常是 O(n^2)。"
  },
  {
    "id": "q-0252",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "关于 Attention Complexity，哪项是更典型的优势？",
    "options": [
      "表达力强",
      "完全没有计算开销",
      "一定替代所有其他模块",
      "只对前端页面有效"
    ],
    "answer": 0,
    "explanation": "Attention Complexity 的典型优势是：表达力强。"
  },
  {
    "id": "q-0253",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "下列哪种场景最常会用到 Attention Complexity？",
    "options": [
      "长文、多图、多帧输入",
      "打印日志颜色配置",
      "浏览器主题切换",
      "手工标注界面美化"
    ],
    "answer": 0,
    "explanation": "Attention Complexity 常见于：长文、多图、多帧输入。"
  },
  {
    "id": "q-0254",
    "type": "judge",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "判断：Attention Complexity 的一个常见局限是：长上下文成本高。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Attention Complexity 的确存在这样的局限：长上下文成本高。"
  },
  {
    "id": "q-0255",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "FlashAttention 的核心作用最接近下面哪一项？",
    "options": [
      "通过 IO-aware 实现降低显存读写开销",
      "只用于图像压缩",
      "只负责损失函数计算",
      "只决定 batch size"
    ],
    "answer": 0,
    "explanation": "FlashAttention 的核心作用是：通过 IO-aware 实现降低显存读写开销。"
  },
  {
    "id": "q-0256",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "关于 FlashAttention，哪项是更典型的优势？",
    "options": [
      "提升训练与推理效率",
      "完全没有计算开销",
      "一定替代所有其他模块",
      "只对前端页面有效"
    ],
    "answer": 0,
    "explanation": "FlashAttention 的典型优势是：提升训练与推理效率。"
  },
  {
    "id": "q-0257",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "下列哪种场景最常会用到 FlashAttention？",
    "options": [
      "大模型高效训练与推理",
      "打印日志颜色配置",
      "浏览器主题切换",
      "手工标注界面美化"
    ],
    "answer": 0,
    "explanation": "FlashAttention 常见于：大模型高效训练与推理。"
  },
  {
    "id": "q-0258",
    "type": "judge",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "判断：FlashAttention 的一个常见局限是：不是改变模型语义，而是更高效实现。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。FlashAttention 的确存在这样的局限：不是改变模型语义，而是更高效实现。"
  },
  {
    "id": "q-0259",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "RoPE 的核心作用最接近下面哪一项？",
    "options": [
      "旋转位置编码，把位置信息注入到注意力计算中",
      "只用于图像压缩",
      "只负责损失函数计算",
      "只决定 batch size"
    ],
    "answer": 0,
    "explanation": "RoPE 的核心作用是：旋转位置编码，把位置信息注入到注意力计算中。"
  },
  {
    "id": "q-0260",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "关于 RoPE，哪项是更典型的优势？",
    "options": [
      "相对位置建模与长度外推表现较好",
      "完全没有计算开销",
      "一定替代所有其他模块",
      "只对前端页面有效"
    ],
    "answer": 0,
    "explanation": "RoPE 的典型优势是：相对位置建模与长度外推表现较好。"
  },
  {
    "id": "q-0261",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "下列哪种场景最常会用到 RoPE？",
    "options": [
      "现代 LLM/VLM 常见",
      "打印日志颜色配置",
      "浏览器主题切换",
      "手工标注界面美化"
    ],
    "answer": 0,
    "explanation": "RoPE 常见于：现代 LLM/VLM 常见。"
  },
  {
    "id": "q-0262",
    "type": "judge",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "判断：RoPE 的一个常见局限是：极长上下文下仍可能需要配套技巧。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。RoPE 的确存在这样的局限：极长上下文下仍可能需要配套技巧。"
  },
  {
    "id": "q-0263",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "ALiBi 的核心作用最接近下面哪一项？",
    "options": [
      "通过随距离增长的偏置建模位置",
      "只用于图像压缩",
      "只负责损失函数计算",
      "只决定 batch size"
    ],
    "answer": 0,
    "explanation": "ALiBi 的核心作用是：通过随距离增长的偏置建模位置。"
  },
  {
    "id": "q-0264",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "关于 ALiBi，哪项是更典型的优势？",
    "options": [
      "外推到更长长度相对简单",
      "完全没有计算开销",
      "一定替代所有其他模块",
      "只对前端页面有效"
    ],
    "answer": 0,
    "explanation": "ALiBi 的典型优势是：外推到更长长度相对简单。"
  },
  {
    "id": "q-0265",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "下列哪种场景最常会用到 ALiBi？",
    "options": [
      "长上下文探索",
      "打印日志颜色配置",
      "浏览器主题切换",
      "手工标注界面美化"
    ],
    "answer": 0,
    "explanation": "ALiBi 常见于：长上下文探索。"
  },
  {
    "id": "q-0266",
    "type": "judge",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "判断：ALiBi 的一个常见局限是：表达方式比可学习位置嵌入更受限制。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。ALiBi 的确存在这样的局限：表达方式比可学习位置嵌入更受限制。"
  },
  {
    "id": "q-0267",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "hard",
    "question": "为什么点积注意力中要除以 sqrt(d_k)？",
    "options": [
      "避免高维点积过大使 softmax 进入饱和区",
      "为了减少 token 数量",
      "为了替代位置编码",
      "为了关闭梯度"
    ],
    "answer": 0,
    "explanation": "除以 sqrt(d_k) 的核心目的是控制数值尺度，避免 softmax 过于尖锐。"
  },
  {
    "id": "q-0268",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "hard",
    "question": "在很深的 Transformer 中，Pre-Norm 常被偏好的主要原因是？",
    "options": [
      "梯度传播更稳，训练更容易收敛",
      "参数量一定更少",
      "不需要残差连接",
      "能让注意力复杂度从 O(n^2) 变成 O(n)"
    ],
    "answer": 0,
    "explanation": "Pre-Norm 常见优势是深层训练更稳。"
  },
  {
    "id": "q-0269",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "自注意力和卷积相比，一个显著特点是？",
    "options": [
      "自注意力更容易直接建模远距离依赖",
      "自注意力天然只适合 1D 序列",
      "卷积完全不能处理图像",
      "卷积不需要参数"
    ],
    "answer": 0,
    "explanation": "自注意力的强项之一是全局依赖建模。"
  },
  {
    "id": "q-0270",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "hard",
    "question": "为什么多头注意力不是简单重复单头注意力？",
    "options": [
      "不同头可学习不同关系子空间与关注模式",
      "因为多头一定减少参数量",
      "因为单头不能做 softmax",
      "因为多头会自动解决过拟合"
    ],
    "answer": 0,
    "explanation": "多头的意义在于并行学习不同关系子空间。"
  },
  {
    "id": "q-0271",
    "type": "mcq",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "KV Cache 主要优化的是哪一阶段？",
    "options": [
      "自回归推理阶段",
      "训练前的数据清洗",
      "标签标注阶段",
      "模型蒸馏阶段"
    ],
    "answer": 0,
    "explanation": "KV Cache 主要加速生成时的逐步解码。"
  },
  {
    "id": "q-0272",
    "type": "judge",
    "topic": "Transformer",
    "difficulty": "hard",
    "question": "判断：Encoder-only 模型更适合理解类任务，而 decoder-only 模型更自然适合自回归生成。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法通常正确，这是两类架构的典型分工。"
  },
  {
    "id": "q-0273",
    "type": "judge",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "判断：Causal Mask 的作用是让当前位置能看到未来 token，从而提升生成速度。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "该说法错误。Causal Mask 恰恰是阻止看到未来 token，以保证因果性。"
  },
  {
    "id": "q-0274",
    "type": "judge",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "判断：位置编码的存在是因为注意力本身对 token 顺序并不敏感。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确，所以需要显式注入位置信息。"
  },
  {
    "id": "q-0275",
    "type": "judge",
    "topic": "Transformer",
    "difficulty": "hard",
    "question": "判断：FlashAttention 主要是更高效的实现方式，而不是改变注意力定义本身。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确，它主要优化 IO 和显存访问。"
  },
  {
    "id": "q-0276",
    "type": "judge",
    "topic": "Transformer",
    "difficulty": "hard",
    "question": "判断：标准全注意力在序列长度翻倍时，计算和显存压力通常会显著增加。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确，标准全注意力一般呈平方级增长趋势。"
  },
  {
    "id": "q-0277",
    "type": "short",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "请解释 Transformer block 中“注意力层 + FFN + 残差 + 归一化”各自承担什么作用。",
    "reference": "回答这个问题时，不能只背模块名。应说明：注意力负责 token 间交互，FFN 负责逐 token 非线性变换，残差帮助梯度传播，归一化稳定训练。还可补充 Pre-Norm/Post-Norm 差异。",
    "keypoints": [
      "逐个解释四个模块的作用",
      "说明它们如何协同工作",
      "补充 Pre-Norm 与训练稳定性的关系"
    ]
  },
  {
    "id": "q-0278",
    "type": "short",
    "topic": "Transformer",
    "difficulty": "hard",
    "question": "请比较 Self-Attention、Cross-Attention 与 Co-Attention 在多模态任务中的作用差异。",
    "reference": "Self-Attention 更偏单模态内部关系建模，Cross-Attention 常用于一个模态查询另一个模态，Co-Attention 则更强调双向交互。回答时可结合 VQA、图文检索和 captioning 场景。",
    "keypoints": [
      "分别定义三种注意力/交互方式",
      "结合多模态任务说明用途",
      "补充计算开销与工程 trade-off"
    ]
  },
  {
    "id": "q-0279",
    "type": "short",
    "topic": "Transformer",
    "difficulty": "hard",
    "question": "为什么长上下文、多图、多帧场景会让 Transformer 的推理和训练成本迅速升高？",
    "reference": "核心原因包括：token 数增加后标准注意力复杂度上升、KV cache 增大、显存带宽瓶颈更明显，以及视觉 token 常远多于纯文本 token。",
    "keypoints": [
      "说明复杂度与 token 数的关系",
      "解释训练和推理分别受什么限制",
      "结合多图或视频输入举例"
    ]
  },
  {
    "id": "q-0280",
    "type": "mcq",
    "topic": "表征学习",
    "difficulty": "easy",
    "question": "BERT 最贴切的描述是什么？",
    "options": [
      "基于双向 Transformer Encoder 的语言表示模型",
      "一种优化器",
      "一种数据标注平台",
      "一种网页部署服务"
    ],
    "answer": 0,
    "explanation": "BERT 的核心定义是：基于双向 Transformer Encoder 的语言表示模型。"
  },
  {
    "id": "q-0281",
    "type": "mcq",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "关于 BERT 的训练目标或典型做法，下列哪项正确？",
    "options": [
      "以 MLM 为主，原始版本还引入 NSP",
      "核心目标是关闭梯度",
      "只依赖前端渲染",
      "与下游任务完全脱钩"
    ],
    "answer": 0,
    "explanation": "BERT 的训练目标/典型做法是：以 MLM 为主，原始版本还引入 NSP。"
  },
  {
    "id": "q-0282",
    "type": "mcq",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "BERT 的一个典型优势是什么？",
    "options": [
      "适合理解类任务，能同时利用左右上下文",
      "完全没有任何计算成本",
      "不需要数据",
      "不会受任务影响"
    ],
    "answer": 0,
    "explanation": "BERT 的典型优势是：适合理解类任务，能同时利用左右上下文。"
  },
  {
    "id": "q-0283",
    "type": "judge",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "判断：BERT 的一个常见局限是：不天然适合标准自回归生成。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。BERT 的确有这样的局限：不天然适合标准自回归生成。"
  },
  {
    "id": "q-0284",
    "type": "mcq",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "下列哪种场景更常会用到 BERT？",
    "options": [
      "分类、抽取、匹配、检索特征编码",
      "只在无参数规则系统中",
      "只在图片压缩格式设计中",
      "只在前端布局中"
    ],
    "answer": 0,
    "explanation": "BERT 常见于：分类、抽取、匹配、检索特征编码。"
  },
  {
    "id": "q-0285",
    "type": "mcq",
    "topic": "表征学习",
    "difficulty": "easy",
    "question": "RoBERTa 最贴切的描述是什么？",
    "options": [
      "对 BERT 训练策略做强化的双向编码模型",
      "一种优化器",
      "一种数据标注平台",
      "一种网页部署服务"
    ],
    "answer": 0,
    "explanation": "RoBERTa 的核心定义是：对 BERT 训练策略做强化的双向编码模型。"
  },
  {
    "id": "q-0286",
    "type": "mcq",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "关于 RoBERTa 的训练目标或典型做法，下列哪项正确？",
    "options": [
      "去掉 NSP、使用更多数据和更充分训练",
      "核心目标是关闭梯度",
      "只依赖前端渲染",
      "与下游任务完全脱钩"
    ],
    "answer": 0,
    "explanation": "RoBERTa 的训练目标/典型做法是：去掉 NSP、使用更多数据和更充分训练。"
  },
  {
    "id": "q-0287",
    "type": "mcq",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "RoBERTa 的一个典型优势是什么？",
    "options": [
      "在很多理解任务上优于原始 BERT",
      "完全没有任何计算成本",
      "不需要数据",
      "不会受任务影响"
    ],
    "answer": 0,
    "explanation": "RoBERTa 的典型优势是：在很多理解任务上优于原始 BERT。"
  },
  {
    "id": "q-0288",
    "type": "judge",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "判断：RoBERTa 的一个常见局限是：核心架构并未本质改变。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。RoBERTa 的确有这样的局限：核心架构并未本质改变。"
  },
  {
    "id": "q-0289",
    "type": "mcq",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "下列哪种场景更常会用到 RoBERTa？",
    "options": [
      "文本分类、匹配、表征编码",
      "只在无参数规则系统中",
      "只在图片压缩格式设计中",
      "只在前端布局中"
    ],
    "answer": 0,
    "explanation": "RoBERTa 常见于：文本分类、匹配、表征编码。"
  },
  {
    "id": "q-0290",
    "type": "mcq",
    "topic": "视觉表征",
    "difficulty": "easy",
    "question": "ViT 最贴切的描述是什么？",
    "options": [
      "把图像切成 patch token 后用 Transformer 编码",
      "一种优化器",
      "一种数据标注平台",
      "一种网页部署服务"
    ],
    "answer": 0,
    "explanation": "ViT 的核心定义是：把图像切成 patch token 后用 Transformer 编码。"
  },
  {
    "id": "q-0291",
    "type": "mcq",
    "topic": "视觉表征",
    "difficulty": "medium",
    "question": "关于 ViT 的训练目标或典型做法，下列哪项正确？",
    "options": [
      "监督分类或更广义视觉预训练",
      "核心目标是关闭梯度",
      "只依赖前端渲染",
      "与下游任务完全脱钩"
    ],
    "answer": 0,
    "explanation": "ViT 的训练目标/典型做法是：监督分类或更广义视觉预训练。"
  },
  {
    "id": "q-0292",
    "type": "mcq",
    "topic": "视觉表征",
    "difficulty": "medium",
    "question": "ViT 的一个典型优势是什么？",
    "options": [
      "统一的序列建模方式，便于迁移到多模态",
      "完全没有任何计算成本",
      "不需要数据",
      "不会受任务影响"
    ],
    "answer": 0,
    "explanation": "ViT 的典型优势是：统一的序列建模方式，便于迁移到多模态。"
  },
  {
    "id": "q-0293",
    "type": "judge",
    "topic": "视觉表征",
    "difficulty": "medium",
    "question": "判断：ViT 的一个常见局限是：对数据量和训练技巧较敏感。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。ViT 的确有这样的局限：对数据量和训练技巧较敏感。"
  },
  {
    "id": "q-0294",
    "type": "mcq",
    "topic": "视觉表征",
    "difficulty": "medium",
    "question": "下列哪种场景更常会用到 ViT？",
    "options": [
      "图像分类、检测分割骨干、多模态视觉编码器",
      "只在无参数规则系统中",
      "只在图片压缩格式设计中",
      "只在前端布局中"
    ],
    "answer": 0,
    "explanation": "ViT 常见于：图像分类、检测分割骨干、多模态视觉编码器。"
  },
  {
    "id": "q-0295",
    "type": "mcq",
    "topic": "视觉表征",
    "difficulty": "medium",
    "question": "Patch Embedding 最贴切的描述是什么？",
    "options": [
      "把图像块映射成向量 token",
      "一种优化器",
      "一种数据标注平台",
      "一种网页部署服务"
    ],
    "answer": 0,
    "explanation": "Patch Embedding 的核心定义是：把图像块映射成向量 token。"
  },
  {
    "id": "q-0296",
    "type": "mcq",
    "topic": "视觉表征",
    "difficulty": "medium",
    "question": "关于 Patch Embedding 的训练目标或典型做法，下列哪项正确？",
    "options": [
      "把 2D 图像离散成 Transformer 可处理的序列",
      "核心目标是关闭梯度",
      "只依赖前端渲染",
      "与下游任务完全脱钩"
    ],
    "answer": 0,
    "explanation": "Patch Embedding 的训练目标/典型做法是：把 2D 图像离散成 Transformer 可处理的序列。"
  },
  {
    "id": "q-0297",
    "type": "mcq",
    "topic": "视觉表征",
    "difficulty": "medium",
    "question": "Patch Embedding 的一个典型优势是什么？",
    "options": [
      "统一视觉与文本 token 接口",
      "完全没有任何计算成本",
      "不需要数据",
      "不会受任务影响"
    ],
    "answer": 0,
    "explanation": "Patch Embedding 的典型优势是：统一视觉与文本 token 接口。"
  },
  {
    "id": "q-0298",
    "type": "judge",
    "topic": "视觉表征",
    "difficulty": "medium",
    "question": "判断：Patch Embedding 的一个常见局限是：patch 过大可能丢失细节。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Patch Embedding 的确有这样的局限：patch 过大可能丢失细节。"
  },
  {
    "id": "q-0299",
    "type": "mcq",
    "topic": "视觉表征",
    "difficulty": "medium",
    "question": "下列哪种场景更常会用到 Patch Embedding？",
    "options": [
      "ViT 与许多 VLM 视觉前端",
      "只在无参数规则系统中",
      "只在图片压缩格式设计中",
      "只在前端布局中"
    ],
    "answer": 0,
    "explanation": "Patch Embedding 常见于：ViT 与许多 VLM 视觉前端。"
  },
  {
    "id": "q-0300",
    "type": "mcq",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "[CLS] Token 最贴切的描述是什么？",
    "options": [
      "聚合全局信息用于分类/匹配等任务",
      "一种优化器",
      "一种数据标注平台",
      "一种网页部署服务"
    ],
    "answer": 0,
    "explanation": "[CLS] Token 的核心定义是：聚合全局信息用于分类/匹配等任务。"
  },
  {
    "id": "q-0301",
    "type": "mcq",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "关于 [CLS] Token 的训练目标或典型做法，下列哪项正确？",
    "options": [
      "作为句级或图级表示的读出位置",
      "核心目标是关闭梯度",
      "只依赖前端渲染",
      "与下游任务完全脱钩"
    ],
    "answer": 0,
    "explanation": "[CLS] Token 的训练目标/典型做法是：作为句级或图级表示的读出位置。"
  },
  {
    "id": "q-0302",
    "type": "mcq",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "[CLS] Token 的一个典型优势是什么？",
    "options": [
      "方便下游头读取全局语义",
      "完全没有任何计算成本",
      "不需要数据",
      "不会受任务影响"
    ],
    "answer": 0,
    "explanation": "[CLS] Token 的典型优势是：方便下游头读取全局语义。"
  },
  {
    "id": "q-0303",
    "type": "judge",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "判断：[CLS] Token 的一个常见局限是：是否最优取决于任务与训练方式。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。[CLS] Token 的确有这样的局限：是否最优取决于任务与训练方式。"
  },
  {
    "id": "q-0304",
    "type": "mcq",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "下列哪种场景更常会用到 [CLS] Token？",
    "options": [
      "BERT/ViT 分类头、图文匹配",
      "只在无参数规则系统中",
      "只在图片压缩格式设计中",
      "只在前端布局中"
    ],
    "answer": 0,
    "explanation": "[CLS] Token 常见于：BERT/ViT 分类头、图文匹配。"
  },
  {
    "id": "q-0305",
    "type": "mcq",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "MLM 最贴切的描述是什么？",
    "options": [
      "随机遮住部分 token 并预测其内容",
      "一种优化器",
      "一种数据标注平台",
      "一种网页部署服务"
    ],
    "answer": 0,
    "explanation": "MLM 的核心定义是：随机遮住部分 token 并预测其内容。"
  },
  {
    "id": "q-0306",
    "type": "mcq",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "关于 MLM 的训练目标或典型做法，下列哪项正确？",
    "options": [
      "学习上下文相关的双向表示",
      "核心目标是关闭梯度",
      "只依赖前端渲染",
      "与下游任务完全脱钩"
    ],
    "answer": 0,
    "explanation": "MLM 的训练目标/典型做法是：学习上下文相关的双向表示。"
  },
  {
    "id": "q-0307",
    "type": "mcq",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "MLM 的一个典型优势是什么？",
    "options": [
      "提升理解类表征能力",
      "完全没有任何计算成本",
      "不需要数据",
      "不会受任务影响"
    ],
    "answer": 0,
    "explanation": "MLM 的典型优势是：提升理解类表征能力。"
  },
  {
    "id": "q-0308",
    "type": "judge",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "判断：MLM 的一个常见局限是：预训练目标与生成目标不完全一致。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。MLM 的确有这样的局限：预训练目标与生成目标不完全一致。"
  },
  {
    "id": "q-0309",
    "type": "mcq",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "下列哪种场景更常会用到 MLM？",
    "options": [
      "BERT 类预训练",
      "只在无参数规则系统中",
      "只在图片压缩格式设计中",
      "只在前端布局中"
    ],
    "answer": 0,
    "explanation": "MLM 常见于：BERT 类预训练。"
  },
  {
    "id": "q-0310",
    "type": "mcq",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "NSP 最贴切的描述是什么？",
    "options": [
      "判断句子 B 是否为句子 A 的下一句",
      "一种优化器",
      "一种数据标注平台",
      "一种网页部署服务"
    ],
    "answer": 0,
    "explanation": "NSP 的核心定义是：判断句子 B 是否为句子 A 的下一句。"
  },
  {
    "id": "q-0311",
    "type": "mcq",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "关于 NSP 的训练目标或典型做法，下列哪项正确？",
    "options": [
      "早期用于句间关系建模",
      "核心目标是关闭梯度",
      "只依赖前端渲染",
      "与下游任务完全脱钩"
    ],
    "answer": 0,
    "explanation": "NSP 的训练目标/典型做法是：早期用于句间关系建模。"
  },
  {
    "id": "q-0312",
    "type": "mcq",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "NSP 的一个典型优势是什么？",
    "options": [
      "能注入一定的篇章关系信号",
      "完全没有任何计算成本",
      "不需要数据",
      "不会受任务影响"
    ],
    "answer": 0,
    "explanation": "NSP 的典型优势是：能注入一定的篇章关系信号。"
  },
  {
    "id": "q-0313",
    "type": "judge",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "判断：NSP 的一个常见局限是：后续很多工作发现收益有限甚至可替代。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。NSP 的确有这样的局限：后续很多工作发现收益有限甚至可替代。"
  },
  {
    "id": "q-0314",
    "type": "mcq",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "下列哪种场景更常会用到 NSP？",
    "options": [
      "原始 BERT 训练设定",
      "只在无参数规则系统中",
      "只在图片压缩格式设计中",
      "只在前端布局中"
    ],
    "answer": 0,
    "explanation": "NSP 常见于：原始 BERT 训练设定。"
  },
  {
    "id": "q-0315",
    "type": "mcq",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "Contrastive Learning 最贴切的描述是什么？",
    "options": [
      "拉近正对样本、推远负样本",
      "一种优化器",
      "一种数据标注平台",
      "一种网页部署服务"
    ],
    "answer": 0,
    "explanation": "Contrastive Learning 的核心定义是：拉近正对样本、推远负样本。"
  },
  {
    "id": "q-0316",
    "type": "mcq",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "关于 Contrastive Learning 的训练目标或典型做法，下列哪项正确？",
    "options": [
      "学习可检索、可迁移的表征空间",
      "核心目标是关闭梯度",
      "只依赖前端渲染",
      "与下游任务完全脱钩"
    ],
    "answer": 0,
    "explanation": "Contrastive Learning 的训练目标/典型做法是：学习可检索、可迁移的表征空间。"
  },
  {
    "id": "q-0317",
    "type": "mcq",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "Contrastive Learning 的一个典型优势是什么？",
    "options": [
      "适合跨模态对齐与无监督/弱监督表征学习",
      "完全没有任何计算成本",
      "不需要数据",
      "不会受任务影响"
    ],
    "answer": 0,
    "explanation": "Contrastive Learning 的典型优势是：适合跨模态对齐与无监督/弱监督表征学习。"
  },
  {
    "id": "q-0318",
    "type": "judge",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "判断：Contrastive Learning 的一个常见局限是：负样本设计和 batch 规模较关键。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Contrastive Learning 的确有这样的局限：负样本设计和 batch 规模较关键。"
  },
  {
    "id": "q-0319",
    "type": "mcq",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "下列哪种场景更常会用到 Contrastive Learning？",
    "options": [
      "CLIP、SimCLR、图文检索",
      "只在无参数规则系统中",
      "只在图片压缩格式设计中",
      "只在前端布局中"
    ],
    "answer": 0,
    "explanation": "Contrastive Learning 常见于：CLIP、SimCLR、图文检索。"
  },
  {
    "id": "q-0320",
    "type": "mcq",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "Pooling 最贴切的描述是什么？",
    "options": [
      "把 token 级表示汇聚成句级/图级表示",
      "一种优化器",
      "一种数据标注平台",
      "一种网页部署服务"
    ],
    "answer": 0,
    "explanation": "Pooling 的核心定义是：把 token 级表示汇聚成句级/图级表示。"
  },
  {
    "id": "q-0321",
    "type": "mcq",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "关于 Pooling 的训练目标或典型做法，下列哪项正确？",
    "options": [
      "得到固定长度向量",
      "核心目标是关闭梯度",
      "只依赖前端渲染",
      "与下游任务完全脱钩"
    ],
    "answer": 0,
    "explanation": "Pooling 的训练目标/典型做法是：得到固定长度向量。"
  },
  {
    "id": "q-0322",
    "type": "mcq",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "Pooling 的一个典型优势是什么？",
    "options": [
      "便于分类、检索和相似度计算",
      "完全没有任何计算成本",
      "不需要数据",
      "不会受任务影响"
    ],
    "answer": 0,
    "explanation": "Pooling 的典型优势是：便于分类、检索和相似度计算。"
  },
  {
    "id": "q-0323",
    "type": "judge",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "判断：Pooling 的一个常见局限是：可能损失细粒度信息。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Pooling 的确有这样的局限：可能损失细粒度信息。"
  },
  {
    "id": "q-0324",
    "type": "mcq",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "下列哪种场景更常会用到 Pooling？",
    "options": [
      "mean pooling、CLS pooling、attention pooling",
      "只在无参数规则系统中",
      "只在图片压缩格式设计中",
      "只在前端布局中"
    ],
    "answer": 0,
    "explanation": "Pooling 常见于：mean pooling、CLS pooling、attention pooling。"
  },
  {
    "id": "q-0325",
    "type": "mcq",
    "topic": "文本表征",
    "difficulty": "medium",
    "question": "WordPiece/BPE 最贴切的描述是什么？",
    "options": [
      "把词切成子词以控制词表并处理未登录词",
      "一种优化器",
      "一种数据标注平台",
      "一种网页部署服务"
    ],
    "answer": 0,
    "explanation": "WordPiece/BPE 的核心定义是：把词切成子词以控制词表并处理未登录词。"
  },
  {
    "id": "q-0326",
    "type": "mcq",
    "topic": "文本表征",
    "difficulty": "medium",
    "question": "关于 WordPiece/BPE 的训练目标或典型做法，下列哪项正确？",
    "options": [
      "提升词表覆盖与泛化",
      "核心目标是关闭梯度",
      "只依赖前端渲染",
      "与下游任务完全脱钩"
    ],
    "answer": 0,
    "explanation": "WordPiece/BPE 的训练目标/典型做法是：提升词表覆盖与泛化。"
  },
  {
    "id": "q-0327",
    "type": "mcq",
    "topic": "文本表征",
    "difficulty": "medium",
    "question": "WordPiece/BPE 的一个典型优势是什么？",
    "options": [
      "兼顾词表大小和表达能力",
      "完全没有任何计算成本",
      "不需要数据",
      "不会受任务影响"
    ],
    "answer": 0,
    "explanation": "WordPiece/BPE 的典型优势是：兼顾词表大小和表达能力。"
  },
  {
    "id": "q-0328",
    "type": "judge",
    "topic": "文本表征",
    "difficulty": "medium",
    "question": "判断：WordPiece/BPE 的一个常见局限是：切分方式会影响 token 长度和语义碎片化。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。WordPiece/BPE 的确有这样的局限：切分方式会影响 token 长度和语义碎片化。"
  },
  {
    "id": "q-0329",
    "type": "mcq",
    "topic": "文本表征",
    "difficulty": "medium",
    "question": "下列哪种场景更常会用到 WordPiece/BPE？",
    "options": [
      "BERT、RoBERTa、LLM tokenizer",
      "只在无参数规则系统中",
      "只在图片压缩格式设计中",
      "只在前端布局中"
    ],
    "answer": 0,
    "explanation": "WordPiece/BPE 常见于：BERT、RoBERTa、LLM tokenizer。"
  },
  {
    "id": "q-0330",
    "type": "mcq",
    "topic": "视觉表征",
    "difficulty": "medium",
    "question": "ViT 把图像切成 patch 后，最像 NLP 中的哪一步？",
    "options": [
      "把句子切成 token",
      "做 beam search",
      "做 LoRA 微调",
      "做强化学习"
    ],
    "answer": 0,
    "explanation": "ViT 中 patch token 的思路很像 NLP 中的 token 序列化。"
  },
  {
    "id": "q-0331",
    "type": "mcq",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "RoBERTa 相比原始 BERT 的一个关键变化是？",
    "options": [
      "去掉 NSP 并增强训练数据与训练时长",
      "改成纯 CNN 架构",
      "不再使用 Transformer",
      "只能做生成不能做理解"
    ],
    "answer": 0,
    "explanation": "RoBERTa 主要改进了训练策略，如去掉 NSP。"
  },
  {
    "id": "q-0332",
    "type": "mcq",
    "topic": "文本表征",
    "difficulty": "medium",
    "question": "子词切分（如 BPE/WordPiece）的直接动机通常不包括哪一项？",
    "options": [
      "完全消除 token 长度差异",
      "控制词表大小并处理未登录词",
      "提升词表覆盖率",
      "在一定程度上兼顾组合泛化"
    ],
    "answer": 0,
    "explanation": "子词切分不能完全消除长度差异，但能控制词表并处理 OOV。"
  },
  {
    "id": "q-0333",
    "type": "mcq",
    "topic": "表征学习",
    "difficulty": "hard",
    "question": "MLM 预训练为什么更偏向理解而非标准自回归生成？",
    "options": [
      "它在训练时利用了双向上下文",
      "因为它不需要 token",
      "因为它没有参数",
      "因为它一定只输出标签"
    ],
    "answer": 0,
    "explanation": "MLM 通过双向上下文学习表征，更适合理解任务。"
  },
  {
    "id": "q-0334",
    "type": "mcq",
    "topic": "视觉表征",
    "difficulty": "hard",
    "question": "为什么 ViT 往往比 CNN 更依赖较大数据量或合适预训练？",
    "options": [
      "Transformer 的视觉归纳偏置更弱，需要数据弥补",
      "因为 ViT 不能做分类",
      "因为 ViT 不需要位置编码",
      "因为 CNN 完全没有局部偏置"
    ],
    "answer": 0,
    "explanation": "ViT 的局部归纳偏置较弱，因此更依赖数据与预训练。"
  },
  {
    "id": "q-0335",
    "type": "judge",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "判断：BERT 类模型之所以适合理解任务，是因为它在编码时能同时利用左侧和右侧上下文。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确，这就是双向编码的价值之一。"
  },
  {
    "id": "q-0336",
    "type": "judge",
    "topic": "视觉表征",
    "difficulty": "medium",
    "question": "判断：ViT 中 patch size 越大，视觉 token 数通常越少，但细粒度信息也可能损失更多。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确，patch 大小直接影响 token 数和细节保留。"
  },
  {
    "id": "q-0337",
    "type": "judge",
    "topic": "表征学习",
    "difficulty": "hard",
    "question": "判断：RoBERTa 的主要进步更多来自训练策略加强，而非把 BERT 完全换成另一种主干。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确，RoBERTa 并没有抛弃 Encoder Transformer 主干。"
  },
  {
    "id": "q-0338",
    "type": "judge",
    "topic": "文本表征",
    "difficulty": "medium",
    "question": "判断：子词 tokenizer 的一个 trade-off 是词表更可控，但序列长度可能变长。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确，这也是 tokenizer 设计的常见权衡。"
  },
  {
    "id": "q-0339",
    "type": "short",
    "topic": "表征学习",
    "difficulty": "medium",
    "question": "请比较 BERT 和 RoBERTa 的核心差异，以及这些差异为什么会影响下游表现。",
    "reference": "回答时应讲清：两者都属于双向 Encoder，但 RoBERTa 强调更强训练策略，例如更多数据、更久训练、去掉 NSP。再分析这些变化为什么会提升理解类任务表现。",
    "keypoints": [
      "先说明两者共同点",
      "再讲训练目标和训练策略差异",
      "最后解释对下游任务的影响"
    ]
  },
  {
    "id": "q-0340",
    "type": "short",
    "topic": "视觉表征",
    "difficulty": "medium",
    "question": "请解释 ViT 的 patch embedding、位置编码、CLS token 和 MLP head 分别起什么作用。",
    "reference": "这是一个结构拆解题。答案应按数据流讲：图像切 patch 并线性映射成 token，注入位置编码后进入 Transformer，CLS 或 pooled 表示送入分类/下游头。",
    "keypoints": [
      "按前向流程解释各模块",
      "说明为什么需要位置编码",
      "补充 CLS token 的读出作用"
    ]
  },
  {
    "id": "q-0341",
    "type": "mcq",
    "topic": "多模态基础",
    "difficulty": "medium",
    "question": "跨模态特征融合 的核心含义是什么？",
    "options": [
      "把视觉、文本等不同模态的表示组合起来进行联合建模",
      "一种浏览器插件",
      "一种数据库事务",
      "一种编译器选项"
    ],
    "answer": 0,
    "explanation": "跨模态特征融合 的核心含义是：把视觉、文本等不同模态的表示组合起来进行联合建模。"
  },
  {
    "id": "q-0342",
    "type": "mcq",
    "topic": "多模态基础",
    "difficulty": "medium",
    "question": "跨模态特征融合 的一个典型优势是什么？",
    "options": [
      "能利用模态互补信息",
      "不需要数据",
      "完全没有噪声传播",
      "不需要任何模型结构"
    ],
    "answer": 0,
    "explanation": "跨模态特征融合 的典型优势是：能利用模态互补信息。"
  },
  {
    "id": "q-0343",
    "type": "mcq",
    "topic": "多模态基础",
    "difficulty": "medium",
    "question": "下列哪种场景更常见地会用到 跨模态特征融合？",
    "options": [
      "VQA、图文检索、文档理解、Agent",
      "只在页面配色中",
      "只在版本控制中",
      "只在文件压缩中"
    ],
    "answer": 0,
    "explanation": "跨模态特征融合 常见于：VQA、图文检索、文档理解、Agent。"
  },
  {
    "id": "q-0344",
    "type": "judge",
    "topic": "多模态基础",
    "difficulty": "medium",
    "question": "判断：跨模态特征融合 的一个常见挑战是：模态粒度、长度和噪声往往不一致。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。跨模态特征融合 的确存在这样的挑战：模态粒度、长度和噪声往往不一致。"
  },
  {
    "id": "q-0345",
    "type": "mcq",
    "topic": "多模态融合",
    "difficulty": "medium",
    "question": "Early Fusion 的核心含义是什么？",
    "options": [
      "在较早阶段把多模态 token/特征拼接或联合输入",
      "一种浏览器插件",
      "一种数据库事务",
      "一种编译器选项"
    ],
    "answer": 0,
    "explanation": "Early Fusion 的核心含义是：在较早阶段把多模态 token/特征拼接或联合输入。"
  },
  {
    "id": "q-0346",
    "type": "mcq",
    "topic": "多模态融合",
    "difficulty": "medium",
    "question": "Early Fusion 的一个典型优势是什么？",
    "options": [
      "有利于充分交互",
      "不需要数据",
      "完全没有噪声传播",
      "不需要任何模型结构"
    ],
    "answer": 0,
    "explanation": "Early Fusion 的典型优势是：有利于充分交互。"
  },
  {
    "id": "q-0347",
    "type": "mcq",
    "topic": "多模态融合",
    "difficulty": "medium",
    "question": "下列哪种场景更常见地会用到 Early Fusion？",
    "options": [
      "统一编码器或 token 级交互",
      "只在页面配色中",
      "只在版本控制中",
      "只在文件压缩中"
    ],
    "answer": 0,
    "explanation": "Early Fusion 常见于：统一编码器或 token 级交互。"
  },
  {
    "id": "q-0348",
    "type": "judge",
    "topic": "多模态融合",
    "difficulty": "medium",
    "question": "判断：Early Fusion 的一个常见挑战是：计算成本可能更高，噪声也会更早传播。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Early Fusion 的确存在这样的挑战：计算成本可能更高，噪声也会更早传播。"
  },
  {
    "id": "q-0349",
    "type": "mcq",
    "topic": "多模态融合",
    "difficulty": "medium",
    "question": "Late Fusion 的核心含义是什么？",
    "options": [
      "先分别编码各模态，再在后期融合决策",
      "一种浏览器插件",
      "一种数据库事务",
      "一种编译器选项"
    ],
    "answer": 0,
    "explanation": "Late Fusion 的核心含义是：先分别编码各模态，再在后期融合决策。"
  },
  {
    "id": "q-0350",
    "type": "mcq",
    "topic": "多模态融合",
    "difficulty": "medium",
    "question": "Late Fusion 的一个典型优势是什么？",
    "options": [
      "实现简单、模块化强",
      "不需要数据",
      "完全没有噪声传播",
      "不需要任何模型结构"
    ],
    "answer": 0,
    "explanation": "Late Fusion 的典型优势是：实现简单、模块化强。"
  },
  {
    "id": "q-0351",
    "type": "mcq",
    "topic": "多模态融合",
    "difficulty": "medium",
    "question": "下列哪种场景更常见地会用到 Late Fusion？",
    "options": [
      "双塔检索、分模块系统",
      "只在页面配色中",
      "只在版本控制中",
      "只在文件压缩中"
    ],
    "answer": 0,
    "explanation": "Late Fusion 常见于：双塔检索、分模块系统。"
  },
  {
    "id": "q-0352",
    "type": "judge",
    "topic": "多模态融合",
    "difficulty": "medium",
    "question": "判断：Late Fusion 的一个常见挑战是：细粒度跨模态交互可能不足。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Late Fusion 的确存在这样的挑战：细粒度跨模态交互可能不足。"
  },
  {
    "id": "q-0353",
    "type": "mcq",
    "topic": "多模态融合",
    "difficulty": "easy",
    "question": "Projector 的核心含义是什么？",
    "options": [
      "把视觉编码器输出映射到 LLM 可消费的嵌入空间",
      "一种浏览器插件",
      "一种数据库事务",
      "一种编译器选项"
    ],
    "answer": 0,
    "explanation": "Projector 的核心含义是：把视觉编码器输出映射到 LLM 可消费的嵌入空间。"
  },
  {
    "id": "q-0354",
    "type": "mcq",
    "topic": "多模态融合",
    "difficulty": "medium",
    "question": "Projector 的一个典型优势是什么？",
    "options": [
      "充当视觉与语言模型之间的桥梁",
      "不需要数据",
      "完全没有噪声传播",
      "不需要任何模型结构"
    ],
    "answer": 0,
    "explanation": "Projector 的典型优势是：充当视觉与语言模型之间的桥梁。"
  },
  {
    "id": "q-0355",
    "type": "mcq",
    "topic": "多模态融合",
    "difficulty": "medium",
    "question": "下列哪种场景更常见地会用到 Projector？",
    "options": [
      "LLaVA、许多 VLM 接入 LLM",
      "只在页面配色中",
      "只在版本控制中",
      "只在文件压缩中"
    ],
    "answer": 0,
    "explanation": "Projector 常见于：LLaVA、许多 VLM 接入 LLM。"
  },
  {
    "id": "q-0356",
    "type": "judge",
    "topic": "多模态融合",
    "difficulty": "medium",
    "question": "判断：Projector 的一个常见挑战是：桥接层能力不足会限制上限。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Projector 的确存在这样的挑战：桥接层能力不足会限制上限。"
  },
  {
    "id": "q-0357",
    "type": "mcq",
    "topic": "多模态训练",
    "difficulty": "medium",
    "question": "图文对比学习 的核心含义是什么？",
    "options": [
      "让匹配图文在表示空间更接近，不匹配样本更远",
      "一种浏览器插件",
      "一种数据库事务",
      "一种编译器选项"
    ],
    "answer": 0,
    "explanation": "图文对比学习 的核心含义是：让匹配图文在表示空间更接近，不匹配样本更远。"
  },
  {
    "id": "q-0358",
    "type": "mcq",
    "topic": "多模态训练",
    "difficulty": "medium",
    "question": "图文对比学习 的一个典型优势是什么？",
    "options": [
      "适合检索与跨模态对齐",
      "不需要数据",
      "完全没有噪声传播",
      "不需要任何模型结构"
    ],
    "answer": 0,
    "explanation": "图文对比学习 的典型优势是：适合检索与跨模态对齐。"
  },
  {
    "id": "q-0359",
    "type": "mcq",
    "topic": "多模态训练",
    "difficulty": "medium",
    "question": "下列哪种场景更常见地会用到 图文对比学习？",
    "options": [
      "CLIP、图文检索",
      "只在页面配色中",
      "只在版本控制中",
      "只在文件压缩中"
    ],
    "answer": 0,
    "explanation": "图文对比学习 常见于：CLIP、图文检索。"
  },
  {
    "id": "q-0360",
    "type": "judge",
    "topic": "多模态训练",
    "difficulty": "medium",
    "question": "判断：图文对比学习 的一个常见挑战是：细粒度生成能力有限，且依赖负样本设计。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。图文对比学习 的确存在这样的挑战：细粒度生成能力有限，且依赖负样本设计。"
  },
  {
    "id": "q-0361",
    "type": "mcq",
    "topic": "多模态训练",
    "difficulty": "medium",
    "question": "ITM 的核心含义是什么？",
    "options": [
      "Image-Text Matching，判断图文是否匹配",
      "一种浏览器插件",
      "一种数据库事务",
      "一种编译器选项"
    ],
    "answer": 0,
    "explanation": "ITM 的核心含义是：Image-Text Matching，判断图文是否匹配。"
  },
  {
    "id": "q-0362",
    "type": "mcq",
    "topic": "多模态训练",
    "difficulty": "medium",
    "question": "ITM 的一个典型优势是什么？",
    "options": [
      "增强细粒度对齐与匹配判别",
      "不需要数据",
      "完全没有噪声传播",
      "不需要任何模型结构"
    ],
    "answer": 0,
    "explanation": "ITM 的典型优势是：增强细粒度对齐与匹配判别。"
  },
  {
    "id": "q-0363",
    "type": "mcq",
    "topic": "多模态训练",
    "difficulty": "medium",
    "question": "下列哪种场景更常见地会用到 ITM？",
    "options": [
      "BLIP、部分双流多模态预训练",
      "只在页面配色中",
      "只在版本控制中",
      "只在文件压缩中"
    ],
    "answer": 0,
    "explanation": "ITM 常见于：BLIP、部分双流多模态预训练。"
  },
  {
    "id": "q-0364",
    "type": "judge",
    "topic": "多模态训练",
    "difficulty": "medium",
    "question": "判断：ITM 的一个常见挑战是：通常仍需与其他目标联合使用。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。ITM 的确存在这样的挑战：通常仍需与其他目标联合使用。"
  },
  {
    "id": "q-0365",
    "type": "mcq",
    "topic": "多模态任务",
    "difficulty": "medium",
    "question": "Captioning 的核心含义是什么？",
    "options": [
      "根据图像生成描述文本",
      "一种浏览器插件",
      "一种数据库事务",
      "一种编译器选项"
    ],
    "answer": 0,
    "explanation": "Captioning 的核心含义是：根据图像生成描述文本。"
  },
  {
    "id": "q-0366",
    "type": "mcq",
    "topic": "多模态任务",
    "difficulty": "medium",
    "question": "Captioning 的一个典型优势是什么？",
    "options": [
      "能检验图像到语言的生成能力",
      "不需要数据",
      "完全没有噪声传播",
      "不需要任何模型结构"
    ],
    "answer": 0,
    "explanation": "Captioning 的典型优势是：能检验图像到语言的生成能力。"
  },
  {
    "id": "q-0367",
    "type": "mcq",
    "topic": "多模态任务",
    "difficulty": "medium",
    "question": "下列哪种场景更常见地会用到 Captioning？",
    "options": [
      "图像描述、辅助标注",
      "只在页面配色中",
      "只在版本控制中",
      "只在文件压缩中"
    ],
    "answer": 0,
    "explanation": "Captioning 常见于：图像描述、辅助标注。"
  },
  {
    "id": "q-0368",
    "type": "judge",
    "topic": "多模态任务",
    "difficulty": "medium",
    "question": "判断：Captioning 的一个常见挑战是：自动指标未必完全反映人类感知质量。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Captioning 的确存在这样的挑战：自动指标未必完全反映人类感知质量。"
  },
  {
    "id": "q-0369",
    "type": "mcq",
    "topic": "多模态任务",
    "difficulty": "easy",
    "question": "VQA 的核心含义是什么？",
    "options": [
      "根据图像和问题生成答案",
      "一种浏览器插件",
      "一种数据库事务",
      "一种编译器选项"
    ],
    "answer": 0,
    "explanation": "VQA 的核心含义是：根据图像和问题生成答案。"
  },
  {
    "id": "q-0370",
    "type": "mcq",
    "topic": "多模态任务",
    "difficulty": "medium",
    "question": "VQA 的一个典型优势是什么？",
    "options": [
      "考察视觉理解与语言推理的联合能力",
      "不需要数据",
      "完全没有噪声传播",
      "不需要任何模型结构"
    ],
    "answer": 0,
    "explanation": "VQA 的典型优势是：考察视觉理解与语言推理的联合能力。"
  },
  {
    "id": "q-0371",
    "type": "mcq",
    "topic": "多模态任务",
    "difficulty": "medium",
    "question": "下列哪种场景更常见地会用到 VQA？",
    "options": [
      "通用多模态评测",
      "只在页面配色中",
      "只在版本控制中",
      "只在文件压缩中"
    ],
    "answer": 0,
    "explanation": "VQA 常见于：通用多模态评测。"
  },
  {
    "id": "q-0372",
    "type": "judge",
    "topic": "多模态任务",
    "difficulty": "medium",
    "question": "判断：VQA 的一个常见挑战是：可能依赖数据偏差或语言先验。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。VQA 的确存在这样的挑战：可能依赖数据偏差或语言先验。"
  },
  {
    "id": "q-0373",
    "type": "mcq",
    "topic": "多模态任务",
    "difficulty": "medium",
    "question": "Grounding 的核心含义是什么？",
    "options": [
      "把文本描述对齐到图像中的区域或对象",
      "一种浏览器插件",
      "一种数据库事务",
      "一种编译器选项"
    ],
    "answer": 0,
    "explanation": "Grounding 的核心含义是：把文本描述对齐到图像中的区域或对象。"
  },
  {
    "id": "q-0374",
    "type": "mcq",
    "topic": "多模态任务",
    "difficulty": "medium",
    "question": "Grounding 的一个典型优势是什么？",
    "options": [
      "强调细粒度跨模态定位",
      "不需要数据",
      "完全没有噪声传播",
      "不需要任何模型结构"
    ],
    "answer": 0,
    "explanation": "Grounding 的典型优势是：强调细粒度跨模态定位。"
  },
  {
    "id": "q-0375",
    "type": "mcq",
    "topic": "多模态任务",
    "difficulty": "medium",
    "question": "下列哪种场景更常见地会用到 Grounding？",
    "options": [
      "referring expression、检测定位",
      "只在页面配色中",
      "只在版本控制中",
      "只在文件压缩中"
    ],
    "answer": 0,
    "explanation": "Grounding 常见于：referring expression、检测定位。"
  },
  {
    "id": "q-0376",
    "type": "judge",
    "topic": "多模态任务",
    "difficulty": "medium",
    "question": "判断：Grounding 的一个常见挑战是：标注成本高，对空间建模要求高。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Grounding 的确存在这样的挑战：标注成本高，对空间建模要求高。"
  },
  {
    "id": "q-0377",
    "type": "mcq",
    "topic": "多模态任务",
    "difficulty": "medium",
    "question": "OCR / 文档理解 的核心含义是什么？",
    "options": [
      "识别并理解图像中的文字、布局与结构",
      "一种浏览器插件",
      "一种数据库事务",
      "一种编译器选项"
    ],
    "answer": 0,
    "explanation": "OCR / 文档理解 的核心含义是：识别并理解图像中的文字、布局与结构。"
  },
  {
    "id": "q-0378",
    "type": "mcq",
    "topic": "多模态任务",
    "difficulty": "medium",
    "question": "OCR / 文档理解 的一个典型优势是什么？",
    "options": [
      "适合票据、表格、表单、长文档场景",
      "不需要数据",
      "完全没有噪声传播",
      "不需要任何模型结构"
    ],
    "answer": 0,
    "explanation": "OCR / 文档理解 的典型优势是：适合票据、表格、表单、长文档场景。"
  },
  {
    "id": "q-0379",
    "type": "mcq",
    "topic": "多模态任务",
    "difficulty": "medium",
    "question": "下列哪种场景更常见地会用到 OCR / 文档理解？",
    "options": [
      "表单解析、票据识别、文档问答",
      "只在页面配色中",
      "只在版本控制中",
      "只在文件压缩中"
    ],
    "answer": 0,
    "explanation": "OCR / 文档理解 常见于：表单解析、票据识别、文档问答。"
  },
  {
    "id": "q-0380",
    "type": "judge",
    "topic": "多模态任务",
    "difficulty": "medium",
    "question": "判断：OCR / 文档理解 的一个常见挑战是：分辨率、布局复杂度和多语言都会增加难度。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。OCR / 文档理解 的确存在这样的挑战：分辨率、布局复杂度和多语言都会增加难度。"
  },
  {
    "id": "q-0381",
    "type": "mcq",
    "topic": "多模态任务",
    "difficulty": "medium",
    "question": "视频理解 的核心含义是什么？",
    "options": [
      "在空间之外再建模时间维度",
      "一种浏览器插件",
      "一种数据库事务",
      "一种编译器选项"
    ],
    "answer": 0,
    "explanation": "视频理解 的核心含义是：在空间之外再建模时间维度。"
  },
  {
    "id": "q-0382",
    "type": "mcq",
    "topic": "多模态任务",
    "difficulty": "medium",
    "question": "视频理解 的一个典型优势是什么？",
    "options": [
      "能处理动态事件与跨帧依赖",
      "不需要数据",
      "完全没有噪声传播",
      "不需要任何模型结构"
    ],
    "answer": 0,
    "explanation": "视频理解 的典型优势是：能处理动态事件与跨帧依赖。"
  },
  {
    "id": "q-0383",
    "type": "mcq",
    "topic": "多模态任务",
    "difficulty": "medium",
    "question": "下列哪种场景更常见地会用到 视频理解？",
    "options": [
      "视频问答、动作理解、多模态 Agent",
      "只在页面配色中",
      "只在版本控制中",
      "只在文件压缩中"
    ],
    "answer": 0,
    "explanation": "视频理解 常见于：视频问答、动作理解、多模态 Agent。"
  },
  {
    "id": "q-0384",
    "type": "judge",
    "topic": "多模态任务",
    "difficulty": "medium",
    "question": "判断：视频理解 的一个常见挑战是：token 数和算力压力更大。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。视频理解 的确存在这样的挑战：token 数和算力压力更大。"
  },
  {
    "id": "q-0385",
    "type": "mcq",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "ViLT 最贴切的结构或定位描述是什么？",
    "options": [
      "尽量减少重视觉 backbone，直接把图像 patch 和文本 token 送入统一 Transformer",
      "一种优化器",
      "一种纯语音编码器",
      "一种数据库协议"
    ],
    "answer": 0,
    "explanation": "ViLT 的核心描述是：尽量减少重视觉 backbone，直接把图像 patch 和文本 token 送入统一 Transformer。"
  },
  {
    "id": "q-0386",
    "type": "mcq",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "ViLT 的一个典型优势是什么？",
    "options": [
      "结构更简洁，强调端到端多模态编码",
      "不需要任何训练数据",
      "完全不受上下文长度影响",
      "只能用于前端展示"
    ],
    "answer": 0,
    "explanation": "ViLT 的典型优势是：结构更简洁，强调端到端多模态编码。"
  },
  {
    "id": "q-0387",
    "type": "mcq",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "下列哪种场景最常会优先想到 ViLT？",
    "options": [
      "统一多模态编码预训练",
      "只在压缩图片格式时",
      "只在手工标注界面里",
      "只在日志采集中"
    ],
    "answer": 0,
    "explanation": "ViLT 常见于：统一多模态编码预训练。"
  },
  {
    "id": "q-0388",
    "type": "mcq",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "关于 ViLT 的训练目标或核心思路，下列哪项正确？",
    "options": [
      "常配合 MLM、ITM 等多任务训练",
      "主要目的是关掉损失函数",
      "核心是完全不使用注意力",
      "与跨模态对齐无关"
    ],
    "answer": 0,
    "explanation": "ViLT 的核心训练思路/目标是：常配合 MLM、ITM 等多任务训练。"
  },
  {
    "id": "q-0389",
    "type": "judge",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "判断：ViLT 的一个常见局限或挑战是：视觉前端偏轻会限制高分辨率细节建模。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。ViLT 的确存在这样的局限：视觉前端偏轻会限制高分辨率细节建模。"
  },
  {
    "id": "q-0390",
    "type": "mcq",
    "topic": "多模态模型",
    "difficulty": "easy",
    "question": "CLIP 最贴切的结构或定位描述是什么？",
    "options": [
      "双塔图文编码器 + 对比学习",
      "一种优化器",
      "一种纯语音编码器",
      "一种数据库协议"
    ],
    "answer": 0,
    "explanation": "CLIP 的核心描述是：双塔图文编码器 + 对比学习。"
  },
  {
    "id": "q-0391",
    "type": "mcq",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "CLIP 的一个典型优势是什么？",
    "options": [
      "图文检索、零样本分类能力强",
      "不需要任何训练数据",
      "完全不受上下文长度影响",
      "只能用于前端展示"
    ],
    "answer": 0,
    "explanation": "CLIP 的典型优势是：图文检索、零样本分类能力强。"
  },
  {
    "id": "q-0392",
    "type": "mcq",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "下列哪种场景最常会优先想到 CLIP？",
    "options": [
      "检索、零样本分类、表征初始化",
      "只在压缩图片格式时",
      "只在手工标注界面里",
      "只在日志采集中"
    ],
    "answer": 0,
    "explanation": "CLIP 常见于：检索、零样本分类、表征初始化。"
  },
  {
    "id": "q-0393",
    "type": "mcq",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "关于 CLIP 的训练目标或核心思路，下列哪项正确？",
    "options": [
      "让匹配图文表示更接近",
      "主要目的是关掉损失函数",
      "核心是完全不使用注意力",
      "与跨模态对齐无关"
    ],
    "answer": 0,
    "explanation": "CLIP 的核心训练思路/目标是：让匹配图文表示更接近。"
  },
  {
    "id": "q-0394",
    "type": "judge",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "判断：CLIP 的一个常见局限或挑战是：细粒度生成与复杂推理不是其强项。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。CLIP 的确存在这样的局限：细粒度生成与复杂推理不是其强项。"
  },
  {
    "id": "q-0395",
    "type": "mcq",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "BLIP 最贴切的结构或定位描述是什么？",
    "options": [
      "兼顾理解和生成的图文预训练框架",
      "一种优化器",
      "一种纯语音编码器",
      "一种数据库协议"
    ],
    "answer": 0,
    "explanation": "BLIP 的核心描述是：兼顾理解和生成的图文预训练框架。"
  },
  {
    "id": "q-0396",
    "type": "mcq",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "BLIP 的一个典型优势是什么？",
    "options": [
      "同时覆盖 captioning、检索、VQA 等任务",
      "不需要任何训练数据",
      "完全不受上下文长度影响",
      "只能用于前端展示"
    ],
    "answer": 0,
    "explanation": "BLIP 的典型优势是：同时覆盖 captioning、检索、VQA 等任务。"
  },
  {
    "id": "q-0397",
    "type": "mcq",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "下列哪种场景最常会优先想到 BLIP？",
    "options": [
      "统一图文理解与生成",
      "只在压缩图片格式时",
      "只在手工标注界面里",
      "只在日志采集中"
    ],
    "answer": 0,
    "explanation": "BLIP 常见于：统一图文理解与生成。"
  },
  {
    "id": "q-0398",
    "type": "mcq",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "关于 BLIP 的训练目标或核心思路，下列哪项正确？",
    "options": [
      "常联合 ITC/ITM/LM 等目标",
      "主要目的是关掉损失函数",
      "核心是完全不使用注意力",
      "与跨模态对齐无关"
    ],
    "answer": 0,
    "explanation": "BLIP 的核心训练思路/目标是：常联合 ITC/ITM/LM 等目标。"
  },
  {
    "id": "q-0399",
    "type": "judge",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "判断：BLIP 的一个常见局限或挑战是：结构和训练目标更复杂。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。BLIP 的确存在这样的局限：结构和训练目标更复杂。"
  },
  {
    "id": "q-0400",
    "type": "mcq",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "BLIP-2 最贴切的结构或定位描述是什么？",
    "options": [
      "冻结视觉编码器和大语言模型，用 Q-Former 连接两者",
      "一种优化器",
      "一种纯语音编码器",
      "一种数据库协议"
    ],
    "answer": 0,
    "explanation": "BLIP-2 的核心描述是：冻结视觉编码器和大语言模型，用 Q-Former 连接两者。"
  },
  {
    "id": "q-0401",
    "type": "mcq",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "BLIP-2 的一个典型优势是什么？",
    "options": [
      "高效利用现成视觉模型与 LLM",
      "不需要任何训练数据",
      "完全不受上下文长度影响",
      "只能用于前端展示"
    ],
    "answer": 0,
    "explanation": "BLIP-2 的典型优势是：高效利用现成视觉模型与 LLM。"
  },
  {
    "id": "q-0402",
    "type": "mcq",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "下列哪种场景最常会优先想到 BLIP-2？",
    "options": [
      "低成本把视觉接到强语言模型",
      "只在压缩图片格式时",
      "只在手工标注界面里",
      "只在日志采集中"
    ],
    "answer": 0,
    "explanation": "BLIP-2 常见于：低成本把视觉接到强语言模型。"
  },
  {
    "id": "q-0403",
    "type": "mcq",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "关于 BLIP-2 的训练目标或核心思路，下列哪项正确？",
    "options": [
      "通过轻量桥接实现视觉到语言对齐",
      "主要目的是关掉损失函数",
      "核心是完全不使用注意力",
      "与跨模态对齐无关"
    ],
    "answer": 0,
    "explanation": "BLIP-2 的核心训练思路/目标是：通过轻量桥接实现视觉到语言对齐。"
  },
  {
    "id": "q-0404",
    "type": "judge",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "判断：BLIP-2 的一个常见局限或挑战是：桥接模块能力会成为瓶颈。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。BLIP-2 的确存在这样的局限：桥接模块能力会成为瓶颈。"
  },
  {
    "id": "q-0405",
    "type": "mcq",
    "topic": "多模态模型",
    "difficulty": "easy",
    "question": "LLaVA 最贴切的结构或定位描述是什么？",
    "options": [
      "视觉编码器 + projector + LLM 的指令微调式 VLM",
      "一种优化器",
      "一种纯语音编码器",
      "一种数据库协议"
    ],
    "answer": 0,
    "explanation": "LLaVA 的核心描述是：视觉编码器 + projector + LLM 的指令微调式 VLM。"
  },
  {
    "id": "q-0406",
    "type": "mcq",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "LLaVA 的一个典型优势是什么？",
    "options": [
      "实现思路清晰，适合做视觉指令跟随",
      "不需要任何训练数据",
      "完全不受上下文长度影响",
      "只能用于前端展示"
    ],
    "answer": 0,
    "explanation": "LLaVA 的典型优势是：实现思路清晰，适合做视觉指令跟随。"
  },
  {
    "id": "q-0407",
    "type": "mcq",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "下列哪种场景最常会优先想到 LLaVA？",
    "options": [
      "视觉问答、对话、指令跟随",
      "只在压缩图片格式时",
      "只在手工标注界面里",
      "只在日志采集中"
    ],
    "answer": 0,
    "explanation": "LLaVA 常见于：视觉问答、对话、指令跟随。"
  },
  {
    "id": "q-0408",
    "type": "mcq",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "关于 LLaVA 的训练目标或核心思路，下列哪项正确？",
    "options": [
      "把视觉特征投影成 LLM 可读 token 后做指令调优",
      "主要目的是关掉损失函数",
      "核心是完全不使用注意力",
      "与跨模态对齐无关"
    ],
    "answer": 0,
    "explanation": "LLaVA 的核心训练思路/目标是：把视觉特征投影成 LLM 可读 token 后做指令调优。"
  },
  {
    "id": "q-0409",
    "type": "judge",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "判断：LLaVA 的一个常见局限或挑战是：复杂视觉细节和 grounding 仍需进一步增强。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。LLaVA 的确存在这样的局限：复杂视觉细节和 grounding 仍需进一步增强。"
  },
  {
    "id": "q-0410",
    "type": "mcq",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "Qwen3-VL 最贴切的结构或定位描述是什么？",
    "options": [
      "面向图像、视频、空间理解和 Agent 交互的视觉语言模型",
      "一种优化器",
      "一种纯语音编码器",
      "一种数据库协议"
    ],
    "answer": 0,
    "explanation": "Qwen3-VL 的核心描述是：面向图像、视频、空间理解和 Agent 交互的视觉语言模型。"
  },
  {
    "id": "q-0411",
    "type": "mcq",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "Qwen3-VL 的一个典型优势是什么？",
    "options": [
      "在官方定位中强调更强的视觉理解、时空建模和 agent 能力",
      "不需要任何训练数据",
      "完全不受上下文长度影响",
      "只能用于前端展示"
    ],
    "answer": 0,
    "explanation": "Qwen3-VL 的典型优势是：在官方定位中强调更强的视觉理解、时空建模和 agent 能力。"
  },
  {
    "id": "q-0412",
    "type": "mcq",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "下列哪种场景最常会优先想到 Qwen3-VL？",
    "options": [
      "图像问答、视频理解、空间推理、Agent",
      "只在压缩图片格式时",
      "只在手工标注界面里",
      "只在日志采集中"
    ],
    "answer": 0,
    "explanation": "Qwen3-VL 常见于：图像问答、视频理解、空间推理、Agent。"
  },
  {
    "id": "q-0413",
    "type": "mcq",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "关于 Qwen3-VL 的训练目标或核心思路，下列哪项正确？",
    "options": [
      "作为通用视觉语言模型服务多任务理解与交互",
      "主要目的是关掉损失函数",
      "核心是完全不使用注意力",
      "与跨模态对齐无关"
    ],
    "answer": 0,
    "explanation": "Qwen3-VL 的核心训练思路/目标是：作为通用视觉语言模型服务多任务理解与交互。"
  },
  {
    "id": "q-0414",
    "type": "judge",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "判断：Qwen3-VL 的一个常见局限或挑战是：多图/视频/长上下文场景仍会受到 token 与算力约束。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Qwen3-VL 的确存在这样的局限：多图/视频/长上下文场景仍会受到 token 与算力约束。"
  },
  {
    "id": "q-0415",
    "type": "mcq",
    "topic": "多模态模型",
    "difficulty": "hard",
    "question": "BLIP-2 中 Q-Former 的主要价值是什么？",
    "options": [
      "用较轻的桥接模块把冻结视觉编码器的信息高效传给冻结 LLM",
      "让所有参数都从头训练",
      "取代 tokenizer 做分词",
      "把图片压缩成 JPEG"
    ],
    "answer": 0,
    "explanation": "Q-Former 的核心价值是桥接冻结视觉编码器与冻结 LLM。"
  },
  {
    "id": "q-0416",
    "type": "mcq",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "CLIP 更偏强的能力通常是？",
    "options": [
      "图文检索与零样本分类",
      "长文本生成",
      "强化学习策略优化",
      "数据库查询"
    ],
    "answer": 0,
    "explanation": "CLIP 的长项通常是表征与检索。"
  },
  {
    "id": "q-0417",
    "type": "mcq",
    "topic": "多模态模型",
    "difficulty": "hard",
    "question": "LLaVA 这类模型中 projector 的主要作用是什么？",
    "options": [
      "把视觉特征映射到语言模型嵌入空间",
      "计算 AdamW 更新",
      "做文本分词",
      "直接输出检测框"
    ],
    "answer": 0,
    "explanation": "Projector 是视觉与语言嵌入空间的桥接层。"
  },
  {
    "id": "q-0418",
    "type": "mcq",
    "topic": "多模态融合",
    "difficulty": "medium",
    "question": "Early Fusion 相比 Late Fusion 的一个典型特点是？",
    "options": [
      "模态间交互更早更充分，但计算也可能更重",
      "一定更省显存",
      "永远更适合双塔检索",
      "不需要对齐训练"
    ],
    "answer": 0,
    "explanation": "Early Fusion 的特点是更早交互。"
  },
  {
    "id": "q-0419",
    "type": "mcq",
    "topic": "多模态训练",
    "difficulty": "hard",
    "question": "图文对比学习为什么适合做检索？",
    "options": [
      "它直接优化跨模态表示空间中的相似度关系",
      "因为它会自动生成长文本",
      "因为它不需要负样本",
      "因为它只看单模态"
    ],
    "answer": 0,
    "explanation": "检索依赖相似度空间，而对比学习正是直接建模这种空间。"
  },
  {
    "id": "q-0420",
    "type": "judge",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "判断：CLIP 的核心训练思想是让匹配图文在表示空间更接近，而不是直接做自回归文本生成。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确，CLIP 的核心是对比学习。"
  },
  {
    "id": "q-0421",
    "type": "judge",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "判断：BLIP-2 的一个重要思路是尽量复用冻结的视觉模型和大语言模型。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确，这正是 BLIP-2 的效率来源之一。"
  },
  {
    "id": "q-0422",
    "type": "judge",
    "topic": "多模态模型",
    "difficulty": "hard",
    "question": "判断：LLaVA 一类模型通常通过视觉编码器 + 投影层 + 语言模型完成图像到文本的桥接。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确，这是其常见实现范式。"
  },
  {
    "id": "q-0423",
    "type": "judge",
    "topic": "多模态任务",
    "difficulty": "medium",
    "question": "判断：OCR/文档理解场景中，高分辨率细节、布局关系和文字识别质量往往决定效果上限。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确，这也是文档类多模态任务的关键。"
  },
  {
    "id": "q-0424",
    "type": "judge",
    "topic": "多模态任务",
    "difficulty": "hard",
    "question": "判断：视频理解比单图理解更难，原因之一是还需要处理时序一致性与跨帧信息压缩。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确，视频比图像多了显式时间维。"
  },
  {
    "id": "q-0425",
    "type": "short",
    "topic": "多模态模型",
    "difficulty": "medium",
    "question": "请比较 CLIP、BLIP、BLIP-2 和 LLaVA 的目标、结构差异以及适用场景。",
    "reference": "比较这几类模型时，建议从“表征 vs 生成”“双塔 vs 统一编码 / 桥接到 LLM”“训练目标”和“典型应用”四个维度展开。CLIP 偏检索和零样本表征，BLIP 更统一理解与生成，BLIP-2 强调高效桥接冻结模块，LLaVA 偏视觉指令跟随。",
    "keypoints": [
      "分别说明每个模型的结构和目标",
      "比较更强的能力侧重点",
      "结合应用场景说明选型"
    ]
  },
  {
    "id": "q-0426",
    "type": "short",
    "topic": "多模态融合",
    "difficulty": "hard",
    "question": "多模态任务中的跨模态对齐、注意力交互和 projector 分别解决什么问题？",
    "reference": "这题考的是你是否理解系统拆解。跨模态对齐解决表示空间可比较，注意力交互解决细粒度信息交换，projector 解决不同编码器表征维度与分布不一致的问题。",
    "keypoints": [
      "分别定义三个组件或机制",
      "说明它们在训练和推理中分别起什么作用",
      "补充一个真实系统中的数据流"
    ]
  },
  {
    "id": "q-0427",
    "type": "short",
    "topic": "多模态任务",
    "difficulty": "hard",
    "question": "如果做文档理解或图文伪造检测，为什么不能只依赖全局图文语义相似度？",
    "reference": "因为这类任务常依赖局部区域、文字内容、版面结构和细粒度证据。仅靠全局相似度容易漏掉局部篡改、实体替换、错位拼接等问题。",
    "keypoints": [
      "说明全局相似度的局限",
      "解释局部证据、OCR 和布局的重要性",
      "结合伪造检测或定位任务举例"
    ]
  },
  {
    "id": "q-0428",
    "type": "mcq",
    "topic": "高效微调",
    "difficulty": "easy",
    "question": "LoRA 的核心思想是什么？",
    "options": [
      "在权重更新中引入低秩分解，只训练少量增量参数",
      "把模型完全换成 CNN",
      "只改数据标注平台",
      "删除所有注意力层"
    ],
    "answer": 0,
    "explanation": "LoRA 的核心思想是：在权重更新中引入低秩分解，只训练少量增量参数。"
  },
  {
    "id": "q-0429",
    "type": "mcq",
    "topic": "高效微调",
    "difficulty": "medium",
    "question": "LoRA 的一个典型优势是什么？",
    "options": [
      "显著降低可训练参数量和显存占用",
      "一定优于全量微调",
      "完全没有工程复杂度",
      "不需要任何超参数"
    ],
    "answer": 0,
    "explanation": "LoRA 的典型优势是：显著降低可训练参数量和显存占用。"
  },
  {
    "id": "q-0430",
    "type": "mcq",
    "topic": "高效微调",
    "difficulty": "medium",
    "question": "下列哪种场景更适合优先考虑 LoRA？",
    "options": [
      "LLM/VLM 高效微调",
      "只在网页主题切换中",
      "只在数据去重中",
      "只在日志压缩中"
    ],
    "answer": 0,
    "explanation": "LoRA 常见场景是：LLM/VLM 高效微调。"
  },
  {
    "id": "q-0431",
    "type": "judge",
    "topic": "高效微调",
    "difficulty": "medium",
    "question": "判断：LoRA 并不是把原模型参数全部从头训练。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。LoRA 的一个局限是：秩设置过低可能限制适应能力。"
  },
  {
    "id": "q-0432",
    "type": "judge",
    "topic": "高效微调",
    "difficulty": "medium",
    "question": "判断：LoRA 一定同时最省显存、效果最好、实现最简单，没有任何 trade-off。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "该说法错误。LoRA 的确有优势，但仍需在效果、实现复杂度和资源之间权衡。"
  },
  {
    "id": "q-0433",
    "type": "mcq",
    "topic": "高效微调",
    "difficulty": "easy",
    "question": "QLoRA 的核心思想是什么？",
    "options": [
      "在量化基座模型上叠加 LoRA 进行训练",
      "把模型完全换成 CNN",
      "只改数据标注平台",
      "删除所有注意力层"
    ],
    "answer": 0,
    "explanation": "QLoRA 的核心思想是：在量化基座模型上叠加 LoRA 进行训练。"
  },
  {
    "id": "q-0434",
    "type": "mcq",
    "topic": "高效微调",
    "difficulty": "medium",
    "question": "QLoRA 的一个典型优势是什么？",
    "options": [
      "进一步降低显存占用，便于单机微调更大模型",
      "一定优于全量微调",
      "完全没有工程复杂度",
      "不需要任何超参数"
    ],
    "answer": 0,
    "explanation": "QLoRA 的典型优势是：进一步降低显存占用，便于单机微调更大模型。"
  },
  {
    "id": "q-0435",
    "type": "mcq",
    "topic": "高效微调",
    "difficulty": "medium",
    "question": "下列哪种场景更适合优先考虑 QLoRA？",
    "options": [
      "消费级 GPU 微调较大 LLM/VLM",
      "只在网页主题切换中",
      "只在数据去重中",
      "只在日志压缩中"
    ],
    "answer": 0,
    "explanation": "QLoRA 常见场景是：消费级 GPU 微调较大 LLM/VLM。"
  },
  {
    "id": "q-0436",
    "type": "judge",
    "topic": "高效微调",
    "difficulty": "medium",
    "question": "判断：QLoRA 结合了量化与 LoRA。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。QLoRA 的一个局限是：量化误差和实现细节会影响效果。"
  },
  {
    "id": "q-0437",
    "type": "judge",
    "topic": "高效微调",
    "difficulty": "medium",
    "question": "判断：QLoRA 一定同时最省显存、效果最好、实现最简单，没有任何 trade-off。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "该说法错误。QLoRA 的确有优势，但仍需在效果、实现复杂度和资源之间权衡。"
  },
  {
    "id": "q-0438",
    "type": "mcq",
    "topic": "高效微调",
    "difficulty": "medium",
    "question": "Adapter-Tuning 的核心思想是什么？",
    "options": [
      "在层间插入小型适配器模块并只训练这些模块",
      "把模型完全换成 CNN",
      "只改数据标注平台",
      "删除所有注意力层"
    ],
    "answer": 0,
    "explanation": "Adapter-Tuning 的核心思想是：在层间插入小型适配器模块并只训练这些模块。"
  },
  {
    "id": "q-0439",
    "type": "mcq",
    "topic": "高效微调",
    "difficulty": "medium",
    "question": "Adapter-Tuning 的一个典型优势是什么？",
    "options": [
      "模块化强，任务切换方便",
      "一定优于全量微调",
      "完全没有工程复杂度",
      "不需要任何超参数"
    ],
    "answer": 0,
    "explanation": "Adapter-Tuning 的典型优势是：模块化强，任务切换方便。"
  },
  {
    "id": "q-0440",
    "type": "mcq",
    "topic": "高效微调",
    "difficulty": "medium",
    "question": "下列哪种场景更适合优先考虑 Adapter-Tuning？",
    "options": [
      "多任务或多领域可插拔微调",
      "只在网页主题切换中",
      "只在数据去重中",
      "只在日志压缩中"
    ],
    "answer": 0,
    "explanation": "Adapter-Tuning 常见场景是：多任务或多领域可插拔微调。"
  },
  {
    "id": "q-0441",
    "type": "judge",
    "topic": "高效微调",
    "difficulty": "medium",
    "question": "判断：Adapter 通常需要在模型中插入额外模块。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Adapter-Tuning 的一个局限是：会引入额外前向路径和少量推理开销。"
  },
  {
    "id": "q-0442",
    "type": "judge",
    "topic": "高效微调",
    "difficulty": "medium",
    "question": "判断：Adapter-Tuning 一定同时最省显存、效果最好、实现最简单，没有任何 trade-off。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "该说法错误。Adapter-Tuning 的确有优势，但仍需在效果、实现复杂度和资源之间权衡。"
  },
  {
    "id": "q-0443",
    "type": "mcq",
    "topic": "高效微调",
    "difficulty": "medium",
    "question": "Prompt-Tuning 的核心思想是什么？",
    "options": [
      "仅学习一小段连续 soft prompt 向量",
      "把模型完全换成 CNN",
      "只改数据标注平台",
      "删除所有注意力层"
    ],
    "answer": 0,
    "explanation": "Prompt-Tuning 的核心思想是：仅学习一小段连续 soft prompt 向量。"
  },
  {
    "id": "q-0444",
    "type": "mcq",
    "topic": "高效微调",
    "difficulty": "medium",
    "question": "Prompt-Tuning 的一个典型优势是什么？",
    "options": [
      "参数极少",
      "一定优于全量微调",
      "完全没有工程复杂度",
      "不需要任何超参数"
    ],
    "answer": 0,
    "explanation": "Prompt-Tuning 的典型优势是：参数极少。"
  },
  {
    "id": "q-0445",
    "type": "mcq",
    "topic": "高效微调",
    "difficulty": "medium",
    "question": "下列哪种场景更适合优先考虑 Prompt-Tuning？",
    "options": [
      "大模型轻量适配、分类或提示式任务",
      "只在网页主题切换中",
      "只在数据去重中",
      "只在日志压缩中"
    ],
    "answer": 0,
    "explanation": "Prompt-Tuning 常见场景是：大模型轻量适配、分类或提示式任务。"
  },
  {
    "id": "q-0446",
    "type": "judge",
    "topic": "高效微调",
    "difficulty": "medium",
    "question": "判断：Prompt-Tuning 学的是连续向量而非离散文本模板本身。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Prompt-Tuning 的一个局限是：对模型规模和任务类型较敏感。"
  },
  {
    "id": "q-0447",
    "type": "judge",
    "topic": "高效微调",
    "difficulty": "medium",
    "question": "判断：Prompt-Tuning 一定同时最省显存、效果最好、实现最简单，没有任何 trade-off。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "该说法错误。Prompt-Tuning 的确有优势，但仍需在效果、实现复杂度和资源之间权衡。"
  },
  {
    "id": "q-0448",
    "type": "mcq",
    "topic": "高效微调",
    "difficulty": "medium",
    "question": "P-Tuning v2 的核心思想是什么？",
    "options": [
      "把可学习提示扩展到多层深度位置，增强表达能力",
      "把模型完全换成 CNN",
      "只改数据标注平台",
      "删除所有注意力层"
    ],
    "answer": 0,
    "explanation": "P-Tuning v2 的核心思想是：把可学习提示扩展到多层深度位置，增强表达能力。"
  },
  {
    "id": "q-0449",
    "type": "mcq",
    "topic": "高效微调",
    "difficulty": "medium",
    "question": "P-Tuning v2 的一个典型优势是什么？",
    "options": [
      "通常比浅层 prompt 更强",
      "一定优于全量微调",
      "完全没有工程复杂度",
      "不需要任何超参数"
    ],
    "answer": 0,
    "explanation": "P-Tuning v2 的典型优势是：通常比浅层 prompt 更强。"
  },
  {
    "id": "q-0450",
    "type": "mcq",
    "topic": "高效微调",
    "difficulty": "medium",
    "question": "下列哪种场景更适合优先考虑 P-Tuning v2？",
    "options": [
      "希望兼顾轻量与效果的高效调优",
      "只在网页主题切换中",
      "只在数据去重中",
      "只在日志压缩中"
    ],
    "answer": 0,
    "explanation": "P-Tuning v2 常见场景是：希望兼顾轻量与效果的高效调优。"
  },
  {
    "id": "q-0451",
    "type": "judge",
    "topic": "高效微调",
    "difficulty": "medium",
    "question": "判断：P-Tuning v2 常被理解为 deep prompt tuning。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。P-Tuning v2 的一个局限是：实现上比简单 Prompt-Tuning 更复杂。"
  },
  {
    "id": "q-0452",
    "type": "judge",
    "topic": "高效微调",
    "difficulty": "medium",
    "question": "判断：P-Tuning v2 一定同时最省显存、效果最好、实现最简单，没有任何 trade-off。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "该说法错误。P-Tuning v2 的确有优势，但仍需在效果、实现复杂度和资源之间权衡。"
  },
  {
    "id": "q-0453",
    "type": "mcq",
    "topic": "高效微调",
    "difficulty": "medium",
    "question": "Prefix-Tuning 的核心思想是什么？",
    "options": [
      "为注意力层学习可前缀化的 key/value 提示",
      "把模型完全换成 CNN",
      "只改数据标注平台",
      "删除所有注意力层"
    ],
    "answer": 0,
    "explanation": "Prefix-Tuning 的核心思想是：为注意力层学习可前缀化的 key/value 提示。"
  },
  {
    "id": "q-0454",
    "type": "mcq",
    "topic": "高效微调",
    "difficulty": "medium",
    "question": "Prefix-Tuning 的一个典型优势是什么？",
    "options": [
      "能更直接影响注意力过程",
      "一定优于全量微调",
      "完全没有工程复杂度",
      "不需要任何超参数"
    ],
    "answer": 0,
    "explanation": "Prefix-Tuning 的典型优势是：能更直接影响注意力过程。"
  },
  {
    "id": "q-0455",
    "type": "mcq",
    "topic": "高效微调",
    "difficulty": "medium",
    "question": "下列哪种场景更适合优先考虑 Prefix-Tuning？",
    "options": [
      "生成任务或序列条件控制",
      "只在网页主题切换中",
      "只在数据去重中",
      "只在日志压缩中"
    ],
    "answer": 0,
    "explanation": "Prefix-Tuning 常见场景是：生成任务或序列条件控制。"
  },
  {
    "id": "q-0456",
    "type": "judge",
    "topic": "高效微调",
    "difficulty": "medium",
    "question": "判断：Prefix-Tuning 常直接作用于注意力层。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Prefix-Tuning 的一个局限是：对实现细节和架构耦合更强。"
  },
  {
    "id": "q-0457",
    "type": "judge",
    "topic": "高效微调",
    "difficulty": "medium",
    "question": "判断：Prefix-Tuning 一定同时最省显存、效果最好、实现最简单，没有任何 trade-off。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "该说法错误。Prefix-Tuning 的确有优势，但仍需在效果、实现复杂度和资源之间权衡。"
  },
  {
    "id": "q-0458",
    "type": "mcq",
    "topic": "高效微调",
    "difficulty": "hard",
    "question": "LoRA 为什么常被解释为“参数高效”？",
    "options": [
      "因为只训练低秩增量参数，而不是更新整套基座权重",
      "因为完全不需要反向传播",
      "因为它自动减少数据量",
      "因为它不需要损失函数"
    ],
    "answer": 0,
    "explanation": "LoRA 的参数高效来自低秩增量参数训练。"
  },
  {
    "id": "q-0459",
    "type": "mcq",
    "topic": "高效微调",
    "difficulty": "hard",
    "question": "QLoRA 的关键价值更接近哪一项？",
    "options": [
      "让更大的模型在有限显存上也能做高效微调",
      "彻底消除量化误差",
      "让模型不再需要 tokenizer",
      "把监督微调变成强化学习"
    ],
    "answer": 0,
    "explanation": "QLoRA 的关键价值是资源受限下微调更大模型。"
  },
  {
    "id": "q-0460",
    "type": "mcq",
    "topic": "高效微调",
    "difficulty": "medium",
    "question": "Prompt-Tuning 与离散文本 prompt 的本质差异是？",
    "options": [
      "前者学习连续可训练向量，后者是人工写的离散提示词",
      "前者只能做图像任务",
      "后者不能输入文本",
      "两者完全一样"
    ],
    "answer": 0,
    "explanation": "Prompt-Tuning 的核心是学习连续参数而不是只写自然语言模板。"
  },
  {
    "id": "q-0461",
    "type": "short",
    "topic": "高效微调",
    "difficulty": "medium",
    "question": "请比较 LoRA、QLoRA、Adapter-Tuning、Prompt-Tuning 和 P-Tuning v2 的共同点与差异。",
    "reference": "共同点是都想减少需要更新的参数或显存成本；差异则体现在参数插入位置、是否依赖量化、对效果和实现复杂度的 trade-off。回答时建议对比：训练参数量、推理影响、适配难度、适合任务。",
    "keypoints": [
      "先概括为什么需要高效微调",
      "逐个说明方法作用位置",
      "最后给出资源受限时的选型建议"
    ]
  },
  {
    "id": "q-0462",
    "type": "mcq",
    "topic": "对齐训练",
    "difficulty": "easy",
    "question": "SFT 的核心思想是什么？",
    "options": [
      "用高质量指令-回答数据做监督微调",
      "关闭梯度计算",
      "只做数据去重",
      "只做前端部署"
    ],
    "answer": 0,
    "explanation": "SFT 的核心思想是：用高质量指令-回答数据做监督微调。"
  },
  {
    "id": "q-0463",
    "type": "mcq",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "SFT 的一个典型优势是什么？",
    "options": [
      "让模型先学会基本指令遵循与输出格式",
      "完全不需要数据质量控制",
      "一定零成本训练",
      "不会受奖励设计影响"
    ],
    "answer": 0,
    "explanation": "SFT 的典型优势是：让模型先学会基本指令遵循与输出格式。"
  },
  {
    "id": "q-0464",
    "type": "mcq",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "下列哪种场景更常见地会用到 SFT？",
    "options": [
      "对齐训练的第一阶段或基础阶段",
      "只在图片压缩时",
      "只在浏览器主题切换中",
      "只在日志聚合中"
    ],
    "answer": 0,
    "explanation": "SFT 常见于：对齐训练的第一阶段或基础阶段。"
  },
  {
    "id": "q-0465",
    "type": "judge",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "判断：SFT 通常需要示范数据。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。SFT 的一个局限是：只靠 SFT 往往不足以精细建模人类偏好。"
  },
  {
    "id": "q-0466",
    "type": "judge",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "判断：SFT 一旦使用，就可以完全替代所有预训练和监督微调阶段。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "该说法错误。SFT 通常只是整个训练/对齐流程中的一个环节。"
  },
  {
    "id": "q-0467",
    "type": "mcq",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "Reward Model 的核心思想是什么？",
    "options": [
      "学习对候选回答打分，近似人类偏好",
      "关闭梯度计算",
      "只做数据去重",
      "只做前端部署"
    ],
    "answer": 0,
    "explanation": "Reward Model 的核心思想是：学习对候选回答打分，近似人类偏好。"
  },
  {
    "id": "q-0468",
    "type": "mcq",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "Reward Model 的一个典型优势是什么？",
    "options": [
      "为 RLHF 提供偏好信号",
      "完全不需要数据质量控制",
      "一定零成本训练",
      "不会受奖励设计影响"
    ],
    "answer": 0,
    "explanation": "Reward Model 的典型优势是：为 RLHF 提供偏好信号。"
  },
  {
    "id": "q-0469",
    "type": "mcq",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "下列哪种场景更常见地会用到 Reward Model？",
    "options": [
      "RLHF 管线中的偏好打分模块",
      "只在图片压缩时",
      "只在浏览器主题切换中",
      "只在日志聚合中"
    ],
    "answer": 0,
    "explanation": "Reward Model 常见于：RLHF 管线中的偏好打分模块。"
  },
  {
    "id": "q-0470",
    "type": "judge",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "判断：Reward Model 不是直接生成最终回答的主模型。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。Reward Model 的一个局限是：奖励模型本身可能被投机利用。"
  },
  {
    "id": "q-0471",
    "type": "judge",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "判断：Reward Model 一旦使用，就可以完全替代所有预训练和监督微调阶段。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "该说法错误。Reward Model 通常只是整个训练/对齐流程中的一个环节。"
  },
  {
    "id": "q-0472",
    "type": "mcq",
    "topic": "对齐训练",
    "difficulty": "easy",
    "question": "RLHF 的核心思想是什么？",
    "options": [
      "结合人类偏好信号和强化学习优化模型输出",
      "关闭梯度计算",
      "只做数据去重",
      "只做前端部署"
    ],
    "answer": 0,
    "explanation": "RLHF 的核心思想是：结合人类偏好信号和强化学习优化模型输出。"
  },
  {
    "id": "q-0473",
    "type": "mcq",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "RLHF 的一个典型优势是什么？",
    "options": [
      "更好地对齐帮助性、无害性与偏好",
      "完全不需要数据质量控制",
      "一定零成本训练",
      "不会受奖励设计影响"
    ],
    "answer": 0,
    "explanation": "RLHF 的典型优势是：更好地对齐帮助性、无害性与偏好。"
  },
  {
    "id": "q-0474",
    "type": "mcq",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "下列哪种场景更常见地会用到 RLHF？",
    "options": [
      "对齐训练的强化学习阶段",
      "只在图片压缩时",
      "只在浏览器主题切换中",
      "只在日志聚合中"
    ],
    "answer": 0,
    "explanation": "RLHF 常见于：对齐训练的强化学习阶段。"
  },
  {
    "id": "q-0475",
    "type": "judge",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "判断：RLHF 往往依赖奖励模型或偏好信号。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。RLHF 的一个局限是：训练复杂、稳定性和奖励黑客问题更突出。"
  },
  {
    "id": "q-0476",
    "type": "judge",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "判断：RLHF 一旦使用，就可以完全替代所有预训练和监督微调阶段。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "该说法错误。RLHF 通常只是整个训练/对齐流程中的一个环节。"
  },
  {
    "id": "q-0477",
    "type": "mcq",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "PPO 的核心思想是什么？",
    "options": [
      "通过限制策略更新幅度来稳定强化学习训练",
      "关闭梯度计算",
      "只做数据去重",
      "只做前端部署"
    ],
    "answer": 0,
    "explanation": "PPO 的核心思想是：通过限制策略更新幅度来稳定强化学习训练。"
  },
  {
    "id": "q-0478",
    "type": "mcq",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "PPO 的一个典型优势是什么？",
    "options": [
      "在 RLHF 中曾广泛使用",
      "完全不需要数据质量控制",
      "一定零成本训练",
      "不会受奖励设计影响"
    ],
    "answer": 0,
    "explanation": "PPO 的典型优势是：在 RLHF 中曾广泛使用。"
  },
  {
    "id": "q-0479",
    "type": "mcq",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "下列哪种场景更常见地会用到 PPO？",
    "options": [
      "传统 RLHF 优化器",
      "只在图片压缩时",
      "只在浏览器主题切换中",
      "只在日志聚合中"
    ],
    "answer": 0,
    "explanation": "PPO 常见于：传统 RLHF 优化器。"
  },
  {
    "id": "q-0480",
    "type": "judge",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "判断：PPO 会限制新旧策略差异过大。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。PPO 的一个局限是：实现复杂，训练成本高。"
  },
  {
    "id": "q-0481",
    "type": "judge",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "判断：PPO 一旦使用，就可以完全替代所有预训练和监督微调阶段。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "该说法错误。PPO 通常只是整个训练/对齐流程中的一个环节。"
  },
  {
    "id": "q-0482",
    "type": "mcq",
    "topic": "对齐训练",
    "difficulty": "easy",
    "question": "DPO 的核心思想是什么？",
    "options": [
      "直接用偏好对优化策略，无需显式在线强化学习过程",
      "关闭梯度计算",
      "只做数据去重",
      "只做前端部署"
    ],
    "answer": 0,
    "explanation": "DPO 的核心思想是：直接用偏好对优化策略，无需显式在线强化学习过程。"
  },
  {
    "id": "q-0483",
    "type": "mcq",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "DPO 的一个典型优势是什么？",
    "options": [
      "训练更简单稳定，不必单独训练值函数",
      "完全不需要数据质量控制",
      "一定零成本训练",
      "不会受奖励设计影响"
    ],
    "answer": 0,
    "explanation": "DPO 的典型优势是：训练更简单稳定，不必单独训练值函数。"
  },
  {
    "id": "q-0484",
    "type": "mcq",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "下列哪种场景更常见地会用到 DPO？",
    "options": [
      "偏好对齐的离线优化",
      "只在图片压缩时",
      "只在浏览器主题切换中",
      "只在日志聚合中"
    ],
    "answer": 0,
    "explanation": "DPO 常见于：偏好对齐的离线优化。"
  },
  {
    "id": "q-0485",
    "type": "judge",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "判断：DPO 可看作直接优化偏好对概率比。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。DPO 的一个局限是：仍依赖高质量偏好数据。"
  },
  {
    "id": "q-0486",
    "type": "judge",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "判断：DPO 一旦使用，就可以完全替代所有预训练和监督微调阶段。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "该说法错误。DPO 通常只是整个训练/对齐流程中的一个环节。"
  },
  {
    "id": "q-0487",
    "type": "mcq",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "GRPO 的核心思想是什么？",
    "options": [
      "基于一组候选响应的相对回报进行策略优化",
      "关闭梯度计算",
      "只做数据去重",
      "只做前端部署"
    ],
    "answer": 0,
    "explanation": "GRPO 的核心思想是：基于一组候选响应的相对回报进行策略优化。"
  },
  {
    "id": "q-0488",
    "type": "mcq",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "GRPO 的一个典型优势是什么？",
    "options": [
      "避免单独训练复杂的值函数，在推理/数学类场景常被讨论",
      "完全不需要数据质量控制",
      "一定零成本训练",
      "不会受奖励设计影响"
    ],
    "answer": 0,
    "explanation": "GRPO 的典型优势是：避免单独训练复杂的值函数，在推理/数学类场景常被讨论。"
  },
  {
    "id": "q-0489",
    "type": "mcq",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "下列哪种场景更常见地会用到 GRPO？",
    "options": [
      "近年的推理模型对齐与强化学习变体",
      "只在图片压缩时",
      "只在浏览器主题切换中",
      "只在日志聚合中"
    ],
    "answer": 0,
    "explanation": "GRPO 常见于：近年的推理模型对齐与强化学习变体。"
  },
  {
    "id": "q-0490",
    "type": "judge",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "判断：GRPO 关注组内相对比较而非单样本绝对分值。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。GRPO 的一个局限是：依赖组内样本质量与奖励设计。"
  },
  {
    "id": "q-0491",
    "type": "judge",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "判断：GRPO 一旦使用，就可以完全替代所有预训练和监督微调阶段。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "该说法错误。GRPO 通常只是整个训练/对齐流程中的一个环节。"
  },
  {
    "id": "q-0492",
    "type": "mcq",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "KTO 的核心思想是什么？",
    "options": [
      "利用“好/坏”反馈而非严格成对偏好进行对齐优化",
      "关闭梯度计算",
      "只做数据去重",
      "只做前端部署"
    ],
    "answer": 0,
    "explanation": "KTO 的核心思想是：利用“好/坏”反馈而非严格成对偏好进行对齐优化。"
  },
  {
    "id": "q-0493",
    "type": "mcq",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "KTO 的一个典型优势是什么？",
    "options": [
      "数据采集形式更灵活",
      "完全不需要数据质量控制",
      "一定零成本训练",
      "不会受奖励设计影响"
    ],
    "answer": 0,
    "explanation": "KTO 的典型优势是：数据采集形式更灵活。"
  },
  {
    "id": "q-0494",
    "type": "mcq",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "下列哪种场景更常见地会用到 KTO？",
    "options": [
      "当只有 desirable/undesirable 标注时",
      "只在图片压缩时",
      "只在浏览器主题切换中",
      "只在日志聚合中"
    ],
    "answer": 0,
    "explanation": "KTO 常见于：当只有 desirable/undesirable 标注时。"
  },
  {
    "id": "q-0495",
    "type": "judge",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "判断：KTO 不一定要求显式成对偏好数据。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0,
    "explanation": "该说法正确。KTO 的一个局限是：信号粒度可能比精细偏好对更粗。"
  },
  {
    "id": "q-0496",
    "type": "judge",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "判断：KTO 一旦使用，就可以完全替代所有预训练和监督微调阶段。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 1,
    "explanation": "该说法错误。KTO 通常只是整个训练/对齐流程中的一个环节。"
  },
  {
    "id": "q-0497",
    "type": "mcq",
    "topic": "对齐训练",
    "difficulty": "hard",
    "question": "为什么很多团队会把 SFT 放在偏好优化之前？",
    "options": [
      "因为先学会基本任务格式和指令遵循，再做偏好优化更稳定",
      "因为 SFT 可以替代所有预训练",
      "因为偏好数据总是比示范数据更多",
      "因为 SFT 不需要监督数据"
    ],
    "answer": 0,
    "explanation": "通常先做 SFT 打基础，再做偏好优化。"
  },
  {
    "id": "q-0498",
    "type": "mcq",
    "topic": "对齐训练",
    "difficulty": "hard",
    "question": "DPO 相比经典 RLHF/PPO 的一个常见优势是？",
    "options": [
      "训练流程更简单，不必显式进行完整在线强化学习环节",
      "一定效果更好且没有任何限制",
      "不需要偏好数据",
      "完全不依赖参考模型"
    ],
    "answer": 0,
    "explanation": "DPO 的常见优势是训练更简单。"
  },
  {
    "id": "q-0499",
    "type": "mcq",
    "topic": "对齐训练",
    "difficulty": "hard",
    "question": "GRPO 这类方法强调“group relative”的核心原因更接近哪一项？",
    "options": [
      "利用同组多个候选响应之间的相对优劣进行优化",
      "只看单个样本的像素值",
      "直接替代 tokenizer",
      "把监督学习变成无监督聚类"
    ],
    "answer": 0,
    "explanation": "GRPO 强调组内相对比较。"
  },
  {
    "id": "q-0500",
    "type": "mcq",
    "topic": "对齐训练",
    "difficulty": "medium",
    "question": "KTO 更适合哪类反馈形态？",
    "options": [
      "只有 desirable / undesirable 或好坏反馈，而不是严格成对偏好",
      "只有像素级分割标签",
      "只有词表信息",
      "只有学习率曲线"
    ],
    "answer": 0,
    "explanation": "KTO 更适合较粗粒度的好坏反馈。"
  },
  {
    "id": "q-0501",
    "type": "short",
    "topic": "对齐训练",
    "difficulty": "hard",
    "question": "请梳理一条典型的大模型对齐训练流程，并说明 SFT、奖励建模、RLHF、DPO、GRPO、KTO 各自在什么位置、解决什么问题。",
    "reference": "一个成熟回答通常是：先预训练得到基础能力，再用 SFT 学会任务格式和基本指令遵循；如果走经典 RLHF，会训练奖励模型并用 PPO 等方法优化策略；如果走离线偏好优化，可用 DPO；如果偏好信号是组内相对比较，可引入 GRPO；如果只有好坏标签，可考虑 KTO。",
    "keypoints": [
      "按时间顺序讲清训练阶段",
      "分别解释每种方法解决的问题",
      "比较数据形式、实现复杂度和 trade-off"
    ]
  },
  {
    "id": "q-0502",
    "type": "short",
    "topic": "对齐训练",
    "difficulty": "hard",
    "question": "为什么偏好优化并不等于“模型更聪明”，而更偏向“模型输出更符合偏好和目标”？",
    "reference": "偏好优化通常作用于回答风格、帮助性、安全性、格式遵循和奖励定义下的表现，而基础知识和通用能力主要仍来自预训练与监督微调。回答时应区分能力提升与行为对齐。",
    "keypoints": [
      "区分基础能力与偏好对齐",
      "说明偏好优化主要改变什么",
      "补充奖励偏差和过拟合偏好的风险"
    ]
  }
];
