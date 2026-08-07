// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "hardhat/console.sol";
contract NormalContract{
    string public num;
    constructor(string memory _num){
        num=_num;   
    }
    function setValue(string memory _num) public {
        console.log("it will return %s to %s",num,_num);
        num=_num;
    }
    function getValue() public view returns(string memory){
        return num;
    }
    
}