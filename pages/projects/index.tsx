import Link from "next/link";
import { IconCheck, IconExternalLink, IconX } from "@tabler/icons-react";
import CursorObserver from "../../components/CursorObserver";
import { projects } from "../../data/portfolio";
import { skill_badges_mono } from "../../data/skill-badges";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Projects() {
  const router = useRouter();

  const initialTags = [
    { id: "web-dev", name: "Web Development", selected: false },
    // { id: "mobile-dev", name: "Mobile Development", selected: false },
    { id: "ml", name: "Machine Learning", selected: false },
    { id: "iot", name: "Internet of Things", selected: false },
    { id: "freelancing", name: "Freelancing", selected: false },
    { id: "data-analysis", name: "Data Analysis", selected: false },
  ];

  const [tags, setTags] = useState(initialTags);
  const [tagsParent] = useAutoAnimate();

  function comparator(a: (typeof initialTags)[0], b: (typeof initialTags)[0]) {
    if (a.selected && b.selected) return 0;
    if (a.selected) return -1;
    if (b.selected) return 1;
    return a.name.localeCompare(b.name);
  }

  return (
    <section
      id="projects"
      className="w-full px-4 pt-24 pb-16 mx-auto max-w-7xl scroll-p-32"
    >
      <Head>
        <title>Projects | Deon Gracias</title>
      </Head>

      <h1 className="mb-10 text-5xl font-bold">Projects</h1>

      <div className="flex gap-2 mb-4 flex-wrap" ref={tagsParent}>
        {tags.sort(comparator).map((t) => (
          <CursorObserver key={`tags-${t.id}`} state="action">
            <div
              className={`cursor-pointer p-3 flex gap-1 duration-800 ${
                t.selected ? "badge badge-primary" : "badge"
              }`}
              onClick={() =>
                setTags((state) => {
                  const filteredList = state.filter((e) => e.id != t.id);
                  return [...filteredList, { ...t, selected: !t.selected }];
                })
              }
            >
              {t.name}
              {t.selected ? <IconCheck size={15} /> : <IconX size={15} />}
            </div>
          </CursorObserver>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 auto-rows-fr">
        <AnimatePresence initial={false}>
          {Object.entries(projects)
            .filter(([_, value]) =>
              tags.find((value) => value.selected)
                ? tags
                    .filter((tag) => tag.selected)
                    .some((tag) => value.tags && value.tags.includes(tag.id))
                : true
            )
            .map(([id, project]) => (
              <motion.div
                key={`${project.title}-${id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="shadow-md card"
              >
                <div className="card-body">
                  <h2 className="card-title">{project.title}</h2>
                  <p>{project.description}</p>
                  <div className="flex gap-1 mb-2 flex-wrap">
                    {project.technologies.map((item) => (
                      <div
                        className="overflow-hidden duration-200 border rounded-full hover:border-primary"
                        key={`${id}-technologies-${item}`}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          className="w-full h-full"
                          src={skill_badges_mono[item]}
                          alt={item}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="card-actions justify-end">
                    <CursorObserver
                      key={`cursor-observer-${id}-${project.title}`}
                      state={"link"}
                    >
                      <Link href={`/projects/${id}`}>
                        <button className="btn btn-primary gap-2">
                          <IconExternalLink />
                          View
                        </button>
                      </Link>
                    </CursorObserver>
                  </div>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
