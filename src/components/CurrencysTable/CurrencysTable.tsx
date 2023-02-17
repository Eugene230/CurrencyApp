import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { connect } from "react-redux";
import { RootState } from "../../store/rootReducer";
import ICurrency from "../../interfaces/ICurrency";

interface IMainContentProps {
  currencysList: ICurrency[];
}

interface IRow {
  name: string;
  calories: string;
  fat: string;
}

function createRow(name: string, calories: string, fat: string) {
  return { name, calories, fat };
}

function createRows(currencysList: ICurrency[]): IRow[] {
  return currencysList.map((item: ICurrency) => {
    const { ccy, base_ccy, buy, sale } = item;
    return createRow(`${ccy}/${base_ccy}`, buy, sale);
  });
}

const CurrencysTable: React.FunctionComponent<IMainContentProps> = ({
  currencysList,
}) => {
  const rows = createRows(currencysList);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Currency/Current date</TableCell>
            <TableCell align="center">Buy</TableCell>
            <TableCell align="center">Sell</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

function mapStateToProps(state: RootState) {
  const { currencys } = state;
  return { currencysList: currencys.currencysList };
}

export default connect(mapStateToProps)(CurrencysTable);
