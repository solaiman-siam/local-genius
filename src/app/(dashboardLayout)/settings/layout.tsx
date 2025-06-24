
import SettingsSidebar from '@/components/settings/SettingsSidebar';
import React, { ReactNode } from 'react';

const SettingsLayout = ({children} : {children: ReactNode}) => {

    return (
        <div className='flex gap-8 relative px-32 pt-10 '>
            {/* sidebar */}
            <div className='fixed'>
                <SettingsSidebar/>
            </div>
            <div className='w-[800px] ml-52 my-8'>
                {children}
            </div>
        </div>
    );
};

export default SettingsLayout;