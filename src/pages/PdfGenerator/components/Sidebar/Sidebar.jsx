import {
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { Wrapper, Message, TextArea } from "./SidebarElements";
import InfoIcon from "@mui/icons-material/Info";
import { useContext } from "react";
import { Context } from "../../PdfGenerator";

const Sidebar = (props) => {
  const sections = [
    "Employee Address",
    "Contractor Signature",
    "Contractor Address",
    "Title",
  ];

  const { data, text } = useContext(Context);

  return (
    <Wrapper>
      <Message>
        <InfoIcon
          style={{ verticalAlign: "middle", paddingRight: "0.2rem" }}
          fontSize="10px"
        />
        On the document preview, the signature line always shows the digital
        signature data, it can be your full name or your initials.
      </Message>
      <FormControl fullWidth style={{ margin: "1rem 0rem" }}>
        <InputLabel id="templates">Document template</InputLabel>
        <Select
          labelId="templates"
          id="document-templates"
          value={data.template}
          name="template"
          label="Document template"
          onChange={props.selectHandler}
        >
          <MenuItem value={"Invoice"}>Invoice</MenuItem>
          <MenuItem value={"Letter"}>Cover Letter</MenuItem>
          <MenuItem value={"Agreement"}>Agreement</MenuItem>
          <MenuItem value={"Recommendation"}>Recommendation</MenuItem>
          <MenuItem value={"Certificate"}>Certificate</MenuItem>
        </Select>
      </FormControl>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <FormControl style={{ width: "50%" }}>
          <InputLabel id="sections">Document Sections</InputLabel>
          <Select
            labelId="sections"
            id="document-sections"
            multiple
            value={data.sections}
            name="sections"
            onChange={props.selectHandler}
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
            value={data.postage}
            onChange={props.selectHandler}
            name="postage"
          />
        </FormControl>
      </div>
      <TextArea onChange={props.handleText} value={text}></TextArea>
    </Wrapper>
  );
};

export default Sidebar;
