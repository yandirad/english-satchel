import { useId } from 'react'

import { Label } from '@/components/ui/label'

export interface FieldProps {
  className?: string
  error?: string
  label?: string
  children: React.ReactNode
}

const AppField = ({ className, error, label, children}: FieldProps) => {
  const inputId = useId()
  return (
    <div className={className}>
      <Label htmlFor={inputId}>{label}</Label>
      {children}
      {error !== undefined && (
        <p className="text-red-700 text-sm" >
          {error}
        </p>
      )}
    </div>
  )
}

export { AppField }
