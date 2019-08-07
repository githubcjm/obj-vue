<template>
  <div>
    <div class="header-float">
      <div class="left">
        <van-button type="primary" @click="showPopup" class="more leftlist">
          <!-- <a class="more"></a> -->
        </van-button>
      </div>
      <div class="center">产品详情</div>
      <div class="right">
        <a href="flow.php?hmpl=header_v2" class="cart">
          <em id="top_cart_v2">0</em>
        </a>
        <router-link to="/tabbar/home" class="service"></router-link>
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

    <!-- //轮播 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image,index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

    <!-- 价格 -->
    <!-- 列表页传入id，详情页根据id获取数据渲染对应数据，生成页面 -->
    <van-card
      num="2"
      tag="标签"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      origin-price="10.00"
    />

    <div class="shopclass" @click="hidshop">
      <h3>选择磅数</h3>
      <div class="shoptex">
        <p class="msg" id="selected_spec">1.0磅 [2~4人份]</p>
      </div>
      <div class="right">></div>
    </div>
    <!-- 上拉菜单 -->
    <!-- 弹出详情价格 -->
    <van-action-sheet v-model="show1" title="标题">
      <p>
        <!-- 这里放商品规格的组件 -->
        <!-- //加入购物车 -->
      </p>
    </van-action-sheet>

    <!-- 客户评价 -->
    <div class="evaluate-wrapper" id="evaluate">
      <div class="title-wrapper">
        <h3>客户评价</h3>
        <a>更多</a>
      </div>
      <div class="content-wrapper">
        <ul>
          <!-- 拿取后端数据，循环li，生成评价列 -->
          <li>
            <div class="head">
              <div class="img">
                <img
                  src="http://thirdwx.qlogo.cn/mmopen/ic6FibIichZFsSAUhpjKKJGqN7crjUaB6b9jMeLuiaDOlOcrkJZ6EfmdVfibMPfuxFQxSr6Sb65Y9YZia2KUfktiaHRuwDfgTh7usol/132"
                />
              </div>
              <div class="name">GMf13825238511</div>
              <div class="msg">2~4人份</div>
              <div class="date">2019/08/06 10:20</div>
            </div>
            <div class="content">好吃！口感细腻，入口即化。奶油醇香，是我喜欢的味道</div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 产品介绍 -->
    <div class="introduce">产品介绍</div>
    <div class="introduce-pic">
      <img src="https://img2.1date1cake.com/images/201906/1559789622614794148.jpg" alt />
    </div>

    <!-- 商品导航 -->
    <!-- 点击事件分别绑定不同事件，第二个跳到购物车页面，第三第四跳到商品规格     -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
      <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      show1: false,
      show2: true,
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
      ],
      //轮播图
      images: [
        "https://img2.1date1cake.com/images/201906/goods_img/869_P_1560507001107.jpg",
        "https://img1.1date1cake.com/images/201907/goods_img/869_G_1563868812687.jpg"
      ]
    };
  },
  methods: {
    //商品导航
    // 这里绑定事件
    onClickIcon() {
      Toast("点击图标");
    },
    onClickButton() {
      Toast("点击按钮");
    },

    hidshop() {
      this.show1 = true;
    },
    showPopup() {
      this.show = true;
    }
  }
};
</script>
<style>
.van-popup--center {
  position: absolute;
  left: 240px;
  width: 240px;
  height: 230px;
  top: 17%;
  left: 68%;
}
#user_nav {
  width: 100%;
  top: 0;
}
.leftlist {
  background: orangered;
  border: 0px;
}
.header-float .service:after {
  content: "";
  position: absolute;
  top: 50%;
  /* margin-top: -0.2rem; */
  left: 50%;
  margin-left: -1.2rem;
  width: 20px;
  height: 20px;
  background-size: 100%;
  background-image: url(https://css-m.1date1cake.com/themes/1d1c/images/v2/header-home-icon.png);
}
.van-swipe-item img {
  height: 375px;
  width: 375px;
}
.van-swipe {
  top: 48px;
}
.shopclass {
  height: 30px;
  line-height: 30px;
}
.shopclass h3 {
  font-size: 13px;
  margin-left: 10px;
  float: left;
}
.shoptex p {
  font-size: 12px;
  margin-left: 12px;
  float: left;
}
.right {
  float: right;
  margin-right: 15px;
}
.introduce {
  background: orangered;
  color: white;
  height: 37px;
  width: 100%;
  line-height: 37px;
  text-align: center;
}
.introduce-pic img {
  width: 100%;
  height: 100%;
}
</style>


