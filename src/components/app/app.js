import { Route, Routes } from 'react-router';
import { ContactsPage } from '../pages/contacts-page/contacts-page';
import { SigninPage } from '../pages/signin-page/signin-page';

export const App = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={<SigninPage />} />
            <Route
                path='/contacts'
                element={<ContactsPage />} />
        </Routes>
    );
};