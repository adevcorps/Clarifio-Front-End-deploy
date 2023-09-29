<template>
  <div>
    <h1 class="text-[20px] font-bold text-[#344054] font-primary">Email Verifier</h1>
    <p class="py-[9px] text-[16px] font-primary">
      File upload / Paste Email List / Signle Email
    </p>
    <div>
      <div class="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          class="px-4 py-2.5 font-primary text-sm font-medium text-gray-900 border border-gray-200 rounded-l-lg flex items-center"
          :class="tab === 1 ? 'bg-[#E24949] text-white' : 'text-primary'"
          @click="changeTab(1)"
        >
          File Upload
        </button>
        <button
          type="button"
          class="px-4 py-2.5 font-primary text-sm font-medium text-gray-900 border border-gray-200 rounded-l-lg flex items-center"
          :class="tab === 2 ? 'bg-[#E24949] text-white' : 'text-primary'"
          @click="changeTab(2)"
        >
          Paste Email List
        </button>
        <button
          type="button"
          class="px-4 py-2.5 font-primary text-sm font-medium text-gray-900 border border-gray-200 rounded-l-lg flex items-center"
          :class="tab === 3 ? 'bg-[#E24949] text-white' : 'text-primary'"
          @click="changeTab(3)"
        >
          Single Email
        </button>
      </div>
    </div>
    <div v-show="tab === 1">
      <div class="w-full flex pt-14 pb-2 border-y border-gray-200">
        <div class="w-3/12 mr-8">
          <p class="font-primary text-lg text-[#344054] font-bold">Bulk Validator</p>
          <p class="font-primary text-[14px] text-[#344054]">Bulk email validation</p>
        </div>
        <div class="w-9/12 pr-12">
          <div class="border rounded-lg border-[#eaecf0] p-6">
            <div class="flex py-6">
              <div class="flex flex-col w-full">
                <p class="font-primary text-[14px] pb-2 font-medium text-[#344054]"></p>
              </div>
            </div>
            <div class="flex">
              <div
                class="w-full p-6 rounded-lg border border-gray-300 cursor-pointer"
                v-on:click="$refs.avatar.click()"
              >
                <input
                  type="file"
                  ref="avatar"
                  name="avatar"
                  class="hidden"
                  id="avatar"
                  v-on:change="fileChange"
                />
                <div class="w-full text-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="mx-auto"
                  >
                    <g id="upload-cloud-02">
                      <path
                        id="Icon"
                        d="M6.66675 13.3333L10.0001 10M10.0001 10L13.3334 13.3333M10.0001 10V17.5M16.6667 13.9524C17.6847 13.1117 18.3334 11.8399 18.3334 10.4167C18.3334 7.88536 16.2814 5.83333 13.7501 5.83333C13.568 5.83333 13.3976 5.73833 13.3052 5.58145C12.2185 3.73736 10.2121 2.5 7.91675 2.5C4.46497 2.5 1.66675 5.29822 1.66675 8.75C1.66675 10.4718 2.36295 12.0309 3.48921 13.1613"
                        stroke="#475467"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                  <span class="text-base text-[#E24949] font-bold font-primary leading-5"
                    >Click to upload</span
                  >
                  <span
                    class="text-base text-[#475467] font-primary font-semibold leading-5"
                  >
                    or drage and drop</span
                  >
                  <p class="mt-1">
                    <span
                      class="text-base text-[#475467] font-primary font-semibold leading-5"
                      >SVG, PNG, JPG or GIF (max. 800 *400px)</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div class="flex justify-between">
              <div></div>
              <button
                class="py-2.5 mt-5 px-8 bg-[#E24949] text-white rounded-lg text-[18px] font-semibold"
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full mt-5">
        <div class="flex justify-between space-x-2">
          <div class="w-6/12 border rounded-lg border-gray-200 py-7 px-5">
            <div class="w-full flex justify-between">
              <div class="w-10/12">
                <p
                  class="text-sm font-primary text-[#475467] font-bold leading-[20px] mb-3"
                >
                  email_list_2934354.csv
                </p>
                <p>Uploading now &nbsp; &nbsp; <span>id:</span> 3245345345</p>
              </div>
              <div class="w-2/12 flex">
                <img src="../../../assets/images/dashboard/pause.png" class="mr-2" />
                <img src="../../../assets/images/dashboard/stop.png" />
              </div>
            </div>
            <div class="w-6/12 mx-auto p-5">
              <Progress
                labelProgress="true"
                labelPosition="inside"
                color="red"
                size="lg"
                progress="45"
                class="text-white mb-3 rounded-full"
              ></Progress>
              <p class="font-primary font-semibold text-primary text-[17.32px] mb-3">
                In Progress...
              </p>
              <p class="font-primary font-semibold text-[#23B1A5] text-[17.32px]">
                15min left
              </p>
            </div>
            <div class="w-10/12">
              <p
                class="text-sm font-primary text-[#475467] font-bold leading-[20px] mb-3"
              >
                In progress
              </p>
              <p>15min left</p>
              <div class="w-full flex justify-between">
                <div class="w-6/12 flex items-center">
                  <img src="../../../assets/images/dashboard/mail_box.png" class="m-5" />
                  <div>
                    <span class="mb-5">11</span>
                    <p
                      class="text-sm font-primary text-[#475467] font-bold leading-[20px] mb-3"
                    >
                      Email Verified
                    </p>
                  </div>
                </div>
                <div class="w-6/12 flex items-center">
                  <img src="../../../assets/images/dashboard/mail_box.png" class="m-5" />
                  <div>
                    <span>0</span>
                    <p
                      class="text-sm font-primary text-[#475467] font-bold leading-[20px] mb-3"
                    >
                      Email Verified
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
                  Good emails are valid, existing emails, it is safe to send emails to
                  them
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
              class="bg-[#23B1A51C] text-[#23B1A5] text-[14px] font-[600] rounded-lg font-primary py-2 sm:py-5 w-full mb-12"
            >
              Download Report
            </button>
          </div>
        </div>
      </div>
      <div class="w-full mt-5">
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
                  Good emails are valid, existing emails, it is safe to send emails to
                  them
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
              class="bg-[#23B1A51C] text-[#23B1A5] text-[14px] font-[600] rounded-lg font-primary py-2 sm:py-5 w-full mb-12"
            >
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
                  Good emails are valid, existing emails, it is safe to send emails to
                  them
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
              class="bg-[#23B1A51C] text-[#23B1A5] text-[14px] font-[600] rounded-lg font-primary py-2 sm:py-5 w-full mb-12"
            >
              Download Report
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-show="tab === 2">
      <div class="w-full flex pt-14 pb-2 border-y border-gray-200">
        <div class="w-3/12 mr-8">
          <p class="font-primary text-lg text-[#344054] font-bold">Bulk Validator</p>
          <p class="font-primary text-[14px] text-[#344054]">Bulk email validation</p>
        </div>
        <div class="w-9/12 pr-12">
          <p class="font-primary text-primary text-[12px] font-[400] leading-[18px]">
            Enter an email address and hit coma, Enter or Return . Once you entered all
            emails, you want to verify, click ‘Start Verification’
          </p>
          <div class="border rounded-lg border-[#eaecf0] p-6 flex">
            <div class="w-6/12">
              <div
                class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
              >
                <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                  <textarea
                    id="message"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                    placeholder="Write your mails here..."
                    v-on:keyup.enter="getEmailList"
                    v-model="textAreaValue"
                  ></textarea>
                </div>
                <div class="w-full px-3 py-2 border-t dark:border-gray-600">
                  <div class="w-full">
                    <span
                      class="inline-flex items-center gap-1.5 py-1.5 pl-3 pr-2 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      v-for="tag in tagArray"
                    >
                      {{ tag }}
                      <button
                        type="button"
                        class="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-blue-600 hover:bg-blue-200 hover:text-blue-500 focus:outline-none focus:bg-blue-200 focus:text-blue-500"
                      >
                        <span class="sr-only">Remove badge</span>
                        <svg
                          class="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          @click="removeItem(tag)"
                        >
                          <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </button>
                    </span>
                  </div>
                  <button
                    class="w-full py-2.5 mt-5 px-8 bg-[#E24949] text-white rounded-lg text-[14px] font-semibold"
                  >
                    Start verification
                  </button>
                </div>
              </div>
            </div>
            <div class="w-6/12"></div>
          </div>
        </div>
      </div>
      <div class="w-6/12 mx-auto">
        <div class="w-full border rounded-lg border-gray-200 py-7 px-5 mt-7">
          <div class="w-6/12 mx-auto p-5">
            <CircleProgress
              :percent="percent"
              :viewport="true"
              :size="240"
              :fill-color="'#E24949'"
              class="w-10/12"
            />
          </div>
          <div class="w-10/12">
            <p class="text-sm font-primary text-[#475467] font-bold leading-[20px] mb-3">
              In progress
            </p>
            <p>15min left</p>
            <div class="w-full flex justify-between">
              <div class="w-6/12 flex items-center">
                <img src="../../../assets/images/dashboard/mail_box.png" class="m-5" />
                <div>
                  <span class="mb-5">11</span>
                  <p
                    class="text-sm font-primary text-[#475467] font-bold leading-[20px] mb-3"
                  >
                    Email Verified
                  </p>
                </div>
              </div>
              <div class="w-6/12 flex items-center">
                <img src="../../../assets/images/dashboard/mail_box.png" class="m-5" />
                <div>
                  <span>0</span>
                  <p
                    class="text-sm font-primary text-[#475467] font-bold leading-[20px] mb-3"
                  >
                    Email Verified
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full border rounded-lg border-gray-200 py-7 px-5 mt-7">
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
            class="bg-[#23B1A51C] text-[#23B1A5] text-[14px] font-[600] rounded-lg font-primary py-2 sm:py-5 w-full mb-12"
          >
            Download Report
          </button>
        </div>
      </div>
    </div>
    <div v-show="tab === 3">
      <div class="w-full flex pt-14 pb-2">
        <div class="w-5/12 mr-8 pr-8">
          <p class="font-primary text-lg text-[#344054] font-bold">
            Single Email Validator
          </p>
          <p class="font-primary text-[14px] text-[#344054]">Single email validation</p>

          <input
            type="text"
            name="Password"
            placeholder="Enter your password"
            value="asdfasdf"
            class="flex py-2.5 px-3.5 self-stretch rounded-lg border border-gray-300 font-primary text-[16px] w-full"
          />
          <button
            class="w-full py-2.5 mt-5 px-8 bg-[#E24949] text-white rounded-lg text-[14px] font-semibold"
          >
            Verify
          </button>
        </div>
        <div class="w-5/12 pr-12 relative px-16 py-8">
          <img
            src="../../../assets/images/dashboard/Rectangle_4455.png"
            class="absolute right-0 top-0 w-full -z-1"
          />
          <div class="flex items-center">
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-3"
            >
              <g id="Email" clip-path="url(#clip0_1_17287)">
                <path
                  id="Vector"
                  d="M0.286167 17.9298L22.9335 0.566895L45.5808 17.9298V43.5968H0.286167V17.9298Z"
                  fill="#006DFF"
                />
                <path
                  id="Vector_2"
                  d="M4.58917 7.36133H41.2778V40.4264H4.58917V7.36133Z"
                  fill="#F0F7FC"
                />
                <path
                  id="Vector_3"
                  d="M15.0065 13.7021H30.8596V15.061H15.0065V13.7021Z"
                  fill="#7BC4FF"
                />
                <path
                  id="Vector_4"
                  d="M10.7035 18.2319H35.1626V19.8172H10.7035V18.2319Z"
                  fill="#7BC4FF"
                />
                <path
                  id="Vector_5"
                  d="M10.7035 22.7612H35.1626V24.3465H10.7035V22.7612Z"
                  fill="#7BC4FF"
                />
                <path
                  id="Vector_6"
                  d="M0.285923 43.5967V17.9297L22.9332 35.2926L45.5806 17.9297V43.5967H0.285923Z"
                  fill="url(#paint0_linear_1_17287)"
                />
                <path
                  id="Vector_7"
                  d="M22.9332 26.2339L0.285923 43.5968H45.5806L22.9332 26.2339Z"
                  fill="#008DFF"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_1_17287"
                  x1="22.9332"
                  y1="17.9293"
                  x2="22.9332"
                  y2="43.5967"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2ABDFE" />
                  <stop offset="1" stop-color="#1A90FD" />
                </linearGradient>
                <clipPath id="clip0_1_17287">
                  <rect
                    width="45.2946"
                    height="45.2946"
                    fill="white"
                    transform="matrix(-1 0 0 1 45.5808 0.566895)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p class="font-primary font-bold text-[23.839px]">Good</p>
          </div>
          <button
            class="mb-2 py-2.5 mt-5 px-8 bg-none text-primary border border-[#FFF] rounded-full text-[18px] font-semibold"
          >
            Jacksmith@exampletest.one
          </button>
          <p class="font-primary font-bold text-[23.839px] mb-2">Ok</p>
          <p class="font-primary text-[16px] mb-2">
            Good emails are valid existing emails. It is safe to send emails to them
          </p>
          <a class="font-primary font-bold cursor-pointer">Learn more >></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Progress } from "flowbite-vue";
import CircleProgress from "vue3-circle-progress";
import "vue3-circle-progress/dist/circle-progress.css";
import VueCircle from "vue2-circle-progress";
import Multiselect from "@vueform/multiselect";

const tab = ref(1);
const tagArray = ref([]);
const fill = { gradient: ["green"] };
const textAreaValue = ref("");

const changeTab = (_id) => {
  tab.value = _id;
};
const openFileDialog = () => {};
const fileChange = (e) => {
  console.log(e);
};
const getEmailList = (e) => {
  textAreaValue.value = "";
  var value = e.target.value.trim();
  value = value.split("," || "`\n`");
  var tmpArray = [];
  for (var i = 0; i < value.length; i++) {
    if (value[i] != "") tmpArray.push(value[i]);
  }
  tagArray.value = tmpArray;
};

const removeItem = (_key) => {
  var tmpArray = [];
  for (var i = 0; i < tagArray.value.length; i++) {
    if (tagArray.value[i] != _key) {
      tmpArray.push(tagArray.value[i]);
    }
  }
  tagArray.value = tmpArray;
};
</script>
