pragma solidity >=0.7.0 <0.9.0;



contract BalanceTest2 {

    constructor() public{
    }

    function getBalanceTest() public view returns (uint256 balance){
        return msg.sender.balance;
    }
    
    function test() public view returns (uint256 balance){
        return 1;
    }
}
