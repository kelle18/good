<template>
  <div class="xinZeng">
    <el-input v-model="input" class="Neirong" placeholder="请输入内容"></el-input>
    <el-row>
      <el-button type="primary" v-on:click="send">确认</el-button>
    </el-row>
  </div>
</template>
<script>
const axios = require("axios");
export default {
  data() {
    return {
      input: "",
    };
  },
  // methods: {
  //   send() {
  //     axios
  //       .post("https://api.orderour.com/api/centens", {
  //         text: this.input,
  //       })
  //       .then(function (res) {
  //         console.log("回应", res);
  //       })
  //       .catch(function (err) {
  //         console.log(err);
  //       });
  //   },
  // },
  methods: {
    send() {
      if (this.input == "") {
        alert("内容不能为空");
        console.log("点击了alert");
        return false; //js碰到return  一个false,就会停止后面的语句。
      }
      axios
        .post("https://api.orderour.com/api/centens", {
          text: this.input,
        })
        .then(function (res) {
          console.log("回应", res);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
.xinZeng {
  width: 100%;
  height: 200px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
}
.Neirong {
  width: 200px;
  margin-right: 10px;
}
</style>