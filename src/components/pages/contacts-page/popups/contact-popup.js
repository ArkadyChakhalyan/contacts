import {
    Avatar,
    Modal,
    Fade,
    Box,
    Backdrop,
    Typography,
    Button,
    IconButton
} from '@mui/material';
import { ContactData } from './contact-data';
import { useDispatch } from "react-redux";
import { onDeleteContact, onEditContact } from '../../../../actions/actions';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

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

export const ContactPopup = ({ open, onPopupClose, contact, editedPressed }) => {

    const dispatch = useDispatch();

    const { firstName, lastName, shortName, image, id } = contact;

    const displayName = lastName ? `${firstName} ${lastName}` : firstName;

    const [edit, setEdit] = useState(editedPressed);

    const onEdit = () => {
        setEdit(true);
    };

    const [editedContact, setEditedContact] = useState({ ...contact });

    const onSave = () => {
        setEdit(false);
        dispatch(onEditContact(editedContact, id));
    };

    const onClose = () => {
        onPopupClose();
        setEdit(false);
    };

    const onDelete = () => {
        onClose();
        dispatch(onDeleteContact(id));
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
                        src={image}
                        size='large'
                        sx={{
                            width: 64,
                            height: 64,
                            mb: 2
                        }}
                    >
                        {image ? '' : shortName}
                    </Avatar>
                    <Typography variant="h6" component="h2">
                        {displayName}
                    </Typography>
                    <ContactData
                        contact={contact}
                        edit={edit}
                        onEdit={setEditedContact}
                        state={editedContact}
                        onSubmit={onSave}
                    />
                    {
                        !edit ?
                            <Button
                                sx={{ mt: 2 }}
                                fullWidth
                                size='large'
                                onClick={onEdit}
                            >
                                Изменить
                            </Button>
                            : null
                    }
                    <Button
                        size='large'
                        onClick={onDelete}
                        fullWidth
                    >
                        Удалить
                    </Button>

                </Box>
            </Fade>
        </Modal>
    );
};