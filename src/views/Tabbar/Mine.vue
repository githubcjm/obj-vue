<template>
  <div>
    <!-- 头部 -->
    <div class="header-float">
      <div class="left">
        <a href="javascript:;" class="more mores" onclick="showUserNav2();"></a>
      </div>
      <div class="center" style="font-size:20px;">免费注册登录</div>
      <div class="right">
        <a href="flow.php?hmpl=header_v2" class="cart">
          <em id="top_cart_v2">0</em>
        </a>
      </div>
    </div>
    <!-- 注册登录 -->
    <van-cell-group>
      <van-field v-model="username" required clearable placeholder="请输入用户名" />
      <van-field v-model="sms" :required="istrue" placeholder="请输入短信验证码">
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>

    <!-- 底部 -->
    <table width="86%" style="margin: 0 auto;">
      <tbody>
        <tr>
          <td align="center" colspan="2">
            <a class="btn10" href="javascript:;" onclick="fastRegisterChekout();">登&nbsp;录</a>
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
      username: "",
      sms: "",
      istrue: true
    };
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

