import { useState } from "react";
import { Accordian } from "./accordian/accordian";
import "./App.css";
import { accodianData } from "./assets/utils";

function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleChange = (currentIndex) => {
    setActiveIndex((prev) => (prev === currentIndex ? null : currentIndex));
  };
  return accodianData.map(({ title, description }, index) => {
    return (
      <Accordian
        title={title}
        description={description}
        handleChange={handleChange}
        index={index}
        activeIndex={activeIndex}
      />
    );
  });
}

export default App;
