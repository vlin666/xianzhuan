<template>
    <div class="back-top-box">
        <transition
            enter-active-class="animated bounce"
            leave-active-class="animated fadeOut"
        >
            <div class="back-top" v-if="isShow">
                <i class="fa fa-arrow-up"></i>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isShow:false
        }
    },
    created(){
        window.addEventListener("scroll",()=>{
            if(document.documentElement.scrollTop > 200){
                if(!this.isShow){
                    this.isShow = true;
                }
            }else{
                if(this.isShow){
                    this.isShow = false;
                }
            }
        })
    }
}
</script>
<style lang="scss" scoped>
    .back-top-box{
        position: fixed;
        right:15px;
        bottom:0.75rem;
        .back-top{
            width:60px;
            height:60px;
            background: rgba(0,0,0,0.7);
            border-radius: 50%;
            color:#fff;
            font-size: 18px;
            display: flex;
            justify-content: center;
            align-items:center;
        }
        &[size='small']{
            .back-top{
                width:50px;
                height:50px;
            }
        }
    }
</style>

