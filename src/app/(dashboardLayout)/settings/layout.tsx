import Link from 'next/link';
import React, { ReactNode } from 'react';

const SettingsLayout = ({children} : {children: ReactNode}) => {
    return (
        <div className='flex gap-8 px-8 min-h-screen'>
            <div>
                <Link href={'/settings/account'}><h4>Account</h4></Link>
                <Link href={'/settings/privacy'}><h4>Privacy</h4></Link>
                <Link href={'/settings/profile'}><h4>Profile</h4></Link>
                <Link href={'/settings/subscription'}><h4>Subscription</h4></Link>
                <Link href={'/settings/business'}><h4>Business</h4></Link>
                <Link href={'/settings/billing'}><h4>Billing</h4></Link>
            </div>
            {children}
        </div>
    );
};

export default SettingsLayout;