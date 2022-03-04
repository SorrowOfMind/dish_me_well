import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

const Notification = () => {
    const response = useSelector(state => state.dish);
    return (
        <div className="notif-wrapper">
            {response.status === 1 ? 
                <p className="success">{response.message}</p> :
                response.status === 0 ?
                (<p className="error">
                    {response.message}{"\n"}
                    {JSON.stringify(response.response)}
                </p>) :
                <p>No notifications to show</p>
            }
            <Link to="/" className="notif-btn">GO BACK</Link>
        </div>
    )
}

export default Notification