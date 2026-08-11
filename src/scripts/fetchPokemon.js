export default function getRandomIds(amount, maximum) {
  const ids = Array.from({ length: maximum }, (_, index) => index + 1);

  // Fisher–Yates shuffle
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }

  return ids.slice(0, amount);
}