for (let i = 0; i <= 12; i++) {}

const submit = document.getElementById("submit");

submit.onclick = function () {
  //   for (let i = 2; i <= 12; i++) {
  //     let numCheck = document.querySelector(".check" + i);
  //   }

  const num = document.getElementById("num").value;

  for (let i = 2; i <= 12; i++) {
    let numCheck = document.querySelector(".check" + i);
    numCheck.innerHTML = "";
    if (num % i == 0) {
      numCheck.append("/");
    } else {
      numCheck.append("X");
    }
  }
};
