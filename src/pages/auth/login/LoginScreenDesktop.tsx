import { ReactNode } from 'react';
import loginBg from '@/assets/login-bg-desktop.png';

type DeskTopLoginScreenProps = {
  children: ReactNode
}

export function LoginScreenDesktop({ children}: DeskTopLoginScreenProps) {
  return (
    <div>
      <div className="container relative hidden flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div
            className="absolute inset-0 bg-secondary/30 bg-no-repeat bg-cover h-[95vh]"
            style={{
              backgroundImage: `url(${loginBg})`,
            }}
          />
          <div className="relative z-20 flex items-center text-2xl font-semibold text-black">
           
            Fun Club
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col items-center justify-center space-y-6 md:w-2/3 md:pl-28 md:py-16 md:border-[1rem] md:border-primary md:border-t-0 md:border-r-0 md:border-b-0 md:shadow-xl" style={{
            borderRadius: '100% 0% 60% 40% / 47% 100% 0% 53% '
          }}>
          <div className="relative z-20 flex items-center text-lg font-medium">
            <img src="/funclub-logo.png" alt="Fun Club" className="mr-2 h-72 w-72" />
          </div>
            <h1 className="text-3xl font-semibold tracking-tight">
              Create an account
            </h1>
          

            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
