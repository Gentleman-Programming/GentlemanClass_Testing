import React from 'react';
import { Input } from './Input';

export const UsernameField = ({ register, errors }) => {
  return <Input label="Nombre de usuario" register={register} errors={errors} name="username" type="text" maxLength={12} />;
};

export default UsernameField;
