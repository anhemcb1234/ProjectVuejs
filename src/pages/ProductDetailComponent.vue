<template>
  <div class="container mx-auto">


    <div class="lg:mx-24 mx-5 my-10">
      <div class="grid lg:grid-cols-7 grid-cols-1 gap-4 space-x-5">
        <div class="grid grid-cols-2 col-span-3 gap-4 space-x-5">
          <div class="col-span-5">
            <img class="w-full h-96 object-cover" :src="imgCart" alt="">
          </div>
          <div class=" flex " v-for="(imgCartProducts,indexCartProducts) in cartProducts.images"
               :key="indexCartProducts">
            <div class="md:w-40 md:h-40  w-20 h-20 overflow-hidden">
              <img class="object-cover w-full min-h-full" :src="imgCartProducts.full_image_path"
                   alt="Nike Jordan 3-image-6"
                   @click="handleImgCart(imgCartProducts.full_image_path)"/>
            </div>

          </div>
        </div>

        <div class="col-span-4 space-y-7">
          <h1 class="text-3xl font-bold text-center">Nike Jordan 3</h1>
          <p class="font-bold text-2xl text-red-500 text-center">
            <span> 100</span>
          </p>

          <div class="flex space-x-2 items-center font-bold justify-center ">
            <span class="bi bi-plus cursor-pointer"> <i class="fa-solid fa-plus cursor-pointer"></i> </span>
            <input
                type="text" readonly="" class="quantity border rounded w-12 text-center font-medium"
                value="1">
            <span class="bi bi-dash cursor-pointer">  <i class="fa-solid fa-minus cursor-pointer"></i> </span>
            <button class="border border-gray-800 text-black p-2 text-xl" onclick="addItemToCart()">Add To
              Cart
            </button>
          </div>
        </div>
      </div>
      <div class="my-20">
        <h6 class="font-bold text-2xl text-center md:text-left">Mô tả sản phẩm</h6>
        <p>{{ cartProducts.short_desc }}</p>
      </div>
      <div>
        <h6 class="font-bold text-2xl text-center md:text-left">Có thể bạn sẽ thích</h6>
        <div class=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-5">
          <div class="productItem w-auto h-auto shadow-lg shadow-black-500/50 relative"
               v-for="(mightYouLikeProductsItem,indexMightYouLikeProducts) in mightYouLikeProducts"
               :key="indexMightYouLikeProducts">
            <div class="overflow-hidden w-full h-72 ">
              <img class="object-cover w-full min-h-full" :src="mightYouLikeProductsItem.image.full_image_path" alt="">
            </div>
            <div class="mx-3 my-2 ">
              <div class="flex justify-between items-center">
                <h6 class="text-xl font-semibold">{{ mightYouLikeProductsItem.name }}</h6>
                <i class="fa-solid fa-heart"></i>
              </div>
              <span class="text-xl font-both my-4 inline-block text-red-500">{{ mightYouLikeProductsItem.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {productServices} from '@/services/productServices';

export default {
  data() {
    return {
      cartProducts:[],
      mightYouLikeProducts:[],
      imgCart :'',
      homeData:[],
      productId:0
    }
  },
  methods: {
    handleImgCart(img) {
      this.imgCart = img;
    },
  },
  async mounted() {
    const response = await productServices.getProductDetail(this.$route.query.id);
    this.cartProducts = response.data.product;
    this.mightYouLikeProducts = response.data.mightYouLikeProducts;
    this.imgCart = this.cartProducts.images[0].full_image_path;
  },
  components: {}
}
</script>

<style>
</style>