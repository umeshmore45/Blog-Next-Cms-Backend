import fetchData from "../fetchData/entry";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = (props) => {
  return (
    <div>
      <Navigation {...props} />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
