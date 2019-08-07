<template>
  <!-- 头部 -->
  <div>
    <div class="header-float">
      <div class="left">
        <van-button type="primary" @click="showPopup" class="more leftlist">
          <!-- <a class="more"></a> -->
        </van-button>
      </div>
      <div class="center">蛋糕</div>
      <div class="right">
        <a href="flow.php?hmpl=header_v2" class="cart">
          <em id="top_cart_v2">0</em>
        </a>
        <a href="javascript:;" class="service" onclick="servicePopupShow();"></a>
      </div>
    </div>
    <!-- 遮罩层左边 -->
    <van-popup v-model="show" get-container="#app">
      <div id="user_nav" style="right: 0px; display: block;">
        <ul>
          <li class="red nav_btns">
            <!-- <a href="/login" class="btn_nav">登录</a> -->
            <router-link to="/login" class="btn_nav">登录</router-link>
            <router-link to="/sign" class="btn_nav" style="margin-right:0;">注册</router-link>
          </li>

          <li class="white" v-for="(item,index) in navlist" :key="index">
            <a>
              <img class="icon" :src="item.url" />
              <span v-text="item.name"></span>
            </a>
          </li>
        </ul>
      </div>
    </van-popup>
    <!-- 分类 -->
    <div class="link-wrapper">
      <div class="type-wrapper swiperRouter swiper-container-horizontal swiper-container-android">
        <div class="swiper-wrapper">
          <a href="category_v2.php?id=87" class="swiper-slide current swiper-slide-active">生日蛋糕</a>
          <a href="category_v2.php?id=88" class="swiper-slide swiper-slide-next">甜品下午茶</a>
          <a href="category_v2.php?id=89" class="swiper-slide">鲜花</a>
          <a href="category_v2.php?id=91" class="swiper-slide">套餐</a>
          <a href="category_v2.php?id=90" class="swiper-slide">生日场景包</a>
        </div>
      </div>

      <div class="label-wrapper">
        <a href="category_v2.php?id=87&amp;tag_id=26">主题生日蛋糕</a>
        <a href="category_v2.php?id=87&amp;tag_id=84">七夕</a>
        <a href="category_v2.php?id=87&amp;tag_id=78">经典生日蛋糕</a>
        <a href="category_v2.php?id=87&amp;tag_id=31">儿童</a>
        <a href="category_v2.php?id=87&amp;tag_id=29">婚庆</a>
        <a href="category_v2.php?id=87&amp;tag_id=27">下午茶蛋糕</a>
        <a href="category_v2.php?id=87&amp;tag_id=28">聚会</a>
        <a href="category_v2.php?id=87&amp;tag_id=76">大磅数</a>
        <a href="category_v2.php?id=87&amp;tag_id=77">畅销新品</a>
      </div>
    </div>
    <!-- //列表页 -->
    <!-- //点击分类选项时用v-for，控制shoplist，点击不同选项时自动切换下面的数据 -->
    <div class="list-wrapper">
      <div class="item-wrapper">
        <ul>
          <li v-for="(item,index) in shoplist" :key="index" num="2" :to="'/tabbar/dingdan'">
            <a href="#">
              <div class="item">
                <div class="img">
                  <img :src="item.url" />
                </div>
                <div class="info">
                  <div class="title">杨枝甘露糖水蛋糕</div>
                  <div class="price">
                    <span class="shop_price">168元/1.0磅</span>
                    <span class="original_price">198元</span>
                  </div>
                  <div class="msg">港式糖水蛋糕</div>
                </div>
              </div>
            </a>
          </li>
          <!-- <li>
            <a href="goods-861.html">
              <div class="item">
                <div class="img">
                  <img :src="item.url" />
                </div>
                <div class="info">
                  <div class="title">柚の园</div>
                  <div class="price">
                    <span class="shop_price">258元/1.3磅</span>
                    <span class="original_price">298元</span>
                  </div>
                  <div class="msg">柚香奶油口味蛋糕</div>
                </div>
              </div>
            </a>
          </li>-->
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      shoplist: [],
      // 遮罩层
      navlist: [
        {
          name: "首页",
          url: "https://img1-m.1date1cake.com/themes/1d1c/images/2.0/home.jpg"
        },
        {
          name: "会员中心",
          url: "https://img2-m.1date1cake.com/themes/1d1c/images/2.0/user.jpg"
        },
        {
          name: "我的订单",
          url: "https://img2-m.1date1cake.com/themes/1d1c/images/2.0/order.jpg"
        },
        {
          name: "生日蛋糕",
          url: "https://img1-m.1date1cake.com/themes/1d1c/images/2.0/cake.jpg"
        },
        {
          name: "生日派对",
          url:
            "https://img1-m.1date1cake.com/themes/1d1c/images/2.0/balloon.jpg"
        }
      ]
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    }
  },
  async created() {
    let lists = await this.$axios.post(
      "https://www.easy-mock.com/mock/5d40123c05c59f1e0bf0bbdf/list/indexlist"
    );
    this.shoplist = [...this.shoplist, ...lists.data.data.A];
    console.log(this.shoplist);
  }
};
</script>

<style>
.leftlist {
  background: orangered;
  border: 0px;
}
.van-popup--center {
  position: absolute;
  left: 240px;
  width: 268px;
  height: 260px;
  top: 100px;
}
#user_nav {
  width: 262px;
  top: 31px;
}
</style>


