

"use client";

import { useState, useEffect } from 'react';

interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | null;
}

interface FieldValidation {
  [fieldName: string]: ValidationRule;
}

interface UseFormValidationProps {
  initialValues: { [key: string]: string };
  validationRules: FieldValidation;
}

export const useFormValidation = ({ initialValues, validationRules }: UseFormValidationProps) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string): string | null => {
    const rules = validationRules[name];
    if (!rules) return null;

    if (rules.required && (!value || value.trim() === '')) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }

    if (rules.minLength && value.length < rules.minLength) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} must be at least ${rules.minLength} characters`;
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} must be no more than ${rules.maxLength} characters`;
    }

    if (rules.pattern && !rules.pattern.test(value)) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} format is invalid`;
    }

    if (rules.custom) {
      return rules.custom(value);
    }

    return null;
  };

  const validateAllFields = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    
    Object.keys(validationRules).forEach(fieldName => {
      const error = validateField(fieldName, values[fieldName] || '');
      if (error) {
        newErrors[fieldName] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (name: string, value: string) => {
    setValues(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const error = validateField(name, values[name] || '');
    setErrors(prev => ({ ...prev, [name]: error || '' }));
  };

  const handleSubmit = async (onSubmit: (values: typeof initialValues) => Promise<void>) => {
    setIsSubmitting(true);
    
    // Mark all fields as touched
    const allTouched: { [key: string]: boolean } = {};
    Object.keys(validationRules).forEach(key => {
      allTouched[key] = true;
    });
    setTouched(allTouched);
    
    if (validateAllFields()) {
      try {
        await onSubmit(values);
        // Reset form on successful submission
        setValues(initialValues);
        setTouched({});
        setErrors({});
      } catch (error) {
        console.error('Form submission error:', error);
      }
    }
    
    setIsSubmitting(false);
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  };

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    isValid: Object.keys(errors).every(key => !errors[key])
  };
};

interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'textarea' | 'select';
  value: string;
  error?: string;
  touched?: boolean;
  options?: { value: string; label: string }[];
  placeholder?: string;
  rows?: number;
  required?: boolean;
  onChange: (name: string, value: string) => void;
  onBlur: (name: string) => void;
}

export const FormField = ({
  label,
  name,
  type = 'text',
  value,
  error,
  touched,
  options,
  placeholder,
  rows = 4,
  required,
  onChange,
  onBlur
}: FormFieldProps) => {
  const hasError = touched && error;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    onChange(name, e.target.value);
  };

  const handleInputBlur = () => {
    onBlur(name);
  };

  return (
    <div className="form-group">
      <label htmlFor={name} className={`form-label ${hasError ? 'has-error' : ''}`}>
        {label}
        {required && <span className="required">*</span>}
      </label>
      
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          placeholder={placeholder}
          rows={rows}
          className={`form-input ${hasError ? 'has-error' : ''}`}
          required={required}
        />
      ) : type === 'select' && options ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          className={`form-input ${hasError ? 'has-error' : ''}`}
          required={required}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          placeholder={placeholder}
          className={`form-input ${hasError ? 'has-error' : ''}`}
          required={required}
        />
      )}
      
      {hasError && (
        <div className="form-error">
          {error}
        </div>
      )}
    </div>
  );
};

export default { useFormValidation, FormField };
