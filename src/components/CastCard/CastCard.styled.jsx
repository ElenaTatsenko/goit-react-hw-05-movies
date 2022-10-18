import styled from "@emotion/styled";

export const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 25px;
  padding: 20px;
`;

export const CastItem = styled.li`
  flex-basis: calc((100% - 40px) / 6);
  text-align: center;
  width: 150px;
`;

export const CastPoster = styled.img`
  display: block;
  width: 150px;
`;

export const CastName = styled.h4`
  font-size: 18px;
  font-weight: 700;
`;

export const CastCharacter = styled.span`
  font-size: 16px;
  font-weight: 500;
`;