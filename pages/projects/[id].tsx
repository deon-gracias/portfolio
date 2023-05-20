import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { InferGetStaticPropsType } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Footer from "../../components/Footer";
import DrawerLayout from "../../components/DrawerLayout";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkToc from "remark-toc";

const projectDataDir = "data/projects";

export default function Project({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <DrawerLayout>
      <div className="px-4 py-12 mx-auto grow max-w-7xl">
        <h1 className="mb-10 text-5xl font-bold">{project.metadata.title}</h1>

        <div className="mb-4 space-x-2">
          {project.metadata.tags.map((tag: string) => (
            <div className="badge badge-secondary" key={tag}>
              {tag}
            </div>
          ))}
        </div>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: project.contentHtml }}
        ></div>
      </div>
      <Footer />
    </DrawerLayout>
  );
}

export async function getProject(id: string) {
  const fullPath = path.join(projectDataDir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await unified()
    .data("settings", { fragment: true })
    .use(remarkParse)
    .use(remarkToc, { tight: true, prefix: "user-content-" })
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeDocument)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeFormat)
    .use(rehypeRaw)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    metadata: matterResult.data,
    contentHtml,
  };
}

export function getProjectIds() {
  const fileNames = fs.readdirSync(projectDataDir);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getStaticPaths() {
  const paths = getProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: Params) {
  // Add the "await" keyword like this:
  const project = await getProject(params.id);

  return {
    props: {
      project,
    },
  };
}
