import Header from './components/Header';
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import Background1 from './assets/bg1.jpg';
import Background3 from './assets/bg3.jpg';

const App = () => {
  return (
      <>
          <Header
              title="This is a title!"
              descr="this is a description!"
          />
          <Layout
              title="Layout 1"
              descr="this is the 1st layout"
              urlBg={Background1}
              colorBg={false}
          />
          <Layout
              title="Layout 2"
              descr="this is the 2nd layout"
              urlBg={false}
              colorBg='#fffbd1'
          />
          <Layout
              title="Layout 3"
              descr="this is the 3rd layout"
              urlBg={Background3}
              colorBg={false}
          />
          <Footer />
      </>
  );
};

export default App;
