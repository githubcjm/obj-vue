<template>
  <div>
    <!-- <div class="no-content">
      <p>您的购物车里还没有商品~</p>
      <a href="category_v2.php?id=87" class="button">去购物</a>
    </div>-->

    <div class="cart-list">
      <ul>
        <!-- //根据详情页传过来的数据，渲染到li标签上 -->
        <li
          class="cart-list"
          v-for="(item,index) in datalist "
          :key="index"
          parent-rec-id="0"
          data-id="2913926"
          data-coupon_id
        >
          <a>
            <div class="img">
              <img
                src="https://img2.1date1cake.com/images/201801/goods_img/347_G_1515736154467.jpg"
              />
            </div>
            <div class="info">
              <div class="title" v-text="item.title"></div>
              <div class="msg" v-text="item.name"></div>
              <div class="accessory">含10套餐具1盒蜡烛</div>
              <div class="bottom">
                <div class="price" v-text="priceleft"></div>
              </div>
            </div>
          </a>

          <div class="doing">
            <div class="left">
              <a class="reduce" @click="reduce"></a>
            </div>
            <div class="center">
              <input type="number" class="number" :value="valueChange" />
            </div>
            <div class="right">
              <a @click="add" class="add"></a>
            </div>
          </div>
        </li>
      </ul>
      <van-submit-bar :price="pricechange" button-text="提交订单" :decimal-length="2" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //价格详情页传过来渲染生成
      priceleft: "330",
      //详情页传过来的数量
      valueChange: "1",
      pricechange: "1",
      datalist: []
    };
  },
  methods: {
    reduce() {
      if (this.valueChange <= 1) {
        this.valueChange = 1;
      }
      this.valueChange--;
      this.pricechange = this.valueChange * this.priceleft;
    },
    add() {
      this.valueChange++;
      this.pricechange = this.valueChange * this.priceleft;
    }
  },
  //前端请求后端数据能访问到数据库，并且后端能查询，但是后端的跨域问题，导致返回不了数据
  //到前端，解决跨域问题，那么购物车页面就嫩写完，并且页面能渲染
  async created() {
    this.pricechange = this.valueChange * this.priceleft;
    //根据用户id和商品id查询数据库生成页面
    this.$axios({
      method: "post",
      //headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
      url: "http://localhost:3000/sign/login",
      data: this.$qs.stringify({
        //用户id或者用令牌
        uid: "cjm"
      })
    }).then(res => {
      this.datalist = res.data;
      console.log(this.datalist);
    });
  }
  //购物车页面通过cookie做判断，如果是登录状态进入用户的数据，访问后端拿到对应的数据生成
  //页面，1：数据存到local storage 2:mongodb,做判断如果有数据那么渲染页面，如果没有数据
  //那么显示去购物的图标
};
</script>

<style>
.van-submit-bar__text {
  position: absolute;
  left: 47px;
}
.van-submit-bar {
  bottom: 52px;
}
.cart-list {
  overflow: hidden;
}
.cart-list li {
  position: relative;
  padding: 54px 18px;
}
.cart-list .img {
  position: absolute;
  height: 100px;
  width: 100px;
  top: 20px;
  left: 16px;
}
.cart-list .img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cart-list .info {
  margin: -30px 0 0 120px;
  position: relative;
  height: 20px;
}
.cart-list .title {
  font-size: 14px;
  color: #282828;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.cart-list .msg {
  font-size: 14px;
  color: #666666;
  margin: 4px 0 0 0;
  line-height: 23px;
}
.cart-list .accessory {
  font-size: 12px;
  color: #666666;
  line-height: 14px;
}
.cart-list .bottom {
  font-size: 16px;
  color: #fe5910;
  position: absolute;
  bottom: -57px;
  left: 0;
}
.cart-list .bottom .price {
  display: inline;
  margin: 0 0 0 3px;
}
.cart-list .doing {
  position: absolute;
  right: 32px;
  bottom: 0px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
}
.cart-list .doing .left {
  float: left;
  width: 25px;
  height: 25px;
  position: relative;
}
.cart-list .doing .reduce {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.cart-list .doing .reduce::before {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  background-size: 100%;
  background-image: url(https://css-m.1date1cake.com/themes/1d1c/images/v2/cart/reduce-icon.png);
  left: 50%;
  margin-left: -10px;
  top: 50%;
  margin-top: -10px;
}
.cart-list .doing .center {
  float: left;
  width: 70px;
  height: 20px;
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
}
.cart-list .doing .number {
  font-size: 14px;
  color: #666666;
  display: table;
  width: 0.85rem;
  margin: auto;
  text-align: center;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  -moz-appearance: textfield;
  -webkit-appearance: none !important;
}
.cart-list .doing .right {
  float: left;
  width: 25px;
  height: 25px;
  position: relative;
}
.cart-list .doing .add {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.cart-list .doing .add::before {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  background-size: 100%;
  background-image: url(https://css-m.1date1cake.com/themes/1d1c/images/v2/cart/add-icon.png);
  left: 50%;
  margin-left: -10px;
  top: 50%;
  margin-top: -10px;
}
</style>

