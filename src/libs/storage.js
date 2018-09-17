const mockData = require("./mockData.js").Data;

function getUserInfoByAddress(userAddress) {
    return mockData.Users.find(user => user.address === userAddress);
}

function getCurrentUserAddress() {
    return mockData.CurrentUser;
}

function getCurrentUserInfo() {
    //console.log("mockData.Users[0] is " + JSON.stringify(mockData.Users[0]));
    return getUserInfoByAddress(getCurrentUserAddress());
}

function getProjectInfoByProjectAddress(projectAddress) {

}

function getProjectInfoByCreateAddress(userAddress) {    
    return mockData.Projects.find(project => project.creator == userAddress);
}

function getProjectTransfersInfoByProjectAddress(projectAddress) {
    return mockData.Transfers.filter(transfer => transfer.projectAddress == projectAddress) || [];
}

function getProjectTransferInfoById(transferId) {

}

function transferAmountConvert(transfer, ignoreWithdraw = true) {
    if (transfer.operation == 0) {
        return transfer.amount;
    }
    else if (transfer.operation == 1) {
        return -transfer.amount;
    }
    else {
        return ignoreWithdraw ? 0 : -transfer.amount;
    }
}

function getProjectTransferReceivedAmount(projectAddress, ignoreWithdraw = true) {
    let sum = 0;
    getProjectTransfersInfoByProjectAddress(projectAddress)
        .forEach (transfer => {
            sum += transferAmountConvert(transfer, ignoreWithdraw);
        });
    
    return sum;
}

function getStagesInfoByProjectAddress(projectAddress) {
    return mockData.Stages.filter( stage => stage.projectAddress === projectAddress) || [];
}

function getStageInfo(projectAddress, stageId) {

}

function getStageInfoById(stageId) {

}

function getStageTotalCount() {
    return mockData.Stages.length;
}

function getStageVoteInfo(projectAddress, stageId) {

}

function getStageUserVoteInfo(projectAddress, userAddress, stageId) {

}

function getStageUserVoteById(voteId) {

}

function updateUserInfo(userInfo) {
    console.log("updateUserInfo " + JSON.stringify(userInfo));
}

function addProject(project) {
    console.log("addProject " + JSON.stringify(project));
}

function addProjectTransfer(projectTransfer) {
    console.log("addProjectTransfer " + JSON.stringify(projectTransfer));
}

function addStage(stage) {
    console.log("addStage " + JSON.stringify(stage));
}

function addVote(vote) {
    console.log("addVote " + JSON.stringify(vote));
}

module.exports.getCurrentUserAddress = getCurrentUserAddress;
module.exports.getCurrentUserInfo = getCurrentUserInfo;
module.exports.getUserInfoByAddress = getUserInfoByAddress;
module.exports.getProjectInfoByProjectAddress = getProjectInfoByProjectAddress;
module.exports.getProjectInfoByCreateAddress = getProjectInfoByCreateAddress;
module.exports.getProjectTransfersInfoByProjectAddress = getProjectTransfersInfoByProjectAddress;
module.exports.getProjectTransferInfoById = getProjectTransferInfoById;
module.exports.getProjectTransferReceivedAmount = getProjectTransferReceivedAmount;
module.exports.getStageInfo = getStageInfo;
module.exports.getStagesInfoByProjectAddress = getStagesInfoByProjectAddress;
module.exports.getStageInfoById = getStageInfoById;
module.exports.getStageTotalCount = getStageTotalCount;
module.exports.getStageVoteInfo = getStageVoteInfo;
module.exports.getStageUserVoteInfo = getStageUserVoteInfo;
module.exports.getStageUserVoteById = getStageUserVoteById;

module.exports.updateUserInfo = updateUserInfo;
module.exports.addProject = addProject;
module.exports.addProjectTransfer = addProjectTransfer;
module.exports.addStage = addStage;
module.exports.addVote = addVote;
