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
//获取账户余额
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

    
