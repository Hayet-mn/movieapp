import React from "react";

function ratingMovie({ rate, ChangeRating }) {
  let starts = [];
  for (let i = 0; i < 5; i++) {
    if (i < rate) {
      starts.push(<i class="fas fa-star" onClick={() => ChangeRating(i + 1)}></i>);
    } else {
      starts.push(<i class="far fa-star" onClick={() => ChangeRating(i + 1)}></i>);
    }
  }
  return starts;
}

export default ratingMovie;
