import styled from "styled-components";
// styled componentini import ettik.

export const Button1 = styled.button`
  // burasi artik CSS alani

  color: ${(props) => (props.primary ? "white" : "purple")};
  // prop icerisinde primary diye bir sey varsa;
  color: ${({ primary }) => (primary ? "white" : "purple")};

  background: ${(props) => props.bg || "white"};
  background: ${({ bg }) => bg || "white"};

  // gönderilen alinan primary prop'u esas alarak rengi ayarla.
  background: ${(props) => (props.primary ? "purple" : "white")};
  cursor: pointer;
  padding: 0.7rem 1.5rem;
  border-radius: 5px;
  &:hover {
    transform: scale(0.97);
  }
  // burasi artik CSS alani
`;

export default Button1;
// default ile gönderilince süslü parantezsiz import edilir.


// ################################################################################


export const TomatoButton = styled(Button)`
  // export const ile gönderilince süslü parantezle import edilir.
  // (yukaridaki) Button'dan türetilmis, stillendirilmis buton. Button'un tüm özelliklerini almis olur.
  // farkliliklari biz ekleriz.
  color: ${({ primary }) => (primary ? "white" : "tomato")};
  background: ${({ primary }) => (primary ? "tomato" : "white")};
  border: 2px solid tomato;
`;


// ################################################################################


import styled, { css } from "styled-components";
//gönderilen bir prop'a birden fazla styling atayabilmemiz icin {css}'i de import etmemiz lazim.

const StyledLink = styled.a`
  font-size: 1rem;
  text-decoration: none;
  color: white;
  &:hover {
    opacity: 0.5;
  }
  ${(props) =>
    props.secondary &&
    css`
      background-color: yellow;
      border-radius: 5px;
      padding: 0.2rem;
      color: black;
    `}
`;

export default StyledLink;


// ################################################################################


// Kullanimi;

import Button, StyledLink { TomatoButton } from "...";

<Button bg="green" primary>
  Click
</Button>;
<Button primary={true}>Click</Button>;

<TomatoButton>Click</TomatoButton>;
<TomatoButton primary>Click</TomatoButton>;

<StyledLink href="https://abc.com/" target="_blank">
  Clarusway
</StyledLink>;
