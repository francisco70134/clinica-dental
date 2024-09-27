import styled from "styled-components";

export default function CardsComponent({ title, text, id, img, bg }) {
  return (
    <>
      <CardContainer id={id} bg={bg}>
        <div className="ContainerCards">
          <img src={img} alt={title} />
          <div className="content">
            <h4>{title}</h4>
            <p>{text}</p>
          </div>
        </div>
      </CardContainer>
    </>
  );
}

const CardContainer = styled.div`
  background-color: ${(props) => props.bg || "#4093d6"}; 
  color: white;
  border-radius: 15px;
  font-size: 14px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
  max-width: 360px; 

  transition: transform 0.3s ease, box-shadow 0.3s ease; 
  .ContainerCards{
    padding: 35px;
  }

  &:hover {
    transform: translateY(-5px); 
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 80px; 
    height: auto;
    margin-bottom: 15px;
    border-radius: 50%; 
    background-color: white; 
    padding: 05px; 
  }

  .content {
    h4 {
      font-size: 20px;
      margin: 15px 0;
      font-weight: 600;
    }

    p {
      font-size: 14px;
      margin-top: 10px;
      line-height: 1.6; 
    }
  }
`;
