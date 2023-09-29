<template>
  <section class="relative">
    <div class="mx-auto container">
      <div class="mt-24 max-md:mt-10 max-md:px-5">
        <div
          class="flex flex-col justify-center prose items-center mx-auto mb-5 max-w-full"
        >
          <h2
            class="text-4xl mt-0 mb-5 text-primary max-md:my-0 max-md:text-[36px] max-md:leading-[1.2]"
          >
            Pricing
          </h2>
          <p
            class="text-xl mb-10 pr-14 leading-6 text-primary max-md:text-center max-md:pr-0 max-md:mb-5"
          >
            How many emails do you need to verify
          </p>
          <div
            class="flex flex-row justify-center max-md:w-full max-xl:flex-col max-xl:mb-1"
          >
            <button
              class="mx-2 flex items-center px-8 whitespace-nowrap rounded-full text-2xl font-semibold max-md:w-full max-md:px-3 max-md:text-center max-xl:mb-1 py-3"
              :class="
                fb ? 'bg-[#E24949] text-white' : 'border-2 border-[#E24949] text-badge'
              "
              @click="toggleCard(0)"
            >
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="max-md:my-1"
                v-if="fb"
              >
                <g clip-path="url(#clip0_165_11491)">
                  <path
                    d="M29.5625 16.4769V7.10193C29.5625 6.60465 29.365 6.12773 29.0133 5.7761C28.6617 5.42447 28.1848 5.22693 27.6875 5.22693H3.3125C2.81522 5.22693 2.33831 5.42447 1.98667 5.7761C1.63504 6.12773 1.4375 6.60465 1.4375 7.10193V23.9769C1.4375 24.4742 1.63504 24.9511 1.98667 25.3028C2.33831 25.6544 2.81522 25.8519 3.3125 25.8519H15.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.375 6.16443L15.5 15.5394L28.625 6.16443M18.3125 23.0394L21.125 25.8519L27.6875 19.2894"
                    stroke="white"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_165_11491">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0.5 0.539429)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="max-md:my-1 bg-white"
                v-else
              >
                <g clip-path="url(#clip0_165_11499)">
                  <path
                    d="M29.0625 16.4769V7.10193C29.0625 6.60465 28.865 6.12773 28.5133 5.7761C28.1617 5.42447 27.6848 5.22693 27.1875 5.22693H2.8125C2.31522 5.22693 1.83831 5.42447 1.48667 5.7761C1.13504 6.12773 0.9375 6.60465 0.9375 7.10193V23.9769C0.9375 24.4742 1.13504 24.9511 1.48667 25.3028C1.83831 25.6544 2.31522 25.8519 2.8125 25.8519H15"
                    stroke="#E24949"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.875 6.16443L15 15.5394L28.125 6.16443M17.8125 23.0394L20.625 25.8519L27.1875 19.2894"
                    stroke="#E24949"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_165_11499">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0 0.539429)"
                    />
                  </clipPath>
                </defs>
              </svg>
              &nbsp; 1000, 2500, 5000
            </button>
            <button
              class="mx-2 flex items-center px-8 whitespace-nowrap rounded-full text-2xl font-semibold max-md:w-full max-md:px-3 max-md:text-center max-xl:mb-1 py-3"
              :class="
                sb ? 'bg-[#E24949] text-white' : 'border-2 border-[#E24949] text-badge'
              "
              @click="toggleCard(1)"
            >
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="max-md:my-1"
                v-if="sb"
              >
                <g clip-path="url(#clip0_165_11491)">
                  <path
                    d="M29.5625 16.4769V7.10193C29.5625 6.60465 29.365 6.12773 29.0133 5.7761C28.6617 5.42447 28.1848 5.22693 27.6875 5.22693H3.3125C2.81522 5.22693 2.33831 5.42447 1.98667 5.7761C1.63504 6.12773 1.4375 6.60465 1.4375 7.10193V23.9769C1.4375 24.4742 1.63504 24.9511 1.98667 25.3028C2.33831 25.6544 2.81522 25.8519 3.3125 25.8519H15.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.375 6.16443L15.5 15.5394L28.625 6.16443M18.3125 23.0394L21.125 25.8519L27.6875 19.2894"
                    stroke="white"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_165_11491">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0.5 0.539429)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="max-md:my-1 bg-white"
                v-else
              >
                <g clip-path="url(#clip0_165_11499)">
                  <path
                    d="M29.0625 16.4769V7.10193C29.0625 6.60465 28.865 6.12773 28.5133 5.7761C28.1617 5.42447 27.6848 5.22693 27.1875 5.22693H2.8125C2.31522 5.22693 1.83831 5.42447 1.48667 5.7761C1.13504 6.12773 0.9375 6.60465 0.9375 7.10193V23.9769C0.9375 24.4742 1.13504 24.9511 1.48667 25.3028C1.83831 25.6544 2.31522 25.8519 2.8125 25.8519H15"
                    stroke="#E24949"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.875 6.16443L15 15.5394L28.125 6.16443M17.8125 23.0394L20.625 25.8519L27.1875 19.2894"
                    stroke="#E24949"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_165_11499">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0 0.539429)"
                    />
                  </clipPath>
                </defs>
              </svg>
              &nbsp; 10.000, 25.000, 50.000
            </button>
            <button
              class="mx-2 flex items-center px-8 text-badge whitespace-nowrap rounded-full text-2xl font-semibold border-2 border-[#E24949] max-md:px-3 max-md:w-full max-md:text-[20px] max-md:mb-1 py-3 pricing-button"
              :class="
                tb ? 'bg-[#E24949] text-white' : 'border-2 border-[#E24949] text-badge'
              "
              @click="toggleCard(2)"
            >
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="max-md:my-1"
                v-if="tb"
              >
                <g clip-path="url(#clip0_165_11491)">
                  <path
                    d="M29.5625 16.4769V7.10193C29.5625 6.60465 29.365 6.12773 29.0133 5.7761C28.6617 5.42447 28.1848 5.22693 27.6875 5.22693H3.3125C2.81522 5.22693 2.33831 5.42447 1.98667 5.7761C1.63504 6.12773 1.4375 6.60465 1.4375 7.10193V23.9769C1.4375 24.4742 1.63504 24.9511 1.98667 25.3028C2.33831 25.6544 2.81522 25.8519 3.3125 25.8519H15.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.375 6.16443L15.5 15.5394L28.625 6.16443M18.3125 23.0394L21.125 25.8519L27.6875 19.2894"
                    stroke="white"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_165_11491">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0.5 0.539429)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="max-md:my-1 bg-white"
                v-else
              >
                <g clip-path="url(#clip0_165_11499)">
                  <path
                    d="M29.0625 16.4769V7.10193C29.0625 6.60465 28.865 6.12773 28.5133 5.7761C28.1617 5.42447 27.6848 5.22693 27.1875 5.22693H2.8125C2.31522 5.22693 1.83831 5.42447 1.48667 5.7761C1.13504 6.12773 0.9375 6.60465 0.9375 7.10193V23.9769C0.9375 24.4742 1.13504 24.9511 1.48667 25.3028C1.83831 25.6544 2.31522 25.8519 2.8125 25.8519H15"
                    stroke="#E24949"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.875 6.16443L15 15.5394L28.125 6.16443M17.8125 23.0394L20.625 25.8519L27.1875 19.2894"
                    stroke="#E24949"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_165_11499">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0 0.539429)"
                    />
                  </clipPath>
                </defs>
              </svg>
              &nbsp; 100.000, 250.000, 500.000
            </button>
          </div>
          <div
            class="flex flex-row flex-wrap mt-5 max-md:w-full max-md:mt-0 max-xl:flex-col"
          >
            <button
              class="mx-2 flex items-center px-8 text-badge whitespace-nowrap rounded-full text-2xl font-semibold border-2 border-[#E24949] max-md:px-3 max-md:w-full max-md:text-[18px] max-xl:mb-1 py-3 pricing-button"
              :class="
                frb ? 'bg-[#E24949] text-white' : 'border-2 border-[#E24949] text-badge'
              "
              @click="toggleCard(3)"
            >
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="max-md:my-1"
                v-if="frb"
              >
                <g clip-path="url(#clip0_165_11491)">
                  <path
                    d="M29.5625 16.4769V7.10193C29.5625 6.60465 29.365 6.12773 29.0133 5.7761C28.6617 5.42447 28.1848 5.22693 27.6875 5.22693H3.3125C2.81522 5.22693 2.33831 5.42447 1.98667 5.7761C1.63504 6.12773 1.4375 6.60465 1.4375 7.10193V23.9769C1.4375 24.4742 1.63504 24.9511 1.98667 25.3028C2.33831 25.6544 2.81522 25.8519 3.3125 25.8519H15.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.375 6.16443L15.5 15.5394L28.625 6.16443M18.3125 23.0394L21.125 25.8519L27.6875 19.2894"
                    stroke="white"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_165_11491">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0.5 0.539429)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="max-md:my-1 bg-white"
                v-else
              >
                <g clip-path="url(#clip0_165_11499)">
                  <path
                    d="M29.0625 16.4769V7.10193C29.0625 6.60465 28.865 6.12773 28.5133 5.7761C28.1617 5.42447 27.6848 5.22693 27.1875 5.22693H2.8125C2.31522 5.22693 1.83831 5.42447 1.48667 5.7761C1.13504 6.12773 0.9375 6.60465 0.9375 7.10193V23.9769C0.9375 24.4742 1.13504 24.9511 1.48667 25.3028C1.83831 25.6544 2.31522 25.8519 2.8125 25.8519H15"
                    stroke="#E24949"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.875 6.16443L15 15.5394L28.125 6.16443M17.8125 23.0394L20.625 25.8519L27.1875 19.2894"
                    stroke="#E24949"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_165_11499">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0 0.539429)"
                    />
                  </clipPath>
                </defs>
              </svg>
              &nbsp; 1.000.000, 2500.000, 5.000.000
            </button>
            <button
              class="mx-2 flex items-center px-8 text-badge whitespace-nowrap rounded-full text-2xl font-semibold border-2 border-[#E24949] max-md:px-3 max-md:w-full max-md:text-[22px] max-md:mb-1 py-3 pricing-button"
              :class="
                fib ? 'bg-[#E24949] text-white' : 'border-2 border-[#E24949] text-badge'
              "
              @click="toggleCard(4)"
            >
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="max-md:my-1"
                v-if="fib"
              >
                <g clip-path="url(#clip0_165_11491)">
                  <path
                    d="M29.5625 16.4769V7.10193C29.5625 6.60465 29.365 6.12773 29.0133 5.7761C28.6617 5.42447 28.1848 5.22693 27.6875 5.22693H3.3125C2.81522 5.22693 2.33831 5.42447 1.98667 5.7761C1.63504 6.12773 1.4375 6.60465 1.4375 7.10193V23.9769C1.4375 24.4742 1.63504 24.9511 1.98667 25.3028C2.33831 25.6544 2.81522 25.8519 3.3125 25.8519H15.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.375 6.16443L15.5 15.5394L28.625 6.16443M18.3125 23.0394L21.125 25.8519L27.6875 19.2894"
                    stroke="white"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_165_11491">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0.5 0.539429)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="max-md:my-1 bg-white"
                v-else
              >
                <g clip-path="url(#clip0_165_11499)">
                  <path
                    d="M29.0625 16.4769V7.10193C29.0625 6.60465 28.865 6.12773 28.5133 5.7761C28.1617 5.42447 27.6848 5.22693 27.1875 5.22693H2.8125C2.31522 5.22693 1.83831 5.42447 1.48667 5.7761C1.13504 6.12773 0.9375 6.60465 0.9375 7.10193V23.9769C0.9375 24.4742 1.13504 24.9511 1.48667 25.3028C1.83831 25.6544 2.31522 25.8519 2.8125 25.8519H15"
                    stroke="#E24949"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.875 6.16443L15 15.5394L28.125 6.16443M17.8125 23.0394L20.625 25.8519L27.1875 19.2894"
                    stroke="#E24949"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_165_11499">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0 0.539429)"
                    />
                  </clipPath>
                </defs>
              </svg>
              &nbsp; 10.000.000
            </button>
          </div>
        </div>
        <div
          class="px-1 flex flex-row flex-wrap justify-center space-x-5 mx-auto w-9/12 max-lg:w-full max-xl:justify-center max-lg:space-x-0"
        >
          <PricingCard
            v-for="price in curPriceArray"
            :key="price.price"
            :price="price.price"
            :count="price.count"
          />
        </div>
      </div>
    </div>

    <img
      src="../../assets/images/home/pricing/poly1.png"
      class="absolute left-0 bottom-0 max-md:opacity-0 max-2xl:-z-1"
      v-show="props.imageShow"
    />
    <img
      src="../../assets/images/home/pricing/poly2.png"
      class="absolute right-0 bottom-[-3%] max-md:opacity-0"
      v-show="props.imageShow"
    />
  </section>
