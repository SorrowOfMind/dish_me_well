import React from 'react';
import {Routes, Route} from 'react-router-dom';

import {DishForm, Notification} from './components';

const Routing = () => {
    return (
        <Routes>
            <Route exact path="/" element={<DishForm />} />
            <Route exact path="/notification" element={<Notification/>} />
        </Routes>
    );
}

export default Routing;