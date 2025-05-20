import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from "../Button/Button";
import Input from './Input/Input';

import s from './Form.module.scss';


const Form = ({ fields, validationSchema, valueBtn, formBlock, inputsBlock, onSubmit, loading}) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange', 
  });

  return (
    <div className={cx(s.root, formBlock)}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <div className={cx(s.inputs, inputsBlock)}>
          {fields.map((field) => (
            <Input
              key={field.id}
              {...field}
              control={control}
              errors={errors}
            />
          ))}
        </div>
        <Button value={valueBtn} type="submit" className={s.button} loading={loading} />
      </form>
    </div>
  );
};

Form.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, 
      label: PropTypes.string.isRequired,
      type: PropTypes.string,
      placeholder: PropTypes.string,
      validationRules: PropTypes.object,
    })
  ).isRequired,
  validationSchema: PropTypes.object.isRequired, 
  valueBtn: PropTypes.string.isRequired,
  formBlock: PropTypes.string,
  inputsBlock: PropTypes.string,
};

export default React.memo(Form);
