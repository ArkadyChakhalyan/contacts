import {
    Avatar,
    IconButton,
    Box,
    ListItemAvatar,
    ListItemText,
} from "@mui/material";
import MoreIcon from '@mui/icons-material/MoreHoriz';
import { ContactMenu } from "./menu";
import { Fragment, useState } from "react";
import { ContactPopup } from "./popups/contact-popup";

export const Contact = ({ contact }) => {

    const { firstName, lastName, number, shortName, image } = contact;

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
    const [editedPressed, setEditedPressed] = useState(false);

    const onPopupOpen = () => {
        setPopupOpen(true);
    };

    const onPopupClose = () => {
        setPopupOpen(false);
        setEditedPressed(false);
    };

    return (
        <Fragment>
            <ContactPopup
                open={popupOpen}
                onPopupClose={onPopupClose}
                contact={contact}
                editedPressed={editedPressed}
            />
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    p: 2
                }}
                onClick={onPopupOpen}
            >
                <ListItemAvatar>
                    <Avatar src={image}>
                        {image ? '' : shortName}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={displayName} secondary={number} />
                <IconButton
                    edge="end"
                    aria-label="Меню"
                    onClick={onMenuOpen}
                >
                    <MoreIcon />
                </IconButton>
                <ContactMenu
                    open={menuOpen}
                    onClose={onMenuClose}
                    anchor={anchor}
                    contact={contact}
                    onPopupOpen={onPopupOpen}
                    pressEdited={() => setEditedPressed(true)}
                />
            </Box>
        </Fragment>
    );
};