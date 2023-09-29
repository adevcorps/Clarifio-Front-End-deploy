<template>
  <div class="w-full flex justify-between mb-9">
    <div class="w-4/12">
      <h1 class="text-[20px] font-bold text-[#344054] font-primary">Reports</h1>
    </div>
  </div>
  <div>
    <div class="flex">
      <div class="w-1/2">
        <button
          class="py-2.5 px-4 bg-[#E24949] text-white rounded-lg text-[14px] font-semibold"
        >
          Download Report
        </button>
        <div id="chart" class="flex -ml-12 pt-8">
          <apexchart
            width="380"
            type="pie"
            :options="data.chartOptions"
            :series="data.series"
          ></apexchart>
        </div>
        <div class="flex items-center justify-between w-[300px] mt-8">
          <div class="flex items-center">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#9B51E0" />
            </svg>
            <div class="pl-2">OK</div>
          </div>
          <div class="text-[#9B51E0]">Download csv or pdf</div>
        </div>
        <div class="flex items-center justify-between w-[300px]">
          <div class="flex items-center">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#D6CD00" />
            </svg>
            <div class="pl-2">catch all, unknown</div>
          </div>
          <div class="text-[#D6CD00]">Download csv or pdf</div>
        </div>
        <div class="flex items-center justify-between w-[300px]">
          <div class="flex items-center">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#E24949" />
            </svg>
            <div class="pl-2">OK</div>
          </div>
          <div class="text-[#E24949]">Download csv or pdf</div>
        </div>
      </div>
      <div class="w-1/2">
        <button
          class="py-2.5 px-4 bg-[#E24949] text-white rounded-lg text-[14px] font-semibold"
        >
          Download Report
        </button>
        <div id="chart" class="flex -ml-12 pt-8">
          <apexchart
            width="380"
            type="pie"
            :options="data.chartOptions"
            :series="data.series"
          ></apexchart>
        </div>
        <div class="flex items-center justify-between w-[300px] mt-8">
          <div class="flex items-center">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#9B51E0" />
            </svg>
            <div class="pl-2">OK</div>
          </div>
          <div class="text-[#9B51E0]">Download csv or pdf</div>
        </div>
        <div class="flex items-center justify-between w-[300px]">
          <div class="flex items-center">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#D6CD00" />
            </svg>
            <div class="pl-2">catch all, unknown</div>
          </div>
          <div class="text-[#D6CD00]">Download csv or pdf</div>
        </div>
        <div class="flex items-center justify-between w-[300px]">
          <div class="flex items-center">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#E24949" />
            </svg>
            <div class="pl-2">OK</div>
          </div>
          <div class="text-[#E24949]">Download csv or pdf</div>
        </div>
      </div>
    </div>

    <div class="w-full my-14">
      <div class="flex justify-between space-x-2">
        <div class="w-6/12 border rounded-lg border-gray-200 py-7 px-5">
          <div class="w-full flex justify-between mb-5">
            <div class="w-10/12">
              <p
                class="text-sm font-primary text-[#475467] font-bold leading-[20px] mb-3"
              >
                email_list_2934354.csv
              </p>
              <p
                class="text-sm font-primary text-[#475467] font-bold leading-[20px] mb-3"
              >
                23-08-29 09:05:07 &nbsp; &nbsp; <span>id:</span> 3245345345
              </p>
            </div>
            <div class="w-2/12 flex">
              <img
                src="../../../assets/images/dashboard/recycle_bin.png"
                class="mr-2 cursor-pointer"
              />
            </div>
          </div>
          <div class="w-full flex justify-between space-x-5 mb-5">
            <div class="w-6/12 border rounded-lg border-gray-200 py-4 px-6">
              <div class="flex justify-between">
                <div class="w-6/12 p-2">
                  <CircleProgress
                    :percent="percent"
                    :viewport="true"
                    :show-percent="true"
                    :size="130"
                    :fill-color="'#23B1A5'"
                    class="w-10/12"
                  />
                </div>
                <div class="w-6/12">
                  <p class="font-primary text-lg text-[#23B1A5] font-bold">Good</p>
                  <p class="font-primary text-[16px] text-[#23B1A5] font-bold">75%</p>
                  <p class="font-primary text-[16px] text-primary font-bold">5</p>
                </div>
              </div>
              <div>
                <div class="w-full">
                  <p>Risky emails may exist or not Learn more when to use them</p>
                </div>
              </div>
            </div>
            <div
              class="w-6/12 flex justify-between border rounded-lg border-gray-200 py-4 px-6"
            >
              <p
                class="font-primary text-[#475467] font-[500] leading-[16px] text-[12px]"
              >
                Good emails are valid, existing emails, it is safe to send emails to them
              </p>
            </div>
          </div>
          <div class="w-full flex justify-between space-x-5 mb-5">
            <div class="w-6/12 border rounded-lg border-gray-200 py-4 px-6">
              <div class="flex justify-between">
                <div class="w-6/12 p-2">
                  <CircleProgress
                    :percent="percent"
                    :viewport="true"
                    :show-percent="true"
                    :size="130"
                    :fill-color="'#F2C94C'"
                    class="w-10/12"
                  />
                </div>
                <div class="w-6/12">
                  <p class="font-primary text-lg text-[#F2C94C] font-bold">Risky</p>
                  <p class="font-primary text-[16px] text-[#F2C94C] font-bold">75%</p>
                  <p class="font-primary text-[16px] text-primary font-bold">5</p>
                </div>
              </div>
              <div>
                <div class="w-full">
                  <p>Risky emails may exist or not Learn more when to use them</p>
                </div>
              </div>
            </div>
            <div class="w-6/12 border rounded-lg border-gray-200 py-4 px-6">
              <div class="flex justify-between">
                <div class="w-6/12 p-2">
                  <CircleProgress
                    :percent="percent"
                    :viewport="true"
                    :show-percent="true"
                    :size="130"
                    class="w-10/12"
                    :fill-color="'#E24949'"
                  />
                </div>
                <div class="w-6/12">
                  <p class="font-primary text-lg text-[#E24949] font-bold">Good</p>
                  <p class="font-primary text-[16px] text-[#E24949] font-bold">75%</p>
                  <p class="font-primary text-[16px] text-primary font-bold">5</p>
                </div>
              </div>
              <div>
                <div class="w-full">
                  <p>Risky emails may exist or not Learn more when to use them</p>
                </div>
              </div>
            </div>
          </div>
          <button
            class="bg-[#23B1A51C] text-[#23B1A5] text-[14px] font-[600] rounded-lg font-primary px-[116px] py-2.5 m-auto mb-12 flex items-center justify-center"
          >
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_18036)">
                <path
                  d="M21.233 28.2375L19.3913 30.0792V22.1458C19.3913 21.2958 18.8247 20.7292 17.9747 20.7292C17.1247 20.7292 16.558 21.2958 16.558 22.1458V30.0792L14.7163 28.2375C14.1497 27.6708 13.2997 27.6708 12.733 28.2375C12.1663 28.8042 12.1663 29.6542 12.733 30.2208L16.983 34.4708C17.5497 35.0375 18.3997 35.0375 18.9663 34.4708L23.2163 30.2208C23.783 29.6542 23.783 28.8042 23.2163 28.2375C22.6497 27.6708 21.7997 27.6708 21.233 28.2375ZM27.0413 12.5125C24.9163 7.55418 19.108 5.14585 14.008 7.41251C10.7497 8.82918 8.483 11.8042 8.058 15.3458C5.083 16.0542 3.09967 19.1708 3.808 22.1458C4.51633 24.5542 6.92467 26.3958 9.47467 26.3958H11.5997C12.4497 25.8292 13.4413 25.5458 14.433 25.8292V22.1458C14.433 20.1625 15.9913 18.6042 17.9747 18.6042C19.958 18.6042 21.5163 20.1625 21.5163 22.1458V25.8292C22.508 25.6875 23.4997 25.8292 24.3497 26.3958H25.058C29.0247 26.3958 32.1413 23.2792 32.1413 19.3125C32.1413 16.1958 30.158 13.5042 27.0413 12.5125Z"
                  fill="#23B1A5"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_18036">
                  <rect
                    width="34"
                    height="34"
                    fill="white"
                    transform="translate(0.974609 0.895996)"
                  />
                </clipPath>
              </defs>
            </svg>

            Download Report
          </button>
        </div>
        <div class="w-6/12 border rounded-lg border-gray-200 py-7 px-5">
          <div class="w-full flex justify-between mb-5">
            <div class="w-10/12">
              <p
                class="text-sm font-primary text-[#475467] font-bold leading-[20px] mb-3"
              >
                email_list_2934354.csv
              </p>
              <p
                class="text-sm font-primary text-[#475467] font-bold leading-[20px] mb-3"
              >
                23-08-29 09:05:07 &nbsp; &nbsp; <span>id:</span> 3245345345
              </p>
            </div>
            <div class="w-2/12 flex">
              <img
                src="../../../assets/images/dashboard/recycle_bin.png"
                class="mr-2 cursor-pointer"
              />
            </div>
          </div>
          <div class="w-full flex justify-between space-x-5 mb-5">
            <div class="w-6/12 border rounded-lg border-gray-200 py-4 px-6">
              <div class="flex justify-between">
                <div class="w-6/12 p-2">
                  <CircleProgress
                    :percent="percent"
                    :viewport="true"
                    :show-percent="true"
                    :size="130"
                    :fill-color="'#23B1A5'"
                    class="w-10/12"
                  />
                </div>
                <div class="w-6/12">
                  <p class="font-primary text-lg text-[#23B1A5] font-bold">Good</p>
                  <p class="font-primary text-[16px] text-[#23B1A5] font-bold">75%</p>
                  <p class="font-primary text-[16px] text-primary font-bold">5</p>
                </div>
              </div>
              <div>
                <div class="w-full">
                  <p>Risky emails may exist or not Learn more when to use them</p>
                </div>
              </div>
            </div>
            <div
              class="w-6/12 flex justify-between border rounded-lg border-gray-200 py-4 px-6"
            >
              <p
                class="font-primary text-[#475467] font-[500] leading-[16px] text-[12px]"
              >
                Good emails are valid, existing emails, it is safe to send emails to them
              </p>
            </div>
          </div>
          <div class="w-full flex justify-between space-x-5 mb-5">
            <div class="w-6/12 border rounded-lg border-gray-200 py-4 px-6">
              <div class="flex justify-between">
                <div class="w-6/12 p-2">
                  <CircleProgress
                    :percent="percent"
                    :viewport="true"
                    :show-percent="true"
                    :size="130"
                    :fill-color="'#F2C94C'"
                    class="w-10/12"
                  />
                </div>
                <div class="w-6/12">
                  <p class="font-primary text-lg text-[#F2C94C] font-bold">Risky</p>
                  <p class="font-primary text-[16px] text-[#F2C94C] font-bold">75%</p>
                  <p class="font-primary text-[16px] text-primary font-bold">5</p>
                </div>
              </div>
              <div>
                <div class="w-full">
                  <p>Risky emails may exist or not Learn more when to use them</p>
                </div>
              </div>
            </div>
            <div class="w-6/12 border rounded-lg border-gray-200 py-4 px-6">
              <div class="flex justify-between">
                <div class="w-6/12 p-2">
                  <CircleProgress
                    :percent="percent"
                    :viewport="true"
                    :show-percent="true"
                    :size="130"
                    class="w-10/12"
                    :fill-color="'#E24949'"
                  />
                </div>
                <div class="w-6/12">
                  <p class="font-primary text-lg text-[#E24949] font-bold">Good</p>
                  <p class="font-primary text-[16px] text-[#E24949] font-bold">75%</p>
                  <p class="font-primary text-[16px] text-primary font-bold">5</p>
                </div>
              </div>
              <div>
                <div class="w-full">
                  <p>Risky emails may exist or not Learn more when to use them</p>
                </div>
              </div>
            </div>
          </div>
          <button
            class="bg-[#23B1A51C] text-[#23B1A5] text-[14px] font-[600] rounded-lg font-primary px-[116px] py-2.5 m-auto mb-12 flex items-center justify-center"
          >
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_18036)">
                <path
                  d="M21.233 28.2375L19.3913 30.0792V22.1458C19.3913 21.2958 18.8247 20.7292 17.9747 20.7292C17.1247 20.7292 16.558 21.2958 16.558 22.1458V30.0792L14.7163 28.2375C14.1497 27.6708 13.2997 27.6708 12.733 28.2375C12.1663 28.8042 12.1663 29.6542 12.733 30.2208L16.983 34.4708C17.5497 35.0375 18.3997 35.0375 18.9663 34.4708L23.2163 30.2208C23.783 29.6542 23.783 28.8042 23.2163 28.2375C22.6497 27.6708 21.7997 27.6708 21.233 28.2375ZM27.0413 12.5125C24.9163 7.55418 19.108 5.14585 14.008 7.41251C10.7497 8.82918 8.483 11.8042 8.058 15.3458C5.083 16.0542 3.09967 19.1708 3.808 22.1458C4.51633 24.5542 6.92467 26.3958 9.47467 26.3958H11.5997C12.4497 25.8292 13.4413 25.5458 14.433 25.8292V22.1458C14.433 20.1625 15.9913 18.6042 17.9747 18.6042C19.958 18.6042 21.5163 20.1625 21.5163 22.1458V25.8292C22.508 25.6875 23.4997 25.8292 24.3497 26.3958H25.058C29.0247 26.3958 32.1413 23.2792 32.1413 19.3125C32.1413 16.1958 30.158 13.5042 27.0413 12.5125Z"
                  fill="#23B1A5"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_18036">
                  <rect
                    width="34"
                    height="34"
                    fill="white"
                    transform="translate(0.974609 0.895996)"
                  />
                </clipPath>
              </defs>
            </svg>

            Download Report
          </button>
        </div>
      </div>
    </div>

    <div class="border rounded-lg border-gray-200">
      <div class="overflow-x-auto">
        <div class="flex justify-end">
          <button
            class="py-2.5 px-4 bg-[#E24949] text-white rounded-lg text-[14px] font-semibold mr-4 mb-4"
          >
            Download All
          </button>
        </div>
        <table
          class="w-full font-primary text-sm text-left text-gray-500 border-y border-gray-200 rounded-lg"
        >
          <thead class="text-sm text-[#475467]">
            <tr>
              <th scope="col" class="px-6 py-3">File Name</th>
              <th scope="col" class="px-6 py-3">Date</th>
              <th scope="col" class="px-6 py-3">Ok %</th>
              <th scope="col" class="px-6 py-3">Total no of emails</th>
              <th scope="col" class="px-6 py-3">Download</th>
            </tr>
          </thead>
          <tbody class="text-sm text-[#475467]">
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              v-for="data in dataArray"
            >
              <td class="px-6 py-4 whitespace-nowrap"><div v-html="data.name"></div></td>
              <td class="px-6 py-4">
                <div v-html="data.date"></div>
              </td>
              <td class="px-6 py-4">23%</td>
              <td class="px-6 py-4">123</td>
              <td class="px-6 py-4">
                <span class="text-[#2F80ED] pr-11">csv</span>
                <span class="text-[#E24949]">pdf</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="w-full flex justify-between p-6">
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
  </div>
