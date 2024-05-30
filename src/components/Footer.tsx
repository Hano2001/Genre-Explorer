import { GitHub } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-black h-10">
      <footer>
        <GitHub style={{color: "white"}}>
          <Link to="https://github.com/Hano2001/Recipe-Explorer" />
        </GitHub>
      </footer>
    </div>
  );
}
