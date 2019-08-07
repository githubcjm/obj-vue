<template>
  <div>
    <div class="header-float">
      <div class="left">
        <a href="javascript:;" class="more mores" onclick="showUserNav2();"></a>
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

      <!-- 获取短信验证码 -->
      <van-field v-model="smss" placeholder="请输入短信验证码">
        <van-button slot="button" size="small" type="primary">获取短信验证码</van-button>
      </van-field>
    </van-cell-group>

    <div class="tips">
      <p>如果长时间收不到验证码，请拨打4006517217联系客服下单</p>
    </div>

    <!-- 密码 -->
    <div class="buttom">
      <input :type="[istrue ? 'password' :'text']" placeholder="请输入密码" />
      <!-- 这里绑定点击事件，点击的时候切换隐藏 -->
      <span v-html="issure ? '[显示]' : '[隐藏]'" @click="changepas"></span>
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
    async changesign() {
      let res = await this.$axios.get(
        "https://www.easy-mock.com/mock/5d40123c05c59f1e0bf0bbdf/list/tex?" +
          "id=3"
      );
      console.log(res);
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

