import contract from 'truffle-contract'
import UsersContract from '../../build/contracts/Users.json'

const Users = {

  contract: null,

  instance: null,

  init: function () {
    let self = this

    return new Promise(function (resolve, reject) {
      self.contract = contract(UsersContract)
      self.contract.setProvider(new Web3.providers.HttpProvider('http://localhost:7545'))

      web3.eth.getAccounts(function (err, accounts) {
        if (err != null) {
          alert('There was an error fetching your accounts.')
          return
        }
  
        if (accounts.length === 0) {
          alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.")
          return
        }
        
        web3.eth.defaultAccount = accounts[0]
      })

      self.contract.deployed().then(instance => {
        self.instance = instance
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },

  exists: function (address) {
    let self = this

    return new Promise((resolve, reject) => {
      self.instance.exists.call(
        address || window.web3.eth.defaultAccount,
        {from: window.web3.eth.accounts[0]}
      ).then(exists => {
        resolve(exists)
      }).catch(err => {
        reject(err)
      })
    })
  },

  authenticate: function () {
    let self = this

    return new Promise((resolve, reject) => {
      self.instance.authenticate.call(
        {from: window.web3.eth.accounts[0]}
      ).then(pseudo => {
        resolve(window.web3.toUtf8(pseudo))
      }).catch(err => {
        reject(err)
      })
    })
  },

  create: function (pseudo) {
    let self = this

    return new Promise((resolve, reject) => {
      console.log("address is " + web3.eth.defaultAccount)
      self.instance.create(
        pseudo,
        {from: web3.eth.defaultAccount}
      ).then(tx => {
        resolve(tx)
      }).catch(err => {
        reject(err)
      })
    })
  },

  destroy: function () {
    let self = this

    return new Promise((resolve, reject) => {
      self.instance.destroy(
        {from: window.web3.eth.accounts[0]}
      ).then(tx => {
        resolve(tx)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default Users
