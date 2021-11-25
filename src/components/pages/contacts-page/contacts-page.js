import {
    IconButton,
    Container,
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
                    <IconButton
                        aria-label="Добавить контакт"
                        size='large'
                        color='primary'
                        sx={{
                            position: 'fixed',
                            right: '32px',
                            bottom: '32px'
                        }}
                        onClick={onAdd}
                    >
                        <AddIcon sx={{ fontSize: 32 }} />
                    </IconButton>
                </Container>
            </Fragment >
        );
    }

    return <Navigate to='/' replace={true} />
};