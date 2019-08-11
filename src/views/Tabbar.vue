<template>
  <div>
    <keep-alive :max="10">
      <router-view></router-view>
    </keep-alive>
    <!-- 标签栏 -->
    <!-- <van-tabbar v-model="active">
      <van-tabbar-item
        v-for="(t,index) in tabbarItem"
        :route="true"
        @click="add(t.url)"
        :key="index"
        v-text="t.title"
        :icon="pic"
      ></van-tabbar-item>
    </van-tabbar>-->

    <van-tabbar v-model="active">
      <van-tabbar-item
        icon="https://css-m.1date1cake.com/themes/1d1c/images/v2/index/footer-icon1.png"
        @click="add(tabbarItem[0].url)"
      >首页</van-tabbar-item>
      <van-tabbar-item
        icon="https://css-m.1date1cake.com/themes/1d1c/images/v2/index/footer-icon2.png"
        @click="add(tabbarItem[1].url)"
      >全部商品</van-tabbar-item>
      <van-tabbar-item
        icon="https://css-m.1date1cake.com/themes/1d1c/images/v2/index/footer-icon3.png"
        @click="add(tabbarItem[2].url)"
      >购物车</van-tabbar-item>
      <van-tabbar-item
        icon="https://css-m.1date1cake.com/themes/1d1c/images/v2/index/footer-icon4.png"
        @click="add1(tabbarItem[3].url)"
      >个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      tabbarItem: [
        {
          url: "home"
        },
        {
          url: "order"
        },
        {
          url: "dingdan"
        },
        {
          url: "mine"
        }
      ]
    };
  },
  methods: {
    add(name) {
      this.$router.push(name);
    },
    add1(name) {
      this.$router.push(name);
      let data = document.cookie;
      if (data) {
        alert("您已经登录了!");
      }
    }
  }
};
</script>




<style>
* {
  margin: 0;
  padding: 0;
}
.fix {
  position: flex;
  top: 0px;
}
h2 {
  font-size: 15px;
  color: white;

  margin-left: 20px;
}
</style>

