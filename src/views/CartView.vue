<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <img src="" alt="" />
        <p></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter.js';
const store = useCounterStore()


async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const { products } = await res.json();
  products.forEach((el)=>{
    console.log(el);
    store.addedEl.forEach((item)=>{
      if(el.id === item){
        console.log(el.id);
      }
    })
  })
}
getProducts();
</script>

<style lang="scss" scoped>
</style>