import React from 'react'
import { AuthFormState } from '../register/RegisterForm';

interface Props{
    state:AuthFormState
}
const FormStateMessage = ({state}:Props) => {
  return (
    <p
      className={`text-center font-bold ${state?.success && "text-green-600"} ${
        state?.error && "text-red-700 dark:text-red-500"
      } `}
    >
      {state?.message}
    </p>
  );
}

export default FormStateMessage