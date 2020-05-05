import React, { useRef, useState } from "react";
import { useHistory } from 'react-router';  
import Subheader from "../components/Subheader/Subheader";
import "./GameOver.css";
import axios from "axios"


// function submitForm(contentType, data, setResponse) {
//     axios({
//         url: 'http://localhost:3000/api/upload',
//         method: 'POST',
//         data: data,
//         headers: {
//             'Content-Type': contentType
//         }
//     }).then((response) => {
//         setResponse(response.data);
//         console.log(response.data)
//     }).catch((error) => {
//         setResponse(error);
//     })
// }

function GameOver() {

    const history = useHistory();

    var uploadRef = useRef();
    // var fileCategoryRef = useRef();

    const [file, setFile] = useState();
    const [fileCategory, setFileCategory] = useState();
    const [filename, setFilename] = useState();
    const [filelist, setFilelist] = useState();

    const openBrowser = () => {
        uploadRef.click();
    }

    const onChangeHandler = (e) => {
        console.log(e.target.files[0].name);
        setFile(e.target.files[0])
        setFilename(e.target.files[0].name)
        //{(e) => setFile(e.target.files[0])}
    }

    const fileCategoryChange = (e) => {
        setFileCategory(e.target.value)
    }

    const onClickHandler = (e) => {
        e.preventDefault();
        console.log(fileCategory)
        const formData = new FormData();
        // sendingData.append(nameOfTheImageFiles[i], file, "sample.JPG");
        formData.append("file", file, filename);
        formData.append("fileCategory", fileCategory)
        console.log(formData)
        // submitForm("multipart/form-data", formData, (msg) => console.log(msg));

        axios.post("/api/upload", formData, {
            // receive two parameter endpoint url ,form data
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data'; boundary=${formData._boundary}`
            }
        }).then((res, err) => { // then print response status
            if (err) console.log("omg " + res.send(err))
            console.log(res + " line 69")
            if (res.dataMes.success) {
                history.push("/gameover");
            }
        })
    }

    const getStorageData = (e) => {
        e.preventDefault();

        axios.get('/api/upload')
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    return (
        <div>
            <Subheader h4="Game Over" p="Consolidate important documents and last wishes for when your game is over" />
            <div className="wrapperuploaded">
                <h5 id="uploadHeader">Your Uploaded Files</h5>
                <ul className="list-group" id="uploadedList">
                    <li className="list-group-item groupbox">This is a info list group item</li>
                </ul>
            </div>
            <div className="wrapperupload">
                <div className="containerupload">
                    <h1>Upload a file</h1>
                    <form
                        onSubmit={onClickHandler}
                        id='uploadForm'
                        action='/api/upload'
                        method='post'
                        encType="multipart/form-data">
                        {/* > */}
                        {/* <input type="hidden" id="fileupload-url" name="fileupload-url" ref={ref => uploadRef = ref}></input> */}
                        <div className="upload-container">
                            <div className="border-container">
                                <div className="icons fa-4x">
                                    <i className="fa fa-file-image-o uploadIcon" data-fa-transform="shrink-3 down-2 left-6 rotate--30"></i>
                                    <i className="fa fa-file-text uploadIcon" data-fa-transform="shrink-2 up-4"></i>
                                    <i className="fa fa-file-pdf-o uploadIcon" data-fa-transform="shrink-3 down-2 right-6 rotate-45"></i>
                                </div>
                                <input type="file" name="file" id="file-upload" ref={ref => uploadRef = ref} onChange={onChangeHandler} />
                                <p id="findtext">Drag and drop files here, or
                                <a href="#" id="file-browser" onClick={openBrowser}> browse</a> your computer.</p>
                            </div>
                        </div>
                        <p id="uploadinstructions">Selected File:</p>
                        {/* <input type='text' placeholder='File Category' ref={ref => fileLabelRef = ref} onChange={fileCategoryChange} id="filelabel" className="uploadbox" /> */}
                        <p type="text" id="filenamedisplay">{filename}</p>
                        {/* <input type='submit' value='Upload File' id="uploadbtn" className="uploadbox" /> */}

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-secondary" type="submit" id="uploadbtn">Upload File</button>
                            </div>
                            <select className="custom-select" onChange={fileCategoryChange} id="filelabel">
                                <option defaultValue>Choose Category..</option>
                                <option value="Will">Will</option>
                                <option value="Insurance Policy">Insurance Policy</option>
                                <option value="Banking Details">Banking Details</option>
                                <option value="Last Wishes">Last Wishes</option>
                                <option value="Funeral Photo">Funeral Photo</option>
                                <option value="Special Message">Special Message</option>
                            </select>
                        </div>
                    </form>
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </div>
    )
}

export default GameOver;