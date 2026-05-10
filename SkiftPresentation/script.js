const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -8% 0px",
  }
);

document.querySelectorAll(".reveal, [data-scene]").forEach((node) => revealObserver.observe(node));

const sceneObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-active", entry.isIntersecting);
    });
  },
  { threshold: 0.38 }
);

document.querySelectorAll("[data-scene]").forEach((scene) => sceneObserver.observe(scene));

const depthCards = document.querySelectorAll("[data-depth-card]");
const parallaxScenes = document.querySelectorAll(".scene");
let ticking = false;

function applyScrollMotion() {
  const viewportHeight = window.innerHeight;

  depthCards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    const progress = (rect.top + rect.height * 0.5 - viewportHeight * 0.5) / viewportHeight;
    const y = progress * -18;
    const scale = 1 - Math.min(Math.abs(progress) * 0.04, 0.04);
    const rotateX = progress * 4;
    const rotateY = (index % 2 === 0 ? 1 : -1) * progress * 5;
    card.style.transform = `translate3d(0, ${y}px, 0) scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  parallaxScenes.forEach((scene) => {
    const rect = scene.getBoundingClientRect();
    const offset = (rect.top / viewportHeight) * -20;
    scene.style.setProperty("--scene-offset", `${offset}px`);
  });

  ticking = false;
}

function requestParallaxFrame() {
  if (prefersReducedMotion || ticking) return;
  ticking = true;
  requestAnimationFrame(applyScrollMotion);
}

window.addEventListener("scroll", requestParallaxFrame, { passive: true });
window.addEventListener("resize", requestParallaxFrame);
requestParallaxFrame();

const salesNumber = document.querySelector("[data-countup]");
const salesSection = document.querySelector(".scene-sales");
const salesDetail = document.querySelector("[data-sales-detail]");
const salesToggle = document.querySelector("[data-sales-toggle]");
const salesClose = document.querySelector("[data-sales-close]");
const salesDrilldown = document.querySelector("[data-sales-drilldown]");
let salesAnimated = false;
let salesLiveTimer;
let currentSalesValue = Number(salesNumber?.dataset.countup || 0);

function formatSEK(value) {
  return new Intl.NumberFormat("en-SE", {
    style: "currency",
    currency: "SEK",
    maximumFractionDigits: 0,
  }).format(value);
}

function animateCountup(node, target, duration = 1600) {
  const startValue = 0;
  const start = performance.now();

  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(startValue + (target - startValue) * eased);
    node.textContent = formatSEK(value);

    if (progress < 1) {
      requestAnimationFrame(frame);
    } else {
      currentSalesValue = target;
      startSalesPulse();
    }
  }

  requestAnimationFrame(frame);
}

function startSalesPulse() {
  if (prefersReducedMotion || !salesNumber || salesLiveTimer) return;
  salesLiveTimer = window.setInterval(() => {
    const increment = 120 + Math.round(Math.random() * 320);
    currentSalesValue += increment;
    salesNumber.textContent = formatSEK(currentSalesValue);
    salesNumber.animate(
      [
        { transform: "translateY(0) scale(1)", opacity: 1 },
        { transform: "translateY(-2px) scale(1.015)", opacity: 1 },
        { transform: "translateY(0) scale(1)", opacity: 1 },
      ],
      {
        duration: 720,
        easing: "cubic-bezier(0.2, 0.9, 0.22, 1)",
      }
    );
  }, 2600);
}

const salesObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting || salesAnimated || !salesSection || !salesNumber) return;
      salesAnimated = true;
      salesSection.classList.add("is-animated");
      animateCountup(salesNumber, Number(salesNumber.dataset.countup));
      window.setTimeout(() => salesDetail?.classList.add("is-visible"), 820);
    });
  },
  { threshold: 0.35 }
);

if (salesSection && salesNumber) {
  salesObserver.observe(salesSection);
}

const aiScene = document.querySelector(".scene-ai");
const aiPressure = document.querySelector("[data-ai-pressure]");
const aiPressureLabel = document.querySelector("[data-ai-pressure-label]");
const aiActionTitle = document.querySelector("[data-ai-action-title]");
const aiActionBody = document.querySelector("[data-ai-action-body]");
const aiRecommendationLabel = document.querySelector("[data-ai-recommendation-label]");
const aiRecommendationNote = document.querySelector("[data-ai-recommendation-note]");
const aiFlowCopy = document.querySelector("[data-ai-flow-copy]");
const aiManagerNode = document.querySelector("[data-ai-manager-node]");
let aiAnimated = false;
let aiCycleTimer;
let aiStateIndex = 0;

const aiStates = [
  {
    pressure: "56%",
    pressureLabel: "Elevated",
    actionTitle: "Add one floor lead from 17:30",
    actionBody: "Dining room demand is trending above planned labour capacity.",
    heroLabel: "Increase dinner coverage",
    heroNote: "Projected 18:00 demand exceeds current floor staffing.",
    flowCopy: "Coverage increased for projected dinner demand.",
  },
  {
    pressure: "72%",
    pressureLabel: "High priority",
    actionTitle: "Extend front counter coverage by 90 minutes",
    actionBody: "Forecasted order acceleration is compressing queue resilience.",
    heroLabel: "Adjust shift coverage",
    heroNote: "Front counter demand is climbing faster than scheduled allocation.",
    flowCopy: "Shift coverage expanded to protect service speed.",
  },
  {
    pressure: "64%",
    pressureLabel: "Manager review",
    actionTitle: "Notify manager and publish refined closing plan",
    actionBody: "Projected late demand requires visible coordination across the floor.",
    heroLabel: "Manager notified",
    heroNote: "Operational change is published with full visibility and traceability.",
    flowCopy: "Managers informed and downstream changes logged in real time.",
  },
];

function applyAiState(state) {
  aiPressure?.style.setProperty("width", state.pressure);
  if (aiPressureLabel) aiPressureLabel.textContent = state.pressureLabel;
  if (aiActionTitle) aiActionTitle.textContent = state.actionTitle;
  if (aiActionBody) aiActionBody.textContent = state.actionBody;
  if (aiRecommendationLabel) aiRecommendationLabel.textContent = state.heroLabel;
  if (aiRecommendationNote) aiRecommendationNote.textContent = state.heroNote;
  if (aiFlowCopy) aiFlowCopy.textContent = state.flowCopy;

  if (!prefersReducedMotion) {
    [aiPressureLabel, aiActionTitle, aiActionBody, aiRecommendationLabel, aiRecommendationNote, aiFlowCopy].forEach((node) => {
      node?.animate(
        [
          { opacity: 0.6, transform: "translateY(4px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        {
          duration: 620,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        }
      );
    });

    aiManagerNode?.animate(
      [
        { transform: "translateY(0) scale(1)", boxShadow: "0 20px 48px rgba(16, 24, 40, 0.07)" },
        { transform: "translateY(-2px) scale(1.01)", boxShadow: "0 28px 58px rgba(67, 119, 245, 0.12)" },
        { transform: "translateY(0) scale(1)", boxShadow: "0 20px 48px rgba(16, 24, 40, 0.07)" },
      ],
      {
        duration: 900,
        easing: "cubic-bezier(0.2, 0.9, 0.22, 1)",
      }
    );
  }
}

function startAiCycle() {
  if (!aiScene || !aiPressure || aiCycleTimer) return;
  applyAiState(aiStates[aiStateIndex]);
  aiCycleTimer = window.setInterval(() => {
    aiStateIndex = (aiStateIndex + 1) % aiStates.length;
    applyAiState(aiStates[aiStateIndex]);
  }, prefersReducedMotion ? 4800 : 3200);
}

function stopAiCycle() {
  if (!aiCycleTimer) return;
  window.clearInterval(aiCycleTimer);
  aiCycleTimer = undefined;
}

const aiObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        aiScene?.classList.add("is-animated");
        aiManagerNode?.classList.add("is-live");
        if (!aiAnimated) {
          aiAnimated = true;
          applyAiState(aiStates[aiStateIndex]);
        }
        startAiCycle();
      } else {
        stopAiCycle();
        aiManagerNode?.classList.remove("is-live");
      }
    });
  },
  { threshold: 0.35 }
);

if (aiScene) {
  aiObserver.observe(aiScene);
}

salesToggle?.addEventListener("click", () => {
  salesDrilldown?.classList.add("is-open");
});

salesClose?.addEventListener("click", () => {
  salesDrilldown?.classList.remove("is-open");
});

const modeButtons = Array.from(document.querySelectorAll(".mode-pill"));
const panels = Array.from(document.querySelectorAll("[data-panel]"));
const calendarScene = document.querySelector(".scene-calendar");
const listItems = document.querySelectorAll(".reveal-list");
const weekBars = document.querySelectorAll(".week-bar");
let modeIndex = 0;

function setCalendarMode(mode) {
  modeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === mode);
  });

  panels.forEach((panel) => {
    panel.classList.toggle("is-visible", panel.dataset.panel === mode);
  });

  if (!calendarScene) return;

  calendarScene.classList.toggle("day-mode", mode === "day");
  calendarScene.classList.toggle("week-mode", mode === "week");

  if (mode === "week") {
    weekBars.forEach((bar, index) => {
      window.setTimeout(() => bar.classList.add("is-grown"), index * 65);
    });
  } else {
    weekBars.forEach((bar) => bar.classList.remove("is-grown"));
  }

  if (mode === "day") {
    listItems.forEach((item, index) => {
      window.setTimeout(() => item.classList.add("is-visible"), index * 120);
    });
  } else {
    listItems.forEach((item) => item.classList.remove("is-visible"));
  }
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modeIndex = modeButtons.indexOf(button);
    setCalendarMode(button.dataset.mode);
  });
});

if (!prefersReducedMotion) {
  window.setInterval(() => {
    modeIndex = (modeIndex + 1) % modeButtons.length;
    setCalendarMode(modeButtons[modeIndex].dataset.mode);
  }, 3400);
}

if (modeButtons.length > 0) {
  setCalendarMode(modeButtons[modeIndex].dataset.mode);
}

const roleCards = Array.from(document.querySelectorAll("[data-role-card]"));

function selectRole(index) {
  roleCards.forEach((card, cardIndex) => {
    card.classList.toggle("is-front", cardIndex === index);
    const offset = cardIndex - index;
    const rotation = offset === 0 ? 0 : offset < 0 ? -11 : 11;
    const translate = offset === 0 ? 60 : -24 * Math.abs(offset);
    const scale = offset === 0 ? 1.03 : 0.95;
    card.style.transform = `rotateY(${rotation}deg) translateZ(${translate}px) scale(${scale})`;
    card.style.opacity = offset === 0 ? "1" : "0.84";
    card.style.filter = offset === 0 ? "blur(0px)" : `blur(${Math.min(Math.abs(offset) * 1.6, 2.4)}px)`;
  });
}

roleCards.forEach((card, index) => {
  card.addEventListener("click", () => selectRole(index));
});

let roleIndex = 0;
selectRole(roleIndex);

if (!prefersReducedMotion) {
  window.setInterval(() => {
    roleIndex = (roleIndex + 1) % roleCards.length;
    selectRole(roleIndex);
  }, 3000);
}

const feedCards = document.querySelectorAll(".feed-card");
feedCards.forEach((card) => {
  const likeButton = card.querySelector("[data-like-button]");
  const commentToggle = card.querySelector("[data-comment-toggle]");
  const commentField = card.querySelector("[data-comment-field]");

  likeButton?.addEventListener("click", () => {
    likeButton.classList.toggle("is-liked");
  });

  commentToggle?.addEventListener("click", () => {
    commentField?.classList.toggle("is-open");
  });
});

const chatStack = document.querySelector("[data-chat-stack]");
const draftText = document.querySelector("[data-draft-text]");
const composerDraft = document.querySelector("[data-composer-draft]");
const composerPlaceholder = document.querySelector(".composer-placeholder");
const composerCursor = document.querySelector(".composer-cursor");
const sendButton = document.querySelector("[data-send-button]");
const selfTyping = document.querySelector('[data-chat-typing="self"]');
const otherTyping = document.querySelector('[data-chat-typing="other"]');
const draftBubble = document.querySelector('[data-chat-bubble="draft"]');
const replyBubble = document.querySelector('[data-chat-bubble="reply"]');
const initialBubble = document.querySelector(".message-row.initial");
const messageScene = document.querySelector(".scene-messages");
const messageCopy = "Yes. I’ve got the close checklist too.";
let messageLoopStarted = false;
let messageRunToken = 0;

function sleep(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function scrollConversation() {
  if (!chatStack || prefersReducedMotion) return;
  chatStack.style.transform = "translateY(-24px)";
}

function resetConversation() {
  if (!chatStack || !draftText || !composerDraft || !composerPlaceholder || !composerCursor || !sendButton || !selfTyping || !otherTyping || !draftBubble || !replyBubble) {
    return;
  }

  chatStack.style.transform = "translateY(0)";
  draftText.textContent = "";
  composerDraft.textContent = "";
  composerPlaceholder.style.opacity = "1";
  composerPlaceholder.style.transform = "translateX(0)";
  composerCursor.style.opacity = "0";
  sendButton.classList.remove("is-armed", "is-fired");
  selfTyping.classList.remove("is-visible");
  otherTyping.classList.remove("is-visible");
  draftBubble.classList.remove("is-visible");
  replyBubble.classList.remove("is-visible");
}

async function runConversationDemo() {
  if (prefersReducedMotion || messageLoopStarted) return;
  messageLoopStarted = true;
  const token = ++messageRunToken;

  while (token === messageRunToken && messageScene?.classList.contains("in-view")) {
    resetConversation();
    await sleep(700);
    if (token !== messageRunToken) break;

    selfTyping?.classList.add("is-visible");
    composerCursor.style.opacity = "1";
    composerPlaceholder.style.opacity = "0";
    composerPlaceholder.style.transform = "translateX(-10px)";

    for (const char of messageCopy) {
      if (token !== messageRunToken) break;
      composerDraft.textContent += char;
      await sleep(38);
    }
    if (token !== messageRunToken) break;

    await sleep(280);
    if (token !== messageRunToken) break;
    selfTyping?.classList.remove("is-visible");
    sendButton?.classList.add("is-armed");
    await sleep(240);
    if (token !== messageRunToken) break;
    sendButton?.classList.add("is-fired");
    draftText.textContent = composerDraft.textContent;
    draftBubble?.classList.add("is-visible");
    composerDraft.textContent = "";
    composerCursor.style.opacity = "0";
    scrollConversation();

    await sleep(420);
    if (token !== messageRunToken) break;
    sendButton?.classList.remove("is-fired");
    otherTyping?.classList.add("is-visible");
    await sleep(1050);
    if (token !== messageRunToken) break;
    otherTyping?.classList.remove("is-visible");
    replyBubble?.classList.add("is-visible");
    scrollConversation();

    await sleep(2600);
  }

  messageLoopStarted = false;
}

const messageObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        initialBubble?.classList.add("is-visible");
        runConversationDemo();
      } else {
        messageRunToken += 1;
        messageLoopStarted = false;
        resetConversation();
      }
    });
  },
  { threshold: 0.45 }
);

if (messageScene) {
  messageObserver.observe(messageScene);
}
