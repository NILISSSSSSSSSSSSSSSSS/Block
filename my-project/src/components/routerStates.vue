<template>
     <div class="routerShow">
       <div class="routerShow_box routerShow_width">
         <span class="leftPath">{{leftPath}}</span>
         <div class="rightPath">
           <template v-for="(item,index) in rightPath">
             <router-link   :to="{ path: '/'+item.link }"  v-if="index!=rightPath.length-1">{{item.text}} <span >/ </span> </router-link>
             <span  v-else class="lightYellow">{{item.text}} </span>
           </template>
         </div>
       </div>
     </div>
</template>

<script>
    export default {
      name:"routerStates",
      data:function(){
        return {
          routLeftPath:"",
          routLeftPathObj:{
            '/blocks':'Blocks',
            '/blocks/blocksInfo':'Block'
            ,'/transactions':'Transcations'
            ,'/transactions/transactionsInfo':'Transcation'
            ,'/accounts':'Accounts'
            ,'/accounts/accountsInfo':'Address'
          }
        }
      },
      computed: {
        rightPath: function () {
          let routRightPathObj = {
            '/blocks': [{"link": "home", "text": this.$t('commonStr.home')}, {
              "link": "blocks",
              "text": this.$t('commonStr.blocks')
            }],
            '/blocks/blocksInfo': [{
              "link": "home",
              "text": this.$t('commonStr.home')
            }, {
              "link": "blocks",
              "text": this.$t('commonStr.blocks')
            }, {"link": "/blocks/blocksInfo", "text": this.$t('commonStr.blockInfo')}]
            ,
            '/transactions': [{
              "link": "home",
              "text": this.$t('commonStr.home')
            }, {"link": "transactions", "text": this.$t('commonStr.transactions')}]
            ,
            '/transactions/transactionsInfo': [{
              "link": "home",
              "text": this.$t('commonStr.home')
            }, {
              "link": "transactions",
              "text": this.$t('commonStr.transactions')
            }, {"link": "/transactions/transactionsInfo", "text": this.$t('commonStr.transactionInfo')}]
            ,
            '/accounts': [{"link": "home", "text": this.$t('commonStr.home')}, {
              "link": "accounts",
              "text": this.$t('commonStr.accounts')
            }]
            ,
            '/accounts/accountsInfo': [{"link": "home", "text": this.$t('commonStr.home')}, {
              "link": "accounts",
              "text": this.$t('commonStr.accounts')
            }, {"link": "/accounts/accountsInfo", "text": this.$t('commonStr.addressInfo')}],
          };
          return  routRightPathObj[this.$route.path];
        }
        ,leftPath:function(){
          let leftObj = {
            '/blocks':this.$t('commonStr.blocks'),
            '/blocks/blocksInfo':this.$t('commonStr.blockInfo')
            ,'/transactions':this.$t('commonStr.transactions')
            ,'/transactions/transactionsInfo':this.$t('commonStr.transactionInfo')
            ,'/accounts':this.$t('commonStr.accounts')
            ,'/accounts/accountsInfo':this.$t('commonStr.addressInfo')
          };
          console.log(leftObj)
          return  leftObj[this.$route.path]+"  "+this.getLeftRoutePath();
        }
      },
      created:function(){
      },
      mounted:function(){
//        this.getLeftRoutePath();
      },
      watch: {
        // 如果路由有变化，会再次执行该方法
//        "$route": ["getLeftRoutePath"]
      },
      methods:{
        //获取左边路径和参数
        getLeftRoutePath:function() {
          let canShu="";
          if(this.$route.query.length!==0){
            console.log(this.$route)
            for(let i in this.$route.query){
              canShu=this.$route.query[i];
            }
          }
          return canShu
//          this.routLeftPath = this.routLeftPathObj[this.$route.path]+"  "+canShu
        }
      }
    }
</script>

<style scoped>
  @import '../commonStyle/common.css';
  .routerBox{
    max-width: 100%;
  }
.routerShow_box{
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;color: #868686;
}
.leftPath{
  font-size: 22px;

}
.rightPath{
  text-transform: capitalize;
}
.rightPath{
  color: #868686;
}
  a:visited{
    color: #868686;
  }
</style>
