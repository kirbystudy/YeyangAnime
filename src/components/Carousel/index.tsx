import { useEffect } from 'react'
import style from './index.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Navigation,
  Pagination,
  EffectCreative,
  Autoplay,
} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { useGetBannerList } from '@/utils/hooks'

const Carousel: React.FC<{ selectedValue: string }> = ({ selectedValue }) => {
  const { banner, updateBannerList } = useGetBannerList()

  useEffect(() => {
    updateBannerList(selectedValue)
  }, [selectedValue])

  return (
    <div className={style.carousel}>
      <div className={style.bannerTitle}>{banner?.name}</div>
      <Swiper
        key={banner?.time}
        pagination={{
          type: 'fraction',
        }}
        loop={true} //设置循环轮播
        spaceBetween={-200} //设置堆叠轮播，item之间叠的距离
        slidesPerView={3} //设置显示的数量
        navigation={true} //modules上加了同时要设置为true，才显示
        modules={[Navigation, Pagination, EffectCreative, Autoplay]}
        autoplay={{
          delay: 3000,
        }}
        grabCursor={true}
        effect={'creative'} //modules上加了同时要设置
        centeredSlides={true}
        creativeEffect={{
          prev: {
            //这里是设置当前item的前一项的具体属性
            translate: [-240, 0, 0], //偏移量
            scale: 0.8, //缩放量
            opacity: 1, //透明度
            shadow: false, //是否加阴影
          },
          next: {
            //这里是设置当前item的后一项的具体属性，同上面
            translate: [240, 0, 0],
            scale: 0.8,
            opacity: 1,
            shadow: false,
          },
          limitProgress: 2, //显示五个堆叠的最重要的这个属性，后面依次以前面属性等比配置
          shadowPerProgress: true, //是否等比配置透明度
        }}
        touchRatio={0.5} // 设置滑动的灵敏度，值范围为0到1，默认为1
      >
        {banner?.bannerVOList?.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              className={style.img}
              referrerPolicy="no-referrer"
              src={item.poster}
            />
            <div className={style.slideContent}>
              <h2 className={style.name}>{item.name}</h2>
              <p className={style.tags}>
                {item.type && (
                  <span>
                    {item.type}{' '}
                    {item.pv && (
                      <a href={item.pv} target="_blank">
                        [PV]
                      </a>
                    )}
                  </span>
                )}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel
