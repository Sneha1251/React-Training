// Use the useEffect hook to manage the current slide and transition.
// Add few images atleast 10 in public folder to populate the slideshow.
// Allow users to pause, play the slideshow.
// Include a time interval option to control the automatic slideshow progression.

import { useEffect, useState } from "react";
import imagedata from "./ImageData";

const Slideshow = () => {
  const imageurls = imagedata;

  const [currentslide, setCurrentSlide] = useState(0);
  const [isplaying, setIsPlaying] = useState(false);
  const [intervalid, setIntervalId] = useState(null);

  const nextSlide = () => {
    setCurrentSlide((currentslide) => (currentslide + 1) % imageurls.length);
  };
  const Playslide = () => {
    setIsPlaying(true);
  };
  const Pauseshow = () => {
    setIsPlaying(false);
  };
  useEffect(() => {
    if (isplaying) {
      if (!intervalid) {
        const id = setInterval(() => {
          nextSlide();
          setIntervalId((prevIntervalId) =>
            prevIntervalId === null ? id : prevIntervalId
          );
        }, 2000);
      }
    } else {
      clearInterval(intervalid);

      setIntervalId(null);
    }
    return () => clearInterval(intervalid);
  }, [isplaying]);

  return (
    <>
      <img src={imageurls[currentslide]} />
      <button onClick={Playslide} style={{ margin: "1rem" }}>
        Play
      </button>
      <button onClick={Pauseshow}>Pause</button>
    </>
  );
};

export default Slideshow;