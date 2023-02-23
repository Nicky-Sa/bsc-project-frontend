import { PersianErrors } from "@/utils/persianTexts";

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
      return PersianErrors.incorrectEmail;
    }
  }
  return "";
};

export const checkPassword = (password: string) => {
  let hasUpperCase = /[A-Z]/.test(password);
  let hasLowerCase = /[a-z]/.test(password);
  let hasNumbers = /\d/.test(password);
  let hasNonAlphas = /\W/.test(password);
  if (password === "") return "";
  if (password.length < 8) return PersianErrors.minLength8;
  if (!hasUpperCase) return PersianErrors.passwordUppercase;
  if (!hasLowerCase) return PersianErrors.passwordLowercase;
  return "";
};

export const checkPasswordMatch = (password: string, confirmPassword: string) => {
  if (confirmPassword && password !== confirmPassword) {
    return PersianErrors.mismatchPassword;
  } else {
    return "";
  }
};

export const checkPhoneNumber = (phoneNumber: string) => {
  if (phoneNumber) {
    if (!/^\d+$/.test(phoneNumber)) {
      return PersianErrors.phoneOnlyDigits;
    }
    if (!phoneNumber.startsWith("09")) {
      return PersianErrors.phoneStartsWith09;
    }
    if (phoneNumber.length !== 11) {
      return PersianErrors.phone11Digits;
    }
  }
  return "";
};

export const canSubmit = (inputs: any, errors?: any) => {
  let result = true;
  for (const key in inputs) {
    result = result && !!inputs[key];
  }
  if (errors)
    for (const key in errors) {
      result = result && !errors[key];
    }
  return !result;
};
