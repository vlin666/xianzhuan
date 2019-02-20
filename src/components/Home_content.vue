<template>
  <div class="content">
    <div class="content_item" v-for="item in content">
      <div class="content_user">
        <img :src="item.user_icon" alt="">
        <div class="content_username">
          <p class="content_username_top">{{item.user_name}}</p>
          <p class="content_username_time">
            <i class="fa fa-clock-o"></i>
            <span>{{item.time}}</span>来过
          </p>
        </div>
      </div>
      <div class="content_img">
        <Slide :slideArr="item.images"></Slide>
      </div>
      <div class="content_price">
        <span class="new_price">{{item.price}}</span>
        <span class="old_price">原价{{item.old_price}}</span>
      </div>
      <div class="content_title">{{item.title}}</div>
      <div class="content_addre"><i class="fa fa-map-marker"></i>&nbsp;{{item.addre}}</div>
    </div>
  </div>
</template>

<script>
  import Slide from './Slide'
  export default {
    name: "Home_content",
    components:{ Slide },
    props:['content']
  }
</script>

<style lang="scss" scoped>
  .content_item{
    width:100%;
    padding-left:0.1rem;
    border-bottom: 0.05rem solid #f0f0f0;
    .content_user{
      width:100%;
      height:0.5rem;
      img{
        display:block;
        width:0.4rem;
        height:0.4rem;
        float:left;
        margin:0.05rem;
      }
      .content_username{
        height:0.5rem;
        float:left;
        .content_username_top{
          margin-top:0.05rem;
        }
        .content_username_time{
          font-size:0.12rem;
        }
      }
    }
    .content_img {
      height: 1rem;
    }
    .content_price{
      line-height:0.4rem;
      margin-left:0.05rem;
      .new_price{
        color:red;
        font-size:0.16rem;
      }
      .old_price{
        color:#ddd;
        font-size:0.13rem;
        text-decoration:line-through ;
      }
    }
    .content_title{
      line-height:0.2rem;
      margin-bottom:0.1rem;
      border-bottom:0.01rem solid #f0f0f0;
    }
    .content_addre{
      font-size:0.13rem;
      color:#b5b5b5;
      line-height:0.3rem;
    }
  }
</style>
