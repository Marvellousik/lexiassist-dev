'use client';

import { cn } from '@/lib/utils';
import { forwardRef, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { className, padding = 'md', shadow = 'sm', children, ...props },
    ref
  ) => {
    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    };

    const shadows = {
      none: '',
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl border border-slate-200 bg-white',
          paddings[padding],
          shadows[shadow],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

// Card Header
interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  action?: React.ReactNode;
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, title, description, action, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-start justify-between gap-4 pb-4',
          className
        )}
        {...props}
      >
        <div className="flex-1">
          {title && (
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          )}
          {description && (
            <p className="mt-1 text-sm text-slate-500">{description}</p>
          )}
          {children}
        </div>
        {action && <div>{action}</div>}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

// Card Content
const CardContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn('', className)} {...props} />;
});

CardContent.displayName = 'CardContent';

// Card Footer
const CardFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex items-center justify-end gap-3 pt-4', className)}
      {...props}
    />
  );
});

CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardContent, CardFooter };
export default Card;
