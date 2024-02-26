import { IVideoProps } from '@/interfaces/video-interface'
import { FC, useState } from 'react'
import ReactPlayer from 'react-player'
import styles from './VideoPlayer.module.scss'

const data: string[] = [
  'https://cdn.akamai.steamstatic.com/apps/csgo/videos/csgo_react/cs2/cs2_header.mp4',
  'https://cdn.akamai.steamstatic.com/apps/csgo/videos/csgo_react/cs2/cs2_header.mp4',
]

const DynamicPlayer: FC<IVideoProps> = ({
  style,
  width = '100%',
  height = 'inherit',
}) => {
  const [video, setVideo] = useState<string>(data[1])
  const [isPlaying, setPlaying] = useState<boolean>(false)
  const handleOnReady = () => setTimeout(() => setPlaying(true), 1000)

  return (
    <div className={styles.box}>
      <ReactPlayer
        style={style}
        width={width}
        height={height}
        url={video}
        controls={false}
        playing={isPlaying}
        onReady={handleOnReady}
        volume={0}
        onEnded={() => setVideo(data[0])}
      />
      <div className={styles.shadow}></div>
    </div>
  )
}

export default DynamicPlayer
