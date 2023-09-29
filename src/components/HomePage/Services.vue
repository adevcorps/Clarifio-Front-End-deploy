<script setup>
import Card from "./Card.vue";
const dataArray = [
  {
    title: "Exceeding 99% Accuracy",
    content:
      "Clarifio goes beyond the surface. We meticulously validate email syntax and establish SMTP connections to confirm email existence, guaranteeing top-notch accuracy.",
  },
  {
    title: "Unbeatable Email Verification Pricing",
    content:
      "At Clarifio, we understand the needs of email marketers. That's why we offer top-tier email verification at the most competitive prices, catering to your budget without compromising quality.",
  },
  {
    title: "Round-the-Clock Support",
    content:
      "Our dedicated team is here for you 24/7, ensuring you receive the assistance you need whenever needed. Your success is our priority.",
  },
  {
    title: "Risk-Free Trial",
    content:
      "Experience the power of Clarifio with our risk-free trial. Test our service confidently and witness the difference in your email marketing success..",
  },
  {
    title: "API Access for All Plans",
    content:
      "Unlock the full potential of Clarifio with our inclusive API access, available in all plans. Seamlessly integrate our robust email verification into your workflow.",
  },
  {
    title: "17+ Advanced Checks",
    content:
      "Enhance your email verification experience effortlessly with our 17+ pre-built integrations with leading email marketing providers. Simplify your workflow and boost efficiency.",
  },
  {
    title: "Prevent Bounce",
    content:
      "Harness the power of our Email verification Platform to minimize bounced emails significantly. Safeguard your email-sending reputation and amplify your ROI effortlessly.",
  },
  {
    title: "Risk Score Report",
    content:
      "Our advanced system provides a comprehensive risk score assessment, helping you identify and manage potential email deliverability issues, safeguarding your campaigns and reputation.",
  },
  {
    title: "Domain Checker",
    content:
      "At Clarifio, supercharge your email strategy with our instant Domain Checker. Validate MX records, spot catch-all domains, and avoid spam traps, guaranteeing successful email delivery every time.",
  },
  {
    title: "Comprehensive Video Documentation",
    content:
      "Learn and leverage Clarifio to its fullest potential with our extensive library of video documentation. Explore, implement, and master email verification with ease.",
  },
  {
    title: "Automated List Cleaner",
    content:
      "Say goodbye to manual list cleaning. Our automated list cleaner streamlines the process, ensuring your email list is pristine and ready for action.",
  },
  {
    title: "Prevent Bounce",
    content:
      "Harness the power of our Email verification Platform to minimize bounced emails significantly. Safeguard your email-sending reputation and amplify your ROI effortlessly.",
  },
];
</script>
<template>
  <section>
    <div class="mx-auto container">
      <div class="flex flex-col justify-center mt-32 max-md:mt-10 max-md:px-5">
        <div class="flex justify-center items-center mx-auto w-full">
          <img src="@/assets/images/home/clarifio.png" class="max-md:w-12" />
          <h1 class="text-4xl font-[800] font-primary text-primary">&nbsp; Why Clarifio</h1>
        </div>
        <p class="w-8/12 font-primary text-[#231F20] text-[18px]   font-[500] text-center mx-auto  py-2 max-md:w-full max-md:mt-3">The most comprehensive email verification service with 99%+ verification accuracy. Email list verification, bulk email verifier, email verifier API & automated email verification in one place.</p>
        <div class="2xl:px-1 py-5 flex flex-row flex-wrap justify-between mx-auto w-full max-xl:justify-center">
          <Card
            v-for="data in dataArray"
            :key="data.title"
            :title="data.title"
            :content="data.content"
          />
        </div>
      </div>
    </div>
  </section>
</template>
