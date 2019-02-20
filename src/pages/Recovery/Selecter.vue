<template>
    <div class="select" >
      <div ref="selectBox" class="selectBox">
        <div v-for="item, index in selectArr" :class="{selectList: true}" :id="item.id">
          <h1>{{ item.title }}</h1>
          <div class="list">
            <div v-for="little, index1 in item.little" @click="checkNow(index1)"
            >{{ little }}</div>
          </div>
        </div>
      </div>

      <div class="footer">
        <div @click="reChoice" class="choice">重新选择</div>
        <div class="showPrice">查看估价</div>
      </div>

      <Modal v-show="isShow" :is-show.sync="isShow" :is-clear.sync="isClear" @mClear="clearAll"></Modal>
      </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import Modal from "./Modal";
    export default {
      name: "Selecter",
      components: {Modal},
      props: ['checkNum'],
        mounted(){
          this.bs = new BScroll('.select', {scrollX: false, scrollY: true, click: true});
        },
        methods: {
          close(){
            this.isShow = 0;
          },
          reChoice(){
            this.isShow = 1;
          },
          clearAll(val) {
            if(val){
                let arr = $('.selectBox')[0].children;
                for(let key in arr){
                  if(key >=0 && key <= 10){
                    let arr1 = arr[key].children[1].children;
                    for(let key1 in arr1){
                      if(key1 >=0 && key1 <= 10){
                        arr1[key1].style.borderColor = '#DDDDDD';
                        arr1[key1].style.backgroundImage = '';
                      }
                    }
                  }
                }
                this.bs.scrollTo(0,0);
                this.checkAll = [];

              }

            },

          checkNow(){
            let id = event.path[2].getAttribute('id');
            let content = event.path[0].innerHTML;
            let obj = {};
            let isHas = 0;
            let arr = event.path[1].children;
            for(let key in arr){
              if(key >=0 && key <=20){
                arr[key].style.borderColor = '#DDDDDD';
                arr[key].style.backgroundImage = '';
              }
            }
            event.path[0].style.borderColor = '#F7B22E';
            event.path[0].style.backgroundImage = 'url(../../static/images/check.png)';
            this.checkAll.map((item)=>{
              if(item.id == id){
                isHas = 1;
                if(item.content == content) return;
                item.content = content;
              }
            });
            if(!isHas){
              obj.id = id;
              obj.content = content;
              this.checkAll.push(obj);
              this.$emit('update:checkNum', this.checkAll.length)
            }


            let d = event.path[2].offsetTop;
            this.bs.scrollTo(0, -d);

          }
        },
        data(){
          return {
            isShow: 0,
            isClear: 0,
            checkAll: [],
            selectArr: [
              {title: '型号',id:0,
                little: ['其他型号', 'A1903', 'A1865']
              },
              {title: '购买渠道',id:1,
                little: ['大陆国行', '港澳行货', '水货无锁', '水货有锁']
              },
              {title: '存储容量',id:2,
                little: ['64GB', '256GB']
              },
              {title: '颜色',id:3,
                little: ['银色', '深空灰色']
              },
              {title: '国内保修情况',id:4,
                little: ['保修一月以上', '保修一月以下或过保']
              },
              {title: 'iCloud是否注销',id:5,
                little: ['iCloud已注销', 'iCloud无法注销']
              },
              {title: '机身外观',id:6,
                little: ['外观完好，无任何使用痕迹', '外观轻微划痕', '外观有磕碰或掉漆']
              },
              {title: '屏幕外观',id:7,
                little: ['屏幕完好，无任何使用痕迹', '屏幕有划痕', '屏幕有缺角/脱胶/失灵']
              },
              {title: '屏幕显示',id:8,
                little: ['显示正常', '亮点/色差/轻微发黄', '严重老化/色斑', '换过屏幕/漏液/断线/显示不正常']
              },
              {title: '维修拆机史',id:9,
                little: ['无拆机无维修', '小维修', '修主板/换外壳/严重拆修']
              },
              {title: '功能性问题(可多选或不选)',id:10,
                little: ['机身变形或断裂', '全新（整套/未激活/未使用）',
                         '不能正常开机','官换机','液晶不显示', 'WIFI不正常',
                         '机身进水/受潮', '通话不正常', 'Face ID无法录入和识别'
                ]
              }


            ]
          }
        },

    }
</script>

<style lang="scss" scoped>
  .select{
    padding: 0.15rem 0.1rem 0.5rem;
    width: calc( 100vw - 20px );
    height: calc( 100vh );
  }
  .selectBox{
    position: absolute;
    width: calc( 100vw - 20px );
    height: 23.9rem;
    overflow: auto;

  }
  .selectList{
    margin-bottom: 0.1rem;
    h1{
      font-size: 0.14rem;
      color: #F9C35C;
      padding: 0.1rem 0;
    }
    .list{
      div{
        padding: 0.1rem 0.4rem;
        border: 1px solid #DDDDDD;
        margin-bottom: 0.1rem;
        border-radius: 0.05rem;
        color: #353535;
        background-repeat: no-repeat;
        background-position: 0.05rem center;
        background-size: 6%;
      }

    }
  }
  .footer{
    display: flex;
    position: fixed;
    bottom:0;
    left:0;
    height: 0.5rem;
    font-size: 0.18rem;
    width:100%;
    border-top: 2px solid #E8E8E8;
    div{
      flex:1;
      line-height: 0.5rem;
      text-align: center;
      background-color: #fff;
      color: #F9C664;
    }
    .showPrice{
      color: #333;
      background-color: #FFE742;
    }
  }


</style>
