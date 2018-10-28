<template>
    <div id="home">
        <h1>CryptoWatch</h1>
        <CurrencyList :info="info" />
    </div>
</template>

<script>
import axios from 'axios'

import CurrencyList from './CurrencyList'
import Balance from './Balance'

export default {
    name: 'homePage',
    components: {
        CurrencyList,
        Balance
    },
    data(){
        return {
            info: null
        }
    },
    mounted(){
        axios
            .get('https://api.coinmarketcap.com/v2/ticker/?limit=10')
            .then(response => {
                this.info = response.data.data
            })
    }
}
</script>

<style scoped>
    #home{
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
    }

    h1{
        font-family: 'Montserrat', sans-serif;
    }
</style>
