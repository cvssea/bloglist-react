const blogs = [
  {
    author: 'Miss Thrifty',
    id: '5d220ade9a84672e271eed24',
    likes: 5,
    title: 'The Mythbuster’s Guide to Saving Money on Energy Bills',
    url: 'https://www.miss-thrifty.co.uk/the-mythbusters-guide-to-saving-money-on-energy-bills/',
    user: {
      username: 'dlama',
      name: 'Dalai Lama',
      id: '5d1e50b76650b511fb84efe1',
    },
  },
];

const setToken = jest.fn();

const getAll = () => Promise.resolve(blogs);

export default { getAll, setToken };
