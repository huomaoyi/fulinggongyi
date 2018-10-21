pragma solidity ^0.4.24;

contract Models {

    struct User {
        string userName;
        address userAddress;
        bytes1 userType;
        string realName;
        string idNumber;
        string gender;
        string phoneNumber;
        string homeAddress;
    }

    struct Project {
        address projectAddress;
        string name;
        address creator;
        string description;
        string detail;
        uint32 amount;
        uint startTime;
        uint endTime;
        bytes8 status;
    }

    struct Stage {
        uint id;
        uint index;
        string title;
        address projectAddress;
        string description;
        uint32 amount;
        uint startTime;
        uint endTime;
        bytes8 status;
    }

    struct StageVote {
        uint id;
        address projectAddress;
        uint stageIndex;
        address userAddress;
        uint time;
        bytes8 operation;
    }

}
