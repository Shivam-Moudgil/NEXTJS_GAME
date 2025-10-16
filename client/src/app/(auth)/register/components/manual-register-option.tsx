'use client';
import { CheckIcon, ChevronDownIcon } from 'lucide-react';
import { Link } from 'next-transition-router';
import { useId, useState } from 'react';

import { inputSettings } from '@/app/(auth)/auth.style.config';
import NeonBox from '@/components/neon/neon-box';
import NeonText from '@/components/neon/neon-text';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';
import { Input } from '@/components/ui/input';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { statesData } from '@/data/states';
import { cn } from '@/lib/utils';
import { useTransitionRouter } from 'next-transition-router';
import { register as registerUser } from '@/lib/api/auth';
import { useAuth } from '@/contexts/auth-context';

const ManualregisterOption = () => {
    const id = useId();
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        isAdult: false,
        acceptTerms: false,
        acceptSMSTerms: true,
        acceptSMSMarketing: false,
    });
    const router = useTransitionRouter();
    const { setLoggedIn, setUser } = useAuth();

    // Validate US phone numbers (NANP): 10 digits, area code and central office code cannot start with 0 or 1
    const validateUSPhone = (rawPhone: string): { ok: boolean; e164?: string } => {
        const digits = rawPhone.replace(/\D/g, '');
        // Allow optional leading country code '1'
        const normalized = digits.length === 11 && digits.startsWith('1') ? digits.slice(1) : digits;
        if (normalized.length !== 10) return { ok: false };
        const areaFirst = normalized.charCodeAt(0) - 48;
        const centralFirst = normalized.charCodeAt(3) - 48;
        if (areaFirst < 2 || centralFirst < 2) return { ok: false };
        // Return E.164 format
        return { ok: true, e164: `+1${normalized}` };
    };

    // Format phone while typing and limit to US length (10 digits or 11 with leading 1)
    const formatUSPhoneForInput = (raw: string): string => {
        const hasPlus = raw.trim().startsWith('+');
        let digits = raw.replace(/\D/g, '');
        // Keep optional leading 1
        if (digits.startsWith('1')) {
            digits = digits.slice(0, 11);
        } else {
            digits = digits.slice(0, 10);
        }
        const withCountry = digits.length > 0 && digits.startsWith('1');
        const core = withCountry ? digits.slice(1) : digits;
        const a = core.slice(0, 3);
        const b = core.slice(3, 6);
        const c = core.slice(6, 10);
        const national = a && b && c
            ? `(${a}) ${b}-${c}`
            : a && b
                ? `(${a}) ${b}`
                : a
                    ? `(${a}`
                    : '';
        if (withCountry) {
            return national ? `+1 ${national}` : '+1';
        }
        // If user typed '+', preserve it only if they also typed 1 next
        if (hasPlus && raw.replace(/\D/g, '').startsWith('1')) {
            return national ? `+1 ${national}` : '+1';
        }
        return national;
    };

    return (
        <form
            action='#'
            className='mb-7.5 w-full'
            onSubmit={async e => {
                e.preventDefault();
                setError('');
                if (!form.acceptTerms) {
                    setError('Please accept the Terms & Conditions and Privacy Policy.');
                    return;
                }
                if (form.password !== form.confirmPassword) {
                    setError('Passwords do not match');
                    return;
                }
                // Validate US phone number
                const phoneValidation = validateUSPhone(form.phone);
                if (!phoneValidation.ok) {
                    setError('Please enter a valid US phone number (e.g., +1 (408) 555-2376).');
                    return;
                }
                setLoading(true);
                try {
                    const [first, middle, ...rest] = form.fullName.trim().split(/\s+/);
                    const payload = {
                        name: { first: first || '', middle: middle || '', last: rest.join(' ') || '' },
                        email: form.email.toLowerCase(),
                        password: form.password,
                        phone: phoneValidation.e164!,
                        state: value,
                        acceptSMSMarketing: form.acceptSMSMarketing,
                        acceptSMSTerms: form.acceptSMSTerms,
                        isOpted: form.acceptSMSMarketing
                    };
                    const response = await registerUser(payload) as any;
                    
                    // If registration includes user data and cookies are set, mark as logged in
                    if (response.success && response.data?.data?.user) {
                        setLoggedIn(true);
                        setUser(response.data.data.user);
                    }
                    
                    router.push(`/email-verification?email=${encodeURIComponent(form.email)}&phone=${encodeURIComponent(form.phone)}`);
                } catch (err: unknown) {
                    setError(err instanceof Error ? err.message : 'Registration failed');
                } finally {
                    setLoading(false);
                }
            }}
        >
            <div className='mb-7 space-y-6.5'>
                {/* Full Name */}
                <Input
                    type='text'
                    placeholder='Full Name'
                    {...inputSettings}
                    value={form.fullName}
                    onChange={e => setForm(s => ({ ...s, fullName: e.target.value }))}
                />

                {/* Email Address */}
                <Input
                    type='email'
                    placeholder='Email Address'
                    {...inputSettings}
                    value={form.email}
                    onChange={e => setForm(s => ({ ...s, email: e.target.value }))}
                />

                {/* Number */}
                <Input
                    type='tel'
                    placeholder='+1 (408) 555-2376'
                    {...inputSettings}
                    inputMode='tel'
                    autoComplete='tel'
                    maxLength={18}
                    value={form.phone}
                    onChange={e => setForm(s => ({ ...s, phone: formatUSPhoneForInput(e.target.value) }))}
                />

                {/* Select States */}
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            id={id}
                            role='combobox'
                            aria-expanded={open}
                            className='w-full px-6'
                            neonBoxClass='rounded-[8px]'
                            btnInnerClass='w-full'
                            variant='neon'
                            neon={true}
                            {...inputSettings}
                        >
                            <div className='flex w-full items-center justify-between'>
                                <span className={cn(!value && 'text-white/80')}>
                                    {value
                                        ? statesData.find(
                                              state => state.value === value
                                          )?.label
                                        : 'Select State'}
                                </span>

                                <ChevronDownIcon
                                    size={16}
                                    className='shrink-0 text-white/60'
                                    aria-hidden='true'
                                />
                            </div>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent
                        className='border-input w-full min-w-[var(--radix-popper-anchor-width)] p-0'
                        align='start'
                    >
                        <Command>
                            <CommandInput placeholder='Search States...' />
                            <CommandList>
                                <CommandEmpty>No state found.</CommandEmpty>
                                {/* TODO: @shivam here is the US country flag API https://flagpedia.net/us-states can you please use that API to get the flags of all the states*/}
                                <CommandGroup>
                                    {statesData.map(state => (
                                        <CommandItem
                                            key={state.value}
                                            value={state.value}
                                            onSelect={currentValue => {
                                                setValue(
                                                    currentValue === value
                                                        ? ''
                                                        : currentValue
                                                );
                                                setOpen(false);
                                            }}
                                        >
                                            {state.label}
                                            {value === state.value && (
                                                <CheckIcon
                                                    size={16}
                                                    className='ml-auto'
                                                />
                                            )}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>

                {/* Password */}
                <Input
                    type='password'
                    placeholder='Password'
                    {...inputSettings}
                    value={form.password}
                    onChange={e => setForm(s => ({ ...s, password: e.target.value }))}
                />

                {/* Confirm Password */}
                <Input
                    type='password'
                    placeholder='Confirm Password'
                    {...inputSettings}
                    value={form.confirmPassword}
                    onChange={e => setForm(s => ({ ...s, confirmPassword: e.target.value }))}
                />

                {/* Terms and SMS Consent */}
                <div className='flex flex-col gap-4'>
                    {/* Terms and Conditions */}
                    <div className='site-checkbox flex items-center gap-3'>
                        <Checkbox
                            id='terms-policy'
                            checked={form.acceptTerms}
                            onCheckedChange={v => setForm(s => ({ ...s, acceptTerms: Boolean(v) }))}
                        />
                        <NeonText
                            as='label'
                            htmlFor='terms-policy'
                            className='text-sm! lg:text-base!'
                            glowSpread={0.5}
                        >
                            I confirm I am 21+ and accept the{' '}
                            <Link
                                href='/terms-conditions'
                                title='Terms & Conditions'
                            >
                                Terms & Conditions
                            </Link>{' '}
                            and{' '}
                            <Link href='/privacy-policy' title='Privacy Policy'>
                                Privacy Policy
                            </Link>
                            .
                        </NeonText>
                    </div>

                    {/* Marketing SMS Consent */}
                    <div className='site-checkbox flex items-center gap-3'>
                        <Checkbox
                            id='sms-marketing-terms'
                            checked={form.acceptSMSMarketing}
                            onCheckedChange={v => setForm(s => ({ ...s, acceptSMSMarketing: Boolean(v) }))}
                        />
                        <NeonText
                            as='label'
                            htmlFor='sms-marketing-terms'
                            className='text-sm! lg:text-base!'
                            glowSpread={0.5}
                        >
                            I agree to receive marketing SMS from GTOA. Frequency varies. Msg & data rates may apply. Consent is not a condition of purchase.
                            <br />
                            Reply STOP to unsubscribe or HELP for assistance.
                        </NeonText>
                    </div>

                    {/* Account-related SMS Disclaimer */}
                    <NeonBox
                        className='p-4 rounded-lg'
                        glowColor='--color-blue-500'
                        backgroundColor='--color-blue-500'
                        backgroundOpacity={0.1}
                        glowSpread={0.3}
                        borderWidth={1}
                    >
                        <NeonText className='text-sm text-white/90 leading-relaxed'>
                            By registering, you agree to receive account-related SMS from GTOA (such as verification codes, password resets, receipts, or security alerts). These are not marketing messages. Msg & data rates may apply. Reply{' '}
                            <span className='text-yellow-400 font-semibold'>STOP</span>
                            {' '}to unsubscribe,{' '}
                            <span className='text-yellow-400 font-semibold'>HELP</span>
                            {' '}for help.
                        </NeonText>
                    </NeonBox>
                </div>
                {error && (
                    <p className='text-red-500 text-base font-semibold'>{error}</p>
                )}
            </div>

            {/* Register Button */}
            <div className='flex justify-center'>
                <Button size='md' type='submit' animate disabled={loading}>
                    {loading ? 'Registering...' : 'Register Account'}
                </Button>
            </div>
        </form>
    );
};

export default ManualregisterOption;
