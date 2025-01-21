export function time() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 100 ? 0 + minutes : minutes;
  let currentTime = hours + ":" + minutes + " " + ampm;

  return currentTime;
}
