import React from 'react'; 
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const ContactPage = () => {
    return (
        <Container>
        <Typography variant="h1" align="center" gutterBottom>
            Contact
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
    }
export default ContactPage;