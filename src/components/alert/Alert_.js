import { Alert, Snackbar } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"

const Alert_ = () => {

    let dispatch = useDispatch();
    const { alert_ } = useSelector((reduxData) => reduxData.taskReducer)
    const handleClose = (event, reason) => {
        if (reason == 'clickaway') {
            return;
        }
        dispatch({
            type: 'ALERT',
            payload: {
                alert_: {
                    status: false,
                }
            }
        })

    };
    return (
        <>
        
            <Snackbar open={alert_.status} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "left" }}>
                <Alert onClose={handleClose} severity={alert_.severity} sx={{ width: '100%' }}>
                    {alert_.message}
                </Alert>
            </Snackbar>
        </>
    )
}

export default Alert_