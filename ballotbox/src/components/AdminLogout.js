import React from 'react';

//  needs to be updated 

const AdminLogout = () => {
    const handleClick = () => {

    }

    return (
        <MenuItem
            onClick={handleClick}
            ref={ref}>
            <ExitIcon /> Logout
        </MenuItem>
    );
};

export default AdminLogout;