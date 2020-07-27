<template>
  <div>
    <div class="shouYue">
      <p>总数量：{{num}}</p>
    </div>
  </div>
</template>
<script>
const axios = require("axios");
export default {
  data() {
    return {
      num: 18,
    };
  },
  mounted() {
    let that = this;
    axios.get("https://api.orderour.com/api/centens").then(function (res) {
      console.log("get的回应", res.data.data.length);

      that.num = res.data.data.length;
    });
  },
};
</script>
<style scoped>
.shouYue {
  width: 300px;
  height: 100px;
  text-align: center;
  font-size: 30px;
  margin: 0 auto;
  margin-top: 30px;
  border: 3px solid black;
}
</style>