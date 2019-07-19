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

const like = async (likes, id) => {
  try {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ likes }),
    });
    if (!response.ok) throw new Error(`update error: ${response.status}`);
  } catch (e) {
    console.log('update error', e);
  }
};

const remove = async (id) => {
  try {
    await fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
  } catch (e) {
    console.log('delete error', e);
  }
};

export default {
  setToken,
  getAll,
  create,
  like,
  remove,
};
