import { useMediaQuery } from 'react-responsive';

function DateOfBirth({
  bDay,
  bMonth,
  bYear,
  days,
  months,
  years,
  handleRegisterChange,
  dateError,
}) {
  const View1 = useMediaQuery({
    query: '(min-width: 539px)',
  });
  const View2 = useMediaQuery({
    query: '(min-width: 850px)',
  });
  const View3 = useMediaQuery({
    query: '(min-width: 1170px)',
  });
  return (
    <div
      className="reg_grid"
      style={{ marginBottom: `${dateError && !View3 ? '90px':'0'}` }}
    >
      <select name="bDay" value={bDay} onChange={handleRegisterChange}>
        {days.map((day, i) => (
          <option value={day} key={i}>
            {day}
          </option>
        ))}
      </select>
      <select name="bMonth" value={bMonth} onChange={handleRegisterChange}>
        {months.map((month, i) => (
          <option value={month} key={i}>
            {month}
          </option>
        ))}
      </select>
      <select name="bYear" value={bYear} onChange={handleRegisterChange}>
        {years.map((year, i) => (
          <option value={year} key={i}>
            {year}
          </option>
        ))}
      </select>
      {dateError && (
        <div
          className={
            !View3 ? 'input_error' : 'input_error input_error_select_large'
          }
        >
          <div
            className={!View3 ? 'error_arrow_bottom' : 'error_arrow_left'}
          ></div>
          {dateError}
        </div>
      )}
    </div>
  );
}

export default DateOfBirth;
