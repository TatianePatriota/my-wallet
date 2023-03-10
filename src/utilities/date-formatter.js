const date = new Date(Date.UTC());
export function GetDate(date) {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "full",
  }).format(date);
}