</template>
<script setup>
import { Progress } from "flowbite-vue";
import CircleProgress from "vue3-circle-progress";
const data = {
  series: [45, 20, 35],
  chartOptions: {
    chart: {
      width: 380,
      type: "pie",
      toolbar: { show: false },
      animations: { enabled: false },
    },
    legend: {
      display: false,
      show: false,
    },
    colors: ["#9B51E0", "#D6CD00", "#E24949"],
    labels: ["OK", "catch all, unknown", "invalid, disposable"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
            show: true,
          },
        },
      },
    ],
  },
};

const dataArray = [
  {
    name: "abc.csv",
    date: "22 Jan 2022 <br /> 02:24 PM",
    ok: 23,
    noEmails: 123,
    download: 123,
  },
  {
    name: "abc.csv",
    date: "22 Jan 2022 <br /> 02:24 PM",
    ok: 23,
    noEmails: 123,
    download: 123,
  },
  {
    name: "abc.csv",
    date: "22 Jan 2022 <br /> 02:24 PM",
    ok: 23,
    noEmails: 123,
    download: 123,
  },
  {
    name: "abc.csv",
    date: "22 Jan 2022 <br /> 02:24 PM",
    ok: 23,
    noEmails: 123,
    download: 123,
  },
  {
    name: "abc.csv",
    date: "22 Jan 2022 <br /> 02:24 PM",
    ok: 23,
    noEmails: 123,
    download: 123,
  },
  {
    name: "abc.csv",
    date: "22 Jan 2022 <br /> 02:24 PM",
    ok: 23,
    noEmails: 123,
    download: 123,
  },
  {
    name: "abc.csv",
    date: "22 Jan 2022 <br /> 02:24 PM",
    ok: 23,
    noEmails: 123,
    download: 123,
  },
];
</script>
