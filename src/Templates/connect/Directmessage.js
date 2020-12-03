import React, { useState } from 'react';
import './Directmessage.css';

var car = [
    {username:"MD Maruf Hasan", model:"500", color:"white"},
    {username:"Himel Talukder", model:"500", color:"white"},
    {username:"AH Nayeem", model:"500", color:"white"},
    {username:"Alamgir Hossain", model:"500", color:"white"},
    {username:"Manzurul  Alam", model:"500", color:"white"},
    {username:"Jahirul Islam", model:"500", color:"white"},
    {username:"Dalim Chowdhury", model:"500", color:"white"},
    {username:"Ali  Azam", model:"500", color:"white"},
    {username:"SM Jubayer", model:"500", color:"white"},
    {username:"Kallol Ray94", model:"500", color:"white"},
    {username:"TestUser Jahirul", model:"500", color:"white"},
    {username:"x1 demo", model:"500", color:"white"},
    {username:"User Demo", model:"500", color:"white"},
    {username:"Rajon", model:"500", color:"white"},
    {username:"Demo1", model:"500", color:"white"},
    {username:"Demo2", model:"500", color:"white"}
];
function Directmessage(props) {
   // const [directmess, setDirectmess] = useState(false);


function directmessage(){
     // alert(props.name);
     // alert(props.Conversationtab);


        var text = document.getElementsByClassName('directmessbox');
        for (var i = 0; i < text.length; i ++) {
            text[i].style.display = 'block';
        }
    props.setConversationadd(!props.conversationadd);
   }

    function directmessageclose(){
        props.setConversationadd(!props.conversationadd);
        var text = document.getElementsByClassName('directmessbox');
        for (var i = 0; i < text.length; i ++) {
            text[i].style.display = 'none';
        }
    }


    function directmessboxclose(){

        var text = document.getElementsByClassName('directmessbox');
        for (var i = 0; i < text.length; i ++) {
            text[i].style.display = 'none';
        }
    }


return (

    <div className="">
            <div className="conversationcss" style={{ display: props.conversationadd ? 'block' : 'none' }}>
                <img src="https://bd.freeli.io/images/basicAssets/close_button.svg" onClick={directmessageclose}
                    className="close" />
                <div className="" style={{fontSize: '20px'}}>Conversation</div><br/>
                <div className="row">
                  <div className="col-md-6">
                     <div className="directms" onClick={directmessage}>Direct Message</div>
                  </div>
                  <div className="col-md-6">
                      <div className="directms" onClick={directmessage}>Create Room</div>
                  </div>
                </div>
            </div>


           <div className="directmessbox" style={{ display: 'none' }}>
               <img src="https://bd.freeli.io/images/basicAssets/close_button.svg" onClick={directmessboxclose}
                    className="close" />
               <div className="" style={{ fontSize : '24px', color: '#023d67' }}>Create Direct Message</div>
               <div className="">
                   <input type="text" placeholder="Search a User" className="createdirectmessageinput"/>
                   <button type="button" disabled className="btn createdirectmessagebutton">Start</button>
               </div><br/>
               <span className="conditext">Select only one member at a time</span>
               <div className="userlist">
                   {
                       car.map(item => {
                           return <ul>
                               <div className="userhover"><li>{item.username}</li></div>
                           </ul>
                       })
                   }
               </div>
           </div>

   </div>


);
}
export default Directmessage;