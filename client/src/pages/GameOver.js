import React, { useReducer, useRef }  from "react";
import Subheader from "../components/Subheader/Subheader";
import "./GameOver.css";

function GameOver() {
    const inputRef = useRef();

    // const [items, dispatch] = useReducer((state, action) => {
    //     switch (action.type) {
    //     case "add":
    //       return [
    //         ...state,
    //         {
    //           id: state.length * Math.random(),
    //           name: action.name
    //         }
    //       ];
    //       // Bonus: Remove a todo from the list.
    //     case "remove":
    //       return state.filter((_, index) => {
    //         return index !== action.index;
    //       });
    //     default:
    //       return state;
    //     }
    //   }, []);

    function uploadFile(e) {
        e.preventDefault();
        console.log("file upload working")
    }

    const openBrowser = e => {
        e.preventDefault();
        uploadFile();
        console.log("browser is working")
    }


    return (
        <div>
            <Subheader h4="Game Over" p="Consolidate important documents and last wishes for when your game is over" />

            <div className="wrapperupload">
                <div className="containerupload">
                    <h1>Upload a file</h1>
                    <form 
                        ref={inputRef} 
                        id='uploadForm'
                        action='http://localhost:3000/api/upload'
                        method='post'
                        encType="multipart/form-data">                  
                    
                    <div className="upload-container">
                        <div className="border-container">
                            <div className="icons fa-4x">
                                <i className="fa fa-file-image-o uploadIcon" data-fa-transform="shrink-3 down-2 left-6 rotate--30"></i>
                                <i className="fa fa-file-text uploadIcon" data-fa-transform="shrink-2 up-4"></i>
                                <i className="fa fa-file-pdf-o uploadIcon" data-fa-transform="shrink-3 down-2 right-6 rotate-45"></i>
                            </div>
                            <input type="file" id="file-upload" name="sampleFile" onClick={uploadFile} />
                            <p id="findtext">Drag and drop files here, or
                                <a href="#" id="file-browser" onClick={openBrowser}> browse</a> your computer.</p>
                        </div>
                    </div>
                    <input type='submit' value='Upload!' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default GameOver;