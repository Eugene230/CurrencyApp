import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { requestCurrencys } from "../../store/actions/currencysActions";
import CurrencysTable from "../CurrencysTable/CurrencysTable";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const mapDispatchToProps = {
  requestCurrencys,
};

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const MainPage: React.FunctionComponent<PropsFromRedux> = ({ requestCurrencys }) => {
  
  useEffect(() => {
    requestCurrencys(
      "/pubinfo?json&exchange&coursid=5"
    );
  }, []);

  return (
    <div>
      <Header />
      <CurrencysTable />
      <Footer />
    </div>
  );
};

export default connector(MainPage);
