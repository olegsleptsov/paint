/* eslint-disable no-undef */
import './styles/app.scss'
import 'antd/dist/antd.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainPage from "./MainPage"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path="/:sessionId" element={<MainPage />} />
          <Route
            path="*"
            element={<Navigate to={`d${(+new Date()).toString(16)}`} replace />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
