import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import DocumentList from '../components/dashboard/DocumentList';

export default function DocumentsPage() {
  return (
    <MainLayout activePage="documents">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Documents</h1>
        <p className="text-gray-600">Manage export documentation and certificates</p>
      </div>
      
      <DocumentList />
    </MainLayout>
  );
}
