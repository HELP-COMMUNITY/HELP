if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
console.log("web3", web3);

var account;
getAccount();
async function getAccount() {
    qyaccounts = await ethereum.request({ method: 'eth_requestAccounts' });
    // console.log(qyaccounts[0]);
    account = qyaccounts[0]
    $(".showAccount").html(qyaccounts[0]);
}

const abi = [{
        "inputs": [{
            "internalType": "uint256",
            "name": "id2",
            "type": "uint256"
        }],
        "name": "affirm",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "headline",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "content",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "phone",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "site",
                "type": "uint256"
            }
        ],
        "name": "publish",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "id1",
            "type": "uint256"
        }],
        "name": "recive",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]
var myContract = new web3.eth.Contract(abi, '0xF4e296E9f3fDe544e3d07D5a807aF5aE4d41344d');
console.log('myContract==>', myContract);

//发布任务
$('#btn_transfer').click(function() {

    var headline = $("#headline").val()
    var content = $("#content").val()
    var endTime = $("#endTime").val()
    var money = $("#money").val()
    var phone = $("#phone").val()
    var site = $("#site").val()

    myContract.methods.publish(headline, content, endTime, phone, site).send({
        from: qyaccounts[0],
        value: money * 1000000000000000000

    }).then(function(receipt) {
        console.log(receipt)
        alert("发布任务成功")
    });
})


//接收任务

function recive() {
    console.log(id1)
    myContract.methods.svalue(account).send({ from: account }, ).then(data => {
        console.log(data)
        alert("成功注册发币")
    }).catch(error => {
        console.log(error)
    });
}


$('#btn_transfer2').click(function() {

    var id1 = $("#ID").val()
    myContract.methods.recive(id1).send({
        from: qyaccounts[0]
    }).then(function(receipt) {
        console.log(receipt)
        alert("接收任务成功")
    });
})

//完成任务
$('#btn_accomplish1').click(function() {
    var id2 = $("#ID2").val()
    myContract.methods.affirm(id2).send({
        from: qyaccounts[0]
    }).then(function(receipt) {
        console.log(receipt)
        alert("确认完成任务")
    });
})