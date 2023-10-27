import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Snack() {
    const dispatch = useDispatch()
    const showSnackbar = useSelector(store => store.appReducer.snackbar)

    const handleClose = () => {
        dispatch({
            type: 'message',
            payload: {
                view: false,
                message: '',
                success: false
            }
        });
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            {showSnackbar.view === true && (
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={showSnackbar.view}
                    onClose={handleClose}
                    autoHideDuration={7000}
                    className='snackbar'
                >
                    <Alert
                        severity={showSnackbar.success ? 'success' : 'error'}
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    handleClose(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                    >
                        {(typeof showSnackbar.message) === "string" ?
                            (<>{showSnackbar.message}</>) :
                            <ul>
                                {showSnackbar.message.map(message =>
                                    <li>{message.message}</li>
                                )}
                            </ul>
                        }
                    </Alert>
                </Snackbar>
            )}

        </Stack>
    );
}

export default Snack;