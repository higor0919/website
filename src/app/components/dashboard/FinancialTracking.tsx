import React from 'react';

interface FinancialTrackingProps {
  contractValue: string;
  advancePayment: string;
  advanceDate: string;
  balancePayment: string;
  balanceCondition: string;
  transactions: {
    transaction: string;
    date: string;
    amount: string;
    status: string;
    method: string;
  }[];
}

const FinancialTracking: React.FC<FinancialTrackingProps> = ({
  contractValue,
  advancePayment,
  advanceDate,
  balancePayment,
  balanceCondition,
  transactions
}) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Financial Tracking</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="card bg-blue-50">
          <h3 className="text-sm text-gray-600 mb-2">Total Contract Value</h3>
          <p className="text-2xl font-bold">{contractValue}</p>
          <p className="text-sm text-gray-600 mt-1">81 MT × $3,700/MT</p>
        </div>
        <div className="card bg-green-50">
          <h3 className="text-sm text-gray-600 mb-2">Advance Payment (30%)</h3>
          <p className="text-2xl font-bold">{advancePayment}</p>
          <p className="text-sm text-gray-600 mt-1">Received on {advanceDate}</p>
        </div>
        <div className="card bg-yellow-50">
          <h3 className="text-sm text-gray-600 mb-2">Balance Payment (70%)</h3>
          <p className="text-2xl font-bold">{balancePayment}</p>
          <p className="text-sm text-gray-600 mt-1">{balanceCondition}</p>
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transfer Method
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                    {transaction.transaction}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {transaction.date}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {transaction.amount}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <span className={`status-badge ${transaction.status === 'Completed' ? 'status-completed' : 'status-pending'}`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {transaction.method}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FinancialTracking;
