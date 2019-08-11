<template>
  <div>
    <!-- //头部 -->
    <div class="index-header">
      <div class="left">
        <a href="javascript:;" class="location">
          <van-button type="primary" @click="showPopup" class="hidclass">{{adr}}</van-button>
        </a>
      </div>
      <div class="center">
        <a href="/" class="logo"></a>
      </div>
      <div class="right">
        <router-link to="/login" class="personal"></router-link>
        <van-button type="primary" @click="showPopup1" class="msgclass service"></van-button>
      </div>
    </div>

    <van-popup v-model="show1">
      <img src="https://m.1date1cake.com/themes/1d1c/images/v2/service/5.png" class="msgpic" alt />
    </van-popup>
    <!-- 点击地址的时候更换数据 -->
    <!-- //遮罩层弹出 -->
    <van-popup v-model="show">
      <div id="float_city_selector" style="width: 300px; left: 27.5px; top: 242.5px;">
        <div class="content">
          <div class="welcome">壹点壹客欢迎您的到来！</div>
          <div class="tip">请选择城市:</div>
          <div class="selector">
            <a href="javascript:;">深圳市</a>
          </div>
          <div class="selector">
            <a href="javascript:;">成都市</a>
          </div>
        </div>
      </div>
    </van-popup>

    <!-- 轮播图 -->
    <!-- 这里可以写循环 -->
    <van-swipe :autoplay="3000" indicator-color="white" class="vanswipe">
      <van-swipe-item>
        <img src="https://img2.1date1cake.com/data/app_ad/1565317400356914088.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://img1.1date1cake.com/data/app_ad/1565185349967060333.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://img1.1date1cake.com/data/app_ad/1558408710969918899.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://img1.1date1cake.com/data/app_ad/1546212496160937947.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://img2.1date1cake.com/data/app_ad/1565317400356914088.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://img2.1date1cake.com/data/app_ad/1558331122626201389.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://img1.1date1cake.com/data/app_ad/1565185349967060333.jpg" alt />
      </van-swipe-item>
    </van-swipe>

    <!-- 中间 -->
    <van-grid>
      <van-grid-item
        v-for="(value,index) in pics"
        :key="index"
        :icon="value.url"
        text="文字"
        @click="indexlist('order') "
      />
    </van-grid>
    <!-- 中间两张图片 -->
    <div class="img-link-wrapper">
      <div class="item">
        <a href="https://m.1date1cake.com/category_v2.php?id=87&amp;tag_id=77">
          <img src="https://img2.1date1cake.com/data/afficheimg/1562848489935650601.jpg" />
        </a>
        <a
          id="fastbuy_ad_0"
          href="https://m.1date1cake.com/category_v2.php?id=91"
          style="display: none;"
        >
          <img src="https://img2.1date1cake.com/data/afficheimg/1553852421826491063.jpg" />
        </a>
        <a style="display: none;" id="fastbuy_ad_1" href="https://m.1date1cake.com/fast_buy.php">
          <img src="https://img2.1date1cake.com/data/afficheimg/1550741285665190362.jpg" />
        </a>
        <a style id="fastbuy_ad_2" href="https://m.1date1cake.com/fast_buy.php">
          <img src="https://img1.1date1cake.com/data/afficheimg/1563333515449149494.jpg" />
        </a>
      </div>
    </div>
    <!-- //懒加载 -->
    <van-list
      class="addclass"
      style="margin-bottom:50px"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="getshopList"
    >
      <!-- //列表页 -->
      <!-- //这里拿取数据，循环遍历渲染页面 -->
      <div class="list-wrapper">
        <div class="list">
          <div class="content">
            <ul>
              <li v-for="(item,index) in shopList" :key="index" num="2" price="2.00">
                <!-- 这里写点击跳转详情页，带id -->
                <router-link :to="'/shop/id='+item.id ">
                  <a>
                    <div class="item">
                      <div class="img">
                        <img :src="item.url" />
                      </div>
                      <div class="info">
                        <div class="title">{{item.title}}</div>
                        <div class="price">
                          <span class="shop_price">198元/1.0磅</span>
                        </div>
                        <div class="msg">榴莲与芒果的经典双拼</div>
                      </div>
                    </div>
                  </a>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>


