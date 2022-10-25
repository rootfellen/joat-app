import React, { useContext } from "react";
import { Context } from "../../PdfGenerator";
import { PostageContainer } from "./PostageElements";

const Postage = () => {
  const { data } = useContext(Context);
  return <PostageContainer>{data.postage}</PostageContainer>;
};

export default Postage;
