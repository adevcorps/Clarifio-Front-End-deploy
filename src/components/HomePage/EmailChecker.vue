<template>
  <section>
    <div class="container mx-auto mt-20 max-md:mt-10 max-xl:max-w-[100%] max-xl:px-5">
      <div class="mx-auto  flex flex-wrap">
        <div class="lg:w-5/12 prose font-primary md:w-full sm:w-full sm:mb-5 md:mb-5">
          <div class="mx-auto w-9/12 max-md:w-full max-md:px-5 justify-center sm:w-full">
            <div class="w-full flex items-center pl-8 mb-5">
              <img
                src="@/assets/images/home/email-checker/email-check.png"
                class="my-8 mr-2.5 max-md:my-0"
              />
              <span class="text-blue font-bold">EMAIL CHECKER</span>
            </div>
            <h1 class="text-4xl mb-5">Rapid Email Checker</h1>
            <p class="text-xl mb-10 leading-9 pr-9 max-md:pr-0 max-md:mb-5">
              Ensure email accuracy with our lightning-fast Email Checker. Verify email
              addresses instantly and boost your communication efficiency while reducing
              the risk of bounces and errors.
            </p>
            <button
              class="py-2.5 px-8 bg-[#2078BE] text-white rounded-full text-[15px]"
            >
              Check Email
            </button>
          </div>
        </div>
        <div class="lg:w-6/12 flex justify-center relative max-md:w-full max-md:mx-0">
          <img
            src="@/assets/images/home/email-checker/board1.png"
            class="absolute h-full right-1 max-md:w-full max-md:invisible max-md:left-auto max-md:right-auto"
          />
          <img
            src="@/assets/images/home/email-checker/board2.png"
            class="invisible absolute max-md:w-full max-w-lg left-[8%] sm:visible max-md:left-auto max-md:right-auto"
          />
          <img
            src="@/assets/images/home/email-checker/table.png"
            class="z-10 max-w-lg ml-30 mt-3 max-md:w-full max-md:w-full max-md:ml-0 max-md:left-auto max-md:right-auto"
          />
        </div>
      </div>
    </div>
  </section>
</template>
