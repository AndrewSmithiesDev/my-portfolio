import ReactNativeIcon from "./icons/ReactNativeIcon";
import HtmlIcon from "./icons/HtmlIcon";
import CssIcon from "./icons/CssIcon";
import SassIcon from "./icons/SassIcon";
import BootstrapIcon from "./icons/BootstrapIcon";
import TailwindIcon from "./icons/TailwindIcon";
import VueIcon from "./icons/VueIcon";
import JavaScriptIcon from "./icons/JavaScriptIcon";
import TypeScriptIcon from "./icons/TypeScriptIcon";
import SymfonyIcon from "./icons/SymfonyIcon";
import PhpIcon from "./icons/PhpIcon";
import MysqlIcon from "./icons/MysqlIcon";
import GitIcon from "./icons/GitIcon";
import FigmaIcon from "./icons/FigmaIcon";
import VsCodeIcon from "./icons/VsCodeIcon";

export type SkillCategory = "frontend" | "backend" | "tools";

export type Skill = {
  name: string;
  icon: React.ReactNode;
  category: SkillCategory;
};

export const skills: Skill[] = [
  { name: "HTML", icon: <HtmlIcon />, category: "frontend" },
  { name: "CSS", icon: <CssIcon />, category: "frontend" },
  { name: "Bootstrap", icon: <BootstrapIcon />, category: "frontend" },
  { name: "Tailwind CSS", icon: <TailwindIcon />, category: "frontend" },
  { name: "Sass", icon: <SassIcon />, category: "frontend" },
  { name: "JavaScript", icon: <JavaScriptIcon />, category: "frontend" },
  { name: "Vue.js", icon: <VueIcon />, category: "frontend" },
  { name: "React Native", icon: <ReactNativeIcon />, category: "frontend" },
  { name: "TypeScript", icon: <TypeScriptIcon />, category: "frontend" },

  { name: "Symfony", icon: <SymfonyIcon />, category: "backend" },
  { name: "PHP", icon: <PhpIcon />, category: "backend" },
  { name: "MySQL", icon: <MysqlIcon />, category: "backend" },

  { name: "Git", icon: <GitIcon />, category: "tools" },
  { name: "Figma", icon: <FigmaIcon />, category: "tools" },
  { name: "VS Code", icon: <VsCodeIcon />, category: "tools" },
];
