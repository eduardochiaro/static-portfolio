'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import { useState } from 'react';

export default function Remote() {
  const [isLoading, setIsLoading] = useState(true);
  // Load data asynchronously
  loadData().then(() => {
    setIsLoading(false);
  });
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header name="Resume" goBack="/" />
          resume
          <Footer />
        </>
      )}
    </>
  );
}

const loadData = async () => {
  // Simulate data loading
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data loaded');
    }, 1000);
  });
};
