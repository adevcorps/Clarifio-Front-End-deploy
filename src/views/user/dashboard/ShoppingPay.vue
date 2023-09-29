<template>
  <div class="w-full flex justify-between mb-9">
    <div class="w-4/12">
      <h1 class="text-[20px] font-bold text-[#344054] font-primary">Payment method</h1>
      <p class="py-[9px] text-[16px] font-primary">Pay using saved biilling address.</p>
    </div>
  </div>
  <div class="w-full border-b border-gray-200 flex space-x-5 mb-5">
    <div class="w-3/12">
      <div class="w-full mb-2">
        <p class="font-primary text-[#344054] text-[14px] font-semibold">Card details</p>
        <p class="font-primary text-[#344054] text-[14px]">
          Select default payment method.
        </p>
      </div>
    </div>
    <div class="w-4/12">
      <div
        class="w-full border-2 border-[#7F56D9] rounded-lg p-4 flex justify-between bg-[#F9F5FF] cursor-pointer mb-1"
      >
        <div class="w-1/12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="32"
            viewBox="0 0 46 32"
            fill="none"
          >
            <rect x="0.5" y="0.5" width="45" height="31" rx="5.5" fill="white" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.3336 21.1444H11.5872L9.52784 13.0565C9.43009 12.6845 9.22255 12.3556 8.91725 12.2006C8.15535 11.811 7.31579 11.501 6.3999 11.3446V11.0332H10.824C11.4346 11.0332 11.8925 11.501 11.9689 12.0442L13.0374 17.8782L15.7824 11.0332H18.4524L14.3336 21.1444ZM19.9789 21.1444H17.3852L19.5209 11.0332H22.1146L19.9789 21.1444ZM25.4702 13.8343C25.5465 13.2898 26.0044 12.9784 26.5387 12.9784C27.3783 12.9002 28.2928 13.0566 29.0561 13.4448L29.514 11.2678C28.7508 10.9564 27.9112 10.8 27.1493 10.8C24.6319 10.8 22.8002 12.2006 22.8002 14.1444C22.8002 15.6231 24.0977 16.3995 25.0136 16.8673C26.0044 17.3337 26.3861 17.6451 26.3097 18.1114C26.3097 18.811 25.5465 19.1224 24.7846 19.1224C23.8687 19.1224 22.9528 18.8892 22.1146 18.4997L21.6567 20.678C22.5725 21.0662 23.5634 21.2226 24.4793 21.2226C27.3019 21.2994 29.0561 19.9002 29.0561 17.8001C29.0561 15.1553 25.4702 15.0003 25.4702 13.8343ZM38.1332 21.1444L36.0738 11.0332H33.8618C33.4038 11.0332 32.9459 11.3446 32.7932 11.811L28.9797 21.1444H31.6497L32.1826 19.667H35.4632L35.7685 21.1444H38.1332ZM34.2434 13.7562L35.0053 17.5669H32.8696L34.2434 13.7562Z"
              fill="#172B85"
            />
            <rect x="0.5" y="0.5" width="45" height="31" rx="5.5" stroke="#F2F4F7" />
          </svg>
        </div>
        <div class="w-8/12">
          <p
            class="text-[#53389E] font-primary text-[14px] font-semibold leading-[20px] mb-1"
          >
            Visa ending in 1234
          </p>
          <p class="text-[#53389E] font-primary text-[14px] leading-[20px] mb-1">
            Expiry 06/2024
          </p>
          <p class="text-[#53389E] font-primary text-[14px] leading-[20px] mb-1">
            Set as default <a class="font-bold">Edit</a>
          </p>
        </div>
        <div class="w-1/12 flex justify-end">
          <div
            class="bg-[#7F56D9] w-[16px] h-[16px] rounded-full flex justify-center items-center"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="check">
                <path
                  id="Icon"
                  d="M8.33341 2.5L3.75008 7.08333L1.66675 5"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div
        class="w-full border-2 border-gray-200 rounded-lg p-4 flex justify-between cursor-pointer mb-1"
      >
        <div class="w-1/12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="19"
            viewBox="0 0 30 19"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.9053 16.4393C13.3266 17.77 11.2787 18.5733 9.04092 18.5733C4.04776 18.5733 0 14.5737 0 9.64C0 4.70625 4.04776 0.706665 9.04092 0.706665C11.2787 0.706665 13.3266 1.51 14.9053 2.84072C16.484 1.51 18.5319 0.706665 20.7697 0.706665C25.7628 0.706665 29.8106 4.70625 29.8106 9.64C29.8106 14.5737 25.7628 18.5733 20.7697 18.5733C18.5319 18.5733 16.484 17.77 14.9053 16.4393Z"
              fill="#ED0006"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.9053 16.4393C16.8492 14.8007 18.0818 12.3626 18.0818 9.64C18.0818 6.91739 16.8492 4.47926 14.9053 2.84072C16.484 1.50999 18.5319 0.706665 20.7697 0.706665C25.7628 0.706665 29.8106 4.70625 29.8106 9.64C29.8106 14.5737 25.7628 18.5733 20.7697 18.5733C18.5319 18.5733 16.484 17.77 14.9053 16.4393Z"
              fill="#F9A000"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.9055 16.4393C16.8494 14.8008 18.082 12.3627 18.082 9.64007C18.082 6.91748 16.8494 4.47936 14.9055 2.84082C12.9616 4.47936 11.729 6.91748 11.729 9.64007C11.729 12.3627 12.9616 14.8008 14.9055 16.4393Z"
              fill="#FF5E00"
            />
          </svg>
        </div>
        <div class="w-8/12">
          <p
            class="text-[#344054] font-primary text-[14px] font-semibold leading-[20px] mb-1"
          >
            Mastercard ending in 1234
          </p>
          <p class="text-[#344054] font-primary text-[14px] leading-[20px] mb-1">
            Expiry 06/2024
          </p>
          <p class="text-[#344054] font-primary text-[14px] leading-[20px] mb-1">
            Set as default <a class="text-[#53389E] font-bold">Edit</a>
          </p>
        </div>
        <div class="w-1/12 flex justify-end">
          <div
            class="bg-[white] w-[16px] h-[16px] border-2 border-x-gray-200 rounded-full flex justify-center items-center"
          ></div>
        </div>
      </div>
      <div
        class="w-full border-2 border-gray-200 rounded-lg p-4 flex justify-between cursor-pointer mb-1"
      >
        <div class="w-1/12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="32"
            viewBox="0 0 46 32"
            fill="none"
          >
            <rect x="0.5" y="0.5" width="45" height="31" rx="5.5" fill="white" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.6963 11.1243C12.3095 11.5934 11.6907 11.9635 11.0719 11.9107C10.9945 11.2762 11.2975 10.6022 11.652 10.1859C12.0388 9.70344 12.7156 9.35981 13.2635 9.33337C13.328 9.99421 13.0766 10.6418 12.6963 11.1243ZM13.257 12.0362C12.7118 12.004 12.2144 12.2043 11.8126 12.366C11.554 12.4701 11.3351 12.5583 11.1685 12.5583C10.9816 12.5583 10.7536 12.4654 10.4976 12.3612C10.1621 12.2245 9.77866 12.0684 9.3765 12.0759C8.45472 12.0891 7.5974 12.6244 7.12684 13.4768C6.15993 15.1818 6.87544 17.7062 7.81012 19.094C8.26779 19.7812 8.8157 20.5346 9.53766 20.5082C9.85527 20.4959 10.0837 20.3965 10.3202 20.2936C10.5924 20.1752 10.8752 20.0522 11.3168 20.0522C11.743 20.0522 12.0134 20.172 12.273 20.287C12.5198 20.3964 12.7569 20.5014 13.1088 20.495C13.8565 20.4817 14.3271 19.8077 14.7847 19.1204C15.2786 18.3828 15.4957 17.6629 15.5286 17.5536L15.5325 17.541C15.5317 17.5402 15.5256 17.5373 15.5148 17.5323L15.5148 17.5323C15.3497 17.4548 14.0878 16.8625 14.0757 15.2743C14.0635 13.9413 15.0766 13.2658 15.2361 13.1595L15.2361 13.1595C15.2458 13.153 15.2523 13.1487 15.2553 13.1464C14.6107 12.1684 13.6051 12.0626 13.257 12.0362ZM18.4332 20.4223V10.1198H22.2042C24.1509 10.1198 25.511 11.4943 25.511 13.5033C25.511 15.5122 24.1251 16.9 22.1526 16.9H19.9932V20.4223H18.4332ZM19.9931 11.4679H21.7915C23.1452 11.4679 23.9187 12.208 23.9187 13.5099C23.9187 14.8117 23.1452 15.5585 21.785 15.5585H19.9931V11.4679ZM30.6614 19.1865C30.2489 19.9927 29.34 20.5016 28.3602 20.5016C26.9098 20.5016 25.8978 19.616 25.8978 18.2811C25.8978 16.9595 26.8776 16.1995 28.689 16.0872L30.6357 15.9682V15.3999C30.6357 14.5606 30.1006 14.1046 29.1466 14.1046C28.3602 14.1046 27.7865 14.521 27.6705 15.1554H26.2652C26.3104 13.8205 27.5351 12.849 29.1917 12.849C30.9773 12.849 32.1376 13.8073 32.1376 15.2942V20.4223H30.6937V19.1865H30.6614ZM28.7791 19.279C27.9476 19.279 27.419 18.8693 27.419 18.2415C27.419 17.5939 27.9282 17.2172 28.9016 17.1577L30.6356 17.0454V17.6269C30.6356 18.5917 29.8362 19.279 28.7791 19.279ZM36.9269 20.8254C36.3017 22.6295 35.5862 23.2242 34.0649 23.2242C33.9489 23.2242 33.5621 23.211 33.4719 23.1846V21.9488C33.5685 21.962 33.807 21.9753 33.9295 21.9753C34.6192 21.9753 35.006 21.6779 35.2445 20.9047L35.3863 20.4487L32.7435 12.9482H34.3743L36.2114 19.0345H36.2437L38.0808 12.9482H39.6665L36.9269 20.8254Z"
              fill="black"
            />
            <rect x="0.5" y="0.5" width="45" height="31" rx="5.5" stroke="#F2F4F7" />
          </svg>
        </div>
        <div class="w-8/12">
          <p
            class="text-[#344054] font-primary text-[14px] font-semibold leading-[20px] mb-1"
          >
            iPay ending in 1234
          </p>
          <p class="text-[#344054] font-primary text-[14px] leading-[20px] mb-1">
            Expiry 06/2024
          </p>
          <p class="text-[#344054] font-primary text-[14px] leading-[20px] mb-1">
            Set as default <a class="text-[#53389E] font-bold">Edit</a>
          </p>
        </div>
        <div class="w-1/12 flex justify-end">
          <div
            class="bg-[white] w-[16px] h-[16px] border-2 border-x-gray-200 rounded-full flex justify-center items-center"
          ></div>
        </div>
      </div>
      <p
        class="cursor-pointer text-[14px] font-primary font-semibold text-[#475467] my-5"
      >
        + Add new payment method
      </p>
    </div>
  </div>
  <div class="w-full border-gray-200 flex space-x-5 mb-2">
    <div class="w-3/12">
      <div class="w-full mb-2">
        <p class="font-primary text-[#344054] text-[14px] font-semibold">
          Pay using saved billing address.
        </p>
      </div>
      <button
        class="py-2.5 px-8 bg-[#E24949] text-white rounded-lg text-[18px] w-full font-semibold"
      >
        Add address form
      </button>
    </div>
  </div>
  <div class="w-6/12 mx-auto border border-gray-200 rounded-lg p-6">
    <div
      class="w-full border border-gray-200 rounded-lg px-5 py-2 flex justify-between items-center cursor-pointer mb-6"
    >
      <p class="text-[18px] font-primary text-[#344054] font-[500] leading-20px">
        Pay using saved billing address
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="62"
        height="62"
        viewBox="0 0 62 62"
        fill="none"
      >
        <path
          d="M39.3827 25.6517C38.9917 25.2343 38.4627 25 37.9114 25C37.36 25 36.8311 25.2343 36.44 25.6517L28.9478 33.5857L21.56 25.6517C21.1689 25.2343 20.64 25 20.0886 25C19.5373 25 19.0083 25.2343 18.6173 25.6517C18.4217 25.8601 18.2665 26.108 18.1605 26.3811C18.0545 26.6542 18 26.9471 18 27.243C18 27.5389 18.0545 27.8318 18.1605 28.1049C18.2665 28.378 18.4217 28.6259 18.6173 28.8343L27.4661 38.3371C27.6601 38.5471 27.8909 38.7139 28.1452 38.8276C28.3995 38.9414 28.6723 39 28.9478 39C29.2233 39 29.4961 38.9414 29.7504 38.8276C30.0047 38.7139 30.2356 38.5471 30.4296 38.3371L39.3827 28.8343C39.5783 28.6259 39.7335 28.378 39.8395 28.1049C39.9454 27.8318 40 27.5389 40 27.243C40 26.9471 39.9454 26.6542 39.8395 26.3811C39.7335 26.108 39.5783 25.8601 39.3827 25.6517Z"
          fill="#9A9A9A"
        />
      </svg>
    </div>
    <div class="w-full border border-gray-200 rounded-lg px-5 py-2 cursor-pointer mb-6">
      <div class="w-full flex justify-between items-center cursor-pointer">
        <p class="text-[18px] font-primary text-[#344054] font-[500] leading-20px">
          Save address 2
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="62"
          height="62"
          viewBox="0 0 62 62"
          fill="none"
        >
          <path
            d="M18.6173 38.3483C19.0083 38.7657 19.5373 39 20.0886 39C20.64 39 21.1689 38.7657 21.56 38.3483L29.0522 30.4143L36.44 38.3483C36.8311 38.7657 37.36 39 37.9114 39C38.4627 39 38.9917 38.7657 39.3827 38.3483C39.5783 38.1399 39.7335 37.892 39.8395 37.6189C39.9455 37.3458 40 37.0529 40 36.757C40 36.4611 39.9455 36.1682 39.8395 35.8951C39.7335 35.622 39.5783 35.3741 39.3827 35.1657L30.5339 25.663C30.3399 25.4529 30.1091 25.2862 29.8548 25.1724C29.6005 25.0586 29.3277 25 29.0522 25C28.7767 25 28.5039 25.0586 28.2496 25.1724C27.9953 25.2862 27.7644 25.4529 27.5704 25.663L18.6173 35.1657C18.4217 35.3741 18.2665 35.622 18.1605 35.8951C18.0546 36.1682 18 36.4611 18 36.757C18 37.0529 18.0546 37.3458 18.1605 37.6189C18.2665 37.892 18.4217 38.1399 18.6173 38.3483Z"
            fill="#9A9A9A"
          />
        </svg>
      </div>
      <div class="mt-8 flex justify-between space-x-5">
        <div class="w-4/12">
          <p class="font-primary text-[#344054] text-[14px] font-[500] leading-[20px]">
            Card details
          </p>
        </div>
        <div class="w-8/12">
          <div class="w-full flex justify-between space-x-5 mb-5">
            <div class="w-10/12">
              <p class="text-[#344054] font-primary text-sm font-semibold my-1 text-left">
                Name on card
              </p>
              <input
                type="text"
                name="name"
                placeholder="Name on card"
                value=""
                class="flex py-2 px-3.5 self-stretch rounded-lg border border-[#D0D5DD] border-solid shadow-sm text-[#475467] font-primary text-[14px] font-semibold w-full"
              />
            </div>
            <div class="w-2/12">
              <p class="text-[#344054] font-primary text-sm font-semibold my-1 text-left">
                Expiry
              </p>
              <input
                type="text"
                name="expiry-date"
                placeholder=""
                value=""
                class="flex py-2 px-3.5 self-stretch rounded-lg border border-[#D0D5DD] border-solid shadow-sm text-[#475467] font-primary text-[14px] font-semibold w-full"
              />
            </div>
          </div>
          <div class="w-full flex justify-between space-x-5 mb-5">
            <div class="w-10/12">
              <p class="text-[#344054] font-primary text-sm font-semibold my-1 text-left">
                Card number
              </p>
              <div class="relative w-full mx-auto">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <svg
                    width="22"
                    height="13"
                    viewBox="0 0 22 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="bg-[white] w-[31.6px] h-[21.67px] cursor-pointer rounded-md p-1 mr-[6.03px]"
                  >
                    <g id="Mastercard">
                      <path
                        id="Left"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.9563 11.1952C9.88732 12.0962 8.50066 12.6401 6.98543 12.6401C3.60426 12.6401 0.863281 9.93174 0.863281 6.5908C0.863281 3.24987 3.60426 0.541504 6.98543 0.541504C8.50066 0.541504 9.88732 1.08541 10.9563 1.98642C12.0254 1.08541 13.412 0.541504 14.9273 0.541504C18.3084 0.541504 21.0494 3.24987 21.0494 6.5908C21.0494 9.93174 18.3084 12.6401 14.9273 12.6401C13.412 12.6401 12.0254 12.0962 10.9563 11.1952Z"
                        fill="#ED0006"
                      />
                      <path
                        id="Right"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.957 11.1952C12.2735 10.0856 13.1083 8.43454 13.1083 6.5908C13.1083 4.74706 12.2735 3.09597 10.957 1.98642C12.0261 1.08541 13.4127 0.541504 14.9279 0.541504C18.3091 0.541504 21.0501 3.24987 21.0501 6.5908C21.0501 9.93174 18.3091 12.6401 14.9279 12.6401C13.4127 12.6401 12.0261 12.0962 10.957 11.1952Z"
                        fill="#F9A000"
                      />
                      <path
                        id="Middle"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.9559 11.1953C12.2724 10.0858 13.1072 8.4347 13.1072 6.59096C13.1072 4.74722 12.2724 3.09613 10.9559 1.98657C9.63946 3.09613 8.80469 4.74722 8.80469 6.59096C8.80469 8.4347 9.63946 10.0858 10.9559 11.1953Z"
                        fill="#FF5E00"
                      />
                    </g>
                  </svg>
                </div>
                <input
                  type="text"
                  id="default-search"
                  class="flex py-2 pl-11 self-stretch rounded-lg border border-[#D0D5DD] border-solid shadow-sm text-[#475467] font-primary text-[14px] font-semibold w-full"
                  placeholder="Card Number"
                  required
                />
              </div>
            </div>
            <div class="w-2/12">
              <p class="text-[#344054] font-primary text-sm font-semibold my-1 text-left">
                CVV
              </p>
              <input
                type="password"
                name="cvv-password"
                placeholder=""
                value=""
                class="flex py-2 px-3.5 self-stretch rounded-lg border border-[#D0D5DD] border-solid shadow-sm text-[#475467] font-primary text-[14px] font-semibold w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8 flex justify-between space-x-5">
        <div class="w-4/12 pt-1">
          <p class="font-primary text-[#344054] text-[14px] font-[500] leading-[20px]">
            Email address
          </p>
          <p class="font-primary text-[#344054] text-[12px] leading-[20px]">
            Invoices will be sent to this email addres.
          </p>
        </div>
        <div class="w-8/12">
          <div class="w-full mb-5">
            <div class="relative w-full mx-auto">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                >
                  <path
                    d="M1.66675 3.83337L8.47085 8.59624C9.02182 8.98193 9.29731 9.17477 9.59697 9.24946C9.86166 9.31544 10.1385 9.31544 10.4032 9.24946C10.7029 9.17477 10.9783 8.98193 11.5293 8.59624L18.3334 3.83337M5.66675 14.6667H14.3334C15.7335 14.6667 16.4336 14.6667 16.9684 14.3942C17.4388 14.1545 17.8212 13.7721 18.0609 13.3017C18.3334 12.7669 18.3334 12.0668 18.3334 10.6667V5.33337C18.3334 3.93324 18.3334 3.23318 18.0609 2.6984C17.8212 2.22799 17.4388 1.84554 16.9684 1.60586C16.4336 1.33337 15.7335 1.33337 14.3334 1.33337H5.66675C4.26662 1.33337 3.56655 1.33337 3.03177 1.60586C2.56137 1.84554 2.17892 2.22799 1.93923 2.6984C1.66675 3.23318 1.66675 3.93324 1.66675 5.33337V10.6667C1.66675 12.0668 1.66675 12.7669 1.93923 13.3017C2.17892 13.7721 2.56137 14.1545 3.03177 14.3942C3.56655 14.6667 4.26662 14.6667 5.66675 14.6667Z"
                    stroke="#667085"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="default-search"
                class="flex py-2 pl-11 self-stretch rounded-lg border border-[#D0D5DD] border-solid shadow-sm text-[#475467] font-primary text-[14px] font-semibold w-full"
                placeholder="Test@example.com"
                required
              />
            </div>
            <p
              class="cursor-pointer text-[14px] font-primary font-semibold text-[#475467] my-5"
            >
              + Add another
            </p>
          </div>
        </div>
      </div>
      <div class="mt-8 flex justify-between space-x-5">
        <div class="w-4/12 pt-1">
          <p class="font-primary text-[#344054] text-[14px] font-[500] leading-[20px]">
            Street address
          </p>
        </div>
        <div class="w-8/12">
          <div class="w-full mb-5">
            <input
              type="text"
              id="default-search"
              class="flex py-2 pl-11 self-stretch rounded-lg border border-[#D0D5DD] border-solid shadow-sm text-[#475467] font-primary text-[14px] font-semibold w-full"
              placeholder="100 Smith street"
              required
            />
          </div>
        </div>
      </div>
      <div class="mt-8 flex justify-between space-x-5">
        <div class="w-4/12 pt-1">
          <p class="font-primary text-[#344054] text-[14px] font-[500] leading-[20px]">
            City
          </p>
        </div>
        <div class="w-8/12">
          <div class="w-full mb-5">
            <input
              type="text"
              id="default-search"
              class="flex py-2 pl-11 self-stretch rounded-lg border border-[#D0D5DD] border-solid shadow-sm text-[#475467] font-primary text-[14px] font-semibold w-full"
              placeholder="Collingwood"
              required
            />
          </div>
        </div>
      </div>
      <div class="mt-8 flex justify-between space-x-5">
        <div class="w-4/12 pt-1">
          <p class="font-primary text-[#344054] text-[14px] font-[500] leading-[20px]">
            State / Province
          </p>
        </div>
        <div class="w-8/12 flex justify-between space-x-4">
          <div class="w-6/12 mb-5">
            <input
              type="text"
              id="default-search"
              class="flex py-2 pl-11 self-stretch rounded-lg border border-[#D0D5DD] border-solid shadow-sm text-[#475467] font-primary text-[14px] font-semibold w-full"
              placeholder="VIC"
              required
            />
          </div>
          <div class="w-6/12 mb-5">
            <input
              type="text"
              id="default-search"
              class="flex py-2 pl-11 self-stretch rounded-lg border border-[#D0D5DD] border-solid shadow-sm text-[#475467] font-primary text-[14px] font-semibold w-full"
              placeholder="3066"
              required
            />
          </div>
        </div>
      </div>
      <div class="mt-8 flex justify-between space-x-5">
        <div class="w-4/12 pt-1">
          <p class="font-primary text-[#344054] text-[14px] font-[500] leading-[20px]">
            Country
          </p>
        </div>
        <div class="w-8/12">
          <div class="w-full mb-5">
            <select
              class="bg-gray-50 w-full border text-[#475467] font-primary text-[14px] border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5"
            >
              <option>Australia</option>
              <option>United States</option>
              <option>Poland</option>
            </select>
          </div>
          <button
            class="py-2.5 px-8 bg-[#E24949] text-white rounded-lg text-[18px] w-full font-semibold"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const dataArray = ref([]);
