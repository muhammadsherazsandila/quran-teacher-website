interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 font-[family-name:var(--font-poppins)] ${centered ? 'text-center' : 'text-left'}`}>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? 'text-white' : 'text-[#000a57]'
        }`}
      >
        {title}
      </h2>
      <div
        className={`h-1 w-[60px] bg-gradient-to-r from-[#000a57] to-[#002874] rounded-full mb-6 ${
          centered ? 'mx-auto' : ''
        }`}
      />
      {subtitle && (
        <p
          className={`max-w-2xl text-lg ${
            light ? 'text-gray-200' : 'text-gray-600'
          } ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
