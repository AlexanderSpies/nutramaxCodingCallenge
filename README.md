# Form Submission Application

## Overview

The **Form Submission Application** is a modern, efficient, and scalable web application built using **Vite** and **React**. This combination offers fast build times, quick server launches, and real-time updates through Hot Module Replacement (HMR). React's component-based architecture ensures reusability and scalability, while Vite optimizes for modern browsers, delivering a seamless development experience.

---

## Project Contents

### **main.jsx**
This file serves as the entry point for the application. It renders the root component (`FormSubmission.jsx`) into the DOM, initializing the React application.

---

### **Components (pages folder)**

#### **CountrySelect.jsx**
- Provides a dropdown menu for selecting countries, fetched from an external API.
- Fetched countries are sorted alphabetically for easier user selection.
- Implements graceful error handling:
  - Displays an error message `'Failed to fetch'` if the API call fails.
  - Shows a loading status while fetching data.
- Prevents form submission errors by ensuring robust error messages.

#### **EmailValidator.jsx**
- Validates email input in real-time.
- Utilizes React's built-in email input type for additional validation.
- Displays pop-over messages to inform users when the email format is incorrect.

#### **PhoneValidator.jsx**
- Accepts phone numbers between 10-15 digits to accommodate international numbers.
- Cleans input by removing non-numeric characters (e.g., excluding `+` for country codes).
- Provides dynamic error messages if the input is invalid.

#### **FormSubmission.jsx**
- Serves as the core of the application.
- Imports and integrates `CountrySelect`, `EmailValidator`, and `PhoneValidator` components.
- Manages state for all form fields and ensures proper data flow between components.
- Implements comprehensive error handling:
  - Ensures all fields are completed before submission.
  - Displays "FIELD is Required" messages if fields are left blank.
- Upon successful form submission:
  - Displays a thank-you message along with user details (e.g., first name, email, and selected country).
  - Allows the user to reset the form, clearing all state variables and flipping back to the original form view.

---

## Application Styling

### **CSS Files**
- **index.css**
  - Provides foundational styles for typography, layout, and overall appearance.
- **form.css**
  - Focuses on styling specific to `FormSubmission.jsx`.
  - Controls font color, card size, border styling, background color, and responsive design for different screen sizes.

---

## To Run Application Locally
- clone repo using either 
    - HTTPS: `git clone https://github.com/AlexanderSpies/nutramaxCodingCallenge.git`
    - SSH: `git clone git@github.com:AlexanderSpies/nutramaxCoding`
- Using CMD navigate into the recently cloned repo and issue the command 
    - npm install - this installs all necessary dependencies for the Vite/React application 
- Once all dependencies have been installed issues the command 
    - npm run dev - this will locally launch the application and allow you to interface with it. 