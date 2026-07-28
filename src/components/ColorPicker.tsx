import { useRef } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';

interface ColorPickerProps {
  label: string;
  value: string; // hex color string like "#ffffff"
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function ColorPicker({ label, value, onChange, placeholder = "#ffffff" }: ColorPickerProps) {
  const hiddenColorInputRef = useRef<HTMLInputElement>(null);

  // Handle color changes from color picker
  const handleColorChange = (hex: string) => {
    onChange(hex);
  };

  // Handle color changes from hex input
  const handleHexChange = (hex: string) => {
    if (/^#[0-9A-F]{6}$/i.test(hex)) {
      onChange(hex);
    }
  };

  // Handle clicking on hex input to open color picker
  const handleHexInputClick = () => {
    if (hiddenColorInputRef.current) {
      hiddenColorInputRef.current.click();
    }
  };

  return (
    <div>
      <Label className="text-sm">{label}</Label>
      <div className="mt-3 relative">
        {/* Hidden color input positioned near the hex input */}
        <input
          ref={hiddenColorInputRef}
          type="color"
          value={value}
          onChange={(e) => handleColorChange(e.target.value)}
          className="absolute right-0 top-0 w-9 h-9 opacity-0 pointer-events-none"
        />

        <Input
          value={value}
          onChange={(e) => handleHexChange(e.target.value)}
          onClick={handleHexInputClick}
          placeholder={placeholder}
          className="font-mono text-sm cursor-pointer"
          maxLength={7}
        />
      </div>
    </div>
  );
}