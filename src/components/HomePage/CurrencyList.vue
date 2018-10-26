<template>
    <div id="currencyList">
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th> 
                <th>Change</th>
                <th>%</th>
            </tr>
            <tr>
                <td>Bitcoin</td>
                <td><span style="color: red">USD</span> 6,435.75</td> 
                <td>-0.87</td>
                <td>-0.01%</td>
            </tr>
            <tr>
                <td>Bitcoin</td>
                <td>6,435.75</td> 
                <td>-0.87</td>
                <td>-0.01%</td>
            </tr>
            <tr>
                <td>Bitcoin</td>
                <td>6,435.75</td> 
                <td>-0.87</td>
                <td>-0.01%</td>
            </tr>
            <tr>
                <td>Bitcoin</td>
                <td>6,435.75</td> 
                <td>-0.87</td>
                <td>-0.01%</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
  name: "currencyList"
};
</script>

<style>
    #currencyList{
        display: flex;
        align-content: center;
        align-items: center;
        width: 100%;
        background-color: #461a97;
    }
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        align-self: center;
        width: 100%;
        border-radius: 3px;
        color: #FFF;
    }
    td, th {
        text-align: left;
        padding: 20px;
    }
</style>
