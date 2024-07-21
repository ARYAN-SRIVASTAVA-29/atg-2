import React, { useState } from 'react';
import './List.css'

export default function List({avatar, firstName, lastName , jobTitle, username, bio, email }) {
 
    const [isRightColumnVisible, setIsRightColumnVisible] = useState(false);

    const handleClick = () => {
        setIsRightColumnVisible(!isRightColumnVisible);
    };
    
  
    return (
        <>
        <div className="li" onClick={handleClick}>

            <div className="left-column">
                <div className="p-image">
                    <img className='p-i' src={avatar}/>
                </div>

                <div className="left-detail">
                    <div className="name">
                        {firstName } {lastName}
                    </div>
                    <div className="job-title">
                        {jobTitle}
                    </div>
                </div>
            </div>


            <div className={`right-column ${isRightColumnVisible ? 'visible' : ''}`}>

                <div className="right-detail">
                    <div className="username">{username}</div>
                    <div className="job-title">{jobTitle}</div>
                    <div className="bio">{bio}</div>
                    <div className="email">{email}</div>
                </div>

            </div>
        </div>
        </>
    );
  }

