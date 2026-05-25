import { slugifyStr } from "@utils/slugify";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium truncate",
  };

  const formattedDate = new Date(pubDatetime).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <li className="my-2">
      <a
        href={href}
        className="group flex items-center justify-between gap-8 rounded-lg p-3 text-skin-accent no-underline transition-all duration-200 ease-in-out hover:bg-slate-100 dark:hover:bg-zinc-800 hover:translate-x-1"
      >
        <div className="min-w-0 flex-1">
          {secHeading ? (
            <h2 {...headerProps}>{title}</h2>
          ) : (
            <h3 {...headerProps}>{title}</h3>
          )}
        </div>

        <time
          dateTime={new Date(pubDatetime).toISOString()}
          className="flex-shrink-0 text-sm tabular-nums text-stone-500 transition-colors group-hover:text-stone-700 dark:group-hover:text-stone-300"
        >
          {formattedDate}
        </time>
      </a>
    </li>
  );
}