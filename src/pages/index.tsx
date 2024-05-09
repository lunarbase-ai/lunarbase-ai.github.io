import useBaseUrl from '@docusaurus/useBaseUrl';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.location.href = useBaseUrl('/docs/main');
  }, []);
  return null;
}
