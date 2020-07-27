<template>
  <div class="box">
    <div class="left">
      <!-- <a href="./pages/a.vue">a页面</a> -->
      <button :class="{seled:selnum==1}" @click="send(1)">
        <router-link to="/a" class="luyou">首页</router-link>
      </button>
      <br />
      <button :class="{seled:selnum==2}" @click="send(2)">
        <router-link to="/b" class="luyou">新增</router-link>
      </button>
      <br />
      <button :class="{seled:selnum==3}" @click="send(3)">
        <router-link to="/c" class="luyou">查看</router-link>
      </button>
    </div>
    <div class="right">
      <router-view />
      <!-- <router-view > </router-view > -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selnum: 1,
    };
  },
  methods: {
    send(n) {
      console.log("看看selnum", n);
      this.selnum = n;
    },
  },
};
</script>
<style scoped>
.seled {
  background: rebeccapurple;
}
.box {
  display: flex;
  height: 100vh;
}
.left {
  width: 100px;
  height: 100%;
  background: black;
}
.right {
  flex: 1;
  height: 100%;
  background: #fff;
}
.left button {
  width: 85px;
  height: 40px;
  font-size: 20px;
  margin-top: 30px;
  border: none;
}
.luyou {
  color: #fff;
}
button:hover {
  background-color: blue;
}
</style>