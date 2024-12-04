import React from "react";

function PhoneNumberValidatorForm({ value, onChange, setError, errorMessage }) {
  const validatePhoneNumber = (phoneNumber) => {
    const cleanedNumber = phoneNumber.replace(/[^\d+]/g, "");
    const digitsOnly = cleanedNumber.replace("+", ""); 

    if (digitsOnly.length < 10 || digitsOnly.length > 15) {
      return false;
    }

    if (!/^\+?\d+$/.test(cleanedNumber)) {
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const input = e.target.value;
    onChange(input);

    if (validatePhoneNumber(input)) {
      setError("");
    } else {
      setError("Enter a valid Phone Number!");
    }
  };

  return (
    <div>
      <label>
        Phone Number:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
}

export default PhoneNumberValidatorForm;
