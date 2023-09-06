<script setup>
</script>

<template>
  <header class="fixed-top">
    <nav class="navbar navbar-light bg-primary">
    <div class="container py-2">
      <router-link to="/" class="navbar-brand text-light fw-bolder">PRODUCTS</router-link>
      <router-link to="/cart" class="d-flex border border-light p-2 rounded-1 cart">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="slightly transparent"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9 6.5C9 4.88779 10.2402 3.5 12 3.5C13.7598 3.5 15 4.88779 15 6.5V7.5H9V6.5ZM7.5 9V11.5H9V9H15V11.5H16.5V9H18.5V19.75C18.5 20.1642 18.1642 20.5 17.75 20.5H6.25C5.83579 20.5 5.5 20.1642 5.5 19.75V9H7.5ZM7.5 7.5V6.5C7.5 4.11221 9.35984 2 12 2C14.6402 2 16.5 4.11221 16.5 6.5V7.5H19.25H20V8.25V19.75C20 20.9926 18.9926 22 17.75 22H6.25C5.00736 22 4 20.9926 4 19.75V8.25V7.5H4.75H7.5Z"
            fill="#fff"
          ></path>
        </svg>
        <span class="text-light ms-2">Cart</span>
        <div v-if="true" 
        class="count text-light bg-danger">0</div>
      </router-link>
    </div>
  </nav>
  </header>
  <RouterView />
</template>

