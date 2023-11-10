"use client";
import * as React from 'react';
import Container from '@mui/material/Container';
import { Box, Typography, Button, Avatar, TextField } from '@mui/material';

const Profile = () => {
  const [name, setName] = React.useState(
    localStorage.getItem('name')
  );
  const [occupation, setOccupation] = React.useState(
    localStorage.getItem('occupation')
  );
  const [bio, setBio] = React.useState(
    localStorage.getItem('bio')
  );
  const [avatar, setAvatar] = React.useState(
    localStorage.getItem('avatar') ||
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg'
  );

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleOccupationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOccupation(event.target.value);
  };

  const handleBioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBio(event.target.value);
  };

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === 'string') {
          setAvatar(e.target.result);
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleSaveChanges = () => {
    localStorage.setItem('name', name || '');
    localStorage.setItem('occupation', occupation || '');
    localStorage.setItem('bio', bio || '');
    localStorage.setItem('avatar', avatar);
  };

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 5,
        }}
      >
        <Avatar alt="User Avatar" src={avatar} sx={{ width: 150, height: 150, mb: 2 }} />
        <input type="file" accept="image/*" onChange={handleAvatarChange} />
        <TextField label="Name" value={name} onChange={handleNameChange} sx={{ mb: 2, width: '100%' }} />
        <TextField
          label="Occupation"
          value={occupation}
          onChange={handleOccupationChange}
          sx={{ mb: 2, width: '100%' }}
        />
        <TextField
          label="Bio"
          multiline
          value={bio}
          onChange={handleBioChange}
          rows={4}
          sx={{ mb: 4, width: '100%' }}
        />
        <Button variant="contained" color="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Box>
    </Container>
  );
};

export default Profile;
