import React, { useState } from 'react';
import { Roles } from '../Roles/Roles'
import { ProfileAvatar } from '../Avatar/ProfileAvatar'
import './ProfileBox.css';

export const ProfileBox = ({
}) => {
  const [bio, setBio] = useState('This is your bio, describe yourself.');
  const [displayName, setDisplayName] = useState('display name');
  const [isEditableBio, setEditableBio] = useState<boolean>(true);
  const [isEditableName, setEditableName] = useState<boolean>(true);
  const [bioText, showBioText] = useState<boolean>(false);
  const [nameText, showNameText] = useState<boolean>(false);
  
  return (
    <div className='profile'>
      <div className="container">     
       <ProfileAvatar />
        <text className="display-name">{displayName}</text>
        <button className="button"
        onClick={() => {setEditableName(!isEditableName);
          if(isEditableName && isEditableBio){
            showNameText(true);
          }
          else{
            showNameText(false);
          }
        }}
        > 
        {nameText ? 'save' : 'edit'} 
        </button>
        <br></br>
        <text className="bio">
          {bio}
        </text>
        <button className="button"
        onClick={() => {setEditableBio(!isEditableBio);
          if(isEditableBio && isEditableName){
            showBioText(true);
          }
          else{
            showBioText(false);
          }
        }}
        > 
        {bioText ? 'save' : 'edit'}
        </button>
        <br></br>
        <div className="role-boxes">
          <Roles />
          <Roles />
          <Roles />
        </div>
        <div className="text-boxes">
        {bioText && (
                <textarea maxLength={60} placeholder="60 character limit..."
                onChange={({ currentTarget: { value: bio } }) => {
                setBio(bio);
               }}
            ></textarea> 
              )}
        {nameText && (
                <textarea maxLength={30} placeholder="30 character limit..."
                onChange={({ currentTarget: { value: displayName} }) => {
                setDisplayName(displayName);
               }}
            ></textarea> 
              )}
              </div>
      </div>
    </div>
  );
}

