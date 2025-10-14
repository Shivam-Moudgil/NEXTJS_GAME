import { PrivacyPolicyData } from '@/data/legal/privacy-policy';
import LegalWrapper from '../components/legal-wrapper';
const PrivacyPolicy = () => {
    return (
        <LegalWrapper
            title='Privacy Policy'
            description='Golden Ticket Online Arcade and Casino (“we,” “us,” “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and disclose your information when you use our online arcade and casino platform (“Platform”).'
            className='mb-12 md:mb-20 xl:mb-25' // common margin for the legal wrapper box
        >
            <div className='legal-content-wp'>
                {/* <div className='legal-content-list flex flex-col gap-3'>
                    {privacyPolicyData.map(
                        ({
                            id,
                            title,
                            sections,
                            description,
                            showBullets,
                            items,
                        }) => (
                            <div key={id} className='legal-content'>
                                <NeonText
                                    as='h2'
                                    className='h3-title mb-4 flex items-center gap-2'
                                >
                                    {id}
                                    <span>{title}</span>
                                </NeonText>
                                {description && (
                                    <NeonText as='p' className='h5-title'>
                                        {description}
                                    </NeonText>
                                )}

                                {sections ? (
                                    sections.map(
                                        ({ id, title, showBullets, items }) => (
                                            <div key={id} className='mb-4'>
                                                <NeonText
                                                    as='h3'
                                                    className='h5-title mb-2 flex items-center gap-2'
                                                >
                                                    {id}
                                                    <span>{title}</span>
                                                </NeonText>
                                                <ul
                                                    className={clsx(
                                                        'mb-7 space-y-1',
                                                        !showBullets
                                                            ? 'list-none'
                                                            : 'list-disc pl-6'
                                                    )}
                                                >
                                                    {items.map((item, idx) => (
                                                        <li key={idx}>
                                                            <NeonText
                                                                as='span'
                                                                className='h6-title'
                                                            >
                                                                {item}
                                                            </NeonText>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )
                                    )
                                ) : (
                                    <ul
                                        className={clsx(
                                            'mb-7 space-y-1',
                                            !showBullets
                                                ? 'list-none'
                                                : 'list-disc pl-6'
                                        )}
                                    >
                                        {items?.map((item, idx) =>
                                            typeof item === 'string' ? (
                                                <li key={idx}>
                                                    <NeonText
                                                        as='span'
                                                        className='h6-title'
                                                    >
                                                        {item}
                                                    </NeonText>
                                                </li>
                                            ) : (
                                                <li key={idx}>
                                                    <NeonText
                                                        as='a'
                                                        className='h6-title'
                                                        href={item.link}
                                                        target='_blank'
                                                        rel='noreferrer'
                                                    >
                                                        {item.label}:{' '}
                                                        {item.value}
                                                    </NeonText>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                )}
                            </div>
                        )
                    )}
                </div> */}
                <div className='legal-content-list space-y-10'>
                    {PrivacyPolicyData.map((v, i) => (
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
