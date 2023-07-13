import React from "react";
import "./Figma.css";
import logo from './images/pngwing.png'
import physics from './images/physics.jpg'
import { useNavigate } from "react-router-dom";

 export const FigmaBook = () => {
 
  
    let navigate = useNavigate();
  
    const handleHome =()=>
    {
      let path = `/`
      navigate(path);
    }

    const handleStore =()=>{
      let path = `/MyBooks`
      navigate(path);
    }
    const handleBorrow =()=>{
      let path = `/Form`
      navigate(path);
    }


    const handleConnect=async()=>
      {
        let path  = `/Connect`
        navigate(path)
      }
      const hadleSignUp =()=>{
        let path = `/signUp`
        navigate(path)
  
      }
     
      
      const handleContact =()=>{
        let path = `/Contact`
        navigate(path);
      }
      const handleLibraryClaw =()=>{
        let path = `/LibraryClaw`
        navigate(path);
      }
  

  
  return (
    <div className="book">
      <div className="div">
        <div className="connect">
          <div className="overlap-group">
            <div className="text-wrapper">CONNECT</div>
          </div>
        </div>
        <div className="navbar">
          <img className="pngwing" alt="Pngwing" src={logo} />
          <button onClick={handleHome}  className="text-wrapper-2">Home</button>
          <button onClick={handleBorrow} className="text-wrapper-3">Borrow</button>
          <button onClick={handleStore} className="text-wrapper-4">Store</button>
          <button onClick={handleContact} className="text-wrapper-5">Contact</button>
          <button onClick={handleLibraryClaw} className="text-wrapper-6">Library Claw</button>
        </div>
        <div className="overlap">
          <div className="infobook">
            <div className="text-wrapper-7">About the Book</div>
            <img className="img" alt="Book" src={physics} />
            <p className="title-textbook-of">
              <span className="span">
                Title
                <br />
              </span>
              <span className="text-wrapper-8">
                Textbook of Applied Physics
                <br />
              </span>

              <span className="text-wrapper-8">
               Volume 1<br />
                <br />
              </span>

              <span className="span">
                Author
                <br />
              </span>
              <span className="text-wrapper-8">&nbsp;</span>
              <a
                href="https://www.google.co.in/search?tbo=p&amp;tbm=bks&amp;q=inauthor:%22A.+K.+Jha%22&amp;source=gbs_metadata_r&amp;cad=6"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="text-wrapper-9">
                  A. K. Jha
                  <br />
                  <br />
                </span>
              </a>
              <span className="span">Publisher</span>
              <span className="text-wrapper-8">
                {" "}
                <br />
                I. K. International Pvt Ltd,  <br />
                <br />
              </span>
              <span className="span">
              
                <br />
              </span>
             
            </p>
            <div className="revuew-box">
              <img className="line" alt="Line" src="line-2.svg" />
              <div className="group">
                <div className="overlap-group-2">
                  <div className="text-wrapper-10">546</div>
                  <div className="text-wrapper-11">pages</div>
                </div>
              </div>
              <div className="overlap-wrapper">
                <div className="overlap-group-2">
                  <div className="text-wrapper-10">19K</div>
                  <div className="text-wrapper-11">reviews</div>
                </div>
              </div>
            </div>
          </div>
          <div className="description-wrapper">
            <div className="description">
              <p className="element-INTRODUCTION">
                <span className="text-wrapper-12">
                  <br />
                </span>
                <span className="text-wrapper-13">
                  <br />
                  1.1{" "}
                </span>
                <span className="text-wrapper-14">
                  INTRODUCTION: NATURE OF LIGHT
                  <br /><br/>
                </span>
                <span className="text-wrapper-13"> </span>
                <span className="text-wrapper-15">
                  We study light in the branch of physics called optics. Optics is the branch of physics which deals{" "}
                  <br />
                  with the study of the nature of light and the phenomenon exhibited by it. Our life is dependent on
                  light and we cannot imagine our life without light. Naturally, from very early days, human beings must
                  have wondered about the nature of light. Simple and common observations such as shape, size and
                  sharpness of the image formed led to the concept of rays of light and its rectilinear propagation.
                  Many theories have been put forward to explain the nature of light. We briefly discuss some of them
                  here. <br />
                  Newton in his corpuscular theory (1675 AD) assumed that light consists of very small particles called
                  corpuscles, which are emitted by a luminous source and travel with large velocities. This theory
                  explained rectilinear propagation of light, reflection and refraction, but could not explain
                  interference, diffraction and polarization, <br />
                  Huygens wave theory of light (1678 AD) considered light to consist of periodic disturbance transmitted
                  through a medium in the form of longitudinal waves. He proposed that a source of light creates
                  periodic disturbances, which travel as waves in a way similar to that of sound traveling in air. This
                  theory explained reflection, refraction, interference and diffraction, but rectilinear propagation and
                  polarization could not be explained. In those days all the known waves required a material medium for
                  their propagation. This led Huygens to assume an all-pervading homogeneous medium called coniferous
                  ether, which possessed inertia and elasticity. 
                </span>
              </p>
              <h1 className="h-1">Interference of Light </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
