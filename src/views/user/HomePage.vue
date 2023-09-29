<script setup>
import EmailMarketing from "../../components/HomePage/EmailMarketing.vue";
import OnlineReputation from "../../components/HomePage/OnlineReputation.vue";
import DomainChecker from "../../components/HomePage/DomainChecker.vue";
import EmailChecker from "../../components/HomePage/EmailChecker.vue";
import BulkEmailChecker from "../../components/HomePage/BulkEmailVerifier.vue";
import Services from "../../components/HomePage/Services.vue";
import EmailListVerifier from "../../components/HomePage/EmailListVerifier.vue";
import RealTimeApi from "../../components/HomePage/RealTimeApi.vue";
import Pricing from "../../components/HomePage/Pricing.vue";
import Review from "../../components/HomePage/Review.vue";
</script>

<template>
  <div class="mx-auto">
    <EmailMarketing />
    <OnlineReputation />
    <DomainChecker />
    <EmailChecker />
    <BulkEmailChecker />
    <Services />
    <EmailListVerifier />
    <RealTimeApi />
    <Pricing v-bind:imageShow="true" />
    <Review />
  </div>
</template>
