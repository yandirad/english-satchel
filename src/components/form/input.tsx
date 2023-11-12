import { forwardRef, useId } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string
  error?: string
  label?: string
}

const AppInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, containerClassName, error, label, type, ...props }, ref) => {
    const inputId = useId()
    return (
      <div className={containerClassName}>
        <Label htmlFor={inputId}>{label}</Label>
        <Input
          id={inputId}
          type={type}
          className={className}
          ref={ref}
          {...props}
        />
        {error !== undefined && (
          <p className="text-red-700 text-sm" >
            {error}
          </p>
        )}
      </div>
    )
  }
)

AppInput.displayName = 'Input'

export { AppInput }
