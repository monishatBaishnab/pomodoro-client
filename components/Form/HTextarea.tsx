import { useFormContext } from 'react-hook-form';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

type THTextarea = {
  name: string;
  label?: string;
  rows?: number;
  cols?: number;
  placeholder: string;
  disabled?: boolean;
  required?: boolean;
};

const HTextarea = ({
  name,
  label,
  placeholder,
  disabled = false,
  rows = 7,
  cols,
  required = false,
}: THTextarea) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  // Extract the error message for the current field
  const error = errors[name]?.message as string | undefined;
  return (
    <div className="space-y-2">
      {label && <Label htmlFor={name}>{label}</Label>}
      <Textarea
        {...register(name)}
        required={required}
        disabled={disabled}
        id={name}
        name={name}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        className="text-athens-gray-950 outline-none !ring-0 focus:ring-0"
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default HTextarea;
