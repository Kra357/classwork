document.addEventListener("DOMContentLoaded", () => {
  changeClass();
});

function changeClass() {
  let rectangle_1 = document.querySelector("#rectangle1");
  let rectangle_2 = document.querySelector("#rectangle2");
  let rectangle_3 = document.querySelector("#rectangle3");
  let rectangle_4 = document.querySelector("#rectangle4");
  let rectangle_5 = document.querySelector("#rectangle5");
  let rectangle_6 = document.querySelector("#rectangle6");
  let rectangle_7 = document.querySelector("#rectangle7");
  let rectangle_8 = document.querySelector("#rectangle8");
  let rectangle_9 = document.querySelector("#rectangle9");
  let rectangle_10 = document.querySelector("#rectangle10");
  let button = document.querySelector(".button");

  button.addEventListener("click", () => {
    rectangle_1.classList.toggle("deformAnim1");
    rectangle_2.classList.toggle("deformAnim2");
    rectangle_3.classList.toggle("deformAnim3");
    rectangle_4.classList.toggle("deformAnim4");
    rectangle_5.classList.toggle("deformAnim5");
    rectangle_6.classList.toggle("deformAnim6");
    rectangle_7.classList.toggle("deformAnim7");
    rectangle_8.classList.toggle("deformAnim8");
    rectangle_9.classList.toggle("deformAnim9");
    rectangle_10.classList.toggle("deformAnim10");
  });

  document.getElementByClass("button").addEventListener("click", function () {
    this.textContent = "Нажато!";
  });
}
