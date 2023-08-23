let tickets = [];
let id = 0

// tickets CRUD
exports.createTicket = () => {
    tickets = [
        ...tickets,
        {
            id: getUniqueId(),
            status: 'new'
        }
    ];
    return tickets;
};

exports.getTickets = () => {
    return tickets;
};

exports.updateTicket = (id) => {
    const i = tickets.findIndex(x => x.id == item.id);
    const item = {...tickets[i]};
    item.status = 'old';
    tickets[index] = item;  
};

//helpers
const getUniqueId = () => {
    return `${id++}`;
}
