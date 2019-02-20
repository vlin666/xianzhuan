<template>
  <div class="slide">
    <div class="slide_father" ref="slidefather">
      <div class="slide_box" ref="slidebox">
        <img v-for="item in slideArr" :src="item" alt="">
      </div>
    </div>
  </div>

</template>

<script>
    import BetterScroll from 'better-scroll';
    export default {
        name: "Slide",
        props:['slideArr'],
        created(){
          this.$nextTick(()=>{
            this.slide();
          });
        },
        methods:{
          slide(){
            let width = this.slideArr.length * 1.1;
            this.$refs.slidebox.style.width = width + 'rem';
            //console.log(this.$refs.slidefather);
            new BetterScroll(this.$refs.slidefather,{scrollX:true,scrollY:false,click:true});

          }
        }
    }
</script>

<style lang="scss" scoped>
  .slide{
    height:1rem;
    overflow: hidden;
    .slide_father{
      height:1rem;
      position:relative;
      .slide_box{
        height:1rem;
        position:absolute;
        img{
          float:left;
          width:1rem;
          height:1rem;
          border-radius:0.05rem;
          margin-left:0.05rem;
        }
      }
    }
  }
</style>
