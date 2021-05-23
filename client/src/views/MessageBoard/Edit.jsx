import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Card, CardBody, FormGroup, Input} from "reactstrap";

Edit.propTypes = {
    handleSubmitMessage: PropTypes.func,
    selectedChannel: PropTypes.shape({
        id: PropTypes.number,
    })
};

function Edit({handleSubmitMessage, selectedChannel}) {
    const [newMessage, setNewMessage] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSubmitMessage(newMessage);
        setNewMessage('');
    };

    const handleChange = (event) => {
        const { value } = event.target;
        setNewMessage(value);
    }

    useEffect(() => {
        setIsButtonDisabled(newMessage.length < 1)
    }, [newMessage]);

    return (
        <Card>
            <CardBody>
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <textarea onChange={handleChange} value={newMessage} />
                    </FormGroup>
                    <Button
                        type="submit"
                        disabled={isButtonDisabled}
                        color='primary'
                    >
                        Submit
                    </Button>
                </form>
            </CardBody>
        </Card>
    );
}

export default Edit;