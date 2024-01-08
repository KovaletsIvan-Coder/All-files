let startValue = 0;
const renderInput = () => {
  getResult();
  const inp = document.querySelector(".inp");
  const plus = document.querySelector(".plus");
  const minus = document.querySelector(".minus");
  inp.value = startValue;
  plus.addEventListener("click", () => {
    inp.value++;
    saveResult();
  });
  minus.addEventListener("click", () => {
    inp.value--;
    saveResult();
  });
};
const saveResult = () => {
  const inp = document.querySelector(".inp");
  localStorage.setItem("input", inp.value);
};

const getResult = () => {
  const inp = document.querySelector(".inp");

  let localSt = localStorage.getItem("input");
  startValue = localSt;

  console.log(localStorage.getItem("input"));
};
renderInput();

const cookie1 = document.cookie;
console.log(cookie1);
