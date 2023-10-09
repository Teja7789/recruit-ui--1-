// api/authApi.js
const users = [
    { id: 1, username: 'user1', password: 'password1', role: 'user' },
    { id: 2, username: 'user2', password: 'password2', role: 'user' },
    { id: 3, username: 'admin', password: 'adminpassword', role: 'admin' },
  ];
  
  export const authApi = {
    login: (username, password) => {
      return new Promise((resolve, reject) => {
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
          // Simulate token generation
          const token = `mockToken_${user.id}_${Date.now()}`;
          resolve({ ok: true, data: { token } });
        } else {
          reject({ ok: false, error: 'Invalid credentials' });
        }
      });
    },
  };
  