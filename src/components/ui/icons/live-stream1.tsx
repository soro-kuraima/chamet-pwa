import { cn } from '@/lib/utils';
import * as React from 'react';

const LiveStream1Icon = React.forwardRef<
  SVGSVGElement,
  React.SVGAttributes<SVGSVGElement>
>(({ className, ...props }, ref) => (
  <svg
    ref={ref}
    width="9"
    height="9"
    viewBox="0 0 9 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
    {...props}>
    <path
      d="M4.41773 8.73286C2.13646 8.73286 0.280518 6.90825 0.280518 4.6655C0.280518 2.42275 2.13646 0.598145 4.41773 0.598145C6.699 0.598145 8.55494 2.42275 8.55494 4.6655C8.55494 6.90825 6.699 8.73286 4.41773 8.73286ZM4.41773 2.48611C3.20621 2.48611 2.21379 3.46177 2.21379 4.65283C2.21379 5.8439 3.20621 6.81956 4.41773 6.81956C5.62925 6.81956 6.62167 5.8439 6.62167 4.65283C6.62167 3.46177 5.62925 2.48611 4.41773 2.48611Z"
      fill="#292D32"
    />
  </svg>
));

const LiveStream1ActiveIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGAttributes<SVGSVGElement>
>(({ className, ...props }, ref) => (
  <svg
    ref={ref}
    width="9"
    height="9"
    viewBox="0 0 9 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
    {...props}>
    <path
      d="M4.41749 8.73286C2.13622 8.73286 0.280273 6.90825 0.280273 4.6655C0.280273 2.42275 2.13622 0.598145 4.41749 0.598145C6.69875 0.598145 8.5547 2.42275 8.5547 4.6655C8.5547 6.90825 6.69875 8.73286 4.41749 8.73286ZM4.41749 2.48611C3.20597 2.48611 2.21355 3.46177 2.21355 4.65283C2.21355 5.8439 3.20597 6.81956 4.41749 6.81956C5.62901 6.81956 6.62142 5.8439 6.62142 4.65283C6.62142 3.46177 5.62901 2.48611 4.41749 2.48611Z"
      fill="#292D32"
    />
  </svg>
));

export { LiveStream1Icon, LiveStream1ActiveIcon };
