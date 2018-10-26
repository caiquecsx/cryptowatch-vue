<template>
    <div id="home">
        <h1>CryptoWatch</h1>
        <Balance id="balance"/>
        <CurrencyList/>
    </div>
</template>

<script>

import CurrencyList from './CurrencyList'
import Balance from './Balance'

export default {
    name: 'homePage',
    components: {
        CurrencyList,
        Balance
    }
}
</script>

<style scoped>
    #home{
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    #balance{
        align-self: flex-end;
    }
</style>
