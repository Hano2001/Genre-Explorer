import { GitHub } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer>
        <GitHub>
          <Link to="https://github.com/Hano2001/Recipe-Explorer" />
        </GitHub>
      </footer>
    </div>
  );
}
