let tickets = [];
let id = 0

// tickets CRUD
exports.createTicket = ({uid, userName, email, description}) => {
    tickets = [
        ...tickets,
        {
            id: getUniqueId(),
            status: 'new',
            uid,
            userName,
            email,
            description
        }
    ];
    console.log(`TIKCETS: ${JSON.stringify(tickets)}`)
    return '200';
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
