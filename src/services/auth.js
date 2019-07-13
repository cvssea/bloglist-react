const baseUrl = '/api/login/';

const login = async (credentials) => {
  try {
    console.log('logging in...');
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();
    if (data.error) throw data.error;
    return data;
  } catch (e) {
    throw e;
  }
};

const logout = setUser => () => {
  window.localStorage.removeItem('bloglistUser');
  setUser(null);
};

export default { login, logout };
