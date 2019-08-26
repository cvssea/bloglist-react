/* eslint-disable consistent-return */
const baseUrl = '/api/users';

const getUsers = async () => {
  try {
    const response = await fetch(baseUrl);
    const users = response.json();
    return users;
  } catch (e) {
    console.log('No users fetched.', e);
  }
};

export default { getUsers };
