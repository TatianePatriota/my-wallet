import styled from "styled-components";

const StyledIconPath = styled.path`
  fill: ${({ theme, actived }) =>
    actived ? theme.colors.primary : theme.colors.grayDark};
`;

export function HomeIcon({ actived }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <StyledIconPath
        actived={actived}
        d="M12.514 3.47698C12.153 3.19639 11.6477 3.19639 11.2866 3.47698L4.13632 9.03458C3.89258 9.22403 3.75 9.51543 3.75 9.82413V20C3.75 20.5523 4.19772 21 4.75 21H8.35744C8.90972 21 9.35744 20.5523 9.35744 20V14.9581C9.35744 14.4058 9.80515 13.9581 10.3574 13.9581H13.4432C13.9955 13.9581 14.4432 14.4058 14.4432 14.9581V20C14.4432 20.5523 14.891 21 15.4432 21H19.0507C19.603 21 20.0507 20.5523 20.0507 20V9.82413C20.0507 9.51543 19.9081 9.22403 19.6643 9.03458L12.514 3.47698Z"
      />
    </svg>
  );
}

export function StatsIcon({ actived }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <StyledIconPath
        actived={actived}
        d="M8.25 4.5C8.25 3.67157 8.92157 3 9.75 3C10.5784 3 11.25 3.67157 11.25 4.5V19.5C11.25 20.3284 10.5784 21 9.75 21C8.92157 21 8.25 20.3284 8.25 19.5V4.5Z"
      />
      <StyledIconPath
        actived={actived}
        d="M3.75 17.25C3.75 16.4216 4.42157 15.75 5.25 15.75C6.07843 15.75 6.75 16.4216 6.75 17.25V19.5C6.75 20.3284 6.07843 21 5.25 21C4.42157 21 3.75 20.3284 3.75 19.5V17.25Z"
      />
      <StyledIconPath
        actived={actived}
        d="M12.75 14.25C12.75 13.4216 13.4216 12.75 14.25 12.75C15.0784 12.75 15.75 13.4216 15.75 14.25V19.5C15.75 20.3284 15.0784 21 14.25 21C13.4216 21 12.75 20.3284 12.75 19.5V14.25Z"
      />
      <StyledIconPath
        actived={actived}
        d="M17.25 9.75C17.25 8.92157 17.9216 8.25 18.75 8.25C19.5784 8.25 20.25 8.92157 20.25 9.75V19.5C20.25 20.3284 19.5784 21 18.75 21C17.9216 21 17.25 20.3284 17.25 19.5V9.75Z"
      />
    </svg>
  );
}
export function AccountsIcon({ actived }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <StyledIconPath
        actived={actived}
        d="M22.5 6C22.5 5.175 21.825 4.5 21 4.5H3C2.175 4.5 1.5 5.175 1.5 6V8.25H22.5V6Z"
      />
      <StyledIconPath
        actived={actived}
        d="M1.5 18C1.5 18.825 2.175 19.5 3 19.5H21C21.825 19.5 22.5 18.825 22.5 18V10.5H1.5V18ZM8.15625 15.75H15.8438C16.2047 15.75 16.5 16.0453 16.5 16.4062C16.5 16.7672 16.2047 17.0625 15.8438 17.0625H8.15625C7.79531 17.0625 7.5 16.7672 7.5 16.4062C7.5 16.0453 7.79531 15.75 8.15625 15.75ZM4.78125 15.75H5.34375C5.70469 15.75 6 16.0453 6 16.4062C6 16.7672 5.70469 17.0625 5.34375 17.0625H4.78125C4.42031 17.0625 4.125 16.7672 4.125 16.4062C4.125 16.0453 4.42031 15.75 4.78125 15.75Z"
      />
    </svg>
  );
}
export function ProfileIcon({ actived }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <StyledIconPath
        actived={actived}
        d="M12 12C14.4752 12 16.5 9.97495 16.5 7.5C16.5 5.02505 14.4752 3 12 3C9.52477 3 7.5 5.02505 7.5 7.5C7.5 9.97495 9.52477 12 12 12ZM12 14.25C9.01884 14.25 3 15.7688 3 18.75V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V18.75C21 15.7688 14.9812 14.25 12 14.25Z"
      />
    </svg>
  );
}

