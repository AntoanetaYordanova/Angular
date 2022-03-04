class Ticket {
    public destination: string;
    public price: number;
    public status: string;

    constructor(destination: string, price: number, status: string){
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function ticketsManager(inputArr : string[], sortParam: string) {
    const tickets = [];

    inputArr.forEach(e => {
        const params = e.split('|');
        const destination: string = params[0];
        const price: number = Number(params[1]);
        const status: string = params[2];
        tickets.push(new Ticket(destination, price, status));
    });

    if(sortParam == 'price') {
        return tickets.sort((a, b) => a.price - b.price);
    } else {
        return tickets.sort((a, b) => a[sortParam].localeCompare(b[sortParam]));
    }
}

console.log(ticketsManager([
    'Philadelphia|94.20|available',
     'New York City|95.99|available',
     'New York City|95.99|sold',
     'Boston|126.20|departed'
    ],
    'destination'));
