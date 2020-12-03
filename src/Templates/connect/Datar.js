import React, { useState } from 'react';
import Directmessage from "./Directmessage";


function Datar(props) {
    const [conversationadd, setConversationadd] = useState(false);

    function conversationaddmedthod() {
        setConversationadd(!conversationadd)

         }


return (

    <div className="">
        <ul>
            <li id="cc" style={{color: '#fcd65f'}}>WorkFreeli Notification(s)</li>
            <span style={{fontSize: '20px', lineHeight: '60px', marginLeft: '-20px'}}>Pinned</span>
            <li>Md. Rajon Hossain</li>
            <span className="conversations">Conversations(s)</span> &nbsp;
            <img src="https://bd.freeli.io/images/basicAssets/conv-i-new-bb.png" className="site_top"/> &nbsp; &nbsp; &nbsp;

            <img src="https://bd.freeli.io/images/basicAssets/inactiveSvg/time-circle-plus.svg"
                 onClick={conversationaddmedthod} className="conversationadd"/>
        </ul>


        <Directmessage name="Sara"
            setConversationadd= {setConversationadd}
                       conversationadd= {conversationadd}/>




   </div>
);
}
export default Datar;