import { Button } from "../button/button";
import { IProject } from "@/app/utils/projects";

interface IProjectSectionProps {
  project: IProject;
}

export const ProjectSection = ({ project }: IProjectSectionProps) => {
  return (
    <div className="flex flex-col gap-10">
      <h3 className="text-3xl font-bold">{project.name}</h3>

      <p className="text-lg">{project.longDescription}</p>

      <p className="text-lg">Tech Stack: {project.technologies.join(", ")}</p>

      <Button
        text="View Project"
        onClick={() => window.open(project.link, "_blank")}
      />
    </div>
  );
};
