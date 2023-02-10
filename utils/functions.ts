export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const changeInputs = (setInputs: (input: any) => void, inputs: any) => {
  return (e: any) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
};
