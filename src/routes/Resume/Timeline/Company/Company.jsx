import React from 'react';
import './Company.scss';

const Company = React.memo(props => {
  const {
    toggle,
    top,
    company: {
      name,
      period: { start, end },
    },
  } = props;
  const yearWidth = 150;
  const isCurrent = end.year ? end.year : 2018;
  let year = yearWidth * (start.year - 2012);
  let period = yearWidth * Math.ceil(isCurrent - start.year);
  const color = `hsl(${Math.ceil(360 * Math.random())}, 70%, 45%)`;
  const offsetTop = `${top * 2 + 3.25}rem`;

  if (!period) {
    period = yearWidth / 2;
    if (start.month.semester) year += yearWidth / 2;
  }

  return (
    <button
      key={name}
      type="button"
      className="button default company"
      onClick={() => toggle(top)}
      style={{
        width: period,
        left: year,
        top: offsetTop,
        backgroundColor: color,
      }}
    >
      {name}
    </button>
  );
});

export default Company;
