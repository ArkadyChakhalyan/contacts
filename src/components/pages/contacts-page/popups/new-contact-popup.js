import {
    Avatar,
    Modal,
    Fade,
    Box,
    Backdrop,
    Typography,
    Button,
    IconButton,
    TextField
} from '@mui/material';
import { useDispatch } from "react-redux";
import { onAddContact } from '../../../../actions/actions';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 16,
    p: 4,
    pt: 6,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
};

export const NewContactPopup = ({ open, onClose }) => {

    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('');
    const [number, setNumber] = useState('');

    const [disabled, setDisabled] = useState(false);

    useEffect(() => {

        const rgxNum = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;

        if (
            firstName === ''
            || number === ''
            || !number.match(rgxNum)
        ) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [firstName, number])

    const onSubmit = (e) => {

        e.preventDefault();

        const data = new FormData(e.currentTarget);

        const newContact = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            number: data.get('number')
        }
        dispatch(onAddContact(newContact));

        onClose();
    };

    return (
        <Modal
            disableEnforceFocus
            aria-labelledby='contact'
            open={open}
            onClose={onClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <IconButton
                        aria-label="Добавить контакт"
                        size='large'
                        color='primary'
                        sx={{
                            position: 'absolute',
                            right: '8px',
                            top: '8px'
                        }}
                        onClick={onClose}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Avatar
                        size='large'
                        sx={{
                            width: 64,
                            height: 64,
                            mb: 2
                        }}
                    />
                    <Typography variant="h6" component="h2">
                        Новый контакт
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={onSubmit}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2.2,
                            width: '90%',
                            mt: 3,
                        }}
                    >
                        <TextField
                            required
                            label="Имя"
                            id='firstName'
                            name='firstName'
                            variant="standard"
                            size='small'
                            onChange={e => setFirstName(e.target.value)}
                            autoFocus
                        />
                        <TextField
                            id='lastName'
                            name='lastName'
                            label="Фамилия"
                            variant="standard"
                            size='small'
                        />
                        <TextField
                            required
                            id='number'
                            name='number'
                            label="Номер"
                            variant="standard"
                            size='small'
                            onChange={e => setNumber(e.target.value)}
                        />
                        <Button
                            sx={{ mt: 3 }}
                            fullWidth
                            size='large'
                            type='submit'
                            disabled={disabled}
                        >
                            Добавить
                        </Button>
                    </Box>
                    <Button
                        size='large'
                        onClick={onClose}
                        fullWidth
                    >
                        Отменить
                    </Button>
                </Box>
            </Fade>
        </Modal>
    );
};