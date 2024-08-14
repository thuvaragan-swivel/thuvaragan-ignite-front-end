// Sort options for SearchSortControls component.
export const SORT_OPTIONS = [
  { value: "", label: "Sort by" },
  { value: "firstName-asc", label: "First Name (Asc)" },
  { value: "firstName-desc", label: "First Name (Desc)" },
  { value: "createdAt-asc", label: "Created At (Asc)" },
  { value: "createdAt-desc", label: "Created At (Desc)" },
];

// Gender options for EmployeeForm component.
export const GENDER_OPTIONS = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];

// Placeholder texts for EmployeeForm component.
export const PLACEHOLDERS = {
  firstName: "Enter first name",
  lastName: "Enter last name",
  emailAddress: "Enter email address ( format: username@domain.tld )",
  phoneNumber: "Enter phone number ( format: +94xxxxxxxxx )",
  searchBox: "Search by First Name, Last Name, or Email",
};

// View options.
export const VIEW_OPTIONS = {
  TABLE: "table",
  GRID: "grid",
};

// Modes of Employee Form.
export const FORM_MODES = {
  ADD: "add",
  EDIT: "edit",
};

// Validation Messages.
export const VALIDATION_MESSAGES = {
  firstNameRequired: "First Name is Required!",
  firstNameAlpha: "First Name must contain only Alphabets!",
  firstNameMin: "First Name must be at least 6 characters long!",
  firstNameMax: "First Name must be at most 10 characters long!",

  lastNameRequired: "Last Name is Required!",
  lastNameAlpha: "Last Name must contain only Alphabets!",
  lastNameMin: "Last Name must be at least 6 characters long!",
  lastNameMax: "Last Name must be at most 10 characters long!",

  emailAddressRequired: "Email Address is Required!",
  emailAddressFormat:
    "Email Address must be in the Format: username@domain.tld",
  emailAddressPattern:
    "Email Address must be in the Format: username@domain.tld",

  phoneNumberRequired: "Phone Number is Required!",
  phoneNumberPattern: "Phone Number must be a Valid Sri Lankan Phone Number!",

  genderRequired: "Gender is Required!",
  genderAllowedValues: "Gender must be either 'Male' or 'Female'!",
};

// Regex Patterns.
export const REGEX_PATTERNS = {
  NAME: /^[A-Za-z]+$/,
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  PHONE: /^\+94\d{9}$/,
};

// Gender Values.
export const GENDER_VALUES = {
  male: "Male",
  female: "Female",
};
