import { IVideoProps } from '@/interfaces/video-interface'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const DynamicVideoPlayer = dynamic(() => import('./DynamicPlayer'), {
  ssr: false,
})

const VideoPlayer: NextPage<IVideoProps> = ({ width, height, style }) => {
  return <DynamicVideoPlayer style={style} width={width} height={height} />
}

export default VideoPlayer
