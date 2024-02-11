import { cn } from '@/lib/utils';
import * as React from 'react';

const BluetoothIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGAttributes<SVGSVGElement>
>(({ className, ...props }, ref) => (
  <svg
    ref={ref}
    fill="none"
    height="800px"
    width="800px"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 53.972 53.972"
    xmlSpace="preserve"
    className={cn(className)}
    {...props}>
    <path d="M40.533,14.387L26.146,0v24L14.853,12.707l-1.414,1.414l12.707,12.707V27L13.439,39.707l1.414,1.414l11.293-11.293v0.144v24 l14.387-15.585l-11.52-11.52L40.533,14.387z M28.146,4.828l9.613,9.613l-9.613,10.415V4.828z M28.146,48.856V28.828l9.613,9.613 L28.146,48.856z" />
  </svg>
));

export { BluetoothIcon };
