import React from 'react';
import './RecipeStep.css';

interface RecipeStepProps {
  stepNumber: number;
  content: string;
}

const RecipeStep: React.FC<RecipeStepProps> = ({ stepNumber, content }) => {
  return (
    <div className="step-container">
      <div className="step-number">{stepNumber}</div>
      <div className="step-content">{content}</div>
    </div>
  );
};

export default RecipeStep;