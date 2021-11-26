import {
    Box,
    AppBar,
    Typography,
    Button,
    Avatar
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { onLogout } from '../../actions/actions';
import { Search } from './search';

export const AppHeader = ({ setSearchFilter }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClick = () => {
        dispatch(onLogout());
        navigate('/');
    };

    return (
        <AppBar
            position='sticky'
            sx={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            <Typography
                variant="subtitle1"
                sx={{
                    userSelect: 'none',
                    ml: 3
                }}
            >
                Контакты
            </Typography>
            <Search setSearchFilter={setSearchFilter} />
            <Box sx={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <Button
                    color="inherit"
                    onClick={onClick}
                >
                    выйти
                </Button>
                <Avatar sx={{ m: 2, ml: 1 }} />
            </Box>
        </AppBar>
    );
};