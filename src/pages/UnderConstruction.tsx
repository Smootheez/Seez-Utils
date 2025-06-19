import { Link } from "react-router-dom";

/**
 * A component that displays a message indicating that the project is under construction.
 *
 * The component renders a main section with a heading, a paragraph with a brief message
 * about ongoing work, and a link to navigate back to the home page.
 *
 * @returns A React component.
 */

export function UnderConstruction() {
  return (
    <main>
      <h1 className="text-text text-4xl font-bold tracking-tight md:text-5xl max-w-md">
        This Project is under construction!
      </h1>
      <p className="mt-2 md:mt-4 text-muted-text/90 max-w-2xl">
        We're working hard to bring you something great. Please check back later
        or explore our other tools in the meantime.
      </p>
      <Link to={"/"} className="mt-4 inline-block text-primary hover:underline">
        Go back to Home
      </Link>
    </main>
  );
}
