<template>
    <div id="container">
        <div id="currencyList">
            <h2>Market Capitalization</h2>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Symbol</th>
                        <th scope="col">Price</th>
                        <th scope="col">Change</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="currency in info" :key="currency.id" class="table-active">
                        <!-- <th scope="row">Active</th> -->
                        <td>{{ currency.name }}</td>
                        <td>{{ currency.symbol }}</td> 
                        <td>${{ currency.quotes.USD.price }}</td>
                        <td>{{currency.quotes.USD.percent_change_1h}}%</td>
                        <td><Actions/></td>
                    </tr>
                </tbody>
                <tr >
                    
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import Actions from './Actions'
export default {
  name: "currencyList",
  props: ["info"],
  components:{
      Actions
  }
};
</script>

<style>
#container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
}
#currencyList {
    align-self: center;
    width: 0 auto;
}
h2{
        font-family: 'Montserrat', sans-serif;
}
table { 
    width: 0 auto;
    border-collapse: collapse; 

    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 1.1em;
}
td, th { 
  padding: 10px;
  text-align: left; 
}
</style>
