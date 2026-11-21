/* ==========================================================
   D팀 포트폴리오 - 활동 기록 데이터 및 렌더러
   [작성 유의사항]
   - 문자열 값에 &, <, >, " 같은 특수문자 사용을 피하세요.
   - image를 넣으면 상세 내용 아래 사진이 표시되고, 비우면 숨겨집니다.
   ========================================================== */

(function () {
  "use strict";

  var ACTIVITY_WEEKS = [
    {
      id: "week-1",
      label: "1주차",
      items: [
        { id: "w1-1", title: "", tag: "", date: "", summary: "", image: "", imageCaption: "" },
        { id: "w1-2", title: "", tag: "", date: "", summary: "", image: "", imageCaption: "" },
        { id: "w1-3", title: "", tag: "", date: "", summary: "", image: "", imageCaption: "" }
      ]
    },
    {
      id: "week-2",
      label: "2주차",
      items: [
        { id: "w2-1", title: "", tag: "", date: "", summary: "", image: "", imageCaption: "" },
        { id: "w2-2", title: "", tag: "", date: "", summary: "", image: "", imageCaption: "" },
        { id: "w2-3", title: "", tag: "", date: "", summary: "", image: "", imageCaption: "" }
      ]
    },
    {
      id: "week-3",
      label: "3주차",
      items: [
        { id: "w3-1", title: "", tag: "", date: "", summary: "", image: "", imageCaption: "" },
        { id: "w3-2", title: "", tag: "", date: "", summary: "", image: "", imageCaption: "" },
        { id: "w3-3", title: "", tag: "", date: "", summary: "", image: "", imageCaption: "" }
      ]
    }
  ];

  var sidebarEl = document.getElementById("activity-sidebar");
  var viewerEl = document.getElementById("activity-viewer");

  function renderImage(item) {
    if (!item.image) { return ""; }
    var caption = item.imageCaption ? "<figcaption>" + item.imageCaption + "</figcaption>" : "";
    return (
      '<figure class="log-photo">' +
        '<img class="thumb" src="' + item.image + '" alt="' + (item.imageCaption || item.title) + '" loading="lazy">' +
        caption +
      "</figure>"
    );
  }

  function renderDetail(item, isActive) {
    return (
      '<article id="' + item.id + '" class="log-detail' + (isActive ? " is-active" : "") + '">' +
        '<div class="log-header">' +
          '<span class="tag">' + item.tag + "</span>" +
          "<time>" + item.date + "</time>" +
        "</div>" +
        '<h2 class="log-title">' + item.title + "</h2>" +
        "<p>" + item.summary + "</p>" +
        renderImage(item) +
      "</article>"
    );
  }

  function render() {
    var items = [];
    ACTIVITY_WEEKS.forEach(function (w) { items = items.concat(w.items); });
    var firstId = items[0].id;

    sidebarEl.innerHTML = ACTIVITY_WEEKS.map(function (w) {
      var subs = w.items.map(function (item) {
        return '<li><button type="button" class="sub-item' +
          (item.id === firstId ? " is-active" : "") +
          '" data-target="' + item.id + '">' + item.title + "</button></li>";
      }).join("");
      return '<div class="week-group"><div class="week-heading">' + w.label + '</div><ul class="sub-list">' + subs + "</ul></div>";
    }).join("");

    viewerEl.innerHTML = items.map(function (item) {
      return renderDetail(item, item.id === firstId);
    }).join("");
  }

  sidebarEl.addEventListener("click", function (e) {
    var btn = e.target.closest(".sub-item");
    if (!btn) { return; }
    var targetId = btn.getAttribute("data-target");

    sidebarEl.querySelectorAll(".sub-item").forEach(function (b) { b.classList.toggle("is-active", b === btn); });
    viewerEl.querySelectorAll(".log-detail").forEach(function (p) { p.classList.toggle("is-active", p.id === targetId); });
  });

  render();
})();
