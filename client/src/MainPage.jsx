/* eslint-disable react-hooks/exhaustive-deps */
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import Canvas from './components/Canvas'
import Modal from './components/Modal'
import SettingBar from './components/SettingBar'
import Toolbar from './components/Toolbar'
import userState from './store/userState'
import { useParams } from 'react-router-dom'
import { notification } from 'antd'
import { SmileOutlined } from '@ant-design/icons';

const MainPage = observer(() => {
  const { sessionId } = useParams()

  useEffect(() => {
    if (userState.userName) {
      const socket = new WebSocket('ws://localhost:5000')
      socket.onopen = () => {
        socket.send(JSON.stringify({
          userName: userState.userName,
          method: 'connection',
          sessionId,
        }))
      }
      socket.onmessage = (msg) => {
        const message = JSON.parse(msg.data)
        message.userName !== userState.userName &&
          notification.open({
            message: message.title,
            icon: (<SmileOutlined style={{ color: '#108ee9' }} />),
          });
      }
    }
  }, [userState.userName])

  return (
    <>
      <Modal />
      <Toolbar />
      <SettingBar />
      <Canvas />
    </>
  );
});

export default MainPage