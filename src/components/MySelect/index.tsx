import React, { useEffect, useCallback, useState } from 'react'
import { Select } from 'antd'
import { useGetArchiveList } from '@/utils/hooks'

const { Option } = Select

interface Props {
  onChange?: (value: string) => void
}

const MySelect: React.FC<Props> = ({ onChange }) => {
  const { archive, updateArchiveList } = useGetArchiveList()

  const [selectedValue, setSelectedValue] = useState<string | undefined>(() => {
    return archive[0]?.name
  })

  useEffect(() => {
    updateArchiveList()
  }, [])

  useEffect(() => {
    setSelectedValue(archive[0]?.name)
  }, [archive])

  const handleSelectChange = useCallback((name: string) => {
    setSelectedValue(name)
    onChange && onChange(name.replace('-', ''))
  }, [])

  return (
    <div>
      <Select
        style={{ width: '120px' }}
        onChange={handleSelectChange}
        value={selectedValue}
      >
        {archive.map((item) => (
          <Option key={item.id} value={item.name}>
            {item.name}
          </Option>
        ))}
      </Select>
    </div>
  )
}

export default MySelect
