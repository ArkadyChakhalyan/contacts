const onLogin = (user) => {
    return {
        type: 'ON_LOGIN',
        user: user
    };
};

const onLogout = () => {
    return {
        type: 'ON_LOGOUT'
    };
};

const onAddContact = (contact) => {
    return {
        type: 'ON_ADD_CONTACT',
        contact: contact
    };
};

const onEditContact = (contact, id) => {
    return {
        type: 'ON_EDIT_CONTACT',
        contact: contact,
        id: id
    };
};

const onDeleteContact = (id) => {
    return {
        type: 'ON_DELETE_CONTACT',
        id: id
    };
};

export {
    onLogout,
    onLogin,
    onAddContact,
    onEditContact,
    onDeleteContact
};