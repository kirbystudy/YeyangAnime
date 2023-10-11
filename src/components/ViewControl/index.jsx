import './index.scss'
import { useState } from 'react'
import { Space, Tooltip } from 'antd'
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md'

const getCanvas = () => document.getElementsByTagName('canvas')[0]

const ViewControl = () => {
  const [fullScreenMode, setFullScreenMode] = useState(false)

  let oriHeight = 300

  const enterFullScreen = () => {
    let canvas = getCanvas()
    let fullRegion = document.getElementById('full-screen-region')
    fullRegion?.requestFullscreen()
    oriHeight = canvas.clientHeight
    canvas.style.height = window.screen.height + 'px'
    setFullScreenMode(true)
    document.addEventListener('fullscreenchange', (event) => {
      if (!document.fullscreenElement) {
        turnBackSize()
        setFullScreenMode(false)
      }
    })
  }

  const turnBackSize = () => {
    let canvas = getCanvas()
    canvas.style.height = oriHeight + 'px'
  }

  const exitFullScreen = () => {
    document.exitFullscreen()
    turnBackSize()
    setFullScreenMode(false)
  }

  return (
    <div className="viewControl">
      <Space>
        {fullScreenMode ? (
          <Tooltip title="退出全屏" placement="top">
            <MdFullscreenExit
              style={{ color: '#fff', fontSize: '24px' }}
              onClick={exitFullScreen}
            />
          </Tooltip>
        ) : (
          <Tooltip title="全屏" placement="top">
            <MdFullscreen
              style={{ color: '#fff', fontSize: '24px' }}
              onClick={enterFullScreen}
            />
          </Tooltip>
        )}
      </Space>
    </div>
  )
}

export default ViewControl