</template>

<script setup>
import PricingCard from "./PricingCard.vue";
import { ref } from "vue";
import { defineComponent, reactive } from "vue";
const props = defineProps(["imageShow"]);

const pricingArray = [
  [
    {
      price: 19,
      count: "1.000",
    },
    {
      price: 39,
      count: "2.500",
    },
    {
      price: 59,
      count: "5.000",
    },
  ],
  [
    {
      price: 79,
      count: "10.000",
    },
    {
      price: 99,
      count: "25.000",
    },
    {
      price: 139,
      count: "50.000",
    },
  ],
  [
    {
      price: 199,
      count: "100.000",
    },
    {
      price: 399,
      count: "250.000",
    },
    {
      price: 599,
      count: "500.000",
    },
  ],
  [
    {
      price: 999,
      count: "1.000.000",
    },
    {
      price: 1499,
      count: "2.500.000",
    },
    {
      price: 2399,
      count: "5.000.000",
    },
  ],
  [
    {
      price: 3499,
      count: "10.000.000",
    },
  ],
];
const dataArray = [
  {
    title: "Exceeding 99% Accuracy",
    content:
      "Clarifio goes beyond the surface. We meticulously validate email syntax and establish SMTP connections to confirm email existence, guaranteeing top-notch accuracy.",
  },
  {
    title: "Exceeding 99% Accuracy",
    content:
      "Clarifio goes beyond the surface. We meticulously validate email syntax and establish SMTP connections to confirm email existence, guaranteeing top-notch accuracy.",
  },
  {
    title: "Exceeding 99% Accuracy",
    content:
      "Clarifio goes beyond the surface. We meticulously validate email syntax and establish SMTP connections to confirm email existence, guaranteeing top-notch accuracy.",
  },
];

