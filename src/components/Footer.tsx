import { GitHub } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-black h-10 mb-2 flex-end ">
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
        <p className="text-white">Made by Hano2001</p>
      </footer>
    </div>
  );
}
