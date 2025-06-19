import { BackToHomeButton } from "../../components/button";
import hugging from "/dudu-hug-bubu-dudu-kiss.gif";

/**
 * A page that is shown when the user says they love the author.
 *
 * The page renders a red background, a cute image of two people hugging,
 * a heading with the text "I Knew It!", and a BackToHomeButton at the bottom.
 */
export function LoveYes() {
  return (
    <div className="bg-red-400 h-screen flex flex-col items-center justify-center gap-y-4 font-cherry">
      <img src={hugging} alt="hugging" className="size-50" />
      <h1 className="text-2xl md:text-4xl">I Knew It!</h1>
      <BackToHomeButton className="mb-22" />
    </div>
  );
}
