// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract StudentDetails{
    struct Student{
        uint id;
        string name;
        uint age;
    }

    mapping (uint => Student) public student;
    event log(uint indexed id,string name,uint age);
    function setStudent(uint _id,string memory name,uint age) public {
        student[_id]=Student({
            id:_id,
            name:name,
            age:age
        });
        emit log(_id,name,age);
    }
}