const selectedClass =
  "mx-2 flex items-center px-8 bg-[#E24949] whitespace-nowrap text-white rounded-full text-2xl font-semibold max-md:w-full max-xl:mb-1";
const normalClass =
  "mx-2 flex items-center px-8 text-badge whitespace-nowrap rounded-full text-2xl font-semibold border-2 border-[#E24949] max-md:w-full max-md:px-3 max-md:text-center max-xl:mb-1";

var curPriceArray = ref(pricingArray[0]);

var fb = ref(true);
var sb = ref(false);
var tb = ref(false);
var frb = ref(false);
var fib = ref(false);

const toggleCard = (index) => {
  switch (index) {
    case 0:
      fb.value = true;
      sb.value = false;
      tb.value = false;
      frb.value = false;
      fib.value = false;
      break;
    case 1:
      sb.value = true;
      fb.value = false;
      tb.value = false;
      frb.value = false;
      fib.value = false;
      console.log(sb);
      break;
    case 2:
      tb.value = true;
      fb.value = false;
      sb.value = false;
      frb.value = false;
      fib.value = false;
      break;
    case 3:
      frb.value = true;
      fb.value = false;
      sb.value = false;
      tb.value = false;
      fib.value = false;
      break;
    case 4:
      fib.value = true;
      fb.value = false;
      sb.value = false;
      tb.value = false;
      frb.value = false;
      break;
    default:
      break;
  }

  console.log(index);
  curPriceArray.value = pricingArray[index];
};
</script>
