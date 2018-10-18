pragma solidity ^0.4.22;

contract Project {

    uint public id;
    uint public stageId;
    address public projectAddress;
    address public userAddress;
    uint public time;
    bytes8 public operation;

    constructor(
        uint _id,
        uint _stageId,
        address _projectAddress,
        address _userAddress,
        uint _time,
        bytes8 _operation
    ) 
    public 
    {
        id = _id;
        stageId = _stageId;
        projectAddress = _projectAddress;
        userAddress = _userAddress;
        time = _time;
        operation = _operation;
    }
}
