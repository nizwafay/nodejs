const accounts = []

function createAccount (account) {
  accounts.push(account)
  return account
}

function getAccount (username) {
  let matchedAccount

  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].username === username) {
      matchedAccount = accounts[i]
    }

    return matchedAccount
  }
}

function deposit (account, amount) {
  if (typeof amount === 'number') {
    account.balance += amount
  } else {
    console.log('Deposit failed. Amount is not a number')
  }
}

function withdraw (account, amount) {
  if (typeof amount === 'number') {
    account.balance -= amount
  } else {
    console.log('Withdraw failed. Amount is not a number')
  }
}

function getBalance (account) {
  return account.balance
}

function createBalanceGetter (account) {
  return function () {
    return account.balance
  }
}

const andrew = createAccount({
  username: 'Andrew',
  balance: 0
})

deposit(andrew, 120)
withdraw(andrew, 'my string')

const andrew2 = getAccount('Andrew')
const andrew2Balance = createBalanceGetter(andrew2)
console.log(andrew2Balance())
withdraw(andrew, 11)
console.log(andrew2Balance())
