<template>
  <div class="w-full flex justify-between mb-9">
    <div class="w-4/12">
      <h1 class="text-[20px] font-bold text-[#344054] font-primary">Subscription</h1>
    </div>
  </div>
  <div>
    <div class="overflow-x-auto mb-5">
      <table
        class="w-full font-primary text-sm text-left text-gray-500 border-y border-gray-200 rounded-lg"
      >
        <thead class="text-sm text-[#475467]">
          <tr>
            <th scope="col" class="px-6 py-3">Subscription name</th>
            <th scope="col" class="px-6 py-3">Amount</th>
            <th scope="col" class="px-6 py-3">Valid</th>
            <th scope="col" class="px-6 py-3 flex items-center">
              Active<svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="ml-1"
              >
                <g clip-path="url(#clip0_143_716)">
                  <path
                    d="M6.05992 6.00016C6.21665 5.55461 6.52602 5.1789 6.93322 4.93958C7.34042 4.70027 7.81918 4.61279 8.2847 4.69264C8.75022 4.77249 9.17246 5.01451 9.47664 5.37585C9.78081 5.73718 9.94729 6.19451 9.94659 6.66683C9.94659 8.00016 7.94659 8.66683 7.94659 8.66683M7.99992 11.3335H8.00659M14.6666 8.00016C14.6666 11.6821 11.6818 14.6668 7.99992 14.6668C4.31802 14.6668 1.33325 11.6821 1.33325 8.00016C1.33325 4.31826 4.31802 1.3335 7.99992 1.3335C11.6818 1.3335 14.6666 4.31826 14.6666 8.00016Z"
                    stroke="#98A2B3"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_143_716">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody class="text-sm text-[#475467]">
          <tr
            v-for="data in dataArray"
            :key="data.id"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <td class="px-6 py-4 whitespace-nowrap"><div v-html="data.name"></div></td>
            <td class="px-6 py-4">
              <div v-html="data.amount"></div>
            </td>
            <td class="px-6 py-4">
              <div v-html="data.valid"></div>
            </td>
            <td class="px-6 py-4">
              <span
                class=" text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
                :class="`${data.active=='Subscriptions'?'bg-green-100 text-[#219653]':'bg-[#F2F4F7] text-[#344054]'}`"
                >{{ data.active }}</span
              >
            </td>
            <td class="px-6 py-4">
              <div
                v-html="data.Action"
                :class="`text-[${data.Action == 'Renew' ? '#9B51E0' : '#E24949'}]`"
              ></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="w-full">
      <Pricing v-bind:imageShow="imgFlag" />
    </div>
  </div>
</template>
<script setup>
import Pricing from "../../../components/HomePage/Pricing.vue";
import { ref } from "vue";

const dataArray = ref([]);
const tmpArray = [
  {
    id: 0,
    name: "abcd",
    amount: "$18.99",
    valid: "21-02-2023",
    active: "Subscriptions",
    Action: "Renew",
  },
  {
    id: 1,
    name: "abcd",
    amount: "$4.50",
    valid: "21-02-2023",
    active: "Subscriptions",
    Action: "Cancel",
  },
  {
    id: 2,
    name: "abcd",
    amount: "$88.00",
    valid: "21-02-2023",
    active: "Subscriptions",
    Action: "Cancel",
  },
  {
    id: 3,
    name: "abcd",
    amount: "$15.00",
    valid: "21-02-2023",
    active: "Subscriptions",
    Action: "Cancel",
  },
  {
    id: 4,
    name: "abcd",
    amount: "$12.50",
    valid: "21-02-2023",
    active: "Subscriptions",
    Action: "Cancel",
  },
  {
    id: 5,
    name: "abcd",
    amount: "$40.20",
    valid: "21-02-2023",
    active: "Subscriptions",
    Action: "Cancel",
  },
  {
    id: 6,
    name: "abcd",
    amount: "$192.00",
    valid: "21-02-2023",
    active: "Uncategorized",
    Action: "Cancel",
  },
];

dataArray.value = tmpArray;
</script>
