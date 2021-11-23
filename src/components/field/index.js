import React from 'react';

import Label from './Label';
import Content from './content';
import Input from './Input';


const Text = ({ label, type, name, id, register }) => {

    return (
        <Label>
            <Content>{label}</Content>
            <Input type={type} name={name} id={id} ref={register}/>
        </Label>
    )
};

export default {
    Text,
}