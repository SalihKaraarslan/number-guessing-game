import * as React from "react";
const Clock = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={28}
    height={28}
    viewBox="0 0 490.606 490.606"
    {...props}
  >
    <path
      d="M407.917 82.688C364.482 39.253 306.73 15.332 245.303 15.332v30.663c54.507 0 103.967 22.002 139.985 57.581l1.743 1.743c35.579 36.018 57.581 85.478 57.581 139.985S422.61 349.271 387.03 385.289l-1.742 1.742c-36.018 35.58-85.478 57.581-139.986 57.581v30.663c61.428 0 119.178-23.922 162.614-67.357 43.436-43.436 67.358-101.187 67.358-162.614.001-61.428-23.921-119.18-67.357-162.616z"
      style={{
        fill: "#71d1d1",
      }}
    />
    <path
      d="m105.318 387.03-1.741-1.741c-35.58-36.018-57.582-85.478-57.582-139.985 0-54.508 22.002-103.968 57.582-139.986l1.742-1.742c36.018-35.579 85.477-57.581 139.984-57.581V15.332c-61.427 0-119.179 23.922-162.614 67.357-43.436 43.436-67.358 101.188-67.358 162.615s23.922 119.178 67.358 162.614c43.436 43.435 101.187 67.357 162.614 67.357v-30.663c-54.508 0-103.967-22.002-139.985-57.582z"
      style={{
        fill: "#a0e0e0",
      }}
    />
    <path
      d="M227.405 385.413c-32.669 0-63.032-9.859-88.288-26.756a7.64 7.64 0 0 1-2.223 5.896l-16.082 16.082c31.03 28.567 71.87 46.622 116.826 48.474v-22.826a7.665 7.665 0 0 1 15.331 0v22.826c44.956-1.852 85.797-19.907 116.827-48.474l-16.082-16.082a7.664 7.664 0 0 1 0-10.84 7.664 7.664 0 0 1 10.84 0l16.082 16.082c28.567-31.03 46.622-71.871 48.474-116.826h-22.826a7.665 7.665 0 0 1 0-15.33h22.826c-1.852-44.956-19.907-85.797-48.474-116.827l-16.082 16.082a7.616 7.616 0 0 1-4.314 2.157c16.526 25.074 26.154 55.098 26.154 87.374-.001 87.806-71.182 158.988-158.989 158.988zM352.29 128.027c.358-.711.83-1.38 1.424-1.974l16.082-16.082c-31.03-28.567-71.871-46.622-116.827-48.474v7.995c40.118 6.485 75.209 27.974 99.321 58.535zM237.637 67.773v-6.276c-28.312 1.167-54.989 8.764-78.614 21.362 20.714-9.884 43.9-15.423 68.381-15.423 3.44 0 6.849.122 10.233.337zM68.816 237.638a161.36 161.36 0 0 1-.399-11.214c0-27.355 6.911-53.096 19.079-75.575-15.362 25.572-24.695 55.159-25.998 86.788h7.318v.001zM70.635 252.969h-9.138c1.852 44.955 19.907 85.796 48.474 116.826l16.082-16.082a7.62 7.62 0 0 1 3.482-1.99c-30.59-23.928-52.186-58.815-58.9-98.754z"
      style={{
        fill: "#fbb03b",
      }}
    />
    <path
      d="M68.816 237.638h15.507c1.901 0 3.636.696 4.976 1.842-4.224-11.74-6.531-24.395-6.531-37.589 0-29.961 11.871-57.146 31.162-77.12l-3.959-3.959a185.012 185.012 0 0 0-22.476 30.038c-12.168 22.479-19.079 48.219-19.079 75.575.001 3.77.142 7.508.4 11.213z"
      style={{
        fill: "#fcc062",
      }}
    />
    <path
      d="M304.832 201.89c0 12.507-2.069 24.53-5.882 35.748h76.671a7.666 7.666 0 0 1 0 15.33h-83.216c-18.488 35.617-55.702 59.953-98.604 59.953-1.727 0-3.445-.045-5.153-.123l-30.073 30.073c-1.496 1.497-3.459 2.245-5.42 2.245s-3.924-.748-5.42-2.245a7.664 7.664 0 0 1 0-10.84l21.781-21.781c-34.904-7.789-63.606-32.006-77.573-64.117a7.666 7.666 0 0 1-7.619 6.836H70.635c6.714 39.939 28.31 74.826 58.9 98.754a7.653 7.653 0 0 1 7.358 1.99 7.624 7.624 0 0 1 2.223 4.944c25.257 16.897 55.62 26.756 88.288 26.756 87.807 0 158.988-71.182 158.988-158.988 0-32.277-9.627-62.3-26.154-87.374a7.743 7.743 0 0 1-1.106.089 7.666 7.666 0 0 1-6.844-11.112c-24.112-30.561-59.203-52.049-99.321-58.535v14.831a7.666 7.666 0 0 1-15.331 0v-16.55a161.285 161.285 0 0 0-10.232-.337c-24.481 0-47.667 5.539-68.381 15.423a184.87 184.87 0 0 0-38.212 27.112l4.513 4.513c18.865-14.8 42.639-23.625 68.476-23.625 61.321-.002 111.032 49.709 111.032 111.03z"
      style={{
        fill: "#fcc062",
      }}
    />
    <path
      d="M252.969 268.3a7.666 7.666 0 0 1-15.331 0v-4.491l-48.99 48.99c1.708.078 3.425.123 5.153.123 42.902 0 80.116-24.336 98.604-59.953h-39.436V268.3z"
      style={{
        fill: "#fdd089",
      }}
    />
    <path
      d="M89.299 239.48a7.643 7.643 0 0 1 2.643 6.654c13.967 32.111 42.669 56.329 77.573 64.117l57.281-57.282h-4.491a7.666 7.666 0 0 1 0-15.33h15.332V114.986a7.666 7.666 0 0 1 15.331 0v111.811l3.176-3.176a7.664 7.664 0 0 1 10.84 0 7.664 7.664 0 0 1 0 10.84l-3.177 3.177h35.142c3.813-11.218 5.882-23.241 5.882-35.748 0-61.321-49.711-111.032-111.032-111.032-25.837 0-49.611 8.826-68.476 23.625l11.569 11.569a7.662 7.662 0 0 1 0 10.84c-1.496 1.497-3.459 2.245-5.42 2.245s-3.924-.748-5.42-2.245L113.93 124.77c-19.29 19.974-31.162 47.159-31.162 77.12.001 13.195 2.307 25.85 6.531 37.59zm107.765-34.751-22.996 22.997c-1.497 1.497-3.46 2.245-5.421 2.245s-3.924-.748-5.42-2.245a7.667 7.667 0 0 1-.001-10.841l22.997-22.997a7.665 7.665 0 1 1 10.841 10.841zm-56.835-26.171 45.994-45.995a7.664 7.664 0 0 1 10.84 0 7.662 7.662 0 0 1 0 10.84l-45.994 45.995c-1.496 1.497-3.459 2.245-5.42 2.245s-3.924-.748-5.42-2.245a7.662 7.662 0 0 1 0-10.84zm-30.664 30.663 7.666-7.666a7.667 7.667 0 0 1 10.842 10.84l-7.665 7.666c-1.497 1.497-3.46 2.245-5.421 2.245s-3.923-.748-5.42-2.244a7.666 7.666 0 0 1-.002-10.841z"
      style={{
        fill: "#fdd089",
      }}
    />
    <path d="M418.758 71.847C372.427 25.517 310.826.001 245.303.001S118.179 25.517 71.848 71.847C25.516 118.179 0 179.781 0 245.303s25.516 127.124 71.848 173.455c46.331 46.331 107.933 71.847 173.455 71.847s127.124-25.516 173.455-71.847c46.332-46.332 71.848-107.933 71.848-173.455S465.09 118.179 418.758 71.847zM245.303 475.274c-61.427 0-119.178-23.922-162.614-67.357-43.436-43.436-67.358-101.187-67.358-162.614 0-61.428 23.922-119.179 67.358-162.615 43.435-43.435 101.187-67.357 162.614-67.357s119.179 23.922 162.614 67.357c43.436 43.436 67.358 101.188 67.358 162.615s-23.922 119.178-67.358 162.614-101.187 67.357-162.614 67.357z" />
    <path d="M103.576 105.318c-35.58 36.018-57.582 85.478-57.582 139.986s22.002 103.967 57.582 139.985l1.741 1.741c36.018 35.58 85.477 57.582 139.985 57.582s103.968-22.002 139.986-57.581l1.742-1.742c35.58-36.018 57.582-85.478 57.582-139.985 0-54.508-22.002-103.967-57.581-139.985l-1.743-1.743c-36.018-35.58-85.478-57.582-139.985-57.582s-103.966 22.002-139.984 57.581l-1.743 1.743zm6.396 15.493 3.959 3.959 12.123 12.123a7.638 7.638 0 0 0 5.42 2.245 7.64 7.64 0 0 0 5.42-2.245 7.662 7.662 0 0 0 0-10.84l-11.569-11.569-4.513-4.513a184.832 184.832 0 0 1 38.212-27.112c23.625-12.598 50.302-20.195 78.614-21.362v22.826a7.665 7.665 0 0 0 15.331 0V61.497c44.956 1.852 85.797 19.907 116.827 48.474l-16.082 16.082a7.654 7.654 0 0 0-1.424 1.974 7.663 7.663 0 0 0 6.844 11.112 7.6 7.6 0 0 0 1.106-.089 7.616 7.616 0 0 0 4.314-2.157l16.082-16.082c28.567 31.03 46.622 71.871 48.474 116.827h-22.826a7.665 7.665 0 0 0 0 15.33h22.826c-1.852 44.955-19.907 85.796-48.474 116.826l-16.082-16.082a7.664 7.664 0 0 0-10.84 0 7.664 7.664 0 0 0 0 10.84l16.082 16.082c-31.03 28.567-71.871 46.622-116.827 48.474v-22.826a7.666 7.666 0 0 0-15.331 0v22.826c-44.955-1.852-85.796-19.907-116.826-48.474l16.082-16.082a7.64 7.64 0 0 0 2.223-5.896 7.622 7.622 0 0 0-2.223-4.944 7.654 7.654 0 0 0-7.358-1.99 7.61 7.61 0 0 0-3.482 1.99l-16.082 16.082c-28.567-31.03-46.622-71.871-48.474-116.826h22.826a7.665 7.665 0 0 0 7.666-7.666 7.643 7.643 0 0 0-2.69-5.824 7.628 7.628 0 0 0-4.976-1.842H61.498c1.303-31.629 10.636-61.216 25.998-86.788a185.135 185.135 0 0 1 22.476-30.037z" />
    <path d="M147.735 342.872c1.496 1.497 3.459 2.245 5.42 2.245s3.924-.748 5.42-2.245l30.073-30.073 48.99-48.99v4.491a7.665 7.665 0 0 0 15.331 0v-15.331H375.621a7.666 7.666 0 0 0 0-15.33H263.808l3.177-3.177a7.664 7.664 0 0 0 0-10.84 7.664 7.664 0 0 0-10.84 0l-3.176 3.176V114.986a7.666 7.666 0 0 0-15.331 0v122.652h-15.332a7.666 7.666 0 0 0 0 15.33h4.491l-57.281 57.282-21.781 21.781a7.663 7.663 0 0 0 0 10.841z" />
    <path
      d="M145.649 191.643a7.638 7.638 0 0 0 5.42-2.245l45.994-45.995a7.662 7.662 0 0 0 0-10.84 7.664 7.664 0 0 0-10.84 0l-45.994 45.995a7.664 7.664 0 0 0 0 10.84 7.64 7.64 0 0 0 5.42 2.245zM114.986 222.306a7.644 7.644 0 0 0 5.421-2.245l7.665-7.666a7.666 7.666 0 0 0-10.842-10.84l-7.666 7.666a7.667 7.667 0 0 0 5.422 13.085zM186.222 193.889l-22.997 22.997a7.667 7.667 0 0 0 10.842 10.841l22.996-22.997a7.665 7.665 0 0 0-.001-10.841 7.663 7.663 0 0 0-10.84 0z"
      style={{
        fill: "#fff",
      }}
    />
  </svg>
);
export default Clock;
