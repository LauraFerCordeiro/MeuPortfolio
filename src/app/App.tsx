import { useState } from 'react';
import IntroPage from '@/app/components/IntroPage';
import MainSite from '@/app/components/MainSite';

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="w-full min-h-screen bg-black">
      {!entered ? (
        <IntroPage onEnter={() => setEntered(true)} />
      ) : (
        <MainSite />
      )}
    </div>
  );
}