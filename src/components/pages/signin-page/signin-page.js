import {
    Avatar,
    Container,
    Typography
} from '@mui/material';
import { Box } from '@mui/system';
import { SigninForm } from './signin-form';

export const SigninPage = () => {
    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 2 }} />
                <Typography component="h1" variant="h5">
                    Вход в личный кабинет
                </Typography>
                <SigninForm />
            </Box>
        </Container>
    );
}