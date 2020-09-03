<template>
    <div class="tab-bar-item" @click="itemClick">
        <slot name="item-icon1" v-if="!isActive"></slot>
        <slot name="item-icon2" v-else></slot>
        <div :class="{active:isActive}"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    name:"TabBarItem",
    props: {
        text:{
            type:String
        }
    },
    data(){
        return {
            // isActive:false
        }
    },
    computed: {
        isActive() {
            
            return this.$route.path.indexOf(this.text) !== -1
        }
    },
    methods: {
        itemClick() {
            this.$router.replace(this.text)
            console.log(this.$router)
        }
    }
}
</script>

<style>
    .tab-bar-item {
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 14px;
    }

    .tab-bar-item img{
        width: 24px;
        height: 24px;
        margin-top: 3px;
        vertical-align: middle;
    }
    .active{
        color: red;
    }
</style>