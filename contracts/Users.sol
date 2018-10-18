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
