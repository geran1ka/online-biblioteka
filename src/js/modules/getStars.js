export const getStars = (rating, className) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i === 0) {
      stars.push(`
        <img
        class="${className}"
        src="img/star.svg"
        alt="Рейтинг ${rating} из 5"
      />
    `);
    } else if (i < rating) {
      stars.push(`<img class="${className}" src="img/star.svg" />`);
    } else {
      stars.push(`<img class="${className}" src="img/star-o.svg" />`);
    }
  }

  return stars;
};

export const getStarsAlt = (rating, className) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i === 0) {
      stars.push(`
        <img
        class="${className}"
        src="img/star.svg"
        alt="Рейтинг ${rating} из 5"
      />
    `);
    } else if (i < rating) {
      stars.push(`<img class="${className}" src="img/star.svg" />`);
    } else {
      stars.push(`<img class="${className}" src="img/star-o.svg" />`);
    }
  }

  return stars;
};
