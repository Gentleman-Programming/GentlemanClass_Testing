import React from 'react';
import { Input } from './Input';

export const PasswordField = ({ register, errors }) => {
  return <Input label="Contraseña" register={register} errors={errors} name="password" type="password" maxLength={12} />;
};

export default PasswordField;
