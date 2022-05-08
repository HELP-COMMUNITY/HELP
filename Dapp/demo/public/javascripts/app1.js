if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }
console.log("web3",web3);

let qyaccounts = [];
let changeAccount=[];
// const ethereumButton = document.querySelector('.enableEthereumButton');

// ethereumButton.addEventListener('click', () => {

// console.log("eth_requestAccounts account=>", )
// });


//获取账户信息
getAccount();
async function getAccount(){
    qyaccounts = await ethereum.request({ method: 'eth_requestAccounts' });
    console.log(qyaccounts[0]);
    $(".showAccount").html(qyaccounts[0]); 
}

//修改账户，功能希望切换账户时，可以实时获取到最新的账户信息
ethereum.on('accountsChanged', function (accounts) {
    // Time to reload your interface with accounts[0]!
    const account = accounts[0]; 
	changeAccounts=accounts;
    changeAccounts[0]=accounts[0];
    console.log("accounts[0]==>",account)
    $(".showAccount").html(account); 
});
获取账户余额
const getBalanceButton = document.querySelector('.getBalanceButton');
  getBalanceButton.addEventListener('click', () => {
    ethereum.request({
        method: 'eth_getBalance',
        params: [
            qyaccounts[0],
            'latest' 
        ],
      })
      .then((txHash) => $(".getBalanceButton").html(eval(txHash),toString(16)))
      .catch((error) => console.error);
  });
console.log(12)
  web3.eth.getBalance('0xC032E635c627267AA80433c68cd8286CE4AD8F2d').then(console.log);

var subscription = web3.eth.subscribe('logs',{
    address:'',
    // topics:['0x123456...']过滤器
},
function(error,result){
    if(!error)
    console.log(result)
});
//日志

 const abi=[
	{
		"inputs": [],
		"stateMutability": "payable",
		"type": "constructor"
	},
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
	}
]
//实例化一个合约
var myContract = new web3.eth.Contract(abi,'0xD33FB1DB263787AF589b93FEC966520749A247f2');
console.log('myContract==>',myContract);

    