const icons = {
  home: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m3 10.8 9-7 9 7V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10.8Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  search: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="m20 20-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  play: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 5v14l11-7L8 5Z" fill="currentColor"/></svg>',
  pen: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 20h4L19 9l-4-4L4 16v4Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="m13 7 4 4" stroke="currentColor" stroke-width="2"/></svg>',
  user: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2"/><path d="M4 21a8 8 0 0 1 16 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  shield: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3 5 6v5c0 4.6 2.9 8.7 7 10 4.1-1.3 7-5.4 7-10V6l-7-3Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="m9 12 2 2 4-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  back: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M15 18 9 12l6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  bell: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M10 21h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  star: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 17l-5.8 3 1.1-6.5-4.8-4.6 6.6-.9L12 2Z"/></svg>',
  upload: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 16V4m0 0 4 4m-4-4L8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  check: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 12 4 4L19 6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  send: '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4 20-7Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
};

const images = {
  rain: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=900&q=80",
  detective: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  palace: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
  studio: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
};

const dramas = [
  {
    id: "rain",
    title: "雨夜告白",
    desc: "你以第一人称进入一场错过三年的重逢，在信任、隐瞒和旧案之间打出不同结局。",
    cover: images.rain,
    tags: ["恋爱", "反转", "8章", "4结局"],
    stats: ["96%好评", "12万体验", "隐藏路线"],
  },
  {
    id: "witness",
    title: "双面证人",
    desc: "扮演记者、嫌疑人或侦探，通过证词与线索判断谁在撒谎。",
    cover: images.detective,
    tags: ["悬疑", "推理", "线索道具"],
    stats: ["高复玩", "6结局", "AI NPC"],
  },
  {
    id: "palace",
    title: "旧梦重写",
    desc: "古风权谋互动剧，选择阵营、试探盟友，在关键节点改变人物命运。",
    cover: images.palace,
    tags: ["古风", "权谋", "阵营"],
    stats: ["新剧榜", "5角色", "长线分支"],
  },
];

const roles = [
  {
    id: "lin",
    name: "林晚",
    identity: "急诊医生 / 女主",
    avatar: "晚",
    route: "信任修复、真相揭开、隐藏和解线",
    desc: "外冷内热，三年前因一场医疗事故离开旧城。你的目标是在旧爱与真相之间做出选择。",
    difficulty: "普通",
  },
  {
    id: "gu",
    name: "顾承",
    identity: "集团继承人 / 男主",
    avatar: "承",
    route: "追问、保护、误会解除线",
    desc: "掌控欲强但不善表达。你掌握部分真相，也背负不愿说出的责任。",
    difficulty: "困难",
  },
  {
    id: "shen",
    name: "沈医生",
    identity: "关键证人 / 旁线角色",
    avatar: "沈",
    route: "证据选择、背叛或守护线",
    desc: "看似局外人，实际知道三年前事故的关键证据。适合推理型用户。",
    difficulty: "高阶",
  },
];

const checklistByFlow = {
  user: ["首页可发现剧情", "剧情详情可判断价值", "角色选择生成互动记录", "选择影响剧情状态", "结局页可复盘分享"],
  creator: ["上传剧本", "AI 解析结构", "确认角色与节点", "编辑分支路径", "提交审核并追踪状态"],
  review: ["机器预审", "人工复核", "风险片段定位", "审核意见同步", "发布或驳回"],
};

