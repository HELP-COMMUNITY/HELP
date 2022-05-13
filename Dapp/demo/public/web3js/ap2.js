if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }
console.log("web3",web3);

var account;
getAccount();
async function getAccount(){
    qyaccounts = await ethereum.request({ method: 'eth_requestAccounts' });
    // console.log(qyaccounts[0]);
    account=qyaccounts[0]
    $(".showAccount").html(qyaccounts[0]); 
    Transfer()
}

const abi=[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id2",
				"type": "uint256"
			}
		],
		"name": "accomplish1",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
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
		"name": "transfer1",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id1",
				"type": "uint256"
			}
		],
		"name": "transfer2",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "task",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "a",
				"type": "uint256[]"
			},
			{
				"internalType": "string[]",
				"name": "a1",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "a2",
				"type": "string[]"
			},
			{
				"internalType": "address[]",
				"name": "b",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "c",
				"type": "uint256[]"
			},
			{
				"internalType": "bool[]",
				"name": "d",
				"type": "bool[]"
			},
			{
				"internalType": "uint256[]",
				"name": "e",
				"type": "uint256[]"
			},
			{
				"internalType": "string[]",
				"name": "f",
				"type": "string[]"
			},
			{
				"internalType": "uint256[]",
				"name": "g",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

var myContract = new web3.eth.Contract(abi,'0x1EEf8EB21f916744d6808a0FB0f630f125448Fa2');
console.log('myContract==>',myContract);

//发布任务
$('#btn_transfer').click(function(){
    
	var headline=$("#headline").val()
	var content=$("#content").val()
    var endTime=$("#endTime").val()
    var money=$("#money").val()
    var phone=$("#phone").val()
    var site=$("#site").val()

	myContract.methods.transfer1(headline,content,endTime,phone,site).send(
		{from:qyaccounts[0],
			value:money
		
		}
	).then(function(receipt){
		console.log(receipt)
		alert("发布任务成功")
	});
})


// //接收任务
// $('#btn_accompilsh').click(function(){
// 	myContract.methods.accompilsh1(id).send(
// 		{from:qyaccounts[0]}
// 	).then(function(receipt){
// 		console.log(receipt)
// 		alert("接收任务成功")
// 	});
// })
