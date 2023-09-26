import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 30rem;
  height: auto;
  margin-bottom : 2rem;
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo src="https://todomvc.com/site-assets/logo.svg" alt="TodoMVC Logo" />
    </HeaderWrapper>
  );
};

export default Header;
