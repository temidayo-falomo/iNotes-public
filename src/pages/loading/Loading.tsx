import React, { useEffect, useState } from "react";
import { StyledLoading } from "./Loading.styled";
import Aos from "aos";
import "aos/dist/aos.css";

function Loading(props: any) {
  const [init, setInit] = useState(
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  );

  // useEffect(() => {
  //   setTimeout(() => {
  //     setInit(<h2 data-aos="zoom-in">Rebooting Dyno...</h2>);
  //   }, 5000);

  //   setTimeout(() => {
  //     setInit(<h2 data-aos="zoom-in">This Might Take a while...</h2>);
  //   }, 10000);

  //   setTimeout(() => {
  //     setInit(<h2 data-aos="zoom-in">Fighting Backend Battles...</h2>);
  //   }, 15000);

  //   setTimeout(() => {
  //     setInit(<h2 data-aos="zoom-in">Querying Render...</h2>);
  //   }, 20000);
  // }, []);

  useEffect(() => {
    Aos.init({
      duration: 400,
    });
  }, [init]);

  return (
    <StyledLoading theme={props.theme}>
      <div className="cont">{init}</div>
    </StyledLoading>
  );
}

export default Loading;
