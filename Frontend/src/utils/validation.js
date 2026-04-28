// Form validation utilities
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  // Turkish phone number validation (10 digits, starting with 5)
  const phoneRegex = /^5\d{9}$/;
  return phoneRegex.test(phone.replace(/[^0-9]/g, ''));
};

export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

export const validateMinLength = (value, minLength) => {
  return value && value.length >= minLength;
};

export const validateCheckoutForm = (formData) => {
  const errors = {};

  if (!validateRequired(formData.name)) {
    errors.name = 'Ad soyad alanı zorunludur';
  }

  if (!validateRequired(formData.phone)) {
    errors.phone = 'Telefon alanı zorunludur';
  } else if (!validatePhone(formData.phone)) {
    errors.phone = 'Geçerli bir telefon numarası giriniz (örn: 5XXXXXXXXX)';
  }

  if (!validateRequired(formData.address)) {
    errors.address = 'Adres alanı zorunludur';
  } else if (formData.address.length < 10) {
    errors.address = 'Adres en az 10 karakter olmalıdır';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateLoginForm = (formData) => {
  const errors = {};

  if (!validateRequired(formData.username)) {
    errors.username = 'Kullanıcı adı alanı zorunludur';
  }

  if (!validateRequired(formData.password)) {
    errors.password = 'Şifre alanı zorunludur';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
