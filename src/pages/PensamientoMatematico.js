import React from 'react';
import PlanClaseLayout from './PlanClaseLayout';
import BackButton from '../components/BackButton';

const PensamientoMatematico = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <BackButton />
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Pensamiento Matemático III</h1>
          <p className="text-gray-600 mt-1">Cálculo Diferencial</p>
        </div>
      </div>

      <PlanClaseLayout asignatura="pensamiento-matematico-iii" tabs={15} />
    </div>
  );
};

export default PensamientoMatematico;