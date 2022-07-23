import Header from '../header/Header';
import Footer from '../footer/Footer';
import styled from 'styled-components';

const Main = styled.main`
  padding: 50px;
  min-height: 70vh;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Main>{children}</Main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
