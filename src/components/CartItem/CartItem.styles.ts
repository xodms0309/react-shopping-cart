import styled from 'styled-components';

export const CartItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 600px;
  height: 180px;
  margin-bottom: 24px;
  border-bottom: 1px solid ${(props) => props.theme.color.gray};
`;

export const CheckBox = styled.input`
  width: 28px;
  height: 28px;
  border: 1px solid ${(props) => props.theme.color.primary};
  border-radius: 4px;
  cursor: pointer;

  &:checked {
    background-image: url("data:image/svg+xml,%3Csvg width='23' height='17' viewBox='0 0 23 17' fill='none' xmlns='http://www.w3.org/2000/svg'%0A%3E%3Cpath d='M2 7L9.11069 14.1107L21.8318 1.38956' stroke='white' stroke-width='3' /%3E%3C/svg%3E");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${(props) => props.theme.color.primary};
  }
`;

export const CartItemImage = styled.img`
  width: 144px;
  height: 144px;
  margin: 0 20px;
`;

export const CartProductName = styled.p`
  font: ${(props) => props.theme.font.medium};
  width: 50%;
`;

export const CartProductPrice = styled.p`
  font: ${(props) => props.theme.font.small};
`;

export const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
`;