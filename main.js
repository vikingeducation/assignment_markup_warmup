if (window.attachEvent) {
  document.attachEvent("onreadystatechange", function() {
    if (document.readyState === "complete") {
      document.detachEvent("onreadystatechange", arguments.callee);
      init();
    }
  });
} else {
  document.addEventListener("DOMContentLoaded", function() {
    init();
  })
}


function min_height() {
  var body = document.body,
    html = document.documentElement;
  var tallest_height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  var shortest_height = Math.min(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  if (tallest_height !== shortest_height) 
    tallest_height += 48
  body = document.getElementById("body");
  body.style.height = tallest_height + "px";
}

function init() {
  min_height();
}