
import { cn } from '@/lib/utils';
import React from 'react';

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[120px] w-full rounded-md border border-input bg-white px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        'border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 transition-colors resize-none placeholder:text-gray-400 font-lato',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = 'TextareaArtist';

export { Textarea };
