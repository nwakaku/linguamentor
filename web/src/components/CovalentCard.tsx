
import "@covalenthq/goldrush-kit/styles.css";
import {
    GoldRushProvider,
    NFTWalletTokenListView,
    TokenBalancesListView,
    TokenTransfersListView,
    AddressActivityListView,
} from "@covalenthq/goldrush-kit";

export default function GoldRushExample() {
    return (
        <main className="">
            <GoldRushProvider
                apikey={process.env.NEXT_PUBLIC_API_KEY || 'cqt_rQVDvrpg69d899FKXHyXKW6RCWmG'}
                mode="dark"
                color="emerald"
            >
                <TokenBalancesListView
                    chain_names={[
                        "eth-mainnet",
                        "matic-mainnet",
                        "bsc-mainnet",
                        "avalanche-mainnet",
                        "optimism-mainnet",
                    ]}
                    hide_small_balances
                    address="0xfc43f5f9dd45258b3aff31bdbe6561d97e8b71de"
                />
                <TokenTransfersListView
                    chain_name="eth-mainnet"
                    address="0xfc43f5f9dd45258b3aff31bdbe6561d97e8b71de"
                    contract_address="0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
                />
                <AddressActivityListView address="0xfc43f5f9dd45258b3aff31bdbe6561d97e8b71de" />
                <NFTWalletTokenListView
                    address="0xfc43f5f9dd45258b3aff31bdbe6561d97e8b71de"
                    chain_names={[
                        "eth-mainnet",
                        "matic-mainnet",
                        "bsc-mainnet",
                        "avalanche-mainnet",
                        "optimism-mainnet",
                    ]}
                />
            </GoldRushProvider>
        </main>
    );
}