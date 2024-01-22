import * as React from 'react';

type OverlayProps = {
    children: React.ReactNode;
}

const Overlay = React.forwardRef<HTMLDivElement, OverlayProps>(
    ({ children }, ref) => (
      <div
        ref={ref}
        className="overlay min-h-screen bg-black/10 fixed z-[100] inset-0 backdrop-blur-[1px]"
    >
        <div className="overlay-parent-container h-full w-full flex justify-center items-center">
          {children}
        </div>
      </div>
    )
);

export { Overlay };
