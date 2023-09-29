<template>
  <div>
    <h1 class="text-[20px] font-bold text-[#344054] font-primary">User Profile</h1>
    <p class="py-[9px] text-[16px] font-primary">Verification / Account</p>
    <div class="flex justify-between pr-8">
      <p class="text-[18px]">Subusers</p>

      <button
        class="bg-[#E24949] text-white text-[14px] rounded-lg font-primary px-2 py-[12px]"
      >
        + Add New Users
      </button>
    </div>
    <div>
      <div class="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          class="px-4 py-2.5 font-primary text-sm font-medium text-gray-900 border border-gray-200 rounded-l-lg flex items-center"
          :class="tab === 1 ? 'bg-[#E24949] text-white' : 'text-primary'"
          @click="changeTab(1)"
        >
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mr-2"
          >
            <path
              d="M9.5 10C12.1127 10 14.25 7.86245 14.25 5.25C14.25 2.63755 12.1127 0.5 9.5 0.5C6.88725 0.5 4.75 2.63755 4.75 5.25C4.75 7.86245 6.88725 10 9.5 10ZM9.5 12.375C6.35322 12.375 0 13.9782 0 17.125V19.5H19V17.125C19 13.9782 12.6468 12.375 9.5 12.375Z"
              :fill="[tab === 1 ? 'white' : 'black']"
            />
          </svg>
          Account
        </button>
        <button
          type="button"
          class="px-4 py-2.5 font-primary text-sm font-medium text-gray-900 border border-gray-200 rounded-l-lg flex items-center"
          :class="tab === 2 ? 'bg-[#E24949] text-white' : 'text-primary'"
          @click="changeTab(2)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="22"
            viewBox="0 0 16 22"
            fill="none"
            class="mr-2"
          >
            <path
              d="M13.4406 8.92008V5.60391C13.4406 2.53895 10.9786 0.0518213 7.91361 0.00157613C4.72304 -0.0737915 2.13542 2.56408 2.13542 5.7044V7.262C2.13542 7.43785 2.28615 7.61371 2.48713 7.61371H4.17034C4.37133 7.61371 4.52206 7.46298 4.52206 7.262V5.7044C4.52206 3.94582 5.9038 2.43846 7.66238 2.38822C9.52145 2.31285 11.0539 3.79508 11.0539 5.62903V8.92008H2.23591C1.0049 8.92008 0 9.92499 0 11.156V19.2957C0 20.5267 1.0049 21.5316 2.23591 21.5316H13.3401C14.5711 21.5316 15.576 20.5267 15.576 19.2957V11.156C15.576 9.95011 14.6213 8.97033 13.4406 8.92008Z"
              :fill="[tab === 2 ? 'white' : 'black']"
            />
          </svg>

          Password
        </button>
        <button
          type="button"
          class="px-4 py-2.5 font-primary text-sm font-medium text-gray-900 border border-gray-200 rounded-l-lg flex items-center"
          :class="tab === 3 ? 'bg-[#E24949] text-white' : 'text-primary'"
          @click="changeTab(3)"
        >
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mr-2"
          >
            <g clip-path="url(#clip0_1_16817)">
              <path
                d="M15.9022 9.35889H15.2002V11.1723H15.9607C16.4286 11.1723 16.8381 10.7628 16.8381 10.2948C16.8381 9.76836 16.4286 9.35889 15.9022 9.35889ZM15.9022 9.35889H15.2002V11.1723H15.9607C16.4286 11.1723 16.8381 10.7628 16.8381 10.2948C16.8381 9.76836 16.4286 9.35889 15.9022 9.35889ZM3.79346 4.97168V18.4258H25.437V4.97168H3.79346ZM12.8604 15.267H11.6904V13.1026H10.0525V15.267H8.88263V10.1778C8.88263 9.06641 9.76007 8.18897 10.8715 8.18897C11.9829 8.18897 12.8604 9.06641 12.8604 10.1778V15.267ZM15.9022 12.3422H15.2002V15.267H14.0303V8.18897H15.9607C17.0721 8.18897 18.008 9.12491 18.008 10.2948C18.008 11.4063 17.0721 12.3422 15.9022 12.3422ZM20.3479 15.267H19.1779V8.24746H20.3479V15.267ZM15.9022 9.35889H15.2002V11.1723H15.9607C16.4286 11.1723 16.8381 10.7628 16.8381 10.2948C16.8381 9.76836 16.4286 9.35889 15.9022 9.35889ZM10.8715 9.35889C10.4035 9.35889 10.0525 9.70987 10.0525 10.1778V11.9327H11.6904V10.1778C11.6904 9.70987 11.281 9.35889 10.8715 9.35889ZM27.3089 23.1055H1.92158L0.576172 19.6542H28.6543L27.3089 23.1055Z"
                :fill="[tab === 3 ? 'white' : 'black']"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_16817">
                <rect
                  width="28.0782"
                  height="28.0782"
                  fill="white"
                  transform="translate(0.576172)"
                />
              </clipPath>
            </defs>
          </svg>

          API
        </button>
      </div>
    </div>
    <div v-show="tab === 1">
      <div class="w-full flex pt-14 pb-2 border-y border-gray-200">
        <div class="w-3/12 mr-8">
          <p class="font-primary text-[14px] font-medium text-[#344054]">Personal info</p>
          <p class="font-primary text-[14px] text-[#344054]">
            Update your photo and personal details
          </p>
        </div>
        <div class="w-9/12 pr-12">
          <div class="border rounded-lg border-[#eaecf0] p-6">
            <div class="flex">
              <div class="flex flex-col w-full">
                <p class="font-primary text-[14px] pb-2 font-medium text-[#344054]">
                  First name
                </p>
                <input
                  type="text"
                  name="Password"
                  placeholder="Enter your password"
                  value="asdfasdf"
                  class="flex py-2.5 px-3.5 self-stretch rounded-lg border border-gray-300 font-primary text-[16px] w-full"
                />
              </div>
              <div class="flex flex-col w-full pl-6">
                <p class="font-primary text-[14px] pb-2 font-medium text-[#344054]">
                  Last name
                </p>
                <input
                  type="text"
                  name="Password"
                  placeholder="Enter your password"
                  value="asdfasdf"
                  class="flex py-2.5 px-3.5 self-stretch rounded-lg border border-gray-300 font-primary text-[16px] w-full"
                />
              </div>
            </div>
            <div class="flex py-6">
              <div class="flex flex-col w-full">
                <p class="font-primary text-[14px] pb-2 font-medium text-[#344054]">
                  Email address
                </p>
                <div class="relative w-full">
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="mail-01">
                        <path
                          id="Icon"
                          d="M1.6665 5.8335L8.4706 10.5964C9.02158 10.982 9.29707 11.1749 9.59672 11.2496C9.86142 11.3156 10.1383 11.3156 10.403 11.2496C10.7026 11.1749 10.9781 10.982 11.5291 10.5964L18.3332 5.8335M5.6665 16.6668H14.3332C15.7333 16.6668 16.4334 16.6668 16.9681 16.3943C17.4386 16.1547 17.821 15.7722 18.0607 15.3018C18.3332 14.767 18.3332 14.067 18.3332 12.6668V7.3335C18.3332 5.93336 18.3332 5.2333 18.0607 4.69852C17.821 4.22811 17.4386 3.84566 16.9681 3.60598C16.4334 3.3335 15.7333 3.3335 14.3332 3.3335H5.6665C4.26637 3.3335 3.56631 3.3335 3.03153 3.60598C2.56112 3.84566 2.17867 4.22811 1.93899 4.69852C1.6665 5.2333 1.6665 5.93336 1.6665 7.3335V12.6668C1.6665 14.067 1.6665 14.767 1.93899 15.3018C2.17867 15.7722 2.56112 16.1547 3.03153 16.3943C3.56631 16.6668 4.26637 16.6668 5.6665 16.6668Z"
                          stroke="#667085"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    class="w-full p-4 font-primary pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-[16px]"
                    placeholder="olivia@untitledui.com"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="flex">
              <img
                src="@/assets/images/users/female-64.png"
                alt="female"
                class="pr-5 h-16"
              />
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
          </div>
        </div>
      </div>
      <div class="w-full flex py-2 border-y border-gray-200">
        <div class="w-3/12 mr-8">
          <p class="font-primary text-[14px] font-medium text-[#344054]">Profile</p>
          <p class="font-primary text-[14px] text-[#344054]">
            Update your portfolio and bio
          </p>
        </div>
        <div class="w-9/12 pr-12">
          <div class="border rounded-lg border-[#eaecf0] p-6">
            <p class="font-primary text-[14px] pb-2 font-medium text-[#344054]">
              Phone number
            </p>
            <div class="relative w-full">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Phone">
                    <path
                      id="Vector"
                      d="M17.0673 12.9056L15.6923 11.5306C15.2824 11.124 14.7292 10.8948 14.1518 10.8923C13.5745 10.8899 13.0193 11.1144 12.606 11.5175C12.3855 11.7393 12.0945 11.8773 11.7832 11.9077C11.4719 11.9382 11.1597 11.8592 10.9004 11.6844C9.87676 11.0012 8.99739 10.1235 8.31226 9.10123C8.14049 8.83899 8.06436 8.52555 8.09669 8.21373C8.12902 7.90192 8.26784 7.61077 8.48976 7.38935C8.8892 6.97564 9.11082 6.42202 9.1072 5.84696C9.10358 5.27191 8.875 4.72112 8.47039 4.31248L7.09539 2.93748C6.68373 2.52723 6.12625 2.29688 5.54508 2.29688C4.9639 2.29688 4.40642 2.52723 3.99476 2.93748L3.59914 3.33373C1.53664 5.39623 1.69101 9.73248 5.98226 14.0212C8.56976 16.6094 11.1741 17.6931 13.286 17.6931C13.9077 17.7138 14.5272 17.6106 15.1086 17.3894C15.69 17.1683 16.2215 16.8336 16.6723 16.405L17.0685 16.0087C17.4795 15.5969 17.7102 15.0387 17.71 14.4569C17.7098 13.8751 17.4786 13.3171 17.0673 12.9056ZM16.1835 15.125L15.7873 15.5212C14.1623 17.1462 10.5754 16.8494 6.86476 13.1381C3.15414 9.42685 2.85664 5.83748 4.48164 4.21248L4.87476 3.81685C5.05177 3.64049 5.29146 3.54146 5.54133 3.54146C5.7912 3.54146 6.03088 3.64049 6.20789 3.81685L7.58289 5.19185C7.75668 5.36651 7.85532 5.60218 7.85778 5.84856C7.86023 6.09493 7.76629 6.33252 7.59601 6.5106C7.17369 6.93562 6.91025 7.49286 6.84983 8.08898C6.78941 8.68509 6.93568 9.28386 7.26414 9.78498C8.04261 10.9499 9.04367 11.9495 10.2098 12.7262C10.7094 13.0547 11.3066 13.2019 11.9016 13.1431C12.4967 13.0842 13.0535 12.8231 13.4791 12.4031C13.6569 12.2308 13.8951 12.1351 14.1427 12.1367C14.3902 12.1382 14.6273 12.2368 14.8029 12.4112L16.1779 13.7862C16.2665 13.8736 16.337 13.9776 16.3853 14.0922C16.4335 14.2069 16.4586 14.33 16.4592 14.4544C16.4597 14.5789 16.4356 14.7022 16.3883 14.8172C16.341 14.9323 16.2714 15.0369 16.1835 15.125Z"
                      fill="black"
                    />
                  </g>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="w-full p-4 font-primary pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-[16px]"
                placeholder="+123 123456"
                required
              />
            </div>
            <div class="flex py-6">
              <div class="flex flex-col w-full">
                <p class="font-primary text-[14px] pb-2 font-medium text-[#344054]">
                  Address
                </p>
                <div class="relative w-full">
                  <input
                    type="search"
                    id="default-search"
                    class="w-full p-4 font-primary pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-[16px] mb-1"
                    placeholder=""
                    required
                  />
                  <input
                    type="search"
                    id="default-search"
                    class="w-full p-4 font-primary pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-[16px] mb-1"
                    placeholder=""
                    required
                  />
                  <input
                    type="search"
                    id="default-search"
                    class="w-full p-4 font-primary pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-[16px] mb-1"
                    placeholder=""
                    required
                  />
                </div>
              </div>
            </div>
            <div class="flex pt-6">
              <div class="flex flex-col w-full">
                <p class="font-primary text-[14px] pb-2 font-medium text-[#344054]">
                  Country
                </p>
                <select
                  id="countries"
                  class="bg-gray-50 border text-[#475467] font-primary text-[14px] border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  v-on:change="changeCode"
                >
                  <option selected>Choose a Country</option>
                  <option
                    v-for="country in countryCode"
                    :key="country.name"
                    :value="country.code"
                  >
                    {{ country.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="flex pt-6">
              <div class="flex flex-col w-full">
                <p class="font-primary text-[14px] pb-2 font-medium text-[#344054]">
                  State/Region
                </p>
                <select
                  id="countries"
                  class="bg-gray-50 border text-[#475467] font-primary text-[14px] border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  v-on:change="changeCode"
                >
                  <option selected>Choose a State/Region</option>
                  <option
                    v-for="country in countryCode"
                    :key="country.name"
                    :value="country.code"
                  >
                    {{ country.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="flex pt-6">
              <div class="flex flex-col w-full">
                <p class="font-primary text-[14px] pb-2 font-medium text-[#344054]">
                  City
                </p>
                <select
                  id="countries"
                  class="bg-gray-50 border text-[#475467] font-primary text-[14px] border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  v-on:change="changeCode"
                >
                  <option selected>Choose a country</option>
                  <option
                    v-for="country in countryCode"
                    :key="country.name"
                    :value="country.code"
                  >
                    {{ country.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="flex pt-6">
              <div class="flex flex-col w-full">
                <p class="font-primary text-[14px] pb-2 font-medium text-[#344054]">
                  Zip Code
                </p>
                <select
                  id="countries"
                  class="bg-gray-50 border text-[#475467] font-primary text-[14px] border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  v-on:change="changeCode"
                >
                  <option selected>Choose a State/Region</option>
                  <option
                    v-for="country in countryCode"
                    :key="country.name"
                    :value="country.code"
                  >
                    {{ country.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="flex pt-6">
              <div class="flex flex-col w-full">
                <p class="font-primary text-[14px] pb-2 font-medium text-[#344054]">
                  Timezone
                </p>
                <select
                  id="countries"
                  class="bg-gray-50 border text-[#475467] font-primary text-[14px] border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  v-on:change="changeCode"
                >
                  <option selected>Choose a Timezone</option>
                  <option
                    v-for="country in countryCode"
                    :key="country.name"
                    :value="country.code"
                  >
                    {{ country.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="flex justify-between">
              <div></div>
              <div class="p-6">
                <button
                  class="py-2.5 px-8 mx-6 bg-white text-[#344054] rounded-lg border border-[#D0D5DD] text-[14px] font-semibold"
                >
                  Cancel
                </button>

                <button
                  class="py-2.5 px-8 bg-[#E24949] text-white rounded-lg text-[14px] font-semibold"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="tab === 2">
      <div class="w-full flex pt-14 pb-2 border-y border-gray-200">
        <div class="w-3/12 mr-8 pt-6">
          <p class="font-primary text-lg text-[#344054] font-bold">Password</p>
          <p class="font-primary text-[14px] text-[#344054]">
            Update your password more strongly.
          </p>
        </div>
        <div class="w-9/12 pr-12">
          <div class="border rounded-lg border-[#eaecf0] p-6">
            <div class="flex">
              <div class="flex flex-col w-full">
                <p class="font-primary text-lg text-[#344054] font-bold">Password</p>
                <p class="font-primary text-[14px] text-[#344054] mb-6">
                  Please enter your current password to change your password.
                </p>
                <div class="flex pt-6">
                  <div class="flex flex-col w-full">
                    <p class="font-primary text-[14px] pb-2 font-medium text-[#344054]">
                      Current password
                    </p>
                    <div class="relative w-full">
                      <input
                        type="password"
                        id="default-search"
                        class="w-full p-2 font-primary pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-[16px] mb-1"
                        placeholder=""
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="flex pt-6">
                  <div class="flex flex-col w-full">
                    <p class="font-primary text-[14px] pb-2 font-medium text-[#344054]">
                      Confirm password
                    </p>
                    <div class="relative w-full">
                      <input
                        type="password"
                        id="default-search"
                        class="w-full p-2 font-primary pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-[16px] mb-1"
                        placeholder=""
                        required
                      />
                      <p class="font-primary text-[14px] text-[#344054]">
                        Your new password must be more than 8 characters.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex pt-6">
                  <div class="flex flex-col w-full">
                    <p class="font-primary text-[14px] pb-2 font-medium text-[#344054]">
                      New password
                    </p>
                    <div class="relative w-full">
                      <input
                        type="password"
                        id="default-search"
                        class="w-full p-2 font-primary pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-[16px] mb-1"
                        placeholder=""
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="flex justify-between">
                  <div></div>
                  <div class="p-6">
                    <button
                      class="py-2.5 px-8 mx-6 bg-white text-[#344054] rounded-lg border border-[#D0D5DD] text-[14px] font-semibold"
                    >
                      Cancel
                    </button>

                    <button
                      class="py-2.5 px-8 bg-[#E24949] text-white rounded-lg text-[14px] font-semibold"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="tab === 3">
      <div class="w-full flex pt-14 pb-2 border-y border-gray-200 mb-6">
        <div class="w-3/12 mr-8">
          <p class="font-primary text-lg text-[#344054] font-bold mb-2">API Keys</p>
          <p class="font-primary text-[14px] text-[#344054] mb-2">
            pYohQgtK7ATgc8Af5vkvJyxZA
          </p>
          <p
            class="font-primary text-[17px] font-semibold text-[#E24949] cursor-pointer mb-12"
          >
            Edit
          </p>

          <p class="font-primary text-lg text-[#344054] font-bold mb-2">
            IP Restrictions
          </p>
          <p class="font-primary text-[14px] text-[#344054] mb-2">Restriction type:</p>
        </div>
        <div class="w-9/12 pr-12 flex justify-end">
          <div></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            class="cursor-pointer"
          >
            <g clip-path="url(#clip0_1_17191)">
              <path
                d="M24 1.5H6C4.3425 1.5 3 2.8425 3 4.5V25.5H6V4.5H24V1.5ZM28.5 7.5H12C10.3425 7.5 9 8.8425 9 10.5V31.5C9 33.1575 10.3425 34.5 12 34.5H28.5C30.1575 34.5 31.5 33.1575 31.5 31.5V10.5C31.5 8.8425 30.1575 7.5 28.5 7.5ZM28.5 31.5H12V10.5H28.5V31.5Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_17191">
                <rect width="36" height="36" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div class="w-full flex justify-center">
        <button
          class="py-2.5 px-8 mx-6 bg-white text-[#344054] rounded-lg border border-[#D0D5DD] text-[14px] font-semibold"
        >
          Cancel
        </button>

        <button
          class="py-2.5 px-8 bg-[#E24949] text-white rounded-lg text-[14px] font-semibold"
        >
          Save changes
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const countryCode = [
  {
    name: "Afghanistan",
    dial_code: "+93",
    code: "AF",
  },
  {
    name: "Aland Islands",
    dial_code: "+358",
    code: "AX",
  },
  {
    name: "Albania",
    dial_code: "+355",
    code: "AL",
  },
  {
    name: "Algeria",
    dial_code: "+213",
    code: "DZ",
  },
  {
    name: "AmericanSamoa",
    dial_code: "+1684",
    code: "AS",
  },
  {
    name: "Andorra",
    dial_code: "+376",
    code: "AD",
  },
  {
    name: "Angola",
    dial_code: "+244",
    code: "AO",
  },
  {
    name: "Anguilla",
    dial_code: "+1264",
    code: "AI",
  },
  {
    name: "Antarctica",
    dial_code: "+672",
    code: "AQ",
  },
  {
    name: "Antigua and Barbuda",
    dial_code: "+1268",
    code: "AG",
  },
  {
    name: "Argentina",
    dial_code: "+54",
    code: "AR",
  },
  {
    name: "Armenia",
    dial_code: "+374",
    code: "AM",
  },
  {
    name: "Aruba",
    dial_code: "+297",
    code: "AW",
  },
  {
    name: "Australia",
    dial_code: "+61",
    code: "AU",
  },
  {
    name: "Austria",
    dial_code: "+43",
    code: "AT",
  },
  {
    name: "Azerbaijan",
    dial_code: "+994",
    code: "AZ",
  },
  {
    name: "Bahamas",
    dial_code: "+1242",
    code: "BS",
  },
  {
    name: "Bahrain",
    dial_code: "+973",
    code: "BH",
  },
  {
    name: "Bangladesh",
    dial_code: "+880",
    code: "BD",
  },
  {
    name: "Barbados",
    dial_code: "+1246",
    code: "BB",
  },
  {
    name: "Belarus",
    dial_code: "+375",
    code: "BY",
  },
  {
    name: "Belgium",
    dial_code: "+32",
    code: "BE",
  },
  {
    name: "Belize",
    dial_code: "+501",
    code: "BZ",
  },
  {
    name: "Benin",
    dial_code: "+229",
    code: "BJ",
  },
  {
    name: "Bermuda",
    dial_code: "+1441",
    code: "BM",
  },
  {
    name: "Bhutan",
    dial_code: "+975",
    code: "BT",
  },
  {
    name: "Bolivia, Plurinational State of",
    dial_code: "+591",
    code: "BO",
  },
  {
    name: "Bosnia and Herzegovina",
    dial_code: "+387",
    code: "BA",
  },
  {
    name: "Botswana",
    dial_code: "+267",
    code: "BW",
  },
  {
    name: "Brazil",
    dial_code: "+55",
    code: "BR",
  },
  {
    name: "British Indian Ocean Territory",
    dial_code: "+246",
    code: "IO",
  },
  {
    name: "Brunei Darussalam",
    dial_code: "+673",
    code: "BN",
  },
  {
    name: "Bulgaria",
    dial_code: "+359",
    code: "BG",
  },
  {
    name: "Burkina Faso",
    dial_code: "+226",
    code: "BF",
  },
  {
    name: "Burundi",
    dial_code: "+257",
    code: "BI",
  },
  {
    name: "Cambodia",
    dial_code: "+855",
    code: "KH",
  },
  {
    name: "Cameroon",
    dial_code: "+237",
    code: "CM",
  },
  {
    name: "Canada",
    dial_code: "+1",
    code: "CA",
  },
  {
    name: "Cape Verde",
    dial_code: "+238",
    code: "CV",
  },
  {
    name: "Cayman Islands",
    dial_code: "+ 345",
    code: "KY",
  },
  {
    name: "Central African Republic",
    dial_code: "+236",
    code: "CF",
  },
  {
    name: "Chad",
    dial_code: "+235",
    code: "TD",
  },
  {
    name: "Chile",
    dial_code: "+56",
    code: "CL",
  },
  {
    name: "China",
    dial_code: "+86",
    code: "CN",
  },
  {
    name: "Christmas Island",
    dial_code: "+61",
    code: "CX",
  },
  {
    name: "Cocos (Keeling) Islands",
    dial_code: "+61",
    code: "CC",
  },
  {
    name: "Colombia",
    dial_code: "+57",
    code: "CO",
  },
  {
    name: "Comoros",
    dial_code: "+269",
    code: "KM",
  },
  {
    name: "Congo",
    dial_code: "+242",
    code: "CG",
  },
  {
    name: "Congo, The Democratic Republic of the Congo",
    dial_code: "+243",
    code: "CD",
  },
  {
    name: "Cook Islands",
    dial_code: "+682",
    code: "CK",
  },
  {
    name: "Costa Rica",
    dial_code: "+506",
    code: "CR",
  },
  {
    name: "Cote d'Ivoire",
    dial_code: "+225",
    code: "CI",
  },
  {
    name: "Croatia",
    dial_code: "+385",
    code: "HR",
  },
  {
    name: "Cuba",
    dial_code: "+53",
    code: "CU",
  },
  {
    name: "Cyprus",
    dial_code: "+357",
    code: "CY",
  },
  {
    name: "Czech Republic",
    dial_code: "+420",
    code: "CZ",
  },
  {
    name: "Denmark",
    dial_code: "+45",
    code: "DK",
  },
  {
    name: "Djibouti",
    dial_code: "+253",
    code: "DJ",
  },
  {
    name: "Dominica",
    dial_code: "+1767",
    code: "DM",
  },
  {
    name: "Dominican Republic",
    dial_code: "+1849",
    code: "DO",
  },
  {
    name: "Ecuador",
    dial_code: "+593",
    code: "EC",
  },
  {
    name: "Egypt",
    dial_code: "+20",
    code: "EG",
  },
  {
    name: "El Salvador",
    dial_code: "+503",
    code: "SV",
  },
  {
    name: "Equatorial Guinea",
    dial_code: "+240",
    code: "GQ",
  },
  {
    name: "Eritrea",
    dial_code: "+291",
    code: "ER",
  },
  {
    name: "Estonia",
    dial_code: "+372",
    code: "EE",
  },
  {
    name: "Ethiopia",
    dial_code: "+251",
    code: "ET",
  },
  {
    name: "Falkland Islands (Malvinas)",
    dial_code: "+500",
    code: "FK",
  },
  {
    name: "Faroe Islands",
    dial_code: "+298",
    code: "FO",
  },
  {
    name: "Fiji",
    dial_code: "+679",
    code: "FJ",
  },
  {
    name: "Finland",
    dial_code: "+358",
    code: "FI",
  },
  {
    name: "France",
    dial_code: "+33",
    code: "FR",
  },
  {
    name: "French Guiana",
    dial_code: "+594",
    code: "GF",
  },
  {
    name: "French Polynesia",
    dial_code: "+689",
    code: "PF",
  },
  {
    name: "Gabon",
    dial_code: "+241",
    code: "GA",
  },
  {
    name: "Gambia",
    dial_code: "+220",
    code: "GM",
  },
  {
    name: "Georgia",
    dial_code: "+995",
    code: "GE",
  },
  {
    name: "Germany",
    dial_code: "+49",
    code: "DE",
  },
  {
    name: "Ghana",
    dial_code: "+233",
    code: "GH",
  },
  {
    name: "Gibraltar",
    dial_code: "+350",
    code: "GI",
  },
  {
    name: "Greece",
    dial_code: "+30",
    code: "GR",
  },
  {
    name: "Greenland",
    dial_code: "+299",
    code: "GL",
  },
  {
    name: "Grenada",
    dial_code: "+1473",
    code: "GD",
  },
  {
    name: "Guadeloupe",
    dial_code: "+590",
    code: "GP",
  },
  {
    name: "Guam",
    dial_code: "+1671",
    code: "GU",
  },
  {
    name: "Guatemala",
    dial_code: "+502",
    code: "GT",
  },
  {
    name: "Guernsey",
    dial_code: "+44",
    code: "GG",
  },
  {
    name: "Guinea",
    dial_code: "+224",
    code: "GN",
  },
  {
    name: "Guinea-Bissau",
    dial_code: "+245",
    code: "GW",
  },
  {
    name: "Guyana",
    dial_code: "+595",
    code: "GY",
  },
  {
    name: "Haiti",
    dial_code: "+509",
    code: "HT",
  },
  {
    name: "Holy See (Vatican City State)",
    dial_code: "+379",
    code: "VA",
  },
  {
    name: "Honduras",
    dial_code: "+504",
    code: "HN",
  },
  {
    name: "Hong Kong",
    dial_code: "+852",
    code: "HK",
  },
  {
    name: "Hungary",
    dial_code: "+36",
    code: "HU",
  },
  {
    name: "Iceland",
    dial_code: "+354",
    code: "IS",
  },
  {
    name: "India",
    dial_code: "+91",
    code: "IN",
  },
  {
    name: "Indonesia",
    dial_code: "+62",
    code: "ID",
  },
  {
    name: "Iran, Islamic Republic of Persian Gulf",
    dial_code: "+98",
    code: "IR",
  },
  {
    name: "Iraq",
    dial_code: "+964",
    code: "IQ",
  },
  {
    name: "Ireland",
    dial_code: "+353",
    code: "IE",
  },
  {
    name: "Isle of Man",
    dial_code: "+44",
    code: "IM",
  },
  {
    name: "Israel",
    dial_code: "+972",
    code: "IL",
  },
  {
    name: "Italy",
    dial_code: "+39",
    code: "IT",
  },
  {
    name: "Jamaica",
    dial_code: "+1876",
    code: "JM",
  },
  {
    name: "Japan",
    dial_code: "+81",
    code: "JP",
  },
  {
    name: "Jersey",
    dial_code: "+44",
    code: "JE",
  },
  {
    name: "Jordan",
    dial_code: "+962",
    code: "JO",
  },
  {
    name: "Kazakhstan",
    dial_code: "+77",
    code: "KZ",
  },
  {
    name: "Kenya",
    dial_code: "+254",
    code: "KE",
  },
  {
    name: "Kiribati",
    dial_code: "+686",
    code: "KI",
  },
  {
    name: "Korea, Democratic People's Republic of Korea",
    dial_code: "+850",
    code: "KP",
  },
  {
    name: "Korea, Republic of South Korea",
    dial_code: "+82",
    code: "KR",
  },
  {
    name: "Kuwait",
    dial_code: "+965",
    code: "KW",
  },
  {
    name: "Kyrgyzstan",
    dial_code: "+996",
    code: "KG",
  },
  {
    name: "Laos",
    dial_code: "+856",
    code: "LA",
  },
  {
    name: "Latvia",
    dial_code: "+371",
    code: "LV",
  },
  {
    name: "Lebanon",
    dial_code: "+961",
    code: "LB",
  },
  {
    name: "Lesotho",
    dial_code: "+266",
    code: "LS",
  },
  {
    name: "Liberia",
    dial_code: "+231",
    code: "LR",
  },
  {
    name: "Libyan Arab Jamahiriya",
    dial_code: "+218",
    code: "LY",
  },
  {
    name: "Liechtenstein",
    dial_code: "+423",
    code: "LI",
  },
  {
    name: "Lithuania",
    dial_code: "+370",
    code: "LT",
  },
  {
    name: "Luxembourg",
    dial_code: "+352",
    code: "LU",
  },
  {
    name: "Macao",
    dial_code: "+853",
    code: "MO",
  },
  {
    name: "Macedonia",
    dial_code: "+389",
    code: "MK",
  },
  {
    name: "Madagascar",
    dial_code: "+261",
    code: "MG",
  },
  {
    name: "Malawi",
    dial_code: "+265",
    code: "MW",
  },
  {
    name: "Malaysia",
    dial_code: "+60",
    code: "MY",
  },
  {
    name: "Maldives",
    dial_code: "+960",
    code: "MV",
  },
  {
    name: "Mali",
    dial_code: "+223",
    code: "ML",
  },
  {
    name: "Malta",
    dial_code: "+356",
    code: "MT",
  },
  {
    name: "Marshall Islands",
    dial_code: "+692",
    code: "MH",
  },
  {
    name: "Martinique",
    dial_code: "+596",
    code: "MQ",
  },
  {
    name: "Mauritania",
    dial_code: "+222",
    code: "MR",
  },
  {
    name: "Mauritius",
    dial_code: "+230",
    code: "MU",
  },
  {
    name: "Mayotte",
    dial_code: "+262",
    code: "YT",
  },
  {
    name: "Mexico",
    dial_code: "+52",
    code: "MX",
  },
  {
    name: "Micronesia, Federated States of Micronesia",
    dial_code: "+691",
    code: "FM",
  },
  {
    name: "Moldova",
    dial_code: "+373",
    code: "MD",
  },
  {
    name: "Monaco",
    dial_code: "+377",
    code: "MC",
  },
  {
    name: "Mongolia",
    dial_code: "+976",
    code: "MN",
  },
  {
    name: "Montenegro",
    dial_code: "+382",
    code: "ME",
  },
  {
    name: "Montserrat",
    dial_code: "+1664",
    code: "MS",
  },
  {
    name: "Morocco",
    dial_code: "+212",
    code: "MA",
  },
  {
    name: "Mozambique",
    dial_code: "+258",
    code: "MZ",
  },
  {
    name: "Myanmar",
    dial_code: "+95",
    code: "MM",
  },
  {
    name: "Namibia",
    dial_code: "+264",
    code: "NA",
  },
  {
    name: "Nauru",
    dial_code: "+674",
    code: "NR",
  },
  {
    name: "Nepal",
    dial_code: "+977",
    code: "NP",
  },
  {
    name: "Netherlands",
    dial_code: "+31",
    code: "NL",
  },
  {
    name: "Netherlands Antilles",
    dial_code: "+599",
    code: "AN",
  },
  {
    name: "New Caledonia",
    dial_code: "+687",
    code: "NC",
  },
  {
    name: "New Zealand",
    dial_code: "+64",
    code: "NZ",
  },
  {
    name: "Nicaragua",
    dial_code: "+505",
    code: "NI",
  },
  {
    name: "Niger",
    dial_code: "+227",
    code: "NE",
  },
  {
    name: "Nigeria",
    dial_code: "+234",
    code: "NG",
  },
  {
    name: "Niue",
    dial_code: "+683",
    code: "NU",
  },
  {
    name: "Norfolk Island",
    dial_code: "+672",
    code: "NF",
  },
  {
    name: "Northern Mariana Islands",
    dial_code: "+1670",
    code: "MP",
  },
  {
    name: "Norway",
    dial_code: "+47",
    code: "NO",
  },
  {
    name: "Oman",
    dial_code: "+968",
    code: "OM",
  },
  {
    name: "Pakistan",
    dial_code: "+92",
    code: "PK",
  },
  {
    name: "Palau",
    dial_code: "+680",
    code: "PW",
  },
  {
    name: "Palestinian Territory, Occupied",
    dial_code: "+970",
    code: "PS",
  },
  {
    name: "Panama",
    dial_code: "+507",
    code: "PA",
  },
  {
    name: "Papua New Guinea",
    dial_code: "+675",
    code: "PG",
  },
  {
    name: "Paraguay",
    dial_code: "+595",
    code: "PY",
  },
  {
    name: "Peru",
    dial_code: "+51",
    code: "PE",
  },
  {
    name: "Philippines",
    dial_code: "+63",
    code: "PH",
  },
  {
    name: "Pitcairn",
    dial_code: "+872",
    code: "PN",
  },
  {
    name: "Poland",
    dial_code: "+48",
    code: "PL",
  },
  {
    name: "Portugal",
    dial_code: "+351",
    code: "PT",
  },
  {
    name: "Puerto Rico",
    dial_code: "+1939",
    code: "PR",
  },
  {
    name: "Qatar",
    dial_code: "+974",
    code: "QA",
  },
  {
    name: "Romania",
    dial_code: "+40",
    code: "RO",
  },
  {
    name: "Russia",
    dial_code: "+7",
    code: "RU",
  },
  {
    name: "Rwanda",
    dial_code: "+250",
    code: "RW",
  },
  {
    name: "Reunion",
    dial_code: "+262",
    code: "RE",
  },
  {
    name: "Saint Barthelemy",
    dial_code: "+590",
    code: "BL",
  },
  {
    name: "Saint Helena, Ascension and Tristan Da Cunha",
    dial_code: "+290",
    code: "SH",
  },
  {
    name: "Saint Kitts and Nevis",
    dial_code: "+1869",
    code: "KN",
  },
  {
    name: "Saint Lucia",
    dial_code: "+1758",
    code: "LC",
  },
  {
    name: "Saint Martin",
    dial_code: "+590",
    code: "MF",
  },
  {
    name: "Saint Pierre and Miquelon",
    dial_code: "+508",
    code: "PM",
  },
  {
    name: "Saint Vincent and the Grenadines",
    dial_code: "+1784",
    code: "VC",
  },
  {
    name: "Samoa",
    dial_code: "+685",
    code: "WS",
  },
  {
    name: "San Marino",
    dial_code: "+378",
    code: "SM",
  },
  {
    name: "Sao Tome and Principe",
    dial_code: "+239",
    code: "ST",
  },
  {
    name: "Saudi Arabia",
    dial_code: "+966",
    code: "SA",
  },
  {
    name: "Senegal",
    dial_code: "+221",
    code: "SN",
  },
  {
    name: "Serbia",
    dial_code: "+381",
    code: "RS",
  },
  {
    name: "Seychelles",
    dial_code: "+248",
    code: "SC",
  },
  {
    name: "Sierra Leone",
    dial_code: "+232",
    code: "SL",
  },
  {
    name: "Singapore",
    dial_code: "+65",
    code: "SG",
  },
  {
    name: "Slovakia",
    dial_code: "+421",
    code: "SK",
  },
  {
    name: "Slovenia",
    dial_code: "+386",
    code: "SI",
  },
  {
    name: "Solomon Islands",
    dial_code: "+677",
    code: "SB",
  },
  {
    name: "Somalia",
    dial_code: "+252",
    code: "SO",
  },
  {
    name: "South Africa",
    dial_code: "+27",
    code: "ZA",
  },
  {
    name: "South Sudan",
    dial_code: "+211",
    code: "SS",
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    dial_code: "+500",
    code: "GS",
  },
  {
    name: "Spain",
    dial_code: "+34",
    code: "ES",
  },
  {
    name: "Sri Lanka",
    dial_code: "+94",
    code: "LK",
  },
  {
    name: "Sudan",
    dial_code: "+249",
    code: "SD",
  },
  {
    name: "Suriname",
    dial_code: "+597",
    code: "SR",
  },
  {
    name: "Svalbard and Jan Mayen",
    dial_code: "+47",
    code: "SJ",
  },
  {
    name: "Swaziland",
    dial_code: "+268",
    code: "SZ",
  },
  {
    name: "Sweden",
    dial_code: "+46",
    code: "SE",
  },
  {
    name: "Switzerland",
    dial_code: "+41",
    code: "CH",
  },
  {
    name: "Syrian Arab Republic",
    dial_code: "+963",
    code: "SY",
  },
  {
    name: "Taiwan",
    dial_code: "+886",
    code: "TW",
  },
  {
    name: "Tajikistan",
    dial_code: "+992",
    code: "TJ",
  },
  {
    name: "Tanzania, United Republic of Tanzania",
    dial_code: "+255",
    code: "TZ",
  },
  {
    name: "Thailand",
    dial_code: "+66",
    code: "TH",
  },
  {
    name: "Timor-Leste",
    dial_code: "+670",
    code: "TL",
  },
  {
    name: "Togo",
    dial_code: "+228",
    code: "TG",
  },
  {
    name: "Tokelau",
    dial_code: "+690",
    code: "TK",
  },
  {
    name: "Tonga",
    dial_code: "+676",
    code: "TO",
  },
  {
    name: "Trinidad and Tobago",
    dial_code: "+1868",
    code: "TT",
  },
  {
    name: "Tunisia",
    dial_code: "+216",
    code: "TN",
  },
  {
    name: "Turkey",
    dial_code: "+90",
    code: "TR",
  },
  {
    name: "Turkmenistan",
    dial_code: "+993",
    code: "TM",
  },
  {
    name: "Turks and Caicos Islands",
    dial_code: "+1649",
    code: "TC",
  },
  {
    name: "Tuvalu",
    dial_code: "+688",
    code: "TV",
  },
  {
    name: "Uganda",
    dial_code: "+256",
    code: "UG",
  },
  {
    name: "Ukraine",
    dial_code: "+380",
    code: "UA",
  },
  {
    name: "United Arab Emirates",
    dial_code: "+971",
    code: "AE",
  },
  {
    name: "United Kingdom",
    dial_code: "+44",
    code: "GB",
  },
  {
    name: "United States",
    dial_code: "+1",
    code: "US",
  },
  {
    name: "Uruguay",
    dial_code: "+598",
    code: "UY",
  },
  {
    name: "Uzbekistan",
    dial_code: "+998",
    code: "UZ",
  },
  {
    name: "Vanuatu",
    dial_code: "+678",
    code: "VU",
  },
  {
    name: "Venezuela, Bolivarian Republic of Venezuela",
    dial_code: "+58",
    code: "VE",
  },
  {
    name: "Vietnam",
    dial_code: "+84",
    code: "VN",
  },
  {
    name: "Virgin Islands, British",
    dial_code: "+1284",
    code: "VG",
  },
  {
    name: "Virgin Islands, U.S.",
    dial_code: "+1340",
    code: "VI",
  },
  {
    name: "Wallis and Futuna",
    dial_code: "+681",
    code: "WF",
  },
  {
    name: "Yemen",
    dial_code: "+967",
    code: "YE",
  },
  {
    name: "Zambia",
    dial_code: "+260",
    code: "ZM",
  },
  {
    name: "Zimbabwe",
    dial_code: "+263",
    code: "ZW",
  },
];

const tab = ref(1);
const changeTab = (_id) => {
  tab.value = _id;
};
const openFileDialog = () => {};
const fileChange = (e) => {
  console.log(e);
};
</script>
