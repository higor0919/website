import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import FinancialTracking from '../components/dashboard/FinancialTracking';

export default function FinancesPage() {
  // Sample data for financial tracking
  const financialData = {
    contractValue: '$299,700 USD',
    advancePayment: '$89,910 USD',
    advanceDate: 'April 10, 2024',
    balancePayment: '$209,790 USD',
    balanceCondition: 'Due upon BL receipt',
    transactions: [
      {
        transaction: 'Advance Payment',
        date: 'April 10, 2024',
        amount: '$89,910 USD',
        status: 'Completed',
        method: 'TT (Telegraphic Transfer)'
      },
      {
        transaction: 'Supplier Payment (30%)',
        date: 'April 12, 2024',
        amount: '$85,414.50 USD',
        status: 'Completed',
        method: 'TT (Telegraphic Transfer)'
      },
      {
        transaction: 'Commission (30%)',
        date: 'April 12, 2024',
        amount: '$4,495.50 USD',
        status: 'Completed',
        method: 'Internal Transfer'
      },
      {
        transaction: 'Balance Payment',
        date: 'Pending',
        amount: '$209,790 USD',
        status: 'Pending',
        method: 'TT (Telegraphic Transfer)'
      }
    ]
  };

  return (
    <MainLayout activePage="finances">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Finances</h1>
        <p className="text-gray-600">Track payments, invoices, and financial transactions</p>
      </div>
      
      <FinancialTracking {...financialData} />
    </MainLayout>
  );
}
