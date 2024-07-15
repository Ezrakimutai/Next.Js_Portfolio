import React from "react";

interface ProjectTagsProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}
//Handles display to switch between (Web/Mobile) or both Tabs to determine which is active.
const ProjectTag: React.FC<ProjectTagsProps> = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-blue-600"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      onClick={() => onClick(name)}
      className={`${buttonStyles} border-2 rounded-full px-6 py-3 text-xl cursor-pointer`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;