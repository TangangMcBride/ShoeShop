import { Box, Typography, List, ListItemText } from "@mui/material";
import { Colors } from "../../styles/theme";
import { makeStyles } from "@mui/styles";
import "@fontsource/montez";
import { createTheme } from "@mui/material/styles";

const useStyles = makeStyles({
  box: {
    display: "flex",
    marginTop: 4,
    justifyContent: "center",
    alignItems: "center",
    padding: "2px 8px",
  },
  typography: {
    "&.MuiTypography-root": {
      padding: "4px",
      flexGrow: 1,
      fontSize: "4rem",
      color: Colors.secondary,
      fontFamily: '"Montez", "cursive"',
    },
  },
  list:{
    "&.MuiList-root": {
    flexGrow: 3,
    justifyContent: "center",
    alignItems: "center",
  },
},
});
const Desktopnavbar = (props) => {
  const classes = useStyles(props);
  return (
    <Box className={classes.box}>
      <Typography className={classes.typography}>My Bags</Typography>
      <List className={classes.list} sx={{display: props.type === "row" ? 'flex' : "block",}}>
        <ListItemText  primary="Home" />
        <ListItemText  primary="Categories" />
        <ListItemText  primary="Products" />
        <ListItemText  primary="Contact Us" />
      </List>
    </Box>
  );
};

export default Desktopnavbar;
