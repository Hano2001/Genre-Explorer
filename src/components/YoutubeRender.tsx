import React from 'react'
import YouTube from 'react-youtube'

export default function YoutubeRender(props:{id:string}) {
  return (
    <div>
        <YouTube videoId={props.id}/>
    </div>
  )
}
