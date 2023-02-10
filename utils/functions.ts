import { errorTexts } from "@/utils/texts";

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

export const checkEmail = (email: string) => {
  if (email) {
    if (!email.includes("@") || !email.includes(".")) {
      return errorTexts.incorrectEmail;
    }
  }
  return "";
};

export const checkPassword = (password: string) => {
  let hasUpperCase = /[A-Z]/.test(password);
  let hasLowerCase = /[a-z]/.test(password);
  let hasNumbers = /\d/.test(password);
  let hasNonAlphas = /\W/.test(password);
  if (password === "")
    return "";
  if (password.length < 8)
    return errorTexts.minLength8;
  if (!hasUpperCase)
    return errorTexts.passwordUppercase;
  if (!hasLowerCase)
    return errorTexts.passwordLowercase;
  return "";
};

export const checkPasswordMatch = (password: string, confirmPassword: string) => {
  if (confirmPassword && (password !== confirmPassword)) {
    return errorTexts.mismatchPassword;
  } else {
    return "";
  }
};