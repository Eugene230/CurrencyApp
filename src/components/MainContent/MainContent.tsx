import React from "react";
import { connect } from "react-redux";
import ICurrency from "../../interfaces/ICurrency";
import { RootState } from "../../store/rootReducer";
import Header from "../Header/Header";

interface IMainContentProps {
  currencysList: ICurrency[];
}

const MainContent: React.FunctionComponent<IMainContentProps> = ({ currencysList }) => {
  console.log(currencysList);
  return (
    <div>
      <Header />
    </div>
  );
};

function mapStateToProps(state: RootState) {
  const { currencys } = state
  return { currencysList: currencys.currencysList}
}

export default connect(mapStateToProps)(MainContent)

