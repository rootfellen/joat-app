import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "passwordGenerator saloUI saloUI pdfGenerator"
    "qrGenerator saloUI saloUI regExHelper"
    "colorGenerator colorGenerator voteCreator voteCreator";
  grid-gap: 1rem;
  max-width: 1180px;
`;
