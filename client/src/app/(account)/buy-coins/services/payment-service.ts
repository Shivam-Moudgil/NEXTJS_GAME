/**
 * Payment Service
 * Handles payment-related API calls and business logic
 */

import { createDeposit } from '@/lib/api/wallet';
import type { DepositRequest, DepositResponse } from '@/types/wallet.types';

export interface PaymentService {
    createPayment: (request: DepositRequest) => Promise<DepositResponse>;
    redirectToPayment: (invoiceUrl: string) => void;
}

class PaymentServiceImpl implements PaymentService {
    async createPayment(request: DepositRequest): Promise<DepositResponse> {
        try {
            const response = await createDeposit(request);
            return response;
        } catch (error) {
            console.error('Payment creation error:', error);
            throw new Error('Failed to create payment. Please try again.');
        }
    }

    redirectToPayment(invoiceUrl: string): void {
        window.location.href = invoiceUrl;
    }
}

export const paymentService = new PaymentServiceImpl();
