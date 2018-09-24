const mockData = require("./mockdata.js").Data;

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
    return mockData.Projects.find(project => project.address === projectAddress);
}

function getProjectInfoByCreateAddress(userAddress) {    
    return mockData.Projects.find(project => project.creator === userAddress);
}

function getProjectTransfersInfoByProjectAddress(projectAddress) {
    return mockData.Transfers.filter(transfer => transfer.projectAddress === projectAddress) || [];
}

function getProjectTransferInfoById(transferId) {

}

function getProjectTransferCount() {
    return mockData.Transfers.length;
}

function getUserDonoredAmountOfProject(projectAddress, userAddress) {
    let totalAmount = 0;
    let transfers = mockData.Transfers.filter(transfer => transfer.projectAddress === projectAddress && transfer.userAddress === userAddress) || [];
    let wantedTransfers = transfers.filter(transfer => transfer.operation === 0) || [];
    wantedTransfers.forEach(transfer => totalAmount += transfer.amount);

    return totalAmount;
}

function isUserWithdraw(projectAddress, userAddress) {
    transfers = mockData.Transfers.filter(transfer => transfer.projectAddress === projectAddress && transfer.userAddress === userAddress) || [];
    let withdrawTransfers = transfers.filter(transfer => transfer.operation === 1) || [];
    return withdrawTransfers.length > 0;
}

function getUserLeftDonoredAmountOfProject(projectAddress, userAddress) {
    let totalAmount = 0;

    let transfers = mockData.Transfers.filter(transfer => transfer.projectAddress === projectAddress && transfer.userAddress === userAddress) || [];
    if (isUserWithdraw(projectAddress, userAddress)) {
        return 0;
    }

    let wantedTransfers = transfers.filter(transfer => transfer.operation === 2) || [];
    wantedTransfers.forEach(transfer => totalAmount += transfer.amount);

    return getUserDonoredAmountOfProject(projectAddress, userAddress) - wantedTransfers;
}

function getAllFundrasingProjects() {
    return mockData.Projects.filter(project => project.status === 2) || [];
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

function getVoteTotalCount() {
    return mockData.StageVotes.length;
}

function getStageVoteResult(projectAddress, stageId) {
    let transfers = mockData.Transfers.filter(transfer => transfer.projectAddress === projectAddress) || [];
    let stageVotes = mockData.StageVotes.filter(vote => vote.projectAddress === projectAddress && vote.stageId === stageId) || [];

    let all_users = Array.from(new Set(transfers.filter(transfer => transfer.projectAddress === projectAddress && transfer.operation !== 1).map(transfer => transfer.userAddress)));
    let agreed_users = Array.from(new Set(stageVotes.filter(vote => vote.operation === 1).map(vote => vote.userAddress)));
    let refuse_users = Array.from(new Set(stageVotes.filter(vote => vote.operation === 2).map(vote => vote.userAddress)));    

    return [agreed_users, refuse_users, all_users];
}

function getStageVotesInfo(projectAddress, stageId) {
    return mockData.StageVotes.filter(vote => vote.projectAddress === projectAddress && vote.stageId === stageId) || [];
}

function getStageUserVoteInfo(projectAddress, userAddress, stageId) {
    return mockData.StageVotes.find(vote => vote.projectAddress === projectAddress && vote.userAddress === userAddress && vote.stageId === stageId);
}

function getStageUserVoteById(voteId) {
    return mockData.StageVotes.find(vote => vote.id === voteId);
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
module.exports.getProjectTransferCount = getProjectTransferCount;
module.exports.getProjectTransferReceivedAmount = getProjectTransferReceivedAmount;
module.exports.isUserWithdraw = isUserWithdraw;
module.exports.getUserDonoredAmountOfProject = getUserDonoredAmountOfProject;
module.exports.getUserLeftDonoredAmountOfProject = getUserLeftDonoredAmountOfProject;
module.exports.getAllFundrasingProjects = getAllFundrasingProjects;
module.exports.getStageVoteResult = getStageVoteResult;
module.exports.getStageInfo = getStageInfo;
module.exports.getStagesInfoByProjectAddress = getStagesInfoByProjectAddress;
module.exports.getStageInfoById = getStageInfoById;
module.exports.getStageTotalCount = getStageTotalCount;
module.exports.getVoteTotalCount = getVoteTotalCount;
module.exports.getStageVotesInfo = getStageVotesInfo;
module.exports.getStageUserVoteInfo = getStageUserVoteInfo;
module.exports.getStageUserVoteById = getStageUserVoteById;

module.exports.updateUserInfo = updateUserInfo;
module.exports.addProject = addProject;
module.exports.addProjectTransfer = addProjectTransfer;
module.exports.addStage = addStage;
module.exports.addVote = addVote;
