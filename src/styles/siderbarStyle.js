import styled from 'styled-components';

export const TitlePost = styled.h2`
  color: ${(props) => `${props.color}`};
`;
export const ImagemSide = styled.img`
  object-fit: cover;
  src: ${(props) => `${props.src}`};
  height: ${(props) => `${props.height}`};
`;

export const DateSide = styled.h6`
  color: ${(props) => `${props.color}`};
  font-size: ${(props) => `${props.fontSize}`};
`;

export const TitleSide = styled.h6`
  color: ${(props) => `${props.color}`};
  font-size: ${(props) => `${props.fontSize}`};
  font-weight: ${(props) => `${props.weight}`};
`;
