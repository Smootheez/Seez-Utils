import { useState } from "react";
import { BackToHomeButton } from "../../components/button";
import pinching from "/cute-sweet.gif";
import { Link } from "react-router-dom";

  /**
   * A page that asks the user if they love the author.
   *
   * The page renders a red background, a cute image, a heading, a
   * button that says "Yes", and a button that says "No" (which moves
   * to a random position when clicked). The "Yes" button links to
   * the LoveYes page. The page also renders a BackToHomeButton at the
   * bottom.
   */
export function AnswerMyLove() {
  return (
    <div className="bg-red-400 h-screen flex flex-col items-center justify-center gap-y-4 font-cherry">
      <img src={pinching} alt="pinching" />
      <h1 className="text-2xl md:text-4xl">Do you love me?</h1>
      <div className="space-x-4">
        <Link to={"/answer-my-love/yes"}>
          <button
            type="button"
            className="bg-red-500 hover:bg-red-500/80 transition-colors rounded-full py-1 w-15 shadow-md shadow-red-600"
          >
            Yes
          </button>
        </Link>
        <div className="inline-block w-15">
          <NoButton />
        </div>
      </div>
      <BackToHomeButton className="mb-24" />
    </div>
  );
}

  /**
   * A button that moves to a random position when clicked.
   *
   * When the button is first rendered, it is positioned relatively and
   * does not move. When the button is clicked for the first time,
   * it transitions to an absolute position and moves to a random
   * position. Subsequent clicks will move the button to a new random
   * position.
   *
   * @returns A React component.
   */
function NoButton() {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [isInitial, setIsInitial] = useState(true);

  const handleClick = () => {
    if (isInitial) {
      setIsInitial(false);
    }
    setTop(Math.random() * (window.innerHeight - 50));
    setLeft(Math.random() * (window.innerWidth - 50));
  };

  return (
    <button
      type="button"
      className="bg-red-500 hover:bg-red-500/80 transition-colors rounded-full py-1 w-15 shadow-md shadow-red-600"
      style={{ position: isInitial ? "relative" : "absolute", top, left }}
      onClick={handleClick}
    >
      No
    </button>
  );
}
