pragma solidity ^0.4.24;

import "./Models.sol";

contract Users {
  
    // struct User {
    //     string userName;
    //     address userAddress;
    //     bytes1 userType;
    //     string realName;
    //     string idNumber;
    //     string gender;
    //     string phoneNumber;
    //     string homeAddress;
    // }

    mapping (address => Models.User) public userInfos;

    event UserCreatedOrUpdate(address indexed _userAddress);
    
    function getUserByUserAddress(address _userAddress)
        public
        view
        returns (string, address, bytes1, string, string, string, string, string) 
    {
        require(userInfos[_userAddress].userAddress != 0);
        Models.User storage userInfo = userInfos[_userAddress];

        return (
            userInfo.userName, 
            userInfo.userAddress,
            userInfo.userType,
            userInfo.realName,
            userInfo.idNumber,
            userInfo.gender,
            userInfo.phoneNumber,
            userInfo.homeAddress
        );
    }

    function addUser(
        string _userName,
        bytes1 _userType,
        string _realName,
        string _idNumber,
        string _gender,
        string _phoneNumber,
        string _homeAddress
    )
        public
        returns (address)
    {
        address _userAddress = msg.sender;
        
        Models.User memory userInfo = Models.User(
           _userName,
           _userAddress,
           _userType,
           _realName,
           _idNumber,
           _gender,
           _phoneNumber,
           _homeAddress
        );        

        userInfos[_userAddress] = userInfo;
        emit UserCreatedOrUpdate(_userAddress);

        return _userAddress;
    }
}