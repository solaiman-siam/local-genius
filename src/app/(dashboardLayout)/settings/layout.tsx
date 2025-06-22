
import React, { ReactNode } from 'react';

const SettingsLayout = ({children} : {children: ReactNode}) => {
    return (
        <div className='flex gap-8 px-8 min-h-screen'>
            {children}
        </div>
    );
};

export default SettingsLayout;