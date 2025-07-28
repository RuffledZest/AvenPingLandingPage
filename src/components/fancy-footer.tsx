import React, { useEffect } from "react";
import { FaTwitter, FaGithub, FaDiscord, FaBox, FaBuilding, FaBook, FaGavel } from "react-icons/fa";

// Icon lookup for string names
const iconMap: Record<string, React.ReactNode> = {
  twitter: <FaTwitter />,
  github: <FaGithub />,
  discord: <FaDiscord />,
  box: <FaBox />,
  company: <FaBuilding />,
  resources: <FaBook />,
  legal: <FaGavel />,
};

// Types for props
export type FancyFooterColumn = {
  title: string;
  icon?: string; // icon name
  links: Array<{
    label: string;
    url: string;
  }>;
};

export type FancyColumnFooterProps = {
  logo: { src: string; alt?: string };
  description?: string;
  columns: FancyFooterColumn[];
  backgroundStyle?: "glass" | "gradient" | "custom";
  customBackgroundClass?: string;
  bottomNote?: string;
  socialIcons?: string[]; // icon names
  layout?: "center" | "left";
};

// Helper: Validate URL (basic)
const isValidUrl = (url: string) => {
  try {
    new URL(url, window.location.origin);
    return true;
  } catch {
    return false;
  }
};

export const FancyColumnFooter: React.FC<FancyColumnFooterProps> = ({
  logo,
  description,
  columns,
  backgroundStyle = "glass",
  customBackgroundClass = "",
  bottomNote,
  socialIcons,
  layout = "left",
}) => {
  console.log("Footer render", { logo, columns, socialIcons });
  // // Defensive check for required props
  // if (
  //   !logo ||
  //   typeof logo !== "object" ||
  //   !logo.src ||
  //   !Array.isArray(columns) ||
  //   columns.length === 0 ||
  //   columns.some(col => !col || !Array.isArray(col.links))
  // ) {
  //   return <footer className="w-full px-4 py-10 text-center text-red-500">Invalid footer configuration</footer>;
  // }

  // Validation: Warn if more than 5 columns
  useEffect(() => {
    if (columns.length > 5) {
      console.warn(
        "[FancyColumnFooter] More than 5 columns provided. Only 5 will be displayed."
      );
    }
    columns.forEach((col, i) => {
      col.links.forEach((link) => {
        if (!isValidUrl(link.url)) {
          console.warn(
            `[FancyColumnFooter] Invalid URL in column ${i + 1}: ${link.url}`
          );
        }
      });
    });
    if (socialIcons && socialIcons.length > 0 && !bottomNote) {
      console.warn(
        "[FancyColumnFooter] Social icons provided but no bottomNote. Social block may not render as expected."
      );
    }
  }, [columns, socialIcons, bottomNote]);

  // Background classes
  let bgClass = "";
  let borderClass = "";
  if (backgroundStyle === "glass") {
    bgClass =
      "bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md shadow-xl";
    borderClass =
      "border border-white/30 dark:border-zinc-700/60 border-t-2 border-b-2 border-gradient-to-r from-pink-400/40 via-blue-400/40 to-purple-400/40 ";
  } else if (backgroundStyle === "gradient") {
    bgClass =
      "bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900";
  } else if (backgroundStyle === "custom") {
    bgClass = customBackgroundClass;
  }

  // Responsive grid columns
  const colCount = Math.min(columns.length, 5);
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
  }[colCount];

  // Layout alignment
  const alignClass = layout === "center" ? "items-center text-center" : "items-start text-left";
  console.log('Footer props', { logo, columns, socialIcons });
  return (
    <footer
      className={`relative w-full px-4 py-10 ${bgClass} ${borderClass} transition-all duration-300`}
      role="contentinfo"
    >
      <div className={`max-w-7xl mx-auto flex flex-col gap-8`}>
        {/* Top: Logo & Description */}
        <div className={`flex flex-col gap-2 ${alignClass}`}>
          <div className="flex justify-center md:justify-start">
            <img src={logo.src} alt={logo.alt || "Logo"} className="h-10" />
          </div>
          {description && (
            <p className="text-zinc-600 dark:text-zinc-300 text-sm max-w-md mx-auto md:mx-0">
              {description}
            </p>
          )}
        </div>
        {/* Columns */}
        <div
          className={`grid ${gridCols} gap-8 md:gap-12 transition-all duration-300`}
        >
          {columns.slice(0, 5).map((col, idx) => (
            <div key={col.title + idx} className="flex flex-col gap-3">
              <div className="flex items-center gap-2 mb-1">
                {col.icon && iconMap[col.icon] && (
                  <span className="text-lg">{iconMap[col.icon]}</span>
                )}
                <span className="font-semibold text-zinc-800 dark:text-zinc-100 tracking-wide">
                  {col.title}
                </span>
              </div>
              <ul className="space-y-2">
                {col.links.map((link, lidx) => (
                  <li key={link.label + lidx}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-pink-400 transition-colors duration-200 relative group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.label}
                      </span>
                      {/* Animated underline */}
                      <span className="block h-0.5 bg-gradient-to-r from-pink-400 via-blue-400 to-purple-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-0.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Bottom: Social icons & note */}
        {(socialIcons?.length || bottomNote) && (
          <div
            className={`flex flex-col md:flex-row md:justify-between items-center gap-4 pt-8 border-t border-zinc-200 dark:border-zinc-700 mt-8`}
          >
            {bottomNote && (
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                {bottomNote}
              </span>
            )}
            {socialIcons && socialIcons.length > 0 && (
              <div className="flex gap-3">
                {socialIcons.map((icon, i) => (
                  <span
                    key={i}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white/70 dark:bg-zinc-800/70 shadow hover:scale-110 transition-transform duration-200 border border-zinc-200 dark:border-zinc-700"
                  >
                    {iconMap[icon] || null}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </footer>
  );
};

// Example usage (serializable props)
export const ExampleFancyFooter = () => (
  <FancyColumnFooter
    logo={{ src: "/placeholder-logo.svg", alt: "Logo" }}
    description="A modern, beautiful footer for your next project."
    columns={[
      {
        title: "Product",
        icon: "box",
        links: [
          { label: "Features", url: "#features" },
          { label: "Pricing", url: "#pricing" },
          { label: "Docs", url: "#docs" },
        ],
      },
      {
        title: "Company",
        icon: "company",
        links: [
          { label: "About", url: "#about" },
          { label: "Careers", url: "#careers" },
        ],
      },
      {
        title: "Resources",
        icon: "resources",
        links: [
          { label: "Blog", url: "#blog" },
          { label: "Support", url: "#support" },
        ],
      },
      {
        title: "Legal",
        icon: "legal",
        links: [
          { label: "Privacy Policy", url: "#privacy" },
          { label: "Terms of Service", url: "#terms" },
        ],
      },
    ]}
    backgroundStyle="glass"
    bottomNote="© 2024 Ardacity. All rights reserved."
    socialIcons={["twitter", "github", "discord"]}
    layout="center"
  />
);
