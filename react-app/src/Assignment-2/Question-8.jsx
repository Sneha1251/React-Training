// Use the useEffect hook to manage the current slide and transition.
// Add few images atleast 10 in public folder to populate the slideshow.
// Allow users to pause, play the slideshow.
// Include a time interval option to control the automatic slideshow progression.

import { useEffect, useState } from "react";
import imagedata from "./ImageData";

const Slideshow = () => {
  const imageUrls = imagedata;

  const [currentSlide, setCurrentSlide] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);

  const [interValid, setIntervalId] = useState(null);

  const nextSlide = () => {
    setCurrentSlide((currentslide) => (currentslide + 1) % imageUrls.length);
  };

  const playSlide = () => {
    setIsPlaying(true);
  };

  const pauseShow = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    if (isPlaying) {
      if (!interValid) {
        const id = setInterval(() => {
          nextSlide();
          setIntervalId((prevIntervalId) =>
            prevIntervalId === null ? id : prevIntervalId
          );
        }, 2000);
      }
    } else {
      clearInterval(interValid);

      setIntervalId(null);
    }

    return () => clearInterval(interValid);
  }, [isPlaying]);

  return (
    <>
      <h2>Slide Show</h2>
      <img src={imageUrls[currentSlide]} />
      <button onClick={playSlide} style={{ margin: "1rem" }}>
        Play
      </button>
      <button onClick={pauseShow}>Pause</button>
    </>
  );
};

export default Slideshow;