const tmpArray = [
  {
    id: 0,
    name: "Product 1",
    description:
      "Lorem ipsum dolor sit amet consectetur. Proin risus dignissim erat congue lectus mauris accumsan tortor. Enim feugiat viverra auctor mi sit. Diam pretium fermentum ornare elementum. Amet imperdiet risus amet ridiculus feugiat. Lectus non amet eu nunc neque in vel. Aliquet consectetur",
    price: 78.99,
    quantity: 9,
  },
  {
    id: 1,
    name: "Product 1",
    description:
      "Lorem ipsum dolor sit amet consectetur. Proin risus dignissim erat congue lectus mauris accumsan tortor. Enim feugiat viverra auctor mi sit. Diam pretium fermentum ornare elementum. Amet imperdiet risus amet ridiculus feugiat. Lectus non amet eu nunc neque in vel. Aliquet consectetur",
    price: 78.99,
    quantity: 9,
  },
  {
    id: 2,
    name: "Product 1",
    description:
      "Lorem ipsum dolor sit amet consectetur. Proin risus dignissim erat congue lectus mauris accumsan tortor. Enim feugiat viverra auctor mi sit. Diam pretium fermentum ornare elementum. Amet imperdiet risus amet ridiculus feugiat. Lectus non amet eu nunc neque in vel. Aliquet consectetur",
    price: 78.99,
    quantity: 9,
  },
  {
    id: 3,
    name: "Product 1",
    description:
      "Lorem ipsum dolor sit amet consectetur. Proin risus dignissim erat congue lectus mauris accumsan tortor. Enim feugiat viverra auctor mi sit. Diam pretium fermentum ornare elementum. Amet imperdiet risus amet ridiculus feugiat. Lectus non amet eu nunc neque in vel. Aliquet consectetur",
    price: 78.99,
    quantity: 9,
  },
  {
    id: 4,
    name: "Product 1",
    description:
      "Lorem ipsum dolor sit amet consectetur. Proin risus dignissim erat congue lectus mauris accumsan tortor. Enim feugiat viverra auctor mi sit. Diam pretium fermentum ornare elementum. Amet imperdiet risus amet ridiculus feugiat. Lectus non amet eu nunc neque in vel. Aliquet consectetur",
    price: 78.99,
    quantity: 9,
  },
  {
    id: 5,
    name: "Product 1",
    description:
      "Lorem ipsum dolor sit amet consectetur. Proin risus dignissim erat congue lectus mauris accumsan tortor. Enim feugiat viverra auctor mi sit. Diam pretium fermentum ornare elementum. Amet imperdiet risus amet ridiculus feugiat. Lectus non amet eu nunc neque in vel. Aliquet consectetur",
    price: 78.99,
    quantity: 9,
  },
];
dataArray.value = tmpArray;

dataArray.value = tmpArray;
</script>
