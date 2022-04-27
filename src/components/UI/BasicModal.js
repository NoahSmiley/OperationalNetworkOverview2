import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { coreActions } from "../../store/store";
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
      borderRadius: 22 / 2,
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 16,
        height: 16,
      },
      '&:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      '&:after': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: 'none',
      width: 16,
      height: 16,
      margin: 2,
    },
  }));
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const BATVStatus = useSelector((state) => state.coreConfig.BATV);
  const EDTStatus = useSelector((state) => state.coreConfig.EDT);
  const DTStatus = useSelector((state) => state.coreConfig.DT);
  const PMASStatus = useSelector((state) => state.coreConfig.PMAS);
  const SISStatus = useSelector((state) => state.coreConfig.SIS);
  const TickerStatus = useSelector((state) => state.coreConfig.Ticker);
  const dispatch = useDispatch();
  return (
    <FormGroup>
      <FormControlLabel
        // control={<Checkbox checked={BATVStatus} />}
        control={<Android12Switch checked={BATVStatus} />}
        label="Station Battery Voltage"
        onClick={() => dispatch(coreActions.setBATV())}
      />
      <FormControlLabel
        control={<Android12Switch checked={EDTStatus} />}
        label="Extremely Delayed Time"
        onClick={() => dispatch(coreActions.setEDT())}
      />
      <FormControlLabel
        control={<Android12Switch checked={DTStatus} />}
        label="Delayed Time"
        onClick={() => dispatch(coreActions.setDT())}
      />
      <FormControlLabel
        control={<Android12Switch checked={PMASStatus} />}
        label="PMAS"
        onClick={() => dispatch(coreActions.setPMAS())}
      />
      <FormControlLabel
        control={<Android12Switch checked={SISStatus} />}
        label="Stations in Service"
        onClick={() => dispatch(coreActions.setSIS())}
      />
      <FormControlLabel
        control={<Android12Switch checked={TickerStatus} />}
        label="Ticker"
        onClick={() => dispatch(coreActions.setTicker())}
      />
    </FormGroup>
  );
}
