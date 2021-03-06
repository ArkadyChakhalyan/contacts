import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { onDeleteContact } from "../../../actions/actions";
import { useDispatch } from "react-redux";

export const ContactMenu = ({ open, onClose, anchor, contact, onPopupOpen, setEditedPressed }) => {

    const { id } = contact;

    const dispatch = useDispatch();

    const onDelete = () => {
        dispatch(onDeleteContact(id));
        onClose();
    };

    const onEdit = () => {
        setEditedPressed();
        onPopupOpen();
        onClose();
    }

    return (
            <Menu
                anchorEl={anchor}
                open={open}
                onClose={onClose}
                onClick={onClose}
            >
                <MenuItem
                    onClick={onEdit}
                >
                    <ListItemIcon>
                        <EditIcon fontSize='small' />
                    </ListItemIcon>
                    Изменить
                </MenuItem>
                <MenuItem
                    onClick={onDelete}
                >
                    <ListItemIcon>
                        <DeleteIcon fontSize='small' />
                    </ListItemIcon>
                    Удалить
                </MenuItem>
            </Menu>        
    );
};