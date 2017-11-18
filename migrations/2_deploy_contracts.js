// var ProofOfExistence1 = artifacts.require("./ProofOfExistence1.sol");
// var ProofOfExistence2 = artifacts.require("./ProofOfExistence2.sol");
var ProofOfExistence3 = artifacts.require("./ProofOfExistence3.sol");
// var Purchase = artifacts.require("./Purchase.sol");
var Mortal = artifacts.require("./Mortal.sol");
var Greet = artifacts.require("./Greet.sol");

module.exports = function(deployer, network, accounts) {
  // deployer.deploy(ProofOfExistence1);
  // deployer.deploy(ProofOfExistence2);
  deployer.deploy(ProofOfExistence3);
  // deployer.deploy(Purchase);
  deployer.deploy(Mortal);
  deployer.deploy(Greet, accounts[0]);
};