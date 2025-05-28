import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    // Optional: console.log(container);
  }, []);
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        // Yahan tu ne jo JSON bheja tha, woh pura yahan paste kar diya gaya hai
        "autoPlay": true,
        "background": {
          "color": {
            "value": "#0000"
          },
          "image": "",
          "position": "",
          "repeat": "",
          "size": "",
          "opacity": 1
        },
        "backgroundMask": {
          "composite": "destination-out",
          "cover": {
            "opacity": 1,
            "color": {
              "value": ""
            }
          },
          "enable": false
        },
        "clear": true,
        "defaultThemes": {},
        "delay": 0,
        "fullScreen": {
          "enable": true,
          "zIndex": 0
        },
        "detectRetina": true,
        "duration": 0,
        "fpsLimit": 120,
        "interactivity": {
          "detectsOn": "window",
          "events": {
            "onClick": {
              "enable": true,
              "mode": "push"
            },
            "onDiv": {
              "selectors": {},
              "enable": false,
              "mode": {},
              "type": "circle"
            },
            "onHover": {
              "enable": true,
              "mode": "repulse",
              "parallax": {
                "enable": false,
                "force": 2,
                "smooth": 10
              }
            },
            "resize": {
              "delay": 0.5,
              "enable": true
            }
          },
          "modes": {
            "trail": {
              "delay": 1,
              "pauseOnStop": false,
              "quantity": 1
            },
            "attract": {
              "distance": 200,
              "duration": 0.4,
              "easing": "ease-out-quad",
              "factor": 1,
              "maxSpeed": 50,
              "speed": 1
            },
            "bounce": {
              "distance": 200
            },
            "bubble": {
              "distance": 400,
              "duration": 2,
              "mix": false,
              "opacity": 0.8,
              "size": 40,
              "divs": {
                "distance": 200,
                "duration": 0.4,
                "mix": false,
                "selectors": {}
              }
            },
            "connect": {
              "distance": 80,
              "links": {
                "opacity": 0.5
              },
              "radius": 60
            },
            "grab": {
              "distance": 400,
              "links": {
                "blink": false,
                "consent": false,
                "opacity": 1
              }
            },
            "push": {
              "default": true,
              "groups": [],
              "quantity": 4
            },
            "remove": {
              "quantity": 2
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4,
              "factor": 100,
              "speed": 1,
              "maxSpeed": 50,
              "easing": "ease-out-quad",
              "divs": {
                "distance": 200,
                "duration": 0.4,
                "factor": 100,
                "speed": 1,
                "maxSpeed": 50,
                "easing": "ease-out-quad",
                "selectors": {}
              }
            },
            "slow": {
              "factor": 3,
              "radius": 200
            },
            "particle": {
              "replaceCursor": false,
              "pauseOnStop": false,
              "stopDelay": 0
            },
            "light": {
              "area": {
                "gradient": {
                  "start": {
                    "value": "#FF5A00"
                  },
                  "stop": {
                    "value": "#FF5A00"
                  }
                },
                "radius": 1000
              },
              "shadow": {
                "color": {
                  "value": "#000000"
                },
                "length": 2000
              }
            }
          }
        },
        "manualParticles": [],
        "particles": {
          "bounce": {
            "horizontal": {
              "value": 1
            },
            "vertical": {
              "value": 1
            }
          },
          "collisions": {
            "absorb": {
              "speed": 2
            },
            "bounce": {
              "horizontal": {
                "value": 1
              },
              "vertical": {
                "value": 1
              }
            },
            "enable": false,
            "maxSpeed": 50,
            "mode": "bounce",
            "overlap": {
              "enable": true,
              "retries": 0
            }
          },
          "color": {
            "value": "#FF0000"
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "outModes": {
              "default": "out"
            }
          },
          "number": {
            "density": {
              "enable": true,
              "width": 1920,
              "height": 1080
            },
            "value": 80
          },
          "opacity": {
            "value": {
              "min": 0.1,
              "max": 0.5
            },
            "animation": {
              "enable": true,
              "speed": 3,
              "sync": false
            }
          },
          "shape": {
            "type": "circle"
          },
          "size": {
            "value": {
              "min": 0.1,
              "max": 5
            },
            "animation": {
              "enable": true,
              "speed": 20,
              "sync": false
            }
          },
          "links": {
            "enable": true,
            "distance": 150,
            "color": "#FFFFFF",
            "opacity": 0.4,
            "width": 1
          },
          "twinkle": {
            "particles": {
              "enable": true,
              "frequency": 0.05,
              "opacity": 1,
              "color": {
                "value": "#FFFF00"
              }
            },
            "lines": {
              "enable": true,
              "frequency": 0.005,
              "opacity": 0.7,
              "color": {
                "value": "#FF0000"
              }
            }
          }
        },
        "pauseOnBlur": true,
        "pauseOnOutsideViewport": true,
        "zLayers": 100,
        "motion": {
          "disable": false,
          "reduce": {
            "factor": 4,
            "value": true
          }
        }
      }}
    />
  );
}



