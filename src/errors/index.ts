import { isDebugEnable } from '@/config/const'

interface ErrorType {
  _errors: string[]
}

export type FormErrors = Record<string, ErrorType>

export class NotFoundError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'NotFoundError'
    if (!isDebugEnable) {
      this.stack = ''
    }
  }
}

export class ValidationError extends Error {
  public validations: FormErrors

  constructor (message: string, validations: FormErrors) {
    super(message)
    this.validations = validations
    this.name = 'ValidationError'
    if (!isDebugEnable) {
      this.stack = ''
    }
  }
}

export class ApiError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'ApiError'
    if (!isDebugEnable) {
      this.stack = ''
    }
  }
}

export function handlerCommonErros (e: Error) {
  if (e instanceof ValidationError) {
    console.log('ValidationError', e.message)
  }
  if (e instanceof ApiError) {
    console.log('ApiError', e.message)
  }
}

interface FormResponse {
  errors?: object
}

export const isNotValid = (response: FormResponse) => {
  return (
    Object.prototype.hasOwnProperty.call(response, 'errors') &&
    Object.prototype.hasOwnProperty.call(response.errors, 'children')
  )
}

interface ErrorType {
  _errors: string[]
}

export const translateSymfonyErrorToFormik = (obj: Record<string, any>) => {
  const newObj: Record<string, ErrorType> = {}
  Object.keys(obj).forEach((prop) => {
    const elem = obj[prop]

    if (Object.prototype.hasOwnProperty.call(elem, 'errors')) {
      if (elem?.errors !== undefined && elem.errors?.[0] !== undefined) {
        newObj[prop] = { _errors: elem.errors }
      } else {
        newObj[prop] = { _errors: ['Error'] }
      }
    }
  })

  return newObj
}
