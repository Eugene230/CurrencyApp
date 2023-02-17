import { TextField } from "@mui/material";
import * as React from "react";

import "./CurrencyInput.css";

interface ICurrencyInputProps {
  value: string;
}

const CurrencyInput: React.FunctionComponent<ICurrencyInputProps> = ({
  value,
}) => {
  return (
    <TextField
      className="currencyInput"
      id="outlined-basic"
      variant="outlined"
      value={value}
    />
  );
};

export default CurrencyInput;
