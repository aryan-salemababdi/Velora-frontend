import { FaBolt, FaChartPie, FaShieldAlt, FaCloud } from "react-icons/fa";
import { BenefitsType } from "./types";

export const benefits:BenefitsType[] = [
  {
    icon: "⚡️",
    title: "Lightning Fast",
    description:
      "Built with Go and optimized for performance, Velora runs modules with minimal overhead for ultra-fast execution.",
  },
  {
    icon: "🧩",
    title: "Modular Design",
    description:
      "Easily plug and play modules. Scale your application by adding or removing features without breaking the core.",
  },
  {
    icon: "🔒",
    title: "Secure by Default",
    description:
      "Velora comes with built-in best practices for security, including authentication middleware and input validation.",
  },
  {
    icon: "🚀",
    title: "Developer Friendly",
    description:
      "With intuitive APIs, automatic dependency injection, and simple config management, you can focus on building features.",
  },
];