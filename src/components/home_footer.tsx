import { Typography, Button } from "@material-tailwind/react";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons CSS

const LINKS = [
  {
    name: "Google",
    icon: "bi-google",
    url: "https://gdsc.community.dev/university-of-virginia/",
  },
  {
    name: "YouTube",
    icon: "bi-youtube",
    url: "https://www.youtube.com/channel/UCpTxyXosssU1Ba2H0vkhc8A",
  },
  {
    name: "Instagram",
    icon: "bi-instagram",
    url: "https://www.instagram.com/uvagoogledsc/",
  },
  {
    name: "LinkedIn",
    icon: "bi-linkedin",
    url: "https://www.linkedin.com/company/uvadsc/about/",
  },
  { name: "Discord", icon: "bi-discord", url: "https://discord.gg/mDc8jqWnR2" },
];
const CURRENT_YEAR = new Date().getFullYear();

export function HomeFooter() {
  return (
    <footer className="absolute bottom-0 w-full">
      <div className="container mx-auto">
        <div className="grid items-center justify-center gap-y-4 gap-x-8 border-blue-gray-50 py-6 xl:justify-between grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
          <div className="col-span-1">
            <Typography className="text-center font-normal !text-white/40 whitespace-nowrap">
              &copy; {CURRENT_YEAR} UVA Google Developer Student Club
            </Typography>
          </div>
          <div className="col-span-1">
            <ul className="flex items-center justify-center ">
              {LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center py-1 font-medium !text-white/40 transition-colors hover:!text-gray-900 px-6"
                  >
                    <i className={link.icon}></i>
                    <Typography as="span" className="pl-2 hidden">
                      {link.name}
                    </Typography>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 bg-blue-300" />
        </div>
      </div>
    </footer>
  );
}

export default HomeFooter;
