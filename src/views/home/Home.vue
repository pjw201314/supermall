<template>
    <div id="home">
        <nav-bar>
            <div slot="center">购物街</div>
        </nav-bar>
        
        <swiper-vant :images = 'banners'></swiper-vant>
        
        <recommend-view :recommends = 'recommend'></recommend-view>
    </div>
    
</template> 
 
<script>
import NavBar from 'components/common/navbar/NavBar';
import {getHomeMultidata} from 'network/home';
import  RecommendView from 'views/home/childComps/RecommendView'
import swiperVant from 'components/common/swiper/swiperVant'
export default {
    name: "Home",
    components: {
        NavBar,
        swiperVant,
        RecommendView
    },
    created() {
        //1.请求多个数据 
        getHomeMultidata().then(res => {
            this.banners = res.data.data.banner.list
            this.recommend = res.data.data.recommend.list
            console.log("daaa",this.recommend)
        })
    },
    data(){
        return{
            banners:[],
            recommend: []
        }
    }
}
</script>

<style scoped>

</style>