import React from 'react'
import { useState } from 'react';
import '../authentication/login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { loginUpResponseErrors } from '../authentication/responseErrors';
import Lodder from '../authentication/Lodder';
import FacebookConnect from './FacebookConnect';
import InstagramConnect from './InstagramConnect';

const AllSocialApps = () => {
  return (
    <div className="component-wrapper">
        <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
            <div className='form_container 50-w p-5 rounded bg-white'>
                <h5>Connect your facebook account</h5>
                {<FacebookConnect />}
                <h5>Connect your Instagram account</h5>
                {<InstagramConnect />}
                <p className='text-end mt-2'>
                    After connecting <Link to="/send-post" className='ms-2'>Move Next</Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default AllSocialApps