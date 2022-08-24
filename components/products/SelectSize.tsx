import React, { FC } from "react";
import { Button, Box } from "@mui/material";
import { ISize } from "../../interfaces";

interface Props {
  selectdSize?: ISize;
  sizes: ISize[];
}

export const SelectSize: FC<Props> = ({ selectdSize, sizes }) => {
  return (
    <Box>
      {sizes.map((size) => (
        <Button
          key={size}
          size="small"
         //  color={selectdSize === size ? "primary" : "info"}
        >
          {size}
        </Button>
      ))}
    </Box>
  );
};
