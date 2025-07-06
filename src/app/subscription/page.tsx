import SubscriptionPlan from '@/components/SubscriptionPlan';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const SubscriptionPage = () => {
    return (
        <div className='flex bg-[#F6F6F6] justify-center relative items-center h-screen w-full'>
            <Link href={'/'} className='absolute gap-2 top-12 left-32'> <h4 className='flex items-center font-medium gap-2 group'><ArrowLeft size={18} className='group-hover:-translate-x-1 transition-all duration-200 ' />  Back</h4> </Link>
           <SubscriptionPlan/>
        </div>
    );
};

export default SubscriptionPage;