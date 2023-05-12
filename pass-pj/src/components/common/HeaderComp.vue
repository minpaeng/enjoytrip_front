<template>
  <div>
    <join-modal></join-modal>
    <login-modal></login-modal>

    <header style="font-family: 'Black Han Sans', sans-serif">
      <nav class="navbar navbar-light bg-light navbar-expand-lg">
        <div class="section-content p-1 mt-3 container-fluid">
          <router-link to="/">
            <img src="@/assets/img/trip-logo.png" alt="" width="130px" />
          </router-link>

          <div class="collapse navbar-collapse" style="font-weight: bold" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-lg-0">
              <li class="nav-item d-flex">
                <a class="nav-link" aria-current="page" href="${root}/board/attraction">전국관광지 정보</a>
                <router-link :to="{ name: 'information' }" class="nav-link information-page" aria-current="page" href="#">공지사항</router-link>
              </li>
            </ul>

            <ul class="navbar-nav mb-2 me-2 mb-lg-0 before-login" style="display: flex">
              <li class="nav-item">
                <button
                  type="button"
                  class="nav-link bg-light"
                  aria-current="page"
                  data-bs-toggle="modal"
                  data-bs-target="#signup-modal"
                  style="border-width: 0"
                >
                  회원가입
                </button>
              </li>
              <li class="nav-item">
                <button
                  type="button"
                  class="nav-link bg-light"
                  aria-current="page"
                  data-bs-toggle="modal"
                  data-bs-target="#signin-modal"
                  style="border-width: 0"
                >
                  로그인
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import LoginModal from "@/components/common/LoginModal.vue";
import JoinModal from "@/components/common/JoinModal.vue";

export default {
  name: "HeaderComp",
  components: {
    LoginModal,
    JoinModal,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped></style>
