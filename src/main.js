const { getElementById } = require("domutils");

function copyCode () {
  const copiedCode = document.getElementById("code");
  copiedCode.select();
  document.execCommand("copy");

  document.getElementById("copyCode").innerHTML = "COPIED";
}

document.getElementById("copyCode").addEventListener('click', copyCode);