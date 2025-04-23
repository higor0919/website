import React from 'react';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

interface DocumentCardProps {
  title: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Pending';
  icon: React.ReactNode;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ title, description, status, icon }) => {
  const getStatusClass = () => {
    switch (status) {
      case 'Completed':
        return 'status-completed';
      case 'In Progress':
        return 'status-in-progress';
      case 'Pending':
        return 'status-pending';
      default:
        return '';
    }
  };

  return (
    <div className="card">
      <div className="flex items-start">
        <div className="mr-4">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          <div className="mt-4">
            <span className={`status-badge ${getStatusClass()}`}>
              {status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const DocumentList: React.FC = () => {
  const documents = [
    {
      title: 'Commercial Invoice',
      description: 'With registered plant number',
      status: 'Completed' as const,
      icon: <DocumentTextIcon className="h-8 w-8 text-blue-500" />
    },
    {
      title: 'Bill of Lading',
      description: 'Required for 70% payment',
      status: 'In Progress' as const,
      icon: <DocumentTextIcon className="h-8 w-8 text-blue-500" />
    },
    {
      title: 'Certificate of Weights',
      description: 'And Quantities Packing list',
      status: 'Completed' as const,
      icon: <DocumentTextIcon className="h-8 w-8 text-blue-500" />
    },
    {
      title: 'Export Declaration',
      description: 'Brazilian customs declaration',
      status: 'Completed' as const,
      icon: <DocumentTextIcon className="h-8 w-8 text-blue-500" />
    },
    {
      title: 'Halal Certificate',
      description: 'Religious compliance certification',
      status: 'Completed' as const,
      icon: <DocumentTextIcon className="h-8 w-8 text-blue-500" />
    },
    {
      title: 'Quality Certificate',
      description: 'Safety and quality verification',
      status: 'Completed' as const,
      icon: <DocumentTextIcon className="h-8 w-8 text-blue-500" />
    },
    {
      title: 'Certificate of Origin',
      description: 'Original document required',
      status: 'Completed' as const,
      icon: <DocumentTextIcon className="h-8 w-8 text-blue-500" />
    },
    {
      title: 'Cargo Insurance',
      description: 'Insurance certificate',
      status: 'Completed' as const,
      icon: <DocumentTextIcon className="h-8 w-8 text-blue-500" />
    },
    {
      title: 'COVID Test Certificate',
      description: 'Health safety requirement',
      status: 'Completed' as const,
      icon: <DocumentTextIcon className="h-8 w-8 text-blue-500" />
    }
  ];

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Required Documentation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((doc) => (
          <DocumentCard 
            key={doc.title}
            title={doc.title}
            description={doc.description}
            status={doc.status}
            icon={doc.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default DocumentList;
