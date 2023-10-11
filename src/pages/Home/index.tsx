import style from './index.module.scss'
import { useState } from 'react'
import SubTitle from '@/components/SubTitle'
import Carousel from '@/components/Carousel'
import MySelect from '@/components/MySelect'
import DubberSelect from '@/components/DubberSelect'
import NetView from '@/components/NetView'

const Home: React.FC = () => {
  const [value, setValue] = useState<string>()
  const [value1, setValue1] = useState<string>()

  const handleSelectChange = (value: string) => {
    setValue(value)
  }

  const handleSelectChange1 = (value: string) => {
    setValue1(value)
  }

  return (
    <div className={style.home}>
      <SubTitle
        title="新番推荐"
        icon="bofang"
        extra={<MySelect onChange={handleSelectChange} />}
      ></SubTitle>
      <Carousel selectedValue={value} />

      <SubTitle
        title="声优推荐"
        icon="bofang"
        extra={<DubberSelect onChange={handleSelectChange1} />}
      ></SubTitle>
      <NetView selectedValue={value1}/>
    </div>
  )
}

export default Home
