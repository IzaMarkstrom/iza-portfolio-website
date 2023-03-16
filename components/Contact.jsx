import React from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Textarea
  } from '@chakra-ui/react'

const Contact = () => {
    return (
        <>
            <h2>Contact</h2>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input width='550px' mt={5} placeholder='Email Address' type='email' /> <br />
                <Textarea width='550px' mt={5} placeholder='Write your message here...' resize='none'/>
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
        </>
    );
};

export default Contact;