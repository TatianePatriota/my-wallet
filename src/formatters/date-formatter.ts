const date = new Date(Date.UTC(2022, 3, 13));
export function GetDate(date: number) {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "long",
  }).format(date);
}
