import { ValidationFlags } from 'vee-validate/dist/types/types'

export const getValidationState = (context: ValidationFlags) => {
  const { dirty, validated, valid } = context
  return dirty || validated ? valid : null
}