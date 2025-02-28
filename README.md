# 🚀 MetaMask + Nibiru EVM Connection with Next.js

A simple Next.js hook to connect MetaMask to **Nibiru EVM** and switch networks seamlessly.

## 🌟 Features

- ✅ Connect MetaMask to **Nibiru EVM**
- ✅ Switch between Ethereum and Nibiru
- ✅ Auto-detect provider with **ethers.js**
- ✅ Fully optimized for **Next.js + TypeScript**

---

## 📦 Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣  Run the Development Server

```bash
npm run dev
```

The app should now be running on <http://localhost:3000/>.


## 🚀 Usage

### 1️⃣ Import the Hook in a Component

```typescript
import { useMetamask } from "@/hooks/useMetamask";

const ConnectWallet = () => {
  const { account, connectWallet, switchToNibiru } = useMetamask();

  return (
    <div>
      {account ? (
        <p>Connected: {account}</p>
      ) : (
        <button onClick={connectWallet}>Connect MetaMask</button>
      )}
      <button onClick={switchToNibiru}>Switch to Nibiru</button>
    </div>
  );
};

export default ConnectWallet;
```

### 2️⃣ Ensure the Hook is a Client Component

At the top of your useMetamask.ts and ConnectWallet.tsx, add:

```tsx
"use client";
```

## 🔧 Customizing the Nibiru EVM Parameters

Modify NIBIRU_PARAMS in useMetamask.ts to update chain details:

```tsx
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
```

## 📜 Environment Variables

Ensure your `.env.local` file contains:

```ini
NEXT_PUBLIC_RPC_URL=https://evm-rpc.nibiru.fi/
```

## 📂 Project Structure

```bash
/your-repo-name
│── /hooks
│   ├── useMetamask.ts  # MetaMask connection logic
│── /components
│   ├── ConnectWallet.tsx  # UI component for wallet connection
│── /pages
│   ├── index.tsx  # Home page integrating MetaMask
│── package.json
│── tsconfig.json
│── README.md
```

## 🔗 Resources

- 📝 [Nibiru Chain Docs](https://nibiru.fi/docs)
- 🦊 [MetaMask Docs](https://docs.metamask.io/)
- ⚡ [Ethers.js](https://docs.ethers.org/v6/)
