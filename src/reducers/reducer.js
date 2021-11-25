const initialState = {
    user: null,
    uniqueId: 3
};

export const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'ON_LOGIN':
            return onLogin(action.user, state);
        case 'ON_LOGOUT':
            return onLogout(state);
        case 'ON_ADD_CONTACT':
            return onAddContact(action.contact, state);
        case 'ON_EDIT_CONTACT':
            return onEditContact(action.contact, action.id, state);
        case 'ON_DELETE_CONTACT':
            return onDeleteContact(action.id, state);
        default:
            return state;
    }
};

const onLogin = (user, state) => {
    return {
        ...state,
        user: user,
    };
};

const onLogout = (state) => {
    return {
        ...state,
        user: null
    };
};

const onAddContact = (contact, state) => {

    let { user, uniqueId } = state;
    const { contacts } = user;
    const { firstName, lastName, number } = contact;

    const newContact = {
        id: uniqueId,
        firstName: firstName,
        lastName: lastName,
        shortName: firstName[0],
        number: number
    }
    
    const newContacts = [
        ...contacts,
        newContact
    ];

    return {
        ...state,
        uniqueId: uniqueId++,
        user: {
            ...user,
            contacts: newContacts
        }
    };
};

const onEditContact = (contact, id, state) => {

    const { user } = state;
    const { contacts } = user;

    const  idx = contacts.findIndex((item) => {
        return id === item.id;
    });

    const newContacts = [
        ...contacts.slice(0, idx),
        contact,
        ...contacts.slice(idx + 1)
    ];

    return {
        ...state,
        user: {
            ...user,
            contacts: newContacts
        }
    };
};

const onDeleteContact = (id, state) => {

    const { user } = state;
    const { contacts } = user;

    const  idx = contacts.findIndex((item) => {
        return id === item.id;
    });

    const newContacts = [
        ...contacts.slice(0, idx),
        ...contacts.slice(idx + 1)
    ];

    return {
        ...state,
        user: {
            ...user,
            contacts: newContacts
        }
    };    
};