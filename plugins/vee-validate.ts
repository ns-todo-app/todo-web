import { extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'

for (const [rule, validation] of Object.entries(rules)) {
  extend(rule, {
    ...validation,
  })
}

extend('more_or_equal', {
  params: ['value1', 'value2'],
  validate: (value, { value1, value2 }: any) => {
    if (value2 >= value1) {
      return true
    }
    return false
  },
})
