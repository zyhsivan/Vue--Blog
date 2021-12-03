export function timestampToTime(timestamp: number) {
  const date = new Date(timestamp);
  const Y = date.getFullYear() + "-";
  const M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  const D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
  const h =
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
  const m =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  const strDate = Y + M + D + h + m;
  //2021-01-01 17:44:56
  return strDate;
}
