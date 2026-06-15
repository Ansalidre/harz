import StoreButtons from "./StoreButtons";

export default function FinalCta() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-moss px-6 sm:px-12 py-14 sm:py-16 text-center contour-lines">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream max-w-2xl mx-auto leading-tight">
            Bereit, den Harz neu zu entdecken?
          </h2>
          <p className="mt-4 text-cream/75 max-w-xl mx-auto leading-relaxed">
            Lade den Harz Wasser Guide herunter und finde dein nächstes Ziel –
            ob Badesee, Talsperre oder Wasserfall.
          </p>
          <div className="mt-8 flex justify-center">
            <StoreButtons />
          </div>
        </div>
      </div>
    </section>
  );
}
