import { forwardRef, useId } from 'react'

import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  containerClassName?: string
  error?: string
  label?: string
}

const AppTextarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, containerClassName, error, label, ...props }, ref) => {
    const inputId = useId()
    return (
      <div className={containerClassName}>
        <Label htmlFor={inputId}>{label}</Label>
        <Textarea
          id={inputId}
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

AppTextarea.displayName = 'Textarea'

export { AppTextarea }
