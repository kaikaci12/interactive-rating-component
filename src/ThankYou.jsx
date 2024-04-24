import RateWindow from "./RateWindow";
import "./ThankYou.css";

function ThankWindow({ clickedButton }) {
  return (
    <div className="window-container">
      <div className="rating-results">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="162"
          height="108"
          viewBox="0 0 162 108"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M130.706 15.4741H130.733C131.03 15.483 131.277 15.2493 131.286 14.9522C131.295 14.6551 131.062 14.407 130.765 14.3981C130.201 14.3658 129.664 14.3389 129.127 14.3389C128.831 14.3389 128.59 14.5798 128.59 14.8769C128.59 15.174 128.831 15.4149 129.127 15.4149C129.632 15.4203 130.169 15.4418 130.706 15.4741ZM122.189 16.0766C121.931 16.0823 121.706 15.904 121.652 15.6516C121.622 15.511 121.649 15.3641 121.728 15.2438C121.806 15.1235 121.93 15.0398 122.071 15.0114C122.608 14.9038 123.145 14.8016 123.682 14.7209C123.874 14.6911 124.067 14.7661 124.188 14.9177C124.31 15.0692 124.342 15.2743 124.272 15.4556C124.202 15.637 124.04 15.767 123.848 15.7968C123.311 15.8775 122.812 15.9744 122.291 16.082C122.257 16.085 122.222 16.0832 122.189 16.0766ZM137.489 16.6737C137.541 16.6789 137.593 16.6789 137.645 16.6737L137.672 16.6899C137.864 16.7168 138.055 16.6391 138.174 16.4861C138.294 16.3331 138.322 16.128 138.25 15.9481C138.177 15.7682 138.014 15.6408 137.822 15.6139C137.285 15.4579 136.748 15.318 136.211 15.1889C135.914 15.1191 135.617 15.3034 135.548 15.6005C135.478 15.8976 135.662 16.195 135.959 16.2649C136.469 16.3832 136.984 16.5231 137.489 16.6737ZM115.597 18.1263C115.34 18.1256 115.119 17.9426 115.07 17.6896C115.022 17.4356 115.16 17.183 115.4 17.088C115.905 16.8835 116.41 16.6899 116.92 16.507C117.196 16.4157 117.495 16.561 117.594 16.8348C117.693 17.1087 117.556 17.4116 117.286 17.5183C116.791 17.6959 116.297 17.8842 115.803 18.0886C115.725 18.1204 115.64 18.1333 115.556 18.1263H115.597ZM143.832 19.2506C143.91 19.2967 143.999 19.3208 144.09 19.3206C144.336 19.3218 144.552 19.1549 144.613 18.9157C144.674 18.6765 144.564 18.4264 144.347 18.3092C143.875 18.0509 143.386 17.7981 142.887 17.5614C142.713 17.4787 142.508 17.4952 142.35 17.6045C142.192 17.7138 142.104 17.8994 142.119 18.0913C142.135 18.2833 142.251 18.4525 142.425 18.5351C142.908 18.7611 143.381 19.0032 143.832 19.2506ZM109.349 21.2142C109.158 21.2135 108.982 21.1111 108.886 20.9452C108.739 20.6895 108.826 20.3632 109.079 20.2136C109.552 19.9392 110.025 19.6756 110.497 19.4174C110.665 19.3213 110.871 19.3222 111.038 19.4198C111.206 19.5174 111.308 19.6968 111.307 19.8905C111.306 20.0842 111.202 20.2627 111.034 20.3588C110.808 20.4813 110.583 20.6114 110.359 20.741L110.358 20.7411C110.12 20.8791 109.881 21.0167 109.643 21.1443C109.54 21.2055 109.419 21.2301 109.3 21.2142H109.349ZM149.251 23.3338C149.351 23.4365 149.488 23.4946 149.632 23.4952H149.61C149.76 23.5034 149.906 23.4488 150.013 23.3446C150.221 23.1348 150.221 22.7959 150.013 22.5861C149.626 22.1933 149.224 21.8114 148.816 21.4509C148.593 21.2551 148.254 21.2768 148.058 21.4993C147.863 21.7223 147.884 22.0617 148.107 22.2579C148.511 22.6165 148.892 22.9752 149.251 23.3338ZM103.497 25.0553C103.326 25.0549 103.165 24.973 103.065 24.8348C102.98 24.72 102.944 24.5761 102.965 24.4348C102.986 24.2935 103.063 24.1664 103.177 24.0816C103.618 23.7588 104.058 23.4468 104.498 23.1348C104.656 23.0243 104.86 23.0062 105.034 23.0875C105.208 23.1687 105.326 23.3369 105.343 23.5286C105.36 23.7203 105.273 23.9065 105.116 24.0171L103.816 24.9478C103.719 25.021 103.6 25.0589 103.478 25.0553H103.497ZM152.462 27.4655C152.736 27.912 152.994 28.3746 153.241 28.8427C153.332 29.0198 153.514 29.1316 153.713 29.1332C153.903 29.1346 154.079 29.036 154.177 28.8738C154.275 28.7116 154.28 28.5097 154.191 28.3424C154.102 28.1841 154.015 28.0258 153.928 27.8683L153.927 27.8672L153.927 27.8666C153.748 27.5428 153.572 27.2222 153.38 26.9114C153.227 26.6578 152.898 26.576 152.645 26.7284C152.392 26.8818 152.31 27.2113 152.462 27.4655ZM98.0432 29.4183L98.0318 29.4182C98.1664 29.4151 98.2951 29.3615 98.3922 29.2677L98.3924 29.2676C98.8005 28.9179 99.2086 28.5683 99.6167 28.2294C99.8451 28.0377 99.8752 27.6969 99.6838 27.4682C99.4925 27.2394 99.1523 27.2093 98.9239 27.4009L97.6887 28.4769C97.5213 28.6248 97.4627 28.861 97.5414 29.0702C97.6189 29.2758 97.8132 29.4133 98.0318 29.4182L98.0217 29.4183H98.0432ZM92.4089 33.8291C92.4912 34.0304 92.6864 34.1623 92.9036 34.1632H92.8821C93.0403 34.1705 93.1936 34.1075 93.301 33.9911L93.4346 33.8608L93.5867 33.7123C93.8764 33.4292 94.1645 33.1476 94.4557 32.8721C94.6639 32.6623 94.6639 32.3234 94.4557 32.1136C94.3549 32.0117 94.2176 31.9544 94.0744 31.9544C93.9312 31.9544 93.7939 32.0117 93.6931 32.1136L92.5277 33.2433C92.3735 33.3965 92.3266 33.6277 92.4089 33.8291ZM156.125 35.6749C155.872 35.6823 155.648 35.512 155.588 35.2661C155.464 34.7281 155.33 34.2278 155.18 33.7328C155.14 33.5959 155.156 33.4486 155.224 33.3235C155.293 33.1984 155.408 33.1057 155.545 33.0658C155.828 32.9822 156.125 33.1431 156.211 33.4262L156.248 33.5606C156.385 34.0498 156.517 34.5202 156.635 35.0132C156.669 35.1524 156.646 35.2993 156.571 35.4215C156.497 35.5437 156.377 35.631 156.238 35.6642L156.125 35.6749ZM87.6674 39.0319C87.7665 39.1248 87.8969 39.1767 88.0326 39.1771H88.0111C88.1766 39.191 88.3392 39.1275 88.4515 39.005L89.5256 37.8322C89.7038 37.6137 89.6833 37.2945 89.4786 37.1007C89.2739 36.907 88.9545 36.9045 88.7469 37.0952C88.3763 37.4825 88.0058 37.8752 87.6406 38.2733C87.4396 38.4905 87.4516 38.8295 87.6674 39.0319ZM157.097 42.5933C156.812 42.5938 156.577 42.372 156.56 42.0876C156.527 41.5496 156.49 41.0116 156.442 40.4736C156.415 40.1765 156.634 39.914 156.93 39.8873C157.227 39.8605 157.489 40.0797 157.516 40.3768C157.564 40.9148 157.607 41.4528 157.634 41.9907C157.634 42.2757 157.413 42.5116 157.129 42.5287L157.097 42.5933ZM82.8713 44.0748C82.9577 44.2651 83.1463 44.388 83.3549 44.3901H83.3442C83.5022 44.393 83.6535 44.3261 83.7577 44.2072C84.1224 43.799 84.4763 43.3961 84.8302 42.9932L84.8308 42.9926L84.8318 42.9914C84.9686 42.8487 85.0162 42.6424 84.9558 42.4541C84.8954 42.2658 84.7366 42.1259 84.5425 42.0898C84.3484 42.0537 84.1501 42.1272 84.0263 42.2812C83.6557 42.6847 83.3012 43.0936 82.9522 43.5024C82.8165 43.6613 82.785 43.8845 82.8713 44.0748ZM156.925 49.5869H156.968C157.111 49.5855 157.248 49.5267 157.348 49.4236C157.448 49.3206 157.502 49.1818 157.5 49.0382C157.543 48.5002 157.58 47.9622 157.607 47.4243C157.622 47.129 157.397 46.8767 157.102 46.8594C156.955 46.852 156.812 46.9054 156.705 47.0071C156.598 47.1088 156.538 47.2499 156.538 47.3974C156.506 47.9353 156.474 48.4733 156.431 49.0113C156.409 49.3067 156.63 49.564 156.925 49.5869ZM78.8438 49.7483C78.7201 49.7473 78.6006 49.7036 78.5054 49.6246C78.2785 49.4366 78.2449 49.1007 78.4302 48.8714L79.456 47.6233C79.575 47.4724 79.7652 47.3966 79.9551 47.4244C80.1451 47.4521 80.3058 47.5793 80.3767 47.7579C80.4477 47.9365 80.4181 48.1395 80.2992 48.2904L79.2788 49.5331C79.1762 49.6701 79.0147 49.75 78.8438 49.7483ZM4.11914 54.0575C4.21063 54.1262 4.32164 54.1639 4.436 54.1651C4.60789 54.1655 4.7696 54.0835 4.87101 53.9445C5.17713 53.5303 5.50472 53.1106 5.84843 52.7072C6.03974 52.4799 6.01089 52.1402 5.78399 51.9486C5.55709 51.757 5.21806 51.7859 5.02675 52.0132C4.6723 52.4382 4.32859 52.8739 4.00636 53.3097C3.83321 53.5478 3.88349 53.8812 4.11914 54.0575ZM74.4615 55.2087C74.2551 55.2098 74.0663 55.0924 73.9759 54.9066C73.8854 54.7207 73.9092 54.4994 74.0372 54.3372L75.0415 53.0676C75.1591 52.9107 75.3527 52.8304 75.5466 52.8581C75.7405 52.8858 75.904 53.017 75.9732 53.2006C76.0425 53.3841 76.0065 53.5909 75.8793 53.7401L74.8804 55.0043C74.7814 55.1298 74.6318 55.2048 74.4722 55.2087H74.4615ZM155.921 56.516C155.954 56.5216 155.989 56.5216 156.023 56.516C156.279 56.5254 156.506 56.3519 156.565 56.1018C156.662 55.5638 156.753 55.0258 156.844 54.4878C156.876 54.2956 156.803 54.1011 156.653 53.9776C156.502 53.854 156.298 53.8202 156.116 53.8888C155.934 53.9574 155.802 54.1181 155.77 54.3103C155.686 54.8088 155.601 55.2796 155.512 55.7741L155.512 55.7769L155.511 55.781L155.51 55.7845L155.491 55.8919C155.439 56.1829 155.631 56.4616 155.921 56.516ZM1.24058 60.3786C1.18894 60.3862 1.13647 60.3862 1.08483 60.3786C0.801675 60.2909 0.643037 59.9899 0.730383 59.7062C0.886126 59.1682 1.07409 58.6571 1.26743 58.1407C1.33099 57.951 1.49438 57.8123 1.69159 57.7807C1.88881 57.749 2.08726 57.8296 2.2068 57.9899C2.32633 58.1502 2.3472 58.3637 2.26096 58.5442C2.06763 59.0337 1.8904 59.5286 1.72392 60.0182C1.64466 60.2121 1.46025 60.3422 1.25132 60.3517L1.24058 60.3786ZM69.8375 60.6476C69.9312 60.7205 70.0464 60.7602 70.1651 60.7606L70.1758 60.7337C70.3338 60.7366 70.4851 60.6697 70.5894 60.5508L71.5775 59.2758C71.7599 59.0396 71.7167 58.7 71.4809 58.5173C71.2451 58.3345 70.906 58.3779 70.7236 58.6141L69.7408 59.8945C69.5605 60.1293 69.6037 60.4661 69.8375 60.6476ZM154.412 63.3536C154.362 63.3589 154.311 63.3589 154.261 63.3536C154.124 63.3137 154.009 63.221 153.941 63.0959C153.872 62.9707 153.856 62.8235 153.896 62.6865C154.03 62.2131 154.175 61.6967 154.32 61.1426C154.356 61.004 154.445 60.8853 154.568 60.8126C154.691 60.74 154.837 60.7193 154.975 60.7552C155.114 60.7918 155.232 60.8822 155.304 61.0065C155.375 61.1307 155.394 61.2785 155.357 61.4169C155.212 61.9549 155.067 62.4929 154.927 62.9824C154.854 63.2056 154.646 63.3558 154.412 63.3536ZM65.4374 66.0139C65.5288 66.1982 65.7171 66.3141 65.9224 66.3125V66.291C66.0849 66.2873 66.2369 66.2101 66.336 66.0812L67.3295 64.8169C67.4933 64.5804 67.4421 64.2566 67.2134 64.0822C66.9847 63.9079 66.6596 63.9448 66.4756 64.166L65.4928 65.4463C65.3675 65.6094 65.346 65.8297 65.4374 66.0139ZM0.682049 67.2862C0.412488 67.2889 0.18273 67.0909 0.145002 66.8236C0.069816 66.2856 0.0214818 65.71 0 65.1612C0 64.8641 0.240444 64.6232 0.537046 64.6232C0.833649 64.6232 1.07409 64.8641 1.07409 65.1612C1.09193 65.6797 1.13675 66.1968 1.20835 66.7106C1.22819 66.8526 1.19057 66.9968 1.10384 67.1109C1.01712 67.2251 0.888474 67.2998 0.746494 67.3185L0.682049 67.2862ZM61.1721 71.558C61.2621 71.7418 61.4485 71.8585 61.6529 71.859V71.8375C61.8155 71.8423 61.9715 71.7731 62.0772 71.6492L63.0653 70.3742C63.197 70.2236 63.2343 70.0123 63.1622 69.8257C63.0901 69.639 62.9206 69.5079 62.7221 69.4852C62.5236 69.4626 62.3289 69.5522 62.2168 69.7179L61.2286 70.9928C61.104 71.1551 61.082 71.3742 61.1721 71.558ZM2.90005 73.8871C2.69615 73.8815 2.51304 73.7606 2.42745 73.5751C2.16967 73.0748 1.928 72.5745 1.71318 72.0903C1.6554 71.9598 1.6518 71.8116 1.70318 71.6784C1.75455 71.5452 1.85668 71.4379 1.98707 71.3802C2.11739 71.3223 2.26533 71.3187 2.3983 71.3702C2.53127 71.4216 2.63836 71.5239 2.69597 71.6546C2.90542 72.1172 3.13635 72.6014 3.38339 73.0802C3.44879 73.2078 3.46062 73.3563 3.41625 73.4926C3.37188 73.629 3.27499 73.742 3.14709 73.8064C3.07065 73.8457 2.98594 73.866 2.90005 73.8656V73.8871ZM56.9591 77.2172C57.0557 77.2974 57.1774 77.3412 57.3028 77.3409C57.4635 77.3399 57.6152 77.2668 57.7164 77.1419L58.7367 75.883C58.9208 75.6524 58.8848 75.3162 58.6562 75.1299C58.5452 75.0396 58.403 74.9974 58.2608 75.0125C58.1187 75.0277 57.9885 75.0989 57.899 75.2106C57.5606 75.6356 57.2223 76.0498 56.8839 76.464C56.6986 76.6933 56.7322 77.0292 56.9591 77.2172ZM6.72382 79.7241C6.55853 79.725 6.40203 79.6496 6.29955 79.5197C5.95584 79.084 5.62824 78.6482 5.31139 78.2124C5.22761 78.0963 5.19353 77.9515 5.21672 77.8101C5.23991 77.6687 5.31844 77.5425 5.43491 77.4593C5.67543 77.2881 6.00874 77.3434 6.1814 77.583C6.49289 78.008 6.80975 78.433 7.14271 78.8526C7.27008 79.0141 7.29434 79.2342 7.20523 79.4196C7.11612 79.605 6.92923 79.7232 6.72382 79.7241ZM52.3889 82.5216C52.4874 82.6113 52.6156 82.6611 52.7487 82.6615V82.6346C52.8999 82.6443 53.0481 82.5896 53.1568 82.4839L53.3871 82.2251C53.6634 81.9144 53.9455 81.5973 54.2309 81.2735C54.3677 81.1309 54.4153 80.9245 54.3549 80.7362C54.2945 80.5479 54.1358 80.408 53.9416 80.3719C53.7475 80.3358 53.5492 80.4093 53.4254 80.5634C53.0839 80.9514 52.7425 81.3296 52.4056 81.7028L52.3513 81.7631C52.1531 81.9831 52.1699 82.3223 52.3889 82.5216ZM11.4445 84.8725C11.3114 84.8722 11.1831 84.8223 11.0846 84.7327C10.6818 84.3615 10.2844 83.9849 9.90313 83.6083C9.69106 83.4003 9.68746 83.0595 9.89508 82.8471C10.1027 82.6346 10.4429 82.631 10.655 82.839C11.0309 83.2102 11.4176 83.576 11.8096 83.915C11.9157 84.0116 11.9788 84.1467 11.9848 84.2902C11.9909 84.4337 11.9394 84.5736 11.8419 84.6789C11.7433 84.7976 11.5985 84.8681 11.4445 84.8725ZM47.3621 87.3687C47.4631 87.4902 47.6124 87.5611 47.7703 87.5624C47.8999 87.5538 48.022 87.4983 48.114 87.4064L48.2375 87.3042C48.6027 86.9922 48.9679 86.664 49.3438 86.3197C49.5618 86.1177 49.575 85.7768 49.3733 85.5585C49.1717 85.3401 48.8314 85.3268 48.6134 85.5289C48.2536 85.8624 47.8938 86.1798 47.5393 86.4865L47.4212 86.6102C47.3129 86.7029 47.2459 86.835 47.2348 86.9772C47.2237 87.1195 47.2695 87.2603 47.3621 87.3687ZM16.9975 89.1064C16.8951 89.1077 16.7945 89.0797 16.7075 89.0257C16.251 88.7352 15.7945 88.4285 15.3488 88.1165C15.1059 87.9469 15.0459 87.6125 15.2145 87.3687C15.3838 87.1255 15.7177 87.0653 15.961 87.2342C16.396 87.5409 16.8364 87.8314 17.2821 88.1165C17.4811 88.2452 17.5724 88.4894 17.5069 88.7174C17.4413 88.9454 17.2344 89.1034 16.9975 89.1064ZM41.5083 91.0969C41.5983 91.281 41.785 91.3977 41.9895 91.3982H41.9702C42.0592 91.4019 42.1478 91.3834 42.2279 91.3444C42.7113 91.1023 43.2 90.8387 43.678 90.5643C43.9337 90.4166 44.0224 90.0898 43.8767 89.8327C43.8058 89.7081 43.6883 89.6171 43.5502 89.5797C43.412 89.5424 43.2647 89.5618 43.1409 89.6336C42.6844 89.8972 42.2172 90.1501 41.75 90.376C41.4846 90.5083 41.3765 90.831 41.5083 91.0969ZM23.2326 92.2266C23.1703 92.2266 23.1086 92.2156 23.05 92.1944C22.513 92.0061 22.0296 91.8016 21.5248 91.5864C21.3483 91.5105 21.2256 91.346 21.203 91.155C21.1804 90.9639 21.2612 90.7752 21.4151 90.66C21.569 90.5448 21.7726 90.5207 21.9491 90.5966C22.4324 90.8064 22.9319 91.0001 23.4206 91.183C23.6665 91.2724 23.8124 91.5263 23.7659 91.7842C23.7195 92.0421 23.4942 92.229 23.2326 92.2266ZM34.8846 93.3052C34.993 93.4645 35.178 93.5537 35.3699 93.5393L35.4665 93.5285C36.0036 93.4425 36.5406 93.3349 37.0777 93.2057C37.3648 93.1366 37.5423 92.8482 37.4751 92.5602C37.4431 92.421 37.3572 92.3003 37.2364 92.2246C37.1155 92.1489 36.9695 92.1245 36.8306 92.1567C36.3204 92.2804 35.7995 92.3826 35.2893 92.4633C35.0974 92.4778 34.9278 92.5936 34.8444 92.7673C34.7609 92.9409 34.7762 93.146 34.8846 93.3052ZM29.9564 93.7437H29.9994L30.0209 93.733C30.3175 93.7448 30.5675 93.5136 30.5794 93.2165C30.5913 92.9194 30.3605 92.6689 30.0638 92.657C29.5411 92.614 29.0202 92.5548 28.501 92.4795C28.3092 92.4516 28.117 92.5284 27.997 92.6809C27.877 92.8334 27.8473 93.0385 27.9191 93.2189C27.991 93.3993 28.1534 93.5276 28.3453 93.5554C28.8823 93.6361 29.4194 93.7007 29.9564 93.7437ZM9.27557 49.1296C9.04907 49.1287 8.8473 48.9854 8.77162 48.7712C8.69542 48.5555 8.7637 48.3152 8.94182 48.172C9.65692 47.5951 10.1447 47.2588 10.2557 47.1823C10.2689 47.1732 10.2768 47.1677 10.2791 47.166C10.5265 47.0086 10.8543 47.079 11.0155 47.3242C11.1767 47.5694 11.1119 47.8989 10.8698 48.0644C10.8698 48.0644 10.3704 48.398 9.6185 49.0059C9.52046 49.0873 9.39674 49.1311 9.26942 49.1296H9.27557Z"
            fill="#E6E6E6"
          />
          <path
            d="M119.847 100.221H58.146L70.3316 0.792786H125.357L131.104 8.39434L119.847 100.221Z"
            fill="#39475F"
          />
          <path
            d="M113.172 100.221H51.4653L63.6509 0.792786H125.358L113.172 100.221Z"
            fill="#61728D"
          />
          <path
            d="M110.132 81.3542H58.5757L67.3671 9.65857H118.924L110.132 81.3542Z"
            fill="#181F27"
          />
          <path
            d="M92.7427 50.0549L107.64 50.2325L107.35 52.5404L92.7427 52.2875V50.0549Z"
            fill="#1E252E"
          />
          <path
            d="M51.4653 100.221L58.8873 107.085L118.924 108L119.847 100.221H51.4653Z"
            fill="#39475F"
          />
          <path
            d="M99.0957 29.0579C99.0957 29.0579 101.668 29.2408 102.984 34.0879C104.3 38.935 103.849 52.4651 103.849 52.4651L92.7531 52.2875C92.7531 52.2875 87.2162 32.1512 99.0957 29.0579Z"
            fill="#2D394B"
          />
          <path
            d="M5.41982 32.8427L45.7775 8.08717e-06L66.9587 26.1178L26.6011 58.9605L5.41982 32.8427Z"
            fill="#FC7614"
          />
          <path
            d="M27.4892 21.9312L45.5588 7.22628L49.0569 11.5396L30.9872 26.2445L27.4892 21.9312Z"
            fill="white"
          />
          <path
            opacity="0.46"
            d="M24.8647 49.0803C23.8999 47.8906 24.0807 46.1444 25.2687 45.1775L30.6068 40.8335C31.7977 39.8643 33.549 40.0456 34.5161 41.2381C35.4809 42.4278 35.3002 44.174 34.1121 45.1408L28.774 49.4849C27.5831 50.4541 25.8318 50.2728 24.8647 49.0803Z"
            fill="white"
          />
          <path
            opacity="0.46"
            d="M36.9229 39.2709C35.9581 38.0813 36.1389 36.335 37.3269 35.3682L54.2154 21.6245C55.4063 20.6554 57.1576 20.8367 58.1247 22.0292C59.0895 23.2189 58.9088 24.9651 57.7207 25.9319L40.8322 39.6756C39.6414 40.6447 37.89 40.4634 36.9229 39.2709Z"
            fill="white"
          />
          <ellipse
            opacity="0.3"
            cx="17.9376"
            cy="33.636"
            rx="3.6734"
            ry="3.67973"
            fill="white"
          />
          <ellipse
            opacity="0.3"
            cx="21.6646"
            cy="30.2845"
            rx="3.6734"
            ry="3.67973"
            fill="white"
          />
          <path
            d="M99.0959 29.0579C99.0959 29.0579 93.2582 31.1614 95.2936 47.6395C96.7866 59.7116 91.7437 75.6948 84.2895 75.8884C76.8353 76.0821 63.0869 75.4258 63.0869 75.4258C63.0869 75.4258 70.2457 56.8657 68.7635 41.2806C68.5357 39.0987 68.7962 36.8934 69.5261 34.825C70.3961 32.4525 72.0126 29.9832 75.0201 29.5797C81.0243 28.762 99.0959 29.0579 99.0959 29.0579Z"
            fill="#BAD6FA"
          />
          <path
            d="M58.9568 76.6308L85.299 76.0928C85.299 76.0928 81.2818 72.1011 81.0294 61.9388L44.7949 62.4768C45.416 65.0988 46.3708 67.6301 47.6359 70.0084C49.8673 74.1716 54.2407 76.7299 58.9568 76.6308Z"
            fill="#546F8D"
          />
          <path
            d="M78.2099 14.8339L77.2915 20.8753H103.913L104.718 14.8339H78.2099Z"
            fill="#2D394B"
          />
          <path
            opacity="0.48"
            d="M85.5408 86.1906C82.6676 83.6728 78.1242 84.1678 76.0941 87.4118C75.5818 88.1999 75.3042 89.1181 75.2939 90.0586C75.2939 94.0396 78.0383 96.6488 83.5215 95.5513C87.7051 94.712 89.3001 89.4776 85.5408 86.1906Z"
            fill="white"
          />
          <ellipse
            cx="147.188"
            cy="81.5425"
            rx="14.8117"
            ry="14.8373"
            fill="#FC7614"
          />
          <path
            d="M73.731 35.7502C73.5391 35.757 73.3582 35.6606 73.2565 35.4975C73.1547 35.3345 73.1476 35.1294 73.2377 34.9596C73.3278 34.7898 73.5015 34.681 73.6934 34.6743C73.8062 34.6743 85.0358 33.8458 91.0561 34.3838C91.3527 34.4105 91.5715 34.673 91.5448 34.9702C91.5181 35.2673 91.256 35.4865 90.9594 35.4597C85.0519 34.9217 73.8813 35.7341 73.7739 35.7448L73.731 35.7502Z"
            fill="white"
          />
          <path
            d="M72.8394 43.029C72.5428 43.0394 72.2939 42.807 72.2835 42.5099C72.2732 42.2128 72.5052 41.9635 72.8018 41.9531C72.9146 41.9531 84.1442 41.1246 90.1645 41.6626C90.4611 41.6893 90.6799 41.9519 90.6532 42.249C90.6265 42.5461 90.3644 42.7653 90.0678 42.7385C84.1603 42.2006 72.9951 43.0183 72.8823 43.0237L72.8394 43.029Z"
            fill="white"
          />
          <path
            d="M72.7377 50.5929C72.4411 50.6048 72.191 50.3736 72.1791 50.0765C72.1673 49.7794 72.3981 49.5289 72.6947 49.517C72.8075 49.517 84.0425 48.6885 90.0574 49.2265C90.2493 49.2438 90.4174 49.3623 90.4983 49.5374C90.5793 49.7125 90.5609 49.9176 90.45 50.0754C90.3391 50.2332 90.1526 50.3197 89.9608 50.3024C84.0532 49.7645 72.888 50.5822 72.7753 50.5876L72.7377 50.5929Z"
            fill="white"
          />
          <path
            d="M72.0235 58.1568C71.8316 58.1635 71.6507 58.0672 71.549 57.9041C71.4472 57.741 71.44 57.536 71.5302 57.3661C71.6203 57.1963 71.794 57.0876 71.9859 57.0808C72.0986 57.0808 83.3283 56.2524 89.3486 56.7957C89.5404 56.813 89.7085 56.9315 89.7895 57.1066C89.8705 57.2817 89.8521 57.4868 89.7412 57.6446C89.6303 57.8024 89.4438 57.889 89.2519 57.8717C83.3444 57.3337 72.1792 58.1514 72.0664 58.1568H72.0235Z"
            fill="white"
          />
        </svg>
        <div className="result-container">
          <span>You selected {clickedButton} out of 5</span>
        </div>
      </div>
      <div className="feedback-comment">
        <h2>Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}
export default ThankWindow;
