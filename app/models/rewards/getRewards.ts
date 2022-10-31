export async function getRewards(userId) {
  const getURL = `/rewards/${userId}`;

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
