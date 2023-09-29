<template>
  <section class="mb-16 max-w-[1200px] mx-auto">
    <div class="container mx-auto">
      <div class="min-w-[250px] text-center mt-32 mb-40 max-sm:w-full">
        <div
          class="bg-white flex items-center justify-center mx-auto rounded-full w-[184px] h-[184px] shadow-2xl mb-[22.82px]"
        >
          <img src="../../../assets/images/integration/mailchimp-logomark.png" />
        </div>
        <p
          class="font-primary text-primary text-[49.36px] mx-auto leading-[70.5px] font-extrabold mb-9 max-md:bottom-5 max-sm:bottom-0"
        >
          MailChimp
        </p>
        <p class="font-primary text-[#64607D] text-4xl leading-[38px] mb-10">
          MailChimp Integration with MailboxValidator
        </p>
        <router-link to="/integration/mailchimp/setup">
        <button
          class="w-[235px] py-2 px-11 bg-[#E24949] text-white text-[25px] rounded-full"
        >
          Try it Now
        </button>
        </router-link>
      </div>
      <div class="w-6/12 prose mx-auto text-center mb-44">
        <p class="font-primary text-[#E24949] text-sm font-semibold mb-3">Contact Us</p>
        <h3 class="font-primary text-primary text-4xl mt-0 mb-5">Get in touch</h3>
        <p class="font-primary text-primary text-xl mb-16">Checkout User Information</p>
        <div class="w-full">
          <div class="flex justify-between mb-6">
            <div class="w-6/12 pr-4">
              <p class="text-[#344054] font-primary text-sm font-semibold my-1 text-left">
                First name
              </p>
              <input
                type="email"
                name="email"
                placeholder="First name"
                value=""
                class="flex py-2 px-3.5 self-stretch rounded-lg border border-[#D0D5DD] border-solid shadow-sm text-[#475467] font-primary text-[14px] font-semibold w-full"
              />
            </div>
            <div class="w-6/12 pl-4">
              <p class="text-[#344054] font-primary text-sm font-semibold my-1 text-left">
                Second name
              </p>
              <input
                type="text"
                name="second-name"
                placeholder="Second name"
                value=""
                class="flex py-2 px-3.5 gap-2 self-stretch rounded-lg border border-[#D0D5DD] border-solid shadow-sm text-[#475467] font-primary text-[14px] font-semibold w-full"
              />
            </div>
          </div>
          <div class="w-full mb-6">
            <p class="text-[#344054] font-primary text-sm font-semibold my-1 text-left">
              Email
            </p>
            <input
              type="email"
              name="second-name"
              placeholder="You@company.com"
              value=""
              class="flex py-2 px-3.5 gap-2 self-stretch rounded-lg border border-[#D0D5DD] border-solid shadow-sm text-[#475467] font-primary text-[14px] font-semibold w-full"
            />
          </div>
          <div class="w-full mb-6">
            <p class="text-[#344054] font-primary text-sm font-semibold my-1 text-left">
              Password (8 to 30 characters)
            </p>
            <input
              type="password"
              name="password"
              placeholder="*************"
              value=""
              class="flex py-2 px-3.5 gap-2 self-stretch rounded-lg border border-[#D0D5DD] border-solid shadow-sm text-[#475467] font-primary text-[14px] font-semibold w-full"
            />
          </div>
          <div class="w-full mb-6">
            <p class="text-[#344054] font-primary text-sm font-semibold my-1 text-left">
              Confirm Password
            </p>
            <input
              type="password"
              name="password"
              placeholder="*************"
              value=""
              class="flex py-2 px-3.5 gap-2 self-stretch rounded-lg border border-[#D0D5DD] border-solid shadow-sm text-[#475467] font-primary text-[14px] font-semibold w-full"
            />
          </div>
          <div class="w-full mb-6">
            <p class="text-[#344054] font-primary text-sm font-semibold my-1 text-left">
              Country
            </p>
            <select
              id="countries"
              class="bg-gray-50 border text-[#475467] font-primary text-[14px] border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Poland</option>
            </select>
          </div>
          <div class="w-full mb-6">
            <p class="text-[#344054] font-primary text-sm font-semibold my-1 text-left">
              Message
            </p>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm font-primary text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <div class="w-full mb-6 flex flex-row items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:outline-none"
            />
            <p
              class="text-[#475467] font-primary text-[14px] font-semibold leading-5 pl-2 my-0"
            >
              Sign me up for news letter
            </p>
          </div>
          <div class="w-full mb-14 flex flex-row items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:outline-none"
            />
            <p
              class="text-[#475467] font-primary text-[14px] font-semibold leading-5 pl-2 my-0"
            >
              I have read, full understand, and accept the Terms of Service and the DPA.
            </p>
          </div>
          <button
            class="py-2.5 px-8 bg-[#E24949] text-white rounded-md text-sm font-primary w-full"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