const logic = {
  home: ["首页发现剧情", "从推荐、榜单、继续体验进入互动短剧详情。", "user", 1],
  detail: ["剧情详情", "展示剧情简介、标签、评分、角色和体验结构，帮助用户决定是否进入。", "user", 2],
  role: ["选择扮演角色", "用户选择角色后，系统创建 session_id，并初始化关系值、线索、道具等状态。", "user", 3],
  play: ["第一人称互动", "选择式和自由输入混合。预设选项命中强分支，自由输入进入意图识别后回到主线或弱分支。", "user", 4],
  ending: ["结局复盘", "展示结局等级、路径、状态变化，提供复玩和分享入口。", "user", 5],
  create: ["创作中心", "创作者管理作品、草稿、审核状态和数据表现。", "creator", 1],
  upload: ["上传剧本", "支持粘贴文本、上传文件、使用模板。提交前校验版权声明、字数、分级和标签。", "creator", 2],
  parse: ["AI 剧本解析", "系统识别角色、场景、章节、对白归属和可互动冲突节点。", "creator", 3],
  editor: ["分支编辑器", "创作者配置节点、选项、状态变化和下一节点，保证每条路径可收束。", "creator", 4],
  review: ["审核状态", "发布前进入机器预审和人工复核；通过后上架，驳回则展示可修改原因。", "review", 5],
};

const state = {
  screen: "home",
  selectedDrama: dramas[0],
  selectedRole: null,
  node: 1,
  affection: 62,
  trust: 38,
  clues: 2,
  route: "主线",
  ending: "未达成",
  uploadMode: "paste",
  parseDone: false,
  editorNode: "雨夜医院门口",
  logs: ["打开原型：首页推荐已加载"],
};

const app = document.querySelector("#app");
const logicTitle = document.querySelector("#logicTitle");
const logicDesc = document.querySelector("#logicDesc");
const stateBoard = document.querySelector("#stateBoard");
const checklist = document.querySelector("#checklist");
const eventLog = document.querySelector("#eventLog");
const toast = document.querySelector("#toast");

function icon(name) {
  return icons[name] || "";
}

function addLog(text) {
  state.logs.unshift(text);
  state.logs = state.logs.slice(0, 8);
}

