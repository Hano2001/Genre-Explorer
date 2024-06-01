import { useState } from "react";
import YouTube from "react-youtube";
import YoutubeIcon from "@mui/icons-material/Youtube";

export default function YoutubeRender(props: { id: string }) {
  const [hidden, setHidden] = useState<Boolean>(true);
  let classString = hidden ? "invisible" : "visible";
  classString += " z-40 absolute";

  return (
    <>
    <h2>Youtube Tutorial: </h2>
      <button onClick={() => setHidden(!hidden)}>
        <YoutubeIcon
          sx={{
            width: 45,
            height: 45,
            ":hover": { color: "red"},
          }}
        />
      </button>
      <div className={classString}>
        <YouTube videoId={props.id} />
      </div>
    </>
  );
}
