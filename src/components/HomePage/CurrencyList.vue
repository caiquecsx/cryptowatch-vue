<template>
    <div id="container">
        <div id="currencyList">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Symbol</th> 
                    <th>Price</th>
                    <th>Change</th>
                </tr>
                <tr v-for="currency in info" :key="currency.id">
                    <td>{{ currency.name }}</td>
                    <td>{{ currency.symbol }}</td> 
                    <td><span style="color: red">$</span>{{ currency.quotes.USD.price }}</td>
                    <td>{{currency.quotes.USD.percent_change_1h}}%</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  name: "currencyList",
  props: ["info"]
};
</script>

<style>
#container {
  display: flex;
  flex-direction: column;
  width: 45%;
}
#currencyList {
    align-self: center;
    overflow-x:auto;
}

table { 
    width: 100%; 
    border-collapse: collapse; 

    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 1.1em;
}
th { 
  font-weight: bold; 
}
td, th { 
  padding: 10px;
  text-align: left; 
}
</style>
