// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract Mycontract{
    string public name="Wallet";
    uint num;
    event Transfer(address indexed from,address indexed to,uint indexed value);
    function setValue(uint _num) public {
        num=_num;
    }
    function getValue() public view returns(uint){
        return num;
    }
   receive() external payable { }
    function contractbalance() public view returns(uint){
        return address(this).balance;
    }
    function sendetheruser(address _to) public payable{
        (bool sent,)=_to.call{value:msg.value}("");
        require(sent,"Withdraw failed");
        emit Transfer(msg.sender,_to,msg.value);
    }
    function accountbalance(address _address) public view returns(uint){
        return (_address).balance;
    }
    
}