<template>
    <div id="home">
        
        <h1>CryptoWatch</h1>
        <div id="currencies">
            <div id="container">
                <CurrencyList :info="info" />
            </div>
            <div>
                <ul class="pagination">
                    <li class="page-item disabled">
                    <a class="page-link" href="#">&laquo;</a>
                    </li>
                    <li class="page-item active">
                    <a class="page-link" href="#">1</a>
                    </li>
                    <li class="page-item">
                    <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item">
                    <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                    <a class="page-link" href="#">4</a>
                    </li>
                    <li class="page-item">
                    <a class="page-link" href="#">5</a>
                    </li>
                    <li class="page-item">
                    <a class="page-link" href="#">&raquo;</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

import CurrencyList from "./CurrencyList";

export default {
  name: "homePage",
  components: {
    CurrencyList,
  },
  data() {
    return {
      info: null
    };
  },
  mounted() {
    axios
      .get("https://api.coinmarketcap.com/v2/ticker/?limit=10")
      .then(response => {
        this.info = response.data.data;
      });
  }
};
</script>

<style scoped>
#home {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}
#currencies {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
#container {
  width: 100%;
  align-items: center;
  align-self: center;
}
h1 {
  font-family: "Montserrat", sans-serif;
  margin: 20px;
}
</style>
