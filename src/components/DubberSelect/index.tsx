import { useCallback, useEffect, useState } from 'react'
import { Select } from 'antd'
import { useGetCVList } from '@/utils/hooks'

const { Option } = Select

interface Props {
  onChange?: (code: string, name: string) => void
}

const DubberSelect: React.FC<Props> = ({ onChange }) => {
  const { cvlist, updateCVList } = useGetCVList()

  const [selectedValue, setSelectedValue] = useState<string | undefined>(() => {
    return cvlist[0]?.name
  })
  useEffect(() => {
    updateCVList()
  }, [])

  useEffect(() => {
    setSelectedValue(cvlist[0]?.name)
  }, [cvlist])

  const handleSelectChange = useCallback(
    (name: string) => {
      setSelectedValue(name)
      const selectedCV = cvlist.find((cv) => cv.name === name)
      console.log(selectedCV.code)
      if (selectedCV) {
        onChange && onChange(selectedCV.code, name)
      }
    },
    [cvlist]
  )

  return (
    <div>
      <Select
        style={{ width: '160px' }}
        onChange={handleSelectChange}
        value={selectedValue}
      >
        {cvlist.map((item) => (
          <Option key={item.id} value={item.name}>
            {item.name}
          </Option>
        ))}
      </Select>
    </div>
  )
}

export default DubberSelect
