<template>
  <div class="offcial">
    <div>
      <div class="recoveryShow"><img :src="banner" alt="">
      </div>
      <div class="recoveryFlow">
        <img src="http://img.xianzhuan.cn/xz/upload/bigeye/201609/201609301446365492.jpg" alt="">

      </div>
      <div class="recoveryList">
        <div  v-for="item in listArr" @click="goDetail()">
          <p><img :src="item.icon" alt=""></p>
          <p>{{ item.name }}</p>
          <p>最高回收价 <i>￥{{ item.top_price }}</i></p>
          <p>立即回收</p>
        </div>
      </div>

      <div class="footer">
        <img src="http://img.xianzhuan.cn/xz/upload/bigeye/201609/201609301446365492.jpg" alt="">
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Offcial',
  data(){
    return{
      banner: '',
      listArr: []
    }
  },
  methods: {
    getInit(){
      let self = this;
        let data;
        this.$http.get('/static/json/offcial.json', { retry: 5, retryDelay: 1000 })
          .then(function(res) {
            data = res.data;
            self.banner = data.img;
            self.listArr = data.hot;
            return;

          })
          .catch(function(err) {
            console.log('failed', err);
          });
    },
    goDetail(){
      this.$router.push('/recoverydetail');
    }
  },
  mounted(){
    this.getInit();
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .offcial{
    width: 100%;
    height:100%;
    padding: 0.05rem 0.05rem 0.6rem;
    background-color: #F3F4F5;
    font-size: 0.14rem;
  }
  .recoveryShow{
    height: 120px;
    padding: 5px;
  }
  .recoveryShow img{
    width:100%;
    height:100%;
    border-radius: 4px;
  }
  .recoveryFlow{
    height: 1.20rem;
    padding:0.05rem;
  }
  .recoveryFlow img{
    width:100%;
    height:100%;
    border-radius: 4px;
  }
  .recoveryList{
    width:100%;
    padding:0.05rem 0;
    height:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .recoveryList div{
    display: flex;
    flex-direction: column;
    align-items: center;
    float: left;
    width: 45%;
    padding: 0.05rem;
    background-color: #fff;
    margin-bottom: 0.05rem;
  }
  .recoveryList div p{
    margin-bottom: 0.05rem;
  }
  .recoveryList div p:nth-child(3) i{
    color: red;
  }
  .recoveryList div p:nth-child(4){
    padding: 0.05rem 0.4rem;
    border: 1px solid #E2E2E2;
    border-radius: 0.1rem;
  }
  .recoveryList div img{
    width: 100%;
    height: 100%;
  }
  .footer{

    height: 1.70rem;
    padding: 0.05rem;
    padding-bottom: 0.5rem;
  }
  .footer img{
    width:100%;
    height:100%;
    border-radius: 4px;
  }
</style>
