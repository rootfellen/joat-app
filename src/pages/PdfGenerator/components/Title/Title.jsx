import React, { useState } from "react";
import { TitleContainer, TitleInput } from "./TitleElements";

const Title = () => {
  const [value, setValue] = useState("Agreement");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <TitleContainer>
      <TitleInput type="text" value={value} onChange={handleChange} />
    </TitleContainer>
  );
};

export default Title;
