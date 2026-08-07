// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract UserStorage{
    // address public Address=0x5FbDB2315678afecb367f032d93F642f64180aa3;
    mapping(address=>string) public Details;
    
    function setName(string memory _name) public {
        Details[msg.sender]=_name;
    }

    function getMyName() public view returns(string memory){
        return Details[msg.sender];
    }
}