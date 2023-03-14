import {
  TransactionIconName,
  TransactionType,
} from "../components/common-card";

const today = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "medium",
  timeZone: "America/Sao_Paulo",
}).format(new Date());

const mockedTransactions: TransactionType[] = [
  {
    id: "1",
    title: "Dropbox",
    description: "Assinatura anual",
    value: 144.0,
    invoicedAt: today,
    iconName: TransactionIconName.Dropbox,
  },
  {
    id: "22",
    title: "Spotify",
    description: "Assinatura mensal",
    value: 24.0,
    invoicedAt: today,
    iconName: TransactionIconName.Spotify,
  },
  {
    id: "53",
    title: "Freelancer",
    description: "Recebimento pontual",
    value: 421.0,
    receivedAt: today,
    iconName: TransactionIconName.Freelancer,
  },
];

export function getRecentTransactions() {
  return mockedTransactions;
}

export function getAllTransactions() {
  return mockedTransactions;
}

export function getBalance() {
  return 6420.0;
}
