<template>
  <header
    class="bg-[url('@/assets/images/contact/faq-header.png')] w-full bg-no-repeat bg-center bg-cover px-5 pt-16 pb-24 mb-36 max-md:px-5 max-md:pb-5"
  >
    <div class="w-1/2 mx-auto text-center">
      <img src="../../assets/images/contact/quotion.png" class="inline-block mb-16" />
      <p class="text-white font-primary text-[22px] leading-5 pb-1.5 mb-3">Support</p>
      <h1 class="text-white font-primary text-[48px] font-semibold mb-6">
        Everything you need to know
      </h1>
      <p class="text-white font-primary text-xl font-[400px] mb-10">
        Need something cleared up? Here are our most frequently asked questions.
      </p>
      <!-- <div class="relative w-7/12 mx-auto">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z"
              stroke="#667085"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          class="w-full p-4 font-primary pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-[16px]"
          placeholder="Search"
          required
        />
      </div> -->
    </div>
  </header>
  <section>
    <div class="container mx-auto max-xl:max-w-[100%] max-xl:px-5">
      <div class="w-8/12 mx-auto text-center mb-44 px-10">
        <h3 class="font-primary text-primary font-semibold text-4xl mt-0 mb-5">
          Privacy policy
        </h3>
        <p class="font-primary text-primary text-xl mb-16">
          Common policies about the every verification
        </p>
        <div class="w-full bg-[#F9FAFB] p-8 flex rounded-lg mb-4">
          <div class="pr-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="cursor-pointer"
              @click="slide(0)"
              data-target="#target"
              data-duration="100"
              v-if="first_show"
            >
              <path
                d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="#98A2B3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-if="!first_show"
              class="cursor-pointer"
              @click="slide(0)"
            >
              <path
                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="#98A2B3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
              </path>
            </svg>
          </div>
          <div class="w-full text-left">
            <h4
              class="text-[#101828] font-primary text-[18px] font-medium pb-2 cursor-pointer"
              @click="slide(0)"
            >
              Do I need to download and install any software?
            </h4>
            <Vue3SlideUpDown v-model="first_show" open-start="changeIcon">
              <p class="text-[#475467] font-primary text-[16px]" id="target">
                No. There is no need to download or install any software to verify email
                addresses.Quick Email Verification is an intelligent, online email
                verification service. All you need to do is upload your email list for
                bulk email verification on our platform and you're ready to start
                verification.
              </p>
            </Vue3SlideUpDown>
          </div>
        </div>
        <div class="w-full bg-[#F9FAFB] p-8 flex rounded-lg mb-4">
          <div class="pr-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="cursor-pointer"
              @click="slide(1)"
              data-target="#target"
              data-duration="100"
              v-if="secShow"
            >
              <path
                d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="#98A2B3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-if="!secShow"
              class="cursor-pointer"
              @click="slide(1)"
            >
              <path
                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="#98A2B3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
              </path>
            </svg>
          </div>
          <div class="w-full text-left">
            <h4 class="text-[#101828] font-primary text-[18px] font-medium pb-2 cursor-pointer" @click="slide(1)">
              Will my IP get blocked?
            </h4>
            <Vue3SlideUpDown v-model="secShow">
              <p class="text-[#475467] font-primary text-[16px]">
                No. Your IP will never be blocked.QuickEmailVerification is a web based
                online email verification service. Every single process of verification is
                done at our end. The email list verification and cleaning process run on our
                cloud platform so your IP is never used for email verification. This way
                your IP is totally secure.
              </p>
            </Vue3SlideUpDown>
          </div>
        </div>
        <div class="w-full bg-[#F9FAFB] p-8 flex rounded-lg mb-4">
          <div class="pr-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="cursor-pointer"
              @click="slide(2)"
              data-target="#target"
              data-duration="100"
              v-if="thrShow"
            >
              <path
                d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="#98A2B3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-if="!thrShow"
              class="cursor-pointer"
              @click="slide(2)"
            >
              <path
                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="#98A2B3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
              </path>
            </svg>
          </div>
          <div class="w-full text-left">
            <h4
              class="text-[#101828] font-primary text-[18px] font-medium pb-2 cursor-pointer"
              @click="slide(2)"
            >
              How fast is it?
            </h4>
            <Vue3SlideUpDown v-model="thrShow" open-start="changeIcon">
              <p class="text-[#475467] font-primary text-[16px]" id="target">
                Very fast! Quick Email Verification system is a multi-threaded cloud platform which is designed to verify more than a thousand email addresses every minute. That's why we call it Quick Email Verification!Our email verification service gives you a chance to validate any number of email addresses and we can begin handling them immediately. Honestly, numbers truly don't make any difference: whether you verify just a few hundreds or tens of thousands email addresses simultaneously, the accuracy remains consistently above 95%.
              </p>
            </Vue3SlideUpDown>
          </div>
        </div>
        <div class="w-full bg-[#F9FAFB] p-8 flex rounded-lg mb-4">
          <div class="pr-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="cursor-pointer"
              @click="slide(3)"
              data-target="#target"
              data-duration="100"
              v-if="frtShow"
            >
              <path
                d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="#98A2B3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-if="!frtShow"
              class="cursor-pointer"
              @click="slide(3)"
            >
              <path
                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="#98A2B3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
              </path>
            </svg>
          </div>
          <div class="w-full text-left">
            <h4 class="text-[#101828] font-primary text-[18px] font-medium pb-2 cursor-pointer" @click="slide(3)">
              How does it work?
            </h4>
            <Vue3SlideUpDown v-model="frtShow">
              <p class="text-[#475467] font-primary text-[16px]">
                The email verification process at QuickEmailVerification is designed intelligently, for optimal performance. It is divided into two sub-processes: pre-validation and post-validation. In the pre-validation process, email list files (CSV/TXT) get verified for correctness. In post-validation, each email address in your list is checked for its existence. The QuickEmailVerification system verifies email addresses against a number of different validations, starting from the RFC syntax checking to the deep level SMTP testing of user mailbox existence checking.
              </p>
            </Vue3SlideUpDown>
          </div>
        </div>
        <div class="w-full bg-[#F9FAFB] p-8 flex rounded-lg mb-4">
          <div class="pr-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="cursor-pointer"
              @click="slide(4)"
              data-target="#target"
              data-duration="100"
              v-if="fifShow"
            >
              <path
                d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="#98A2B3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-if="!fifShow"
              class="cursor-pointer"
              @click="slide(4)"
            >
              <path
                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="#98A2B3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
              </path>
            </svg>
          </div>
          <div class="w-full text-left">
            <h4
              class="text-[#101828] font-primary text-[18px] font-medium pb-2 cursor-pointer"
              @click="slide(4)"
            >
              In what format should I upload the email lists?
            </h4>
            <Vue3SlideUpDown v-model="fifShow" open-start="changeIcon">
              <p class="text-[#475467] font-primary text-[16px]" id="target">
                Currently, our online system accepts the following file formats:a) Plain text (.txt)b) Comma Separated Value (.csv)c) Microsoft Excel Spreadsheets (.xls or .xlsx)d) OpenOffice Spreadsheets (.ods)Uploading, downloading and integrating these formats are a breeze.If you have any other file format, you may need to convert it to .csv or .txt file. To prepare a csv file from other spreadsheet formats, open your spreadsheet application and save the file as Text csv (.csv). Or simply create a text file with .csv OR .txt extension. The file must list emails in a single column.

                Example :sample1@domain.com
                sample2@domain.com
                sample3@domain.com
              </p>
            </Vue3SlideUpDown>
          </div>
        </div>
        <div class="w-full bg-[#F9FAFB] p-8 flex rounded-lg mb-4">
          <div class="pr-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="cursor-pointer"
              @click="slide(5)"
              data-target="#target"
              data-duration="100"
              v-if="sxtShow"
            >
              <path
                d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="#98A2B3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-if="!sxtShow"
              class="cursor-pointer"
              @click="slide(5)"
            >
              <path
                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="#98A2B3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
              </path>
            </svg>
          </div>
          <div class="w-full text-left">
            <h4 class="text-[#101828] font-primary text-[18px] font-medium pb-2 cursor-pointer" @click="slide(5)">
              Are there any emails that can't be checked?
            </h4>
            <Vue3SlideUpDown v-model="sxtShow">
              <p class="text-[#475467] font-primary text-[16px]">
                Practically, the only email addresses that can't be verified are the ones whose servers are down or unresponsive. In case that happens, we flag them appropriately so you can take action later.And no, we won't deduct your verification credits for emails that couldn't be verified.
              </p>
            </Vue3SlideUpDown>
          </div>
        </div>
        <div class="w-full bg-[#F9FAFB] p-8 flex rounded-lg mb-4">
          <div class="pr-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="cursor-pointer"
              @click="slide(6)"
              data-target="#target"
              data-duration="100"
              v-if="svtShow"
            >
              <path
                d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="#98A2B3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-if="!svtShow"
              class="cursor-pointer"
              @click="slide(6)"
            >
              <path
                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="#98A2B3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
              </path>
            </svg>
          </div>
          <div class="w-full text-left">
            <h4
              class="text-[#101828] font-primary text-[18px] font-medium pb-2 cursor-pointer"
              @click="slide(6)"
            >
              Do you offer an API service?
            </h4>
            <Vue3SlideUpDown v-model="svtShow" open-start="changeIcon">
              <p class="text-[#475467] font-primary text-[16px]" id="target">
                Yes. Quick Email Verification provides API service for real time email verification. It can be integrated with any system that supports GET request and parse JSON response. For batch verification, a "bulk email verification" API service is also available.
              </p>
            </Vue3SlideUpDown>
          </div>
        </div>
        <div class="w-full bg-[#F9FAFB] p-8 flex rounded-lg mb-4">
          <div class="pr-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="cursor-pointer"
              @click="slide(7)"
              data-target="#target"
              data-duration="100"
              v-if="egtShow"
            >
              <path
                d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="#98A2B3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-if="!egtShow"
              class="cursor-pointer"
              @click="slide(7)"
            >
              <path
                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="#98A2B3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
              </path>
            </svg>
          </div>
          <div class="w-full text-left">
            <h4 class="text-[#101828] font-primary text-[18px] font-medium pb-2 cursor-pointer" @click="slide(7)">
              Do you offer free trial of the service?
            </h4>
            <Vue3SlideUpDown v-model="egtShow">
              <p class="text-[#475467] font-primary text-[16px]">
                Sure enough! We want our clients to experience our awesome email verification service fully before they invest their first dollar. Currently, we are offering a free trial which permits a certain number of email verifications every day.
              </p>
            </Vue3SlideUpDown>
          </div>
        </div>
        <div class="w-full bg-[#F9FAFB] p-8 flex rounded-lg mb-4">
          <div class="pr-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="cursor-pointer"
              @click="slide(8)"
              data-target="#target"
              data-duration="100"
              v-if="ninShow"
            >
              <path
                d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="#98A2B3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-if="!ninShow"
              class="cursor-pointer"
              @click="slide(8)"
            >
              <path
                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="#98A2B3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
              </path>
            </svg>
          </div>
          <div class="w-full text-left">
            <h4
              class="text-[#101828] font-primary text-[18px] font-medium pb-2 cursor-pointer"
              @click="slide(8)"
            >
              Why should I use Quick Email Verification service?
            </h4>
            <Vue3SlideUpDown v-model="ninShow" open-start="changeIcon">
              <p class="text-[#475467] font-primary text-[16px]" id="target">
                If you have any online system with web forms accepting email address, there are all the chances of the user making a typo or the user entering an incorrect email. Our real time email verification helps you identify invalid email address. It is also necessary to validate and clean your list of emails before sending any bulk campaign mails. Our email verification helps you reduce bounce rate and protect your IP reputation.
              </p>
            </Vue3SlideUpDown>
          </div>
        </div>
        <div class="w-full bg-[#F9FAFB] p-8 flex rounded-lg mb-4">
          <div class="pr-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="cursor-pointer"
              @click="slide(9)"
              data-target="#target"
              data-duration="100"
              v-if="tetShow"
            >
              <path
                d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="#98A2B3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-if="!tetShow"
              class="cursor-pointer"
              @click="slide(9)"
            >
              <path
                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="#98A2B3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
              </path>
            </svg>
          </div>
          <div class="w-full text-left">
            <h4 class="text-[#101828] font-primary text-[18px] font-medium pb-2 cursor-pointer" @click="slide(9)">
              What does the "unknown" status mean?
            </h4>
            <Vue3SlideUpDown v-model="tetShow">
              <p class="text-[#475467] font-primary text-[16px]">
                The "unknown" status means both the possibilities exist: the email may be valid or may be invalid. This happens when the receiving server is not responding well. We recommend you retest such emails after some time.
              </p>
            </Vue3SlideUpDown>
          </div>
        </div>
        <div class="w-full bg-[#F9FAFB] p-8 flex rounded-lg mb-4">
          <div class="pr-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="cursor-pointer"
              @click="slide(10)"
              data-target="#target"
              data-duration="100"
              v-if="evtShow"
            >
              <path
                d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="#98A2B3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-if="!evtShow"
              class="cursor-pointer"
              @click="slide(10)"
            >
              <path
                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="#98A2B3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
              </path>
            </svg>
          </div>
          <div class="w-full text-left">
            <h4
              class="text-[#101828] font-primary text-[18px] font-medium pb-2 cursor-pointer"
              @click="slide(10)"
            >
              Do you accept custom jobs? How can I request them?
            </h4>
            <Vue3SlideUpDown v-model="evtShow" open-start="changeIcon">
              <p class="text-[#475467] font-primary text-[16px]" id="target">
                Sure we do! Contact us and we'll give you the best deal..
              </p>
            </Vue3SlideUpDown>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Vue3SlideUpDown } from "vue3-slide-up-down";

const openedId = ref('');
const first_show = ref(false);
const secShow = ref(false);
const thrShow = ref(false);
const frtShow = ref(false);
const fifShow = ref(false);
const sxtShow = ref(false);
const svtShow = ref(false);
const egtShow = ref(false);
const ninShow = ref(false);
const tetShow = ref(false);
const evtShow = ref(false);

var showsArray = [first_show, secShow, thrShow, frtShow, fifShow, sxtShow, svtShow, egtShow, ninShow, tetShow, evtShow];

const initShow = (showItem) => {
  showsArray.forEach(em => {
    if(showItem != em)
      em.value = false;
  });
}
const slide = (_id) => {
  initShow(showsArray[_id]);
  console.log(showsArray[_id].value);
  showsArray[_id].value = !showsArray[_id].value
};

const changeIcon = () => {
  alert("hello");
};
</script>