function showToast(text) {
  toast.textContent = text;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function go(screen, extra = {}) {
  Object.assign(state, extra, { screen });
  const titles = {
    home: "进入首页推荐",
    detail: `查看《${state.selectedDrama.title}》详情`,
    role: "进入角色选择",
    play: "进入第一人称互动",
    ending: "到达结局页",
    create: "进入创作中心",
    upload: "进入剧本上传",
    parse: "进入 AI 解析结果",
    editor: "进入分支编辑器",
    review: "查看审核状态",
  };
  addLog(titles[screen] || `切换到 ${screen}`);
  render();
}

function topbar(title, subtitle = "", backTo = null, right = "bell") {
  return `
    <header class="topbar">
      ${backTo ? `<button class="icon-btn" aria-label="返回" data-action="go" data-screen="${backTo}">${icon("back")}</button>` : `<button class="icon-btn" aria-label="搜索">${icon("search")}</button>`}
      <div class="topbar-title"><strong>${title}</strong>${subtitle ? `<span>${subtitle}</span>` : ""}</div>
      <button class="icon-btn" aria-label="${right === "bell" ? "消息" : "更多"}">${icon(right === "bell" ? "bell" : "shield")}</button>
    </header>
  `;
}

function bottomNav(active = "home") {
  const items = [
    ["home", "首页", "home"],
    ["discover", "发现", "search"],
    ["playing", "互动中", "play"],
    ["create", "创作", "pen"],
    ["mine", "我的", "user"],
  ];
  return `
    <nav class="bottom-nav" aria-label="底部导航">
      ${items
        .map(([key, label, iconName]) => {
          const screen = key === "create" ? "create" : key === "playing" ? "play" : "home";
          return `<button class="nav-item ${active === key ? "active" : ""}" data-action="go" data-screen="${screen}">${icon(iconName)}<span>${label}</span></button>`;
        })
        .join("")}
    </nav>
  `;
}

function dramaCard(drama) {
  return `
    <button class="drama-card" data-action="select-drama" data-id="${drama.id}">
      <span class="poster"><img src="${drama.cover}" alt="${drama.title} 封面"></span>
      <span class="card-copy">
        <h3>${drama.title}</h3>
        <p>${drama.desc}</p>
        <span class="mini-stats">${drama.stats.map((s) => `<span class="mini-stat">${s}</span>`).join("")}</span>
      </span>
    </button>
  `;
}

function renderHome() {
  app.innerHTML = `
    <section class="screen">
      ${topbar("互动剧场", "进入角色，改写剧情")}
      <div class="screen-content">
        <div class="search">${icon("search")} 搜索剧名、角色、题材</div>
        <section class="continue-card">
          <strong>继续体验</strong>
          <p>你正在扮演「林晚」 · 第 3 章 · 关键选择前</p>
          <button class="secondary-btn" data-action="go" data-screen="play">${icon("play")}继续进入</button>
        </section>
        <button class="hero-card" data-action="select-drama" data-id="rain">
          <img src="${images.rain}" alt="雨夜告白场景">
          <span class="hero-copy">
            <span class="pill-row"><span class="pill">${icon("star")}本周高复玩</span><span class="pill">4 个结局</span></span>
            <h2>雨夜告白</h2>
            <p>从一句“你真的要走吗”开始，选择相信、追问或离开。</p>
          </span>
        </button>
        <div class="section-head"><h2>今日推荐</h2><button class="link-btn">换一批</button></div>
        <div class="drama-list">${dramas.map(dramaCard).join("")}</div>
        <div class="section-head"><h2>热门角色</h2><button class="link-btn">查看全部</button></div>
        <div class="pill-row">
          ${["女主", "反派", "侦探", "霸总", "医生", "证人"].map((x) => `<span class="tag">${x}</span>`).join("")}
        </div>
      </div>
      ${bottomNav("home")}
    </section>
  `;
}

function renderDetail() {
  const d = state.selectedDrama;
  app.innerHTML = `
    <section class="screen">
      <div class="screen-content with-cta" style="padding:0 0 132px">
        <div class="detail-hero">
          <img src="${d.cover}" alt="${d.title} 主视觉">
          <div class="topbar" style="position:absolute;left:0;right:0;background:rgba(0,0,0,.18);color:#fff;border:0">
            <button class="icon-btn" aria-label="返回" data-action="go" data-screen="home">${icon("back")}</button>
            <div class="topbar-title"><strong>剧情详情</strong><span>可扮演 · 可分支</span></div>
            <button class="icon-btn" aria-label="收藏">${icon("star")}</button>
          </div>
          <div class="detail-copy">
            <h1>${d.title}</h1>
            <p>${d.desc}</p>
            <div class="pill-row">${d.tags.map((t) => `<span class="pill">${t}</span>`).join("")}</div>
          </div>
        </div>
        <div style="padding:18px">
          <div class="detail-meta">
            <div class="metric-card"><strong>8</strong><span>章节</span></div>
            <div class="metric-card"><strong>4</strong><span>结局</span></div>
            <div class="metric-card"><strong>12min</strong><span>单次体验</span></div>
          </div>
          <div class="section-head"><h2>可扮演角色</h2><button class="link-btn" data-action="go" data-screen="role">选择</button></div>
          <div class="role-list">
            ${roles
              .map(
                (r) => `<div class="role-card">
                  <div class="role-head"><span class="avatar">${r.avatar}</span><span><h3>${r.name}</h3><p>${r.identity}</p></span></div>
                  <p>${r.desc}</p>
                </div>`,
              )
              .join("")}
          </div>
          <div class="section-head"><h2>体验亮点</h2></div>
          <div class="timeline">
            <div class="timeline-item"><span class="timeline-dot">1</span><span>自由输入会先过安全过滤，再映射到预设意图。</span></div>
            <div class="timeline-item"><span class="timeline-dot">2</span><span>关键节点锁定作者分支，弱分支由 AI 补足过渡。</span></div>
            <div class="timeline-item"><span class="timeline-dot">3</span><span>结局由好感、信任、线索和隐藏条件共同判定。</span></div>
          </div>
        </div>
      </div>
      <div class="bottom-cta">
        <button class="secondary-btn" data-action="go" data-screen="home">稍后再看</button>
        <button class="primary-btn" data-action="go" data-screen="role">${icon("play")}选择角色</button>
      </div>
    </section>
  `;
}

function renderRole() {
  app.innerHTML = `
    <section class="screen">
      ${topbar("选择角色", "你将以第一人称进入故事", "detail")}
      <div class="screen-content with-cta">
        <div class="role-list">
          ${roles
            .map(
              (r) => `<button class="role-card ${state.selectedRole?.id === r.id ? "selected" : ""}" data-action="select-role" data-id="${r.id}">
                <span class="role-head"><span class="avatar">${r.avatar}</span><span><h3>${r.name}</h3><p>${r.identity} · ${r.difficulty}</p></span></span>
                <p>${r.desc}</p>
                <span class="tags"><span class="tag">${r.route}</span></span>
              </button>`,
            )
            .join("")}
        </div>
        <div class="section-head"><h2>角色关系</h2><button class="link-btn">关系图</button></div>
        <div class="relationship">
          <div class="relationship-row"><span>顾承</span><span class="bar"><span style="width:${state.affection}%"></span></span><span>${state.affection}</span></div>
          <div class="relationship-row"><span>沈医生</span><span class="bar"><span style="width:46%"></span></span><span>46</span></div>
          <div class="relationship-row"><span>旧案真相</span><span class="bar"><span style="width:${state.clues * 20}%"></span></span><span>${state.clues}/5</span></div>
        </div>
      </div>
      <div class="bottom-cta single">
        <button class="primary-btn" ${state.selectedRole ? "" : "disabled"} data-action="start-play">${icon("play")}进入剧情</button>
      </div>
    </section>
  `;
}

function renderPlay() {
  const roleName = state.selectedRole?.name || "林晚";
  app.innerHTML = `
    <section class="screen play-screen">
      <div class="play-bg"><img src="${images.rain}" alt="雨夜医院门口"></div>
      ${topbar("雨夜告白", `第 ${state.node}/8 章 · 扮演 ${roleName}`, state.node > 1 ? "ending" : "role", "shield")}
      <div class="play-content">
        <div class="scene-card">
          <h2>场景：雨夜，医院门口</h2>
          <p>顾承站在伞外，雨水顺着他的袖口往下滴。你的手机里，那段三年前的录音正在反复震动。</p>
        </div>
        <div class="status-row">
          <div class="status-chip"><span>好感</span><strong>${state.affection}</strong></div>
          <div class="status-chip"><span>信任</span><strong>${state.trust}</strong></div>
          <div class="status-chip"><span>线索</span><strong>${state.clues}/5</strong></div>
        </div>
        <div class="dialogue">
          <div class="bubble npc">顾承：你真的要现在离开吗？至少告诉我，你手里的录音从哪里来的。</div>
          ${state.node > 1 ? `<div class="bubble user">我不会再只听你解释，我要看证据。</div><div class="bubble npc">他沉默了几秒，把车钥匙放进你掌心：那就一起去找沈医生。</div>` : ""}
        </div>
        <div class="choice-stack">
          <button class="choice-btn" data-action="choice" data-choice="trust"><span class="choice-index">A</span><span>我相信你，但你要把全部真相告诉我。</span></button>
          <button class="choice-btn" data-action="choice" data-choice="clue"><span class="choice-index">B</span><span>拿出录音，追问三年前事故的证据。</span></button>
          <button class="choice-btn" data-action="choice" data-choice="leave"><span class="choice-index">C</span><span>转身离开，不再解释。</span></button>
        </div>
        <div class="free-input">
          <input id="freeText" placeholder="自己说一句，AI 会按角色和剧情约束回应" aria-label="自由输入台词">
          <button class="primary-btn" data-action="free-input" aria-label="发送">${icon("send")}</button>
        </div>
      </div>
    </section>
  `;
}

function renderEnding() {
  app.innerHTML = `
    <section class="screen">
      ${topbar("结局复盘", "路径、状态与奖励", "play")}
      <div class="screen-content with-cta">
        <div class="ending-card">
          <div class="ending-visual">
            <img src="${images.studio}" alt="结局剧照">
            <span class="ending-rank">S</span>
          </div>
          <div class="ending-copy">
            <p class="eyebrow">Hidden Ending</p>
            <h2>雨停之后</h2>
            <p>你没有被情绪推着走，而是用录音打开旧案。顾承选择公开证据，你们共同面对三年前的真相。</p>
          </div>
        </div>
        <div class="section-head"><h2>关键路径</h2></div>
        <div class="timeline">
          <div class="timeline-item"><span class="timeline-dot">1</span><span>选择扮演「${state.selectedRole?.name || "林晚"}」，初始化互动记录。</span></div>
          <div class="timeline-item"><span class="timeline-dot">2</span><span>在医院门口选择追问证据，线索 +1，信任 +12。</span></div>
          <div class="timeline-item"><span class="timeline-dot">3</span><span>满足隐藏线条件：线索不少于 3，信任不少于 50。</span></div>
        </div>
        <div class="section-head"><h2>解锁奖励</h2></div>
        <div class="result-grid">
          <div class="result-box"><strong>1</strong><span>隐藏结局卡</span></div>
          <div class="result-box"><strong>3</strong><span>高光台词</span></div>
          <div class="result-box"><strong>+18</strong><span>角色亲密度</span></div>
          <div class="result-box"><strong>42%</strong><span>用户达成率</span></div>
        </div>
      </div>
      <div class="bottom-cta">
        <button class="secondary-btn" data-action="replay">从关键节点复玩</button>
        <button class="primary-btn" data-action="share">${icon("send")}生成分享卡</button>
      </div>
    </section>
  `;
}

function renderCreate() {
  app.innerHTML = `
    <section class="screen">
      ${topbar("创作中心", "剧本、草稿、数据和审核")}
      <div class="screen-content">
        <button class="hero-card" data-action="go" data-screen="upload">
          <img src="${images.studio}" alt="创作工作台">
          <span class="hero-copy">
            <span class="pill">AI 辅助结构化</span>
            <h2>上传剧本，生成互动短剧</h2>
            <p>自动识别角色、场景、章节和冲突节点，再由你确认分支。</p>
          </span>
        </button>
        <div class="section-head"><h2>数据概览</h2><button class="link-btn">更多</button></div>
        <div class="result-grid">
          <div class="result-box"><strong>42,100</strong><span>总浏览</span></div>
          <div class="result-box"><strong>8,230</strong><span>总体验</span></div>
          <div class="result-box"><strong>41%</strong><span>完成率</span></div>
          <div class="result-box"><strong>¥1,280</strong><span>预估收益</span></div>
        </div>
        <div class="section-head"><h2>我的作品</h2><button class="link-btn" data-action="go" data-screen="upload">新建</button></div>
        <div class="work-list">
          <div class="work-card admin-row"><span><strong>雨夜告白</strong><p>已发布 · 浏览 12,304 · 完成率 41%</p></span><span class="badge teal">在线</span></div>
          <div class="work-card admin-row"><span><strong>双面证人</strong><p>审核中 · 机器预审通过 · 等待人工复核</p></span><span class="badge amber">审核中</span></div>
          <div class="work-card admin-row"><span><strong>旧梦重写</strong><p>草稿 · 最后编辑 05-15 18:22</p></span><span class="badge">草稿</span></div>
        </div>
      </div>
      ${bottomNav("create")}
    </section>
  `;
}

function renderUpload() {
  app.innerHTML = `
    <section class="screen">
      ${topbar("上传剧本", "第 1 步：基础信息", "create")}
      <div class="screen-content with-cta">
        <div class="upload-stepper">${[1, 2, 3, 4].map((i) => `<span class="step ${i === 1 ? "active" : ""}"></span>`).join("")}</div>
        <div class="field"><label for="title">剧本标题</label><input id="title" value="雨夜告白" aria-describedby="titleHelp"><small id="titleHelp">2-30 字，避免夸张营销词。</small></div>
        <div class="field"><label for="summary">剧情简介</label><textarea id="summary">三年前一场医疗事故让林晚离开旧城。雨夜重逢后，她必须在旧爱、证据和真相之间做选择。</textarea><small>50-200 字，用于详情页和推荐卡片。</small></div>
        <div class="section-head"><h2>上传方式</h2></div>
        <div class="upload-options">
          ${[
            ["paste", "粘贴文本", "适合快速试作和短篇剧本"],
            ["file", "上传文件", "支持 txt、docx、pdf，单文件 20MB 内"],
            ["template", "使用模板", "按互动剧格式从零创建"],
          ]
            .map(
              ([id, title, desc]) => `<button class="option-card" data-action="upload-mode" data-id="${id}">
                <span class="avatar">${id === state.uploadMode ? icon("check") : icon("upload")}</span>
                <span><strong>${title}</strong><p>${desc}</p></span>
              </button>`,
            )
            .join("")}
        </div>
        <div class="field" style="margin-top:16px"><label for="body">剧本正文</label><textarea id="body">【场景】雨夜，医院门口。
顾承：你真的要现在离开吗？
林晚：我只是想知道三年前你到底隐瞒了什么。
旁白：手机震动，录音文件的名字写着“事故当晚”。</textarea><small>提交后会先做格式、版权声明和安全预检查。</small></div>
      </div>
      <div class="bottom-cta">
        <button class="secondary-btn" data-action="go" data-screen="create">保存草稿</button>
        <button class="primary-btn" data-action="go" data-screen="parse">开始 AI 解析</button>
      </div>
    </section>
  `;
}

function renderParse() {
  app.innerHTML = `
    <section class="screen">
      ${topbar("AI 解析结果", "第 2 步：确认结构", "upload")}
      <div class="screen-content with-cta">
        <div class="upload-stepper">${[1, 2, 3, 4].map((i) => `<span class="step ${i <= 2 ? (i === 2 ? "active" : "done") : ""}"></span>`).join("")}</div>
        <div class="review-status">
          <h2>解析完成</h2>
          <p>已识别 3 个主要角色、7 个场景、8 个章节和 12 个可互动冲突节点。建议先确认角色归属，再进入分支编辑器。</p>
        </div>
        <div class="parse-progress">
          ${[
            ["角色识别", 96],
            ["场景拆分", 88],
            ["对白归属", 91],
            ["冲突节点", 74],
          ]
            .map((r) => `<div class="parse-row"><span>${r[0]}</span><span class="bar"><span style="width:${r[1]}%"></span></span><span>${r[1]}%</span></div>`)
            .join("")}
        </div>
        <div class="result-grid">
          <div class="result-box"><strong>3</strong><span>可扮演角色</span></div>
          <div class="result-box"><strong>8</strong><span>章节</span></div>
          <div class="result-box"><strong>12</strong><span>选择节点</span></div>
          <div class="result-box"><strong>4</strong><span>建议结局</span></div>
        </div>
        <div class="section-head"><h2>需要确认的问题</h2></div>
        <div class="timeline">
          <div class="timeline-item"><span class="timeline-dot">!</span><span>“沈医生”出现频次较低，但和真相节点强相关，建议设为可扮演旁线角色。</span></div>
          <div class="timeline-item"><span class="timeline-dot">!</span><span>第 3 章存在长旁白，可拆为两个选择节点提高参与感。</span></div>
        </div>
      </div>
      <div class="bottom-cta">
        <button class="secondary-btn" data-action="go" data-screen="upload">返回修改</button>
        <button class="primary-btn" data-action="go" data-screen="editor">确认并编辑分支</button>
      </div>
    </section>
  `;
}

function renderEditor() {
  const nodes = [
    ["雨夜医院门口", "选择", "A/B/C 三个回应影响好感与信任"],
    ["录音来源", "判定", "线索数大于 2 时开启追问"],
    ["沈医生办公室", "普通", "NPC 根据人设补全过渡对话"],
    ["公开证据", "结局", "信任和线索达到条件后进入隐藏结局"],
  ];
  app.innerHTML = `
    <section class="screen">
      ${topbar("分支编辑器", "第 3 步：配置路径", "parse")}
      <div class="screen-content with-cta">
        <div class="upload-stepper">${[1, 2, 3, 4].map((i) => `<span class="step ${i <= 3 ? (i === 3 ? "active" : "done") : ""}"></span>`).join("")}</div>
        <div class="node-layout">
          ${nodes
            .map(
              ([name, type, desc], idx) => `<button class="node-card ${state.editorNode === name ? "selected" : ""}" data-action="select-node" data-id="${name}">
                <span class="avatar">${idx + 1}</span>
                <span><strong>${name}</strong><p>${desc}</p></span>
                <span class="node-type">${type}</span>
              </button>`,
            )
            .join("")}
        </div>
        <div class="section-head"><h2>当前节点配置</h2></div>
        <div class="field"><label>用户选项</label><input value="我相信你，但你要把全部真相告诉我"><small>状态变化：好感 +8，信任 +10，下一节点：录音来源。</small></div>
        <div class="field"><input value="拿出录音，追问三年前事故的证据"><small>状态变化：线索 +1，信任 +12，开启沈医生办公室节点。</small></div>
        <div class="field"><input value="转身离开，不再解释"><small>状态变化：好感 -10，进入普通误会分支。</small></div>
      </div>
      <div class="bottom-cta">
        <button class="secondary-btn" data-action="preview">预览体验</button>
        <button class="primary-btn" data-action="go" data-screen="review">提交审核</button>
      </div>
    </section>
  `;
}

function renderReview() {
  app.innerHTML = `
    <section class="screen">
      ${topbar("审核状态", "第 4 步：发布前复核", "editor")}
      <div class="screen-content">
        <div class="upload-stepper">${[1, 2, 3, 4].map((i) => `<span class="step ${i < 4 ? "done" : "active"}"></span>`).join("")}</div>
        <div class="review-status">
          <h2>审核中 · 预计 2 小时内完成</h2>
          <p>机器预审已通过，正在等待人工复核高风险片段、版权声明和分支闭环。</p>
        </div>
        <div class="section-head"><h2>审核队列</h2><button class="link-btn">查看规则</button></div>
        <div class="admin-table">
          <div class="admin-row"><span><strong>文本安全</strong><p>敏感内容、分级、未成年人保护</p></span><span class="badge teal">通过</span></div>
          <div class="admin-row"><span><strong>版权相似度</strong><p>原创声明已勾选，相似度低风险</p></span><span class="badge teal">通过</span></div>
          <div class="admin-row"><span><strong>分支闭环</strong><p>12 个选择节点均有下一节点或结局</p></span><span class="badge teal">通过</span></div>
          <div class="admin-row"><span><strong>人工复核</strong><p>重点检查第 3 章医疗事故相关表达</p></span><span class="badge amber">进行中</span></div>
        </div>
        <div class="section-head"><h2>审核通过后</h2></div>
        <div class="timeline">
          <div class="timeline-item"><span class="timeline-dot">1</span><span>作品进入已发布状态，可展示在前台。</span></div>
          <div class="timeline-item"><span class="timeline-dot">2</span><span>推荐系统根据题材、角色偏好、完成率和质量分分发。</span></div>
          <div class="timeline-item"><span class="timeline-dot">3</span><span>创作者可在数据看板查看曝光、体验、完成率和收益。</span></div>
        </div>
      </div>
      ${bottomNav("create")}
    </section>
  `;
}

function renderInspector() {
  const [title, desc, flow, step] = logic[state.screen] || logic.home;
  logicTitle.textContent = title;
  logicDesc.textContent = desc;
  stateBoard.innerHTML = [
    ["当前页面", title],
    ["扮演角色", state.selectedRole?.name || "未选择"],
    ["剧情节点", `第 ${state.node} 章`],
    ["分支路线", state.route],
    ["好感/信任", `${state.affection}/${state.trust}`],
    ["线索", `${state.clues}/5`],
  ]
    .map(([k, v]) => `<div class="state-item"><span>${k}</span><strong>${v}</strong></div>`)
    .join("");
  checklist.innerHTML = checklistByFlow[flow]
    .map((item, idx) => `<div class="check-item ${idx < step ? "done" : ""}"><span class="check-dot">${idx < step ? "✓" : idx + 1}</span><span>${item}</span></div>`)
    .join("");
  eventLog.innerHTML = state.logs.map((x) => `<div class="event-item">${x}</div>`).join("");
  document.querySelectorAll(".flow-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.screen === state.screen || (flow === "user" && btn.dataset.screen === "home") || (flow === "creator" && btn.dataset.screen === "create"));
  });
}

