interface Country {
  name: string;
  code: string;
  flag: string;
}

interface CountryFlagsProps {
  countries: Country[];
}

export default function CountryFlags({ countries }: CountryFlagsProps) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
      {countries.map((country) => (
        <div 
          key={country.code} 
          className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-secondary/50 transition-all duration-300 hover:scale-105 cursor-default"
        >
          <div className="text-4xl md:text-5xl drop-shadow-sm" aria-hidden="true">
            {country.flag}
          </div>
          <span className="text-sm text-text-light font-medium text-center">
            {country.name}
          </span>
        </div>
      ))}
    </div>
  );
}
