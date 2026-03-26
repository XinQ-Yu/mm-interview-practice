const STORAGE_KEYS = {
  stats: "mm_practice_stats_v2",
  customBank: "mm_practice_custom_bank_v2",
};

const state = {
  bank: [],
  filtered: [],
  current: null,
  currentIndex: 0,
  sessionType: "free",
  sessionPool: [],
  stats: {
    answered: {},
    correctIds: [],
    wrongIds: [],
    favoriteIds: [],
    history: []
  }
};

const els = {
  totalCount: document.getElementById("totalCount"),
  answeredCount: document.getElementById("answeredCount"),
  correctCount: document.getElementById("correctCount"),
  wrongCount: document.getElementById("wrongCount"),
  topicFilter: document.getElementById("topicFilter"),
  typeFilter: document.getElementById("typeFilter"),
  difficultyFilter: document.getElementById("difficultyFilter"),
  modeFilter: document.getElementById("modeFilter"),
  applyFilterBtn: document.getElementById("applyFilterBtn"),
  resetFilterBtn: document.getElementById("resetFilterBtn"),
  prevQuestionBtn: document.getElementById("prevQuestionBtn"),
  nextQuestionBtn: document.getElementById("nextQuestionBtn"),
  randomModeBtn: document.getElementById("randomModeBtn"),
  mockModeBtn: document.getElementById("mockModeBtn"),
  mockCountInput: document.getElementById("mockCountInput"),
  questionBadge: document.getElementById("questionBadge"),
  questionTopic: document.getElementById("questionTopic"),
  questionDifficulty: document.getElementById("questionDifficulty"),
  questionIdTag: document.getElementById("questionIdTag"),
  questionTitle: document.getElementById("questionTitle"),
  questionHint: document.getElementById("questionHint"),
  optionsContainer: document.getElementById("optionsContainer"),
  shortAnswerContainer: document.getElementById("shortAnswerContainer"),
  shortAnswerInput: document.getElementById("shortAnswerInput"),
  submitBtn: document.getElementById("submitBtn"),
  showAnswerBtn: document.getElementById("showAnswerBtn"),
  markMasteredBtn: document.getElementById("markMasteredBtn"),
  markWrongBtn: document.getElementById("markWrongBtn"),
  favoriteBtn: document.getElementById("favoriteBtn"),
  feedbackBox: document.getElementById("feedbackBox"),
  progressText: document.getElementById("progressText"),
  sessionLabel: document.getElementById("sessionLabel"),
  progressFill: document.getElementById("progressFill"),
  importQuestionsInput: document.getElementById("importQuestionsInput"),
  exportStatsBtn: document.getElementById("exportStatsBtn"),
  clearStatsBtn: document.getElementById("clearStatsBtn"),
};

function normalizeStats(stats) {
  return {
    answered: stats?.answered || {},
    correctIds: Array.isArray(stats?.correctIds) ? stats.correctIds : [],
    wrongIds: Array.isArray(stats?.wrongIds) ? stats.wrongIds : [],
    favoriteIds: Array.isArray(stats?.favoriteIds) ? stats.favoriteIds : [],
    history: Array.isArray(stats?.history) ? stats.history : []
  };
}

function readStorage() {
  try {
    const stats = JSON.parse(localStorage.getItem(STORAGE_KEYS.stats) || "null");
    if (stats) state.stats = normalizeStats(stats);
  } catch {}

  let customBank = [];
  try {
    customBank = JSON.parse(localStorage.getItem(STORAGE_KEYS.customBank) || "[]");
    if (!Array.isArray(customBank)) customBank = [];
  } catch {}

  state.bank = [...DEFAULT_QUESTION_BANK, ...customBank];
}

function writeStorage() {
  localStorage.setItem(STORAGE_KEYS.stats, JSON.stringify(state.stats));
}

function buildTopicOptions() {
  const topics = [...new Set(state.bank.map(q => q.topic))].sort((a, b) => a.localeCompare(b, "zh-CN"));
  els.topicFilter.innerHTML = `<option value="all">全部</option>` + topics
    .map(topic => `<option value="${topic}">${topic}</option>`)
    .join("");
}

function labelDifficulty(d) {
  return d === "easy" ? "基础" : d === "medium" ? "中等" : "进阶";
}

