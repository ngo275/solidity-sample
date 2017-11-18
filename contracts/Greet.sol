pragma solidity ^0.4.17;

import "./Mortal.sol";

contract Greet is Mortal {
  string private greeting;
  
  function Greet(string _greeting) public {
    greeting = _greeting;
  }

  function setGreet(string _greeting) public {
    greeting = _greeting;
  }

  function greet() constant returns (string) {
    return greeting;
  }
}