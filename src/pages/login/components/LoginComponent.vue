<template>
    <div style="width: 100vw;height: 100vh;" :style="img">
    </div>
</template>

<script>
    export default {
        name: "LoginComponent",
        data () {
            return {
                img: {
                    backgroundImage: "url(" +require('../../../assets/images/bg.jpg') + ")",
                    backgroundRepeat:"no-repeat",
                    backgroundSize: 'cover'
                }
            }
        }
    }
</script>

<style scoped>

</style>
