const baseUrl = '/api/blogs';

let token = null;

const setToken = (newToken) => {
  token = newToken;
};

const getAll = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
};

const create = async (blog) => {
  try {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        Authorization: `bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blog),
    });
    const data = await response.json();
    if (data.error) throw data.error;
  } catch (e) {
    console.log('BlogCreateError:', e);
  }
};

export default { setToken, getAll, create };
