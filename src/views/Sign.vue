<template>
  <div>
    <div class="header-float">
      <div class="left">
        <router-link to="/tabbar/home">
          <a href="javascript:;" class="more mores"></a>
        </router-link>
      </div>
      <div class="center" style="font-size:20px;">会员注册</div>
      <div class="right">
        <a href="flow.php?hmpl=header_v2" class="cart">
          <em id="top_cart_v2">0</em>
        </a>
      </div>
    </div>

    <!-- 注册 -->
    <!-- 手机号码 -->
    <van-cell-group>
      <van-field v-model="phone" placeholder="请输入手机号码" />

      <!-- 数字验证 -->
      <van-field v-model="sms" placeholder="请输入数字验证码">
        <!-- 这里写绑定事件，点击时随机生成数字渲染到按钮里 -->
        <van-button slot="button" size="small" type="primary" @click="randomCode">{{html}}</van-button>
      </van-field>
    </van-cell-group>

    <div class="tips">
      <p>如果长时间收不到验证码，请拨打4006517217联系客服下单</p>
    </div>

    <!-- 密码 -->
    <div class="buttom">
      <input :type="[istrue ? 'text' :'password']" v-model="pas" placeholder="请输入密码" />
      <!-- 这里绑定点击事件，点击的时候切换隐藏 -->
      <span v-html="issure ? '[隐藏]' : '[显示]'" @click="changepas"></span>
    </div>

    <!-- 注册按钮 -->
    <div style="padding:0px 20px 0px 10px;" class="signbuttom">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tbody>
          <tr>
            <td align="right">
              <a class="btn3" style="margin-right:0px;" @click="changesign">注 册</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sms: "",
      phone: "",
      smss: "",
      html: "",
      pas: "",
      //显示隐藏
      istrue: false,
      issure: false
    };
  },
  methods: {
    // 随机验证码
    randomCode() {
      var html = "";
      for (var i = 0; i < 4; i++) {
        html += parseInt(Math.random() * 10); //0-9
      }
      this.html = html;
      // return html;
      console.log(this.html);
    },
    changepas() {
      this.istrue = !this.istrue;
      this.issure = !this.issure;
    },
    //点击注册
    //点击注册时判断数字验证码和输入的是否匹配，如果匹配则把手机号码和密码发送到后端注册

    async changesign() {
      //非空
      if (this.phone) {
        //不为空
        //做判断数字验证和输入匹配，则发送请求注册
        if (this.sms == this.html) {
          //密码非空
          if (this.pas) {
            //可用
            this.$axios({
              method: "post",
              headers: { "content-type": "application/x-www-form-urlencoded" }, //局部更改
              url: "http://localhost:3000/sign/login",
              data: this.$qs.stringify({
                phone: this.phone,
                pas: this.pas,
                cod: this.sms
              })
            });
            this.$router.push({
              name: "home"
            });
            // 因为后端添加成功没有返回值，只能先在前端做判断，成功添加事件
            alert("注册成功");

            // .then(() => {
            //   alert("注册成功");
            // });
            //假如前端能传到数据到后端，那么后端就能根据数据返回，注册登录就能做完
            // 两个问题，1个跨域问题，2axios怎么传数据
          } else {
            //密码为空
            alert("请输入密码");
          }
        }
      } else {
        //这里写组件弹出隐藏
        alert("请输入手机号码");
        //为空
      }
    }
  },
  // 生命周期
  async created() {
    this.randomCode();
  }
};
</script>


<style>
.van-cell-group {
  position: absolute;
  top: 50px;
  left: 15px;
}
.tips {
  position: absolute;
  top: 206px;
}
.tips p {
  width: 337px;
  padding: 0px 20px;
  font-weight: normal;
}
.buttom {
  position: absolute;
  top: 280px;
}
.buttom input {
  position: absolute;
  left: 25px;
  height: 30px;
  width: 150px;
}
.buttom span {
  position: absolute;
  right: -287px;
  top: 6px;
}
.signbuttom {
  position: absolute;
  top: 351px;
  right: 24px;
}
</style>

