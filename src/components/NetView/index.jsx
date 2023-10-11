import './index.scss'
import React, { useEffect, useRef, useState } from 'react'
import { Edge, Network, Node } from '@/lib/react-vis-network'
import ViewControl from '../ViewControl'
import InfoBoard from '../InfoBoard'
import { useGetCVTree } from '@/utils/hooks'

const DEFAULT_NETWORK_OPTIONS = {
  autoResize: false,
  nodes: {
    shape: 'dot',
  },
  physics: {
    enabled: true,
    stabilization: false,
    solver: 'forceAtlas2Based',
    forceAtlas2Based: {
      gravitationalConstant: -20,
      centralGravity: 0.002,
      springLength: 100,
      springConstant: 0.01,
    },
  },
  edges: {
    width: 0.3,
    color: {
      inherit: 'to',
    },
  },
  interaction: {
    hideEdgesOnDrag: false,
    hover: true,
    multiselect: true,
  },
}

const DefaultNetStyle = {
  NodeColor: '#66bbff',
  NodeBorderWidth: 3,
}

const NetView = ({ selectedValue }) => {
  const netRef = useRef(null)
  const [netOption, setNetOption] = useState(null)
  const [infoBoard, setInfoBoard] = useState(null)
  const [inforBoardSwitch, setInforBoardSwitch] = useState(true)

  const { cvtree, updateCVTree } = useGetCVTree()

  useEffect(() => {
    updateCVTree(selectedValue)
  }, [selectedValue])

  useEffect(() => {
    setNetOptions(DEFAULT_NETWORK_OPTIONS)
  }, [])

  const setNetOptions = (option) => {
    let network = netRef?.current?.network
    network?.setOptions(option)
    setNetOption(option)
  }

  const getNetOptions = () => {
    return netOption
  }

  const createNode = (n, catgories) => {
    let cat = catgories
    let color
    if (cat) {
      color = cat.color
    } else {
      color = DefaultNetStyle.NodeColor
    }
    return (
      <Node
        key={n.id}
        id={n.id}
        label={n.label}
        shape="circularImage"
        image={n.image}
        color={color}
        borderWidth={DefaultNetStyle.NodeBorderWidth}
      />
    )
  }

  const createEdge = (e) => {
    let arrows = ''
    if ('direction' in e && e['direction'] === true) {
      arrows = 'to'
    }
    return (
      <Edge
        key={e.id}
        id={e.id}
        arrows={arrows}
        from={e.from}
        to={e.to}
        label={e.label}
      />
    )
  }

  const handleClick = (params) => {
    handlePopup(params)
  }

  const handlePopup = (params) => {
    const network = netRef?.current?.network
    const node_id = network.getNodeAt(params.pointer.DOM)
    const select_node = typeof node_id !== 'undefined'
    const pos = { x: 20, y: 20 }

    const create_board = () => {
      let node = cvtree.data.nodes.find((n) => n.id === node_id)
      return (
        <InfoBoard
          pos={pos}
          node={node}
          cats={cvtree.categories}
          close={() => setInfoBoard(null)}
        />
      )
    }

    let board = infoBoard
    if (select_node && board === null && inforBoardSwitch) {
      setInfoBoard(create_board())
    } else if (select_node && board !== null && inforBoardSwitch) {
      setInfoBoard(create_board())
    } else if (board !== null) {
      setInfoBoard(null)
    }
  }

  return (
    <>
      {cvtree && cvtree.data && cvtree.data.nodes && (
        <div className="netView">
          <div className="canvas-wrap" id="full-screen-region">
            <Network ref={netRef} onClick={(params) => handleClick(params)}>
              {cvtree.data.nodes.map((n) => createNode(n, cvtree.categories))}
              {cvtree.data.edges.map((n) => createEdge(n, cvtree.categories))}
            </Network>
            {infoBoard}
            <ViewControl setOpt={setNetOptions} getOpt={getNetOptions} />
          </div>
        </div>
      )}
    </>
  )
}

export default NetView
