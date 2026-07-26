export interface Country {
  name: string;
  code: string;
  flag: string;
}

export const countries: Country[] = [
  { name: "United States", code: "US", flag: "🇺🇸" },
  { name: "United Kingdom", code: "GB", flag: "🇬🇧" },
  { name: "Canada", code: "CA", flag: "🇨🇦" },
  { name: "Australia", code: "AU", flag: "🇦🇺" },
  { name: "UAE", code: "AE", flag: "🇦🇪" },
  { name: "Pakistan", code: "PK", flag: "🇵🇰" },
  { name: "Saudi Arabia", code: "SA", flag: "🇸🇦" },
  { name: "Germany", code: "DE", flag: "🇩🇪" },
  { name: "France", code: "FR", flag: "🇫🇷" },
  { name: "Malaysia", code: "MY", flag: "🇲🇾" },
  { name: "South Africa", code: "ZA", flag: "🇿🇦" },
  { name: "Nigeria", code: "NG", flag: "🇳🇬" },
  { name: "Ireland", code: "IE", flag: "🇮🇪" },
  { name: "Sweden", code: "SE", flag: "🇸🇪" },
  { name: "Netherlands", code: "NL", flag: "🇳🇱" },
];

export const stats = [
  { value: 500, suffix: "+", label: "Students Taught" },
  { value: 15, suffix: "+", label: "Countries Served" },
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 5000, suffix: "+", label: "Classes Completed" },
];
