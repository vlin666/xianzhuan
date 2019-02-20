<template>
  <div class="personal">

    <div class="personList" ref="personList" @scroll="getMore()"
         @touchstart="startload()"
          @touchmove="load()"
         @touchend="endload()"
    >
      <div class="load"><i :class="loadArrow"></i>{{ loadWord }}</div>
      <div class="box">
        <div class="everyone" v-for="item in personArr">
          <div class="personalTop">
            <p class="userIcon"><img :src="item.user_icon" alt=""></p>
            <p>
              <span>{{ item.user_name }}</span>
              <span><i class="fa fa-clock-o"></i>&nbsp; {{ item.time }}来过</span>
            </p>
          </div>
          <div class="personalCenter" ref="personalCenter">
            <div class="centerBox" ref="centerBox"><img  v-for="img in item.images" :src="img" alt=""></div>
          </div>
          <div class="price">
            <p>￥{{ item.price }}</p>
            <p>{{ item.title }}</p>
          </div>
          <hr>
          <div class="personalBottom">
            <span><i class="fa fa-map-marker"></i>&nbsp; {{ item.addre }}</span>
            <p>
              <span><i class="fa fa-comment-o"></i>&nbsp;{{ item.msg_num }}</span>
              <span><i class="fa fa-heart-o"></i>&nbsp;{{ item.coll_num }}</span>
            </p>
          </div>

        </div>
        <div class="word">{{ word }}</div>
      </div>
    </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
export default {
  name: 'Personal',
  data(){
    return {
      personArr: [],
      word: '加载更多',
      loadWord: '下拉刷新',
      loadArrow: 'fa fa-arrow-down',
      startLoad: null,
      endStart: null,
      flag: 0,
      personList: [],
      centerBox: []
    }
  },

  methods: {
    async getInit(str){
      let self = this;
      if(!str){
        // let data = await this.$http.get('/xian/index.php?tp=api/sale_list&op=buy_list');
        // console.log(data);
        let data;
        this.$http.get('/static/json/personal.json', { retry: 5, retryDelay: 1000 })
          .then(function(res) {
            data = res.data;
            self.personArr = self.personArr.concat(data);
            self.personList = self.personList.concat(data);
            self.flag = 0;
            self.word = '加载更多';
            return;

          })
          .catch(function(err) {
            console.log('failed', err);
          });
      }
      let data;
      this.$http.get('/static/json/personal.json', { retry: 5, retryDelay: 1000 })
        .then(function(res) {
          data = res.data;
          self.personArr = self.personArr.concat(data);
          self.flag = 0;
          self.word = '加载更多';
        })
        .catch(function(err) {
          console.log('failed', err);
        });

    },
    getMore(){
      let { scrollTop, clientHeight, scrollHeight } = this.$refs.personList;
      let self = this;
      if((scrollTop + clientHeight + 20)  >= scrollHeight){
        if(self.flag) return;
        self.flag = 1;
        self.word = '正在加载中';
        let str = self.personList.slice(10, 20).join('');
        self.getInit(str);
      }

    },
    startload(){
      this.startLoad = parseInt(event.targetTouches[0].screenY);
    },
    load(){
      let self = this;
      this.endLoad = parseInt(event.targetTouches[0].screenY);
      if(parseInt($('.personList').css('top'))< 55){
        $('.personList').css('top', '55px');
      }
      if(self.endLoad < self.startLoad ){
        $('.personList').css('position', 'static');
      };
      let h = parseInt(this.endLoad - this.startLoad)/100 + 'rem';
      $('.load').css('height', h);
      if(self.endLoad - self.startLoad >= 50){

        self.loadWord = '松开刷新';
        self.loadArrow = 'fa fa-arrow-up'
      }


    },
    endload(){
      let { scrollTop } = this.$refs.personList;
      let self = this;
      this.loadWord = '下拉加载';
      self.loadArrow = 'fa fa-arrow-down';
      $('.load').animate({height: 0});
      if(self.endLoad - self.startLoad >= 50 && scrollTop <= 667){
        location.reload();
      }
    }

  },
  mounted(){
    this.getInit();
    // new BScroll('.personalCenter', {scrollX: true, scrollY: false, click: true});
    // new BScroll('.personal', {scrollX: false, scrollY: true, click: true});
  },
  updated(){
    this.$refs.centerBox.map((item)=>{
        let w = item.children[0].offsetWidth;
        let l = item.children.length;
        item.style.width = parseInt(w * l) / 100 + 'rem';
      });
    this.$refs.personalCenter.map((item)=>{
      new BScroll(item, {scrollX: true, scrollY: false, click: true});
    });

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .personal{
    width: calc( 100vw - 10px );
    height: calc( 100vh );
    font-size: 0.16rem;
    padding: 0.05rem 0.05rem 0.5rem;
    background-color: #eee;
  }
  .personList{
    position: absolute;
    width: calc( 100vw - 10px );
    height: calc( 100vh - 10px );
    overflow: auto;
  }
  .load{
    line-height: 0.5rem;
    text-align: center;
    height:0;
    overflow: hidden;
  }
  .personList .box{
    width:100%;
    overflow: hidden;
  }
  .personList .box .everyone{
    padding: 0.05rem 0;
    margin-bottom: 0.1rem;
    background-color: #fff;
    width:100%

  }
  .personList .box .personalTop{
    display: flex;
    align-items: center;
  }
  .personList .box .personalTop p{
    margin-left: 0.05rem;
  }
  .personList .box .personalTop p span{
    margin-bottom: 0.03rem
  }
  .personList .box .personalTop p span:nth-child(2){
    color:#C1C1C1;
  }
  .personList .box p span{
    display: block;
    font-size: 0.12rem;
  }
  .personList .box .userIcon{
    width:0.4rem;
    height:0.4rem;
    border-radius: 50%;
  }
  .personList .box .userIcon img{
    display: block;
    width:0.4rem;
    height:0.4rem;
    border-radius: 50%;
  }
  .personList .box .personalCenter{
    position: relative;
    height: 1.1rem;
    /*overflow: auto;*/
  }
  .personList .box .personalCenter .centerBox{
    position: absolute;
    height: 1.1rem
  }
  .personList .box .personalCenter .centerBox img{
    width:1rem;
    height:1rem;
    display: inline-block;
    padding: 0.05rem;
    border-radius: 0.1rem;
  }
  .personList .box .price{
    font-size: 0.14rem;
    color: #888888;
    padding: 0.1rem 0.15rem;
  }
  .personList .box .price p{
    margin-bottom: 0.05rem;
  }
  .personList .box .price p:nth-child(1){
    color: red
  }
  .personList .box .personalBottom{
    padding: 0.1rem 0.1rem;
    font-size: 0.12rem;
    color: #B5B5B5;
  }
  .personList .box .personalBottom p{
    float: right;
    display: flex;
    width:0.7rem;
    justify-content: space-around;
  }
  .word{
    font-size: 0.18rem;
    line-height: 0.44rem;
    text-align: center;
  }

</style>
