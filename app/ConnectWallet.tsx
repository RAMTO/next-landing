'use client';

import React, { useEffect, useState } from 'react';
import { Account } from './account';
import { useAccount } from 'wagmi';
import { WalletOptions } from './wallet-options';

const ConnectWallet = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { isConnected } = useAccount();

  if (isClient) {
    if (isConnected) return <Account />;
    return <WalletOptions />;
  }
};

export default ConnectWallet;
