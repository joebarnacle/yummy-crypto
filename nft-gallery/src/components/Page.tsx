import React from 'react';
import { Helmet, MetaProps } from 'react-helmet-async';

interface PageProps {
  title?: string;
  header?: React.ReactNode;
  metaTags?: MetaProps['children'];
}

const Page: React.FC<PageProps> = ({ header, children, metaTags, title }) => {
  return (
    <>
      <Helmet>
        <title>{title ? `${title} - ` : ''}Yummy Dog Gallery</title>
        {metaTags}
      </Helmet>
      {header}
      {children}
    </>
  );
};

export default Page;
