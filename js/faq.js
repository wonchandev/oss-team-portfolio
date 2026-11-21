/* ==========================================================
   D팀 포트폴리오 - FAQ 데이터 및 펼치기/접기 스크립트
   [작성 유의사항]
   - 문자열 값에 &, <, >, " 같은 특수문자 사용을 피하세요.
   - open: true 로 설정하면 처음부터 펼쳐진 상태로 표시됩니다.
   ========================================================== */

(function () {
  "use strict";

  var FAQ_ITEMS = [
    {
      question: "이 포트폴리오 웹사이트는 어떤 콘셉트와 기술로 만들어졌나요?",
      answer: "개발 일지(D = Dev Log) 콘셉트로 제작되었으며, 외부 프레임워크 없이 HTML, CSS, JavaScript만으로 구성했습니다.",
      open: false
    },
    {
      question: "공통 헤더·푸터와 색상·폰트 스타일은 어디서 관리하나요?",
      answer: "공통 헤더·푸터와 메뉴는 js/common.js에서 자동으로 생성하고, 색상·폰트 변수와 기본 레이아웃은 css/style.css에서 관리합니다.",
      open: false
    },
    {
      question: "페이지별 전용 스타일은 어떻게 작성해야 팀원과 충돌하지 않나요?",
      answer: "페이지마다 css/페이지이름.css 파일을 따로 만들어 연결하면 다른 팀원의 스타일이나 공통 스타일과 충돌하지 않고 작업할 수 있습니다.",
      open: false
    },
  ];

  var faqListEl = document.getElementById("faq-list");

  function render() {
    faqListEl.innerHTML = FAQ_ITEMS.map(function (item, idx) {
      var openClass = item.open ? " is-open" : "";
      var expanded = item.open ? "true" : "false";
      var panelId = "faq-panel-" + idx;

      return (
        '<article class="card faq-item' + openClass + '">' +
          '<button type="button" class="faq-question" aria-expanded="' + expanded + '" aria-controls="' + panelId + '">' +
            "<span>" + item.question + "</span>" +
            '<span class="faq-icon" aria-hidden="true">+</span>' +
          "</button>" +
          '<div id="' + panelId + '" class="faq-answer">' +
            "<p>" + item.answer + "</p>" +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  faqListEl.addEventListener("click", function (e) {
    var btn = e.target.closest(".faq-question");
    if (!btn) { return; }

    var item = btn.closest(".faq-item");
    var isOpen = item.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  render();
})();