function labelType(type) {
  if (type === "mcq") return "选择题";
  if (type === "judge") return "判断题";
  if (type === "short") return "简答题";
  return "题目";
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function getActivePool() {
  return state.sessionPool.length ? state.sessionPool : (state.filtered.length ? state.filtered : state.bank);
}

function setCurrentByIndex(index) {
  const pool = getActivePool();
  if (!pool.length) {
    state.current = null;
    clearQuestionPanel("暂无可练习题目。");
    return;
  }
  state.currentIndex = ((index % pool.length) + pool.length) % pool.length;
  state.current = pool[state.currentIndex];
  renderQuestion();
}

function applyFilters() {
  const type = els.typeFilter.value;
  const topic = els.topicFilter.value;
  const difficulty = els.difficultyFilter.value;
  const mode = els.modeFilter.value;

  let filtered = state.bank.filter(q => {
    const passType = type === "all" || q.type === type;
    const passTopic = topic === "all" || q.topic === topic;
    const passDifficulty = difficulty === "all" || q.difficulty === difficulty;
    return passType && passTopic && passDifficulty;
  });

  if (mode === "wrong") {
    filtered = filtered.filter(q => state.stats.wrongIds.includes(q.id));
  } else if (mode === "unanswered") {
    filtered = filtered.filter(q => !state.stats.answered[q.id]);
  } else if (mode === "favorites") {
    filtered = filtered.filter(q => state.stats.favoriteIds.includes(q.id));
  }

  state.filtered = filtered;
  state.sessionPool = filtered;
  state.currentIndex = 0;
  state.sessionType = mode === "wrong" ? "wrong" : "free";
  const modeLabelMap = {
    all: "自由刷题",
    wrong: "错题重练",
    unanswered: "未作答题",
    favorites: "收藏题"
  };
  els.sessionLabel.textContent = `当前模式：${modeLabelMap[mode] || "自由刷题"}`;

  if (filtered.length > 0) {
    state.current = filtered[0];
    renderQuestion();
  } else {
    state.current = null;
    clearQuestionPanel("当前筛选条件下没有题目，试试重置筛选。");
  }
  renderStats();
}

function startRandomMode() {
  state.sessionType = "random";
  state.sessionPool = shuffle(state.filtered.length ? state.filtered : state.bank);
  state.currentIndex = 0;
  els.sessionLabel.textContent = "当前模式：随机刷题";
  state.current = state.sessionPool[0] || null;
  if (state.current) renderQuestion();
  else clearQuestionPanel("暂无可练习题目。");
}

function startMockMode() {
  const count = Math.max(5, Math.min(50, Number(els.mockCountInput.value) || 15));
  state.sessionType = "mock";
  state.sessionPool = shuffle(state.filtered.length ? state.filtered : state.bank).slice(0, count);
  state.currentIndex = 0;
  els.sessionLabel.textContent = `当前模式：模拟面试（${state.sessionPool.length} 题）`;
  state.current = state.sessionPool[0] || null;
  if (state.current) renderQuestion();
  else clearQuestionPanel("暂无可练习题目。");
}

function changeQuestion(step) {
  const pool = getActivePool();
  if (!pool.length) {
    clearQuestionPanel("暂无可练习题目。");
    return;
  }
  setCurrentByIndex(state.currentIndex + step);
}

function prevQuestion() {
  changeQuestion(-1);
}

function nextQuestion() {
  changeQuestion(1);
}

function clearQuestionPanel(text) {
  els.questionBadge.textContent = "未开始";
  els.questionTopic.textContent = "方向";
  els.questionDifficulty.textContent = "难度";
  els.questionIdTag.textContent = "题号";
  els.questionTitle.textContent = text;
  els.questionHint.textContent = "点击“随机刷题”或“模拟面试”开始。";
  els.optionsContainer.innerHTML = "";
  els.shortAnswerContainer.classList.add("hidden");
  hideFeedback();
  updateProgress();
}

function renderQuestion() {
  const q = state.current;
  if (!q) {
    clearQuestionPanel("暂无题目。");
    return;
  }

  els.questionBadge.textContent = labelType(q.type);
  els.questionTopic.textContent = q.topic;
  els.questionDifficulty.textContent = labelDifficulty(q.difficulty);
  els.questionIdTag.textContent = q.id;
  els.questionTitle.textContent = q.question;
  els.questionHint.textContent = q.type === "short"
    ? "建议先写结构化答案，再对照参考答案与要点自评。"
    : "作答后会显示正确答案和解析。可用“上一题 / 下一题”连续练习。";
  els.favoriteBtn.textContent = state.stats.favoriteIds.includes(q.id) ? "已收藏" : "收藏";
  els.optionsContainer.innerHTML = "";
  els.shortAnswerInput.value = "";
  hideFeedback();

  if (q.type === "mcq" || q.type === "judge") {
    els.shortAnswerContainer.classList.add("hidden");
    q.options.forEach((opt, idx) => {
      const card = document.createElement("label");
      card.className = "option-card";
      card.innerHTML = `
        <input type="radio" name="option" value="${idx}" />
        <div><strong>${q.type === "judge" ? "" : String.fromCharCode(65 + idx) + "."}</strong> ${opt}</div>
      `;
      card.addEventListener("click", () => {
        document.querySelectorAll(".option-card").forEach(el => el.classList.remove("selected"));
        card.classList.add("selected");
      });
      els.optionsContainer.appendChild(card);
    });
  } else {
    els.shortAnswerContainer.classList.remove("hidden");
  }

  updateProgress();
}

function showFeedback(html, tone = "neutral") {
  els.feedbackBox.className = `feedback ${tone}`;
  els.feedbackBox.innerHTML = html;
  els.feedbackBox.classList.remove("hidden");
}

function hideFeedback() {
  els.feedbackBox.className = "feedback hidden";
  els.feedbackBox.innerHTML = "";
}

function markAnswered(questionId, isCorrect, extra = {}) {
  state.stats.answered[questionId] = {
    at: new Date().toISOString(),
    isCorrect,
    ...extra,
  };

  if (isCorrect) {
    if (!state.stats.correctIds.includes(questionId)) state.stats.correctIds.push(questionId);
    state.stats.wrongIds = state.stats.wrongIds.filter(id => id !== questionId);
  } else {
    if (!state.stats.wrongIds.includes(questionId)) state.stats.wrongIds.push(questionId);
    state.stats.correctIds = state.stats.correctIds.filter(id => id !== questionId || extra.selfMarked);
  }

  state.stats.history.push({ questionId, isCorrect, at: new Date().toISOString() });
  writeStorage();
  renderStats();
}

function submitAnswer() {
  const q = state.current;
  if (!q) return;

  if (q.type === "mcq" || q.type === "judge") {
    const selected = document.querySelector('input[name="option"]:checked');
    if (!selected) {
      showFeedback("请先选择一个选项。", "neutral");
      return;
    }
    const selectedIdx = Number(selected.value);
    const isCorrect = selectedIdx === q.answer;

    document.querySelectorAll(".option-card").forEach((card, idx) => {
      card.classList.remove("correct", "wrong");
      if (idx === q.answer) card.classList.add("correct");
      if (idx === selectedIdx && !isCorrect) card.classList.add("wrong");
    });

    markAnswered(q.id, isCorrect, { selected: selectedIdx });
    const answerText = q.type === "judge" ? q.options[q.answer] : String.fromCharCode(65 + q.answer);
    showFeedback(
      `<strong>${isCorrect ? "回答正确" : "回答有误"}</strong><br/>正确答案：${answerText}<br/>解析：${q.explanation}`,
      isCorrect ? "good" : "bad"
    );
  } else {
    const answer = els.shortAnswerInput.value.trim();
    if (!answer) {
      showFeedback("你还没有输入回答。可以先写一个简短版本再提交。", "neutral");
      return;
    }
    markAnswered(q.id, false, { answer });
    showFeedback(
      `<strong>参考答案</strong><br/>${q.reference}<br/><br/><strong>答题要点</strong><br/>${q.keypoints.map((k, i) => `${i + 1}. ${k}`).join("<br/>")}<br/><br/>建议：对照要点自评，然后点击“已掌握”或“加入错题”。`,
      "neutral"
    );
  }
}

function showAnswer() {
  const q = state.current;
  if (!q) return;

  if (q.type === "mcq" || q.type === "judge") {
    document.querySelectorAll(".option-card").forEach((card, idx) => {
      card.classList.remove("correct", "wrong");
      if (idx === q.answer) card.classList.add("correct");
    });
    const answerText = q.type === "judge" ? q.options[q.answer] : String.fromCharCode(65 + q.answer);
    showFeedback(`<strong>答案：</strong>${answerText}<br/>解析：${q.explanation}`, "neutral");
  } else {
    showFeedback(
      `<strong>参考答案</strong><br/>${q.reference}<br/><br/><strong>答题要点</strong><br/>${q.keypoints.map((k, i) => `${i + 1}. ${k}`).join("<br/>")}`,
      "neutral"
    );
  }
}

function markMastered() {
  if (!state.current) return;
  markAnswered(state.current.id, true, { selfMarked: true });
  showFeedback("已标记为掌握。建议继续下一题。", "good");
}

function markWrong() {
  if (!state.current) return;
  markAnswered(state.current.id, false, { forcedWrong: true });
  showFeedback("已加入错题本。", "bad");
}

function toggleFavorite() {
  if (!state.current) return;
  const id = state.current.id;
  if (state.stats.favoriteIds.includes(id)) {
    state.stats.favoriteIds = state.stats.favoriteIds.filter(x => x !== id);
  } else {
    state.stats.favoriteIds.push(id);
  }
  writeStorage();
  renderQuestion();
}

function updateProgress() {
  const pool = getActivePool();
  const total = pool.length || state.bank.length || 1;
  const index = state.current ? Math.min(state.currentIndex + 1, total) : 0;
  const percent = total ? Math.round((index / total) * 100) : 0;
  els.progressText.textContent = state.current ? `当前第 ${index} / ${total} 题` : "准备开始";
  els.progressFill.style.width = `${percent}%`;
}

function renderStats() {
  els.totalCount.textContent = state.bank.length;
  els.answeredCount.textContent = Object.keys(state.stats.answered).length;
  els.correctCount.textContent = state.stats.correctIds.length;
  els.wrongCount.textContent = state.stats.wrongIds.length;
}

function resetFilters() {
  els.typeFilter.value = "all";
  els.topicFilter.value = "all";
  els.difficultyFilter.value = "all";
  els.modeFilter.value = "all";
  applyFilters();
}

function validateQuestion(item) {
  if (!item || typeof item !== "object") return false;
  if (!item.id || !item.type || !item.topic || !item.difficulty || !item.question) return false;
  if (item.type === "mcq" || item.type === "judge") {
    return Array.isArray(item.options) && typeof item.answer === "number" && typeof item.explanation === "string";
  }
  if (item.type === "short") {
    return typeof item.reference === "string" && Array.isArray(item.keypoints);
  }
  return false;
}

function handleImportQuestions(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(reader.result);
      if (!Array.isArray(imported)) throw new Error("题库 JSON 必须是数组。");
      const valid = imported.filter(validateQuestion);
      if (!valid.length) throw new Error("没有找到符合格式的题目。");
      const currentCustom = JSON.parse(localStorage.getItem(STORAGE_KEYS.customBank) || "[]");
      const merged = [...currentCustom, ...valid];
      localStorage.setItem(STORAGE_KEYS.customBank, JSON.stringify(merged));
      readStorage();
      buildTopicOptions();
      applyFilters();
      alert(`导入成功，新增 ${valid.length} 道题。`);
    } catch (err) {
      alert(`导入失败：${err.message}`);
    } finally {
      event.target.value = "";
    }
  };
  reader.readAsText(file, "utf-8");
}

