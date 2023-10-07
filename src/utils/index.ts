export const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(String(email).toLowerCase());
};

export const validatePhoneNumber = (phoneNumber: string) => {
  const regex = /^\d{10}$/;
  return regex.test(phoneNumber);
};

export const validatePassword = (password: string): boolean => {
  // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
  return regex.test(password);
};
