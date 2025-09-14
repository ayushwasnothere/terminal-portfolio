import { TechIcon } from "../components/TechIcon";
import type { Project } from "../projects";
import projects from "../projects";
import { useTheme } from "../theme/useTheme";
import { getThemeColors } from "../theme/utils";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  );
}

function Project({ project }: { project: Project }) {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);

  return (
    <div
      className="w-full border-1 flex flex-col gap-4 rounded-lg mt-4 p-4"
      style={{ borderColor: colors.secondary }}
    >
      <div className="font-bold text-xl" style={{ color: colors.contrast }}>
        {project.name}
      </div>
      <div className="text-sm" style={{ color: colors.subtext }}>
        {project.desc}
      </div>
      <div className="flex gap-2 flex-wrap">
        {project.stack?.map((stack) => (
          <Stack key={stack} stack={stack} />
        ))}
      </div>
      <div className="flex gap-2">
        <a
          className="flex gap-2 px-2 text-blue-500 hover:text-blue-600 items-center text-sm cursor-pointer"
          href={project.repoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-4 h-4 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </div>
          <span>Source</span>
        </a>
        {project.liveLink && (
          <a
            className="flex gap-2 px-2 text-orange-500 hover:text-orange-600 items-center text-sm cursor-pointer"
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-4 h-4 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-external-link-icon lucide-external-link"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </div>
            <span>Demo</span>
          </a>
        )}
      </div>
    </div>
  );
}

function Stack({ stack }: { stack: string }) {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);
  return (
    <span
      key={stack}
      className="flex items-center gap-2 text-xs px-3 py-1 rounded-full border-1"
      style={{ borderColor: colors.secondary, color: colors.fg }}
    >
      <TechIcon name={stack} size={16} />
      <span className="font-extralight">{stack}</span>
    </span>
  );
}
