/**
 * Created by Administrator on 2018/4/19.
 */
/**
 * Created by Administrator on 2018/4/19.
 */
module.exports={
  header:["home","blocks","transactions","accounts"],
  routeState:{"/blocks":["home","blocks"],"/blocks/blocksInfo":["home","blocks","blocks Info"],"/transactions":["home","blocks",'transactions'],
    "/transactions/transactionsInfo":["home","transactions","transactionsInfo"],"/accounts":["home","accounts"],
    "/accounts/accountsInfo":["首页","账户","账户详情"]},
  home:{
    LASTBLOCKS:"last BLOCKS",
    MINNERS:"MINNERS",
    REWARD:"REWARD",
    inputPlaceholder:"Search By Address/TxHash/Block",
    blockHash:"block Hash",
  },
  blocks:{
    tit: 'Showing Block ({msg1}to {msg2}) out of {msg3} total blocks'
  },
  transactions:{
    tit:'Showing {msg1}-{msg2}  of {msg3} Transactions',
  },
  accounts:{
    tit:'Showing {msg1}-{msg2}  of {msg3} Accounts',

  },
  echartTit:"14days transations history",
  echartXname:"date",
  commonStr:{
    home:"home",
    block:"block",
    blocks:"blocks",
    account:"account",
    accounts:"accounts",
    transaction:"transaction",
    transactions:"transactions",
    viewAll:"View All >>",
    height:"height",
    ages:"ages",
    Txn:"Txn",
    from:"from",
    to:"to",
    hash:"hash",
    TimeStamp:"TimeStamp",
    size:"size",
    address:"address",
    ParentHash:"Parent Hash",
    value:"value",
    rank:"rank",
    transactionInfo:"transaction Info",
    blockInfo:"block Info",
    addressInfo:"Address Info",
    ago:"ago",
    totalFee:"TotalFee",
    fee:"fee",
    blockReward:"Block Reward",
    TxType:"TxType",
    TxReceiptStatus:"TxReceipt Status",
    TxHash:"TxHash",
    TxCount:"TxCount",
    TotalTxt:"TotalTxt"
  }
}
