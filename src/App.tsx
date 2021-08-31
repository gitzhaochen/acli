import React from 'react'
import Header from '@/components/Header'
import './App.less'
import Icon from '@/components/Icon'
import classNames from 'classnames'

function App() {
  return (
    <div className='app f20 lh2 p20'>
      <Header />
      <div className='fx-v-center'>
        <Icon name='no-1' style={{ color: 'red', width: '20px', height: '20px' }} className='mr10' />
        <span>I am Allen</span>
      </div>
      <div className='fx-v-center'>
        <Icon name='no-2' style={{ color: 'red', width: '20px', height: '20px' }} className='mr10' />
        <span>18 years old</span>
      </div>
      <div className='fx-v-center'>
        <Icon name='no-3' style={{ color: 'red', width: '20px', height: '20px' }} className='mr10' />
        <span>base shanghai.china</span>
      </div>
      <div className='fx-v-center'>
        <Icon name='no-3' style={{ color: 'red', width: '20px', height: '20px' }} className='mr10' />
        <span>work at FE</span>
      </div>
    </div>
  )
}

export default App
