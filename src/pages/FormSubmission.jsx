import React, { useState } from "react";
import CountrySelect from "./CountrySelect";
import EmailValidatorForm from "./EmailValidator";
import PhoneValidation from "./PhoneValidator";
import "../App.css";

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
          <form onSubmit={handleSubmit}>
            <h1 className="form-title">Form Submission</h1>
            <div className={`form-field ${errors.firstName ? "error" : ""}`}>
              <label>
                First Name:
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
              {errors.firstName && (
                <span className="error-message">{errors.firstName}</span>
              )}
            </div>

            <div className={`form-field ${errors.lastName ? "error" : ""}`}>
              <label>
                Last Name:
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
              {errors.lastName && (
                <span className="error-message">{errors.lastName}</span>
              )}
            </div>

            <div className={`form-field ${errors.phoneNumber ? "error" : ""}`}>
              <PhoneValidation
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
                <span className="error-message">{errors.phoneNumber}</span>
              )}
            </div>

            <div className={`form-field ${errors.email ? "error" : ""}`}>
              <EmailValidatorForm
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
            </div>

            <div className={`form-field ${errors.country ? "error" : ""}`}>
              <label>
                Country:
                <CountrySelect
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </label>
              {errors.country && (
                <span className="error-message">{errors.country}</span>
              )}
            </div>

            <input type="submit" value="Submit" />
          </form>
        ) : (
          <div className="submission-summary">
            <h2>Thank you for your submission!</h2>
            <p>First Name: {firstName}</p>
            <p>Email: {email}</p>
            <p>Selected Country: {country}</p>
            <div className="submission-button-container">
              <button className="reset-button" onClick={handleReset}>
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
