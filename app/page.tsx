import Banner from '@/fragments/banner';
import Hero from '@/fragments/hero';

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="bg-popover pt-3">
        <Banner />
      </section>
      <section className="bg-popover py-16">
        <Hero />
      </section>
    </main>
  );
}
