import {
    Container,
    Fab,
} from '@mui/material';
import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { AppHeader } from '../../app-header/app-header';
import AddIcon from '@mui/icons-material/Add';
import { ContactsList } from './contacts-list';
import { NewContactPopup } from './popups/new-contact-popup';

export const ContactsPage = () => {

    const user = useSelector((state) => state.user);

    const [searchFilter, setSearchFilter] = useState('');

    const [popupOpen, setPopupOpen] = useState(false);

    const onPopupClose = () => {
        setPopupOpen(false);
    };

    const onAdd = () => {
        setPopupOpen(true);
    };

    if (user) {
        return (
            <Fragment>
                <NewContactPopup
                    open={popupOpen}
                    onClose={onPopupClose}
                />
                <AppHeader setSearchFilter={setSearchFilter} />
                <Container maxWidth="sm" sx={{ pt: 3 }} >
                    <ContactsList
                        searchFilter={searchFilter}
                        contacts={user.contacts}
                    />
                    <Fab 
                    color="primary" 
                    aria-label="Добавить контакт"
                    disableFocusRipple
                    onClick={onAdd}
                    sx={{
                        position: 'fixed',
                        right: '32px',
                        bottom: '32px'
                    }}>
                        <AddIcon />
                    </Fab>
                </Container>
            </Fragment >
        );
    }

    return <Navigate to='/' replace={true} />
};