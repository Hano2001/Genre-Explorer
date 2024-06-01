import { useState } from "react";
import YouTube from "react-youtube";

export default function YoutubeRender(props: { id: string }) {
  const [hidden, setHidden] = useState<Boolean>(true);
  let classString = hidden ? "invisible" : "visible";
  classString += " z-40 absolute";
  return (
    <>
      <button onClick={() => setHidden(!hidden)}>Show</button>
      <div className={classString}>
        <YouTube videoId={props.id} />
      </div>
    </>
  );
}