<script>
export default {
  //放数据
  data() {
    return {
      show1: false,
      //地址
      adr: "深圳",
      // 遮罩层
      show: false,
      pics: [
        {
          url:
            "https://css-m.1date1cake.com/themes/1d1c/images/v2/index/link-icon1.png"
        },
        {
          url:
            "https://css-m.1date1cake.com/themes/1d1c/images/v2/index/link-icon2.png"
        },
        {
          url:
            "https://css-m.1date1cake.com/themes/1d1c/images/v2/index/link-icon3.png"
        },
        {
          url:
            "https://css-m.1date1cake.com/themes/1d1c/images/v2/index/link-icon4.png"
        }
      ],
      fixe: false,
      searchfix: false,
      fix: "true",
      value1: 0,
      value: "",
      entrieslist: [],
      //下拉菜单
      outside: [],
      //列表页
      res: [],
      active: 0,

      //懒加载
      list: [],
      loading: false,
      finished: false,
      shopList: []
      //跳转列表页
    };
  },

  methods: {
    showPopup1() {
      this.show1 = true;
    },
    //遮罩层
    showPopup() {
      this.show = true;
    },
    onSearch() {
      console.log(123);
    },
    navTo(id) {
      this.$router.push({
        name: "detail",
        params: { id, name: "lin" }
      });
    },
    //列表页
    async getshopList() {
      //获取商店信息
      let poilist = await this.$axios.post(
        "https://www.easy-mock.com/mock/5d40123c05c59f1e0bf0bbdf/list/indexlist"
      );
      // console.log(poilist);

      this.shopList = [...this.shopList, ...poilist.data.data.A];
      // console.log(shopList);
      // 加载状态结束
      this.loading = false;

      // 数据全部加载完成
      if (this.shopList.length >= 40) {
        this.finished = true;
      }
    },
    //地址
    adrto() {
      this.$router.push({
        name: "adr"
      });
    },
    //跳转列表页
    indexlist(name) {
      this.$router.push(name);
    }
    //轮播
  },
  //计算属性
  computed: {
    entrieslistcomputed() {
      return this.entrieslist.slice(0, 8);
    }
  },

  async created() {
    let data = await this.$axios(
      "https://www.easy-mock.com/mock/5d40123c05c59f1e0bf0bbdf/list/entries"
    );
    this.entrieslist = data.data.data.entries;
    //下拉菜单
    let menu = await this.$axios(
      "https://www.easy-mock.com/mock/5d40123c05c59f1e0bf0bbdf/list/outside"
    );
    this.outside = menu.data.outside.inside_sort_filter;
    //列表页
    let list = await this.$axios(
      "https://www.easy-mock.com/mock/5d40123c05c59f1e0bf0bbdf/list/res"
    );
    this.res = list.data.items;
    this.getshopList();
  },

  //生命周期活跃，吸顶
  activated() {
    window.onscroll = () => {
      if (window.scrollY >= 330) {
        this.fixe = true;
      } else {
        this.fixe = false;
      }
      if (window.scrollY >= 50) {
        this.searchfix = true;
      } else {
        this.searchfix = false;
      }
    };
  },
  //不活跃
  deactivated() {
    window.onscroll = null;
  },

  //过滤器
  filters: {
    handleMenu(outside) {
      let newMenu = [];
      outside.forEach((element, index) => {
        element.text = element.name;
        element.value1 = index;
        newMenu.push(element);
      });
      return newMenu;
    }
  }
};
</script>
<style>
.box {
  background: #fafafa;
  position: relative;
  height: 1.466667rem;
  width: 4.706667rem;
  padding: 12px 0px 0px 15px;
}
.fixe {
  position: fixed;
  top: 50px;
  width: 100%;
  z-index: 99;
}
.searchfix {
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 99;
}
.vanswipe img {
  height: 220px;
  width: 411px;
}
.img-link-wrapper .item img {
  height: 131px;
  width: 191px;
}
.img-link-wrapper .item:last-child a {
  height: 131px;
}
.hidclass {
  padding: 0;
  background: white;
  color: orangered;
  border: 0px;
}
.msgclass {
  background: white;
  margin-right: 20px;
  border: 0px;
  padding: 0;
}
.msgpic {
  height: 529px;
  width: 335px;
}
.van-swipe {
  position: absolute;
  /* position: relative; */
  overflow: hidden;
  -webkit-user-select: none;
  user-select: none;
  max-width: 500px;
  margin: auto;
  left: 0;
  right: 0;
  top: 30px;
}
.van-grid {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  position: absolute;
  top: 255px;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 500px;
}
.img-link-wrapper {
  position: absolute;
  padding: 0.1rem 0.2rem 0.1rem 0.2rem;
  background: #ffffff;
  overflow: hidden;
  top: 330px;
  left: 0;
  right: 0;
  max-width: 500px;
  margin: auto;
}
.addclass {
  position: absolute;
  margin: auto;
  margin-bottom: 50px;
  max-width: 500px;
  left: 0;
  right: 0;
  top: 465px;
}
</style>

