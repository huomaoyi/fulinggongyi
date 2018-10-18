pragma solidity ^0.4.22;

contract Project {

    address public projectAddress;
    string public name;
    address public creator;
    string public description;
    string public detail;
    uint32 public amount;
    uint public startTime;
    uint public endTime;
    bytes8 public status;

    constructor(
        address _projectAddress,
        string _name,
        address _creator,
        string _description,
        string _detail,
        uint32 _amount,
        uint _startTime,
        uint _endTime,
        bytes8 _status
    ) 
    public 
    {
        projectAddress = _projectAddress;
        name = _name;
        creator = _creator;
        description = _description;
        detail = _detail;
        amount = _amount;
        startTime = _startTime;
        endTime = _endTime;
        status = _status;
    }
}
