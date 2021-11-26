import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Skeleton from '@mui/material/Skeleton';
import MoreIcon from '@mui/icons-material/MoreHoriz';
import { ContactMenu } from "./menu";
import { Fragment, useState } from "react";
import { ContactPopup } from "./popups/contact-popup";

export const Contact = ({ contact, loading }) => {

    const { firstName, lastName, number, shortName, image, id } = contact;

    const displayName = lastName ? `${firstName} ${lastName}` : firstName;

    const [anchor, setAnchor] = useState(null);
    const menuOpen = anchor ? true : false;

    const onMenuOpen = (e) => {
        e.stopPropagation();
        setAnchor(e.currentTarget);
    };

    const onMenuClose = (e) => {
        if (e) e.stopPropagation();
        setAnchor(null);
    };

    const [popupOpen, setPopupOpen] = useState(false);
    const [edit, setEdit] = useState(false);

    const onPopupOpen = () => {
        setPopupOpen(true);
    };

    const onPopupClose = () => {
        setPopupOpen(false);
        setEdit(false);
    };

    return (
        <Fragment>
            <ContactPopup
                open={popupOpen}
                onPopupClose={onPopupClose}
                contact={contact}
                setEditOn={() => setEdit(true)}
                setEditOff={() => setEdit(false)}
                edit={edit}
            />
            <ListItem
                key={id}
                disablePadding
                secondaryAction={
                    loading ? null
                        :
                        <IconButton
                            edge="end"
                            aria-label="Меню"
                            onClick={onMenuOpen}
                        >
                            <MoreIcon />
                        </IconButton>
                }
            >
                <ListItemButton
                    onClick={onPopupOpen}
                    sx={{ p: 2 }}
                >
                    <ListItemAvatar>
                        {
                            loading ?
                                (
                                    <Skeleton animation="wave" variant="circular" width={40} height={40} />
                                ) : (
                                    <Avatar src={image}>
                                        {image ? '' : shortName}
                                    </Avatar>
                                )
                        }
                    </ListItemAvatar>
                    {
                        loading ?
                            (
                                <ListItemText>
                                    <Skeleton animation="wave" width={160} />
                                    <Skeleton animation="wave" width={96} />
                                </ListItemText>
                            ) : (
                                <ListItemText primary={displayName} secondary={number} />
                            )
                    }

                </ListItemButton>
            </ ListItem>
            <ContactMenu
                open={menuOpen}
                onClose={onMenuClose}
                anchor={anchor}
                contact={contact}
                onPopupOpen={onPopupOpen}
                setEditedPressed={() => setEdit(true)}
            />
        </Fragment>
    );
};