import Image from "next/image";
import { IProject } from "../../utils/projects";
import { useWindowHeight } from "../side-menu/useWindowHeight";

interface IProjectCardProps {
  project: IProject;
  isSelected: boolean;
  setSelectedProjectId: (id: number) => void;
  isLastItem: boolean;
}

export const ProjectCard = ({
  project,
  isSelected,
  setSelectedProjectId,
  isLastItem,
}: IProjectCardProps) => {
  const { windowHeight } = useWindowHeight();

  return (
    <button
      className="relative w-[500px] h-[99px] cursor-pointer"
      onClick={() => setSelectedProjectId(project.id)}
    >
      {isSelected && (
        <Image
          src="/project-card.png"
          alt={`${project.name} project card`}
          width={500}
          height={99}
        />
      )}

      <div className="absolute inset-0 flex flex-col justify-end items-start gap-1 p-4 pb-8">
        <div className="flex items-center gap-3 w-full">
          <Image
            src="/project-arrow.svg"
            alt="arrow"
            width={20}
            height={20}
            className="flex-shrink-0"
          />
          <div className="flex flex-col gap-1 min-w-0 flex-1">
            <h3 className="text-xl font-bold truncate leading-tight text-left">
              {project.name}
            </h3>
            <p className="truncate leading-tight">{project.shortDescription}</p>
          </div>
        </div>
      </div>

      {/* Divider for selected state */}
      {isSelected ? (
        <>
          {/* Top part of divider */}
          <span className="absolute right-1 top-0 h-[calc(50%-17px)] w-[2px] bg-white opacity-30 z-20" />
          {/* Top V cut - angled down */}
          <span className="absolute right-1 top-[calc(50%-16px)] h-5 w-[2px] bg-white opacity-30 z-20 origin-top-left -rotate-45" />
          {/* Bottom V cut - angled up */}
          <span className="absolute right-1 top-[calc(50%-10px)] h-5 w-[2px] bg-white opacity-30 z-20 origin-bottom-left rotate-45" />
          {/* Bottom part of divider */}
          <span
            className={`absolute right-1 bottom-0 h-[calc(50%-11px)] w-[2px] bg-white opacity-30 z-20 ${
              isLastItem
                ? "top-[calc(50%+10px)]"
                : "bottom-0 h-[calc(50%-10px)]"
            }`}
            style={isLastItem ? { height: `${windowHeight - 400}px` } : {}}
          />
        </>
      ) : (
        <>
          {/* Simple divider for non-selected state */}
          <span
            className="absolute right-1 top-0 h-full w-[2px] bg-white opacity-30 z-20"
            style={isLastItem ? { height: `${windowHeight - 340}px` } : {}}
          />
        </>
      )}
    </button>
  );
};
