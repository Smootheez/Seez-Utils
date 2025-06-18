import { Header } from "../components/header";
import { ProjectsCard } from "../components/projects-card";

export function Home() {
  const toolList = [
    {
      title: "Nether Portal Calculator",
      description: "Calculate the coordinates for your Nether portal.",
      link: "/nether-portal-calculator",
    },
    {
      title: "SVG Downloader",
      description: "Download SVG files from any webpage.",
      link: "/under-construction",
    },
    {
      title: "Color Picker",
      description: "Select and copy colors from pictures.",
      link: "/under-construction",
    },
    {
      title: "Project 4",
      description: "Description of Tool 4.",
      link: "/under-construction",
    },
    {
      title: "Project 5",
      description: "Description of Tool 5.",
      link: "/under-construction",
    },
    {
      title: "Project 6",
      description: "Description of Project 6.",
      link: "/under-construction",
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-20 md:pt-22">
        <div className="mx-4">
          <section id="home">
            <h1 className="text-text text-4xl font-bold tracking-tight md:text-5xl max-w-xl">
              A collection of tools, tiny utilities, and silly little pages—all
              crafted from my side projects, combining practicality with
              playfulness.
            </h1>
            <p className="mt-2 md:mt-4 text-muted-text/90 max-w-2xl">
              Discover a growing collection of tools and playful
              experiments—each crafted from my side projects. Some are built to
              solve everyday problems, others just for fun. Either way, you
              might find something handy or entertaining along the way.
            </p>
          </section>

          <section
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 border-border pt-4 border-t"
            id="projects"
          >
            {toolList.map((tool, index) => (
              <ProjectsCard
                key={index}
                title={tool.title}
                description={tool.description}
                link={tool.link}
              />
            ))}
          </section>

          <div className="mt-8 space-y-4 mb-4">
            <section id="contact" className="border-t border-border pt-2">
              <h2 className="text-2xl font-semibold text-text md:text-3xl">
                Contact
              </h2>
              <div className="space-y-2 text-muted-text/90">
                <p>
                  If you have any questions or suggestions, feel free to reach
                  out!
                </p>
                <p>
                  Create an issue on:{" "}
                  <a
                    href="https://github.com/Smootheez/seez-tools/issues"
                    className="text-primary hover:underline"
                  >
                    GitHub
                  </a>
                </p>
                <div>
                  <p>Support my work:</p>
                  <div className="flex gap-x-2">
                    <a href="https://ko-fi.com/smootheez">
                      <img
                        src="https://raw.githubusercontent.com/Smootheez/Smootheez/7b16ed55570e49b9320e9cade5e572b271e9f1fe/assets/donation-kofi.svg"
                        alt="ko-fi"
                      />
                    </a>
                    <a href="https://paypal.me/smootheez">
                      <img
                        src="https://raw.githubusercontent.com/Smootheez/Smootheez/7b16ed55570e49b9320e9cade5e572b271e9f1fe/assets/donation-paypal.svg"
                        alt="paypal"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section id="about" className="border-border pt-2 border-t">
              <h2 className="text-2xl md:text-3xl font-semibold text-text">
                About
              </h2>
              <div className="space-y-2 text-muted-text/90">
                <p>
                  Hi! I’m someone who loves building small things—tools that
                  solve everyday problems, and random little web experiments
                  just for fun. This site is my digital playground where I
                  collect those side projects, whether they’re useful utilities
                  or silly ideas brought to life.
                </p>
                <p>
                  Everything here is made with curiosity, a bit of creativity,
                  and the hope that someone else might find it helpful or
                  entertaining. I'm always adding more, so feel free to explore
                  and see what you stumble upon!
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
