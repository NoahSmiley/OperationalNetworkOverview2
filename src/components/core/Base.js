import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import BATV from "../analytics/BATV/BATV";
import EDT from "../analytics/EDT/EDT";
import DT from "../analytics/DT/DT";
import PMAS from "../analytics/PMAS/PMAS";
import SIS from "../analytics/SIS/SIS";
import BasicModal from "../UI/BasicModal";
import { useSelector } from "react-redux";
import Ticker from "./TickerComp";
import Settings from "./Settings";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#white",
  color: "black",
  padding: theme.spacing(1),
  textAlign: "center",
}));

const Base = () => {
  const BATVStatus = useSelector((state) => state.coreConfig.BATV);
  const EDTStatus = useSelector((state) => state.coreConfig.EDT);
  const DTStatus = useSelector((state) => state.coreConfig.DT);
  const PMASStatus = useSelector((state) => state.coreConfig.PMAS);
  const SISStatus = useSelector((state) => state.coreConfig.SIS);
  const TickerStatus = useSelector((state) => state.coreConfig.Ticker);
  return (
    <Box
      sx={{ flexGrow: 1, marginLeft: "3%", marginRight: "3%" ,marginTop:"3%" }} style={{maxHeight:"90vh"}}
    >
      <Grid container spacing={4}>
        {BATVStatus === true && (
          <Grid item xs={3}>
            <Item>
              <BATV />
            </Item>
          </Grid>
        )}

        {EDTStatus === true && DTStatus === true && (
          <Grid item xs={3}>
            <Item>
              <EDT />
            </Item>
            <br />
            <Item>
              <DT />
            </Item>
          </Grid>
        )}

        {EDTStatus === false && DTStatus === true && (
          <Grid item xs={3}>
            <Item>
              <DT />
            </Item>
          </Grid>
        )}

        {EDTStatus === true && DTStatus === false && (
          <Grid item xs={4}>
            <Item>
              <EDT />
            </Item>
          </Grid>
        )}
        {PMASStatus === true && (
          <Grid item xs={3}>
            <Item>
              <PMAS />
            </Item>
          </Grid>
        )}

        {SISStatus === true && (
          <Grid item xs={3}>
            <Item>
              <SIS />
            </Item>
          </Grid>
        )}
        {TickerStatus === true && (
        <Grid item xs={12} >
        <Ticker/>
      </Grid>
        )}
         <Grid item xs={12} >
         <polygon style={{display: "block"}} fill="black" points="0,0 30,100 61,23 90,100 100,75 100,100 0,100"></polygon>
      </Grid>
      </Grid>
      </Box>
  );
};
export default Base;
