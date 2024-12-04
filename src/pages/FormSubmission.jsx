import React, { useState } from "react";
import CountrySelect from "./CountrySelect";
import EmailValidatorForm from "./EmailValidator";
import PhoneValidation from "./PhoneValidator";
import "../css/form.css";

function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!firstName.trim()) newErrors.firstName = "First name is required.";
    if (!lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required.";
    else if (errors.phoneNumber) newErrors.phoneNumber = errors.phoneNumber;
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (errors.email) newErrors.email = errors.email;
    if (!country) newErrors.country = "Please select a country.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setEmail("");
    setCountry("");
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="cardOutline">
      <div className={`form-card ${isSubmitted ? "flipped" : ""}`}>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} aria-labelledby="form-title">
            <h1 id="form-title" className="form-title">Form Submission</h1>

            <div className={`form-field ${errors.firstName ? "error" : ""}`}>
              <label htmlFor="first-name">
                First Name:
                <input
                  id="first-name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  aria-describedby={errors.firstName ? "first-name-error" : undefined}
                  aria-invalid={!!errors.firstName}
                />
              </label>
              {errors.firstName && (
                <span
                  id="first-name-error"
                  className="error-message"
                  role="alert"
                >
                  {errors.firstName}
                </span>
              )}
            </div>

            <div className={`form-field ${errors.lastName ? "error" : ""}`}>
              <label htmlFor="last-name">
                Last Name:
                <input
                  id="last-name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  aria-describedby={errors.lastName ? "last-name-error" : undefined}
                  aria-invalid={!!errors.lastName}
                />
              </label>
              {errors.lastName && (
                <span
                  id="last-name-error"
                  className="error-message"
                  role="alert"
                >
                  {errors.lastName}
                </span>
              )}
            </div>

            <div className={`form-field ${errors.phoneNumber ? "error" : ""}`}>
              <PhoneValidation
                id="phone-number"
                value={phoneNumber}
                onChange={setPhoneNumber}
                setError={(errorMsg) =>
                  setErrors((prevErrors) => ({
                    ...prevErrors,
                    phoneNumber: errorMsg || undefined,
                  }))
                }
                error={errors.phoneNumber}
              />
              {errors.phoneNumber && (
                <span
                  id="phone-number-error"
                  className="error-message"
                  role="alert"
                >
                  {errors.phoneNumber}
                </span>
              )}
            </div>

            <div className={`form-field ${errors.email ? "error" : ""}`}>
              <EmailValidatorForm
                id="email"
                value={email}
                onChange={setEmail}
                setError={(errorMsg) =>
                  setErrors((prevErrors) => ({
                    ...prevErrors,
                    email: errorMsg || undefined,
                  }))
                }
                error={errors.email}
              />
              {errors.email && (
                <span
                  id="email-error"
                  className="error-message"
                  role="alert"
                >
                  {errors.email}
                </span>
              )}
            </div>

            <div className={`form-field ${errors.country ? "error" : ""}`}>
              <label htmlFor="country">
                Country:
                <CountrySelect
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  aria-describedby={errors.country ? "country-error" : undefined}
                  aria-invalid={!!errors.country}
                />
              </label>
              {errors.country && (
                <span
                  id="country-error"
                  className="error-message"
                  role="alert"
                >
                  {errors.country}
                </span>
              )}
            </div>

            <input
              type="submit"
              value="Submit"
              aria-label="Submit form"
            />
          </form>
        ) : (
          <div className="submission-summary" aria-live="polite">
            <h2>Thank you for your submission!</h2>
            <p>First Name: {firstName}</p>
            <p>Email: {email}</p>
            <p>Selected Country: {country}</p>
            <div className="submission-button-container">
              <button
                className="reset-button"
                onClick={handleReset}
                aria-label="Reset form"
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
