import { Box, Grid, styled, Paper } from "@mui/material";
import CardImg from "../UI/CardImg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#white",
  color: "black",
  padding: theme.spacing(1),
  textAlign: "center",
}));
const Images = () => {
  return (
    <Box
      sx={{ flexGrow: 1, marginLeft: "3%", marginRight: "3%", marginTop: "3%" }}
    >
      <CardImg />
    </Box>
  );
};
export default Images;
