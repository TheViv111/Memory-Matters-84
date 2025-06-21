
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import LoadingSpinner from './LoadingSpinner';

interface FadeInButtonProps {
  children: React.ReactNode;
  onClick?: () => void | Promise<void>;
  loading?: boolean;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const FadeInButton: React.FC<FadeInButtonProps> = ({
  children,
  onClick,
  loading = false,
  className = '',
  disabled = false,
  type = 'button'
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = async () => {
    if (onClick && !loading && !disabled) {
      setIsPressed(true);
      await onClick();
      setTimeout(() => setIsPressed(false), 150);
    }
  };

  return (
    <Button
      type={type}
      onClick={handleClick}
      disabled={disabled || loading}
      className={`
        ${className}
        transform transition-all duration-200 ease-in-out
        hover:scale-105 hover:shadow-lg
        active:scale-95
        ${isPressed ? 'scale-95' : ''}
        ${loading ? 'cursor-not-allowed' : ''}
        relative overflow-hidden
      `}
    >
      <span className={`flex items-center space-x-2 ${loading ? 'opacity-75' : ''}`}>
        {loading && <LoadingSpinner size="sm" />}
        <span>{children}</span>
      </span>
    </Button>
  );
};

export default FadeInButton;
