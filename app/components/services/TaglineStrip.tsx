type TaglineStripProps = {
  text: string;
};

export default function TaglineStrip({ text }: TaglineStripProps) {
  return (
    <section className="w-full py-10 md:py-14 lg:py-16 bg-[#FDF8E8]">
      <div className="w-full max-w-5xl mx-auto text-center px-4">
        <p
          className="text-2xl md:text-3xl lg:text-3xl font-normal text-[#424242] leading-tight"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
        >
          {text}
        </p>
      </div>
    </section>
  );
}
