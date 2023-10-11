import './index.scss'
import Draggable from 'react-draggable'
import { CloseOutlined } from '@ant-design/icons'

const InfoBoard = ({ pos, node, cats, close }) => {
  if (!node || !node.categorie) {
    return null
  }
  let cat = cats[node.categorie]
  const boardStyle = {
    top: pos.y + 'px',
    left: pos.x + 'px',
  }
  const catStyle = 'color' in cat ? { color: cat.color } : {}

  const shorterString = (str, limit) => {
    let res = '' + str
    if (str.length > limit) {
      res = str.slice(0, limit)
      res += '...'
    }
    return res
  }

  return (
    <Draggable>
      <div className="info-board" style={boardStyle}>
        <CloseOutlined
          className="close-button"
          onClick={() => close()}
          onTouchStart={() => close()}
        />
        <div className="content">
          <img src={'image' in node ? node.image : ''} alt="" />
          <div className="title">
            <div className="name">{node.label}</div>
            <div className="categorie" style={catStyle}>
              {cat !== undefined ? cat.label : ''}
            </div>
          </div>
          <div className="describe">{shorterString(node.info, 80)}</div>
        </div>
      </div>
    </Draggable>
  )
}

export default InfoBoard
