pragma solidity ^0.4.22;

contract Stage {

    uint public id;
    uint public index;
    string public title;
    address public projectAddress;
    string public description;
    uint32 public amount;
    uint public startTime;
    uint public endTime;
    bytes8 public status;

    constructor(
        uint _id,
        uint _index,
        string _title,
        address _projectAddress,
        string _description,
        uint32 _amount,
        uint _startTime,
        uint _endTime,
        bytes8 _status
    ) 
    public 
    {
        id = _id;
        index = _index;
        title = _title;
        projectAddress = _projectAddress;
        description = _description;
        amount = _amount;
        startTime = _startTime;
        endTime = _endTime;
        status = _status;
    }
}
