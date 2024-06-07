import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const HomePage = () => {
    return (
        <Container>
        <Typography variant="h1" align="center" gutterBottom>
            Welcome to the SS Science Academy 
        </Typography>
        <Typography variant="h4" align="center" gutterBottom>
            <SchoolIcon fontSize="large" />
        </Typography>
        <Typography variant="h4" align="center" gutterBottom>
            <Link to="/about">
            <Button variant="contained" color="primary">
                About
            </Button>
            </Link>
        </Typography>
        </Container>
    );
    };

export default HomePage;
