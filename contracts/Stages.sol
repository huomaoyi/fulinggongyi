pragma solidity ^0.4.24;

import "./Models.sol";
import { Tools } from "./Tools.sol";

contract Stage {

    // uint public id;
    // uint public index;
    // string public title;
    // address public projectAddress;
    // string public description;
    // uint32 public amount;
    // uint public startTime;
    // uint public endTime;
    // bytes8 public status;

    mapping (uint => Models.Stage) private stageInfos;
    uint public stageCount = 0;

    event StageCreatedOrUpdate(uint indexed id);
    
    function getStageById(uint _id)
        public
        view
        returns (uint, uint, string, address, string, uint32, uint, uint, bytes8) 
    {
        require(stageInfos[_id].id != 0);
        Models.Stage storage stageInfo = stageInfos[_id];

        return (
            stageInfo.id, 
            stageInfo.index,
            stageInfo.title,
            stageInfo.projectAddress,
            stageInfo.description,
            stageInfo.amount,
            stageInfo.startTime,
            stageInfo.endTime,
            stageInfo.status
        );
    }

    function getStageByProjectAddressAndIndex(address _projectAddress, uint _index)
        public
        view
        returns (uint, uint, string, address, string, uint32, uint, uint, bytes8) 
    {
        require(_projectAddress != 0 && _index != 0);
        Models.Stage memory stageInfo = Models.Stage(0, 0, "", 0, '', 0, 0, 0, 0);

        for (uint index = 1; index <= stageCount; index++) {
            if (
                stageInfos[index].id != 0 &&
                stageInfos[index].projectAddress == _projectAddress &&
                stageInfos[index].index == _index
                )
            {
                stageInfo = stageInfos[index - 1];
                break;
            }
        }

        return (
            stageInfo.id, 
            stageInfo.index,
            stageInfo.title,
            stageInfo.projectAddress,
            stageInfo.description,
            stageInfo.amount,
            stageInfo.startTime,
            stageInfo.endTime,
            stageInfo.status
        );
    }

    function getStageIdsByProjectAddress(address _projectAddress)
        public
        view
        returns (string) 
    {
        require(_projectAddress != 0);

        string memory ids = "0";

        for (uint index = 1; index <= stageCount; index++) {
            if (
                stageInfos[index].id != 0 &&
                stageInfos[index].projectAddress == _projectAddress
                )
            {
                string memory idString = Tools.uintToString(stageInfos[index].id);
                ids = Tools.stringConcat(ids, Tools.stringConcat(",", idString));
            }
        }

        return ids;
    }

    function addStage(
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
        returns (uint)
    {   
        Models.Stage memory stageInfo = Models.Stage(
           ++stageCount,
           _index,
           _title,
           _projectAddress,
           _description,
           _amount,
           _startTime,
           _endTime,
           _status
        );

        emit StageCreatedOrUpdate(stageInfo.id);
        return stageInfo.id;
    }
}
