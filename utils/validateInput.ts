import validator from 'validator'

export interface ValidationMessage {
  type: 'error' | 'success' | ''
  message: string
}

export interface ValidatorFunction {
  (value: string | undefined): boolean
}

export function generateInputValidationMessage({
  value,
  validate,
  errorMessage,
  successMessage = '',
}: {
  value: string | undefined
  validate: ValidatorFunction
  errorMessage: string
  successMessage?: string
}): ValidationMessage | undefined {
  if (!value)
    return { type: '', message: '' }

  return validate(value.trim())
    ? { type: 'success', message: successMessage }
    : { type: 'error', message: errorMessage }
}

export function validateEmail(email: string | undefined): boolean {
  return email ? validator.isEmail(email) : false
}

export function validatePhoneNumber(phoneNumber: string | undefined): boolean {
  const locale = 'en-US'

  return phoneNumber
    ? validator.isMobilePhone(phoneNumber, [`${locale}`])
    : false
}
