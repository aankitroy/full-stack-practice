// WRITE CODE HERE ===========================================
const ticketsArr = JSON.parse(localStorage.getItem("ticketsDB")) || [];


// ADDING TICKET TO DOM
function createTicket(ticketTask, ticketColor, ticketID) {
    let id = ticketID || shortid();
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class", "ticket-cont");
  
    ticketCont.innerHTML = `<div class="ticket-color ${ticketColor}"></div>
         <div class="ticket-id">${id}</div>
         <div class="task-area">${ticketTask}</div>`;
  
    let mainCont = document.querySelector(".main-cont");
    mainCont.append(ticketCont);
  }

  ticketsArr.forEach(function (ticket) {    
    createTicket(ticket.ticketTask, ticket.ticketColor, ticket.ticketID);
});