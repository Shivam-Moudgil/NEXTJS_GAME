'use client';

import { useState } from 'react';
import InfoLabel from '../info-label';
import StatusSwitch from '../status-switch';
import { useAuth } from '@/contexts/auth-context';
import { updateProfile } from '@/lib/api/auth';
import NeonText from '@/components/neon/neon-text';

export default function SubscriptionDetails() {
    const { user, setUser } = useAuth();
    const [isUpdating, setIsUpdating] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    // Handle email notification toggle
    const handleEmailToggle = async (checked: boolean) => {
        setIsUpdating('email');
        setError(null);

        try {
            const response = await updateProfile({
                isOpted: checked,
            }) as any;

            if (response.success && response.data) {
                // Update user context with new data
                setUser({ ...user!, isOpted: checked });
            } else {
                setError(response.message || 'Failed to update email notification');
                // Revert on error
            }
        } catch (err) {
            console.error('Email notification update error:', err);
            setError(err instanceof Error ? err.message : 'Failed to update email notification');
        } finally {
            setIsUpdating(null);
        }
    };

    // Handle SMS notification toggle
    const handleSMSToggle = async (checked: boolean) => {
        setIsUpdating('sms');
        setError(null);

        try {
            const response = await updateProfile({
                isSmsOpted: checked,
            }) as any;

            if (response.success && response.data) {
                // Update user context with new data
                setUser({ ...user!, isSmsOpted: checked });
            } else {
                setError(response.message || 'Failed to update SMS notification');
            }
        } catch (err) {
            console.error('SMS notification update error:', err);
            setError(err instanceof Error ? err.message : 'Failed to update SMS notification');
        } finally {
            setIsUpdating(null);
        }
    };

    const accountInfo = [
        {
            icon: 'lucide:mail',
            text: 'Email Notification',
            content: (
                <span className='truncate text-base font-semibold'>
                    {user?.email || 'Not provided'}
                </span>
            ),
            rightSec: (
                <StatusSwitch
                    checked={user?.isOpted || false}
                    onChange={handleEmailToggle}
                    disabled={isUpdating === 'email'}
                />
            ),
        },
        {
            icon: 'lucide:message-square-text',
            text: 'SMS Notification',
            content: (
                <span className='text-base font-semibold'>
                    {user?.phone || 'Not provided'}
                </span>
            ),
            rightSec: (
                <StatusSwitch
                    checked={user?.isSmsOpted || false}
                    onChange={handleSMSToggle}
                    disabled={isUpdating === 'sms'}
                />
            ),
        },
    ];

    return (
        <>
            {/* Error message */}
            {error && (
                <li className='mb-4'>
                    <div className='p-3 bg-red-500/20 border border-red-500/50 rounded-lg'>
                        <NeonText className='text-red-400 text-sm'>
                            {error}
                        </NeonText>
                    </div>
                </li>
            )}

            {accountInfo.map(({ icon, text, content, rightSec }, index) => (
                <li key={index}>
                    <InfoLabel icon={icon} text={text} rightSec={rightSec} />
                    {content}
                </li>
            ))}
        </>
    );
}
