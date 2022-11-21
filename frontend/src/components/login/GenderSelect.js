import { useMediaQuery } from 'react-responsive';

function GenderSelect({ genderError, handleRegisterChange }) {
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
      style={{ marginBottom: `${genderError && !View3 ? '70px':'0'}` }}
    >
      <label htmlFor="male">
        Male
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          onChange={handleRegisterChange}
        ></input>
      </label>
      <label htmlFor="female">
        Female
        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          onChange={handleRegisterChange}
        ></input>
      </label>
      <label htmlFor="custom">
        Custom
        <input
          type="radio"
          name="gender"
          id="custom"
          value="custom"
          onChange={handleRegisterChange}
        ></input>
      </label>
      {genderError && (
      <div
      className={
        !View3 ? 'input_error' : 'input_error input_error_select_large'
      }
    >
      <div
        className={!View3 ? 'error_arrow_bottom' : 'error_arrow_left'}
      ></div>
      {genderError}
    </div>
      )}
    </div>
  );
}

export default GenderSelect;
