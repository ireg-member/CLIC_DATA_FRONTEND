import React from 'react'
import { useState } from 'react';
import '../authentication/login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loginUpResponseErrors } from '../authentication/responseErrors';
import Lodder from '../authentication/Lodder';

const SendPost = () => {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState({});
    const [postData, setPostData] = useState({
      description: "",
      image: ""
    });
  
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` }
      };
      await axios.get(
        `http://localhost:8000/social_media/upload_post_on_fb/?title=${postData.description}&thumbnail=${postData.image}`,
        config
      )
      .then((data) => {
        if (data.status === 200){
          setIsLoading(false)
          setPostData(
            {
                description: "",
                image: ""
            }
          )
          
        }
      })
      .catch((error) => {
        setErr(loginUpResponseErrors(error));
        setIsLoading(false)
      })
    }

  return (
    <div>
        <div className="component-wrapper">
      { isLoading && (<Lodder/>)}
      <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
        <div className='form_container 50-w p-5 rounded bg-white'>
          <form onSubmit={handleSubmit}>
            <h3 className='text-center'>Post on Facebook</h3>

            <div className="mb-2">
              <label htmlFor='description'>Description</label>
              <input type='text' id='description' placeholder='Enter your Description' className='form-control' value={postData.description} onChange={(e) => setPostData((prevState) => ({...prevState, description:e.target.value}))}/>
            </div>

            <div className="mb-2">
              <label htmlFor='image'>Past The Link of Image</label>
              <input type='text' id='image' placeholder='Enter Image Link' className='form-control' value={postData.image} onChange={(e) => setPostData((prevState) => ({...prevState, image:e.target.value}))}/>
            </div>

            <div className="d-grid">
              <button className='btn btn-primary'>Post</button>
            </div>

          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SendPost