pragma solidity ^0.4.17;

contract Mortal {
  address owner;
  function Mortal() {
    owner = msg.sender;
  }
  function kill() {
    if (msg.sender == owner) {
      selfdestruct(owner);
    }
  }
}
