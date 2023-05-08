export function Rated(num) {
  const fullStars = Math.floor(num);
  const hasHalfStar = num % 1 !== 0;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push("Star_full");
  }

  if (hasHalfStar) {
    stars.push("Star_half");
  }

  for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
    stars.push("Star");
  }

  return stars;
}
