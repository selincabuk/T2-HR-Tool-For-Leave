import CircularProgress from '@mui/material/CircularProgress';
import "./Components.css";

function Loading() {
    return(
        <div className='spinnerHolder'>
            <CircularProgress />
        </div>
    )
}

export default Loading;