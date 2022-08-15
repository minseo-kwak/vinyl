function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("btn-read-more");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "MORE";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "LESS";
      moreText.style.display = "inline";
    }
  }