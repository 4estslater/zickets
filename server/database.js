let tickets = [];
let id = 0

// tickets CRUD
exports.createTicket = ({uid, userName, email, description}) => {
    tickets = [
        ...tickets,
        {
            id: getUniqueId(),
            status: 'new',
            comment: '',
            uid,
            userName,
            email,
            description
        }
    ];
    return '200';
};

exports.getTickets = () => {
    return tickets;
};

exports.updateTicket = ({id, comment, status}) => {
    const i = tickets.findIndex(x => x.id == id);
    const item = {...tickets[i]};
    item.comment = comment;
    item.status = status;
    tickets[i] = item;
    return '201';
};

//helpers
const getUniqueId = () => {
    return `${id++}`;
}
