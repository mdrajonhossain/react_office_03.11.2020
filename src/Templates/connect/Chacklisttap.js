import React from 'react';
import './Chacklisttap.css';


function Chacklisttap() {

return (
<div className="chacklist">
   <img src="https://bd.freeli.io/images/basicAssets/dueDate.svg" className="chacktitleimg" />
   <div className="Checklisttitle" placeholder="Checklist Title" contentEditable="true"></div>


   <div className="addnewtask">
         <input type="radio" className="radiobox"   value="male"/>
         <img src="https://bd.freeli.io/images/basicAssets/dueDate.svg" className="testtime" />
      <div className="test" placeholder="Add a new task" contentEditable="true"></div>

         <input type="radio" className="radiobox"   value="male"/>
         <img src="https://bd.freeli.io/images/basicAssets/dueDate.svg" className="testtime" />
      <div className="test" placeholder="Add a new task" contentEditable="true"></div>

         <input type="radio" className="radiobox"   value="male"/>
         <img src="https://bd.freeli.io/images/basicAssets/dueDate.svg" className="testtime" />
      <div className="test" placeholder="Add a new task" contentEditable="true"></div>

         <input type="radio" className="radiobox"   value="male"/>
         <img src="https://bd.freeli.io/images/basicAssets/dueDate.svg" className="testtime" />
      <div className="test" placeholder="Add a new task" contentEditable="true"></div>

         <input type="radio" className="radiobox" />
         <img src="https://bd.freeli.io/images/basicAssets/dueDate.svg" className="testtime" />
      <div className="test" placeholder="Add a new task" contentEditable="true"></div>
   </div>
</div>
);
}
export default Chacklisttap;