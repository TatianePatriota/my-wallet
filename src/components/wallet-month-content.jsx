import { WalletItem } from "./wallet-item";

export function WalletMonthContent({ items }) {
  if (!items.length) {
    return <span>Nenhuma conta cadastrada neste mês</span>;
  }

  return items.map((item) => <WalletItem key={item.id} {...item} />);
}
