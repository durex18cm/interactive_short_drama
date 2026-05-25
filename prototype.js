const icons = {
  logo: '<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="9" fill="#0b0d12"/><path d="M8 21V10h3.4l4.5 5.4 4.5-5.4H24v11h-3.2v-6.1L16 20.3l-4.8-5.4V21H8Z" fill="#ff2f82"/></svg>',
  folder: '<svg viewBox="0 0 24 24" fill="none"><path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H10l2 2h6.5A2.5 2.5 0 0 1 21 9.5v7A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-9Z" stroke="currentColor" stroke-width="2"/></svg>',
  upload: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0 4 4m-4-4L8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  cpu: '<svg viewBox="0 0 24 24" fill="none"><rect x="6" y="6" width="12" height="12" rx="3" stroke="currentColor" stroke-width="2"/><path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="none"><path d="M8 5v14l11-7L8 5Z" fill="currentColor"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="m20 20-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  doc: '<svg viewBox="0 0 24 24" fill="none"><path d="M7 3h7l4 4v14H7V3Z" stroke="currentColor" stroke-width="2"/><path d="M14 3v5h5M9 13h6M9 17h5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none"><path d="M16 19a5 5 0 0 0-10 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="11" cy="9" r="4" stroke="currentColor" stroke-width="2"/><path d="M18 11a3 3 0 0 1 3 3v1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  branch: '<svg viewBox="0 0 24 24" fill="none"><path d="M6 4v6a4 4 0 0 0 4 4h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M6 20v-6a4 4 0 0 1 4-4h8M18 6l3 4-3 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  back: '<svg viewBox="0 0 24 24" fill="none"><path d="M15 18 9 12l6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none"><path d="M8 12h8M15 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 5v14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none"><path d="m3 10.8 9-7 9 7V21h-6v-6H9v6H3V10.8Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none"><path d="M5 7h14M5 12h14M5 17h14" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2.2"/><path d="M12 2.5v3M12 18.5v3M21.5 12h-3M5.5 12h-3M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1M18.7 18.7l-2.1-2.1M7.4 7.4 5.3 5.3" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none"><path d="M18.5 15.7A7.7 7.7 0 0 1 8.3 5.5 7.8 7.8 0 1 0 18.5 15.7Z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/></svg>',
};

const img = {
  empress: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
  court: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
  gate: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200&q=80",
  throne: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
  alley: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
  palace: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
  city: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80",
};

const demoScript = {
  title: "女帝临朝",
  author: "Miko Studio",
  genre: "古风权谋",
  defaultRole: "凤昭",
  logline: "你以新帝凤昭的第一人称登上金銮殿，在摄政王、世家门阀和边关军权之间夺回真正的帝位。",
  episodes: [
    {
      title: "第 1 集 金殿夺印",
      task: "在登基大典上夺回玉玺，决定是否当众压制摄政王。",
      scene: "金殿烛火如昼，百官伏首不语。摄政王谢无咎握着玉玺站在阶下，等你开口。",
      branches: [
        {
          text: "当众索回玉玺",
          hint: "+威望 +皇权",
          children: [
            { text: "命禁军封殿", hint: "开启强权线", result: "禁军踏入金殿，百官第一次看见你的锋芒。", route: "强权线" },
            { text: "以先帝密诏逼他交印", hint: "开启密诏线", result: "密诏震住朝堂，谢无咎暂时退让。", route: "密诏线" },
          ],
        },
        {
          text: "暂时承认摄政王辅政",
          hint: "+隐忍 +暗线",
          children: [
            { text: "暗中召见沈太傅", hint: "开启谋臣线", result: "沈太傅呈上世家结党名册。", route: "谋臣线" },
            { text: "夜探凤仪宫旧库", hint: "开启暗库线", result: "你找到母后留下的兵符线索。", route: "暗库线" },
          ],
        },
      ],
    },
    {
      title: "第 2 集 凤仪暗库",
      task: "在宫变前夜找到兵符，决定先收服禁军还是稳住世家。",
      scene: "凤仪宫深处，尘封的暗库缓缓开启。墙上挂着先帝战甲，匣中只剩半枚虎符。",
      branches: [
        {
          text: "先召禁军统领入宫",
          hint: "+军权",
          children: [
            { text: "许他护国大将军之位", hint: "强绑定", result: "禁军统领跪地领命，宫门尽归女帝。", route: "军权线" },
            { text: "以虎符验其忠心", hint: "试探", result: "他交出摄政王密令，叛乱线索浮出水面。", route: "忠诚线" },
          ],
        },
        {
          text: "先稳住三大世家",
          hint: "+朝局",
          children: [
            { text: "赐婚牵制谢家", hint: "权谋反制", result: "谢家阵脚大乱，摄政王被迫提前摊牌。", route: "世家线" },
            { text: "开恩科拉拢寒门", hint: "民望提升", result: "寒门士子拥护新政，朝堂不再由世家独控。", route: "新政线" },
          ],
        },
      ],
    },
    {
      title: "第 3 集 女帝临朝",
      task: "在早朝上清算叛党，决定大雍未来由铁血还是新政重塑。",
      scene: "天光破晓，金銮殿门大开。叛党名单、虎符和密诏都在你手中，满朝文武等你定夺。",
      branches: [
        {
          text: "当朝斩断摄政王党羽",
          hint: "铁血结局",
          children: [
            { text: "赦免谢无咎，令其镇守边关", hint: "隐藏同盟", result: "昔日权臣俯首称臣，成为女帝最锋利的边关刀。", route: "霸业 HE" },
            { text: "废其王爵，永禁皇城", hint: "孤君路线", result: "你独坐龙椅，天下归一，却无人再敢与你并肩。", route: "孤帝结局" },
          ],
        },
        {
          text: "推行新政重整朝堂",
          hint: "盛世结局",
          children: [
            { text: "开女官科，破世家垄断", hint: "隐藏盛世", result: "女子入朝为官，大雍开启女帝盛世。", route: "女帝盛世" },
            { text: "缓行新政，换取边境安稳", hint: "开放结局", result: "天下暂安，但更大的变局仍在边关酝酿。", route: "开放结局" },
          ],
        },
      ],
    },
  ],
};

const dramas = [
  { title: "女帝临朝", author: "Miko Studio", cover: img.empress, tags: ["古风", "女帝", "权谋", "3集"], desc: demoScript.logline },
  { title: "旧梦重写", author: "林澈", cover: img.palace, tags: ["古风", "多结局", "权谋"], desc: "宫墙之内，每一次试探都会改变阵营、信任和最终命运。" },
  { title: "雾城证词", author: "陈序", cover: img.alley, tags: ["推理", "轻悬疑", "证词"], desc: "扮演记者进入雾城旧案，在证词缝隙里找到真正的凶手。" },
  { title: "星河暗恋", author: "周眠", cover: img.city, tags: ["校园", "甜宠", "暗恋"], desc: "从一次未发送的短信开始，选择你与他的青春走向。" },
];

