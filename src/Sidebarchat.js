import React,{useState,useEffect} from 'react'
import './Sidebarchat.css'
import {Avatar} from "@material-ui/core"

function Sidebarchat({ addnewchat }) {

      const [seed, setseed] = useState('');

      useEffect(() => {
            setseed(Math.floor(Math.random()*5000));
      }, []);

      const createChat = () =>{
            const roomName = prompt('Please enter name for chat');
            if (roomName){
                  //  do some clever stuff.
            }
      }

      return !addnewchat? (
            <div className='sidebarchat'>
                  <Avatar  src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                  <div className="sidebarchat__info">
                        <h2>Room name</h2>
                        <p> Last Message...</p>
                  </div>

            </div>
      ):
      (
            <div onClick={createChat} className='sidebarchat'>
                  <h2>Add new chat</h2>
            </div>
      )
}

export default Sidebarchat
