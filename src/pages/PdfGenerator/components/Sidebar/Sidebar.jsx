import {
  Chip,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { Wrapper } from "./SidebarElements";

const Sidebar = () => {
  const [data, setData] = useState({
    postage: "",
    sections: [],
    template: "",
  });

  const sections = [
    "Employee Address",
    "Contractor Signature",
    "Contractor Address",
    "Title",
  ];

  const selectHandler = (e) => {
    setData((prevState) => {
      const { name, value, type, checked } = e.target;
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  console.log(data);
  return (
    <Wrapper>
      <Message></Message>
      <FormControl fullWidth style={{ margin: "1rem 0rem" }}>
        <InputLabel id="templates">Document template</InputLabel>
        <Select
          labelId="templates"
          id="document-templates"
          value={data.template}
          name="template"
          label="Document template"
          onChange={selectHandler}
        >
          <MenuItem value={"Invoice"}>Invoice</MenuItem>
          <MenuItem value={"Letter"}>Cover Letter</MenuItem>
          <MenuItem value={"Agreement"}>Agreement</MenuItem>
          <MenuItem value={"Recommendation"}>Recommendation</MenuItem>
          <MenuItem value={"Certificate"}>Certificate</MenuItem>
        </Select>
      </FormControl>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <FormControl style={{ width: "48%" }}>
          <InputLabel id="sections">Document Sections</InputLabel>
          <Select
            labelId="sections"
            id="document-sections"
            multiple
            value={data.sections}
            name="sections"
            onChange={selectHandler}
            input={
              <OutlinedInput
                id="select-multiple-chip"
                label="Document Sections"
              />
            }
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    style={{ backgroundColor: "#31403c", color: "#fff" }}
                  />
                ))}
              </Box>
            )}
          >
            {sections.map((section) => (
              <MenuItem key={section} value={section} style={{}}>
                {section}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl style={{ width: "48%" }}>
          <InputLabel
            style={{ margin: "0.7rem 0rem 0.2rem 0rem" }}
            shrink
            id="postage"
          >
            Postage of document
          </InputLabel>
          <OutlinedInput
            fullWidth
            type="date"
            onChange={selectHandler}
            name="postage"
          />
        </FormControl>
      </div>
      <textarea style={{ height: "60%", marginTop: "1.125rem" }}></textarea>
    </Wrapper>
  );
};

export default Sidebar;
