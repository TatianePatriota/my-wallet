export const today = new Date();

export function GetDate(date = today): string {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "long",
  }).format(date);
}
