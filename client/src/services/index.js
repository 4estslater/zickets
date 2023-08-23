
export const getTickets = () => fetch('/tickets');

export const createTicket = () => {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({ title: 'React Hooks POST Request Example' })
      };
      fetch('/tickets', requestOptions)
}