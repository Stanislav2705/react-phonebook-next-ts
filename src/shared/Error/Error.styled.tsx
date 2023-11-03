import styled from '@emotion/styled';

export const Message = styled.p`
  text-align: center;
  font-weight: 500;
  padding: 4px;
  border-radius: 4px;
  background-color: #ffa500;
  color: white;
`;

export const Error = styled(Message)`
  background-color: #ff0000;
`;