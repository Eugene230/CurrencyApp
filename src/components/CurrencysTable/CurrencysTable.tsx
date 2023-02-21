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
import { Box } from "@mui/material";
import CurrencyInput from "../CurrencyInput/CurrencyInput";

interface IMainContentProps {
  currencysList: ICurrency[];
}

interface IRow {
  name: string;
  rateBuy: number;
  rateSell: number;
}

function createRow(name: string, rateBuy: number, rateSell: number): IRow {
  return { name, rateBuy, rateSell };
}

function createRows(currencysList: ICurrency[]): IRow[] {
  return currencysList.map((item: ICurrency) => {
    const { currencyCodeA, currencyCodeB, rateBuy, rateSell } = item;
    return createRow(`${currencyCodeA}/${currencyCodeB}`, rateBuy, rateSell);
  });
}

const CurrencysTable: React.FunctionComponent<IMainContentProps> = ({
  currencysList,
}) => {
  const rows = createRows(currencysList);

  return (
    <Box sx={{ padding: "10%" }}>
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
                <TableCell align="center">
                  <CurrencyInput value={row.rateBuy} />
                </TableCell>
                <TableCell align="center">
                  <CurrencyInput value={row.rateSell} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

function mapStateToProps(state: RootState) {
  const { currencys } = state;
  return { currencysList: currencys.currencysList };
}

export default connect(mapStateToProps)(CurrencysTable);
