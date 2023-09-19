import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((product) => {
        return (
          <Card sx={{ display: "flex" }} key={products.id}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {product.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  ${product.unit_price}
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <IconButton aria-label="previous"></IconButton>
                <IconButton aria-label="play/pause"></IconButton>
                <IconButton aria-label="next"></IconButton>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={product.img}
              alt="Live from space album cover"
            />
          </Card>
        );
      })}
    </div>
  );
};

export default ItemList;
