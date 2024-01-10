import React, { useEffect, useState, useRef } from "react";
import { skills } from "./skills";
import { Link, animateScroll as scroll } from "react-scroll";
import './index.css'
const Loader = () => <div className="loader"></div>;

export default function App() {
  const [scrollPos, setScrollPos] = useState(0);
  const [loading, setLoading] = useState(true);
  const [aboutScroll, setAbout] = useState(0);
  const [skillsScroll, setskills] = useState(0);
  const [opacity,setOpacity] = useState(0)

  useEffect(() => {
    const handleAboutScroll = () => {
      const aboutLinks = document.getElementsByClassName("aboutLink");
  
      const numberheight = window.scrollY;
  
      if (numberheight >= 370 && numberheight < 1400) {
        setAbout(2000 - 2000);
        setOpacity(1);
  
        for (let i = 0; i < aboutLinks.length; i++) {
          aboutLinks[i].style.color = "red";
        
        }
      } else {
        setAbout(2000);
        setOpacity(0);
  
        for (let i = 0; i < aboutLinks.length; i++) {
          aboutLinks[i].style.color = "white";
        }
      }
    };
  
    handleAboutScroll();
  

    window.addEventListener("scroll", handleAboutScroll);
  
    return () => {
      window.removeEventListener("scroll", handleAboutScroll);
    };
  }, [window.scrollY]);
  
  useEffect(()=>{
    const skillsLinks = document.getElementsByClassName("skillsLink");
    const numberheight = window.scrollY
    if(numberheight>=850 && numberheight<2050){    
        setskills(2000-2000)

        for (let i = 0; i < skillsLinks.length; i++) {
          skillsLinks[i].style.color = "red";
        
        }
  }
  else{
    setskills(2000)
    for (let i = 0; i < skillsLinks.length; i++) {
      skillsLinks[i].style.color = "white";
    }
  }
  },[window.scrollY])


  useEffect(() => {
    const handleScroll = () => {
      const numberheight = window.scrollY
      if(numberheight>=0 && numberheight<410){    
          setScrollPos(2000-2000)
          
          }
    
    else{
      setScrollPos(2000)
    };
  }



    window.addEventListener("scroll", handleScroll);
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
  

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(loadingTimeout);
    ;}
  },[]);


  const mainStyle = {
    transform: `translateX(${scrollPos * -1}px)`,
    transition: "transform 0.8s ease-in-out",
  };

  const aboutStyle = {
    transform: `translateX(${aboutScroll}px)`,
    transition: "transform 0.8s ease-in-out",
    opacity:`${opacity}px`
  };
  const skillsStyle = {
    transform: `translateX(${skillsScroll}px)`,
    transition: "transform 0.8s ease-in-out",
  };

  const scrollToPexels = () => {
    const pexelsPosition = 0;
    window.scrollTo({ top: pexelsPosition, behavior: "smooth" });
  };


  return (
    <div>
      {loading && <Loader />} 
      {!loading && (
        <div>
          <header className="fixed top-0 w-full z-10 ">
            <div>
              <nav className="flex flex-row flex-wrap justify-end mt-4 mr-[2%] nav">
                <Link
                  
                  spy={true}
                  smooth={true}
                  duration={800}
                  className="text-neutral-50 text-3xl font-mono decoration-solid mr-[49%] cursor-pointer  home"
                  onClick={scrollToPexels}
                >
                  MY PORTFOLIO
                </Link>
                <Link
                
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={800}
                  className="text-neutral-50 text-3xl  font-mono border-red-600 hover:border-b-4 decoration-solid mr-[4%] cursor-pointer  aboutLink"
                >
                  ABOUT
                </Link>
                <Link
                
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={800}
                  className="text-neutral-50 text-3xl font-mono border-red-600  hover:border-b-4 decoration-solid mr-[4%] cursor-pointer skillsLink"
                >
                  SKILLS
                </Link>
                <Link
                
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={800}
                  className="text-neutral-50 text-3xl font-mono border-red-600  hover:border-b-4 decoration-solid mr-[4%] cursor-pointer contactLink"
                >
                  CONTACT
                </Link>{" "}
                <a
                  href="https://drive.google.com/file/d/1imQoZnbDIItiVCaLSUAEDnkgNVL44bdG/view"
                  className="text-neutral-50 text-3xl font-mono border-red-600  hover:border-b-4 decoration-solid mr-[4%] cursor-pointer cvLink"
                >
                  MY CV
                </a>
              </nav>

              <div></div>
            </div>
          </header>

          <div>
            <div className="main" style={mainStyle}>
              <h1 className="text-neutral-50 text-8xl mt-[13%] ml-[9%] font-mono mytext" id="mytext">
                EL OUARZAZI <br /> AYOUB
              </h1>
              <div className="flex field-card">
                <p id="field" className="text-neutral-50 font-mono text-2xl ml-[9%] mr-[65%] p-[10px] text-center rounded-lg border-red-700 border-4 border-double bg-transparent hover:bg-red-700 hover:text-neutral-950 cursor-pointer hover:border-black hover:border-double">
                  CYBER SECURITY SPECIALIST
                </p>
              </div>
              <div className="flex flex-row flex-wrap main-child">
                <p className="text-neutral-50 font-mono text-2xl ml-[9%] mt-[1%]  typing-animation parag"></p>
                <img
                  src="/pclogo.png"
                  alt=""
                  className="absolute left-[75%] w-[25%] pic"
                />
              </div>
            </div>
          </div>
          <div className="mt-[2%]" id="about"></div>
          <div className="">
            <div className="flex justify-center about">
              <h1 className="text-neutral-50 font-mono text-5xl mt-[15%] aboutbg">
                ABOUT ME :
              </h1>
            </div>
            <div
              className="  mt-[2%] ml-[2%] mr-[2%] rounded-lg main-about pb-[6%] pt-[1%]  aboutcard  "
              style={aboutStyle}
            >
              {/* <div className="absolute top-0 right-0 bg-red-700 rounded-bl-full w-40 h-40 ball" ></div> */}
              <div className="mt-[3%] ml-[3%] ">
                <h1 className="text-white font-mono text-5xl nametitle">Who am I?</h1>
                <h1 className="text-white text-8xl mt-[1%]  font-mono nametitle2">
                  EL OUARZAZI <br /> AYOUB
                </h1>
                <br />
                <div className="flex flex-row about-child">
                  <p className="text-white font-mono text-2xl nametitle3">
                    I'm Ayoub El Ouarzazi, a 21-year-old deeply passionate about
                    the cyber security domain. <br />
                    Every day, I dedicate myself to enhancing my skills in cyber
                    security, <br /> driven by the goal of helping individuals
                    and companies protect themselves from cyber threats. <br />
                    My mission is to contribute to making the world a safer
                    place through my commitment to the field
                  </p>
                  <img
                    src="./pc.png"
                    alt="gkkg"
                    className=" drop-shadow-xl  w-[35%] mypic"
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="skills" className="mt-[5%] mb-[5%]"></div>
          <div className="mt-[15%] skills"  >
            <div className="text-center">
              <h1 className="text-neutral-50 font-mono text-5xl mt-[1%] ">
                SKILLS
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cards">
              {skills.map((x) => (
                <div
                style={skillsStyle}
                  key={x.id}
                  className="relative max-w-xs mx-auto overflow-hidden shadow-lg mb-4 bg-white card ml-[5%] transition-transform transform hover:scale-105 hover:border-2 hover:border-red-500 hover:shadow-red-900 mt-[15%] cursor-pointer skill-card"
                >
                  
                  <div className="absolute top-0 right-0 bg-red-500 rounded-bl-full w-10 h-10"></div>

                  <div className="pl-[5%] pr-[5%] pt-[5%] pb-[5%]">
                    <div className="font-bold text-xl mb-2 text-white">
                      {x.name}
                    </div>
                    <p className="text-neutral-400 text-base">
                      {x.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <footer className="mt-[10%] bg-red-700 text-white py-8 " id="contact">
            <div className="text-center mb-6">
              <h1 className="text-5xl font-bold">CONTACT :</h1>
            </div>
            <div className="flex flex-row  justify-around space-y-4 foot">
              <div className="flex items-center justify-center">
                <img src="./phone.png" alt="phone" className="w-10 h-10 mr-4" />
                <p className="font-bold text-xl">+212 681-163257</p>
              </div>
              <div className="flex items-center justify-center">
                <img src="./email.png" alt="email" className="w-10 h-10 mr-4" />
                <p className="font-bold text-xl">ayoubelouarzazi1@gmail.com</p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="./location.png"
                  alt="location"
                  className="w-10 h-10 mr-4"
                />
                <p className="font-bold text-xl">Maroc, Rabat, Avenue Annakhil, Hay Riad</p>
              </div>
            </div>
            <div className="flex flex-row justify-center mt-[4%] icons">

              <a href="https://github.com/XW4NT3DX" className="pr-[2%]">
                <img src="./github.png" alt="" className="w-[60px] h-[60px] " />
              </a>

              <a href="https://www.linkedin.com/in/ayoub-el-ouarzazi-255b1a280/">
                <img
                  src="./linkedin.png"
                  alt=""
                  className="w-[60px] h-[60px] "
                />
              </a>
            </div>
            <hr className="mt-[3%] ml-[10%] mr-[10%] bg-black"/>
            <div className="text-center mt-10">
      <p className="text-neutral-400 text-lg">REALISED BY</p>
      <h1 className="text-white text-3xl font-bold"><a href="https://www.linkedin.com/in/anas-el-maky-360257262/">ANAS EL MAKY</a></h1>
      <p>© 2024 ALL RIGHTS RESERVED</p>
    </div>
            
          </footer>
        </div>
      )}
    </div>
  );
}
