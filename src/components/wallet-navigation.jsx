import { useState } from "react";
import { WalletHomeNav } from "./wallet-home-nav";
import { WalletMonth } from "./wallet-month";
import { currentMonthIndex, getMonths } from "../data-service";

const routes = Object.keys(getMonths()).reduce(
  (o, key) =>
    Object.assign(o, {
      [key]: <WalletMonth monthIndex={key} />,
    }),
  {}
);

export function WalletNavigation() {
  const [selectedMonth, changeSelectedMonth] = useState(currentMonthIndex);

  return (
    <>
      <WalletHomeNav selected={selectedMonth} onChange={changeSelectedMonth} />
      {routes[selectedMonth]}
    </>
  );
}
