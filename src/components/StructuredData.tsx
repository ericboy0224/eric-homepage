import Head from 'next/head';
import React from 'react';

const StructuredData: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Eric Lin",
    "jobTitle": "Full-stack Developer",
    "description": "A full-stack developer and software engineer based in Taipei, specializing in React, Next.js, and Go.",
    "url": "https://www.ericlin.dev",
    "sameAs": [
      "https://www.linkedin.com/in/jia-hao-lin/",
      "https://github.com/ericboy0224",
      "https://www.instagram.com/babydogofmyg/"
    ]
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default StructuredData;
