/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, ChangeEvent } from "react";

interface useFormProps {}

export const useForm = (
  initialState: useFormProps = {}
): {
  values: any;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
} => {
  const [values, setValues] = useState<any>(initialState);

  const reset = () => setValues(initialState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return { values, handleInputChange, reset };
};
