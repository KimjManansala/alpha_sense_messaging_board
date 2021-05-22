import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button, FormGroup, Input} from "reactstrap";

Edit.propTypes = {
    handleSubmitMessage: PropTypes.string,
    selectedChannel: PropTypes.shape({
        id: PropTypes.number,
    })
};

function Edit({handleSubmitMessage, selectedChannel}) {
    const [newMessage, setNewMessage] = useState('');
    const handleSubmit = () => {
        handleSubmitMessage(newMessage);
        setNewMessage('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <FormGroup>
               <textarea>

               </textarea>
            </FormGroup>
            <Button type="submit">
                Submit
            </Button>
        </form>
    );
}

export default Edit;