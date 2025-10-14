import { Input } from '@/components/ui/input';
import type { InputStylePreset } from '@/types/content.types';
import Image from 'next/image';
import NeonBox from '../neon/neon-box';
import NeonText from '../neon/neon-text';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { DialogContent, DialogTitle } from '../ui/dialog';
import { useAuth } from '@/contexts/auth-context';
import { useWalletBalance } from '@/contexts/wallet-balance-context';
import { useState, useEffect } from 'react';
import { http } from '@/lib/api/http';
import { Link } from 'next-transition-router';

interface FormData {
    name: string;
    email: string;
    address: string;
    phone: string;
    agreed: boolean;
    noPurchase: boolean;
}

interface FormErrors {
    name?: string;
    email?: string;
    address?: string;
    phone?: string;
    agreed?: string;
    noPurchase?: string;
}

interface ApiResponse {
    success: boolean;
    message?: string;
    data?: any;
}

export default function SweepstakesSpinModal() {
    const { user } = useAuth();
    const { refresh: refreshWallet } = useWalletBalance();
    
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        address: '',
        phone: '',
        agreed: false,
        noPurchase: false,
    });
    
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [apiError, setApiError] = useState<string | null>(null);

    // Pre-fill form with user data
    useEffect(() => {
        if (user) {
            const fullName = [user.name?.first, user.name?.middle, user.name?.last]
                .filter(Boolean)
                .join(' ');
            
            setFormData(prev => ({
                ...prev,
                name: fullName,
                email: user.email || '',
            }));
        }
    }, [user]);

    const inputSettings: InputStylePreset = {
        size: 'md',
        glowColor: 'var(--color-purple-500)',
        glowSpread: 0.5,
        backgroundColor: 'var(--color-purple-500)',
        backgroundOpacity: 0.08,
        borderColor: 'var(--color-white)',
    };

    // Validation functions
    const validateName = (name: string): string | undefined => {
        if (!name.trim()) return 'Full name is required';
        if (name.trim().length < 2) return 'Name must be at least 2 characters';
        if (name.trim().length > 100) return 'Name must be less than 100 characters';
        if (!/^[a-zA-Z\s'-]+$/.test(name.trim())) return 'Name can only contain letters, spaces, hyphens, and apostrophes';
        return undefined;
    };

    const validateEmail = (email: string): string | undefined => {
        if (!email.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) return 'Please enter a valid email address';
        return undefined;
    };

    const validateAddress = (address: string): string | undefined => {
        if (!address.trim()) return 'Address is required';
        if (address.trim().length < 5) return 'Address must be at least 5 characters';
        if (address.trim().length > 200) return 'Address must be less than 200 characters';
        return undefined;
    };

    const validatePhone = (phone: string): string | undefined => {
        if (!phone.trim()) return 'Phone number is required';
        
        // Remove all non-digit characters for validation
        const digitsOnly = phone.replace(/\D/g, '');
        
        // Check if it's a valid US phone number (10 digits)
        if (digitsOnly.length !== 10) {
            return 'Phone number must be 10 digits (US format)';
        }
        
        // Check if it starts with valid US area code (not 0 or 1)
        const areaCode = digitsOnly.substring(0, 3);
        if (areaCode.startsWith('0') || areaCode.startsWith('1')) {
            return 'Invalid US area code';
        }
        
        return undefined;
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        
        newErrors.name = validateName(formData.name);
        newErrors.email = validateEmail(formData.email);
        newErrors.address = validateAddress(formData.address);
        newErrors.phone = validatePhone(formData.phone);
        
        if (!formData.agreed) {
            newErrors.agreed = 'You must agree to the terms to continue';
        }
        
        if (!formData.noPurchase) {
            newErrors.noPurchase = 'You must agree to the no purchase necessary terms';
        }
        
        setErrors(newErrors);
        return Object.values(newErrors).every(error => !error);
    };

    const handleInputChange = (field: keyof FormData, value: string | boolean) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
        
        // Clear messages when user starts typing
        if (successMessage) {
            setSuccessMessage(null);
        }
        if (apiError) {
            setApiError(null);
        }
    };

    const formatPhoneNumber = (value: string): string => {
        // Remove all non-digit characters
        const digitsOnly = value.replace(/\D/g, '');
        
        // Limit to 10 digits
        const limitedDigits = digitsOnly.slice(0, 10);
        
        // Format as (XXX) XXX-XXXX
        if (limitedDigits.length >= 6) {
            return `(${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6)}`;
        } else if (limitedDigits.length >= 3) {
            return `(${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3)}`;
        } else if (limitedDigits.length > 0) {
            return `(${limitedDigits}`;
        }
        
        return limitedDigits;
    };

    const handlePhoneChange = (value: string) => {
        const formatted = formatPhoneNumber(value);
        handleInputChange('phone', formatted);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Clear previous messages
        setSuccessMessage(null);
        setApiError(null);
        
        if (!validateForm()) {
            setApiError('Please fix the errors in the form');
            return;
        }

        setIsSubmitting(true);
        
        try {
            const payload = {
                name: formData.name.trim(),
                email: formData.email.trim(),
                address: formData.address.trim(),
                phone: formData.phone.replace(/\D/g, ''), // Send only digits
                agreed: formData.agreed,
                noPurchase: formData.noPurchase,
            };

            const response = await http('/claim/sweep-daily-bonus', { 
                method: 'POST', 
                body: payload 
            }) as ApiResponse;
            
            if (response.success) {
                setSuccessMessage('Successfully claimed your free sweepstakes spin!');
                // Refresh wallet balance to show updated sweep coins
                await refreshWallet();
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    address: '',
                    phone: '',
                    agreed: false,
                    noPurchase: false,
                });
            } else {
            console.log(response);
                throw new Error(response.message || 'Failed to claim sweepstakes spin');
            }
        } catch (error: any) {
            console.error('Sweepstakes claim error:', error.response);
            
            // Handle different types of errors
            let errorMessage = 'Failed to claim sweepstakes spin. Please try again.';
            
            if (error.response?.data?.message) {
                errorMessage = error.response.data.message;
            } else if (error.message) {
                errorMessage = error.message;
            } else if (typeof error === 'string') {
                errorMessage = error;
            }
            
            setApiError(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <DialogContent className='sm:max-w-[600px]! max-w-[calc(100%-40px)]'>
                <div className='px-5 py-3 flex flex-col items-center text-center'>
                    <DialogTitle className='mb-4' asChild>
                        <NeonText as='h4' className='h4-title'>
                        Claim 1 Free Sweepstakes Entry Today!
                        </NeonText>
                    </DialogTitle>
                    <p className='text-base font-bold leading-7.5 capitalize mb-5'>
                        Unlock your chance to win no purchase needed. Just tell
                        us a bit about you.
                    </p>

                    {/* Success Message */}
                    {successMessage && (
                        <div className='mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg w-full'>
                            <NeonText className='text-green-400 text-sm text-center'>
                                {successMessage}
                            </NeonText>
                        </div>
                    )}

                    {/* Error Message */}
                    {apiError && (
                        <div className='mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg w-full'>
                            <NeonText className='text-red-400 text-sm text-center'>
                                {apiError}
                            </NeonText>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className='mb-2.5 w-full'>
                        <div className='mb-7 space-y-6.5'>
                            <div>
                                <Input
                                    type='text'
                                    placeholder='Full Name'
                                    value={formData.name}
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                    {...inputSettings}
                                />
                                {errors.name && (
                                    <NeonText className='text-red-400 text-sm mt-1 block'>
                                        {errors.name}
                                    </NeonText>
                                )}
                            </div>

                            <div>
                                <Input
                                    type='email'
                                    placeholder='Email Address'
                                    value={formData.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    {...inputSettings}
                                />
                                {errors.email && (
                                    <NeonText className='text-red-400 text-sm mt-1 block'>
                                        {errors.email}
                                    </NeonText>
                                )}
                            </div>

                            <div>
                                <Input
                                    type='text'
                                    placeholder='Physical Address'
                                    value={formData.address}
                                    onChange={(e) => handleInputChange('address', e.target.value)}
                                    {...inputSettings}
                                />
                                {errors.address && (
                                    <NeonText className='text-red-400 text-sm mt-1 block'>
                                        {errors.address}
                                    </NeonText>
                                )}
                            </div>

                            <div>
                                <Input
                                    type='number'
                                    placeholder='Phone Number'
                                    value={formData.phone}
                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                    {...inputSettings}
                                />
                                {errors.phone && (
                                    <NeonText className='text-red-400 text-sm mt-1 block'>
                                        {errors.phone}
                                    </NeonText>
                                )}
                            </div>
                        </div>

                        <div className='flex flex-col gap-4 mb-6 text-left'>
                            <div className='site-checkbox flex items-center gap-3'>
                                <Checkbox 
                                    id='age-confirm' 
                                    checked={formData.agreed}
                                    onCheckedChange={(checked) => handleInputChange('agreed', checked as boolean)}
                                />
                                <NeonText
                                    as='label'
                                    htmlFor='age-confirm'
                                    className='text-sm! lg:text-base! capitalize cursor-pointer'
                                    glowSpread={0.5}
                                >
                                    I agree to the official{' '}
                                    <Link
                                        href='/sweepstake-rules'
                                        target='_blank'
                                        title='Sweepstakes Rules'
                                        className='underline hover:text-white'
                                    >
                                        Sweepstakes Rules
                                    </Link>
                                </NeonText>
                            </div>
                            {errors.agreed && (
                                <NeonText className='text-red-400 text-sm ml-6'>
                                    {errors.agreed}
                                </NeonText>
                            )}
                            <div className='site-checkbox flex items-center gap-3'>
                                <Checkbox 
                                    id='terms-policy' 
                                    checked={formData.noPurchase}
                                    onCheckedChange={(checked) => handleInputChange('noPurchase', checked as boolean)}
                                />
                                <NeonText
                                    as='label'
                                    htmlFor='terms-policy'
                                    className='text-sm! lg:text-base! capitalize cursor-pointer'
                                    glowSpread={0.5}
                                >
                                    No Purchase Necessary Free Entries
                                </NeonText>
                            </div>
                            {errors.noPurchase && (
                                <NeonText className='text-red-400 text-sm ml-6'>
                                    {errors.noPurchase}
                                </NeonText>
                            )}
                        </div>

                        <div className='text-center mb-6 space-y-3'>
                            <NeonText
                                as='span'
                                className='text-sm! lg:text-base! capitalize font-bold block'
                                glowColor='--color-blue-500'
                                glowSpread={0.5}
                            >
                                You may only complete this form once every 7
                                days. Duplicate submissions will not be
                                accepted.
                            </NeonText>

                            <NeonText
                                as='span'
                                glowColor='--color-blue-500'
                                className='text-sm! lg:text-base! capitalize font-bold block'
                                glowSpread={0.5}
                            >
                                Limit: 1 free entry per person, per week.
                            </NeonText>
                        </div>

                        <Button 
                            type='submit'
                            size='lg' 
                            className='mb-8'
                            disabled={isSubmitting || !user?._id}
                        >
                            {!user?._id ? 'Login to Claim' : isSubmitting ? 'Claiming...' : 'Claim Free 1 SC'}
                        </Button>
                        <div className='flex justify-center'>
                            <NeonBox
                                className='py-3 px-5 inline-flex items-center rounded-md gap-2 justify-center max-xs:flex-wrap'
                                glowColor='--color-green-500'
                                backgroundColor='--color-green-500'
                                backgroundOpacity={0.2}
                            >
                                <NeonText
                                    as='span'
                                    className='text-lg capitalize font-bold'
                                    glowColor='--color-green-500'
                                    glowSpread={0.3}
                                >
                                    You currently have{' '}
                                </NeonText>
                                <Image
                                    src='/coins/sweep-coin.svg'
                                    height={20}
                                    width={20}
                                    alt='Sweep Coin'
                                />
                                <span className='text-lg capitalize font-extrabold text-green-400'>
                                    {user?.sweepCoins?.toLocaleString() || '0'}
                                </span>
                            </NeonBox>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </>
    );
}
