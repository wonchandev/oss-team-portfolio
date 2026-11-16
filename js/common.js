/* ==========================================================
   D팀 포트폴리오 - 공통 스크립트
   모든 페이지의 공통 헤더·푸터를 만들고, 메뉴 동작을 처리합니다.

   사용법: 각 페이지에 아래 세 가지를 넣습니다.
     <body>
       <div id="site-header"></div>
       <main id="main">...</main>
       <div id="site-footer"></div>
       <script src="js/common.js"></script>
     </body>
   메뉴를 추가·수정할 때는 아래 NAV_ITEMS만 고치면 모든 페이지에 반영됩니다.
   ========================================================== */

(function () {
  "use strict";

  var NAV_ITEMS = [
    { href: "index.html", label: "홈" },
    { href: "about.html", label: "팀 소개" },
    { href: "members.html", label: "팀원" },
    { href: "projects.html", label: "프로젝트" },
    { href: "activities.html", label: "활동 기록" },
    { href: "faq.html", label: "FAQ" }
  ];

  // 메뉴에 없는 하위 페이지는 상위 메뉴를 "현재 페이지"로 표시
  var PARENT_PAGE = {
    "project-detail.html": "projects.html"
  };

  var REPO_URL = "https://github.com/wonchandev/oss-team-portfolio";

  function currentPage() {
    var name = window.location.pathname.split("/").pop();
    if (!name) { name = "index.html"; }
    return PARENT_PAGE[name] || name;
  }

  function buildHeader() {
    var current = currentPage();
    var links = NAV_ITEMS.map(function (item) {
      var active = item.href === current ? ' aria-current="page"' : "";
      return '<li><a href="' + item.href + '"' + active + ">" + item.label + "</a></li>";
    }).join("");

    return (
      '<a class="skip-link" href="#main">본문 바로가기</a>' +
      '<header class="site-header">' +
        '<div class="container header-inner">' +
          '<a class="logo" href="index.html"><span class="logo-prompt">$</span> D-team</a>' +
          '<button class="nav-toggle" type="button" aria-expanded="false" ' +
            'aria-controls="site-nav" aria-label="메뉴 열기">' +
            "<span></span><span></span><span></span>" +
          "</button>" +
          '<nav id="site-nav" class="site-nav" aria-label="주요 메뉴"><ul>' + links + "</ul></nav>" +
        "</div>" +
      "</header>"
    );
  }

  function buildFooter() {
    var year = new Date().getFullYear();
    return (
      '<footer class="site-footer">' +
        '<div class="container footer-inner">' +
          '<p class="footer-brand"><span>$</span> D = Dev Log</p>' +
          "<p>&copy; " + year + " D팀. 오픈소스SW활용 팀 프로젝트.</p>" +
          '<p><a href="' + REPO_URL + '" target="_blank" rel="noopener noreferrer">GitHub 저장소</a></p>' +
        "</div>" +
      "</footer>"
    );
  }

  function setupMenu() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");
    if (!toggle || !nav) { return; }

    function setOpen(open) {
      nav.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
    }

    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("open"));
    });

    // 메뉴 항목을 누르거나 Esc를 누르면 닫기
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { setOpen(false); }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        setOpen(false);
        toggle.focus();
      }
    });

    // 화면이 넓어지면 모바일 메뉴 상태 초기화
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) { setOpen(false); }
    });
  }

  function init() {
    var header = document.getElementById("site-header");
    var footer = document.getElementById("site-footer");
    if (header) { header.innerHTML = buildHeader(); }
    if (footer) { footer.innerHTML = buildFooter(); }
    setupMenu();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
