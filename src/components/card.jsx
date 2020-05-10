import React from 'react';

function card(props) {
  const { title, desc } = props;
  return (
    <div>
      <div class="card shadow-sm">
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <hr />
          <p class="card-text">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default card;
