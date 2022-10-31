export async function getUser() {
  const getURL = '/users';

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

class UserData {
  static id: number = 1;
  static firstName: string | null = 'first name';
  static lastName: string | null = 'last name';
}

export function getUserId() {
  return UserData.id;
}

// Add getters and setters as needed
