console.log('starting password manager')

var storage = require('node-persist')
storage.initSync()

// account.name Facebook
// account.username User12!
// account.password Password123!

var account = {
  name: 'Facebook',
  username: 'User12!',
  password: 'Password123!'
}

function createAccount (account) {
  var accounts = storage.getItemSync('accounts')

  // if accounts is undefined (use typeof)
  //  set accounts = []
  if (typeof accounts === 'undefined') {
    accounts = []
  }

  // push on new account
  accounts.push(account)
  storage.setItemSync('accounts', accounts)

  // return account
  return account
}

function getAccount (accountName) {
  // var accounts use getItemSync
  var accounts = storage.getItemSync('accounts')

  for (var i = 0; i < accounts.length; i++) {
    if (accounts[i].name === accountName) {
      return accounts[i]
    }
  }
}

// createAccount(account)
var acc = getAccount('Facebook')
console.log(acc)
console.log(storage.getItemSync('accounts'))
