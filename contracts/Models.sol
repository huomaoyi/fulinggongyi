pragma solidity ^0.4.22;

contract User {

    string public userName;
    address public userAddress;
    bytes1 public userType;
    string public realName;
    string public idNumber;
    string public gender;
    string public phoneNumber;
    string public homeAddress;

    constructor(
        string _userName,
        address _userAddress,
        bytes1 _userType,
        string _realName,
        string _idNumber,
        string _gender,
        string _phoneNumber,
        string _homeAddress
    ) 
    public 
    {
        userName = _userName;
        userAddress = _userAddress;
        userType = _userType;
        realName = _realName;
        idNumber = _idNumber;
        gender = _gender;
        phoneNumber = _phoneNumber;
        homeAddress = _homeAddress;
    }

    // function setPhoneNumber(string _phoneNumber) public {
    //     phoneNumber = _phoneNumber;
    // }
}

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
