import type { ProjectGroup } from '@/lib/data';
import ProjectCard from './ProjectCard';

/**
 * Projects grouped by category, each with its own heading. Used by the
 * projects page (headings under an h1) and the homepage portfolio section
 * (headings under an h2), hence the configurable heading level.
 */
export default function ProjectGroups({
  groups,
  otherTitle,
  headingLevel,
}: {
  groups: ProjectGroup[];
  /** Heading for the trailing group of uncategorised projects. */
  otherTitle: string;
  headingLevel: 'h2' | 'h3';
}) {
  const Heading = headingLevel;

  return (
    <div className="space-y-14">
      {groups.map((group) => (
        <section key={group.category ?? 'other'} aria-labelledby={`projects-${group.category ?? 'other'}`}>
          <div className="mb-6 max-w-2xl">
            <Heading
              id={`projects-${group.category ?? 'other'}`}
              className="text-2xl font-bold font-poppins tracking-tight text-dark"
            >
              {group.info?.title ?? otherTitle}
            </Heading>
            {group.info?.description && (
              <p className="mt-2 text-gray-500 leading-relaxed">{group.info.description}</p>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {group.items.map((item) => (
              <ProjectCard key={item.slug} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
