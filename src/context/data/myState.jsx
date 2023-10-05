import React, { useState } from 'react'
import MyContext from './myContext';

function MyState(props) {
  const [mode,setMode] = useState("light");
  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(17, 24, 39)';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

    const state = {
        name: "Kamal Nayan",
        rollno: 9
    }
    const color = "red";

  return (
    <MyContext.Provider value={{mode, toggleMode}}>
       {props.children}
    </MyContext.Provider>
  )
}

export default MyState