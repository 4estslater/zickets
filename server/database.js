let tickets = [];
let id = 0

// tickets CRUD
exports.createTicket = ({uid, userName, email, description}) => {
    tickets = [
        ...tickets,
        {
            id: getUniqueId(),
            updatedAt: Date.now(),
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
    return tickets.sort((a,b) => {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
    });;
};

exports.updateTicket = ({id, comment, status}) => {
    const i = tickets.findIndex(x => x.id == id);
    const item = {...tickets[i]};
    item.comment = comment;
    item.status = status;
    item.updatedAt = Date.now()
    tickets[i] = item;
    return '201';
};

//helpers
const getUniqueId = () => {
    return `${id++}`;
}