export function BackIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <StyledIconPath
        actived
        d="M10.2141 12L16.1719 6.04687C16.6125 5.60624 16.6125 4.89374 16.1719 4.4578C15.7313 4.01718 15.0188 4.02187 14.5781 4.4578L7.82814 11.2031C7.40157 11.6297 7.3922 12.3141 7.79532 12.7547L14.5734 19.5469C14.7938 19.7672 15.0844 19.875 15.3703 19.875C15.6563 19.875 15.9469 19.7672 16.1672 19.5469C16.6078 19.1062 16.6078 18.3937 16.1672 17.9578L10.2141 12Z"
      />
    </svg>
  );
}

export function HomeBalanceIcon() {
  return (
    <svg
      width="325"
      height="187"
      viewBox="0 0 325 187"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <StyledIconPath
        opacity="0.1"
        d="M109.5 143.963C51.9833 140.097 10 165.114 0 176.476L7.5 186.439H28H313.5L324 39.0854C327.333 22.6545 301.16 -11.1626 299.5 5.00001C296 39.0853 274 90.4756 247.5 109.354C224.963 125.409 187.5 149.207 109.5 143.963Z"
        fill="url(#paint0_linear_1_65)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_65"
          x1="299.5"
          y1="16.0122"
          x2="-0.921096"
          y2="166.774"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function HomeBalanceIconEllipse() {
  return (
    <svg
      width="60"
      height="64"
      viewBox="0 0 60 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        opacity="0.05"
        cx="30"
        cy="32.0732"
        rx="30"
        ry="31.4634"
        fill="white"
      />
    </svg>
  );
}

export function IconWave() {
  return (
    <svg
      width="375"
      height="58"
      viewBox="0 0 375 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M252.37 57.6C222.25 57.6 198.43 43.48 175.39 29.83C152.53 16.28 128.88 2.26001 99.18 2.26001C69.47 2.26001 45.83 16.27 22.97 29.82C10.7 37.09 -1.97 44.6 -15.45 49.9L-16 48.5C-2.63 43.24 9.99 35.77 22.19 28.53C45.23 14.88 69.05 0.76001 99.17 0.76001C129.29 0.76001 153.11 14.88 176.15 28.53C199.01 42.08 222.66 56.1 252.36 56.1C282.06 56.1 305.71 42.09 328.57 28.53C351.61 14.88 375.43 0.76001 405.55 0.76001V2.26001C375.84 2.26001 352.2 16.27 329.34 29.83C306.31 43.48 282.48 57.6 252.37 57.6Z"
        fill="#D4D4D4"
      />
    </svg>
  );
}

export function FreelancerIcon() {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 3.75012V1.89387C14.5 0.843872 13.6562 0.00012207 12.6063 0.00012207H7.39375C6.34375 0.00012207 5.5 0.843872 5.5 1.89387V3.75012H0.25V16.1064C0.25 17.1564 1.09375 18.0001 2.14375 18.0001H17.8563C18.9062 18.0001 19.75 17.1564 19.75 16.1064V3.75012H14.5ZM12.625 3.75012H7.375V1.87512H12.625V3.75012Z"
        fill="#031A6E"
      />
    </svg>
  );
}

export function SpotifyIcon() {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0453 0.259408C14.825 0.301596 5.57656 2.09691 5.37969 2.13441C5.18281 2.17191 5 2.30316 5 2.50941V13.7641C5 13.8391 4.99531 14.1016 4.8875 14.3125C4.74219 14.5891 4.48906 14.7907 4.13281 14.9078C3.97813 14.9594 3.76719 15.0063 3.51875 15.0625C2.38906 15.3157 0.5 15.7469 0.5 17.4907C0.5 18.9485 1.55 19.6047 2.45469 19.7172C2.55312 19.7313 2.66563 19.75 2.7875 19.75C3.10156 19.75 4.475 19.5953 5.1875 19.1313C5.70312 18.7938 6.31719 18.1282 6.31719 16.8907V6.92972C6.31719 6.7516 6.44375 6.59691 6.61719 6.5641L13.7422 5.12503C13.9766 5.07816 14.1922 5.25628 14.1922 5.49066V11.6266C14.1922 11.8188 14.1828 12.0438 14.075 12.2547C13.9297 12.5313 13.6766 12.7328 13.3156 12.85C13.1609 12.9016 12.9031 12.9485 12.6547 13.0047C11.525 13.2578 9.63594 13.6844 9.63594 15.4282C9.63594 17.0078 10.8266 17.6407 11.5953 17.6922C11.9 17.711 12.1203 17.7063 12.5047 17.65C12.8891 17.5938 13.6063 17.3922 14.2156 17.0407C15.0547 16.5578 15.5047 15.7844 15.5047 14.7813V0.620346C15.5 0.414096 15.3266 0.203158 15.0453 0.259408Z"
        fill="#031A6E"
      />
    </svg>
  );
}

