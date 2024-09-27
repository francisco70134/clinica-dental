import styled from "styled-components";

export default function CustomButton({ text, link, id }) {
  return (
    <Referencia href={link} id={id} type="button">
      {text}
    </Referencia>
  );
}

const Referencia = styled.a`
  background-color: #4093d6;
  color: white;
  padding: 10px 25px;
  border-radius: 15px;
  font-size: 14px;
  text-align: center;
  display: inline-block;
  white-space: nowrap;

  &:hover {
    background-color: #02a2ff;
    color: white;
  }
`;
