<template>
  <el-container>
    <div class="login_container">
      <!-- 头部 -->
      <div class="head">
        <img class="logo" src="https://s.weituibao.com/1582958061265/mlogo.png" />
        <div class="name">
          <div class="title">新蜂商城</div>
          <div class="tips">Vue3.0 后台管理系统</div>
        </div>
      </div>
      <!-- 表单 -->
      <el-form
        ref="loginFormRef"
        label-position="top"
        :model="loginFormModal"
        :rules="loginFormRules"
      >
        <el-form-item label="账号" prop="username">
          <el-input v-model="loginFormModal.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginFormModal.password" />
        </el-form-item>
        <el-form-item>
          <div>登录表示您已同意<a>《服务条款》</a></div>
          <el-button
            type="primary"
            size="large"
            class="submit"
            @click="submitForm(loginFormRef)"
            >立即登录</el-button
          >
          <el-checkbox v-model="checked" label="下次自动登录" size="large" />
        </el-form-item>
      </el-form>
    </div>
  </el-container>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { LoginForm } from "@/types";
import type { FormInstance, FormRules } from "element-plus";
const loginFormModal = reactive<LoginForm>({
  username: "",
  password: "",
});
const loginFormRules = reactive<FormRules>({
  username: [{ required: true, message: "账户不能为空", trigger: "blur" }],
  password: [{ required: true, message: "密码不能为空", trigger: "blur" }],
});
let checked = ref<boolean>(true);
const loginFormRef = ref<FormInstance>();

const submitForm = async (formEle: FormInstance | undefined) => {
  if (!formEle) return;
  await formEle.validate((valid) => {
    if (valid) {
      console.log("submit");
    } else {
      console.log('error submit')
    }
  });
};
</script>

<style lang="scss" scoped>
.el-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .login_container {
    width: 420px;
    min-width: 310px;
    box-shadow: 0px 21px 41px 0px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding: 40px 0;

    .head {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 20px;

      .logo {
        width: 100px;
        height: 100px;
        margin-right: 20px;
      }

      .name {
        .title {
          font-size: 28px;
          font-weight: bold;
          color: #1baeae;
        }

        .tips {
          font-size: 12px;
          color: #999;
        }
      }
    }

    :deep(.el-form) {
      width: 70%;
      margin: 0 auto;

      .el-form-item__label {
        margin-bottom: 0;
      }

      .submit {
        width: 100%;
      }
    }
  }
}
</style>
