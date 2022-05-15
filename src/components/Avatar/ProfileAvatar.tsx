import React, { useState, createRef, useEffect } from 'react';
import { Avatar, IconButton, Button} from '@mui/material';
import './ProfileAvatar.css';
import blank from "./resource/blankProfile.png";

export const ProfileAvatar = ({}) => {
  const [image, _setImage] = useState(null);
  const inputFileRef = createRef();

  const setImage = (newImage:any) => {
    _setImage(newImage);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newImage = event.target?.files?.[0];
    if (newImage) {
      setImage(URL.createObjectURL(newImage));
    }
  };

  return (
    <div>
      <input
          accept="image/*"
          className="profile-pic"
          hidden
          id="contained-button-file"
          multiple
          type="file"
          onChange={handleOnChange}
        />
        <label className="avatar-button" htmlFor="contained-button-file">
          <IconButton component="span" className="avatar-button">
          <Avatar alt="profile-img"
            src={image || blank}
          >
            <img className="fallback-img" src={blank} />
          </Avatar>
          </IconButton>
        </label>
    </div>
  );

}