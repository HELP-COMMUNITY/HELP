// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

contract Foo01{
    uint256 id;      //任务编号 id
    //发布 
    struct Product{
         uint256 idsp;
         string headline;   //标题
         string content;   //内容
         address name;     //任务发布人
         uint256 highest;  //发布金额
         bool revealed;    //是否已被接收任务
         uint256 time;     //当前时间
         uint256 endTime;  //任务时间
         string phone;    //电话
         uint256 site;
    }
     
    //接受 
    struct Bid{
        address name2;   //任务接收人
        bool  revea;    //任务是否完成
    }
    //id与发布人对应关系
    mapping(uint256 => address) productIdInStore;
    
    //id与接受人关系
    mapping(uint256 => address) bidsIdInStore;
    //id与发布
    mapping(uint256 => Product) idmap;
    mapping(address => Product) stores;   //储存任务发布人
    
    mapping(address => Bid) bids;   //储存接受任务人
    
    
    //发布任务 
    function transfer1(string memory headline,string memory content,uint256 endTime,string memory phone,uint256 site)public payable{
        //任务编号 id自加
        id += 1;
        //任务金额范围为1-5
        require(msg.value <= 5,"The amount is not in the range");
        require(msg.value >= 1,"The amount is not in the range");
        //将金额转账给合约
        msg.value;
        Product memory product = Product(
             id,
             headline,
             content,
             msg.sender,
             msg.value,
             false,
             block.timestamp,
             endTime*60,
             phone,
             site
            );
        //stores存入对象
        idmap[id] = product;
        stores[msg.sender] = product; 
        //id与发布人对应关系
        productIdInStore[id] = msg.sender; 
    }
    
    //接受任务
    function transfer2(uint256 id1)public{
        //判断对时间的控制
        uint256 andtime = block.timestamp -  idmap[id1].time;
        require(andtime <= idmap[id].endTime, "I'm out of time. I can't take orders");//已经超过了任务时间，无法接单
        //判断对是否已经被接收
        require(idmap[id].revealed == false,"This task has been accepted");  //此任务已被接收
        //储存id与接收人
        bidsIdInStore[id1] = msg.sender;
        //结构体传入任务已被接收**
        Bid memory bid = Bid(
            msg.sender,
            false
            );
        bids[msg.sender] = bid;        
        
    }
    //接收人确认任务完成**
    function accomplish1(uint256 id2)public payable{
        require(msg.sender ==bidsIdInStore[id2],"You are not the recipient");//接收人和完成人相同
        uint256 andtime = block.timestamp -  idmap[id2].time;
        require(andtime <= idmap[id].endTime, "I'm out of time. I can't take orders");//任务时间内
        Bid memory bid = Bid(
            msg.sender,
            true
            );
        bids[msg.sender] = bid;
        // address payable addr = msg.sender;
         payable(msg.sender).transfer(idmap[id2].highest);
    }
    
    //数据展示1
    function task() view public returns (
         uint[] memory a,
         string[] memory a1,
         string[] memory a2,
         address[] memory b,
         uint[] memory c,
         bool[] memory d,
         uint[] memory e,
         string[] memory f,
         uint[] memory g)
        {
        uint256 i = 0;
        a = new uint[](id+1);
        a1 = new string[](id+1);
        a2 = new string[](id+1);
        b = new address[](id+1);
        c = new uint[](id+1);
        d = new bool[](id+1);
        e = new uint[](id+1);
        f = new string[](id+1);
        g = new uint[](id+1);
        while (i <= id){
            i++;
            a[i] = idmap[i].idsp;
            a1[i] = idmap[i].headline;
            a2[i] = idmap[i].content;
            b[i] = idmap[i].name;
            c[i] = idmap[i].highest;
            d[i] = idmap[i].revealed;
            e[i] = idmap[i].endTime;
            f[i] = idmap[i].phone;
            g[i] = idmap[i].site;
        }
        return(a,
        a1,
        a2,
        b,
        c,
        d,
        e,
        f,
        g);
    }
   
}
