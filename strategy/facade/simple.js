const accounts = (function () {
  const accounts = [];

  return {
    getAccountByName(name) {
      return accounts.find((a) => a.name === name);
    },

    createAccount(name, openingBalance) {
      const account = {
        accountId: accounts.length + 1,
        name,
        amount: openingBalance,
      };

      accounts.push(account);
      return account;
    },
  };
})();

const loansDepartment = (function () {
  const loans = [];
  return {
    creditCheck(accountId) {
      const existingLoan = loans.filter((loan) => loan.accountId === accountId);
      console.log({ existingLoan });
      return existingLoan.length > 0;
    },
    createLoan(accountId, amount) {
      const loan = { accountId, amount };

      loans.push(loan);
      return loan;
    },
  };
})();

/*
 * Build a facade that can create an account and take a loan in a single function
 */

const bankFacade = (function () {
  return {
    createLoan(name, amount) {
      let account = accounts.getAccountByName(name);
      if (account && loansDepartment.creditCheck(account.accountId)) {
        throw new Error("Your credit sucks");
      }

      if (!account) {
        account = accounts.createAccount(name, 0);
        console.log("Created new account", account);
      }
      return loansDepartment.createLoan(account.accountId, amount);
    },
  };
})();

console.log(bankFacade.createLoan("tom", 500));
console.log(bankFacade.createLoan("jane", 500));
