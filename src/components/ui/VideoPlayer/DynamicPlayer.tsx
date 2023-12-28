import { IVideoProps } from '@/interfaces/video-interface'
import { FC, useState } from 'react'
import ReactPlayer from 'react-player'
import styles from './VideoPlayer.module.scss'

const data: string[] = [
  'https://cdn.akamai.steamstatic.com/apps/csgo/videos/csgo_react/cs2/competitive_clip.webm',
  'https://cdn.akamai.steamstatic.com/apps/csgo/videos/csgo_react/cs2/cs2_header.mp4',
]

const DynamicPlayer: FC<IVideoProps> = ({
  style,
  width = '100',
  height = 'inherit',
}) => {
  let i = 0

  return (
    <div className={styles.box}>
      <ReactPlayer
        style={style}
        width={width}
        height={height}
        url={data[1]}
        controls={false}
        playing={true}
      />
      <div className={styles.shadow}></div>
    </div>
  )
}

export default DynamicPlayer
