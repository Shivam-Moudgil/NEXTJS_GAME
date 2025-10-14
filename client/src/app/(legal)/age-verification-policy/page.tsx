// import clsx from 'clsx';
import LegalWrapper from '../components/legal-wrapper';
// import NeonText from '@/components/neon/neon-text';
import { AgeVerificationPolicyData } from '@/data/legal/age-verification-policy';
const PrivacyPolicy = () => {
    return (
        <LegalWrapper
            title='Age Verification Policy'
            description='To maintain a safe and legally compliant environment, Golden Ticket Online Arcade and Casino requires all users to verify their age and identity. Learn about our minimum age requirements, restricted jurisdictions, and verification process.'
            className='mb-12 md:mb-20 xl:mb-25' // common margin for the legal wrapper box
        >
            <div className='legal-content-wp'>
                <div className='legal-content-list space-y-10'>
                    {AgeVerificationPolicyData.map((v, i) => (
                        <div key={i} className='space-y-5'>
                            {v.title}
                            {v.description}
                        </div>
                    ))}
                </div>
            </div>
        </LegalWrapper>
    );
};

export default PrivacyPolicy;
