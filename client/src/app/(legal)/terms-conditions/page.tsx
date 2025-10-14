import LegalWrapper from '../components/legal-wrapper';
// import NeonText from '@/components/neon/neon-text';
import Image from 'next/image';
const TermsConditions = () => {
    return (
        <LegalWrapper
            title='Terms & Conditions'
            description='Review the official Terms and Promotional Rules for Golden Ticket Online Arcade and Casino. Learn about eligibility, gameplay regulations, reward redemptions, and your rights as a participant. No purchase necessary to play or win.'
            className='mb-12 md:mb-20 xl:mb-25' // common margin for the legal wrapper box
        >
            <div className='legal-content'>
                <Image
                    className='mb-8 w-full'
                    src='/legal-images/terms-condition-2.jpg'
                    width={1260}
                    height={1630}
                    alt='terms & conditions'
                />
                <Image
                    className='w-full'
                    src='/legal-images/terms-condition-2.jpg'
                    width={1260}
                    height={1630}
                    alt='terms & conditions'
                />
            </div>
        </LegalWrapper>
    );
};

export default TermsConditions;
