import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  border-bottom: 2px solid black;
  justify-content:space-evenly;
  padding: 20px;
  border-radius: 4px;
  margin-right: 20px;
  margin-left: 20px;
  background-color: rgb(178, 236, 249);
  margin-bottom: 20px;

`;

export const MovieWrapper = styled.div`
  display: block;
 `;

export const MoviePoster = styled.img`
  display: block;
  width: 300px;
  margin-right: 20px;
  
`;

export const MovieTitle = styled.h2`
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 15px;
`;

export const MovieDetailsTitle = styled.h3`
  font-size: 20px; 
`
export const MovieGenres = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
  `;

export const MovieOverview = styled.p`
  font-size: 18px;
  margin-bottom: 15px;
  text-align: justify;
  `;

export const MovieAverage = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
  `;