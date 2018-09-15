import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        appname:"图灵公益",
        appnamepingying:"TuringPublic",
        bitaddress:'0x4256bC4F0eB5685936B55c13d40D0012DCa409F2',
        appInfo: {
            name : "图灵公益",
            appnamepingying:"TuringPublic",
        },
        mockData: {
            FundraisingUser: "0x4256bc4f0eb5685936b55c13d40d0012dca409f2",
            DonateAUser: "0x4256bc4f0eb5685936b55c13d40d0012dca409a2",
            DonateBUser: "0x4256bc4f0eb5685936b55c13d40d0012dca409b2",
            DonateCUser: "0x4256bc4f0eb5685936b55c13d40d0012dca409c2",
            DonateDUser: "0x4256bc4f0eb5685936b55c13d40d0012dca409d2",
            CurrentUser: "",
            Users: [
                {
                    userName: "yiyanwannian",
                    address: "0x4256bc4f0eb5685936b55c13d40d0012dca409f2",
                    realName:"xiaoming",
                    idNumber: "420335199106156853",
                    gender: "male"
                },
                {
                    userName: "panpan",
                    address: "0x4256bc4f0eb5685936b55c13d40d0012dca409a2",
                    realName:"panpan",
                    idNumber: "420335199106156854",
                    gender: "male"
                },
                {
                    userName: "quanli",
                    address: "0x4256bc4f0eb5685936b55c13d40d0012dca409b2",
                    realName:"quanli",
                    idNumber: "420335199106156855",
                    gender: "male"
                },
                {
                    userName: "jiaoshan",
                    address: "0x4256bc4f0eb5685936b55c13d40d0012dca409c2",
                    realName:"jiaoshan",
                    idNumber: "420335199106156856",
                    gender: "female"
                },
                {
                    userName: "tianming",
                    address: "0x4256bc4f0eb5685936b55c13d40d0012dca409d2",
                    realName:"tianming",
                    idNumber: "420335199106156857",
                    gender: "male"
                }
            ],
            Projects: [
                {   //for successful
                    address: "0x4256bc4f0eb5685936b55c13d40d0012dca409f5",
                    name: "小红白血病",
                    creator:"0x4256bc4f0eb5685936b55c13d40d0012dca409f2",
                    description: "小红长期住甲醛浓度过高的房间，引发白血病。",
                    detail: "小红长期住甲醛浓度过高的房间，引发白血病， 重度患者，急需治疗！",
                    amount: "100000",
                    startTime: "2018-08-08 12:00:53",
                    endTime: "2018-08-28 12:00:00",                    
                    status:"2", //0:筹款中, 1:已完成, 2:结束
                },
                {   //for someone will withdraw after successful
                    address: "0x4256bc4f0eb5685936b55c13d40d0012dca409f6",
                    name: "小红白血病",
                    creator:"0x4256bc4f0eb5685936b55c13d40d0012dca409f2",
                    description: "小红长期住甲醛浓度过高的房间，引发白血病。",
                    detail: "小红长期住甲醛浓度过高的房间，引发白血病， 重度患者，急需治疗！",
                    amount: "100000",
                    startTime: "2018-08-08 12:00:53",
                    endTime: "2018-08-28 12:00:00",                    
                    status:"2", //0:筹款中, 1:已完成, 2:结束
                },
                {   //for ended because of deadline
                    address: "0x4256bc4f0eb5685936b55c13d40d0012dca409f7",
                    name: "小明白血病",
                    creator:"0x4256bc4f0eb5685936b55c13d40d0012dca409f2",
                    description: "小明长期住甲醛浓度过高的房间，引发白血病。",
                    detail: "小明长期住甲醛浓度过高的房间，引发白血病， 重度患者，急需治疗！",
                    amount: "100000",
                    startTime: "2018-08-01 12:00:53",
                    endTime: "2018-08-14 12:00:00",
                    status:"2", //0:筹款中, 1:已完成, 2:结束
                },
                {   //for no one donate
                    address: "0x4256bc4f0eb5685936b55c13d40d0012dca409f8",
                    name: "小白白血病",
                    creator:"0x4256bc4f0eb5685936b55c13d40d0012dca409f2",
                    description: "小白长期住甲醛浓度过高的房间，引发白血病。",
                    detail: "小白长期住甲醛浓度过高的房间，引发白血病， 重度患者，急需治疗！",
                    amount: "100000",
                    startTime: "2018-08-01 12:00:53",
                    endTime: "2018-08-14 12:00:00",
                    status:"2", //0:筹款中, 1:已完成, 2:结束
                },
                {   //for in progress
                    address: "0x4256bc4f0eb5685936b55c13d40d0012dca409f9",
                    name: "小青白血病",
                    creator:"0x4256bc4f0eb5685936b55c13d40d0012dca409f2",
                    description: "小青长期住甲醛浓度过高的房间，引发白血病。",
                    detail: "小青长期住甲醛浓度过高的房间，引发白血病， 重度患者，急需治疗！",
                    amount: "100000",
                    startTime: "2018-09-01 12:00:53",
                    endTime: "2018-09-26 12:00:00",
                    status:"0", //0:筹款中, 1:已完成, 2:结束
                }
            ],
            Transfers:[
                {
                    id: 1,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f5",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409a2",
                    amount: "20000",
                    time: "2018-08-11 12:00:53",
                    operation: "0" //0: 转入, 1: 转出（撤回）, 2: 转出（剩余返回）
                },
                {
                    id: 2,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f5",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409b2",
                    amount: "30000",
                    time: "2018-08-12 12:00:53",
                    operation: "0" //0: 转入, 1: 转出（撤回）, 2: 转出（剩余返回）
                },
                {
                    id: 3,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f5",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409c2",
                    amount: "24000",
                    time: "2018-08-13 12:00:53",
                    operation: "0" //0: 转入, 1: 转出（撤回）, 2: 转出（剩余返回）
                },
                {
                    id: 4,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f5",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409d2",
                    amount: "26000",
                    time: "2018-08-14 12:00:53",
                    operation: "0" //0: 转入, 1: 转出（撤回）, 2: 转出（剩余返回）
                },
                /*
                * Need unspent money return data
                */
                {
                    id: 11,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f6",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409a2",
                    amount: "20000",
                    time: "2018-08-11 12:00:53",
                    operation: "0" //0: 转入, 1: 转出（撤回）, 2: 转出（剩余返回）
                },
                {
                    id: 12,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f6",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409b2",
                    amount: "30000",
                    time: "2018-08-12 12:00:53",
                    operation: "0" //0: 转入, 1: 转出（撤回）, 2: 转出（剩余返回）
                },
                {
                    id: 13,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f6",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409c2",
                    amount: "24000",
                    time: "2018-08-13 12:00:53",
                    operation: "0" //0: 转入, 1: 转出（撤回）, 2: 转出（剩余返回）
                },
                {
                    id: 14,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f6",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409b2",
                    amount: "20000",
                    time: "2018-08-14 12:00:53",
                    operation: "1" //0: 转入, 1: 转出（撤回）, 2: 转出（剩余返回）
                },
                {
                    id: 21,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f7",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409a2",
                    amount: "20000",
                    time: "2018-08-11 12:00:53",
                    operation: "0" //0: 转入, 1: 转出（撤回）, 2: 转出（剩余返回）
                },
                {
                    id: 22,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f7",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409b2",
                    amount: "30000",
                    time: "2018-08-12 12:00:53",
                    operation: "0" //0: 转入, 1: 转出（撤回）, 2: 转出（剩余返回）
                },
                {
                    id: 23,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f7",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409c2",
                    amount: "24000",
                    time: "2018-08-13 12:00:53",
                    operation: "0" //0: 转入, 1: 转出（撤回）, 2: 转出（剩余返回）
                },
                {
                    id: 41,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f9",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409a2",
                    amount: "20000",
                    time: "2018-09-11 12:00:53",
                    operation: "0" //0: 转入, 1: 转出（撤回）, 2: 转出（剩余返回）
                },
                {
                    id: 42,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f9",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409b2",
                    amount: "30000",
                    time: "2018-09-12 12:00:53",
                    operation: "0" //0: 转入, 1: 转出（撤回）, 2: 转出（剩余返回）
                },
                {
                    id: 43,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f9",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409c2",
                    amount: "24000",
                    time: "2018-09-13 12:00:53",
                    operation: "0" //0: 转入, 1: 转出（撤回）, 2: 转出（剩余返回）
                }
            ],
            Stages:[
                {
                    id: 1,
                    index: 1,
                    title: "办理住院手续",
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f5",
                    description: "办理住院手续描述",
                    amount: "10000",
                    startTime: "2018-08-29 12:00:53",
                    endTime: "2018-08-30 12:00:53",
                    status: "2" //0: 无人同意, 1: 投票中, 2: 已完成
                },
                {
                    id: 2,
                    index: 2,
                    title: "化疗",
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f5",
                    description: "化疗描述",
                    amount: "60000",
                    startTime: "2018-08-30 12:00:53",
                    endTime: "2018-08-31 13:00:53",
                    status: "2" //0: 无人同意, 1: 投票中, 2: 已完成
                },
                {
                    id: 11,
                    index: 1,
                    title: "办理住院手续",
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f6",
                    description: "办理住院手续描述",
                    amount: "10000",
                    startTime: "2018-08-29 12:00:53",
                    endTime: "2018-08-30 12:00:53",
                    status: "2" //0: 无人同意, 1: 投票中, 2: 已完成
                },
                {
                    id: 12,
                    index: 2,
                    title: "化疗",
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f6",
                    description: "化疗描述",
                    amount: "60000",
                    startTime: "2018-08-29 12:00:53",
                    endTime: "2018-08-29 13:00:53",
                    status: "2" //0: 无人同意, 1: 投票中, 2: 已完成
                },
                {
                    id: 21,
                    index: 1,
                    title: "办理住院手续",
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f7",
                    description: "办理住院手续描述",
                    amount: "10000",
                    startTime: "2018-08-29 12:00:53",
                    endTime: "2018-08-30 12:00:53",
                    status: "2" //0: 无人同意, 1: 投票中, 2: 已完成
                },
                {
                    id: 22,
                    index: 2,
                    title: "化疗",
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f7",
                    description: "化疗描述",
                    amount: "60000",
                    startTime: "2018-08-29 12:00:53",
                    endTime: "2018-08-29 13:00:53",
                    status: "2" //0: 无人同意, 1: 投票中, 2: 已完成
                }
            ],
            StageVotes:[
                { //if operation is 0, there should not have this data, we just for you see
                    id: 1,
                    stageId: 1,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f5",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409a2",
                    time: "2018-08-29 13:00:53",
                    operation: "0" //0: 未处理, 1: 同意, 2: 拒绝
                },
                {
                    id: 2,
                    stageId: 1,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f5",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409b2",
                    time: "2018-08-29 13:00:53",
                    operation: "1" //0: 未处理, 1: 同意, 2: 拒绝
                },
                {
                    id: 3,
                    stageId: 1,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f5",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409c2",
                    time: "2018-08-29 13:00:53",
                    operation: "2" //0: 未处理, 1: 同意, 2: 拒绝
                },
                {
                    id: 4,
                    stageId: 1,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f5",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409d2",
                    time: "2018-08-29 13:00:53",
                    operation: "1" //0: 未处理, 1: 同意, 2: 拒绝
                },
                {
                    id: 5,
                    stageId: 2,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f5",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409a2",
                    time: "2018-08-30 13:00:53",
                    operation: "1" //0: 未处理, 1: 同意, 2: 拒绝
                },
                {
                    id: 6,
                    stageId: 2,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f5",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409b2",
                    time: "2018-08-30 13:00:53",
                    operation: "1" //0: 未处理, 1: 同意, 2: 拒绝
                },
                {
                    id: 7,
                    stageId: 2,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f5",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409c2",
                    time: "2018-08-30 13:00:53",
                    operation: "1" //0: 未处理, 1: 同意, 2: 拒绝
                },
                {
                    id: 8,
                    stageId: 2,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f5",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409d2",
                    time: "2018-08-30 13:00:53",
                    operation: "1" //0: 未处理, 1: 同意, 2: 拒绝
                },
                {
                    id: 11,
                    stageId: 1,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f6",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409a2",
                    time: "2018-08-29 13:00:53",
                    operation: "1" //0: 未处理, 1: 同意, 2: 拒绝
                },
                {
                    id: 12,
                    stageId: 1,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f6",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409b2",
                    time: "2018-08-29 13:00:53",
                    operation: "1" //0: 未处理, 1: 同意, 2: 拒绝
                },
                {
                    id: 13,
                    stageId: 1,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f6",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409c2",
                    time: "2018-08-29 13:00:53",
                    operation: "2" //0: 未处理, 1: 同意, 2: 拒绝
                },
                {
                    id: 14,
                    stageId: 1,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f6",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409d2",
                    time: "2018-08-29 13:00:53",
                    operation: "1" //0: 未处理, 1: 同意, 2: 拒绝
                },
                {
                    id: 15,
                    stageId: 2,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f6",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409a2",
                    time: "2018-08-30 13:00:53",
                    operation: "1" //0: 未处理, 1: 同意, 2: 拒绝
                },
                {
                    id: 16,
                    stageId: 2,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f6",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409b2",
                    time: "2018-08-30 13:00:53",
                    operation: "1" //0: 未处理, 1: 同意, 2: 拒绝
                },
                {
                    id: 17,
                    stageId: 2,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f6",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409c2",
                    time: "2018-08-30 13:00:53",
                    operation: "1" //0: 未处理, 1: 同意, 2: 拒绝
                },
                {
                    id: 18,
                    stageId: 2,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f6",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409d2",
                    time: "2018-08-30 13:00:53",
                    operation: "1" //0: 未处理, 1: 同意, 2: 拒绝
                },
                {
                    id: 21,
                    stageId: 1,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f7",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409a2",
                    time: "2018-08-29 13:00:53",
                    operation: "1" //0: 未处理, 1: 同意, 2: 拒绝
                },
                {
                    id: 22,
                    stageId: 1,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f7",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409b2",
                    time: "2018-08-29 13:00:53",
                    operation: "1" //0: 未处理, 1: 同意, 2: 拒绝
                },
                {
                    id: 23,
                    stageId: 1,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f7",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409c2",
                    time: "2018-08-29 13:00:53",
                    operation: "2" //0: 未处理, 1: 同意, 2: 拒绝
                },
                {
                    id: 25,
                    stageId: 2,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f7",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409a2",
                    time: "2018-08-30 13:00:53",
                    operation: "1" //0: 未处理, 1: 同意, 2: 拒绝
                },
                {
                    id: 26,
                    stageId: 2,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f7",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409b2",
                    time: "2018-08-30 13:00:53",
                    operation: "1" //0: 未处理, 1: 同意, 2: 拒绝
                },
                {
                    id: 27,
                    stageId: 2,
                    projectAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409f7",
                    userAddress: "0x4256bc4f0eb5685936b55c13d40d0012dca409c2",
                    time: "2018-08-30 13:00:53",
                    operation: "1" //0: 未处理, 1: 同意, 2: 拒绝
                }
            ]
        }
    }
  })

export default store