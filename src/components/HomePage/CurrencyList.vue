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
  width: 50%;
}
#currencyList {
    align-self: center;
}
table {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  border-collapse: collapse;
  align-self: center;
  width: 100%;
  border-radius: 3px;
  color: #fff;
}
td,
th {
  text-align: left;
  padding: 3%;
}
</style>
