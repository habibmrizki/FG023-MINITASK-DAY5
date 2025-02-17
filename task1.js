// spread operator
const account = {
  id: 2,
  username: "habib",
  password: "habibboboho",
  changePassword: function (newPassword) {
    this.password = newPassword;
    return {
      ...account,
    };
  },
};

account.changePassword("habib123");

// destructing
const { username, password } = account;
console.log(username, password);
