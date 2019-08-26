const baseUrl = '/api/login/';

const login = async (credentials) => {
  try {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();
    if (data.error) throw data.error;

    console.log('setting storage');
    window.localStorage.setItem('bloglistUser', JSON.stringify(data));
    return data;
  } catch (e) {
    throw e;
  }
};

const logout = () => {
  window.localStorage.removeItem('bloglistUser');
};

export default { login, logout };
