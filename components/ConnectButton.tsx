"use client";

import { useMetamask } from "@/hooks/useMetamask";

export default function ConnectButton() {
  const { account, connectWallet, switchToNibiru } = useMetamask();

  return (
    <div className="flex flex-col items-center gap-3">
      {account ? (
        <button
          onClick={switchToNibiru}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:cursor-pointer"
        >
          Switch to Nibiru
        </button>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-green-500 text-white px-4 py-2 rounded hover:cursor-pointer"
        >
          Connect MetaMask
        </button>
      )}

      {account && <p className="mt-2">Connected: {account}</p>}
    </div>
  );
}
