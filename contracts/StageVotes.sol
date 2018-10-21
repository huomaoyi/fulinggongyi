pragma solidity ^0.4.24;

import "./Models.sol";
import { Tools } from "./Tools.sol";

contract StageVotes {

    // uint id;
    // address projectAddress;
    // uint stageIndex;
    // address userAddress;
    // uint time;
    // bytes8 operation;

    mapping (uint => Models.StageVote) private stageVotesInfos;
    uint public stageVoteCount = 0;

    event StageVoteCreatedOrUpdate(uint indexed id);
    
    function getStageVoteById(uint _id)
        public
        view
        returns (uint, address, uint, address, uint, bytes8)
    {
        require(stageVotesInfos[_id].id != 0);
        Models.StageVote storage stageVoteInfo = stageVotesInfos[_id];

        return (
            stageVoteInfo.id, 
            stageVoteInfo.projectAddress,
            stageVoteInfo.stageIndex,
            stageVoteInfo.userAddress,
            stageVoteInfo.time,
            stageVoteInfo.operation
        );
    }

    function getStageVoteIdsByProjectAddress(address _projectAddress)
        public
        view
        returns (string)
    {
        require(_projectAddress != 0);

        string memory ids = "0";

        for (uint index = 1; index <= stageVoteCount; index++) {
            if (
                stageVotesInfos[index].id != 0 &&
                stageVotesInfos[index].projectAddress == _projectAddress
                )
            {
                string memory idString = Tools.uintToString(stageVotesInfos[index].id);
                ids = Tools.stringConcat(ids, Tools.stringConcat(",", idString));
            }
        }

        return ids;
    }

    function getStageVoteIdsByProjectAddressAndStageIndex(address _projectAddress, uint _stageIndex)
        public
        view
        returns (string)
    {
        require(_projectAddress != 0 && _stageIndex != 0);

        string memory ids = "0";

        for (uint index = 1; index <= stageVoteCount; index++) {
            if (
                stageVotesInfos[index].id != 0 &&
                stageVotesInfos[index].projectAddress == _projectAddress &&
                stageVotesInfos[index].stageIndex == _stageIndex
                )
            {
                string memory idString = Tools.uintToString(stageVotesInfos[index].id);
                ids = Tools.stringConcat(ids, Tools.stringConcat(",", idString));
            }
        }

        return ids;
    }

     function getStageVoteIdsByUserAddress(address _userAddress)
        public
        view
        returns (string)
    {
        require(_userAddress != 0);

        string memory ids = "0";

        for (uint index = 1; index <= stageVoteCount; index++) {
            if (
                stageVotesInfos[index].id != 0 &&
                stageVotesInfos[index].userAddress == _userAddress
                )
            {
                string memory idString = Tools.uintToString(stageVotesInfos[index].id);
                ids = Tools.stringConcat(ids, Tools.stringConcat(",", idString));
            }
        }

        return ids;
    }

    function getStageVoteIdsByUserAddressAndStageIndex(address _userAddress, uint _stageIndex)
        public
        view
        returns (string)
    {
        require(_userAddress != 0 && _stageIndex != 0);

        string memory ids = "0";

        for (uint index = 1; index <= stageVoteCount; index++) {
            if (
                stageVotesInfos[index].id != 0 &&
                stageVotesInfos[index].userAddress == _userAddress &&
                stageVotesInfos[index].stageIndex == _stageIndex
                )
            {
                string memory idString = Tools.uintToString(stageVotesInfos[index].id);
                ids = Tools.stringConcat(ids, Tools.stringConcat(",", idString));
            }
        }

        return ids;
    }

    function getStageVoteIdsByProjectAddressAndUserAddress(address _projectAddress, address _userAddress)
        public
        view
        returns (string)
    {
        require(_projectAddress != 0 && _userAddress != 0);

        string memory ids = "0";

        for (uint index = 1; index <= stageVoteCount; index++) {
            if (
                stageVotesInfos[index].id != 0 &&
                stageVotesInfos[index].projectAddress == _projectAddress &&
                stageVotesInfos[index].userAddress == _userAddress
                )
            {
                string memory idString = Tools.uintToString(stageVotesInfos[index].id);
                ids = Tools.stringConcat(ids, Tools.stringConcat(",", idString));
            }
        }

        return ids;
    }

    function addStageVote(
        uint _id,
        address _projectAddress,
        uint _stageIndex,
        address _userAddress,
        uint _time,
        bytes8 _operation
    )
        public
        returns (uint)
    {   
        Models.StageVote memory stageVoteInfo = Models.StageVote(
           ++stageVoteCount,
           _projectAddress,
           _stageIndex,
           _userAddress,
           _time,
           _operation
        );

        emit StageVoteCreatedOrUpdate(stageVoteInfo.id);
        return stageVoteInfo.id;
    }
}
