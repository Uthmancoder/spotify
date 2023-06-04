import React, {useState, use} from 'react'

const ChooseFile = () => {
    const [mymusic, setmymusic] = useState(null)
    const pickfile = ()=>{

    }
  
   
   
  return (
    <div>
       <div>
         <input onChange={pickfile} accept=".mp3,.wav" type="file" name="MusicFile" id="chooseBeat"/>
 
         <button >Post music</button>
        </div> 
    </div>
  )
}

export default ChooseFile