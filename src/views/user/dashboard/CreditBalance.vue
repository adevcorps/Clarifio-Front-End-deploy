<template>
  <div class="w-full flex justify-between mb-9">
    <div class="w-4/12">
      <h1 class="text-[20px] font-bold text-[#344054] font-primary">Credit Balance</h1>
      <p class="py-[9px] text-[16px] font-primary">
        Credit counting history for every marketing.
      </p>
    </div>
    <div class="w-4/12 flex justify-between items-center">
      <div class="w-6/12 text-center">
        <p class="text-[18px] text-[#344054] font-primary">Actual Credit</p>
        <p class="text-[18px] text-[#344054] font-primary font-bold">123</p>
      </div>
      <div class="w-6/12 flex justify-center items-center">
        <button
          class="py-2.5 px-8 bg-[#E24949] text-white rounded-lg text-[18px] font-semibold"
        >
          Buy Credit
        </button>
      </div>
    </div>
  </div>
  <div>
    <div class="overflow-x-auto mb-5">
      <table
        class="w-full font-primary text-sm text-left text-gray-500 border-y border-gray-200 rounded-lg"
      >
        <thead class="text-sm text-[#475467]">
          <tr>
            <th scope="col" class="px-6 py-3">Date <br />(Europe/London)</th>
            <th scope="col" class="px-6 py-3">Reason</th>
            <th scope="col" class="px-6 py-3">Change</th>
            <th scope="col" class="px-6 py-3">Balance</th>
          </tr>
        </thead>
        <tbody class="text-sm text-[#475467]">
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            v-for="data in dataArray"
          >
            <td class="px-6 py-4 whitespace-nowrap"><div v-html="data.date"></div></td>
            <td class="px-6 py-4">
              <div v-html="data.reason"></div>
            </td>
            <td class="px-6 py-4">
              <span
                class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
                v-show="data.percent >= 5"
                >{{ data.percent }}%</span
              >
              <span
                class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
                v-show="data.percent < 5"
                >{{ data.percent }}%</span
              >
            </td>
            <td class="px-6 py-4">123</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="w-full flex justify-between">
      <div class="w-6/12">
        <p class="text-[#344054]">Page 1 of 10</p>
      </div>
      <div class="w-6/12 flex justify-end text-[#344054]">
        <a
          href="#"
          class="flex items-center justify-center px-3 h-8 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            class="w-3.5 h-3.5 mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Previous
        </a>
        <a
          href="#"
          class="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
          <svg
            class="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
      <!-- Previous Button -->
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const dataArray = ref([]);
const tmpArray = [
  {
    id: 0,
    date: "22 Jan 2022 <br /> 02:24 PM",
    reason: "Refund for risky emails in file: <br /> 50.csv (25088681)",
    percent: 5,
    balance: 123,
  },
  {
    id: 1,
    date: "22 Jan 2022 <br /> 02:24 PM",
    reason: "Refund for risky emails in file: <br /> 50.csv (25088681)",
    percent: 5,
    balance: 123,
  },
  {
    id: 2,
    date: "22 Jan 2022 <br /> 02:24 PM",
    reason: "Refund for risky emails in file: <br /> 50.csv (25088681)",
    percent: 1,
    balance: 123,
  },
  {
    id: 3,
    date: "22 Jan 2022 <br /> 02:24 PM",
    reason: "Refund for risky emails in file: <br /> 50.csv (25088681)",
    percent: 3,
    balance: 123,
  },
  {
    id: 4,
    date: "22 Jan 2022 <br /> 02:24 PM",
    reason: "Refund for risky emails in file: <br /> 50.csv (25088681)",
    percent: 5,
    balance: 123,
  },
  {
    id: 5,
    date: "22 Jan 2022 <br /> 02:24 PM",
    reason: "Refund for risky emails in file: <br /> 50.csv (25088681)",
    percent: 5,
    balance: 123,
  },
  {
    id: 6,
    date: "22 Jan 2022 <br /> 02:24 PM",
    reason: "Refund for risky emails in file: <br /> 50.csv (25088681)",
    percent: 5,
    balance: 123,
  },
  {
    id: 7,
    date: "22 Jan 2022 <br /> 02:24 PM",
    reason: "Refund for risky emails in file: <br /> 50.csv (25088681)",
    percent: 1,
    balance: 123,
  },
  {
    id: 8,
    date: "22 Jan 2022 <br /> 02:24 PM",
    reason: "Refund for risky emails in file: <br /> 50.csv (25088681)",
    percent: 3,
    balance: 123,
  },
  {
    id: 9,
    date: "22 Jan 2022 <br /> 02:24 PM",
    reason: "Refund for risky emails in file: <br /> 50.csv (25088681)",
    percent: 5,
    balance: 123,
  },
];

dataArray.value = tmpArray;
</script>
