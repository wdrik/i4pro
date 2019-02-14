import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  background: #EBEBEB;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  position: fixed;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img.logo {
    max-width: 100px;
  }
`;
