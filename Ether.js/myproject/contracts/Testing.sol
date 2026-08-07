// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract Testing{
    uint value;
    constructor(uint _value){
        value=_value;
    }
    function test(uint _num) public{
        value=_num;
    }
    function gettest() public view returns(uint){
        return value;
    }
}   