import React, { Suspense, useEffect, useState } from 'react';

const LoadReactContent = ({ id }: { id: string }) => {
  const [HTMLContent, setHTMLContent] = useState<React.ReactNode | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getHTMLComponent = async () => {
      try {
        const module1 = await import(`../../html/React/${id}.html`);
        setHTMLContent(module1.default);
      } catch (error) {
        setError(true);
      }
    };

    getHTMLComponent();
  }, [id]);

  if (error) {
    return <div>Error loading HTML file.</div>;
  }

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <div dangerouslySetInnerHTML={{ __html: HTMLContent || '' }} />
      </Suspense>
    </div>
  );
};

export default LoadReactContent;
