// spread operator
const account = {
  id: 2,
  username: "habib",
  password: "habibboboho",
};

const newAccount = { ...account, password: "bobohohabib" };
console.log(newAccount);

// destructing
const { username, password } = account;
console.log(username, password);
