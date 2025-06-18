import { Link } from "react-router-dom";

export function ExampleToolPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-20 md:pt-22 text-sm md:text-base">
      <h1 className="text-text text-4xl font-bold tracking-tight md:text-5xl max-w-md">
        Example Tool Page
      </h1>
      <p className="mt-2 md:mt-4 text-muted-text/90 max-w-2xl">
        This is an example tool page. You can add your tool's functionality here.
      </p>
      <Link to={"/"} className="mt-4 inline-block text-primary hover:underline">
        Go back to Home
      </Link>
    </div>
  );
}