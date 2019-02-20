<template>
    <div class="chindogu">
        <div class="My-integral">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547269013060&di=1ccc96fdf2816d5e96e592e0a60b5ee4&imgtype=0&src=http%3A%2F%2Fpic34.photophoto.cn%2F20150304%2F0017029525736904_b.jpg" alt="">
            <h2>我的积分：0</h2>
            <p class="detail">
                积分明细>>
            </p>
            <span class="rule">
                兑换规则
            </span>
        </div>
        <div class="coupon">
            <div class="coupon1">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547866071&di=1ae1d9c8a37a644ce5c24a8ef94415e2&imgtype=jpg&er=1&src=http%3A%2F%2Fimg10.360buyimg.com%2FpopWaterMark%2Fjfs%2Ft1426%2F233%2F49412118%2F89242%2F898667ba%2F55518cdfNbf7d1f8d.jpg" alt="">
                <p class="MoneyOff">
                    10元回收券，满100元可用
                </p>
                <p class="points">100积分</p>
            </div>
            <div class="draw">
                <p>立即领取</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .chindogu{
        margin-top: 0.75rem;
        .My-integral{
            height: 1.2rem;
            position: relative;
            img{
                width: 0.6rem;
                height: 0.6rem;
                position: absolute;
                top: 0.3rem;
                left: 0.3rem;
            }
            h2{
                font-size: 0.16rem;
                position: absolute;
                top: 0.3rem;
                left:0.95rem;
            }
            .detail{
                font-size: 0.12rem;
                 position: absolute;
                top: 0.6rem;
                left:0.95rem;
                color: blue;
            }
            .rule{
                border: 1px solid #433;
                position: absolute;
                top: 0.3rem;
                right:0.5rem;
            }
        }
        .coupon{
            height: 6rem;
            background: #ffffff;
            position: relative;
            .coupon1{
                width: 2.35rem;
                height: 1rem;
                background: #6d6969c0;
                position: absolute;
                left: 0.3rem;
                img{
                width: 0.4rem;
                height: 0.4rem;
                position: absolute;
                top: 0.3rem;
                left: 0.3rem;
                }
                .MoneyOff{
                    font-size: 0.12rem;
                    position: absolute;
                    top: 0.3rem;
                    left:0.85rem;
                    color: #ffffff;
                }
                .points{
                    font-size: 0.12rem;
                    position: absolute;
                    top: 0.5rem;
                    left:0.85rem;
                    color: red;
                }
            }
            .draw{
                width: 1rem;
                height: 1rem;
                position: absolute;
                right: 0.1rem;
                 background: #6d6969c0;
                p{
                    text-align: center;
                   line-height: 1rem;
                   color: rgb(167, 99, 99)
                }
            } 
        }
    }
</style>
