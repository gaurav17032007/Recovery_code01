// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Mycontract{
    struct Employee{
        uint id;
        string name;
        uint salary;
    }
    mapping (uint=>Employee) public Employee_List;

    function SetEmployee(
        uint _id,
        string memory _name,
        uint _salary
    ) public {
        Employee_List[_id]=Employee({
            id:_id,
            name:_name,
            salary:_salary
        });
    }
}