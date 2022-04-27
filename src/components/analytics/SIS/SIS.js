import file from "../../Data/data.json";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import "./BATV.css";
import { Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useState } from "react";
const abrv = file.s;
const alternatingColor = ["#ffffff", "#f8f8f8"];
let obj = [];
for (let i = 0; i < abrv.length; i++) {
  obj.push({ name: abrv[i] });
}
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",

  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const SIS = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "0vh",
          paddingTop: "1vh",
        }}
      >
        <b><Typography variant={"h6"}>Stations in Service</Typography></b>
        <Card style={{ height: "5vh", marginLeft: "10%" }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Card>
      </div>
      <div
        style={{
          flexDirection: "col",
          overflow: "scroll",
          height: "60vh",
        }}
      >
        {obj
          .filter((item) => {
            if (search === "") {
              return item;
            } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
              return item;
            }
          })
          .map((item,index) => (
            <ListGroup>
              <ListGroupItem style={{background:alternatingColor[index % alternatingColor.length],borderRadius:"1px"}}>
                <div
                  style={{
                    paddingTop: "2%",
                    lineHeight: "50%",
                  }}
                >
                  <Typography style={{ textAlign: "center" }}>{item.name}</Typography>

                </div>
              </ListGroupItem>
            </ListGroup>
          ))}
      </div>
    </>
  );
};
export default SIS;
