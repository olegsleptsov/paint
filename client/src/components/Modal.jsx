/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react'
import { Button, Input, Modal as AntdModal } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import userState from '../store/userState';

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [userName, setUserName] = useState('');
  const inputRef = useRef();

  const handleOk = () => {
    userState.setUserName(userName)
    setIsModalOpen(false);
  };

  const onChangeName = (e) => setUserName(e.target.value)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <AntdModal
      title="Hello 👋"
      open={isModalOpen}
      footer={[
        <Button key="submit" type="primary" onClick={handleOk}>
          OK
        </Button>
      ]}
    >
      <Input
        ref={inputRef}
        placeholder="Enter your name"
        prefix={<UserOutlined />}
        onChange={onChangeName}
        value={userName}
        onPressEnter={handleOk}
        autoFocus={true}
      />
    </AntdModal>
  );
};

export default Modal