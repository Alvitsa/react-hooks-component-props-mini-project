import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const coffeeCups = Math.ceil(minutes / 5);
  const bentoBoxes = Math.ceil(minutes / 10);

  const minutesToRead =
    minutes < 30
      ? "☕️".repeat(coffeeCups) + ` ${minutes} min read`
      : "🍱".repeat(bentoBoxes) + ` ${minutes} min read`;

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {minutesToRead}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;