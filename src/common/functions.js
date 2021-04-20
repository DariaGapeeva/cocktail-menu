export function dataTransformer(date) {
  let months = [
    "jan",
    "feb",
    "march",
    "apr",
    "may",
    "june",
    "jul",
    "aug",
    "sept",
    "okt",
    "nov",
    "dec",
  ];

  const time = date.toLocaleTimeString([], {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${date.getDate()}  ${
    months[date.getMonth()]
  } ${date.getFullYear()}, ${time}  `;
}
