import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Mobilenavbar from "./mobilenavbar";
import Desktopnavbar from "./Desktopnavbar";

const Appbar = () => {
    const theme = useTheme();
    const medium = useMediaQuery(theme.breakpoints.down('md'));
    return (
    <div>
      {medium ? <Mobilenavbar /> : <Desktopnavbar/>}

    </div>  );
}
 
export default Appbar;