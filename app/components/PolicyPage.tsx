import Navbar from './Navbar';
import Footer from './Footer';

export default function PolicyPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <Navbar variant="white" />
      <main className="mx-auto w-[90%] max-w-3xl pb-16 pt-28 text-[#424242] md:pt-36">
        <h1 className="mb-8 font-serif text-4xl md:text-5xl">{title}</h1>
        <article className="space-y-4 leading-relaxed [&_h2]:mt-8 [&_h2]:font-serif [&_h2]:text-2xl [&_a]:underline">
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}
