/* ==========================================================
   D팀 포트폴리오 - 프로젝트 검색·필터 (projects.html)
   - 검색어: 제목·설명·기술 태그에서 찾습니다.
   - 분류 필터: 전체 / 팀 프로젝트 / 개인 프로젝트
   - 기술 필터: 카드의 data-tags 값을 모아 자동으로 만듭니다.
   카드는 projects.html의 data-category, data-tags 속성을 사용합니다.
   ========================================================== */

(function () {
  "use strict";

  var list = document.getElementById("project-list");
  var searchInput = document.getElementById("project-search");
  var categoryBox = document.getElementById("category-filter");
  var techBox = document.getElementById("tech-filter");
  var countEl = document.getElementById("project-count");
  var emptyEl = document.getElementById("project-empty");
  var resetBtn = document.getElementById("filter-reset");
  if (!list || !searchInput || !categoryBox || !techBox) { return; }

  var cards = Array.prototype.slice.call(list.querySelectorAll(".project-card"));
  var state = { query: "", category: "all", tech: "all" };

  // 카드별 검색 대상 텍스트를 미리 만들어 둡니다.
  // 스크린리더 전용 숨김 문구("새 탭" 등)는 검색 대상에서 제외합니다.
  function searchText(card) {
    var clone = card.cloneNode(true);
    Array.prototype.forEach.call(clone.querySelectorAll(".visually-hidden"), function (el) {
      el.parentNode.removeChild(el);
    });
    return clone.textContent.replace(/\s+/g, " ").toLowerCase();
  }

  var index = cards.map(function (card) {
    return {
      el: card,
      category: card.getAttribute("data-category") || "",
      tags: (card.getAttribute("data-tags") || "").split(/\s+/).filter(Boolean),
      text: searchText(card)
    };
  });

  var TECH_LABELS = {
    html: "HTML", css: "CSS", javascript: "JavaScript", github: "GitHub",
    react: "React", typescript: "TypeScript", django: "Django",
    python: "Python", mariadb: "MariaDB", llm: "LLM",
    java: "Java", gps: "GPS", sql: "SQL", json: "JSON"
  };

  function techLabel(key) {
    return TECH_LABELS[key] || key;
  }

  function makeButton(group, value, label) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "filter-btn";
    btn.setAttribute("data-value", value);
    btn.setAttribute("aria-pressed", "false");
    btn.textContent = label;
    group.appendChild(btn);
    return btn;
  }

  function buildTechButtons() {
    var seen = {};
    index.forEach(function (item) {
      item.tags.forEach(function (t) { seen[t] = true; });
    });
    makeButton(techBox, "all", "전체");
    Object.keys(seen).sort().forEach(function (t) {
      makeButton(techBox, t, techLabel(t));
    });
  }

  function syncPressed(group, value) {
    Array.prototype.forEach.call(group.querySelectorAll(".filter-btn"), function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-value") === value));
    });
  }

  function matches(item) {
    if (state.category !== "all" && item.category !== state.category) { return false; }
    if (state.tech !== "all" && item.tags.indexOf(state.tech) === -1) { return false; }
    if (state.query && item.text.indexOf(state.query) === -1) { return false; }
    return true;
  }

  function render() {
    var shown = 0;
    index.forEach(function (item) {
      var ok = matches(item);
      item.el.hidden = !ok;
      if (ok) { shown += 1; }
    });

    if (countEl) { countEl.textContent = "프로젝트 " + shown + "개"; }
    if (emptyEl) { emptyEl.hidden = shown !== 0; }
    list.hidden = shown === 0;

    var filtered = state.query !== "" || state.category !== "all" || state.tech !== "all";
    if (resetBtn) { resetBtn.hidden = !filtered; }

    syncPressed(categoryBox, state.category);
    syncPressed(techBox, state.tech);
  }

  function reset() {
    state.query = "";
    state.category = "all";
    state.tech = "all";
    searchInput.value = "";
    render();
    // 초기화 버튼이 숨겨진 뒤에도 키보드 사용을 이어갈 수 있게 합니다.
    searchInput.focus();
  }

  searchInput.addEventListener("input", function () {
    state.query = searchInput.value.trim().toLowerCase();
    render();
  });

  // Esc로 검색어 지우기
  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && searchInput.value) {
      searchInput.value = "";
      state.query = "";
      render();
    }
  });

  categoryBox.addEventListener("click", function (e) {
    var btn = e.target.closest(".filter-btn");
    if (!btn) { return; }
    state.category = btn.getAttribute("data-value");
    render();
  });

  techBox.addEventListener("click", function (e) {
    var btn = e.target.closest(".filter-btn");
    if (!btn) { return; }
    state.tech = btn.getAttribute("data-value");
    render();
  });

  if (resetBtn) { resetBtn.addEventListener("click", reset); }

  buildTechButtons();
  render();
})();
