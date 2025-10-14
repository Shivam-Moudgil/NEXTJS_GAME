import PageBanner from '@/components/page-banner';
import GetHelp from './components/get-help';
import SpecializedSupport from './components/specialized-support';
import SupportTiels from './components/support-tiels';

function Support() {
    return (
        <>
            <PageBanner
                title='Support Center'
                description="We're here to help you 24/7. Get instant assistance, find answers to your questions, or connect with our expert support team."
                className='mb-14'
                bgImage='/page-banner/support.jpg'
            />
            <SupportTiels />
            <GetHelp />
            <SpecializedSupport />
        </>
    );
}

export default Support;