const genreGroups = [
  {
    title: "现代都市类",
    desc: "高频短剧题材，适合强情绪、强反转、快节奏互动。",
    items: [
      ["豪门总裁", "霸总宠妻、虐恋追妻、替嫁新娘、闪婚首富、家产争夺"],
      ["逆袭爽文", "废柴逆袭、赘婿崛起、穷小子翻身、落魄千金归来、打脸仇人"],
      ["婆媳家庭", "婆媳矛盾、姑嫂争斗、娘家婆家、二婚重组、家庭狗血"],
      ["甜宠恋爱", "青梅竹马、校园甜宠、先婚后爱、双向奔赴、小甜剧"],
      ["虐心情感", "误会分手、破镜重圆、失忆虐恋、爱恨纠缠、深情虐渣"],
    ],
  },
  {
    title: "古风古装类",
    desc: "适合权谋、身份反转、阵营选择和长线多结局。",
    items: [
      ["古风权谋", "宫斗宅斗、皇子夺嫡、王府争斗、朝堂权谋"],
      ["古风甜虐", "王爷王妃、神医嫡女、穿越古代、重生古风"],
      ["仙侠玄幻", "仙凡之恋、渡劫虐恋、妖界情缘、上古宿命"],
    ],
  },
  {
    title: "悬疑惊悚类",
    desc: "适合线索收集、关键证据、误导信息和多层分支。",
    items: [
      ["悬疑探案", "都市破案、密室凶案、刑侦推理、离奇命案"],
      ["灵异惊悚", "民间怪谈、阴间故事、老宅凶宅、恐怖灵异"],
      ["反转悬疑", "身份伪装、幕后黑手、层层反转、烧脑短剧"],
    ],
  },
  {
    title: "年代怀旧类",
    desc: "适合家庭命运、时代选择和生活流沉浸体验。",
    items: [["年代怀旧", "八零九零年代、知青下乡、重生年代、市井生活、年代致富"]],
  },
  {
    title: "奇幻异能类",
    desc: "适合强设定、开挂反转、战神归来和爽感互动。",
    items: [["奇幻异能", "重生穿越、系统开挂、预知未来、神医异能、战神归来、龙王殿"]],
  },
  {
    title: "职场现实类",
    desc: "适合现实议题、职场成长、关系冲突和女性向剧情。",
    items: [["职场现实", "职场逆袭、上司下属、创业励志、婆媳职场、闺蜜反目"]],
  },
];

const steps = [
  ["home", "风格类型"],
  ["source", "选择入口"],
  ["theater", "互动剧场"],
  ["create", "创作中心"],
  ["type", "上传 / AI"],
  ["parse", "剧本解析"],
  ["role", "确认角色"],
  ["style", "生成设置"],
  ["generate", "生成视频"],
  ["play", "互动体验"],
  ["ending", "结局分享"],
];

const state = {
  screen: "cover",
  motion: "forward",
  mode: "ai",
  selectedStyle: "古风古装类",
  selectedType: "古风权谋",
  selectedDrama: dramas[0],
  selectedRole: demoScript.defaultRole,
  roleLocked: false,
  episode: 0,
  firstChoice: null,
  pendingBranch: null,
  routeHistory: [],
  ending: "",
  modal: null,
  selectedFilter: "全部",
  sortMode: "最新",
  theme: localStorage.getItem("miko-theme") === "night" ? "night" : "day",
  selectedVisualStyle: "女帝朝堂",
  selectedLocalEdit: "第三集：早朝清算",
  pendingPlay: false,
  generateStatus: "ready",
  draft: {
    name: "女帝临朝",
    source: "古风权谋 / AI 生成",
    status: "草稿已保存",
    updatedAt: "刚刚",
  },
  searchOpen: false,
  searchText: "",
  lastCreateEntry: "ai",
};

const app = document.querySelector("#app");
const toast = document.querySelector("#toast");

const navigableScreens = new Set([
  "cover",
  "subtype",
  "detail",
  "script",
  "upload",
  ...steps.map(([id]) => id),
]);

function icon(name) {
  return icons[name] || "";
}

