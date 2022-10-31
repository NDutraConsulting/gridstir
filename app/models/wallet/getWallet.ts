export async function getWallet(user) {
  const getURL = `/wallet/${user.id}`;

  await fetch(getURL)
    .then(response => response.json())
    .then(response => {
      return response;
    })
    .catch(_err => {
      console.log('Failed to fetch Rental Logs from server.');
    });
  return { err: 'Server Error please try again later.' };
}
