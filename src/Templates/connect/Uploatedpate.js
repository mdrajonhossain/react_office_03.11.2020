import React from 'react';
import './Uploatedpate.css';


function Uploatedpate() {

    function uploadFile(e) {
        alert("sdfsadf");
    }


return (
   <div className="Uploatedpatebox">
       <div className="header">Upload File</div>
            <button className="file">
                <label htmlFor="upload-photo">Click here to upload file(s) from your device</label>
                <input type="file" name="photo" id="upload-photo" onChange={uploadFile}/>
           </button>
       <div className="Comments">Comments</div>
       <input type="text" className="text" placeholder="Add a comment...."/>
       <button className="Upload">Upload</button>
       <br/>
       <br/>

   </div>

);
}
export default Uploatedpate;