import React from 'react';
import './Company.scss';

const Company = React.memo((props) => {
  const {
    toggle,
    top,
    company: {
      name,
      period: { start, end },
    },
    yearWidth,
  } = props;

  const isCurrent = (end && end.year) || 2020;
  let year = yearWidth * (start.year - 2012);
  let period = yearWidth * Math.ceil(isCurrent - start.year);
  const color = `hsl(${Math.ceil(360 * Math.random())}, 70%, 45%)`;
  const offsetTop = `${top * 2 + 3.75}rem`;

  if (!period) {
    period = yearWidth / 2;
    if (start.month.semester) year += yearWidth / 2;
  }

  return (
    <button
      key={name}
      className="button default company"
      onClick={() => toggle(top)}
      style={{
        width: period,
        left: year,
        top: offsetTop,
        backgroundColor: color,
      }}
      type="button">
      {name}
    </button>
  );
});

export default Company;
