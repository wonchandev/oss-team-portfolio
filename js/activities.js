/* ==========================================================
   D팀 포트폴리오 - 활동 기록 데이터 및 렌더러
   [작성 유의사항]
   - 문자열 값에 &, <, >, " 같은 특수문자 사용을 피하세요.
   - image를 넣으면 상세 내용 아래 사진이 표시되고, 비우면 숨겨집니다.
   ========================================================== */

(function () {
  "use strict";

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
          '" data-target="' + item.id + '" aria-controls="' + item.id +
          '" aria-pressed="' + String(item.id === firstId) + '">' + item.title + "</button></li>";
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

    sidebarEl.querySelectorAll(".sub-item").forEach(function (b) {
      var selected = b === btn;
      b.classList.toggle("is-active", selected);
      // 시각적인 선택 표시와 보조기기에 전달되는 상태를 함께 갱신합니다.
      b.setAttribute("aria-pressed", String(selected));
    });
    viewerEl.querySelectorAll(".log-detail").forEach(function (p) { p.classList.toggle("is-active", p.id === targetId); });
  });

  render();
})();
