import React from 'react'

const HeaderFileToggle = ({setDarkTheme}) => {
  return (
    <div className='Header'>
        <h1>Keep Notes</h1>
        <button onClick ={() => setDarkTheme((previousState) => !previousState)} className='Save-Button'>Toggle Mode</button>
    </div>
  )
}

export default HeaderFileToggle;