import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer } from '../../global-styles/globalComponents';
import CustomerSideBar from '../CustomerSideBar';
import { Flex, NavList, HamburguerIcon, RedirectButton } from './styles';
import useHeader from '../../hooks/useHeader';

const CustomerHeader = () => {
  const navigate = useNavigate();
  const { user, sideBar, setSideBar, logout } = useHeader();

  return (
    <HeaderContainer>
      <Flex>
        <HamburguerIcon onClick={ () => setSideBar(true) } />
        <CustomerSideBar open={ sideBar } setOpen={ setSideBar } />
        <NavList>
          <RedirectButton
            data-testid="customer_products__element-navbar-link-products"
            type="button"
            onClick={ () => navigate('/customer/products') }
          >
            Produtos
          </RedirectButton>
          <RedirectButton
            data-testid="customer_products__element-navbar-link-orders"
            type="button"
            onClick={ () => navigate('/customer/orders') }
          >
            Meus pedidos
          </RedirectButton>
          <RedirectButton
            data-testid="customer_products__element-navbar-user-full-name"
            type="button"
            onClick={ () => navigate('/customer/products') }
          >
            { user }
          </RedirectButton>
          <RedirectButton
            data-testid="customer_products__element-navbar-link-logout"
            type="button"
            onClick={ logout }
          >
            Sair
          </RedirectButton>
        </NavList>
      </Flex>
    </HeaderContainer>
  );
};

export default CustomerHeader;