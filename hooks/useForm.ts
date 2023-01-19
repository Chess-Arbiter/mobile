import { useState } from "react";
import { FormValue, InputChangeHandler } from "../models/global";
import useValidationScheme from "./useValidationScheme";

export default function useForm<Z, Values>({
  initialValues,
  onSubmit,
  getValidationScheme,
}: {
  initialValues: any;
  onSubmit: any;
  getValidationScheme: Z;
}): {
  handleChange: InputChangeHandler;
  values: Values;
  errors: any;
  handleSubmit: () => void;
} {
  const [formState, setFormState] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const validationScheme = useValidationScheme(getValidationScheme);

  function handleChange(name: string, value: FormValue) {
    setErrors({});
    setFormState((prev: any) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit() {
    const data = validationScheme.safeParse(formState);

    if (!data.success) {
      const formatted: any = data.error.format();

      const newErrors = Object.keys(formatted).reduce(
        (res: any, current: string) => {
          const currentError = formatted[current]?._errors?.[0];
          if (!currentError) return res;
          res[current] = currentError;

          return res;
        },
        {}
      );
      return setErrors(newErrors);
    }
    onSubmit(formState);
  }

  return {
    handleChange,
    values: formState,
    handleSubmit,
    errors,
  };
}
