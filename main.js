// console.log("connected");
const seatBtns = document.querySelectorAll(".seat_btn");
let seatCount = 0;
let ticketPrice = 0;

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
    const updateTicketPrice = seatCount * 550;
    ticket.innerText = updateTicketPrice;

    //Apply Cupon check

    // if()
  });
}

function getInnerTextById(id) {
  const element = parseInt(document.getElementById(id).innerText);
  return element;
}
