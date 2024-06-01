import { useState } from "react";
import YouTube from "react-youtube";
import YoutubeIcon from "@mui/icons-material/Youtube";

export default function YoutubeRender(props: { id: string }) {
  const [hidden, setHidden] = useState<Boolean>(true);
  let classString = hidden ? "invisible" : "visible";
  classString += " z-40 absolute";

  return (
    <>
      <div className="w-48 flex flex-row w-50 border border-white p-1">
        <h2 className="m-auto ml-1">Youtube Tutorial: </h2>
        <button onClick={() => setHidden(!hidden)}>
          <YoutubeIcon
            sx={{
              width: 45,
              height: 45,
              ":hover": { color: "red" },
            }}
          />
        </button>
      </div>

      <div className={classString}>
        <YouTube videoId={props.id} />
      </div>
    </>
  );
}
