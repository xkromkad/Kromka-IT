import type { ProjectGroup } from '@/lib/data';
import ProjectCard from './ProjectCard';
import ProjectFamily from './ProjectFamily';

/** Anchor id of a category section, used by the jump links on the projects page. */
export const projectCategoryId = (category: string) => `projects-${category}`;

/**
 * Projects grouped by category, each with its own centred heading. Used by the
 * projects page (headings under an h1) and the homepage portfolio section
 * (headings under an h2), hence the configurable heading level.
 */
export default function ProjectGroups({
  groups,
  headingLevel,
}: {
  groups: ProjectGroup[];
  headingLevel: 'h2' | 'h3';
}) {
  const Heading = headingLevel;
  const familyHeading = headingLevel === 'h2' ? 'h3' : 'h4';

  return (
    <div className="space-y-20">
      {groups.map((group) => {
        const id = projectCategoryId(group.category);
        return (
          <section
            key={group.category}
            id={id}
            aria-labelledby={`${id}-title`}
            className="scroll-mt-24"
          >
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <Heading
                id={`${id}-title`}
                className="text-2xl sm:text-3xl font-bold font-poppins tracking-tight text-dark"
              >
                {group.info.title}
              </Heading>
              <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-brand" aria-hidden="true" />
              <p className="mt-4 text-gray-500 leading-relaxed">{group.info.description}</p>
            </div>

            <div className="space-y-6">
              {group.families.map((family) => (
                <ProjectFamily key={family.family} group={family} headingLevel={familyHeading} />
              ))}

              {group.items.length > 0 && (
                <div className="flex flex-wrap justify-center gap-6">
                  {group.items.map((item) => (
                    <div
                      key={item.slug}
                      className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc((100%-3rem)/3)]"
                    >
                      <ProjectCard item={item} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}
