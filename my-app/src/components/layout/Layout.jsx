import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div>{children}</div>
      <Footer></Footer>
    </>
  );
};

export default Layout;