function exportStats() {
  const blob = new Blob([JSON.stringify({ stats: state.stats }, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "multimodal_practice_stats.json";
  a.click();
  URL.revokeObjectURL(url);
}

function clearStats() {
  const ok = confirm("确定清空练习记录和错题本吗？自定义题库不会删除。");
  if (!ok) return;
  localStorage.removeItem(STORAGE_KEYS.stats);
  state.stats = normalizeStats({});
  renderStats();
  applyFilters();
}

function bindKeyboard() {
  document.addEventListener("keydown", (event) => {
    const tag = document.activeElement?.tagName?.toLowerCase();
    if (tag === "textarea" || tag === "input") return;
    if (event.key === "ArrowLeft") prevQuestion();
    if (event.key === "ArrowRight") nextQuestion();
  });
}

function init() {
  readStorage();
  buildTopicOptions();
  renderStats();
  applyFilters();

  els.applyFilterBtn.addEventListener("click", applyFilters);
  els.resetFilterBtn.addEventListener("click", resetFilters);
  els.prevQuestionBtn.addEventListener("click", prevQuestion);
  els.nextQuestionBtn.addEventListener("click", nextQuestion);
  els.randomModeBtn.addEventListener("click", startRandomMode);
  els.mockModeBtn.addEventListener("click", startMockMode);
  els.submitBtn.addEventListener("click", submitAnswer);
  els.showAnswerBtn.addEventListener("click", showAnswer);
  els.markMasteredBtn.addEventListener("click", markMastered);
  els.markWrongBtn.addEventListener("click", markWrong);
  els.favoriteBtn.addEventListener("click", toggleFavorite);
  els.importQuestionsInput.addEventListener("change", handleImportQuestions);
  els.exportStatsBtn.addEventListener("click", exportStats);
  els.clearStatsBtn.addEventListener("click", clearStats);
  bindKeyboard();
}

init();
