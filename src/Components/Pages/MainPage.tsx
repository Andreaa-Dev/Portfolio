import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

//@ts-ignore
import styled from "styled-components";
import MainPageImg from "../Img&Video/girl1.png";
import { TimelineLite, Power3, TweenMax } from "gsap";
// gsap.registerPlugin(MotionPathPlugin, TextPlugin);

const Card = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 8rem;
`;
const Img = styled.img`
  border-radius: 50%;
  margin-left: 13rem;
  margin-top: 5rem;
  height: 25rem;
  width: 25rem;
  background-color: #e12b49;
  animation: show 3s ease forwards 1s;
  @keyframes show {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @media (max-width: 1200px) {
    margin-left: 0;
  }
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 700;
  margin-top: 7rem;
  overflow: hidden;
  :span {
    transform: translateY(100%);
    display: inline-block;
  }
`;
const P1 = styled.p`
  color: white;
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 0;
  background-color: #1c1a1a;

  /* animation: show 3s ease forwards 1s; */
  /* @keyframes show {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  } */
`;

const P2 = styled.p`
  color: #c9c6c6;
  margin: 0rem;
  /* animation: show 3s ease forwards 2s; */
  /* @keyframes show {
    from {
      transform: scale(0);
      /* opacity: -10; */
  /* transform: translateY(10px);
    }
    to {
      transform: scale(1); */
  /* opacity: 1; */
  /* transform: translateY(0); */
  /* } */
  /* } */
`;

const Button = styled.button`
  height: 2rem;
  width: 7rem;
  color: white;
  background-color: #1c1a1a;
  border: solid #e12b49 0.1rem;
  border-radius: 1rem;
  cursor: pointer;
  display: block;
  position: relative;
  margin-top: 1rem;
  box-shadow: 0 1px #e12b49;
  :hover {
    box-shadow: 0 1px #e12b49;
    top: 2px;
  }
  :active {
    box-shadow: 0 0 #e12b49;
    top: 6px;
  }
`;

const Logo = styled.svg`
  color: white;
  stroke-dasharray: 400px;
  stroke-dashoffset: 300px;
  animation: dash 4s ease forwards 1s;
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
`;
const CustomLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
function MainPage() {
  let content2 = useRef<any>(null);
  let content3 = useRef<any>(null);
  let content4 = useRef<any>(null);

  useEffect(() => {
    let tl = new TimelineLite({ delay: 0.01 });

    const text2 = content2.current;
    const text3 = content3.current;
    const button4 = content4.current;

    tl.staggerFrom(text2, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.5);
    tl.staggerFrom(text3, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);
    tl.staggerFrom(
      button4,
      1,
      { y: 20, opacity: 0, ease: Power3.easeOut },
      1.7
    );
    console.log("text2", text2);
    console.log("text3", text3);
  }, []);

  return (
    <div>
      <Card>
        <Text>
          <Logo
            id="logo"
            width="378"
            height="78"
            viewBox="0 0 378 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="ANDREA" filter="url(#filter0_d)">
              <mask
                id="path-1-outside-1"
                maskUnits="userSpaceOnUse"
                x="4.16803"
                y="0.992004"
                width="370"
                height="70"
                fill="black"
              >
                <rect
                  fill="white"
                  x="4.16803"
                  y="0.992004"
                  width="370"
                  height="70"
                />
                <path d="M49.944 54.12H20.76L15.384 69H6.16803L30.36 2.47201H40.44L64.536 69H55.32L49.944 54.12ZM47.448 47.016L35.352 13.224L23.256 47.016H47.448Z" />
                <path d="M127.688 69H118.952L83.8155 15.72V69H75.0795V1.992H83.8155L118.952 55.176V1.992H127.688V69Z" />
                <path d="M163.412 2.08801C170.708 2.08801 177.012 3.464 182.324 6.216C187.7 8.904 191.796 12.776 194.612 17.832C197.492 22.888 198.932 28.84 198.932 35.688C198.932 42.536 197.492 48.488 194.612 53.544C191.796 58.536 187.7 62.376 182.324 65.064C177.012 67.688 170.708 69 163.412 69H142.58V2.08801H163.412ZM163.412 61.8C172.052 61.8 178.644 59.528 183.188 54.984C187.732 50.376 190.004 43.944 190.004 35.688C190.004 27.368 187.7 20.872 183.092 16.2C178.548 11.528 171.988 9.19201 163.412 9.19201H151.316V61.8H163.412Z" />
                <path d="M245.687 69L229.751 41.64H219.191V69H210.455V2.08801H232.055C237.111 2.08801 241.367 2.95201 244.823 4.68001C248.343 6.40801 250.967 8.74401 252.695 11.688C254.423 14.632 255.287 17.992 255.287 21.768C255.287 26.376 253.943 30.44 251.255 33.96C248.631 37.48 244.663 39.816 239.351 40.968L256.151 69H245.687ZM219.191 34.632H232.055C236.791 34.632 240.343 33.48 242.711 31.176C245.079 28.808 246.263 25.672 246.263 21.768C246.263 17.8 245.079 14.728 242.711 12.552C240.407 10.376 236.855 9.288 232.055 9.288H219.191V34.632Z" />
                <path d="M277.597 9.19201V31.56H301.981V38.76H277.597V61.8H304.861V69H268.861V1.992H304.861V9.19201H277.597Z" />
                <path d="M357.632 54.12H328.448L323.072 69H313.856L338.048 2.47201H348.128L372.224 69H363.008L357.632 54.12ZM355.136 47.016L343.04 13.224L330.944 47.016H355.136Z" />
              </mask>
              <path
                d="M49.944 54.12H20.76L15.384 69H6.16803L30.36 2.47201H40.44L64.536 69H55.32L49.944 54.12ZM47.448 47.016L35.352 13.224L23.256 47.016H47.448Z"
                stroke="white"
                strokeWidth="2"
                mask="url(#path-1-outside-1)"
              />
              <path
                d="M127.688 69H118.952L83.8155 15.72V69H75.0795V1.992H83.8155L118.952 55.176V1.992H127.688V69Z"
                stroke="white"
                strokeWidth="2"
                mask="url(#path-1-outside-1)"
              />
              <path
                d="M163.412 2.08801C170.708 2.08801 177.012 3.464 182.324 6.216C187.7 8.904 191.796 12.776 194.612 17.832C197.492 22.888 198.932 28.84 198.932 35.688C198.932 42.536 197.492 48.488 194.612 53.544C191.796 58.536 187.7 62.376 182.324 65.064C177.012 67.688 170.708 69 163.412 69H142.58V2.08801H163.412ZM163.412 61.8C172.052 61.8 178.644 59.528 183.188 54.984C187.732 50.376 190.004 43.944 190.004 35.688C190.004 27.368 187.7 20.872 183.092 16.2C178.548 11.528 171.988 9.19201 163.412 9.19201H151.316V61.8H163.412Z"
                stroke="white"
                strokeWidth="2"
                mask="url(#path-1-outside-1)"
              />
              <path
                d="M245.687 69L229.751 41.64H219.191V69H210.455V2.08801H232.055C237.111 2.08801 241.367 2.95201 244.823 4.68001C248.343 6.40801 250.967 8.74401 252.695 11.688C254.423 14.632 255.287 17.992 255.287 21.768C255.287 26.376 253.943 30.44 251.255 33.96C248.631 37.48 244.663 39.816 239.351 40.968L256.151 69H245.687ZM219.191 34.632H232.055C236.791 34.632 240.343 33.48 242.711 31.176C245.079 28.808 246.263 25.672 246.263 21.768C246.263 17.8 245.079 14.728 242.711 12.552C240.407 10.376 236.855 9.288 232.055 9.288H219.191V34.632Z"
                stroke="white"
                strokeWidth="2"
                mask="url(#path-1-outside-1)"
              />
              <path
                d="M277.597 9.19201V31.56H301.981V38.76H277.597V61.8H304.861V69H268.861V1.992H304.861V9.19201H277.597Z"
                stroke="white"
                strokeWidth="2"
                mask="url(#path-1-outside-1)"
              />
              <path
                d="M357.632 54.12H328.448L323.072 69H313.856L338.048 2.47201H348.128L372.224 69H363.008L357.632 54.12ZM355.136 47.016L343.04 13.224L330.944 47.016H355.136Z"
                stroke="white"
                strokeWidth="2"
                mask="url(#path-1-outside-1)"
              />
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="0.740326"
                y="0.992004"
                width="376.909"
                height="77.008"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
            </defs>
          </Logo>
          <P1 ref={content2}>Web developer</P1>
          <P2 ref={content3}>CSS/JavarScript/React</P2>
          <Button ref={content4}>
            <CustomLink to="/about">CONTACT ME</CustomLink>
          </Button>
        </Text>
        <Img src={MainPageImg} alt="error" />
      </Card>
    </div>
  );
}

export default MainPage;
