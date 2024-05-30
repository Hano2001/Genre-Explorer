import { GitHub } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-black h-10">
      <footer>
        <Link to="https://github.com/Hano2001/Recipe-Explorer">
          <GitHub
            sx={{
              width: 45,
              height: 45,
              color: "white",
              borderRadius: 100,
              ":hover": { color: "black", bgcolor: "white" },
            }}
          />
        </Link>
      </footer>
    </div>
  );
}