export function DropboxIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.29688 3.60938L3 7.07344L6.66094 10.0125L12 6.70781L8.29688 3.60938ZM3 12.9516L8.29688 16.4156L12 13.3172L6.66094 10.0125L3 12.9516ZM12 13.3172L15.7031 16.4156L21 12.9516L17.3391 10.0125L12 13.3172ZM21 7.07344L15.7031 3.60938L12 6.70781L17.3391 10.0125L21 7.07344Z"
        fill="#031A6E"
      />
      <path
        d="M12.0094 13.9828L8.26875 17.0766L6.65625 16.0359V17.2031L12 20.3906L17.3438 17.2031V16.0359L15.7406 17.0766L12.0094 13.9828Z"
        fill="#031A6E"
      />
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48px"
      height="48px"
    >
      <path
        fill="#0078d4"
        d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
      />
      <path
        d="M30,35v-9c0-1.103-0.897-2-2-2s-2,0.897-2,2v9h-6V18h6v1.027C27.04,18.359,28.252,18,29.5,18	c3.584,0,6.5,2.916,6.5,6.5V35H30z M13,35V18h2.966C14.247,18,13,16.738,13,14.999C13,13.261,14.267,12,16.011,12	c1.696,0,2.953,1.252,2.989,2.979C19,16.733,17.733,18,15.988,18H19v17H13z"
        opacity=".05"
      />
      <path
        d="M30.5,34.5V26c0-1.378-1.121-2.5-2.5-2.5s-2.5,1.122-2.5,2.5v8.5h-5v-16h5v1.534	c1.09-0.977,2.512-1.534,4-1.534c3.309,0,6,2.691,6,6v10H30.5z M13.5,34.5v-16h5v16H13.5z M15.966,17.5	c-1.429,0-2.466-1.052-2.466-2.501c0-1.448,1.056-2.499,2.511-2.499c1.436,0,2.459,1.023,2.489,2.489	c0,1.459-1.057,2.511-2.512,2.511H15.966z"
        opacity=".07"
      />
      <path
        fill="#fff"
        d="M14,19h4v15h-4V19z M15.988,17h-0.022C14.772,17,14,16.11,14,14.999C14,13.864,14.796,13,16.011,13	c1.217,0,1.966,0.864,1.989,1.999C18,16.11,17.228,17,15.988,17z M35,24.5c0-3.038-2.462-5.5-5.5-5.5	c-1.862,0-3.505,0.928-4.5,2.344V19h-4v15h4v-8c0-1.657,1.343-3,3-3s3,1.343,3,3v8h4C35,34,35,24.921,35,24.5z"
      />
    </svg>
  );
}

export function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 72 72"
      width="48px"
      height="48px"
    >
      <path d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022	s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491	c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922	c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812	s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576	c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659	c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454	c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z" />
    </svg>
  );
}
