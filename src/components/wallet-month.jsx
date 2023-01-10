import { getMonth } from "../data-service";
import { toMonthLabel } from "../month-service";
import { WalletMonthContent } from "./wallet-month-content";

export function WalletMonth({ monthIndex }) {
  const month = getMonth(monthIndex);

  return (
    <div>
      <h1>{toMonthLabel(monthIndex)}</h1>
      <WalletMonthContent items={month} />
    </div>
  );
}
