import React  from 'react'
import onlineIcon from  '../../icons/onlineIcon.png'
import closeIcon from '../../icons/closeIcon.png'
import './InfoBar.css'


export default function InfoBar( {room , theme, setTheme } ) {

  const label = 'Dark Mode'
  const info_Bar = `infoBar ib-${theme}` 

  function clicked(){
    var checkbox = document.getElementById({label})

    if(checkbox.checked == true){
      setTheme('dark')
    }
    else{
      setTheme('light')
    }
  }

  
  return (
    <div className={info_Bar}>
        <div className='leftInnerContainer'>
            {/* <img className='pfp' src={avatarsrc} alt="pfp" /> */}
           <img className='onlineIcon' src={onlineIcon} alt="online icon"/> 
            <h3>{room}</h3>
        </div>

        <div className='rightInnerContainer'>
          <div className='theme-btn'>
                <div className="toggle-switch">
                <input type="checkbox" className="checkbox" 
                    name={label} id={label} 
                    onClick={(e)=>{
                      if(e.target.checked) setTheme('dark')
                      else setTheme('light')
                    }}
                    />
                <label className="label" htmlFor={label}>
                <span className="inner" />
                <span className="switch" />
                </label>
              </div>
          </div>
            <a href="/"><img src={closeIcon}  alt="close icon"/></a>
        </div>
    </div>

    

  )
}
