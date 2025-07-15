import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const ComparisonFeature = ({ text, isPositive }: { text: string; isPositive: boolean }) => (
  <div className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 group">
    {isPositive ? (
      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
    ) : (
      <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
    )}
    <span className={`text-lg ${isPositive ? 'text-gray-900' : 'text-gray-600'} group-hover:translate-x-1 transition-transform duration-300`}>{text}</span>
  </div>
);

export default ComparisonFeature; 