
export const getTickets = () => fetch('/tickets');

export const createTicket = (body) => {
  const requestOptions = {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(body)
  };
  return fetch('/tickets', requestOptions)
}