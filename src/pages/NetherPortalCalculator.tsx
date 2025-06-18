import { BackToHomeButton } from "../components/button";

export function NetherPortalCalculator() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-text text-3xl font-bold md:text-4xl max-w-md">
        Nether Portal Calculator
      </h1>
      <div className="my-2 md:my-4 text-muted-text/90 max-w-md bg-surface rounded-lg shadow-lg p-4 border border-border">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          delectus nobis ratione ipsa neque perspiciatis maiores. Dicta dolorem
          eos voluptatibus tempora voluptates nisi, magni quidem commodi
          expedita eveniet rerum similique.
        </div>
      </div>
      <BackToHomeButton />
    </main>
  );
}
