import { List, Typography } from '@mui/material';
import { Contact } from './contact';

export const ContactsList = ({ searchFilter, contacts }) => {

    if (contacts.length === 0) {
        return (
            <Typography
                variant="subtitle1"
                align='center'
                sx={{ mt: 2 }}
            >
                Добавь свой первый контакт!
            </Typography>
        );
    }

    if (
        contacts
            .filter((contact) => {

                const { firstName, number } = contact;
                const lastName = contact.lastName ? contact.lastName : '';
                const search = searchFilter.toLowerCase();

                return (
                    firstName.toLowerCase().includes(search)
                    || number.toLowerCase().includes(search)
                    || lastName.toLowerCase().includes(search)
                );
            })
            .length === 0
        && contacts.length > 0
    ) return (
        <Typography
            variant="subtitle1"
            align='center'
        >
            Контакт не найден
        </Typography>
    );

    return (
        <List>
            {
                contacts
                    .filter((contact) => {

                        const { firstName, number } = contact;
                        const lastName = contact.lastName ? contact.lastName : '';
                        const search = searchFilter.toLowerCase();

                        return (
                            firstName.toLowerCase().includes(search)
                            || number.toLowerCase().includes(search)
                            || lastName.toLowerCase().includes(search)
                        );
                    })
                    .sort((a, b) => compare(a.firstName, b.firstName))
                    .map((contact) => {
                        return <Contact key={contact.id} contact={contact} />;
                    })
            }
        </List>
    );
};

const compare = (a, b) => {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  }
