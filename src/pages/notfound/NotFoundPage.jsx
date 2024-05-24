import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const NotFound= () => {
    return (
        <Container>
        <Typography variant="h1" align="center" gutterBottom>
            Page Not Found
        </Typography>
        <Typography variant="h4" align="center" gutterBottom>
            <SchoolIcon fontSize="large" />
        </Typography>
        <Typography variant="h4" align="center" gutterBottom>
            <Link to="/">
            <Button variant="contained" color="primary">
                Home
            </Button>
            </Link>
        </Typography>
        </Container>
    );
    }
    export default NotFound;