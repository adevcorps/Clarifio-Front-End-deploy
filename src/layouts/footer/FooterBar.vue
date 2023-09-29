<template>
  <div class="relative mt-9">
    <img
      src="../../assets/images/footer/footer-red.png"
      class="absolute z-[-2] max-h-[550px] w-full max-md:max-h-none max-md:object-cover max-xl:h-[100%]"
    />
    <img
      src="../../assets/images/footer/footer-black.png"
      class="absolute w-full z-[-1] max-h-[550px] bottom-0 top-5 max-md:max-h-none max-md:object-cover max-xl:h-[100%]"
    />
    <div class="container mx-auto z-20 pt-[160px]">
      <div class="flex flex-row justify-between max-md:flex-col max-md:px-5">
        <div class="w-4/12 max-md:w-full">
          <div class="flex flex-col">
            <svg
              width="215"
              height="75"
              viewBox="0 0 215 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="max-md:w-[150px]"
            >
              <rect width="215" height="75" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_165_10990"
                    transform="scale(0.00223714 0.00641312)"
                  />
                </pattern>
                <image
                  id="image0_165_10990"
                  width="447"
                  height="156"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAb8AAACcCAYAAADvXKVeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTA5LTAxVDIwOjEwOjE4KzA1OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wOS0wMVQyMDoxMjo0OSswNTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wOS0wMVQyMDoxMjo0OSswNTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmMGM1N2MwNC1kOTRiLTkzNDktOTZjZC03MjM2OGFlNzJhM2IiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkNzQ0NDYxOS03MTNjLWVjNDUtYjg5MS1kZjBkNjRmNzBiMjQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiMThhZjE3Ny1hZWY2LTIxNGYtOTBlZS1lMDE1NDZiNjk0MzYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmIxOGFmMTc3LWFlZjYtMjE0Zi05MGVlLWUwMTU0NmI2OTQzNiIgc3RFdnQ6d2hlbj0iMjAyMy0wOS0wMVQyMDoxMDoxOCswNTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMGM1N2MwNC1kOTRiLTkzNDktOTZjZC03MjM2OGFlNzJhM2IiIHN0RXZ0OndoZW49IjIwMjMtMDktMDFUMjA6MTI6NDkrMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4R/Pf8AAAUpklEQVR42u2dzY4dxRXHe8aGKNnlHVh5y4qdH4M3YYmfABZZgBQZ7OCIUYJnA4tEwraESUBi7ERoFgF7Pu7YWGTDCsVGUdzpvn175t6evne6q05VnVP9G+kvj+356K7uql+dzypmT38oEEIIIYMqXcXgIYQQsqknT8vZ7AT4IYQQmqD15wBABg4hhNDk3J8MGkIIIeCHEEIIWVBZFFtzl+cYt+feg+f19zKACCGEvHS4u3t/9q/vXq7oydPy+Ju9F7VW/r0FVQut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"
                />
              </defs>
            </svg>

            <p class="font-primary text-white text-xl mt-11 max-md:mt-3">Get our best content</p>
            <div class="w-full flex flex-row items-center mb-12 max-md:mb-10">
              <input
                placeholder="Your email"
                class="w-6/12 max-md:w-full p-3 outline-none bg-[black] opacity-30 border-b-2 border-[white] text-white"
              />
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="bg-[#E24949] rounded-lg w-[50px] h-[50px] ml-2 p-2 cursor-pointer"
              >
                <g id="Message">
                  <path
                    id="Vector 13 (Stroke)"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.5974 5.45455C10.3043 5.45455 7.1809 5.64867 5.19749 5.79141C4.5388 5.83882 4.02865 6.35372 4.02865 6.98262V7.69328L11.9669 11.8107C12.359 12.0141 12.8358 12.0141 13.2279 11.8107L21.1661 7.69328V6.98261C21.1661 6.35372 20.656 5.83882 19.9973 5.79141C18.0139 5.64867 14.8905 5.45455 12.5974 5.45455ZM21.1661 9.35722L13.9845 13.0822C13.1218 13.5296 12.0729 13.5296 11.2103 13.0822L4.02865 9.35722V17.0174C4.02865 17.6463 4.5388 18.1612 5.19749 18.2086C7.1809 18.3513 10.3043 18.5455 12.5974 18.5455C14.8905 18.5455 18.0139 18.3513 19.9973 18.2086C20.656 18.1612 21.1661 17.6463 21.1661 17.0174V9.35722ZM5.07775 4.34117C7.06235 4.19834 10.2385 4 12.5974 4C14.9562 4 18.1324 4.19834 20.117 4.34117C21.6002 4.44791 22.724 5.60588 22.724 6.98261V17.0174C22.724 18.3941 21.6002 19.5521 20.117 19.6588C18.1324 19.8017 14.9562 20 12.5974 20C10.2385 20 7.06235 19.8017 5.07775 19.6588C3.59459 19.5521 2.4707 18.3941 2.4707 17.0174V6.98262C2.4707 5.60589 3.59458 4.44791 5.07775 4.34117Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
            <div class="w-full flex flex-row items-center">
              <svg
                width="32"
                height="22"
                viewBox="0 0 32 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="mr-[6.03px] cursor-pointer"
              >
                <g id="Payment method icon">
                  <rect
                    x="0.270864"
                    y="0.270864"
                    width="30.8785"
                    height="21.1274"
                    rx="2.97951"
                    fill="white"
                  />
                  <path
                    id="visa-logo"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.70635 14.318H7.84665L6.4521 8.84125C6.38591 8.58932 6.24537 8.3666 6.03863 8.26163C5.52271 7.99783 4.95419 7.78789 4.33398 7.682V7.47115H7.32981C7.74328 7.47115 8.05338 7.78789 8.10507 8.15574L8.82864 12.1063L10.6874 7.47115H12.4954L9.70635 14.318ZM13.5296 14.318H11.7732L13.2195 7.47115H14.9758L13.5296 14.318ZM17.2473 9.36793C17.299 8.99916 17.6091 8.78831 17.9708 8.78831C18.5394 8.73536 19.1587 8.84125 19.6755 9.10413L19.9856 7.62997C19.4688 7.41912 18.9002 7.31323 18.3843 7.31323C16.6797 7.31323 15.4393 8.26162 15.4393 9.57787C15.4393 10.5792 16.3179 11.105 16.9381 11.4217C17.6091 11.7375 17.8675 11.9484 17.8158 12.2642C17.8158 12.738 17.299 12.9488 16.783 12.9488C16.1628 12.9488 15.5426 12.7909 14.975 12.5271L14.6649 14.0022C15.2851 14.2651 15.9561 14.371 16.5763 14.371C18.4877 14.423 19.6755 13.4755 19.6755 12.0534C19.6755 10.2625 17.2473 10.1575 17.2473 9.36793ZM25.8225 14.318L24.4279 7.47115H22.93C22.6199 7.47115 22.3098 7.682 22.2064 7.99783L19.6241 14.318H21.4321L21.7929 13.3176H24.0144L24.2212 14.318H25.8225ZM23.1889 9.31502L23.7049 11.8955H22.2586L23.1889 9.31502Z"
                    fill="#172B85"
                  />
                  <rect
                    x="0.270864"
                    y="0.270864"
                    width="30.8785"
                    height="21.1274"
                    rx="2.97951"
                    stroke="#F2F4F7"
                    stroke-width="0.541728"
                  />
                </g>
              </svg>
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
              <svg
                width="11"
                height="13"
                viewBox="0 0 11 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="bg-[white] w-[31.6px] h-[21.67px] cursor-pointer rounded-md p-1 mr-[6.03px]"
              >
                <g id="PayPal">
                  <path
                    id="Fill 7"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.08917 11.6566L3.28846 10.3483L2.84451 10.3376H0.724609L2.19787 0.682487C2.20246 0.653251 2.2173 0.62611 2.23896 0.606803C2.26074 0.587496 2.28849 0.576904 2.31753 0.576904H5.89201C7.07877 0.576904 7.8977 0.832091 8.3252 1.33585C8.52567 1.57217 8.65333 1.81919 8.71514 2.09092C8.77993 2.37612 8.781 2.71681 8.7178 3.13241L8.71321 3.16264V3.42897L8.91368 3.54636C9.08244 3.63893 9.21661 3.74484 9.31951 3.86609C9.49094 4.06821 9.60184 4.32505 9.6487 4.62944C9.69717 4.94255 9.68115 5.31524 9.60184 5.73713C9.51037 6.22235 9.36253 6.64501 9.16281 6.99078C8.97922 7.3094 8.74524 7.57375 8.46739 7.77851C8.20213 7.97313 7.88703 8.12086 7.53072 8.21541C7.18541 8.3083 6.79174 8.35519 6.35997 8.35519H6.0818C5.88294 8.35519 5.68973 8.42922 5.53805 8.56195C5.38594 8.69743 5.28539 8.88256 5.25454 9.08501L5.23352 9.20284L4.88137 11.509L4.86547 11.5936C4.8612 11.6204 4.85394 11.6338 4.84327 11.6428C4.83377 11.6511 4.8201 11.6566 4.80676 11.6566H3.08917Z"
                    fill="#28356A"
                  />
                  <path
                    id="Fill 8"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.10451 3.19336C9.09394 3.26386 9.08167 3.3359 9.068 3.40993C8.59663 5.91149 6.98386 6.77568 4.92415 6.77568H3.87541C3.62349 6.77568 3.41118 6.96467 3.37201 7.22152L2.68299 11.7389C2.65747 11.9076 2.78322 12.0595 2.94781 12.0595H4.80791C5.02812 12.0595 5.21524 11.8941 5.24993 11.6696L5.26818 11.5719L5.61841 9.27481L5.64093 9.14882C5.67519 8.92353 5.86274 8.75804 6.08295 8.75804H6.36112C8.16325 8.75804 9.57407 8.00186 9.98642 5.81341C10.1586 4.89924 10.0695 4.13588 9.61367 3.59903C9.47576 3.43718 9.30465 3.3028 9.10451 3.19336Z"
                    fill="#298FC2"
                  />
                  <path
                    id="Fill 9"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.61055 2.9903C8.5385 2.96856 8.4642 2.94893 8.38799 2.93116C8.31135 2.91384 8.23289 2.89851 8.15209 2.88505C7.86933 2.83783 7.55945 2.81543 7.22759 2.81543H4.42592C4.35686 2.81543 4.29132 2.83154 4.23272 2.86066C4.10345 2.92487 4.00749 3.05131 3.98422 3.2061L3.38817 7.10793L3.37109 7.22167C3.41027 6.96483 3.62258 6.77584 3.87449 6.77584H4.92324C6.98294 6.77584 8.59571 5.91121 9.06708 3.41009C9.08117 3.33606 9.09302 3.26402 9.10359 3.19352C8.98436 3.1281 8.8552 3.07216 8.71612 3.0245C8.68175 3.01269 8.64631 3.00133 8.61055 2.9903Z"
                    fill="#22284F"
                  />
                  <path
                    id="Fill 11"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.984 3.20604C4.00727 3.05125 4.10323 2.92481 4.2325 2.86104C4.29153 2.83181 4.35664 2.8157 4.4257 2.8157H7.22737C7.55923 2.8157 7.86911 2.83821 8.15187 2.88543C8.23267 2.89878 8.31113 2.91422 8.38777 2.93154C8.46398 2.9492 8.53827 2.96894 8.61033 2.99057C8.64608 3.0016 8.68152 3.01307 8.71622 3.02444C8.8553 3.0721 8.98456 3.12848 9.1038 3.19346C9.24406 2.26903 9.10262 1.63961 8.61908 1.06966C8.0859 0.44212 7.12372 0.173584 5.89245 0.173584H2.31786C2.06637 0.173584 1.85182 0.362574 1.81297 0.619857L0.324123 10.3742C0.294769 10.5672 0.438764 10.7413 0.627058 10.7413H2.83385L3.984 3.20604Z"
                    fill="#28356A"
                  />
                </g>
              </svg>
              <svg
                width="23"
                height="10"
                viewBox="0 0 23 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="bg-[white] w-[31.6px] h-[21.67px] cursor-pointer rounded-md p-1 mr-[6.03px]"
              >
                <g id="GooglePay">
                  <g id="Pay">
                    <path
                      id="Union"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.8394 8.02003V5.37039H12.207C12.7673 5.37039 13.2403 5.18262 13.6259 4.8123L13.7184 4.71841C14.4228 3.95169 14.3765 2.75726 13.6259 2.04791C13.2506 1.67237 12.7365 1.46895 12.207 1.47939H10.0117V8.02003H10.8394ZM10.8391 4.56713V2.2826H12.2274C12.5257 2.2826 12.8085 2.39735 13.0193 2.60598C13.4666 3.04411 13.4769 3.77433 13.045 4.22811C12.8342 4.45239 12.536 4.57757 12.2274 4.56713H10.8391ZM17.5798 3.89429C17.2251 3.56569 16.7418 3.39878 16.13 3.39878C15.3434 3.39878 14.7522 3.69087 14.3615 4.26983L15.0915 4.73403C15.3589 4.33763 15.7239 4.13943 16.1866 4.13943C16.4796 4.13943 16.7624 4.24896 16.9834 4.44716C17.1994 4.63493 17.3228 4.90616 17.3228 5.19303V5.38601C17.004 5.20867 16.603 5.11479 16.1095 5.11479C15.5337 5.11479 15.071 5.2504 14.7265 5.52684C14.3821 5.80328 14.2073 6.16839 14.2073 6.63259C14.197 7.05508 14.3769 7.4567 14.6957 7.72792C15.0196 8.02 15.4308 8.16605 15.9141 8.16605C16.4848 8.16605 16.9372 7.91047 17.2816 7.39932H17.3176V8.02H18.1093V5.26083C18.1093 4.68188 17.9345 4.22288 17.5798 3.89429ZM15.3332 7.19589C15.1635 7.07071 15.0607 6.8673 15.0607 6.64823C15.0607 6.40309 15.1738 6.19967 15.3949 6.03798C15.6212 5.87629 15.904 5.79284 16.2382 5.79284C16.701 5.78762 17.0609 5.89194 17.318 6.10057C17.318 6.45525 17.1792 6.76298 16.9066 7.02377C16.6598 7.27413 16.3256 7.41496 15.976 7.41496C15.7446 7.42017 15.5183 7.34194 15.3332 7.19589ZM19.8883 9.98631L22.6542 3.54477H21.7545L20.4744 6.75772H20.459L19.148 3.54477H18.2483L20.0631 7.73308L19.0349 9.98631H19.8883Z"
                      fill="#3C4043"
                    />
                  </g>
                  <g id="G">
                    <path
                      id="Blue"
                      d="M7.98413 4.79667C7.98413 4.54109 7.96356 4.28552 7.92243 4.03516H4.43164V5.47994H6.43152C6.34926 5.94415 6.08193 6.36141 5.69121 6.62221V7.56105H6.88394C7.58312 6.90908 7.98413 5.94415 7.98413 4.79667Z"
                      fill="#4285F4"
                    />
                    <path
                      id="Green"
                      d="M4.43071 8.46847C5.42808 8.46847 6.27122 8.13466 6.88301 7.56092L5.69028 6.62207C5.35611 6.85157 4.9294 6.98196 4.43071 6.98196C3.46419 6.98196 2.64676 6.31955 2.35372 5.43286H1.125V6.40301C1.75221 7.67045 3.03234 8.46847 4.43071 8.46847Z"
                      fill="#34A853"
                    />
                    <path
                      id="Yellow"
                      d="M2.35464 5.43282C2.20038 4.96861 2.20038 4.46267 2.35464 3.99325V3.02832H1.12573C0.596112 4.08713 0.596112 5.33893 1.12573 6.39774L2.35464 5.43282Z"
                      fill="#FBBC04"
                    />
                    <path
                      id="Red"
                      d="M4.43071 2.44426C4.96024 2.43383 5.46921 2.63724 5.84965 3.00757L6.90871 1.93311C6.23523 1.29678 5.35097 0.947315 4.43071 0.957747C3.03234 0.957747 1.75221 1.76098 1.125 3.02843L2.35372 3.99857C2.64676 3.10667 3.46419 2.44426 4.43071 2.44426Z"
                      fill="#EA4335"
                    />
                  </g>
                </g>
              </svg>
              <svg
                width="33"
                height="22"
                viewBox="0 0 33 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="mr-[6.03px] cursor-pointer"
              >
                <g id="Payment method icon">
                  <rect
                    x="1.05993"
                    y="0.270864"
                    width="30.8785"
                    height="21.1274"
                    rx="2.97951"
                    fill="white"
                  />
                  <path
                    id="ApplePay"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.46034 7.53278C9.19368 7.8505 8.76702 8.1011 8.34036 8.0653C8.28703 7.6357 8.49591 7.17926 8.74035 6.89734C9.00702 6.57067 9.47367 6.33797 9.85144 6.32007C9.89589 6.76756 9.72256 7.20611 9.46034 7.53278ZM9.84671 8.15033C9.47083 8.12855 9.12786 8.26415 8.85083 8.37368C8.67256 8.44416 8.52159 8.50385 8.40674 8.50385C8.27785 8.50385 8.12065 8.44097 7.94415 8.37037C7.71288 8.27787 7.44848 8.1721 7.1712 8.17718C6.53566 8.18613 5.94456 8.5486 5.62012 9.12587C4.95347 10.2804 5.44679 11.9898 6.09122 12.9296C6.40677 13.395 6.78455 13.9051 7.28231 13.8872C7.5013 13.8789 7.65883 13.8116 7.82185 13.7419L7.82186 13.7419C8.00954 13.6617 8.20452 13.5784 8.50896 13.5784C8.80284 13.5784 8.98929 13.6596 9.16827 13.7375C9.33845 13.8115 9.50188 13.8826 9.74449 13.8783C10.26 13.8693 10.5845 13.4129 10.9 12.9475C11.2406 12.448 11.3902 11.9605 11.4129 11.8865L11.4156 11.878C11.415 11.8774 11.4108 11.8755 11.4034 11.8721L11.4034 11.8721C11.2896 11.8196 10.4195 11.4185 10.4111 10.3431C10.4028 9.44036 11.1013 8.983 11.2112 8.911L11.2112 8.91099L11.2113 8.91097C11.2179 8.9066 11.2224 8.90366 11.2245 8.90212C10.78 8.23983 10.0867 8.16823 9.84671 8.15033ZM13.416 13.829V6.8526H16.0159C17.3581 6.8526 18.2959 7.78339 18.2959 9.14378C18.2959 10.5042 17.3403 11.4439 15.9804 11.4439H14.4915V13.829H13.416ZM14.491 7.76545H15.7309C16.6642 7.76545 17.1976 8.26664 17.1976 9.14821C17.1976 10.0298 16.6642 10.5354 15.7265 10.5354H14.491V7.76545ZM21.8468 12.9922C21.5623 13.5382 20.9357 13.8828 20.2601 13.8828C19.2601 13.8828 18.5624 13.2831 18.5624 12.3792C18.5624 11.4842 19.2379 10.9696 20.4868 10.8935L21.829 10.8129V10.4281C21.829 9.85979 21.4601 9.55102 20.8023 9.55102C20.2601 9.55102 19.8646 9.83294 19.7846 10.2625H18.8157C18.8468 9.35859 19.6913 8.70078 20.8335 8.70078C22.0645 8.70078 22.8645 9.34964 22.8645 10.3565V13.8291H21.869V12.9922H21.8468ZM20.5487 13.0549C19.9754 13.0549 19.6109 12.7774 19.6109 12.3523C19.6109 11.9138 19.962 11.6587 20.6331 11.6184L21.8287 11.5423V11.9361C21.8287 12.5895 21.2776 13.0549 20.5487 13.0549ZM26.1668 14.102C25.7357 15.3237 25.2424 15.7264 24.1935 15.7264C24.1135 15.7264 23.8468 15.7175 23.7846 15.6996V14.8628C23.8513 14.8717 24.0157 14.8807 24.1002 14.8807C24.5757 14.8807 24.8424 14.6793 25.0068 14.1557L25.1046 13.847L23.2824 8.7679H24.4068L25.6735 12.8893H25.6957L26.9623 8.7679H28.0557L26.1668 14.102Z"
                    fill="black"
                  />
                  <rect
                    x="1.05993"
                    y="0.270864"
                    width="30.8785"
                    height="21.1274"
                    rx="2.97951"
                    stroke="#F2F4F7"
                    stroke-width="0.541728"
                  />
                </g>
              </svg>
              <svg
                width="29"
                height="14"
                viewBox="0 0 29 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="bg-[white] w-[31.6px] h-[21.67px] cursor-pointer rounded-md p-1 mr-[6.03px]"
              >
                <g id="Discover">
                  <path
                    id="Stripe"
                    d="M17.8613 13.4582L28.1542 10.3433V11.833C28.1542 12.7306 27.4265 13.4582 26.529 13.4582H17.8613Z"
                    fill="#FD6020"
                  />
                  <path
                    id="DISC-VER"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.7767 0.225811C25.7204 0.225811 26.2395 0.662392 26.2395 1.48705C26.2867 2.11766 25.862 2.65126 25.2957 2.74828L26.5698 4.54311H25.5789L24.4935 2.79679H24.3992V4.54311H23.597V0.225811H24.7767ZM24.399 2.2147H24.6349C25.154 2.2147 25.3899 1.97216 25.3899 1.53557C25.3899 1.1475 25.154 0.904955 24.6349 0.904955H24.399V2.2147ZM20.8118 4.54309H23.0769V3.81545H21.6141V2.65124H23.0297V1.9236H21.6141V0.953421H23.0769V0.225786H20.8118V4.54309ZM18.453 3.13633L17.3676 0.225786H16.5182L18.2642 4.64011H18.6889L20.4349 0.225786H19.5855L18.453 3.13633ZM8.87372 2.40874C8.87372 3.62147 9.8175 4.64016 10.9972 4.64016C11.3747 4.64016 11.7051 4.54314 12.0354 4.39761V3.42743C11.7994 3.71849 11.4691 3.91252 11.0916 3.91252C10.3366 3.91252 9.72312 3.33041 9.72312 2.55427V2.45725C9.67593 1.68111 10.2894 1.00198 11.0444 0.953473C11.4219 0.953473 11.7994 1.14751 12.0354 1.43856V0.468383C11.7522 0.274347 11.3747 0.225838 11.0444 0.225838C9.8175 0.12882 8.87372 1.14751 8.87372 2.40874ZM7.41082 1.87512C6.93893 1.68109 6.79736 1.58407 6.79736 1.34152C6.84455 1.05047 7.08049 0.807923 7.36363 0.856432C7.59957 0.856432 7.83552 1.00196 8.02427 1.196L8.44897 0.613887C8.11865 0.322833 7.69395 0.128797 7.26925 0.128797C6.60861 0.0802875 6.04234 0.613887 5.99515 1.29301V1.34152C5.99515 1.92363 6.2311 2.26319 6.98612 2.50574C7.17487 2.55425 7.36363 2.65127 7.55238 2.74828C7.69395 2.8453 7.78833 2.99083 7.78833 3.18487C7.78833 3.52443 7.50519 3.81548 7.22206 3.81548H7.17487C6.79736 3.81548 6.46704 3.57294 6.32547 3.23337L5.8064 3.76697C6.08953 4.30057 6.6558 4.59163 7.22206 4.59163C7.97708 4.64014 8.59054 4.05803 8.63773 3.28188V3.13636C8.59054 2.55425 8.35459 2.26319 7.41082 1.87512ZM4.67321 4.54309H5.47542V0.225786H4.67321V4.54309ZM0.945312 0.225821H2.12503H2.36098C3.49351 0.27433 4.39009 1.24451 4.34291 2.40873C4.34291 3.03934 4.05977 3.62145 3.58788 4.05803C3.16319 4.3976 2.64411 4.59163 2.12503 4.54312H0.945312V0.225821ZM1.98327 3.81551C2.36078 3.86401 2.78548 3.71849 3.06861 3.47594C3.35174 3.18489 3.49331 2.79682 3.49331 2.36024C3.49331 1.97216 3.35174 1.58409 3.06861 1.29304C2.78548 1.05049 2.36078 0.904966 1.98327 0.953475H1.74732V3.81551H1.98327Z"
                    fill="black"
                  />
                  <path
                    id="O"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.4422 0.125732C13.2624 0.125732 12.2715 1.09591 12.2715 2.35715C12.2715 3.56987 13.2153 4.58856 14.4422 4.63707C15.6691 4.68558 16.6129 3.66689 16.66 2.40566C16.6129 1.14442 15.6691 0.125732 14.4422 0.125732V0.125732Z"
                    fill="#FD6020"
                  />
                </g>
              </svg>
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="bg-[white] w-[31.6px] h-[21.67px] cursor-pointer rounded-md p-1 mr-[6.03px]"
              >
                <g id="Ideal">
                  <path
                    id="Union"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.0292969 0.474609H7.33424C12.2981 0.474609 14.2057 3.26717 14.2057 6.79697C14.2057 11.0193 11.5395 13.1417 7.33424 13.1417H0.0292969V0.474609ZM0.723522 1.23422V12.4268H7.33482C11.3233 12.4268 13.4909 10.5055 13.4909 6.81934C13.4909 3.02146 11.1499 1.23422 7.33482 1.23422H0.723522ZM2.67472 7.02038C3.40498 7.02038 3.99698 6.41024 3.99698 5.65761C3.99698 4.90497 3.40498 4.29484 2.67472 4.29484C1.94446 4.29484 1.35246 4.90497 1.35246 5.65761C1.35246 6.41024 1.94446 7.02038 2.67472 7.02038ZM1.61274 7.60122H3.73703V11.4885H1.61274V7.60122Z"
                    fill="black"
                  />
                  <path
                    id="Shape"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.083 4.40654H11.69V6.28314H12.5787C12.3403 2.86505 9.71742 2.10547 7.33301 2.10547H4.79688V4.40654H5.16537C5.85902 4.40654 6.27087 4.87569 6.27087 5.65761C6.27087 6.43952 5.85902 6.90867 5.18705 6.90867H4.79688V11.4885H7.33301C11.2131 11.4885 12.5353 9.63421 12.6004 6.90867H11.083V4.40654ZM8.15631 6.28316V6.90869H6.63896V4.40656H8.11296V5.03209H7.2459V5.32252H8.0696V5.94805H7.26758V6.28316H8.15631ZM8.41651 6.90869L9.15351 4.40656H10.0206L10.7576 6.90869H10.1289L9.99889 6.43954H9.19686L9.0668 6.90869H8.41651ZM9.37766 5.79161H9.37088V5.81395L9.37766 5.79161ZM9.37766 5.79161H9.80441L9.60932 5.09906H9.58765L9.37766 5.79161ZM4.79688 6.28314V5.03207H5.16537C5.40381 5.03207 5.66393 5.09909 5.66393 5.6576C5.66393 6.21612 5.42549 6.28314 5.16537 6.28314H4.79688Z"
                    fill="#D50072"
                  />
                </g>
              </svg>
              <svg
                width="19"
                height="15"
                viewBox="0 0 19 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="bg-[white] w-[31.6px] h-[21.67px] cursor-pointer rounded-md p-1 mr-[6.03px]"
              >
                <g id="JCB">
                  <path
                    id="Vector"
                    d="M13.9806 7.79332C14.4603 7.80374 14.9427 7.77214 15.4204 7.80974C15.9042 7.9 16.0209 8.63245 15.591 8.87233C15.2977 9.03036 14.9493 8.93119 14.6314 8.95906H13.9806V7.79332ZM15.6978 6.47385C15.8043 6.85001 15.4417 7.18775 15.0794 7.13595H13.9806C13.9883 6.78122 13.9656 6.39619 13.9918 6.06014C14.432 6.07254 14.8762 6.03485 15.3139 6.07984C15.5019 6.12709 15.6593 6.28167 15.6978 6.47385ZM18.3422 0.895534C18.3627 1.6139 18.3452 2.37024 18.3511 3.10318C18.3497 6.08304 18.3539 9.06283 18.3487 12.0429C18.3294 13.1596 17.3397 14.13 16.2307 14.1523C15.1205 14.1568 14.0103 14.153 12.9 14.1542V9.64931C14.1097 9.64307 15.32 9.66199 16.5292 9.63987C17.0901 9.60465 17.7046 9.23453 17.7307 8.61722C17.7967 7.99724 17.2122 7.56842 16.6573 7.50069C16.4439 7.49515 16.4502 7.43851 16.6573 7.41379C17.1866 7.2994 17.6022 6.75158 17.4465 6.20294C17.3138 5.6259 16.676 5.40256 16.1455 5.40367C15.0638 5.39632 13.9819 5.40264 12.9002 5.40051C12.9072 4.55949 12.8856 3.71757 12.9118 2.87717C12.9975 1.78055 14.0122 0.876201 15.1056 0.895821C16.1846 0.895657 17.2635 0.895657 18.3422 0.895616V0.895534Z"
                    fill="url(#paint0_linear_323_6733)"
                  />
                  <path
                    id="Vector_2"
                    d="M0.675256 2.99071C0.702881 1.8757 1.69684 0.913268 2.80446 0.896972C3.91048 0.893565 5.01666 0.89648 6.12267 0.895494C6.11964 4.62607 6.12867 8.35706 6.11812 12.0874C6.07551 13.1889 5.09239 14.133 3.99684 14.1525C2.88873 14.1565 1.78049 14.1531 0.672342 14.1542V9.49735C1.74872 9.75164 2.87748 9.85988 3.97558 9.69122C4.63196 9.5856 5.35013 9.26326 5.57236 8.58229C5.73589 7.99979 5.64382 7.38675 5.66816 6.78889V5.40047H3.7678C3.75926 6.31874 3.78528 7.23861 3.75404 8.15577C3.70282 8.71951 3.14453 9.07769 2.61285 9.05856C1.95347 9.06554 0.64681 8.58069 0.64681 8.58069C0.643526 6.86023 0.665938 4.70562 0.675256 2.99087V2.99071Z"
                    fill="url(#paint1_linear_323_6733)"
                  />
                  <path
                    id="Vector_3"
                    d="M6.83126 5.96046C6.73123 5.98168 6.81115 5.61972 6.78558 5.48242C6.79239 4.61427 6.77133 3.74518 6.79719 2.87764C6.88265 1.77639 7.90509 0.869778 9.00297 0.895556H12.2362C12.2331 4.62613 12.2421 8.35712 12.2316 12.0875C12.189 13.189 11.2058 14.133 10.1102 14.1525C9.00203 14.1567 7.89376 14.1532 6.78554 14.1543V9.05209C7.5424 9.6731 8.57108 9.76976 9.51401 9.77145C10.2249 9.7712 10.9316 9.6616 11.6219 9.49766V8.56293C10.8439 8.95067 9.9294 9.19695 9.06701 8.97419C8.46542 8.82445 8.02873 8.24305 8.03845 7.62221C7.96876 6.97658 8.34721 6.29495 8.98167 6.10301C9.7694 5.8564 10.6279 6.04501 11.3663 6.36563C11.5245 6.44847 11.6851 6.55121 11.6219 6.28678V5.55208C10.3869 5.25826 9.07267 5.15014 7.83199 5.46978C7.47287 5.57108 7.12298 5.72472 6.83126 5.96054V5.96046Z"
                    fill="url(#paint2_linear_323_6733)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_323_6733"
                    x1="12.8628"
                    y1="7.2414"
                    x2="18.3167"
                    y2="7.2414"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#58B03A" />
                    <stop offset="1" stop-color="#55B330" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_323_6733"
                    x1="0.556379"
                    y1="7.6518"
                    x2="6.03331"
                    y2="7.6518"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0F6EB6" />
                    <stop offset="1" stop-color="#006DBA" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_323_6733"
                    x1="6.77754"
                    y1="7.36987"
                    x2="12.2351"
                    y2="7.36987"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#DE0D3D" />
                    <stop offset="1" stop-color="#E30138" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                width="21"
                height="13"
                viewBox="0 0 21 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="bg-[white] w-[31.6px] h-[21.67px] cursor-pointer rounded-md p-1 mr-[6.03px]"
              >
                <g id="Maestro">
                  <path
                    id="Left"
                    d="M12.9661 6.5689C12.9661 9.91271 10.2865 12.6234 6.98111 12.6234C3.67568 12.6234 0.996094 9.91271 0.996094 6.5689C0.996094 3.22509 3.67568 0.514404 6.98111 0.514404C10.2865 0.514404 12.9661 3.22509 12.9661 6.5689Z"
                    fill="#ED0006"
                  />
                  <path
                    id="Right"
                    d="M20.7298 6.5689C20.7298 9.91271 18.0502 12.6234 14.7448 12.6234C11.4394 12.6234 8.75977 9.91271 8.75977 6.5689C8.75977 3.22509 11.4394 0.514404 14.7448 0.514404C18.0502 0.514404 20.7298 3.22509 20.7298 6.5689Z"
                    fill="#0099DF"
                  />
                  <path
                    id="Middle"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.8628 11.1773C12.1497 10.0667 12.9657 8.41426 12.9657 6.56897C12.9657 4.72368 12.1497 3.0712 10.8628 1.96069C9.57581 3.0712 8.75977 4.72368 8.75977 6.56897C8.75977 8.41426 9.57581 10.0667 10.8628 11.1773Z"
                    fill="#6C6BBD"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div class="w-8/12 p-3 flex flex-row flex-wrap justify-between max-md:w-full max-md:p-0 max-md:mt-5">
          <div class="flex flex-col w-3/12 max-md:w-full">
            <h3 class="font-primary text-white text-xl font-bold mb-5 max-md:mb-2">Services</h3>
            <router-link to="/"  class="font-primary text-white opacity-60 text-md mb-2">
              Boost Your Email
            </router-link>
            <router-link to="/"  class="font-primary text-white opacity-60 text-md mb-2">
              Protect Your Reputation
            </router-link>
            <router-link to="/"  class="font-primary text-white opacity-60 text-md mb-2">Domain Checker</router-link>
            <router-link to="/"  class="font-primary text-white opacity-60 text-md mb-2">Email Checker</router-link>
            <router-link to="/"  class="font-primary text-white opacity-60 text-md mb-2">
              Bulk Email Verifier
            </router-link>
            <router-link to="/"  class="font-primary text-white opacity-60 text-md mb-2">
              Real Time Verification Api
            </router-link>
          </div>
          <div class="w-2/12 flex flex-col max-md:w-full">
            <h3 class="font-primary text-white text-xl font-bold mb-5 max-md:mb-2 max-md:mt-5">Resources</h3>
            <router-link to="/"  class="font-primary text-white opacity-60 text-md mb-2">Products</router-link>
            <router-link to="/"  class="font-primary text-white opacity-60 text-md mb-2">Resources</router-link>
            <router-link to="/"  class="font-primary text-white opacity-60 text-md mb-2">Pricing</router-link>
            <router-link to="/"  class="font-primary text-white opacity-60 text-md mb-2">Contact Us</router-link>
          </div>
          <div class="w-2/12 flex flex-col max-md:w-full">
            <h3 class="font-primary text-white text-xl font-bold mb-5 max-md:mb-2 max-md:mt-5">Legal</h3>
            <router-link to="/policy"  class="font-primary text-white opacity-60 text-md mb-2">Privacy Policy</router-link>
            <router-link to="/"  class="font-primary text-white opacity-60 text-md mb-2">
              Terms of Services
            </router-link>
            <router-link to="/"  class="font-primary text-white opacity-60 text-md mb-2">Anti-Spam</router-link>
            <router-link to="/gdpr"  class="font-primary text-white opacity-60 text-md mb-2">GDPR</router-link>
          </div>
          <div class="w-2/12 flex flex-col max-md:w-full">
            <h3 class="font-primary text-white text-xl font-bold mb-5 max-md:mb-2 max-md:mt-5">Social</h3>
            <router-link to="/"  class="font-primary text-white opacity-60 text-md mb-2">Facebook</router-link>
            <router-link to="/"  class="font-primary text-white opacity-60 text-md mb-2">Twitter</router-link>
            <router-link to="/"  class="font-primary text-white opacity-60 text-md mb-2">Youtube</router-link>
            <router-link to="/"  class="font-primary text-white opacity-60 text-md mb-2">Github</router-link>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-row justify-center">
        <p class="font-primary text-white opacity-60 text-md mb-2 mt-14 max-xl:mb-0 max-lg:mt-0">
          © 2023 Clarify All rights reserved.
        </p>
      </div>
    </div>
  </div>
</template>
