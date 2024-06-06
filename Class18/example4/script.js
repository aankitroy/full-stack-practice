let ticket = document.querySelector(".ticket-cont");
let colors = ["lightpink", "lightgreen", "lightblue", "black"];

handleColor(ticket)


function handleColor(ticket) {
    let ticketColorBand = ticket.querySelector(".ticket-color");
  
    ticketColorBand.addEventListener("click", function () {
      // Write code to select the next color from the colors array here--
        let currentColor = ticketColorBand.classList[1];
        let idx = colors.indexOf(currentColor);
        idx++;
        idx = idx % 4;
        let nextColor = colors[idx];
        ticketColorBand.classList.remove(currentColor);
        ticketColorBand.classList.add(nextColor);
    });
}