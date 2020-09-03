<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "tabbar"
}
</script>

<style>
    #tab-bar {
        background-color: #f0f0f0;
        display: flex;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0px -1px 1px rgba(100, 100, 100, .2);
    }
</style>