import React from 'react';
import Particles from "react-particles-js";

const ParticleComponent = () => {
    return (
        <div
            style={{
                zIndex: "-100",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh"
            }}
        >
    <Particles
      params={{
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              value_area: 1803.4120608655228
            }
          },
          color: {
            value: ["#32a852","#ed6b3b","#1b93e3","#7818c7","#eb0c22"]
          },
          shape: {
            type: ["image", "circle", "star", "polygon", "triangle"],
            stroke: {
              width: 0
            },
            polygon: {
              nb_sides: 4
            },
            image: {
              src: "../logo.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.2,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: false
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: true,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "window",
          events: {
            // onhover: {
            //   enable: true,
            //   mode: "repulse"
            // },
            onclick: {
              enable: false,
              mode: "bubble"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }}
    />
  </div>
    );
};

export default ParticleComponent;