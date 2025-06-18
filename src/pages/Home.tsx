import { Header } from "../components/header";
import { ToolsCard } from "../components/tools-card";

export function Home() {
  const toolList = [
    { title: "Tool 1", description: "Description of Tool 1.", link: "#" },
    { title: "Tool 2", description: "Description of Tool 2.", link: "#" },
    { title: "Tool 3", description: "Description of Tool 3.", link: "#" },
    { title: "Tool 4", description: "Description of Tool 4.", link: "#" },
    { title: "Tool 5", description: "Description of Tool 5.", link: "#" },
    { title: "Tool 6", description: "Description of Tool 6.", link: "#" },
  ]

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 pt-20 md:pt-22 text-sm md:text-base">
        <div className="mx-4">
          <section>
            <h1 className="text-text text-4xl font-bold tracking-tight md:text-5xl max-w-md">
              A hub with a bunch of tools from my side projects.
            </h1>
            <p className="mt-2 md:mt-4 text-text/80 max-w-2xl">
              Discover a growing set of simple, practical tools—each crafted
              from my personal side projects. You might find something handy!
              Every tool is made to solve a specific problem or streamline a
              task.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
            {toolList.map((tool, index) => (
              <ToolsCard
                key={index}
                title={tool.title}
                description={tool.description}
                link={tool.link}
              />
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
