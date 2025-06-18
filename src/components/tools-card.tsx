import { Link } from "react-router-dom";

export function ToolsCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="bg-surface/80 backdrop-blur-xs py-2 px-4 md:p-4 rounded-lg shadow-lg border-border border">
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