function render() {
  const screens = {
    home: renderHome,
    detail: renderDetail,
    role: renderRole,
    play: renderPlay,
    ending: renderEnding,
    create: renderCreate,
    upload: renderUpload,
    parse: renderParse,
    editor: renderEditor,
    review: renderReview,
  };
  (screens[state.screen] || renderHome)();
  renderInspector();
}

document.body.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;
  if (action === "go") {
    go(target.dataset.screen);
  }
  if (action === "select-drama") {
    state.selectedDrama = dramas.find((d) => d.id === target.dataset.id) || dramas[0];
    go("detail");
  }
  if (action === "select-role") {
    state.selectedRole = roles.find((r) => r.id === target.dataset.id);
    state.affection = state.selectedRole.id === "gu" ? 48 : 62;
    state.trust = state.selectedRole.id === "shen" ? 52 : 38;
    addLog(`选择角色：${state.selectedRole.name}，互动记录已初始化`);
    render();
  }
  if (action === "start-play") {
    if (!state.selectedRole) {
      showToast("请先选择一个角色");
      return;
    }
    state.node = 1;
    state.route = "主线";
    go("play");
  }
  if (action === "choice") {
    const choice = target.dataset.choice;
    if (choice === "trust") {
      state.affection += 8;
      state.trust += 10;
      state.route = "信任修复线";
      showToast("好感 +8，信任 +10，进入信任修复线");
    }
    if (choice === "clue") {
      state.clues = Math.min(5, state.clues + 1);
      state.trust += 12;
      state.route = "真相追问线";
      showToast("线索 +1，信任 +12，开启证据追问");
    }
    if (choice === "leave") {
      state.affection -= 10;
      state.trust -= 6;
      state.route = "误会分支";
      showToast("好感 -10，进入误会分支");
    }
    state.node += 1;
    addLog(`选择节点：${target.innerText.trim()}，状态变量已更新`);
    if (state.node >= 3 || state.clues >= 3) {
      state.ending = "雨停之后";
      go("ending");
    } else {
      render();
    }
  }
  if (action === "free-input") {
    const input = document.querySelector("#freeText");
    const text = input?.value.trim();
    if (!text) {
      showToast("可以先输入一句你想说的台词");
      return;
    }
    state.trust += 4;
    state.route = "AI 弱分支过渡";
    addLog(`自由输入：“${text}”已映射到追问意图`);
    showToast("AI 已识别为“追问真相”意图，并回到主线");
    state.node += 1;
    render();
  }
  if (action === "replay") {
    state.node = 1;
    state.route = "关键节点复玩";
    go("play");
  }
  if (action === "share") {
    showToast("已生成结局分享卡：雨停之后 · S 级隐藏结局");
    addLog("生成结局分享卡");
    renderInspector();
  }
  if (action === "upload-mode") {
    state.uploadMode = target.dataset.id;
    addLog(`上传方式切换为：${target.innerText.trim().split("\n")[0]}`);
    render();
  }
  if (action === "select-node") {
    state.editorNode = target.dataset.id;
    addLog(`选中节点：${state.editorNode}`);
    render();
  }
  if (action === "preview") {
    showToast("已进入预览模式：该节点将按真实用户视角展示");
    addLog("分支编辑器启动预览体验");
    renderInspector();
  }
});

document.querySelectorAll("[data-icon]").forEach((el) => {
  el.innerHTML = icon(el.dataset.icon);
});

render();
