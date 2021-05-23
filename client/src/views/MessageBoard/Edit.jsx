import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Card, CardBody, CardHeader, CardTitle, FormGroup, Input} from "reactstrap";
import {useDispatch} from "react-redux";
import {handleSubmitNewMessage, handleUpdateCurrentPage} from "./action";
import {useHistory} from "react-router-dom";

function Edit() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [newMessage, setNewMessage] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(handleSubmitNewMessage(newMessage));
        setNewMessage('');
        dispatch(handleUpdateCurrentPage('message_section'))
        history.push('/message_section')
    };

    const handleChange = (event) => {
        const { value } = event.target;
        setNewMessage(value);
    }

    useEffect(() => {
        return () => {
            setNewMessage('');
        }
    }, [])

    useEffect(() => {
        setIsButtonDisabled(newMessage.length < 1)
    }, [newMessage]);

    return (
        <Card>
            <CardBody>
                <CardTitle>
                    Adding message to channel!
                </CardTitle>
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <textarea
                            onChange={handleChange}
                            value={newMessage}
                            cols="50"
                            rows="6"
                        />
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