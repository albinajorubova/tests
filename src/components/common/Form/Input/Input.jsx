import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Controller } from 'react-hook-form';
import Checkbox from "../../Checkbox/Checkbox";
import s from './Input.module.scss';

const Input = ({
  label,
  type,
  placeholder,
  control,
  required,
  validationRules,
  errors,
  inputProps,
  onChange,
}) => {
  const error = errors?.[label]?.message;

  if (type === 'checkbox') {
    return (
      <div className={s.root}>
        <Controller
          name={label}
          defaultValue={false}
          control={control}
          rules={{ required, ...validationRules }}
          render={({ field }) => (
            <Checkbox
              checked={field.value}
              type="checkbox"
              text={placeholder}
              onChange={(e) => {
                field.onChange(e.target.checked);
                if (onChange) onChange(e);
              }}
              classNameInput={s.checkbox}
            />
          )}
        />
        {error && <span className={s.errorMessage}>{error}</span>}
      </div>
    );
  }

  return (
    <div className={s.root}>
      {error && <span className={s.errorMessage}>{error}</span>}
      <Controller
        name={label}
        defaultValue=""
        control={control}
        rules={{ required, ...validationRules }}
        render={({ field }) => (
          <input
            id={label}
            type={type}
            className={cx(s.input, { [s.error]: error })}
            placeholder={placeholder}
            {...field}
            {...inputProps}
          />
        )}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  control: PropTypes.object.isRequired,
  required: PropTypes.bool,
  validationRules: PropTypes.object,
  errors: PropTypes.object.isRequired,
  inputProps: PropTypes.object,
  onChange: PropTypes.func,
};

export default React.memo(Input);
