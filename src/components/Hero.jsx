import React from "react";
import { Button } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import "./Hero.css";
import DisplayCards from "./DisplayCards";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel"; // Import Carousel component

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div>
          <div>
            <Button
              variant="outlined"
              sx={{
                background: "hsla(36,39%,75%,.2)",
                border: "1px solid rgba(57,57,57,.33)",
                borderRadius: "24px",
                cursor: "pointer",
                padding: "8px",
              }}
            >
              <RocketLaunchIcon /> Join our space expedition{" "}
              <ArrowForwardIcon />
            </Button>
          </div>
          <div>
            <h1 style={{ marginBottom: "5px" }}>Start your side</h1>
            <h1 style={{ marginTop: "5px" }}>hustle today</h1>
            <p>Turn your passion and knowledge into a thriving business.</p>
            <p>Help your audience get ahead in life</p>
            <Button
              sx={{
                marginRight: "20px",
                marginTop: "20px",
                backgroundColor: "black",
                color: "white",
                "&:hover": {
                  backgroundColor: "#454545",
                },
              }}
              variant="outlined"
            >
              Start my page <ArrowForwardIcon />
            </Button>
            <Button variant="outlined" sx={{ color: "black", marginTop: "20px" }}>
              <PlayArrowIcon /> watch demo
            </Button>
          </div>
        </div>
        <div style={{width:"450px", height:"485px", margin:"auto"}}>
          <Carousel
            autoPlay 
            interval={2000} 
            infiniteLoop
            showStatus={false} 
            showThumbs={false} 
            showIndicators={false} 
            stopOnHover={false}
          >
            <div>
              <img
                src="https://topmate.io/_next/static/media/img-landing-hero-3.b8466f80.svg"
                alt="carousel-1"
              />
            </div>
            <div>
              <img
                src="https://topmate.io/_next/static/media/img-landing-hero-1.fff4d8ae.svg"
                alt="carousel-2"
              />
            </div>
            <div>
              <img
                src="https://topmate.io/_next/static/media/img-landing-hero-2.a7f3acb2.svg"
                alt="carousel-3"
              />
            </div>
          </Carousel>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ fontWeight: "500", textAlign:"center" }}>
          Designed for people <strong>making impact</strong>
        </h1>
        <DisplayCards />
      </div>
    </>
  );
};

export default Hero;
