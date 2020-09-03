<template>
    <div id="home">
        <nav-bar class="homebar">
            <div slot="center">购物街</div>
        </nav-bar>
        
        <swiper-vant :images = 'banners'></swiper-vant>
        
        <recommend-view :recommends = 'recommend'></recommend-view>

        <feature-view></feature-view>

        <tab-control :titles = "titles"></tab-control>
        <ul>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
            <li>cool!</li>
        </ul>
    </div>
    
</template> 
 
<script>
import NavBar from 'components/common/navbar/NavBar'
import swiperVant from 'components/common/swiper/swiperVant'
import tabControl from 'components/common/tabControl/tabControl'

import {getHomeMultidata} from 'network/home' 

import  RecommendView from 'views/home/childComps/RecommendView'
import  featureView from 'views/home/childComps/featureView'

export default {
    name: "Home",
    components: {
        NavBar,
        swiperVant,
        RecommendView,
        featureView,
        tabControl
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
            recommend: [],
            titles:['流行', "流行", "流行"]
        }
    }
}
</script>

<style scoped>
    #home{
        padding-top: 44px;
    }
    .homebar{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }
</style>