import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { cartIds, countCartListSelector } from 'recoil/cartList';
import * as S from './Header.styles';

const Header = () => {
  const cartCount = useRecoilValue(countCartListSelector);
  const resetCartAtoms = useResetRecoilState(cartIds);
  const navigate = useNavigate();

  const onLogoClick = () => {
    resetCartAtoms();
    navigate('/');
  };

  return (
    <S.HeaderContainer>
      <S.HeaderContentContainer>
        <S.HeaderWrapper gap={20}>
          <S.Logo onClick={onLogoClick}>THE CHOONSIK</S.Logo>
        </S.HeaderWrapper>
        <S.HeaderWrapper gap={8}>
          <S.CartTitle onClick={() => navigate('/cart')}>장바구니</S.CartTitle>
          <S.CartCounter>{cartCount}</S.CartCounter>
        </S.HeaderWrapper>
      </S.HeaderContentContainer>
    </S.HeaderContainer>
  );
};

export default Header;
