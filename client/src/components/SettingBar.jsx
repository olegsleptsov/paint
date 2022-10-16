import React from 'react';
import toolsState from '../store/toolsState';
import '../styles/settingbar.scss';

const SettingBar = () => {
  const onChangeWidth = (e) => toolsState.setLineWidth(e.target.value)
  const onChangeColor = (e) => toolsState.setStrokeColor(e.target.value)

  return (
    <div className='settingbar'>
      <label className='setting-label' htmlFor='line-width'>
        <span className='setting-label-title'>Толщина линии</span>
        <input id='line-width' type="number" min={1} max={50} defaultValue={1} onChange={onChangeWidth} />
      </label>
      <label className='setting-label' htmlFor='stroke-color'>
        <span className='setting-label-title'>Цвет</span>
        <input id='stroke-color' type="color" defaultValue="#000000" onChange={onChangeColor} />
      </label>
    </div>
  );
};

export default SettingBar;