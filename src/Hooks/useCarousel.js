import { useState, useCallback, useMemo } from "react";
import { Box } from "@mui/material";

export default function useCarousel({ content, totalVisible = 1 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const arrayLength = content.length;

  const cardsVisible = 100 / totalVisible;

  console.log(cardsVisible);

  // Using useCallback ensures that these functions have stable references and are not recreated on each render.
  const handlePrevSlide = useCallback(
    () =>
      setCurrentIndex(prevIndex => (prevIndex - 1 + arrayLength) % arrayLength),
    [arrayLength]
  );

  const handleNextSlide = useCallback(
    () => setCurrentIndex(prevIndex => (prevIndex + 1) % arrayLength),
    [arrayLength]
  );

  //  useMemo ensures that the Carousel component is memoized and not recreated on each render.
  const Carousel = useMemo(() => {
    return ({ currentIndex, content, children }) => (
      <Box
        sx={{
          overflow: "hidden",
          width: 1,
          height: 1,
        }}
      >
        <Box
          sx={{
            transition: "transform 0.75s ease",
            transform: `translateX(-${currentIndex * cardsVisible}%)`,
            width: 1,
            height: 1,
            display: "grid",
            gridTemplateRows: "1fr",
            gridTemplateColumns: `repeat(${content.length}, ${cardsVisible}%)`,
          }}
        >
          {content.map((params, index) => (
            <Box
              key={index}
              sx={{
                width: 1,
                height: 1,
                display: "flex",
              }}
            >
              {children(params, index)}
            </Box>
          ))}
        </Box>
      </Box>
    );
  }, [content.length]);

  return [
    currentIndex,
    setCurrentIndex,
    handlePrevSlide,
    handleNextSlide,
    Carousel,
  ];
}
