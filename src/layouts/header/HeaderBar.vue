<script setup>
import { watch, ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { SUPPORT_LOCALES as supportLocales, setI18nLanguage } from "../../i18n";
import { useRoute } from "vue-router";

const route = useRoute();
const path = computed(() => route.path);

const { locale } = useI18n({ useScope: "global" });
watch(locale, (val) => {
  setI18nLanguage(val);
});

const handleLocation = (locale) => {
  localStorage.setItem("lang", locale);
  setI18nLanguage(locale);
};

let showMenu = ref(false);
let productSub = ref(false);
let srcSub = ref(false);
let langSet = ref(false);

const toggleNav = () => {
  showMenu.value = !showMenu.value;
};

const productSubToggle = () => {
  productSub.value = !productSub.value;
};

const srcSubToggle = () => {
  srcSub.value = !srcSub.value;
};

const langToggle = () => {
  langSet.value = !langSet.value;
}
</script>

<template>
  <div class="shadow-lg sticky top-0 bg-white z-30">
    <div class="mx-auto container max-xl:max-w-[100%] max-xl:px-5">
      <div class="max-w-screen-2xl mx-auto flex flex-row justify-between">
        <div
          class="py-5 max-lg:w-full max-lg:flex max-lg:flex-row max-lg:justify-between max-lg:items-center"
        >
          <router-link to="/"
            ><img src="@/assets/images/logo.png" class="h-12 w-36 cursor-pointer" alt=""
          /></router-link>
          <div class="lg:hidden" @click="toggleNav">
            <button class="navbar-burger flex items-center text-blue-600 p-3">
              <svg
                class="block h-6 w-6 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          class="flex flex-row items-center justify-between px-5 text-header-secondary max-lg:hidden"
        >
          <router-link to="/"
            ><span class="font-primary font-bold px-5 text-header-selected max-xl:px-0 max-xl:invisible">{{
              $t("header.home")
            }}</span></router-link
          >
          <a class="">
            <div class="w-full items-center justify-center">
              <div class="group cursor-pointer">
                <div class="flex items-center justify-between space-x-5 bg-white px-4 max-xl:px-2">
                  <a
                    class="menu-hover text-base font-primary font-bold flex items-center text-header-selected"
                    onClick=""
                  >
                    {{ $t("header.products") }} &nbsp;
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-3 w-3 mt-1"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
                <div
                  class="invisible absolute z-50 flex flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible"
                  onClick=""
                >
                  <router-link to="/domain-checker"
                    class="my-1 block border-b border-gray-100 py-1 font-primary text-primary lg:mx-4 hover:text-hover md:mx-2"
                    >Domain Verifier</router-link
                  >

                  <router-link to="/email-checker"
                    class="my-1 block border-b border-gray-100 py-1 font-primary lg:mx-4 text-primary hover:text-hover md:mx-2"
                    >Email Verifier</router-link
                  >
                  <router-link to="/bulk-email-checker"
                    class="my-1 block border-b border-gray-100 py-1 font-primary lg:mx-4 text-primary hover:text-hover md:mx-2"
                    >Bulk Email Verifier
                  </router-link>
                  <router-link to="/integration"
                    class="my-1 block border-b border-gray-100 py-1 font-primary lg:mx-4 text-primary hover:text-hover md:mx-2"
                    >Integration
                  </router-link>
                </div>
              </div>
            </div>
          </a>
          <a to="/">
            <div class="w-full items-center justify-center bg-gray-200">
              <div class="group cursor-pointer">
                <div class="flex items-center justify-between space-x-5 bg-white px-5 max-xl:px-2">
                  <a
                    class="menu-hover text-base font-primary font-bold text-primary flex items-center"
                    onClick=""
                  >
                    {{ $t("header.resources") }} &nbsp;
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-3 w-3 mt-1"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
                <div
                  class="invisible absolute z-50 flex flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible"
                  onClick=""
                >
                  <router-link
                    to="/document"
                    class="my-1 block border-b border-gray-100 py-1 font-primary text-primary lg:mx-4 hover:text-hover md:mx-2"
                    >Document</router-link
                  >

                  <router-link to="api-doc"
                    class="my-1 block border-b border-gray-100 py-1 font-primary text-primary lg:mx-4 text-gray-500 hover:text-hover md:mx-2"
                    >API Integration</router-link
                  >
                  <router-link to="faq"
                    class="my-1 block border-b border-gray-100 py-1 font-primary text-primary lg:mx-4 text-gray-500 hover:text-hover md:mx-2"
                    >FAQ
                  </router-link>
                </div>
              </div>
            </div>
          </a>
          <router-link to="/pricing"
            ><span class="px-5 font-primary font-bold text-header-selected max-xl:px-2">{{
              $t("header.pricing")
            }}</span></router-link
          >
          <router-link to="/contact"
            ><span class="font-primary font-bold text-header-selected px-5 max-xl:px-2">{{
              $t("header.contact")
            }}</span></router-link
          >
          <a class="">
            <div class="w-full items-center justify-center">
              <div class="group cursor-pointer">
                <div class="flex items-center justify-between space-x-5 bg-white px-5 max-xl:px-2">
                  <a
                    class="menu-hover text-base font-primary font-bold flex items-center text-header-selected"
                    onClick=""
                  >
                    {{ $t("languages.en") }} &nbsp;
                    <span>
                      <svg
                        class="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 1v18M1 3.652v9c5.6-5.223 8.4 2.49 14-.08v-9c-5.6 2.57-8.4-5.143-14 .08Z"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
                <div
                  class="invisible absolute z-50 flex flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible"
                  onClick=""
                >
                  <a
                    class="my-1 block border-b border-gray-100 py-1 font-base lg:mx-4 text-primary hover:text-hover md:mx-2"
                    
                    @click="handleLocation('en')"
                    >English</a
                  >

                  <a
                    class="my-1 block border-b border-gray-100 py-1 font-base lg:mx-4 text-primary hover:text-hover md:mx-2"
                    @click="handleLocation('pt')"
                    >Português</a
                  >
                  <a
                    class="my-1 block border-b border-gray-100 py-1 font-base lg:mx-4 text-primary hover:text-hover md:mx-2"
                    @click="handleLocation('es')"
                    >Español
                  </a>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="py-5 max-lg:hidden">
          <router-link to="/login">
          <button
            class="px-5 font-bold font-primary hover:text-primary delay-150 duration-300 max-xl:px-2"
          >
            {{ $t("header.login") }}
          </button>
          </router-link>
          <router-link to="/register">
            <button class="py-2 px-8 bg-[#E24949] text-white rounded-full font-bold max-xl:px-4">
              {{ $t("header.register") }}
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="navbar-menu relative z-50 " duration="700" :class="showMenu ? 'flex' : 'hidden'">
    <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
    <nav
      class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto"
    >
      <div class="flex items-center mb-8">
        <a class="mr-auto text-3xl font-bold leading-none" href="#">
          <img src="@/assets/images/logo.png" class="h-12 w-36 cursor-pointer" alt="" />
        </a>
        <button class="navbar-close" @click="toggleNav">
          <svg
            class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <div>
        <ul>
          <li class="my-5">
            <router-link to="/"
              ><span class="font-primary font-bold text-header-selected">{{
                $t("header.home")
              }}</span></router-link
            >
          </li>
          <li class="my-5">
            <a
              class=""
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
              @click="productSubToggle"
            >
              <div class="w-full items-center justify-center">
                <div class="group cursor-pointer">
                  <div class="flex items-center justify-between space-x-5 bg-white">
                    <a
                      class="menu-hover text-base font-primary font-bold flex items-center text-header-selected"
                      onClick=""
                    >
                      {{ $t("header.products") }} &nbsp;
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="h-3 w-3 mt-1"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </a>
            <ul
              id="dropdown-example"
              class="py-2 space-y-2"
              :class="productSub ? 'block' : 'hidden'"
            >
              <li>
                <router-link to="/domain-checker"
                  class="font-primary flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Domain verifier
                </router-link>
              </li>
              <li>
                <router-link
                  to="/email-checker"
                  class="font-primary flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Email verifier
                </router-link>
              </li>
              <li>
                <router-link
                  to="/bulk-email-checker"
                  class="font-primary flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Bulk Email verifier
                </router-link>
              </li>
              <li>
                <router-link
                  to="/Integration"
                  class="font-primary flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Integration
                </router-link>
              </li>
            </ul>
          </li>
          <li class="my-5">
            <a
              class=""
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
              @click="srcSubToggle"
            >
              <div class="w-full items-center justify-center">
                <div class="group cursor-pointer">
                  <div class="flex items-center justify-between space-x-5 bg-white">
                    <a
                      class="menu-hover text-base font-primary font-bold flex items-center text-header-selected"
                      onClick=""
                    >
                      {{ $t("header.resources") }} &nbsp;
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="h-3 w-3 mt-1"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </a>
            <ul
              id="dropdown-example"
              class="py-2 space-y-2"
              :class="srcSub ? 'block' : 'hidden'"
            >
              <li>
                <router-link
                  to="/document"
                  class="font-primary flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Document
                </router-link>
              </li>
              <li>
                <router-link
                  to="/api-doc"
                  class="font-primary flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  API Integration
                </router-link>
              </li>
              <li>
                <router-link
                  to="/faq"
                  class="font-primary flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  FAQ
                </router-link>
              </li>
            </ul>
          </li>
          <li class="my-5">
            <router-link to="/pricing"
              ><span class="font-primary font-bold text-header-selected">{{
                $t("header.pricing")
              }}</span></router-link
            >
          </li>
          <li class="my-5">
            <router-link to="/contact"
              ><span class="font-primary font-bold text-header-selected">{{
                $t("header.contact")
              }}</span></router-link
            >
          </li>
          <li class="my-5">
            <a
              class=""
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
              @click="langToggle"
            >
              <div class="w-full items-center justify-center">
                <div class="group cursor-pointer">
                  <div class="flex items-center justify-between space-x-5 bg-white">
                    <a
                      class="menu-hover text-base font-primary font-bold flex items-center text-header-selected"
                    >
                      {{ $t("languages.en") }} &nbsp;
                      <span>
                        <svg
                        class="w-4 h-4 text-gray-800 dark:text-white text-[12px]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 1v18M1 3.652v9c5.6-5.223 8.4 2.49 14-.08v-9c-5.6 2.57-8.4-5.143-14 .08Z"
                        />
                      </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </a>
            <ul
              id="dropdown-example"
              class="py-2 space-y-2"
              :class="langSet ? 'block' : 'hidden'"
            >
              <li>
                <a
                  class="font-primary flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  @click="handleLocation('en')"
                >
                  English
                </a>
              </li>
              <li>
                <a
                  
                  class="font-primary flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  @click="handleLocation('pt')"
                >
                Português
                </a>
              </li>
              <li>
                <a
                  
                  class="font-primary flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  @click="handleLocation('es')"
                >
                  Español
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="mt-auto">
        <div class="pt-6 flex flex-col">
          <router-link to="/login" class="w-full">
          <button
            class="w-full p-5 font-bold font-primary hover:text-primary delay-150 duration-300"
          >
            {{ $t("header.login") }}
          </button>
          </router-link>
          <router-link to="/register" class="w-full">
          <button class="w-full p-2 px-8 bg-[#E24949] text-white rounded-full font-bold">
            {{ $t("header.register") }}
          </button>
          </router-link>
        </div>
        <p class="my-4 text-xs text-center text-gray-400">
          <span>Copyright © Guner 2023</span>
        </p>
      </div>
    </nav>
  </div>
</template>
