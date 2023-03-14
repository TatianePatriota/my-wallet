import { HomeResume } from "../components/home-resume";
import { TransactionsRecent } from "../components/transactions-recent";
import { LayoutWithBottonNavigation } from "../layouts/with-bottom-navigation";

export function Home(): JSX.Element {
  return (
    <LayoutWithBottonNavigation>
      <HomeResume />
      <TransactionsRecent />
    </LayoutWithBottonNavigation>
  );
}
