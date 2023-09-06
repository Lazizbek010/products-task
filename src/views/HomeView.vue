<template>
  <!-- MAIN PRoducts -->
  <main class="py-4 mt-5">
    <div class="container mt-5">
      <div class="row align-items-stretch">
        <div height="100%" class="col-3 d-flex justify-content-between flex-column" v-for="(product, i) in items" :key="i">
          <div class="card mb-3" style="width: 18rem">
            <img
              :src="product.images[0]"
              class="card-img-top border-bottom-1 border"
              alt="..."
              width="286"
              height="150"
            />
            <div  height="100%" class="card-body d-flex justify-content-between flex-column">
              <div class="d-flex align-items-center justify-content-between">
                <h5 class="card-title">{{ product.title }}</h5>
                <h6 class="text-danger text-end">{{ product.brand }}</h6>
              </div>
              <h6>Category: {{ product.category }}</h6>
              <p class="card-text cut-text">
                {{product.description}}
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <p class="m-0">{{product.price}}$</p>
                <a href="#" class="btn btn-primary"
                  ><svg
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end mt-5">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
const items = ref([]);
async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const { products } = await res.json();
  const sliceEl = products.slice(0,20);
  items.value = sliceEl
}
getProducts();
</script>