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
				"internalType": "address payable",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "svalue",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "payable",
		"type": "constructor"
	}
]

var myContract = new web3.eth.Contract(abi,'0xD33FB1DB263787AF589b93FEC966520749A247f2');
console.log('myContract==>',myContract);

function Transfer(){
    console.log(account)
    myContract.methods.svalue(account).send({from:account},).then(data=>{
        console.log(data)
        alert("成功注册发币")
    }).catch(error=>{
        console.log(error)
    });
}