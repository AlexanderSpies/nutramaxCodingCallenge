import React from "react";

function EmailValidatorForm({ value, onChange, setError, error }) {
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const input = e.target.value;
    onChange(input);

    if (validateEmail(input)) {
      setError("");
    } else {
      setError("Enter a valid email address.");
    }
  };

  return (
    <div>
      <label>
        Email:
        <input type="email" value={value} onChange={handleChange} />
      </label>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}

export default EmailValidatorForm;
