<template>
    <div class="phoneStairs">
      <HeaderNav class="header"></HeaderNav>
      <div class="classify">
        <span v-for="item, index in navArr"
              @click="go(index)"
              :class="{ isClick: index === isClick }">{{ item.title }}</span>
      </div>
      <Stairs :stairs-data="stairsData" :is-has="isHas"></Stairs>
    </div>
</template>

<script>
    import HeaderNav from "../../../components/HeaderNav";
    import Stairs from "../../../components/Stairs";
    export default {
        name: "PhoneStairs",
        components: {Stairs, HeaderNav},
        data(){
          return{
            stairsData: [
              {
                name: '苹果',
                sub:[
                  {"id":"98","name":"iPhone X"},
                  {"id":"767","name":"iPhone XS"},
                  {"id":"768","name":"iPhone XS Max"},
                  {"id":"814","name":"iPhone XR"},
                  {"id":"99","name":"iPhone 8 Plus"},
                  {"id":"100","name":"iPhone 8"},
                  {"id":"101","name":"iPhone 7 Plus"},
                  {"id":"102","name":"iPhone 7"},
                  {"id":"103","name":"iPhone 6s Plus"},
                  {"id":"105","name":"iPhone 6 Plus"},
                  {"id":"104","name":"iPhone 6s"},
                  {"id":"106","name":"iPhone 6"},
                  {"id":"107","name":"iPhone SE"},
                  {"id":"108","name":"iPhone 5s"},
                  {"id":"109","name":"iPhone 5c"}
                ]
              },
              {
                name: '三星',
                sub: [
                  {"id":"183","name":"Galaxy S8"},
                  {"id":"182","name":"Galaxy S8+"},
                  {"id":"595","name":"Galaxy S9+"},
                  {"id":"531","name":"Galaxy Note 8"},
                  {"id":"185","name":"Galaxy S7 edge"},
                  {"id":"186","name":"Galaxy C9 Pro C9000"},
                  {"id":"596","name":"Galaxy S9"},
                  {"id":"199","name":"Galaxy C5"},
                  {"id":"742","name":"W2018"},
                  {"id":"193","name":"Galaxy C7"},
                  {"id":"181","name":"W2017"},
                  {"id":"184","name":"W2016"},
                  {"id":"192","name":"Galaxy S7"},
                  {"id":"189","name":"G9198"},
                  {"id":"190","name":"Galaxy Note5"},
                  {"id":"201","name":"Galaxy S6"},
                  {"id":"191","name":"Galaxy C5 Pro"},
                  {"id":"188","name":"Galaxy S6 edge+"},
                  {"id":"187","name":"Galaxy C8"},
                  {"id":"194","name":"GALAXY C7 Pro"},
                  {"id":"710","name":"Galaxy A9"},
                  {"id":"735","name":"Galaxy A9 Star"},
                  {"id":"549","name":"Galaxy Folder2"},
                  {"id":"532","name":"Galaxy A5 2016"},
                  {"id":"237","name":"Galaxy On5"},
                  {"id":"196","name":"Galaxy S6 edge"},
                  {"id":"197","name":"W2015"},
                  {"id":"198","name":"Galaxy A9 A9100"},
                  {"id":"200","name":"Galaxy A9 A9000"},
                  {"id":"202","name":"Galaxy A7"},
                  {"id":"203","name":"Galaxy A7 A7100"},
                  {"id":"229","name":"Galaxy E7"},
                  {"id":"232","name":"Galaxy On7"},
                  {"id":"761","name":"Galaxy Note9"}
                ]
              },
              {
                name: '华为',
                sub: [
                  {"id":"611","name":"P20 Pro"},
                  {"id":"32","name":"Mate 9"},
                  {"id":"612","name":"P20"},
                  {"id":"28","name":"Mate10 Pro"},
                  {"id":"34","name":"P10"},
                  {"id":"29","name":"Mate10"},
                  {"id":"42","name":"P9"},
                  {"id":"41","name":"Mate 8"},
                  {"id":"31","name":"P10 Plus"},
                  {"id":"590","name":"nova 3e"},
                  {"id":"775","name":"nova 3i"},
                  {"id":"774","name":"nova 3"},
                  {"id":"627","name":"Mate RS"},
                  {"id":"546","name":"Mate10"},
                  {"id":"597","name":"Mate9"},
                  {"id":"523","name":"nova 2S"},
                  {"id":"33","name":"Mate 9 Pro"},
                  {"id":"37","name":"nova2 Plus"},
                  {"id":"628","name":"8 Plus"},
                  {"id":"40","name":"nova2"},
                  {"id":"36","name":"P9 Plus"},
                  {"id":"38","name":"7S"},
                  {"id":"39","name":"7 Plus"},
                  {"id":"35","name":"u9ea6"},
                  {"id":"48","name":"nova"},
                  {"id":"44","name": "nova"},
                  {"id":"51","name":"Mate S"},
                  {"id":"45","name":"G9 Plus"},
                  { "id":"52","name":"P8"},
                  {"id":"54","name":"G9"},
                  {"id":"787","name":"Mate10 lite"},
                  {"id":"806","name":"Plus"},
                  {"id":"809","name":"Mate 20 Pro"},
                  {"id":"810","name":"Mate 20 X"},
                  {"id":"786","name":"Mate9   lite"},
                  {"id":"785","name":"P20 lite"},
                  {"id":"773","name":"Mate 20"},
                  {"id":"631","name":"P10"},
                  {"id":"49","name":"P8 Max"},
                  {"id":"811","name":"MAX"}
                ]
              },
              {
                name: '荣耀',
                sub: [
                  {"id":"75","name":"9"},
                  {"id":"614","name":"10"},
                  {"id":"73","name":"V10"},
                  {"id":"80","name":"8"},
                  {"id":"76","name":"X"},
                  {"id":"83","name":"6X"},
                  {"id":"81","name":"8"},
                  {"id":"74","name":"V9"},
                  {"id":"91","name":"5X"},
                  {"id":"77","name":"9"},
                  {"id":"78","name":"Note8"},
                  {"id":"82","name":"V8"},
                  {"id":"84","name":"V9 play"},
                  {"id":"79","name":"Magic"},
                  {"id":"85","name":"6A"},
                  {"id":"92","name":"5A"},
                  {"id":"86","name":"7"},
                  {"id":"591","name":"7A"},
                  {"id":"798","name":"8C"},
                  {"id":"783","name":"8X Max"},
                  {"id":"782","name":"8X"},
                  {"id":"759","name":"Note10"},
                  {"id":"758","name":"play"},
                  {"id":"730","name":"9i"},
                  {"id":"598","name":"7C"},
                  {"id":"807","name":"Magic2"}
                ]
              },
              {
                name: '小米',
                sub: [
                  {"id":"112","name":"6"},
                  {"id":"111","name":"MIX2"},
                  {"id":"592","name":"MIX2S"},
                  {"id":"731","name":"8"},
                  {"id":"124","name":"Note4X"},
                  {"id":"120","name":"5"},
                  {"id":"114","name":"Note3"},
                  {"id":"123","name":"4X"},
                  {"id":"118","name":"5 plus"},
                  {"id":"633","name":"6X"},
                  {"id":"732","name":"8 SE"},
                  {"id":"125","name":"Max"},
                  {"id":"593","name":"Note 5"},
                  {"id":"117","name":"Max 2"},
                  {"id":"116","name":"5s Plus"},
                  {"id":"115","name":"Note2"},
                  {"id":"128","name":"Pro"},
                  {"id":"121","name":"5X"},
                  {"id":"119","name":"5s"},
                  {"id":"126","name":"Note5A"},
                  {"id":"113","name":"MIX"},
                  {"id":"127","name":"5c"},
                  {"id":"122","name":"5"},
                  {"id":"130","name":"Note4"},
                  {"id":"129","name":"4"},
                  {"id":"781","name":"Max 3"},
                  {"id":"741","name":"6 Pro"},
                  {"id":"740","name":"6A"},
                  {"id":"739","name":"6"},
                  {"id":"708","name":"S2"},
                  {"id":"138","name":"4A"},
                  {"id":"137","name":"4c"},
                  {"id":"136","name":"4s"},
                  {"id":"808","name":"MIX 3"}
                ]
              },
              {
                name: 'oppo',
                sub: [
                  {"id":"594","name":"OPPO R15"},
                  {"id":"151","name":"OPPO R9"},
                  {"id":"155","name":"OPPO A57"},
                  {"id":"148","name":"OPPO R9s"},
                  {"id":"145","name":"OPPO R11"},
                  {"id":"156","name":"OPPO A37"},
                  {"id":"143","name":"OPPO R11s"},
                  {"id":"147","name":"OPPO R9 Plus"},
                  {"id":"153","name":"OPPO A59s"},
                  {"id":"733","name":"OPPO R15"},
                  {"id":"749","name":"OPPO Find X"},
                  {"id":"142","name":"OPPO R11s Plus"},
                  {"id":"144","name":"OPPO R11 Plus"},
                  {"id":"634","name":"OPPO A3"},
                  {"id":"146","name":"OPPO R9s Plus"},
                  {"id":"530","name":"OPPO A79"},
                  {"id":"734","name":"OPPO R15 "},
                  {"id":"548","name":"OPPO A73"},
                  {"id":"150","name":"OPPO A83"},
                  {"id":"149","name":"OPPO A77"},
                  {"id":"154","name":"OPPO A59"},
                  {"id":"158","name":"OPPO R7s plus"},
                  {"id":"157","name":"OPPO R7s"},
                  {"id":"152","name":"OPPO R7 Plus"},
                  {"id":"635","name":"OPPO A1"},
                  {"id":"801","name":"OPPO R17 Pro"},
                  {"id":"800","name":"OPPO R15x"},
                  {"id":"792","name":"OPPO A5"},
                  {"id":"791","name":"OPPO A7x"},
                  {"id":"790","name":"OPPO K1"},
                  {"id":"762","name":"OPPO R17"},
                  {"id":"748","name":"OPPO Find X"},
                  {"id":"821","name":"OPPO A7"}
                ]
              },
              {
                name: 'vivo',
                sub: [
                  {"id":"568","name":"vivo X21"},
                  {"id":"263","name":"vivo X20"},
                  {"id":"269","name":"vivo X9"},
                  {"id":"273","name":"vivo X7"},
                  {"id":"274","name":"vivo Y67"},
                  {"id":"276","name":"vivo Y66"},
                  {"id":"268","name":"vivo X9 Plus"},
                  {"id":"272","name":"vivo X7 Plus"},
                  {"id":"637","name":"vivo Y85"},
                  {"id":"736","name":"vivo NEX"},
                  {"id":"264","name":"vivo X20Plus"},
                  {"id":"265","name":"vivo Xplay6"},
                  {"id":"267","name":"vivo Y79"},
                  {"id":"271","name":"vivo X9s"},
                  {"id":"266","name":"vivo X9s Plus"},
                  {"id":"533","name":"vivo Y75"},
                  {"id":"278","name":"vivo X6S Plus"},
                  {"id":"277","name":"vivo X6S"},
                  {"id":"280","name":"vivo Y55"},
                  {"id":"279","name":"vivo X6"},
                  {"id":"285","name":"vivo Y53"},
                  {"id":"794","name":"vivo NEX"},
                  {"id":"793","name":"vivo Z3"},
                  {"id":"772","name":"vivo X23"},
                  {"id":"755","name":"VIVO Y75S"},
                  {"id":"754","name":"Z1i"},
                  {"id":"753","name":"VIVO Z1"},
                  {"id":"752","name":"VIVO X20"},
                  {"id":"751","name":"VIVO X20plus"},
                  {"id":"750","name":"VIVO X21 FIFA"},
                  {"id":"270","name":"vivo Xplay5"},
                  {"id":"715","name":"vivo Y83"},
                  {"id":"714","name":"vivo X21i"},
                  {"id":"639","name":"vivo Y69"},
                  {"id":"638","name":"vivo Y71"},
                  {"id":"275","name":"vivo X6 Plus"},
                  {"id":"281","name":"vivo V3Max"},
                  {"id":"795","name":"vivo NEX"}
                ]
              },
              {
                name: '魅族',
                sub:[
                  {"id":"310","name":" Note5"},
                  {"id":"307","name":" Note6"},
                  {"id":"315","name":" Note3"},
                  {"id":"311","name":" E2"},
                  {"id":"322","name":" E"},
                  {"id":"553","name":" S6"},
                  {"id":"318","name":" MX6"},
                  {"id":"305","name":" Pro 7"},
                  {"id":"641","name":" 15"},
                  {"id":"640","name":" 15 Plus"},
                  {"id":"304","name":" Pro 7 Plus"},
                  {"id":"643","name":" E3"},
                  {"id":"306","name":" Pro 6 Plus"},
                  {"id":"642","name":" M15"},
                  {"id":"309","name":" Pro 6s"},
                  {"id":"308","name":" Pro 6"},
                  {"id":"314","name":" Max"},
                  {"id":"313","name":" X"},
                  {"id":"769","name":" 16th"},
                  {"id":"770","name":" 16th Plus"},
                  {"id":"312","name":" Pro 5"},
                  {"id":"815","name":" Note8"},
                  {"id":"771","name":"16X"},
                  {"id":"319","name":" 6"},
                  {"id":"316","name":" MX5"},
                  {"id":"743","name":" 6T"},
                  {"id":"788","name":" V8"}
                ]
              },
              {
                name: '乐视',
                sub: [
                  {"id":"620","name":"Pro 3"},
                  {"id":"380","name":"Max"},
                  {"id":"381","name":"Max 2"},
                  {"id":"379","name":"2 Pro"},
                  {"id":"385","name":"Max"},
                  {"id":"378","name":"Pro 3"}
                ]
              },
              {
                name: '美图',
                sub: [
                  {"id":"470","name":" T8"},
                  {"id":"756","name":" V6"},
                  {"id":"471","name":" M8"},
                  {"id":"468","name":" T8S"},
                  {"id":"757","name":" T9"},
                  {"id":"469","name":" M8S"},
                  {"id":"473","name":" M6s"},
                  {"id":"472","name":" M6"},
                  {"id":"475","name":" V4"},
                  {"id":"477","name":" M4"},
                  {"id":"474","name":" V4s"},
                  {"id":"476","name":" M4s"}
                ]

              },
              {
                name: '锤子',
                sub: [
                  {"id":"495","name":" Pro2"},
                  {"id":"624","name":" 3"},
                  {"id":"496","name":" Pro"},
                  {"id":"497","name":"Smartisan M1L"},
                  {"id":"498","name":"Smartisan M1"},
                  {"id":"747","name":"R1"}
                ]
              },
              {
                name: '一加',
                sub: [
                  {"id":"502","name":"5T"},
                  {"id":"503","name":"5"},
                  {"id":"504","name":"3T"},
                  {"id":"505","name":"3"},
                  {"id":"506","name":"2"},
                  {"id":"737","name":"6"},
                  {"id":"813","name":"6T"}
                ]
              },
              {
                name: '摩托罗拉',
                sub: [
                  {"id":"609","name":"Moto Z2 Play"},
                  {"id":"510","name":"Moto Z"},
                  {"id":"509","name":"Moto Z Play"},
                  {"id":"724","name":"Z 2018"},
                  {"id":"588","name":"Moto Z Force"}
                ]
              },
              {
                name: '努比亚',
                sub: [
                  {"id":"479","name":"Z17S"},
                  {"id":"480","name":"Z17"},
                  {"id":"608","name":"Z17 miniS"},
                  {"id":"481","name":"Z11"},
                  {"id":"482","name":"Z17 mini"},
                  {"id":"483","name":"Z11 miniS"},
                  {"id":"484","name":"M2"},
                  {"id":"485","name":"Z11 Max"},
                  {"id":"489","name":"N2"},
                  {"id":"721","name":"Z17"},
                  {"id":"722","name":"V18"},
                  {"id":"746","name":"Z18 mini"}
                ]
              },
            ],
            isHas: 0,
            navArr: [
              {title: '手机'},
              {title: '平板电脑'},
              {title: '虚拟卡回收'},
            ],
            isClick: 0
          }
        },
        mounted(){
          this.getInit();
        },
        methods: {
          go(index){
            this.isClick = index
          },
          getInit(){
            let self = this;
            let data;
            // this.$http.get('../../../../static/data.json')
            //   .then(function(res) {
            //     data = res;
            //     self.stairsData = data;
            //     console.log(res);
            //     return;
            //
            //   })
            //   .catch(function(err) {
            //     console.log('failed', err);
            //   });
          }
        }
    }
</script>

<style lang="scss" scoped>
  .phoneStairs{
    width: 100%;
    height: calc( 100vh - 50px );
    overflow: auto;
    padding-top: 1rem;
    .header{
      position: fixed;
      top:0;
      left:0;
      z-index: 1;
      background-color: #FFE742;
    }
  }
  .classify{
    width: 100%;
    height: 0.5rem;
    background-color: #FFE742;
    display: flex;
    position: fixed;
    top: 0.5rem;
    left: 0;
    z-index: 2;
    span{
      width: 33%;
      height: 0.5rem;
      line-height: 0.5rem;
      font-size: 0.16rem;
      text-align: center;

    }
    .isClick{
      border-bottom: 2px solid #E20F00;
      height: 0.48rem;
    }
  }
</style>
