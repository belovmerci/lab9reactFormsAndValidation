const validateRegistrationForm = (formData) => {
    const errors = {};
  
    if (!formData.login || formData.login.length < 6 || formData.login.length > 20 || !/^[a-zA-Z0-9]+$/.test(formData.login)) {
      errors.login = 'Логин должен быть 6-20 символов и содержать только буквы латинского алфавита и цифры.';
    }
  
    if (!formData.password) {
      errors.password = 'Необходим пароль.';
    }
  
    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Необходимо подтверждение пароля.';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Пароли не совпадают.';
    }
  
    return errors;
  };
  
  const validateProfileForm = (formData) => {
    const errors = {};
  
    if (!formData.firstName) {
      errors.firstName = 'First Name is required.';
    }
  
    if (!formData.lastName) {
      errors.lastName = 'Last Name is required.';
    }
  
    // Если есть дата рождения
    if (formData.dateOfBirth) {
      const dateOfBirthRegex = /^\d{2}\.\d{2}\.\d{4}$/;
      if (!dateOfBirthRegex.test(formData.dateOfBirth)) {
        errors.dateOfBirth = 'Неправильный формат. Используйте DD.MM.YYYY.';
      }
    }
  
    return errors;
  };
  
  export { validateRegistrationForm, validateProfileForm };
  