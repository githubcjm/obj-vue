<template>
  <div>
    <!-- 头部 -->
    <div class="header-float">
      <div class="left">
        <a href="javascript:;" class="more mores" @click="change"></a>
      </div>
      <div class="center" style="font-size:20px;">免费注册登录</div>
      <div class="right">
        <router-link to="/tabbar/home">
          <a class="cart">
            <em id="top_cart_v2">0</em>
          </a>
        </router-link>
      </div>
    </div>
    <!-- 注册登录 -->
    <van-cell-group>
      <van-field v-model="phone" required clearable placeholder="请输入用户名" />
      <van-field v-model="pas" type="password" :required="istrue" placeholder="请输入密码"></van-field>
    </van-cell-group>

    <!-- 底部 -->
    <table width="86%" style="margin: 0 auto;">
      <tbody>
        <tr>
          <td align="center" colspan="2">
            <a class="btn10" @click="changelogin">登&nbsp;录</a>
          </td>
        </tr>
        <tr>
          <td align="left">
            <br />
            <a
              href="javascript:;"
              style="text-decoration:underline;"
              onclick="javascript:servicePopupShow();"
            >有问题？联系客服</a>
          </td>
          <td align="right">
            <br />
            <a
              href="user.php?act=user_login&amp;back_url=user.php"
              style="font-size:15px;text-decoration:underline;"
            >使用账号密码登录</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: "",
      pas: "",
      istrue: true,
      cookie: ""
    };
  },
  methods: {
    //登录
    async changelogin() {
      this.cookie = document.cookie.slice(this.phone.length + 1);
      //点击登录时把用户名和密码发到后端做请求，后端返回数据，并且根据用户名生成令牌存到cookie
      //前端接到数据和令牌，判断是否登录，和把令牌存到前端cookie，第二次登录时，前端发送令牌给后端
      //后端根据令牌返回是否登录
      if (this.phone && this.pas) {
        //非空
        if (this.cookie && this.pas) {
          // console.log(this.cookie);
          // console.log(this.phone);

          //第二次发送
          this.$axios({
            method: "post",
            //headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
            url: "http://localhost:3000/sign/login",
            data: this.$qs.stringify({
              //用户id或者用令牌
              token: this.cookie,
              phone: this.phone
            })
          }).then(res => {
            if (res.data.length > 0) {
              //登录成功
              // this.$router.push({
              //   name: "home"
              // });
              this.cookie = res.data;
              // console.log(res.length);
              console.log(document.cookie.slice(this.phone.length));

              alert("登录成功");
            } else {
              console.log(document.name);
              alert("登录失败");
              console.log(res);
              // console.log(this.cookie + "=");
              //登录失败
            }
          });
        } else {
          // console.log(document.cookie.slice(this.phone.length));

          //第一次发送
          this.$axios({
            method: "post",
            headers: { "content-type": "application/x-www-form-urlencoded" }, //局部更改
            url: "http://localhost:3000/sign/login",
            data: this.$qs.stringify({
              phone: this.phone,
              pas: this.pas
            })
          }).then(res => {
            //登录成功，后端把数据传到前端，前端把令牌存到cookie里,其他页面根据cookie里的值
  7          //显示登录状态，现在的问题是前端可以发送请求到后端，并且后端有数据反馈，但是后端传到
            //前端时发生跨域故障，解决了跨域问题，就能把注册登录做完
            if (res) {
              //接受到后端返回的token存到cookie里
              //设置cookie
              this.$router.push({
                name: "home"
              });
              this.cookie = res.data;
              alert("登录成功");
            }
            setTimeout(() => {
              //设置cookie
              this.cookie = res.data;
              var now = new Date();
              now.setDate(now.getDate() + 10);
              document.cookie =
                this.phone +
                "=" +
                this.cookie +
                ";expires=" +
                now.toUTCString() +
                ";path=/"; //设置一个站点内的文件可以共享此cookie
            }, 100);
            // console.log(this.cookie);
          });
        }
      } else {
        //为空
        alert("请输入手机号码或密码");
      }
    },
    change() {
      this.$router.push({
        name: "home"
      });
    }
  },
  async created() {
    //获取cookie值
    // this.cookie = document.cookie.slice(this.phone.length + 1);
    // console.log(this.cookie);
    //name=malin; pwd=123456
    // var arr = cookies.split("; "); //['name=malin','pwd=123456']
    // for (var i = 0; i < arr.length; i++) {
    //   var arr2 = arr[i].split("="); //['name','malin'
    //   if (this.phone == arr2[0]) {
    //     return arr2[1];
    //   }
    // }
    // this.cookie = arr2[1];
  }
};
</script>


<style>
.van-cell-group {
  width: 350px;
  position: absolute;
  left: 10px;
  top: 50px;
}
table {
  position: absolute;
  top: 142px;
  left: 22px;
}
a {
  font-weight: normal;
  color: #726964;
}
</style>

