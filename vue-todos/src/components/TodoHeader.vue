<script setup>
    import { RouterLink } from "vue-router";
</script>
<template>
  <header>
    <nav class="container">
        <h1 class="branding">Vue-3-todos</h1>
        <ul style="display: flex; text-transform:capitalize; gap:15px">
            <li>
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/about">about</RouterLink>
            </li>
        </ul>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
    .branding{font-size: 22px; text-transform: uppercase;}
    header{background: #eee;}
    header nav{display: flex; justify-content: space-between; padding: 15px 15px;}
</style>
