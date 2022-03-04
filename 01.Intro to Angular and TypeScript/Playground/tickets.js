var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
function ticketsManager(inputArr, sortParam) {
    var tickets = [];
    inputArr.forEach(function (e) {
        var params = e.split('|');
        var destination = params[0];
        var price = Number(params[1]);
        var status = params[2];
        tickets.push(new Ticket(destination, price, status));
    });
    if (sortParam == 'price') {
        return tickets.sort(function (a, b) { return a.price - b.price; });
    }
    else {
        return tickets.sort(function (a, b) { return a[sortParam].localeCompare(b[sortParam]); });
    }
}
console.log(ticketsManager([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination'));
