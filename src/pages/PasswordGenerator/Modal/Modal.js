import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  bottom: 3%;
  right: 3%;
  width: auto;
  padding: 0rem 1rem;
  max-width: 500px;
  height: 70px;
  background: radial-gradient(#ffce6d, #ffc24d);
  border-radius: 7px;
  -webkit-box-shadow: 1px 10px 33px -5px rgba(42, 79, 72, 1);
  -moz-box-shadow: 1px 10px 33px -5px rgba(42, 79, 72, 1);
  box-shadow: 1px 10px 33px -5px rgba(42, 79, 72, 1);
`;

export const ModalWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin: 0rem;
  }
  span {
    margin-top: 0.5rem;
    color: #408055;
    font-weight: 700;
  }
`;
