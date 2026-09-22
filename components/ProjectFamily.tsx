import type { ProjectFamilyGroup } from '@/lib/data';
import ProjectCard from './ProjectCard';

/**
 * A family of related apps shown as one highlighted panel: the lead app as a
 * large card, the other apps stacked beside it as compact cards.
 */
export default function ProjectFamily({
  group,
  headingLevel,
}: {
  group: ProjectFamilyGroup;
  headingLevel: 'h3' | 'h4';
}) {
  const Heading = headingLevel;
  const { info, lead, members } = group;
  const host = new URL(info.url).host;

  return (
    <div className="rounded-3xl border border-brand/40 bg-brand/5 p-5 sm:p-8">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <Heading className="text-left text-xl font-bold font-poppins tracking-tight text-dark">
            {info.title}
          </Heading>
          <p className="mt-1 text-sm text-gray-500 leading-relaxed">{info.description}</p>
        </div>
        <a
          href={info.url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 self-start sm:self-auto rounded-full bg-brand px-4 py-1.5 text-sm font-semibold text-dark transition-opacity hover:opacity-80"
        >
          {host} ↗
        </a>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ProjectCard item={lead} variant="featured" />
        {members.length > 0 && (
          <div className="grid gap-4 lg:auto-rows-fr">
            {members.map((item) => (
              <ProjectCard key={item.slug} item={item} variant="compact" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
