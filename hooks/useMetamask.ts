"use client";

import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { MetaMaskInpageProvider } from "@metamask/providers";

const NIBIRU_PARAMS = {
  chainId: "0x1AF4",
  chainName: "Nibiru",
  nativeCurrency: {
    name: "NIBI",
    symbol: "NIBI",
    decimals: 18,
  },
  rpcUrls: ["https://evm-rpc.nibiru.fi/"],
  blockExplorerUrls: ["https://nibiscan.io/"],
};

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

export function useMetamask() {
  const [account, setAccount] = useState<string | null>(null);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);

  useEffect(() => {
    if (window.ethereum) {
      const ethProvider = new ethers.BrowserProvider(window.ethereum);
      setProvider(ethProvider);
    }
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask not installed!");
      return;
    }

    try {
      const accounts = (await window.ethereum.request({
        method: "eth_requestAccounts",
      })) as string[];

      if (accounts.length > 0) {
        setAccount(accounts[0]);
      }
    } catch (error) {
      console.error("Error connecting:", error);
    }
  };

  const switchToNibiru = async () => {
    if (!window.ethereum) return;

    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: NIBIRU_PARAMS.chainId }],
      });
    } catch (switchError) {
      const error = switchError as { code?: number };

      if (error.code === 4902) {
        // Chain not added, so add it
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [NIBIRU_PARAMS],
        });
      } else {
        console.error("Failed to switch chain:", switchError);
      }
    }
  };

  return { account, provider, connectWallet, switchToNibiru };
}
