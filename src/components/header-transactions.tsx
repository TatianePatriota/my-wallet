export type HeaderTransactionsProps = {
  title: string;
  description: string;
  balanceSheet: string;
};

export function HeaderTransactions({
  title,
  description,
  balanceSheet,
}: HeaderTransactionsProps): JSX.Element {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <h2>{balanceSheet}</h2>
    </div>
  );
}
