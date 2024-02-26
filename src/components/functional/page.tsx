import { PropsWithChildren } from 'react';

import { Helmet } from 'react-helmet';

type PageProps = {
  title?: string;
  className?: string;
};
export function Page({
  children,
  title,
  className,
}: PropsWithChildren<PageProps>) {
  return (
    <>
      <Helmet>
        <title>{title ? `${title} | Chamet` : 'Chamet'}</title>
      </Helmet>
      <div className={className}>{children}</div>
    </>
  );
}
