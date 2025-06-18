import { Header } from "../components/header";
import { ThemeSwitchButton } from "../components/button";

export function Home() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 pt-20">
        <div className="mx-4">
          <ThemeSwitchButton />
          <p>
            Hello World
          </p>
        </div>
      </main>
    </>
  );
}
