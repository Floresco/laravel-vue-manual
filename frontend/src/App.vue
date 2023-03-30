<script setup lang="ts">
import Aside from "@/views/layouts/Aside.vue";
import Overlay from "@/views/layouts/Overlay.vue";
import Main from "@/views/layouts/Main.vue";
</script>

<template>
  <Aside/>

  <Overlay/>

  <Main/>

  <button class="option-btn">
    <i class="lni lni-cog"></i>
  </button>
  <div class="option-overlay"></div>
  <div class="option-box">
    <div class="option-header">
      <div>
        <h5>Theme Customizer</h5>
        <p class="text-gray">Customize and Preview in Real time</p>
      </div>
      <button class="option-btn-close text-gray">
        <i class="lni lni-close"></i>
      </button>
    </div>
    <h6 class="mb-10">Sidebar</h6>
    <ul class="mb-30">
      <li>
        <button class="leftSidebarButton active">Left Sidebar</button>
      </li>
      <li>
        <button class="rightSidebarButton">Right Sidebar</button>
      </li>
    </ul>

    <h6 class="mb-10">Theme</h6>
    <ul class="d-flex flex-wrap align-items-center">
      <li>
        <button class="lightThemeButton active">
          Light Theme + Sidebar 1
        </button>
      </li>
      <li>
        <button class="lightThemeButton2">Light Theme + Sidebar 2</button>
      </li>
      <li>
        <button class="darkThemeButton">Dark Theme + Sidebar 1</button>
      </li>
      <li>
        <button class="darkThemeButton2">Dark Theme + Sidebar 2</button>
      </li>
    </ul>

    <div class="promo-box">
      <h3>PlainAdmin Pro</h3>
      <p>Get All Dashboards and 300+ UI Elements</p>
      <a
          href="https://plainadmin.com/pro"
          target="_blank"
          rel="nofollow"
          class="main-btn primary-btn btn-hover"
      >
        Purchase Now
      </a>
    </div>
  </div>
</template>

