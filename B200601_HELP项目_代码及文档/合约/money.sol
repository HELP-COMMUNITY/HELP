// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;


contract Test{
    
    uint256  test1;   //保存指定地址的合约的余额
    address payable owner;  //保存合约的所有者，即为部署合约的外部账户,设置payable 属性
    uint256 id;
    mapping(address => uint256) productIdInStore;
    constructor()public payable{      // 合约构造函数
        owner = payable(msg.sender);           // 设定智能合约的所有者
        test1 = 0;                    // 初始化为0
        msg.value;   //外部账户在部署时给合约账户转账msg.value以太币
    }
    
    function svalue(address payable addr)public payable{
        //输入地址，给相应地址转账5 个以太币，这里是的单位是Gwei
        id+=1;
        require(bytes32(productIdInStore[addr]) == '' ,"The account has been registered");
        productIdInStore[addr] = id;
        addr.transfer(5*10**18);
    }
       //输入地址，获取整个地址的余额
    function getblance(address payable addr)public payable returns (uint256){
        test1 = addr.balance;
        return test1;
    } 
    
}
