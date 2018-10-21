pragma solidity ^0.4.24;

import "./Models.sol";

contract Projects {

    // address public projectAddress;
    // string public name;
    // address public creator;
    // string public description;
    // string public detail;
    // uint32 public amount;
    // uint public startTime;
    // uint public endTime;
    // bytes8 public status;

    mapping (address => Models.Project) public projectInfos;

    event ProjectCreatedOrUpdate(address indexed _projectAddress);

    function getProjectByProjectAddress(address _projectAddress)
        public
        view
        returns (address, string, address, string, string, uint32, uint, uint, bytes8) 
    {
        require(projectInfos[_projectAddress].projectAddress != 0);
        Models.Project storage projectInfo = projectInfos[_projectAddress];

        return (            
            projectInfo.projectAddress,
            projectInfo.name,
            projectInfo.creator,
            projectInfo.description,
            projectInfo.detail,
            projectInfo.amount,
            projectInfo.startTime,
            projectInfo.endTime,
            projectInfo.status
        );
    }

    function addProject(
        address _projectAddress,
        string _name,
        address _creator,
        string _description,
        string _detail,
        uint32 _amount,
        uint  _startTime,
        uint _endTime,
        bytes8 _status
    )
        public
        returns (address)
    {
        Models.Project memory projectInfo = Models.Project(
           _projectAddress,
           _name,
           _creator,
           _description,
           _detail,
           _amount,
           _startTime,
           _endTime,
           _status
        );        

        projectInfos[_projectAddress] = projectInfo;
        emit ProjectCreatedOrUpdate(_projectAddress);

        return _projectAddress;
    }
}