function notify(text) {
  toast.textContent = text;
  toast.classList.add("show");
  clearTimeout(notify.timer);
  notify.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function showFeedback(title, desc) {
  state.modal = { type: "feedback", title, desc };
  render();
}

function scheduleGenerateComplete() {
  clearTimeout(scheduleGenerateComplete.timer);
  scheduleGenerateComplete.timer = setTimeout(() => {
    if (state.screen === "generate" && state.generateStatus === "generating") {
      state.generateStatus = "success";
      state.draft.status = "生成完成";
      render();
    }
  }, 650);
}

function scheduleParseComplete() {
  clearTimeout(scheduleParseComplete.timer);
  scheduleParseComplete.timer = setTimeout(() => {
    if (state.modal?.type === "processing") {
      state.modal = null;
      go("parse");
    }
  }, 1700);
}

function go(screen, options = {}) {
  const previousIndex = navIndex();
  state.screen = screen;
  const nextIndex = navIndex(screen);
  state.motion = nextIndex >= previousIndex ? "forward" : "back";
  state.modal = null;
  state.searchOpen = false;
  if (["detail", "role"].includes(screen)) {
    state.roleLocked = false;
  }
  if (screen === "generate" && state.generateStatus === "ready") {
    state.generateStatus = "generating";
  }
  if (!options.skipHistory && navigableScreens.has(screen)) {
    const nextHash = `#${screen}`;
    if (window.location.hash !== nextHash) {
      window.history.pushState({ screen }, "", nextHash);
    }
  }
  render();
}

function navIndex(screen = state.screen) {
  const found = steps.findIndex(([id]) => id === screen);
  if (["subtype"].includes(screen)) return 0;
  if (["detail", "script"].includes(screen)) return 2;
  if (["upload"].includes(screen)) return 4;
  return Math.max(found, 0);
}

function flowProgress() {
  const current = navIndex();
  if (state.screen === "ending") return 100;
  if (state.screen === "generate" && state.generateStatus === "success") return 86;
  return Math.round(((current + 1) / steps.length) * 100);
}

function currentFlowTip() {
  if (state.modal?.type === "processing") {
    return state.mode === "upload" ? "正在解析上传剧本，完成后进入剧本解析页。" : "正在生成互动剧本，完成后进入剧本解析页。";
  }
  if (state.screen === "type") {
    return state.mode === "upload" ? "当前为上传模式，提交后进入 AI 解析。" : "当前为 AI 生成模式，提交后进入剧本解析。";
  }
  if (state.screen === "parse") return "已生成角色、任务和分支结构，可继续确认体验角色。";
  if (state.screen === "role") return `正在确认 ${state.selectedRole} 视角，开始体验后将锁定角色。`;
  if (state.screen === "style") return `已选择 ${state.selectedVisualStyle}，下一步生成互动视频。`;
  if (state.screen === "generate") {
    if (state.generateStatus === "failed") return "视频生成异常，可局部修改或重新生成。";
    if (state.generateStatus === "success") return "视频和互动合成已完成，可进入剧情体验。";
    return "正在生成分镜、视频和互动节点。";
  }
  if (state.screen === "play") return `正在体验第 ${state.episode + 1} / ${demoScript.episodes.length} 集，分支会同步记录。`;
  if (state.screen === "ending") return "已完成一次互动路径，可查看路线回顾并分享。";
  if (state.screen === "theater" || state.screen === "detail" || state.screen === "script") return "当前在剧场路径，可选择平台短剧或查看剧本走向。";
  if (state.screen === "source") return "请选择上传、AI 生成或直接进入平台剧场。";
  if (state.screen === "subtype") return "已选择题材大类，继续确定细分类型。";
  return "从题材偏好开始，系统会引导完成创作与体验流程。";
}

function stepHint(id, status) {
  const currentHint = currentFlowTip();
  if (status === "active") return currentHint;
  if (status === "success") return currentHint;
  if (status === "error") return "生成失败，等待重试或局部修改。";
  if (status === "done") {
    const doneHints = {
      home: `已选 ${state.selectedStyle}`,
      source: state.lastCreateEntry === "platform" ? "已进入平台剧场" : "已确定入口",
      theater: "已浏览剧场内容",
      create: "已进入创作路径",
      type: state.mode === "upload" ? "上传入口已确认" : "AI 生成入口已确认",
      parse: "剧本结构已解析",
      role: `${state.selectedRole} 已确认`,
      style: state.selectedVisualStyle,
      generate: state.generateStatus === "success" ? "生成完成" : "已完成",
      play: `${state.routeHistory.length} 条分支已记录`,
      ending: "已完成分享页",
    };
    return doneHints[id] || "已完成";
  }
  return "待处理";
}

function stepView(id, index) {
  const current = navIndex();
  let status = index < current ? "done" : index === current ? "active" : "todo";
  if (id === "generate" && state.screen === "generate" && state.generateStatus === "failed") status = "error";
  if (id === "generate" && state.generateStatus === "success" && index <= current) status = index === current ? "active success" : "done";
  if (id === "play" && state.screen === "play" && state.routeHistory.length) status = "active success";
  if (id === "ending" && state.screen === "ending") status = "active success";
  const labels = {
    done: "已完成",
    active: "进行中",
    todo: "待处理",
    error: "异常",
    success: "完成",
  };
  const labelKey = status.includes("error") ? "error" : status.includes("success") ? "success" : status;
  return {
    status,
    label: labels[labelKey],
    hint: stepHint(id, labelKey === "success" && index < current ? "done" : labelKey),
  };
}

function flowStepButton(id, label, index, variant = "side") {
  const view = stepView(id, index);
  const active = index === navIndex();
  const iconName = index === 0 ? "folder" : index === 1 ? "play" : index === 5 ? "branch" : index === 9 ? "share" : "doc";
  return `
    <button class="${view.status} ${active ? "active" : ""}" data-go="${id}" aria-current="${active ? "step" : "false"}">
      <span>${variant === "drawer" ? String(index + 1).padStart(2, "0") : icon(iconName)}</span>
      <b>
        <strong>${label}</strong>
        <small>${view.hint}</small>
      </b>
      <em>${view.label}</em>
    </button>
  `;
}

function flowDrawer() {
  return `
    <div class="drawer-scrim ${state.modal === "drawer" ? "show" : ""}" data-action="close-modal"></div>
    <aside class="mobile-drawer ${state.modal === "drawer" ? "open" : ""}" aria-label="流程步骤状态">
      <div class="drawer-head">${icon("logo")}<strong>流程状态</strong><button data-action="close-modal" aria-label="关闭流程抽屉">×</button></div>
      <button class="theme-toggle ${state.theme === "night" ? "is-night" : "is-day"}" data-action="toggle-theme" aria-label="切换白天夜间主题">
        <span class="theme-choice moon-choice">${icon("moon")}</span>
        <span class="theme-choice sun-choice">${icon("sun")}</span>
      </button>
      <div class="drawer-progress">
        <span>当前进度</span>
        <strong>${flowProgress()}%</strong>
        <i style="width:${flowProgress()}%"></i>
      </div>
      <p class="drawer-tip">${currentFlowTip()}</p>
      <nav class="drawer-steps">
        ${steps.map(([id, label], i) => flowStepButton(id, label, i, "drawer")).join("")}
      </nav>
    </aside>
  `;
}

function shell(content, options = {}) {
  const immersive = options.immersive;
  if (immersive) return content;
  return `
    <div class="miko-shell motion-${state.motion}">
      <aside class="side">
        <div class="brand">${icon("logo")}<strong>Miko TV</strong></div>
        <div class="flow-summary">
          <span>当前进度</span>
          <strong>${flowProgress()}%</strong>
          <i><b style="width:${flowProgress()}%"></b></i>
          <p>${currentFlowTip()}</p>
        </div>
        <nav class="steps">
          ${steps.map(([id, label], i) => flowStepButton(id, label, i)).join("")}
        </nav>
      </aside>
      <main class="main">
        <header class="topbar">
          <div class="topbar-left">
            <button class="mobile-menu drawer-toggle" data-action="toggle-drawer" aria-label="打开流程抽屉">${icon("menu")}</button>
            <button class="mobile-logo" data-go="home" aria-label="返回首页">${icon("logo")}</button>
          </div>
          <span>互动沉浸式短剧平台 / ${pageTitle()}</span>
          <button class="autosave" data-action="autosave">自动保存</button>
        </header>
        ${content}
      </main>
      ${flowDrawer()}
      ${globalModal()}
    </div>
  `;
}

function globalModal() {
  if (state.modal === "role-confirm") {
    return `
      <div class="global-modal">
        <div class="dialog-card">
          <h2>确认锁定角色？</h2>
          <p>开始体验后，将锁定为「${state.selectedRole}」第一人称视角，本轮不可切换角色或视角。</p>
          <div class="dialog-actions">
            <button class="ghost" data-action="close-modal">再看看</button>
            <button class="primary" data-action="confirm-start-play">${icon("play")}确认开始</button>
          </div>
        </div>
      </div>
    `;
  }
  if (state.modal === "share-panel") {
    return `
      <div class="global-modal">
        <div class="dialog-card share-card">
          <h2>分享互动短剧</h2>
          <p>选择要生成和分享的素材。</p>
          <div class="share-options">
            ${["结局海报", "剧情截图", "互动剪辑", "保存本地"].map(item => `<button data-action="share-done">${icon("share")}<span>${item}</span></button>`).join("")}
          </div>
          <button class="ghost full" data-action="close-modal">关闭</button>
        </div>
      </div>
    `;
  }
  if (state.modal?.type === "feedback") {
    return `
      <div class="global-modal">
        <div class="dialog-card">
          <h2>${state.modal.title}</h2>
          <p>${state.modal.desc}</p>
          <div class="dialog-actions">
            <button class="primary" data-action="close-modal">知道了</button>
          </div>
        </div>
      </div>
    `;
  }
  if (state.modal?.type === "processing") {
    return `
      <div class="global-modal">
        <div class="dialog-card processing-card">
          <div class="mini-loader"><i></i></div>
          <h2>${state.modal.title}</h2>
          <p>${state.modal.desc}</p>
          <small>完成后自动进入解析结果</small>
        </div>
      </div>
    `;
  }
  if (state.modal === "edit-script") {
    return `
      <div class="global-modal">
        <div class="dialog-card edit-card">
          <h2>编辑解析结果</h2>
          <p>可调整角色、场景和分支节点。当前为原型演示，保存后进入确认角色。</p>
          <div class="edit-fields">
            <label>主角名称<input value="凤昭"></label>
            <label>核心场景<input value="金銮殿 / 凤仪暗库 / 早朝清算"></label>
            <label>分支节点<textarea>玉玺夺回、虎符兵权、世家牵制、新政推行</textarea></label>
          </div>
          <div class="dialog-actions">
            <button class="ghost" data-action="close-modal">取消</button>
            <button class="primary" data-action="save-script-edit">保存并继续</button>
          </div>
        </div>
      </div>
    `;
  }
  if (state.modal === "local-edit") {
    return `
      <div class="global-modal">
        <div class="dialog-card edit-card">
          <h2>局部修改</h2>
          <p>选择需要重生成的片段，保存后重新进入生成队列。</p>
          <div class="share-options">
            ${["第三集：早朝清算", "女帝朝堂镜头", "字幕节奏", "背景音乐"].map(item => `<button class="${state.selectedLocalEdit === item ? "selected" : ""}" data-action="select-local-edit" data-value="${item}">${icon("doc")}<span>${item}</span></button>`).join("")}
          </div>
          <div class="dialog-actions">
            <button class="ghost" data-action="close-modal">取消</button>
            <button class="primary" data-action="save-local-edit">保存修改</button>
          </div>
        </div>
      </div>
    `;
  }
  if (state.modal === "share-success") {
    return `
      <div class="global-modal">
        <div class="dialog-card">
          <h2>分享素材已生成</h2>
          <p>已生成对应素材，可继续回到结局页或重新体验其他路线。</p>
          <div class="dialog-actions">
            <button class="ghost" data-action="restart">重新体验</button>
            <button class="primary" data-action="close-modal">返回结局页</button>
          </div>
        </div>
      </div>
    `;
  }
  return "";
}

function pageTitle() {
  return {
    cover: "封面",
    home: "选择风格类型",
    subtype: "选择细分类型",
    source: "选择进入方式",
    theater: "互动剧场",
    detail: "剧情详情",
    script: "剧本走向",
    create: "创作中心",
    type: "上传 / AI 生成",
    upload: "上传剧本",
    parse: "剧本解析",
    role: "确认角色",
    style: "效果预览",
    generate: "生成互动短剧",
    ending: "结局分享",
  }[state.screen] || "互动体验";
}

function bottomNav() {
  return `
    <nav class="tabbar">
      <button class="${["home", "source"].includes(state.screen) ? "active" : ""}" data-go="home">${icon("folder")}<span>入口</span></button>
      <button class="${state.screen === "create" ? "active" : ""}" data-go="create">${icon("folder")}<span>创作</span></button>
      <button class="${["theater", "detail", "script"].includes(state.screen) ? "active" : ""}" data-go="theater">${icon("play")}<span>剧场</span></button>
      <button class="${state.screen === "parse" ? "active" : ""}" data-go="parse">${icon("branch")}<span>剧本</span></button>
    </nav>
  `;
}

function renderHome() {
  return shell(`
    <section class="work setup-screen">
      <div class="page-head">
        <p class="eyebrow">Step 01</p>
        <h1>选择您喜欢的风格类型</h1>
        <p>先选择短剧大类，再进入细分类型。系统会基于该类型推荐上传解析、AI 生成或平台短剧。</p>
      </div>
      <div class="genre-grid">
        ${genreGroups.map(group => `
          <button class="genre-card ${state.selectedStyle === group.title ? "selected" : ""}" data-action="select-category" data-value="${group.title}">
            <strong>${group.title}</strong>
            <span>${group.desc}</span>
          </button>
        `).join("")}
      </div>
    </section>
  `);
}

function renderCover() {
  return `
    <section class="cover-screen">
      <header class="cover-nav">
        <div class="cover-brand">${icon("logo")}<strong>Miko TV</strong></div>
        <button class="cover-new" data-go="home">＋ 新建项目</button>
      </header>
      <div class="cover-hero">
        <div class="cover-pill">${icon("branch")}AI 驱动的一键短剧创作平台</div>
        <h1>创意进，短剧出</h1>
        <p>上传图片、创意，自动解析出大纲、剧本、分镜头、成片</p>
        <button class="primary cover-cta" data-go="home">＋ 创建新项目</button>
      </div>
      <div class="cover-flow">
        <span>创作流程</span>
        <div class="flow-steps">
          ${["上传剧本", "确认角色", "选择风格", "一键生成", "局部修改", "导出视频"].map((item, index) => `
            <div class="flow-step">
              <b>${index + 1}</b>
              <em>${item}</em>
            </div>
          `).join("")}
        </div>
      </div>
      <div class="recent-section">
        <div class="recent-head"><h2>最近项目</h2><span>2 个项目</span></div>
        <div class="recent-grid">
          <button class="recent-card" data-go="home">
            <i>${icon("doc")}</i>
            <strong>女帝临朝</strong>
            <span>3 集 · 60-90s · 古风权谋</span>
            <div class="mini-progress"><b style="width: 82%"></b></div>
          </button>
          <button class="recent-card" data-go="home">
            <i>${icon("doc")}</i>
            <strong>大唐盛世</strong>
            <span>3 集 · 60-90s · 创作中</span>
            <div class="mini-progress pink"><b style="width: 38%"></b></div>
          </button>
        </div>
      </div>
    </section>
  `;
}

function renderSubtype() {
  const group = genreGroups.find(item => item.title === state.selectedStyle) || genreGroups[0];
  return shell(`
    <section class="work setup-screen">
      <button class="back-link" data-go="home">${icon("back")}返回大类</button>
      <div class="page-head">
        <p class="eyebrow">Step 02</p>
        <h1>${group.title}</h1>
        <p>选择一个细分类型，下一步再选择上传剧本、AI 生成或直接体验平台短剧。</p>
      </div>
      <div class="subtype-list">
        ${group.items.map(([title, desc]) => `
          <button class="${state.selectedType === title ? "selected" : ""}" data-action="select-subtype" data-value="${title}">
            <strong>${title}</strong>
            <span>${desc}</span>
          </button>
        `).join("")}
      </div>
    </section>
  `);
}

function renderSource() {
  return shell(`
    <section class="work create">
      <div class="page-head">
        <p class="eyebrow">Step 03</p>
        <h1>选择进入方式</h1>
        <p>已选择：${state.selectedStyle} / ${state.selectedType}。接下来选择自己上传、AI 生成或直接体验平台短剧。</p>
      </div>
      <div class="miko-card draft-card">
        <div>
          <span>当前项目草稿</span>
          <h2>${state.draft.name}</h2>
          <p>${state.draft.source} · ${state.draft.status} · ${state.draft.updatedAt}</p>
        </div>
        <b>Draft</b>
      </div>
      <div class="create-choices">
        <button data-action="choose-upload">${icon("upload")}<strong>上传剧本</strong><span>按已选风格类型解析 TXT / DOC / PDF</span></button>
        <button data-action="choose-ai">${icon("cpu")}<strong>AI 生成剧本</strong><span>基于已选风格类型生成 3 集互动短剧</span></button>
        <button data-action="choose-platform">${icon("play")}<strong>平台已有短剧</strong><span>按已选风格类型推荐短剧</span></button>
      </div>
      <div class="fixed-actions">
        <button class="ghost" data-go="home">返回修改风格</button>
        <button class="primary" data-action="choose-platform">直接看推荐</button>
      </div>
    </section>
  `);
}

function renderTheater() {
  return shell(`
    <section class="work theater">
      <div class="hero-row">
        <div>
          <p class="eyebrow">Miko TV Interactive</p>
          <h1>互动短剧<br>沉浸冒险</h1>
          <p>选择平台已有短剧，或创建自己的第一人称互动短剧。</p>
        </div>
        <button class="icon-btn" data-action="open-search" aria-label="搜索">${icon("search")}</button>
      </div>
      <div class="toolbar">
        ${["全部", "奇幻", "悬疑", "恋爱", "都市", "古风"].map(t => `<button class="${state.selectedFilter === t ? "active" : ""}" data-action="filter-drama" data-value="${t}">${t}</button>`).join("")}
        <button class="sort" data-action="toggle-sort">${state.sortMode}</button>
      </div>
      <div class="section-head"><h2>热门短剧</h2><button data-action="see-all">查看全部</button></div>
      <div class="author-row">
        ${dramas.map(d => `<button data-title="${d.title}" data-action="select-drama"><img src="${d.cover}" alt="${d.title}"><span>${d.title}</span></button>`).join("")}
      </div>
      <div class="poster-grid">
        ${dramas.map(d => dramaCard(d)).join("")}
      </div>
      ${state.searchOpen ? searchPanel() : ""}
    </section>
  `);
}

function dramaCard(d) {
  return `
    <button class="poster-card" data-title="${d.title}" data-action="select-drama">
      <img src="${d.cover}" alt="${d.title}">
      <strong>${d.title}</strong>
      <span>${d.tags.join(" · ")}</span>
    </button>
  `;
}

function searchPanel() {
  const q = state.searchText.trim();
  const suggestions = q ? dramas.filter(d => d.title.includes(q) || d.author.includes(q)).slice(0, 3) : dramas.slice(0, 3);
  const hasResult = !q || suggestions.length > 0;
  return `
    <div class="modal-layer">
      <div class="search-panel">
        <div class="search-line">
          ${icon("search")}
          <input id="searchInput" value="${state.searchText}" placeholder="输入短剧名称或作者" autofocus>
          <button data-action="do-search">搜索</button>
        </div>
        <p>支持智能联想、实时文字预判和一键候选补全。</p>
        <div class="suggestions">
          ${hasResult ? suggestions.map(d => `<button data-title="${d.title}" data-action="select-drama">${d.title}<span>${d.author}</span></button>`).join("") : `<div class="empty">暂无该短剧</div>`}
        </div>
        <button class="ghost full" data-action="close-search">关闭</button>
      </div>
    </div>
  `;
}

function renderDetail() {
  const d = state.selectedDrama;
  return shell(`
    <section class="work detail">
      <button class="back-link" data-go="theater">${icon("back")}返回剧场</button>
      <div class="detail-hero">
        <img src="${d.cover}" alt="${d.title}">
        <div class="detail-copy">
          <div class="tags">${d.tags.map(t => `<span>${t}</span>`).join("")}</div>
          <h1>${d.title}</h1>
          <p>${d.desc}</p>
          <div class="stats"><span>3 集</span><span>8 个分支</span><span>4 个结局</span><span>第一人称 POV</span></div>
        </div>
      </div>
      <div class="miko-card">
        <h2>可扮演角色</h2>
        <div class="role-list">
          ${["凤昭", "谢无咎", "沈太傅"].map((r, i) => `
            <button class="${state.selectedRole === r ? "selected" : ""}" data-role="${r}" data-action="select-role">
              <b>${r.slice(0, 1)}</b>
              <strong>${r}</strong>
              <span>${i === 0 ? "推荐第一人称主线" : "开始体验前可选，开始后锁定"}</span>
              ${state.selectedRole === r ? `<em>${icon("check")} 已选择</em>` : ""}
            </button>
          `).join("")}
        </div>
      </div>
      <div class="fixed-actions">
        <button class="ghost" data-go="script">${icon("branch")}查看剧本走向</button>
        <button class="primary" data-action="start-play">${icon("play")}开始体验</button>
      </div>
    </section>
  `);
}

function renderScript() {
  return shell(`
    <section class="work">
      <button class="back-link" data-go="detail">${icon("back")}返回详情</button>
      <div class="page-head">
        <h1>示例互动剧本解析</h1>
        <p>内置 3 集短剧，每集包含剧情、任务和至少 2 层嵌套分支，供用户查看剧本走向。</p>
      </div>
      <div class="script-grid">
        ${demoScript.episodes.map((ep, i) => episodeCard(ep, i)).join("")}
      </div>
      <div class="fixed-actions">
        <button class="ghost" data-go="detail">返回详情</button>
        <button class="primary" data-action="start-play">${icon("play")}按该剧本体验</button>
      </div>
    </section>
  `);
}

function episodeCard(ep, i) {
  return `
    <article class="episode-card">
      <span>EP ${i + 1}</span>
      <h2>${ep.title}</h2>
      <p>${ep.scene}</p>
      <b>${ep.task}</b>
      <div class="branch-tree">
        ${ep.branches.map(b => `
          <div class="branch-node">
            <strong>一级选择：${b.text}</strong>
            <small>${b.hint}</small>
            ${b.children.map(c => `<em>二级选择：${c.text}<i>${c.hint}</i></em>`).join("")}
          </div>
        `).join("")}
      </div>
    </article>
  `;
}

function renderCreate() {
  return shell(`
    <section class="work create">
      <div class="page-head">
        <h1>创作中心</h1>
        <p>创建属于你的互动短剧：上传剧本，或用 AI 生成剧本，再进入剧本解析。</p>
      </div>
      <div class="create-choices">
        <button data-action="choose-upload">${icon("upload")}<strong>上传剧本</strong><span>TXT / DOC / PDF / 文本粘贴</span></button>
        <button data-action="choose-ai">${icon("cpu")}<strong>AI 生成剧本</strong><span>输入关键词生成 3 集互动短剧</span></button>
        <button data-go="theater">${icon("play")}<strong>体验平台已有短剧</strong><span>进入互动剧场</span></button>
      </div>
    </section>
  `);
}

function renderType() {
  const isUpload = state.mode === "upload";
  return shell(`
    <section class="work">
      <div class="page-head">
        <h1>${isUpload ? "上传剧本" : "AI 生成剧本"}</h1>
        <p>${isUpload ? "上传后系统会解析角色、剧情、任务和分支节点。" : "输入设定后，系统会生成完整 3 集互动剧本并进入解析页。"}</p>
      </div>
      <div class="miko-card form-card">
        ${isUpload ? uploadForm() : aiForm()}
      </div>
      <div class="fixed-actions">
        <button class="ghost" data-go="create">返回</button>
        <button class="primary" data-action="parse">${isUpload ? "上传并解析" : "生成并解析"}</button>
      </div>
    </section>
  `);
}

function uploadForm() {
  return `
    <div class="upload-zone">
      ${icon("upload")}
      <strong>拖拽或点击上传剧本文件</strong>
      <span>支持 .txt / .doc / .pdf，也可在下方粘贴文本。</span>
      <input type="file" accept=".txt,.doc,.docx,.pdf">
    </div>
    <label>文本粘贴框<textarea>《女帝临朝》示例文本：登基大典、摄政王夺权、凤仪暗库、虎符兵权、女帝盛世。</textarea></label>
    <button class="ghost" data-action="clear-upload">清空</button>
  `;
}

function aiForm() {
  return `
    <label>剧情关键词<textarea>女帝登基、摄政王、玉玺虎符、宫廷权谋、霸气反杀、女帝盛世</textarea></label>
    <div class="form-grid">
      <label>剧情类型<select><option>古风权谋</option><option>古风甜虐</option><option>仙侠玄幻</option><option>悬疑探案</option></select></label>
      <label>风格<select><option>霸气女帝</option><option>权谋反杀</option><option>高燃朝堂</option><option>宿命虐恋</option></select></label>
      <label>人物类型<select><option>女帝</option><option>摄政王</option><option>权臣</option><option>将军</option><option>谋士</option></select></label>
      <label>结局方向<select><option>多分支 + 隐藏</option><option>HE</option><option>BE</option></select></label>
    </div>
    <button class="ghost" data-action="reset-ai">重置</button>
  `;
}

function renderParse() {
  return shell(`
    <section class="work">
      <div class="page-head">
        <h1>剧本解析结果</h1>
        <p>这里是插入到完整原型里的“剧本解析功能”：预览剧本、角色、任务、场景和嵌套分支。</p>
      </div>
      <div class="miko-card parse-summary">
        <h2>${demoScript.title}</h2>
        <p>${demoScript.logline}</p>
        <div class="stats"><span>3 集</span><span>3 个任务</span><span>6 个一级分支</span><span>12 个二级分支</span></div>
      </div>
      <div class="miko-card validation-card">
        <h2>解析校验</h2>
        <div class="validation-grid">
          ${[
            ["主角识别", "已识别凤昭为第一人称主线角色"],
            ["分支层级", "每集包含 2 层嵌套选择"],
            ["任务闭环", "3 集均包含明确任务目标"],
            ["结局闭环", "已生成霸业 HE、女帝盛世、孤帝结局等路线"],
          ].map(item => `<div>${icon("check")}<b>${item[0]}</b><span>${item[1]}</span></div>`).join("")}
        </div>
      </div>
      <div class="script-grid">
        ${demoScript.episodes.map((ep, i) => episodeCard(ep, i)).join("")}
      </div>
      <div class="miko-card parse-summary">
        <h2>自动识别信息</h2>
        <div class="info-grid">
          <div><b>角色</b><span>凤昭 / 谢无咎 / 沈太傅</span></div>
          <div><b>场景</b><span>金銮殿 / 凤仪暗库 / 早朝清算</span></div>
          <div><b>分支节点</b><span>皇权、军权、世家、新政</span></div>
        </div>
      </div>
      <div class="fixed-actions">
        <button class="ghost" data-action="edit-script">编辑</button>
        <button class="primary" data-go="role">确认生成互动短剧</button>
      </div>
    </section>
  `);
}

function renderRole() {
  return shell(`
    <section class="work">
      <div class="page-head">
        <h1>确认体验角色</h1>
        <p>开始体验后，角色和第一人称视角会锁定，播放页不再提供切换入口。</p>
      </div>
      <div class="role-list wide-list">
        ${["凤昭", "谢无咎", "沈太傅"].map((r, i) => `
          <button class="${state.selectedRole === r ? "selected" : ""}" data-role="${r}" data-action="select-role">
            <b>${r.slice(0, 1)}</b>
            <strong>${r}</strong>
            <span>${i === 0 ? "推荐路线，信息最完整" : "可在开始前选择"}</span>
            ${state.selectedRole === r ? `<em>${icon("check")} 已选择</em>` : ""}
          </button>
        `).join("")}
      </div>
      <div class="fixed-actions">
        <button class="ghost" data-go="parse">返回解析</button>
        <button class="primary" data-go="style">锁定角色并继续</button>
      </div>
    </section>
  `);
}

function renderStyle() {
  return shell(`
    <section class="work">
      <div class="page-head">
        <h1>效果预览</h1>
        <p>预览生成后的画面风格、镜头质感和音乐方向。开始体验后才会锁定角色与第一人称视角。</p>
      </div>
      <div class="style-grid">
        ${[
          ["女帝朝堂", img.empress],
          ["金殿权谋", img.court],
          ["凤仪暗库", img.gate],
          ["霸业终局", img.throne],
        ].map((s, i) => `<button class="style-tile ${state.selectedVisualStyle === s[0] ? "selected" : ""}" data-action="select-visual-style" data-value="${s[0]}"><img src="${s[1]}" alt="${s[0]}"><strong>${s[0]}</strong><span>${i === 0 ? "推荐" : "可选"}</span></button>`).join("")}
      </div>
      <div class="miko-card form-card">
        <div class="info-grid">
          <div><b>视频风格</b><span>古风写实</span></div>
          <div><b>镜头风格</b><span>第一人称 POV</span></div>
          <div><b>音乐风格</b><span>史诗 / 权谋 / 高燃</span></div>
        </div>
      </div>
      <div class="fixed-actions">
        <button class="ghost" data-go="role">返回</button>
        <button class="primary" data-action="start-generate">开始生成</button>
      </div>
    </section>
  `);
}

function renderGenerate() {
  const status = state.generateStatus;
  const progress = status === "failed" ? 46 : status === "success" ? 100 : 72;
  const title = status === "failed" ? "生成失败" : status === "success" ? "生成完成" : "生成中";
  const desc = status === "failed"
    ? "第三集朝堂清算片段生成失败，可重新生成或返回局部修改。"
    : status === "success"
      ? "已生成第一人称古风画面、互动节点、字幕和结局素材。"
      : "正在生成女帝朝堂、凤仪暗库、早朝清算三段第一人称视频。";
  return shell(`
    <section class="work">
      <div class="page-head">
        <h1>生成互动短剧</h1>
        <p>支持生成中、失败重试、局部修改和生成完成后的体验预览。</p>
      </div>
      <div class="miko-card generate-card ${status}">
        ${status === "generating" ? `<div class="loading-orbit"><i></i><b></b></div>` : ""}
        <div class="progress"><i style="width:${progress}%"></i></div>
        <h2>${title}</h2>
        <p>${desc}</p>
        <div class="generate-steps">
          <span class="done">剧本解析</span>
          <span class="done">角色锁定</span>
          <span class="${status === "failed" ? "failed" : "done"}">视频生成</span>
          <span class="${status === "success" ? "done" : ""}">互动合成</span>
        </div>
      </div>
      <div class="fixed-actions">
        <button class="ghost" data-go="style">返回设置</button>
        ${status === "failed" ? `<button class="ghost" data-action="local-edit">局部修改</button><button class="primary" data-action="retry-generate">重新生成</button>` : ""}
        ${status === "generating" ? `<button class="ghost" data-action="simulate-fail">模拟失败</button><button class="primary" data-action="finish-generate">完成生成</button>` : ""}
        ${status === "success" ? `<button class="ghost" data-action="retry-generate">重新生成</button><button class="primary" data-action="start-play">体验剧情</button>` : ""}
      </div>
    </section>
  `);
}

function renderPlay() {
  const ep = demoScript.episodes[state.episode];
  const sceneImages = [img.empress, img.gate, img.court];
  const paused = state.modal === "choices" || state.modal === "second";
  return shell(`
    <section class="player ${paused ? "is-paused" : ""}">
      <video class="scene-video" autoplay muted loop playsinline poster="${sceneImages[state.episode]}"></video>
      <div class="scene-fallback" style="background-image:url('${sceneImages[state.episode]}')"></div>
      <div class="shade"></div>
      <header class="player-head">
        <button data-action="exit-play">${icon("back")}</button>
        <div><strong>${ep.title}</strong><span>第一人称镜头 · ${state.selectedRole}视角已锁定</span></div>
      </header>
      <main class="caption">
        ${paused ? `<span class="pause-badge">剧情已暂停</span>` : ""}
        <b>${ep.task}</b>
        <p>${ep.scene}</p>
        <small>当前路线：${state.routeHistory.at(-1) || "主线"}。体验中不可切换角色或视角。</small>
      </main>
      <footer class="play-actions">
        <button data-action="choices">${icon("branch")}选择分支</button>
        <button data-action="exit-play">退出剧情</button>
      </footer>
      ${state.modal ? playModal() : ""}
      ${flowDrawer()}
    </section>
  `, { immersive: true });
}

function playModal() {
  const ep = demoScript.episodes[state.episode];
  if (state.modal === "choices") {
    return `<div class="play-modal"><div class="choice-box"><h2>关键节点暂停</h2><p>选择下一步行动。</p>${ep.branches.map((b, i) => `<button data-action="choice-one" data-index="${i}"><strong>${b.text}</strong></button>`).join("")}</div></div>`;
  }
  if (state.modal === "second") {
    const branch = ep.branches[state.firstChoice];
    return `<div class="play-modal"><div class="choice-box"><h2>继续选择</h2><p>你选择了“${branch.text}”。</p>${branch.children.map((c, i) => `<button data-action="choice-two" data-index="${i}"><strong>${c.text}</strong></button>`).join("")}</div></div>`;
  }
  if (state.modal === "branch-result") {
    return `<div class="play-modal"><div class="choice-box"><h2>剧情推进</h2><p>${state.pendingBranch?.result || "剧情已根据选择推进。"}</p><button data-action="continue-branch"><strong>${state.pendingBranch?.final ? "查看结局" : "进入下一集"}</strong></button></div></div>`;
  }
  if (state.modal === "exit") {
    return `<div class="play-modal"><div class="choice-box"><h2>确定退出并保存进度？</h2><p>系统会保存当前集数和分支路径。</p><button data-action="confirm-exit">确定退出</button><button data-action="close-modal">继续体验</button></div></div>`;
  }
  return "";
}

function renderEnding() {
  return shell(`
    <section class="work detail">
      <div class="ending-hero">
        <img src="${img.court}" alt="结局海报">
        <div><span>你的结局</span><h1>${state.ending || "隐藏 HE"}</h1></div>
      </div>
      <div class="miko-card">
        <h2>分支路线回顾</h2>
        <div class="route-list">
          ${state.routeHistory.length ? state.routeHistory.map((r, i) => `<p><b>EP${i + 1}</b>${r}</p>`).join("") : "<p>主线体验完成。</p>"}
        </div>
      </div>
      <div class="fixed-actions">
        <button class="ghost" data-action="restart">重新体验</button>
        <button class="primary" data-action="share">${icon("share")}分享</button>
      </div>
    </section>
  `);
}

function render() {
  const map = {
    cover: renderCover,
    home: renderHome,
    subtype: renderSubtype,
    source: renderSource,
    theater: renderTheater,
    detail: renderDetail,
    script: renderScript,
    create: renderCreate,
    type: renderType,
    upload: renderType,
    parse: renderParse,
    role: renderRole,
    style: renderStyle,
    generate: renderGenerate,
    play: renderPlay,
    ending: renderEnding,
  };
  const previousSideScroll = document.querySelector(".side")?.scrollTop ?? 0;
  const previousDrawerScroll = document.querySelector(".drawer-steps")?.scrollTop ?? 0;
  document.body.dataset.theme = state.theme;
  app.className = `motion-${state.motion}`;
  app.innerHTML = (map[state.screen] || renderHome)();
  const side = document.querySelector(".side");
  if (side) side.scrollTop = previousSideScroll;
  const drawerSteps = document.querySelector(".drawer-steps");
  if (drawerSteps) drawerSteps.scrollTop = previousDrawerScroll;
  const input = document.querySelector("#searchInput");
  if (input) {
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
  }
}

window.addEventListener("popstate", () => {
  const screen = window.location.hash.replace("#", "");
  if (navigableScreens.has(screen) && screen !== state.screen) {
    go(screen, { skipHistory: true });
  }
});

document.body.addEventListener("input", (event) => {
  if (event.target.id === "searchInput") {
    state.searchText = event.target.value;
    render();
  }
});

document.body.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const action = button.dataset.action;

  if (button.dataset.go) {
    if (button.dataset.go === "play") {
      state.modal = "role-confirm";
      render();
      return;
    }
    go(button.dataset.go);
    return;
  }

  if (action === "autosave") {
    state.draft.status = "已手动保存";
    state.draft.updatedAt = "刚刚";
    showFeedback("保存成功", "当前项目草稿、角色、分支和生成设置已保存。");
  }
  if (action === "filter-drama") {
    state.selectedFilter = button.dataset.value;
    render();
  }
  if (action === "toggle-sort") {
    state.sortMode = state.sortMode === "最新" ? "最热" : "最新";
    render();
  }
  if (action === "see-all") {
    showFeedback("全部短剧", "已展开全部推荐短剧。当前原型保留 4 个示例项目用于演示。");
  }
  if (action === "select-category") {
    state.selectedStyle = button.dataset.value;
    const group = genreGroups.find(item => item.title === state.selectedStyle);
    state.selectedType = group?.items?.[0]?.[0] || "";
    go("subtype");
  }
  if (action === "select-subtype") {
    state.selectedType = button.dataset.value;
    go("source");
  }
  if (action === "select-style") {
    state.selectedStyle = button.dataset.value;
    render();
  }
  if (action === "select-type") {
    state.selectedType = button.dataset.value;
    render();
  }
  if (action === "reset-preference") {
    state.selectedStyle = "古风古装类";
    state.selectedType = "古风权谋";
    render();
  }
  if (action === "choose-platform") {
    state.lastCreateEntry = "platform";
    go("theater");
  }
  if (action === "toggle-drawer") {
    state.modal = state.modal === "drawer" ? null : "drawer";
    render();
  }
  if (action === "toggle-theme") {
    state.theme = state.theme === "night" ? "day" : "night";
    localStorage.setItem("miko-theme", state.theme);
    render();
  }
  if (action === "open-search") {
    state.searchOpen = true;
    render();
  }
  if (action === "close-search") {
    state.searchOpen = false;
    render();
  }
  if (action === "do-search") {
    const found = dramas.find(d => d.title.includes(state.searchText) || d.author.includes(state.searchText));
    if (found) {
      state.selectedDrama = found;
      go("detail");
    } else {
      showFeedback("暂无该短剧", "没有找到匹配的短剧名称或作者，可以换个关键词继续搜索。");
    }
  }
  if (action === "select-drama") {
    state.selectedDrama = dramas.find(d => d.title === button.dataset.title) || dramas[0];
    go("detail");
  }
  if (action === "select-role") {
    if (state.roleLocked && state.screen === "play") {
      showFeedback("角色已锁定", "体验开始后不可再切换角色或视角。可以重新体验后再选择其他角色。");
      return;
    }
    state.roleLocked = false;
    state.selectedRole = button.dataset.role;
    render();
  }
  if (action === "choose-upload") {
    state.mode = "upload";
    state.lastCreateEntry = "upload";
    go("type");
  }
  if (action === "choose-ai") {
    state.mode = "ai";
    state.lastCreateEntry = "ai";
    go("type");
  }
  if (action === "parse") {
    state.modal = {
      type: "processing",
      title: state.mode === "upload" ? "解析中，请稍候" : "生成中，请稍候",
      desc: state.mode === "upload" ? "正在识别角色、场景、任务和分支节点。" : "正在生成女帝权谋三集互动剧本。",
      cta: "查看解析结果",
      action: "go-parse-now",
    };
    render();
    scheduleParseComplete();
  }
  if (action === "go-parse-now") {
    clearTimeout(scheduleParseComplete.timer);
    state.modal = null;
    go("parse");
  }
  if (action === "clear-upload") {
    showFeedback("已清空", "上传文件和文本内容已清空，可以重新上传或粘贴剧本。");
  }
  if (action === "reset-ai") {
    showFeedback("已重置", "AI 生成条件已恢复为默认的古风女帝权谋配置。");
  }
  if (action === "select-visual-style") {
    state.selectedVisualStyle = button.dataset.value;
    render();
  }
  if (action === "edit-script") {
    state.modal = "edit-script";
    render();
  }
  if (action === "save-script-edit") {
    state.modal = null;
    go("role");
  }
  if (action === "start-generate") {
    state.generateStatus = "generating";
    go("generate");
    scheduleGenerateComplete();
  }
  if (action === "simulate-fail") {
    clearTimeout(scheduleGenerateComplete.timer);
    state.generateStatus = "failed";
    render();
  }
  if (action === "finish-generate") {
    state.generateStatus = "success";
    state.draft.status = "生成完成";
    render();
  }
  if (action === "retry-generate") {
    state.generateStatus = "generating";
    render();
    scheduleGenerateComplete();
  }
  if (action === "local-edit") {
    state.modal = "local-edit";
    render();
  }
  if (action === "select-local-edit") {
    state.selectedLocalEdit = button.dataset.value;
    render();
  }
  if (action === "save-local-edit") {
    state.generateStatus = "generating";
    state.modal = null;
    go("generate");
    scheduleGenerateComplete();
  }
  if (action === "start-play") {
    state.modal = "role-confirm";
    render();
  }
  if (action === "confirm-start-play") {
    state.roleLocked = true;
    state.episode = 0;
    state.firstChoice = null;
    state.routeHistory = [];
    state.ending = "";
    go("play");
  }
  if (action === "choices") {
    state.modal = "choices";
    render();
  }
  if (action === "choice-one") {
    state.firstChoice = Number(button.dataset.index);
    state.modal = "second";
    render();
  }
  if (action === "choice-two") {
    const ep = demoScript.episodes[state.episode];
    const first = ep.branches[state.firstChoice];
    const second = first.children[Number(button.dataset.index)];
    state.routeHistory.push(`${first.text} / ${second.text}`);
    state.ending = second.route;
    state.pendingBranch = {
      result: second.result,
      nextEpisode: state.episode + 1,
      final: state.episode >= demoScript.episodes.length - 1,
    };
    state.modal = "branch-result";
    render();
  }
  if (action === "continue-branch") {
    if (state.pendingBranch?.final) {
      state.pendingBranch = null;
      go("ending");
      return;
    }
    if (state.episode < demoScript.episodes.length - 1) {
      state.episode = state.pendingBranch?.nextEpisode ?? state.episode + 1;
      state.firstChoice = null;
      state.pendingBranch = null;
      state.modal = null;
      render();
    }
  }
  if (action === "hint") {
    state.modal = "hint";
    render();
  }
  if (action === "exit-play") {
    state.modal = "exit";
    render();
  }
  if (action === "confirm-exit") go("home");
  if (action === "close-modal") {
    state.modal = null;
    render();
  }
  if (action === "restart") {
    state.roleLocked = false;
    go("detail");
  }
  if (action === "share") {
    state.modal = "share-panel";
    render();
  }
  if (action === "share-done") {
    state.modal = "share-success";
    render();
  }
});

const initialScreen = window.location.hash.replace("#", "");
if (navigableScreens.has(initialScreen)) {
  state.screen = initialScreen;
}
render();
