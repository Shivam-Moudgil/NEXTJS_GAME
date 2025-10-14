// import clsx from 'clsx';
import LegalWrapper from '../components/legal-wrapper';
// import NeonText from '@/components/neon/neon-text';
import { ResponsibleGameplayPolicyData } from '@/data/legal/responsible-gameplay-policy';
const PrivacyPolicy = () => {
    return (
        <LegalWrapper
            title='Responsible Gameplay Policy'
            description='At Golden Ticket Online Arcade and Casino, we are committed to fostering a safe, responsible, and enjoyable gaming environment. Please review our Responsible Gameplay Policy below.'
            className='mb-12 md:mb-20 xl:mb-25' // common margin for the legal wrapper box
        >
            <div className='legal-content-wp'>
                <div className='legal-content-list space-y-10'>
                    {ResponsibleGameplayPolicyData.map((v, i) => (
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
