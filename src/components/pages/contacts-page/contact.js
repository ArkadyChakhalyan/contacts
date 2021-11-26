import {
    Avatar,
    IconButton,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Skeleton
} from "@mui/material";
import MoreIcon from '@mui/icons-material/MoreHoriz';
import { ContactMenu } from "./menu";
import { Fragment, useEffect, useState } from "react";
import { ContactPopup } from "./popups/contact-popup";

export const Contact = ({ contact }) => {

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
    const [editedPressed, setEditedPressed] = useState(false);

    const onPopupOpen = () => {
        setPopupOpen(true);
    };

    const onPopupClose = () => {
        setPopupOpen(false);
        setEditedPressed(false);
    };

    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        let update = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => {
            clearTimeout(update);
        }
    })

    return (
        <Fragment>
            <ContactPopup
                open={popupOpen}
                onPopupClose={onPopupClose}
                contact={contact}
                editedPressed={editedPressed}
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
                                    <Skeleton animation="wave" width={160}/>
                                    <Skeleton animation="wave"  width={96}/>
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
                pressEdited={() => setEditedPressed(true)}
            />
        </Fragment>
    );
};