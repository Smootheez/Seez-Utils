import { BackToHomeButton } from "../../components/button";
import hugging from "/dudu-hug-bubu-dudu-kiss.gif";

export function LoveYes() {
  return (
    <div className="bg-red-400 h-screen flex flex-col items-center justify-center gap-y-4 font-cherry">
      <img src={hugging} alt="hugging" className="size-50" />
      <h1 className="text-2xl md:text-4xl">I Knew It!</h1>
      <BackToHomeButton className="mb-22" />
    </div>
  );
}
