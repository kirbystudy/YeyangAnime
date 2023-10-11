import style from './index.module.scss'
import { Image } from 'antd'

const AnimeDetailHeader: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image
          src="https://i0.hdslb.com/bfs/new_dyn/6fdf09cce834a227c2174b9f2d59b9d7512995925.jpg"
          referrerPolicy="no-referrer"
          preview={false}
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default AnimeDetailHeader
