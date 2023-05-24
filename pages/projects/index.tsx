import Link from "next/link";
import { IconExternalLink } from "@tabler/icons-react";
import CursorObserver from "../../components/CursorObserver";
import { projects } from "../../data/portfolio";
import { skill_badges_mono } from "../../data/skill-badges";

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full px-4 pt-24 pb-16 mx-auto max-w-7xl scroll-p-32"
    >
      <h1 className="mb-10 text-5xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {Object.entries(projects)
          .map(([id, project]) => (
            <div
              className="duration-200 shadow-md card hover:shadow-xl"
              key={`${project.title}`}
            >
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p>{project.description}</p>
                <div className="flex gap-1 mb-2 flex-wrap">
                  {project.technologies.map((item) => (
                    <div
                      className="overflow-hidden duration-200 border rounded-full hover:border-primary"
                      key={item}
                    >
                      <img
                        className="w-full h-full"
                        src={skill_badges_mono[item]}
                        alt={item}
                      />
                    </div>
                  ))}
                </div>

                <div className="card-actions justify-end">
                  <CursorObserver state={"link"}>
                    <Link href={`/projects/${id}`}>
                      <button className="btn btn-primary gap-2">
                        <IconExternalLink />
                        View
                      </button>
                    </Link>
                  </CursorObserver>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
