import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
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
                        aria-label="???????????????? ??????????????"
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
                        ?????????? ??????????????
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
                            label="??????"
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
                            label="??????????????"
                            variant="standard"
                            size='small'
                        />
                        <TextField
                            required
                            id='number'
                            name='number'
                            label="??????????"
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
                            ????????????????
                        </Button>
                    </Box>
                    <Button
                        size='large'
                        onClick={onClose}
                        fullWidth
                    >
                        ????????????????
                    </Button>
                </Box>
            </Fade>
        </Modal>
    );
};