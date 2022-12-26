import React, { FC } from "react";
import { Button, Box } from "@mui/material";
import { ISize } from "../../interfaces";

interface Props {
  selectdSize?: ISize;
  sizes: ISize[];
  onSelectedSize: (size: ISize) => void;
}

export const SelectSize: FC<Props> = ({
  selectdSize,
  sizes,
  onSelectedSize,
}) => {
  console.log({ selectdSize });

  return (
    <Box>
      {sizes.map((size) => (
        <Button
          key={size}
          size="small"
          sx={{
            backgroundColor: selectdSize === size ? "black" : "transparent",
            color: selectdSize === size ? "white" : "black",
          }}
          // color={selectdSize === size ? "primary" : "info"}
          onClick={() => onSelectedSize(size)}
        >
          {size}
        </Button>
      ))}
    </Box>
  );
};
