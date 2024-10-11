document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("h1").style.fontSize = "4vw";
    var paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(function(paragraph) {
        paragraph.style.fontSize = "1vw";
    });
});
