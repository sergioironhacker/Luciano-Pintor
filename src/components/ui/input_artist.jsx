
import { cn } from '@/lib/utils';
import React from 'react';

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-11 w-full rounded-md border border-input bg-white px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        'border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 transition-colors placeholder:text-gray-400 font-lato',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'InputArtist';

export { Input };
