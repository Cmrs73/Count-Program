const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const Domain = document.getElementById("Domain");
let count = 0;
increaseBtn.onclick = function () {
  count++;
  Domain.textContent = count;
};
decreaseBtn.onclick = function () {
  count--;
  Domain.textContent = count;
};
resetBtn.onclick = function () {
  count= 0;
  Domain.textContent = count;
};