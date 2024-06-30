// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();

  return (
<svg width="180" height="34" viewBox="0 0 180 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-outside-1_4_43" maskUnits="userSpaceOnUse" x="2" y="0" width="34" height="34" fill="black">
<rect fill="white" x="2" width="34" height="34"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35 17C35 25.8366 27.8366 33 19 33L19 30.2128C19.1156 30.2158 19.2315 30.2174 19.3478 30.2174C26.4555 30.2174 32.2174 24.4555 32.2174 17.3478C32.2174 10.2402 26.4555 4.47826 19.3478 4.47826C12.3565 4.47826 6.66719 10.0531 6.48287 17H3C3 8.16344 10.1634 1 19 1C27.8366 1 35 8.16344 35 17Z"/>
</mask>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35 17C35 25.8366 27.8366 33 19 33L19 30.2128C19.1156 30.2158 19.2315 30.2174 19.3478 30.2174C26.4555 30.2174 32.2174 24.4555 32.2174 17.3478C32.2174 10.2402 26.4555 4.47826 19.3478 4.47826C12.3565 4.47826 6.66719 10.0531 6.48287 17H3C3 8.16344 10.1634 1 19 1C27.8366 1 35 8.16344 35 17Z" fill="url(#paint0_linear_4_43)"/>
<path d="M19 33L18 33L18 34H19V33ZM19 30.2128L19.0265 29.2131L18 29.1859L18 30.2128L19 30.2128ZM6.48287 17V18H7.45668L7.48251 17.0265L6.48287 17ZM3 17H2V18H3V17ZM19 34C28.3888 34 36 26.3888 36 17H34C34 25.2843 27.2843 32 19 32V34ZM18 30.2128L18 33L20 33L20 30.2128L18 30.2128ZM18.9735 31.2124C19.0979 31.2157 19.2227 31.2174 19.3478 31.2174V29.2174C19.2404 29.2174 19.1333 29.216 19.0265 29.2131L18.9735 31.2124ZM19.3478 31.2174C27.0078 31.2174 33.2174 25.0078 33.2174 17.3478H31.2174C31.2174 23.9032 25.9032 29.2174 19.3478 29.2174V31.2174ZM33.2174 17.3478C33.2174 9.68788 27.0078 3.47826 19.3478 3.47826V5.47826C25.9032 5.47826 31.2174 10.7924 31.2174 17.3478H33.2174ZM19.3478 3.47826C11.8131 3.47826 5.68188 9.48629 5.48322 16.9735L7.48251 17.0265C7.6525 10.62 12.8999 5.47826 19.3478 5.47826V3.47826ZM3 18H6.48287V16H3V18ZM19 0C9.61116 0 2 7.61116 2 17H4C4 8.71573 10.7157 2 19 2V0ZM36 17C36 7.61116 28.3888 0 19 0V2C27.2843 2 34 8.71573 34 17H36Z" fill="white" mask="url(#path-1-outside-1_4_43)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.87474 17C7.8713 17.1155 7.86957 17.2315 7.86957 17.3478C7.86957 23.6871 13.0086 28.8261 19.3478 28.8261C25.6871 28.8261 30.8261 23.6871 30.8261 17.3478C30.8261 11.0086 25.6871 5.86956 19.3478 5.86956C19.2315 5.86956 19.1155 5.8713 19 5.87473L19 8.65217C23.6104 8.65217 27.3478 12.3896 27.3478 17C27.3478 21.6104 23.6104 25.3478 19 25.3478C14.3896 25.3478 10.6522 21.6104 10.6522 17L7.87474 17Z" fill="url(#paint1_linear_4_43)"/>
<mask id="path-4-outside-2_4_43" maskUnits="userSpaceOnUse" x="11.0435" y="9.04348" width="16" height="16" fill="black">
<rect fill="white" x="11.0435" y="9.04348" width="16" height="16"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 10.0435C15.158 10.0435 12.0435 13.158 12.0435 17C12.0435 20.842 15.158 23.9565 19 23.9565C22.842 23.9565 25.9565 20.842 25.9565 17L23.1583 17C23.1686 17.1146 23.1739 17.2306 23.1739 17.3478C23.1739 19.4609 21.4609 21.1739 19.3478 21.1739C17.2347 21.1739 15.5217 19.4609 15.5217 17.3478C15.5217 15.352 17.0499 13.7131 19 13.5373V10.0435Z"/>
</mask>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 10.0435C15.158 10.0435 12.0435 13.158 12.0435 17C12.0435 20.842 15.158 23.9565 19 23.9565C22.842 23.9565 25.9565 20.842 25.9565 17L23.1583 17C23.1686 17.1146 23.1739 17.2306 23.1739 17.3478C23.1739 19.4609 21.4609 21.1739 19.3478 21.1739C17.2347 21.1739 15.5217 19.4609 15.5217 17.3478C15.5217 15.352 17.0499 13.7131 19 13.5373V10.0435Z" fill="url(#paint2_linear_4_43)"/>
<path d="M19 10.0435H20V9.04348L19 9.04348L19 10.0435ZM25.9565 17H26.9565V16L25.9565 16L25.9565 17ZM23.1583 17L23.1583 16L22.0642 16L22.1624 17.0897L23.1583 17ZM19 13.5373L19.0898 14.5333L20 14.4513V13.5373H19ZM19 9.04348C14.6057 9.04348 11.0435 12.6057 11.0435 17H13.0435C13.0435 13.7103 15.7103 11.0435 19 11.0435L19 9.04348ZM11.0435 17C11.0435 21.3943 14.6057 24.9565 19 24.9565V22.9565C15.7103 22.9565 13.0435 20.2897 13.0435 17H11.0435ZM19 24.9565C23.3943 24.9565 26.9565 21.3943 26.9565 17H24.9565C24.9565 20.2897 22.2897 22.9565 19 22.9565V24.9565ZM25.9565 16L23.1583 16L23.1583 18L25.9565 18L25.9565 16ZM24.1739 17.3478C24.1739 17.2006 24.1673 17.0546 24.1543 16.9102L22.1624 17.0897C22.17 17.1745 22.1739 17.2606 22.1739 17.3478H24.1739ZM19.3478 22.1739C22.0132 22.1739 24.1739 20.0132 24.1739 17.3478H22.1739C22.1739 18.9086 20.9086 20.1739 19.3478 20.1739V22.1739ZM14.5217 17.3478C14.5217 20.0132 16.6825 22.1739 19.3478 22.1739V20.1739C17.787 20.1739 16.5217 18.9086 16.5217 17.3478H14.5217ZM18.9102 12.5414C16.4494 12.7631 14.5217 14.8298 14.5217 17.3478H16.5217C16.5217 15.8742 17.6504 14.663 19.0898 14.5333L18.9102 12.5414ZM20 13.5373V10.0435H18V13.5373H20Z" fill="white" mask="url(#path-4-outside-2_4_43)"/>
<path d="M43.532 24H43.488C42.036 24 41.1413 23.7507 40.804 23.252C40.6427 23.0173 40.5107 22.79 40.408 22.57C40.32 22.35 40.2613 22.0053 40.232 21.536C40.1587 20.6853 40.122 19.7393 40.122 18.698C40.122 17.6567 40.1293 16.9087 40.144 16.454C40.1587 15.9847 40.2027 15.5153 40.276 15.046C40.364 14.562 40.474 14.2173 40.606 14.012C40.738 13.792 40.936 13.594 41.2 13.418C41.464 13.242 41.772 13.132 42.124 13.088C42.476 13.0293 42.9307 13 43.488 13H43.532V24ZM46.084 20.524C47.0667 20.524 47.8147 20.524 48.328 20.524C48.8413 20.524 49.1053 20.5313 49.12 20.546C49.1347 20.546 49.1567 20.5533 49.186 20.568C49.23 20.568 49.2593 20.5753 49.274 20.59C49.2887 20.6047 49.3033 20.6267 49.318 20.656C49.3327 20.6707 49.34 20.7 49.34 20.744C49.3693 20.8467 49.384 20.9273 49.384 20.986V21.646C49.384 23.2153 48.5847 24 46.986 24H44.214V22.35H45.402C45.71 22.35 45.9007 22.306 45.974 22.218C46.0473 22.1153 46.084 21.9393 46.084 21.69V20.524ZM44.214 13H46.986C48.5847 13 49.384 13.7847 49.384 15.354V16.85C48.4013 16.85 47.6533 16.85 47.14 16.85C46.6267 16.85 46.3627 16.85 46.348 16.85C46.3333 16.8353 46.304 16.828 46.26 16.828C46.2307 16.8133 46.2087 16.7987 46.194 16.784C46.1793 16.7693 46.1647 16.7547 46.15 16.74C46.1353 16.7107 46.128 16.6813 46.128 16.652C46.0987 16.5347 46.084 16.4467 46.084 16.388V15.31C46.084 15.0607 46.0473 14.892 45.974 14.804C45.9007 14.7013 45.71 14.65 45.402 14.65H44.214V13ZM55.5143 13H57.6483C58.2056 13 58.6603 13.0293 59.0123 13.088C59.3643 13.132 59.6723 13.242 59.9363 13.418C60.2003 13.594 60.3983 13.792 60.5303 14.012C60.6623 14.2173 60.7649 14.5547 60.8383 15.024C60.9556 15.684 61.0143 16.608 61.0143 17.796C61.0143 18.984 61.0069 19.7907 60.9923 20.216C60.9776 20.6267 60.9483 21.0667 60.9043 21.536C60.8749 22.0053 60.8089 22.35 60.7063 22.57C60.6183 22.79 60.4936 23.0173 60.3323 23.252C60.1856 23.472 59.9876 23.626 59.7383 23.714C59.1956 23.9047 58.4989 24 57.6483 24H57.6043V15.706C57.6043 15.6767 57.6043 15.5887 57.6043 15.442C57.6043 15.2953 57.5969 15.1707 57.5823 15.068C57.5089 14.7893 57.2156 14.65 56.7023 14.65H55.5143V13ZM54.8543 13V21.294C54.8543 21.3233 54.8543 21.4113 54.8543 21.558C54.8543 21.7047 54.8689 21.8293 54.8983 21.932C54.9569 22.2107 55.2429 22.35 55.7563 22.35H56.9443V24H54.8103C54.2529 24 53.7983 23.978 53.4463 23.934C53.0943 23.8753 52.7863 23.758 52.5223 23.582C52.2583 23.406 52.0603 23.2153 51.9283 23.01C51.7963 22.79 51.6863 22.4453 51.5983 21.976C51.4956 21.316 51.4443 20.392 51.4443 19.204C51.4443 18.016 51.4516 17.2167 51.4663 16.806C51.4809 16.3807 51.5029 15.9333 51.5323 15.464C51.5763 14.9947 51.6423 14.65 51.7303 14.43C51.8329 14.21 51.9576 13.99 52.1043 13.77C52.2656 13.5353 52.4709 13.374 52.7203 13.286C53.2629 13.0953 53.9596 13 54.8103 13H54.8543ZM73.2267 13H76.2187C77.8173 13 78.6167 13.7847 78.6167 15.354V24H76.1087C75.874 24 75.6833 23.9193 75.5367 23.758C75.39 23.5967 75.3167 23.384 75.3167 23.12V15.31C75.3167 15.0753 75.258 14.9067 75.1407 14.804C75.038 14.7013 74.796 14.65 74.4147 14.65H73.2267V13ZM63.4147 13H64.7567C65.402 13 65.886 13.1613 66.2087 13.484C66.546 13.792 66.7147 14.1953 66.7147 14.694V24H64.2067C63.972 24 63.7813 23.9193 63.6347 23.758C63.488 23.5967 63.4147 23.384 63.4147 23.12V13ZM67.2647 13H70.2567C71.8553 13 72.6547 13.7847 72.6547 15.354V24H70.1467C69.912 24 69.7213 23.9193 69.5747 23.758C69.428 23.5967 69.3547 23.384 69.3547 23.12V15.31C69.3547 15.0753 69.296 14.9067 69.1787 14.804C69.076 14.7013 68.834 14.65 68.4527 14.65H67.2647V13ZM86.4638 14.65H85.2758C84.8945 14.65 84.6451 14.7013 84.5278 14.804C84.4251 14.9067 84.3738 15.0753 84.3738 15.31V21.712C84.3738 21.932 84.4251 22.0933 84.5278 22.196C84.6451 22.2987 84.8945 22.35 85.2758 22.35H86.4638V24H84.3298C82.8778 24 81.9831 23.7507 81.6458 23.252C81.4845 23.0173 81.3525 22.79 81.2498 22.57C81.1618 22.35 81.1031 22.0053 81.0738 21.536C81.0005 20.6853 80.9638 19.7393 80.9638 18.698C80.9638 17.6567 80.9711 16.9087 80.9858 16.454C81.0005 15.9847 81.0445 15.5153 81.1178 15.046C81.2058 14.562 81.3158 14.2173 81.4478 14.012C81.5798 13.792 81.7778 13.594 82.0418 13.418C82.3058 13.242 82.6138 13.132 82.9658 13.088C83.3178 13.0293 83.7725 13 84.3298 13H86.4638V14.65ZM87.1238 8.094H88.4658C89.1111 8.094 89.5951 8.25533 89.9178 8.578C90.2551 8.886 90.4238 9.28933 90.4238 9.788V22.306C90.4238 22.8047 90.2551 23.2153 89.9178 23.538C89.5951 23.846 89.1111 24 88.4658 24H87.1238V8.094ZM96.2117 24H96.1677C94.7157 24 93.821 23.7507 93.4837 23.252C93.3224 23.0173 93.1904 22.79 93.0877 22.57C92.9997 22.35 92.941 22.0053 92.9117 21.536C92.8384 20.6853 92.8017 19.7393 92.8017 18.698C92.8017 17.6567 92.809 16.9087 92.8237 16.454C92.8384 15.9847 92.8824 15.5153 92.9557 15.046C93.0437 14.562 93.1537 14.2173 93.2857 14.012C93.4177 13.792 93.6157 13.594 93.8797 13.418C94.1437 13.242 94.4517 13.132 94.8037 13.088C95.1557 13.0293 95.6104 13 96.1677 13H96.2117V24ZM102.064 20.524V21.646C102.064 23.2153 101.264 24 99.6657 24H96.8937V22.35H98.0817C98.3897 22.35 98.5804 22.306 98.6537 22.218C98.727 22.1153 98.7637 21.9393 98.7637 21.69V20.986C98.7637 20.766 98.7857 20.6413 98.8297 20.612C98.8884 20.5827 98.925 20.568 98.9397 20.568C98.9544 20.5533 98.991 20.546 99.0497 20.546C99.123 20.5313 99.1744 20.524 99.2037 20.524C100.157 20.524 101.11 20.524 102.064 20.524ZM96.8937 13H99.4457C100.458 13 101.147 13.198 101.514 13.594C101.88 13.99 102.064 14.5767 102.064 15.354V17.29C102.064 18.61 101.345 19.27 99.9077 19.27H96.6737V17.62H97.8617C98.2137 17.62 98.4484 17.576 98.5657 17.488C98.6977 17.4 98.7637 17.2313 98.7637 16.982V15.31C98.7637 15.0607 98.727 14.892 98.6537 14.804C98.5804 14.7013 98.3897 14.65 98.0817 14.65H96.8937V13ZM113.119 13V20.568C113.119 22.2107 112.599 23.252 111.557 23.692C111.103 23.8973 110.531 24 109.841 24H109.049V22.35C109.563 22.35 109.819 21.9833 109.819 21.25V13.902C109.819 13.3007 110.083 13 110.611 13H113.119ZM104.319 13H106.827C107.355 13 107.619 13.3007 107.619 13.902V21.25C107.619 21.9833 107.876 22.35 108.389 22.35V24H107.597C106.219 24 105.309 23.6187 104.869 22.856C104.503 22.2547 104.319 21.492 104.319 20.568V13Z" fill="url(#paint3_linear_4_43)"/>
<path d="M121.188 23.824C121.188 23.912 121.144 23.9707 121.056 24H119.384C118.314 24 117.536 23.7873 117.052 23.362C116.568 22.9367 116.326 22.1887 116.326 21.118V14.694H115.204C114.838 14.694 114.654 14.474 114.654 14.034V13H116.326V8.094H117.668C118.314 8.094 118.798 8.25533 119.12 8.578C119.458 8.90067 119.626 9.31133 119.626 9.81V21.514C119.626 22.0567 119.934 22.328 120.55 22.328H121.012C121.13 22.328 121.188 22.3793 121.188 22.482V23.824ZM121.87 13V14.034C121.87 14.474 121.687 14.694 121.32 14.694H120.176V13H121.87ZM123.313 13.022H124.655C125.3 13.022 125.784 13.1833 126.107 13.506C126.444 13.814 126.613 14.2173 126.613 14.716V24H124.105C123.87 24 123.68 23.9193 123.533 23.758C123.386 23.5967 123.313 23.384 123.313 23.12V13.022ZM123.467 8.336C123.628 8.17467 124.098 8.094 124.875 8.094C125.652 8.094 126.122 8.17467 126.283 8.336C126.444 8.48267 126.525 8.92267 126.525 9.656C126.525 10.3893 126.437 10.8367 126.261 10.998C126.1 11.1593 125.638 11.24 124.875 11.24C124.112 11.24 123.643 11.1593 123.467 10.998C123.306 10.8367 123.225 10.3893 123.225 9.656C123.225 8.92267 123.306 8.48267 123.467 8.336ZM133.051 13H135.185C135.743 13 136.197 13.0293 136.549 13.088C136.901 13.132 137.209 13.242 137.473 13.418C137.737 13.594 137.935 13.792 138.067 14.012C138.199 14.2173 138.302 14.5547 138.375 15.024C138.493 15.684 138.551 16.608 138.551 17.796C138.551 18.984 138.544 19.7907 138.529 20.216C138.515 20.6267 138.485 21.0667 138.441 21.536C138.412 22.0053 138.346 22.35 138.243 22.57C138.155 22.79 138.031 23.0173 137.869 23.252C137.723 23.472 137.525 23.626 137.275 23.714C136.733 23.9047 136.036 24 135.185 24H135.141V15.706C135.141 15.6767 135.141 15.5887 135.141 15.442C135.141 15.2953 135.134 15.1707 135.119 15.068C135.046 14.7893 134.753 14.65 134.239 14.65H133.051V13ZM132.391 13V21.294C132.391 21.3233 132.391 21.4113 132.391 21.558C132.391 21.7047 132.406 21.8293 132.435 21.932C132.494 22.2107 132.78 22.35 133.293 22.35H134.481V24H132.347C131.79 24 131.335 23.978 130.983 23.934C130.631 23.8753 130.323 23.758 130.059 23.582C129.795 23.406 129.597 23.2153 129.465 23.01C129.333 22.79 129.223 22.4453 129.135 21.976C129.033 21.316 128.981 20.392 128.981 19.204C128.981 18.016 128.989 17.2167 129.003 16.806C129.018 16.3807 129.04 15.9333 129.069 15.464C129.113 14.9947 129.179 14.65 129.267 14.43C129.37 14.21 129.495 13.99 129.641 13.77C129.803 13.5353 130.008 13.374 130.257 13.286C130.8 13.0953 131.497 13 132.347 13H132.391ZM144.802 13H147.882C149.48 13 150.28 13.7847 150.28 15.354V24H147.772C147.537 24 147.346 23.9193 147.2 23.758C147.053 23.5967 146.98 23.384 146.98 23.12V15.31C146.98 15.0753 146.921 14.9067 146.804 14.804C146.701 14.7013 146.459 14.65 146.078 14.65H144.802V13ZM140.952 13H142.294C142.939 13 143.423 13.1613 143.746 13.484C144.083 13.792 144.252 14.1953 144.252 14.694V24H141.744C141.509 24 141.318 23.9193 141.172 23.758C141.025 23.5967 140.952 23.384 140.952 23.12V13Z" fill="#1E88E5"/>
<defs>
<linearGradient id="paint0_linear_4_43" x1="-1.86957" y1="6.56522" x2="19" y2="33" gradientUnits="userSpaceOnUse">
<stop stop-color="#B39DDB"/>
<stop offset="1" stop-color="#673AB7"/>
</linearGradient>
<linearGradient id="paint1_linear_4_43" x1="10.6522" y1="14.913" x2="31.8696" y2="12.1304" gradientUnits="userSpaceOnUse">
<stop stop-color="#90CAF9"/>
<stop offset="1" stop-color="#1E88E5"/>
</linearGradient>
<linearGradient id="paint2_linear_4_43" x1="18.3044" y1="22.913" x2="13.7826" y2="12.1304" gradientUnits="userSpaceOnUse">
<stop stop-color="#673AB7"/>
<stop offset="1" stop-color="#4527A0"/>
</linearGradient>
<linearGradient id="paint3_linear_4_43" x1="39" y1="13.5" x2="90" y2="13" gradientUnits="userSpaceOnUse">
<stop stop-color="#1E88E5"/>
<stop offset="1" stop-color="#4527A0"/>
</linearGradient>
</defs>
</svg>


  );
};

export default Logo;