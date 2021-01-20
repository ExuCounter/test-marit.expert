import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setData } from './redux/actionСreators'

import './App.scss'

const App = () => {
  const dispatch = useDispatch()
  const socketData = useSelector((state) => state.socketData)

  const getData = () => {
    let socket = new WebSocket('ws://testapi.marit.expert:3004/')
    socket.onopen = () => {
      socket.send('{cmd:"get_list"}')
    }
    socket.onmessage = (e) => {
      dispatch(setData(JSON.parse(e.data)))
    }
  }

  useEffect(() => {
    getData()
  }, [])

  function render(data) {
    return [...new Set(data.map(({ race }) => race))].map((category, idx) => ({
      id: idx + 1,
      race: category,
      data: data
        .filter(({ race }) => race === category)
        .map(({ name }, idx) => ({ id: idx + 1, name })),
    }))
  }

  if (!socketData) return <div className="loader">Loading...</div>
  console.log(render(socketData))

  const itemList = socketData.map((i) => {
    const { id, race, name } = i
    return (
      <div className="column" key={id}>
        <div className="race">{race}</div>
        <div className="name">
          <img src="" className="placeholder" />
          <p>{name}</p>
          <button className="edit-btn" onClick={() => editItem(race, id)}>
            <i className="fas fa-edit"></i>
          </button>
          <button className="delete-btn" onClick={() => deleteItem(race, id)}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
        <button className="add-btn">
          <i className="fas fa-plus-circle"></i>
        </button>
      </div>
    )
  })

  return <div className="d-flex">{itemList}</div>
}

export default App
