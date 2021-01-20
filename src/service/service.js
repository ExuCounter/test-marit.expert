import { useDispatch } from 'react-redux'
import { setData } from '../redux/actionСreators'

export const getData2 = () => {
  const dispatch = useDispatch()

  let socket = new WebSocket('ws://testapi.marit.expert:3004/')
  socket.onopen = () => {
    socket.send('{cmd:"get_list"}')
  }
  socket.onmessage = (e) => {
    dispatch(setData(JSON.parse(e.data)))
  }
}
