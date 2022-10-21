import React from "react";
import { useState } from "react";
import { Label, Wrapper, Template, Select } from "./SidebarElements";

const Sidebar = () => {
  const [data, setData] = useState({
    template: "",
  });

  const selectHandler = (e) => {
    setData((prevState) => {
      return {
        ...prevState,
        template: e.target.value,
      };
    });
  };
  console.log(data);
  return (
    <Wrapper>
      Sidebar
      <Template>
        <Label htmlFor="templates">Document template:</Label>
        <Select
          onChange={selectHandler}
          id="templates"
          value={data.template}
          name="template"
        >
          <option value="">Select predefined template</option>
          <option value="invoice">Invoice</option>
          <option value="cover Letter">Cover Letter</option>
          <option value="recommendation Letter">Recommendation Letter</option>
          <option value="certificate">Certificate</option>
        </Select>
      </Template>
    </Wrapper>
  );
};

export default Sidebar;
