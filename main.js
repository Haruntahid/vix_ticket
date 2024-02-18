const seatBtns = document.querySelectorAll(".seat_btn");
let seatCount = 0;
let updateTicketPrice = 0;

for (let seatBtn of seatBtns) {
  seatBtn.addEventListener("click", function (event) {
    const clickBtn = event.target.id;
    event.target.style.backgroundColor = "#1DD100";
    event.target.style.color = "#000";
    event.target.setAttribute("disabled", "true");
    const avilableSeat = getInnerTextById("total_seat");
    const remainingSeat = avilableSeat - 1;
    document.getElementById("total_seat").innerText = remainingSeat;
    seatCount += 1;
    if (seatCount > 4) {
      alert("You can't buy more than 4 tickets");
      // event.target.classList.remove = "backgroundColor";
      return;
    }

    // seat counter
    document.getElementById("seat_counter").innerText = seatCount;

    // creat seats name price and class
    const seatName = document.getElementById("select_seat");
    const addSeat = document.createElement("li");
    const addClass = document.createElement("li");
    const addPrice = document.createElement("li");
    const holder = document.createElement("ul");
    holder.style.display = "flex";
    holder.style.justifyContent = "space-between";
    holder.appendChild(addSeat);
    holder.appendChild(addClass);
    holder.appendChild(addPrice);
    seatName.appendChild(holder);
    addSeat.innerText = clickBtn;
    addClass.innerText = "Economy";
    addPrice.innerText = "550";

    // update ticket price
    const ticket = document.getElementById("ticket_price");
    let updateTicketPrice = seatCount * 550;
    ticket.innerText = updateTicketPrice;
  });
}

function getInnerTextById(id) {
  const element = parseInt(document.getElementById(id).innerText);
  return element;
}

//Apply Cupon check
let grandTotal = document.getElementById("grand_total");
// console.log(grandTotal);
const cuponBox = document.getElementById("cuponBox");
const discountHolder = document.getElementById("discount");
const ulCreate = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
ulCreate.style.display = "flex";
ulCreate.style.justifyContent = "space-between";
ulCreate.style.marginTop = "30px";
ulCreate.style.color = "green";
ulCreate.appendChild(li1);
ulCreate.appendChild(li2);
discount.appendChild(ulCreate);
const cuponBtn = document
  .getElementById("cupon_apply")
  .addEventListener("click", function () {
    const cupon = document.getElementById("cupon_input");
    const cuponValue = cupon.value;
    let cuponText = cuponValue.toLowerCase();
    if (seatCount !== 4) {
      alert("You must buy 4 ticket to apply promo code");
    } else if (cuponText == "new15") {
      updateTicketPrice = seatCount * 550 * 0.15;
      li1.innerText = "Discount";
      li2.innerText = updateTicketPrice;
      cuponBox.classList.add("hidden");
      grandTotal.innerText = seatCount * 550 - updateTicketPrice;
      console.log(grandTotal);
    } else if (cuponText == "couple20") {
      updateTicketPrice = seatCount * 550 * 0.2;
      li1.innerText = "Discount";
      li2.innerText = updateTicketPrice;
      cuponBox.classList.add("hidden");
    } else alert("invalid promo code");
  });
