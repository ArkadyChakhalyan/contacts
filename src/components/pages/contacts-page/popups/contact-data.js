import {
    List,
    ListItem,
    Typography,
    TextField,
    Button,
    Box
} from "@mui/material";
import { useEffect, useState } from "react";

export const ContactData = ({ contact, edit, onSubmit }) => {

    const { firstName, lastName, number } = contact;

    const [newFirstName, setNewFirstName] = useState(firstName);
    const [newLastName, setNewLastName] = useState(lastName);
    const [newNumber, setNewNumber] = useState(number);

    const [disabled, setDisabled] = useState(false);

    useEffect(() => {

        const rgxNum = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;

        if (
            newFirstName === ''
            || newNumber === ''
            || !newNumber.match(rgxNum)
        ) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [newFirstName, newNumber])

    const onFirstNameChange = (e) => {
        setNewFirstName(e.target.value);
    };

    const onLastNameChange = (e) => {
        setNewLastName(e.target.value);
    };

    const onNumberChange = (e) => {
        setNewNumber(e.target.value);
    };

    if (edit) {
        return (
            <Box
                component="form"
                onSubmit={onSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2.2,
                    width: '90%',
                    mt: 2,
                }}
            >
                <TextField
                    required
                    label="Имя"
                    id='firstName'
                    name='firstName'
                    variant="standard"
                    value={newFirstName}
                    onChange={onFirstNameChange}
                    size='small'
                    autoFocus
                />
                <TextField
                    label="Фамилия"
                    id='lastName'
                    name='lastName'
                    variant="standard"
                    size='small'
                    value={newLastName}
                    onChange={onLastNameChange}
                />
                <TextField
                    required
                    label="Номер"
                    id='number'
                    name='number'
                    variant="standard"
                    size='small'
                    value={newNumber}
                    onChange={onNumberChange}
                />
                <Button
                    sx={{ mt: 3 }}
                    fullWidth
                    size='large'
                    type='submit'
                    disabled={disabled}
                >
                    Сохранить
                </Button>
            </Box>
        )
    }
    return (
        <List sx={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'flex-start',
            gap: 1.5,
            mt: 2,
        }}>
            <ListItem>
                <Typography color='#9e9e9e'>
                    Имя:
                </Typography>
                <Typography sx={{ ml: 1 }}>
                    {firstName}
                </Typography>
            </ListItem>
            {lastName ? (
                <ListItem>
                    <Typography color='#9e9e9e'>
                        Фамилия:
                    </Typography>
                    <Typography sx={{ ml: 1 }}>
                        {lastName}
                    </Typography>
                </ListItem>
            ) : null}
            <ListItem>
                <Typography color='#9e9e9e'>
                    Номер:
                </Typography>
                <Typography sx={{ ml: 1 }}>
                    {number}
                </Typography>
            </ListItem>
        </List>
    );
};