import React, { useRef, useState, useCallback, useEffect, useContext } from "react";
import { useHistory } from 'react-router';
import { useDropzone } from "react-dropzone";
import Subheader from "../components/Subheader/Subheader";
import { UserProvider, useUserContext } from "../utils/userLoginContext"
import "./GameOver.css";
import axios from "axios"


function GameOver() {

    const history = useHistory();

    var uploadRef = useRef();
    var fileFormRef = useRef();
    var listRef = useRef();

    // useContext
    // const [ user, setUser ] = useState()
    const [state, dispatch] = useUserContext();
    const [file, setFile] = useState();
    const [fileCategory, setFileCategory] = useState();
    const [filename, setFilename] = useState();
    // const [filelist, setFilelist] = useState();
    // const [token, setToken] = useState();
    const [list, setList] = useState([]);

    useEffect(() => {

        const getToken = localStorage.getItem('token');
        const getUserid = localStorage.getItem('userId')
        const getLoggedIn = localStorage.getItem('loggedIn')

        // axios.get using userid and token from localstorage, backend use id to verify against mongoose id + token (middle)

        axios.get("/api/users/account/" + getUserid, {
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${getToken}`
            }
        }).then((res, err) => { // then print response status
            if (err) throw (err)

            if (res.data.success) {
                console.log("get userlogin status is successful")
                dispatch({ type: "logged in", username: res.data.user.username })
                history.push("/gameover");
            }
        })

        getStorageData()

        // axios.get("/api/upload", {
        //     headers: {
        //         'accept': 'application/json',
        //         'Authorization': `Bearer ${getToken}`
        //     }
        // })
        //     .then(function (response) {
        //         console.log(response.data);
        //         // dispatch({type:"logged in", username: response.data.user.username})
        //         const listArray = response.data;
        //         setList(listArray)

        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

    }, [])

    const onDrop = useCallback(acceptedFiles => {

        console.log(acceptedFiles[0])
        setFile(acceptedFiles[0])
        setFilename(acceptedFiles[0].name)

    }, [file])



    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const openBrowser = () => {
        uploadRef.click();
    }

    const onChangeHandler = (e) => {
        console.log(e.target.files[0].name);
        setFile(e.target.files[0])
        setFilename(e.target.files[0].name)
    }

    const fileCategoryChange = (e) => {
        setFileCategory(e.target.value)
    }

    // Upload file function
    const onClickHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("file", file, filename);
        formData.append("fileCategory", fileCategory)

        const getToken = localStorage.getItem('token');
        const getUserid = localStorage.getItem('userId')
        const getLoggedIn = localStorage.getItem('loggedIn')

        axios.post("/api/upload", formData, {
            // receive two parameter endpoint url ,form data
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data'; boundary=${formData._boundary}`,
                'Authorization': `Bearer ${getToken}`
            }
        }).then((res, err) => { // then print response status
            if (err) throw (err)
            console.log(res)
            if (res.data.success) {
                console.log("file upload is successful")
                resetFields();
                getStorageData();
                history.push("/gameover");
            }
        })
    }

    function resetFields() {
        fileFormRef.reset();
        setFilename("")
    }



    const getStorageData = () => {
        const getToken = localStorage.getItem('token');
        const getUserid = localStorage.getItem('userId')
        const getLoggedIn = localStorage.getItem('loggedIn')

        axios.get('/api/upload', {
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${getToken}`
            }
        })
            .then(function (response) {
                console.log(response);
                const listArray = response.data;
                setList(listArray)

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function deleteFile({_id:_id, filename: filename}) {
        const getToken = localStorage.getItem('token');
        console.log(filename)
        console.log(_id)
        axios.delete("/api/delete", { 
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${getToken}`
            },
            params: { 
                filename: filename,
                id: _id  }
        })
        .then(function (response) {
            console.log(response)
            getStorageData();
            resetFields();
            history.push("/gameover");
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div>
            <Subheader h4="Game Over" p="Consolidate important documents and last wishes for when your game is over" />
            <div className="wrapperuploaded container">
                <h3 id="uploadListHeader">Your Uploaded Files</h3>
                <div className="list-group d-flex flex-row flex-wrap uploadedList">
                    {list.map(({ filename, fileCategory, _id }) => (

                        <div key={_id} ref={ref => listRef = ref} className="card col-sm-5 fileCard">
                            <h5 className="card-header cardHead">{filename}</h5>
                            <div className="card-body">
                                <h5 className="card-title cardCategory">{fileCategory}</h5>
                                <p className="card-text">Nominee Tags</p>
                                <button className="deletebtn1"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                <button onClick={()=>deleteFile({_id:_id, filename: filename})} className="deletebtn1"><i className="fa fa-trash" aria-hidden="true"></i></button>
                            </div>
                        </div>

                    ))}
                </div>

            </div>
            <div className="wrapperupload">
                <div className="containerupload">
                    <h3 id="uploadHeader">Upload a file</h3>
                    <form
                        onSubmit={onClickHandler}
                        id='uploadForm'
                        action='/api/upload'
                        method='post'
                        ref={ref => fileFormRef = ref}
                        encType="multipart/form-data">
                        {/* > */}
                        <div {...getRootProps()}>
                            <div id="upload-container">
                                <div className="border-container">
                                    <div className="icons fa-4x">
                                        <i className="fa fa-file-image-o uploadIcon" data-fa-transform="shrink-3 down-2 left-6 rotate--30"></i>
                                        <i className="fa fa-file-text uploadIcon" data-fa-transform="shrink-2 up-4"></i>
                                        <i className="fa fa-file-pdf-o uploadIcon" data-fa-transform="shrink-3 down-2 right-6 rotate-45"></i>
                                    </div>
                                    <input {...getInputProps()} type="file" name="file" id="file-upload" ref={ref => uploadRef = ref} onChange={onChangeHandler} />
                                    <p id="findtext">Drag and drop files here, or
                                <a href="#" id="file-browser" onClick={openBrowser}> browse</a> your computer.</p>
                                </div>
                            </div>
                        </div>

                        <p id="uploadinstructions">Selected File:</p>
                        <p type="text" id="filenamedisplay">{filename}</p>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-secondary" type="submit" id="uploadbtn">Upload File</button>
                            </div>
                            <select className="custom-select" onChange={fileCategoryChange} id="filelabel">
                                <option defaultValue>Choose Category..</option>
                                <option value="Final Will">Final Will</option>
                                <option value="Insurance Policy">Insurance Policy</option>
                                <option value="Financial Account Details">Financial Account Details</option>
                                <option value="Trust and Nuptial Agreement">Trust and Nuptial Agreement</option>
                                <option value="Income Tax Returns">Income Tax Returns</option>
                                <option value="Birth, Marriage and Death Certificates">Birth, Marriage and Death Certificates</option>
                                <option value="Divorce Papers">Divorce Papers</option>
                                <option value="Vehicle Titles and Auto Insurance Policies">Vehicle Titles and Auto Insurance Policies</option>
                                <option value="Deeds or Leases">Deeds or Leases</option>
                                <option value="Utility, Online Stores, and Social Media Account Details">Utility, Online Stores, and Social Media Account Details</option>
                                <option value="Last Wishes">Last Wishes</option>
                                <option value="Funeral Photo">Funeral Photo</option>
                                <option value="Special Messages">Special Messages</option>
                                <option value="Others..">Others..</option>
                            </select>
                        </div>
                    </form>
                    <br />
                </div>
            </div>
            {/* modal trigger button
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                Launch demo modal
            </button> */}

            {/* modal */}
            {/* <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div> */}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default GameOver;