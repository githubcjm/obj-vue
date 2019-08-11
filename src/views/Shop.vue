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
        <router-link to="/tabbar/home">
          <a class="cart">
            <em id="top_cart_v2">0</em>
          </a>
        </router-link>
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
      <van-swipe-item v-for="(image,index) in shoplist.images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

    <!-- 价格 -->
    <!-- 列表页传入id，详情页根据id获取数据渲染对应数据，生成页面 -->
    <van-card
      num="2"
      tag="标签"
      price="2.00"
      :desc="shoplist.title"
      :title="shoplist.name"
      :thumb="shoplist.url"
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
      <img :src="shoplist.bigpic" alt />
    </div>

    <!-- 商品导航 -->
    <!-- 点击事件分别绑定不同事件，第二个跳到购物车页面，第三第四跳到商品规格，加入购物车还是留在本页，立即购买确定后跳到购物车页面     -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
      <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
    </van-goods-action>

    <!-- //购物车 -->
    <van-sku
      v-model="show3"
      :sku="sku"
      :goods="goods"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
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
      shoplist: {},
      //购物车
      show3: false,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            v: [
              {
                id: "1215", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                imgUrl: "https://img.yzcdn.cn/2.jpg" // 规格类目图片，只有第一个规格类目可以定义图片
              },
              {
                id: "1215",
                name: "蓝色",
                imgUrl: "https://img.yzcdn.cn/2.jpg"
              }
            ],
            k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1193", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: "1.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "1", // 是否必填 '1' 表示必填
            placeholder: "" // 可选值，占位文本
          }
        ],
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 商品标题
        title: "测试商品",
        // 默认商品 sku 缩略图
        picture: "https://img.yzcdn.cn/2.jpg"
      },
      messageConfig: {
        // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
        uploadImg: () => {
          return new Promise(resolve => {
            setTimeout(
              () =>
                resolve(
                  "https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg"
                ),
              1000
            );
          });
        },
        // 最大上传体积 (MB)
        uploadMaxSize: 3,
        // placeholder 配置
        placeholderMap: {
          text: "xxx",
          tel: "xxx"
        }
      }
    };
  },
  methods: {
    //商品导航
    // 这里绑定事件
    onClickIcon() {
      // Toast("点击图标");
      console.log(qwe);
    },
    onClickButton() {
      this.show3 = true;
    },

    hidshop() {
      this.show3 = true;
    },
    showPopup() {
      this.show = true;
    },
    onAddCartClicked() {
      // 点击加入购物车拿取图片name.title,id,存到数据库
      //还有用户id，购物车页面根据用户id和商品id查询数据渲染
      this.$axios({
        method: "post",
        //headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
        url: "http://localhost:3000/sign/login",
        data: this.$qs.stringify({
          url: this.shoplist.url,
          name: this.shoplist.name,
          title: this.shoplist.title,
          id: this.shoplist.id,
          //用户id或者用令牌
          uid: "cjm"
        })
      }).then(res => {
        console.log(res);
      });
    }
  },
  async created() {
    console.log(this.value);

    //拿取id=n，访问数据库生成对应的
    let lists = await this.$axios.post(
      "https://www.easy-mock.com/mock/5d40123c05c59f1e0bf0bbdf/list/shoplist"
    );
    // console.log(this.$router.app.$el.baseURI.slice(-1));
    //那对应id的后台数据
    let dataId = this.$router.app.$el.baseURI.slice(-1);
    this.shoplist = lists.data.data.A[dataId - 1];
    console.log(lists.data.data);
    // console.log(this.$router.app.$el.baseURI.slice(-1));
    console.log(value);
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


