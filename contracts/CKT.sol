pragma solidity ^0.4.24;

import "zeppelin-solidity/contracts/token/ERC721/ERC721BasicToken.sol";

contract Ckt is ERC721BasicToken {
  string public constant name = "CryptoKittiesTest";
  string public constant symbol = "CKT";
}
