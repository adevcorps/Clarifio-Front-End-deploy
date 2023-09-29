<template>
  <header
    class="bg-[url('@/assets/images/contact/header_section_bg.png')] w-full bg-no-repeat bg-center bg-cover px-5 pt-16 pb-24 mb-24 max-md:px-5 max-md:pb-5"
  >
    <div class="w-1/2 mx-auto text-center">
      <img src="../../assets/images/contact/phone_image.png" class="inline-block mb-16" />
      <p class="text-white font-primary text-[22px] leading-5 pb-1.5 mb-3">Support</p>
      <h1 class="text-white font-primary text-[48px] font-semibold mb-6">
        Everything you need to know
      </h1>
      <p class="text-white font-primary text-xl font-[400px] mb-10">
        Need something cleared up? Here are our most frequently asked questions.
      </p>
      <div class="relative w-7/12 mx-auto">
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
      </div>
    </div>
  </header>
  <section class="relative">
    <div class="container mx-auto max-xl:max-w-[100%] max-xl:px-5">
      <img
        src="../../assets/images/contact/Polygon13.png"
        class="absolute left-0 top-0 z-[-2]"
      />
      <img
        src="../../assets/images/contact/Polygon10.png"
        class="absolute right-0 top-5 z-[-1]"
      />
      <div class="w-6/12 prose mx-auto text-center mb-44">
        <p class="font-primary text-[#2078BE] text-sm font-semibold mb-3">Contact Us</p>
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
              v-on:change="changeCode"
            >
              <option selected>Choose a country</option>
              <option 
                v-for="country in countryCode" 
                :key="country.name"
                :value="country.code" 
              >{{ country.name }}
              </option>
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
            class="py-2.5 px-8 bg-[#2078BE] text-white rounded-md text-sm font-primary w-full"
          >
            Continue
          </button>
        </div>
      </div>
      <div class="w-full text-center">
        <p class="font-primary text-[#2078BE] text-sm font-semibold mb-3">Contact Us</p>
        <h3 class="font-primary text-primary text-4xl font-semibold mt-0 mb-5">
          We’d love to hear from you
        </h3>
        <p class="font-primary text-primary text-xl mb-16">Chat to our friendly team.</p>
        <img src="../../assets/images/contact/banner.png" class="w-full mb-24" />
        <div class="flex flex-row flex-wrap justify-between px-28 mb-40">
          <div class="p-5 w-3/12 text-center bg-[#F9FAFB]">
            <img
              src="../../assets/images/contact/f-chat.png"
              class="mb-14 inline-block"
            />
            <p class="font-primary text-primary text-xl font-semibold mb-2">
              Chat to sales
            </p>
            <p class="font-primary text-primary text-sm mb-4 leading-7">
              Speak to our friendly team.
            </p>
            <p class="font-primary text-[#2078BE] text-sm mb-5 font-semibold leading-5">
              sales@untitledui.com
            </p>
          </div>
          <div class="p-5 w-3/12 text-center bg-[#F9FAFB]">
            <img
              src="../../assets/images/contact/f-location.png"
              class="mb-14 inline-block"
            />
            <p class="font-primary text-primary text-xl font-semibold mb-2">Visit us</p>
            <p class="font-primary text-primary text-sm mb-4 leading-7">
              Visit our office HQ.
            </p>
            <p class="font-primary text-[#2078BE] text-sm mb-5 font-semibold leading-5">
              100 Smith Street <br />Collingwood VIC 3066 AU
            </p>
          </div>
          <div class="p-5 w-3/12 text-center bg-[#F9FAFB]">
            <img
              src="../../assets/images/contact/f-phone.png"
              class="mb-14 inline-block"
            />
            <p class="font-primary text-primary text-xl font-semibold mb-2">Call us</p>
            <p class="font-primary text-primary text-sm mb-4 leading-7">
              Mon-Fri from 8am to 5pm.
            </p>
            <p class="font-primary text-[#2078BE] text-sm mb-5 font-semibold leading-5">
              +1 (555) 000-0000
            </p>
          </div>
        </div>
        <GoogleMap
          api-key="AIzaSyAoeC-jhvkXaUUCYG8S4KiSzGCxCoiFAO0"
          style="width: 100%; height: 500px"
          :center="center"
          :zoom="15"
        >
          <Marker :options="{ position: center }" />
        </GoogleMap>
        <div class="flex flex-row flex-wrap justify-between px-28 mt-14 mb-14">
          <div class="p-5 w-3/12 text-center ">
            <img
              src="../../assets/images/contact/marker-pin-02.png"
              class="mb-14 inline-block"
            />
            <p class="font-primary text-primary text-xl font-semibold mb-2">
              Retail store
            </p>
            <p class="font-primary text-primary text-base mb-4 leading-7">
              Mon-Sat 9am to 5pm.
            </p>
            <p class="font-primary text-[#2078BE] text-base mb-5 font-semibold leading-5">
              150 Brunswick Street <br/>Fitzroy VIC 3065 AU
            </p>
          </div>
          <div class="p-5 w-3/12 text-center ">
            <img
              src="../../assets/images/contact/marker-pin-02.png"
              class="mb-14 inline-block"
            />
            <p class="font-primary text-primary text-xl font-semibold mb-2">
              Show room
            </p>
            <p class="font-primary text-primary text-base mb-4 leading-7">
              Mon-Fri 9am to 5pm.
            </p>
            <p class="font-primary text-[#2078BE] text-base mb-5 font-semibold leading-5">
              50 Flinders Street <br/>Melbourne VIC 3000 AU
            </p>
          </div>
          <div class="p-5 w-3/12 text-center ">
            <img
              src="../../assets/images/contact/marker-pin-02.png"
              class="mb-14 inline-block"
            />
            <p class="font-primary text-primary text-xl font-semibold mb-2">
              Head office
            </p>
            <p class="font-primary text-primary text-base mb-4 leading-7">
              Mon-Fri 9am to 5pm.
            </p>
            <p class="font-primary text-[#2078BE] text-base mb-5 font-semibold leading-5">
              100 Smith Street <br/>Collingwood VIC 3066 AU
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { GoogleMap, Marker } from "vue3-google-map";
const googleMap = GoogleMap;
const marker = Marker;
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
const center = { lat: 40.689247, lng: -74.044502 }
</script>

<script type="module">
import init, * as cts from "../../assets/wasm/countries/countries.js";
var module = await init();
var language = "en";
var a2 = "FI";
const changeCode = (code) => {
  alert(code.target.value)
  console.log(cts.list_countries(language));
    console.log(cts.list_subs(localStorage.getItem('lang'),code.target.value))

}
</script>
