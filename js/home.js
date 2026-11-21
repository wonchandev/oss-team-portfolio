/* ==========================================================
   메인 페이지(index.html) 전용 스크립트
   히어로의 터미널 명령어가 한 글자씩 입력되는 효과를 줍니다.
   - 움직임 줄이기 설정이면 효과 없이 그대로 보여줍니다.
   - 스크립트가 동작하지 않아도 내용은 HTML에 모두 들어 있습니다.
   ========================================================== */

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var lines = document.querySelectorAll(".term-line[data-type]");
  if (reduceMotion || lines.length === 0) { return; }

  var TYPE_DELAY = 55;   // 글자 간격(ms)
  var LINE_DELAY = 350;  // 줄 간격(ms)

  // 입력 전 상태로 되돌리기: 프롬프트는 두고 명령어 글자만 비웁니다.
  var items = Array.prototype.map.call(lines, function (line) {
    var prompt = line.querySelector(".prompt");
    var full = line.textContent.replace(prompt.textContent, "").trim();
    var out = line.nextElementSibling;
    line.textContent = "";
    line.appendChild(prompt);
    line.appendChild(document.createTextNode(" "));
    if (out && out.classList.contains("term-out")) { out.hidden = true; }
    return { line: line, text: full, out: out };
  });

  function typeLine(index) {
    if (index >= items.length) { return; }
    var item = items[index];
    var pos = 0;
    var textNode = item.line.lastChild;
    item.line.classList.add("typing");

    var timer = setInterval(function () {
      pos += 1;
      textNode.nodeValue = " " + item.text.slice(0, pos);
      if (pos >= item.text.length) {
        clearInterval(timer);
        item.line.classList.remove("typing");
        if (item.out && item.out.classList.contains("term-out")) { item.out.hidden = false; }
        setTimeout(function () { typeLine(index + 1); }, LINE_DELAY);
      }
    }, TYPE_DELAY);
  }

  typeLine(0);
})();
