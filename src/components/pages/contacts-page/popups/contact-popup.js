import Avatar from '@mui/material/Avatar';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { ContactData } from './contact-data';
import { useDispatch } from "react-redux";
import { onDeleteContact, onEditContact } from '../../../../actions/actions';
import CloseIcon from '@mui/icons-material/Close';

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

export const ContactPopup = ({ open, onPopupClose, contact, edit, setEditOff, setEditOn }) => {

    const dispatch = useDispatch();

    const { firstName, lastName, shortName, image, id } = contact;

    const displayName = lastName ? `${firstName} ${lastName}` : firstName;

    const onSave = (e) => {

        e.preventDefault();

        const data = new FormData(e.currentTarget);

        setEditOff();

        const editedContact = {
            ...contact,
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            number: data.get('number')
        };

        dispatch(onEditContact(editedContact, id));
    };

    const onClose = () => {
        onPopupClose();
        setEditOff();
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
                timeout: 600,
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
                        onSubmit={onSave}
                    />
                    {
                        !edit ?
                            (
                                <Button
                                    sx={{ mt: 2 }}
                                    fullWidth
                                    size='large'
                                    onClick={setEditOn}
                                >
                                    Изменить
                                </Button>
                            ) : null
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