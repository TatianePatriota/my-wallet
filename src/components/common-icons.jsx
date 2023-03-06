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

export function NotificationIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.6">
        <StyledIconPath d="M11.9953 21.375C13.4531 21.375 14.25 20.3438 14.25 18.8906H9.73593C9.73593 20.3438 10.5328 21.375 11.9953 21.375Z" />
        <StyledIconPath d="M19.3125 16.5094C18.5906 15.5578 17.1703 15 17.1703 10.7391C17.1703 6.36561 15.2391 4.6078 13.4391 4.18593C13.2703 4.14374 13.1484 4.08749 13.1484 3.90936V3.77342C13.1484 3.1453 12.6328 2.61561 12.0047 2.6203C11.3766 2.61092 10.8609 3.1453 10.8609 3.77342V3.90936C10.8609 4.0828 10.7391 4.14374 10.5703 4.18593C8.76562 4.61249 6.83905 6.36561 6.83905 10.7391C6.83905 15 5.41874 15.5531 4.69687 16.5094C4.2328 17.1234 4.67343 18 5.44218 18H18.5719C19.3359 18 19.7766 17.1187 19.3125 16.5094V16.5094Z" />
      </g>
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
