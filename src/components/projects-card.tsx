import { Link } from "react-router-dom";

/**
 * A component for rendering a project card in the home page.
 *
 * @param {{title: string, description: string, link: string}} props
 * The props object should have the following properties:
 * - `title`: The title of the project.
 * - `description`: The description of the project.
 * - `link`: The link to the project page.
 *
 * @returns {React.ReactElement} A React element representing the project card.
 */
export function ProjectsCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="bg-secondary/20 backdrop-blur-xs py-2 px-4 md:p-4 rounded-lg shadow-lg border-border border">
      <h2 className="text-lg md:text-xl font-semibold">{title}</h2>
      <p>{description}</p>
      <Link
        to={link}
        className="mt-2 md:mt-3 inline-block text-primary hover:underline"
      >
        Try it out
      </Link>
    </div>
  );
}
