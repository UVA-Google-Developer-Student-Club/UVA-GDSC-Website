import { Typography, Button } from "@material-tailwind/react";
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS

const LINKS = [
  { name: "Instagram", icon: "bi-instagram" },
  { name: "LinkedIn", icon: "bi-linkedin" },
  { name: "YouTube", icon: "bi-youtube" },
  { name: "Discord", icon: "bi-discord" },
];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-blue-gray-50 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} UVA Google Developer Student Club
          </Typography>
          <ul className="flex flex-wrap items-center justify-center">
            {LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href="#"
                  className="flex items-center py-1 font-medium !text-gray-700 transition-colors hover:!text-gray-900 px-6"
                >
                  <i className={link.icon}></i>
                  <Typography as="span" className="pl-2 hidden">
                    {link.name}
                  </Typography>
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex items-center">
            <div className="flex gap-3 flex-col">
              <a
                href="https://lists.virginia.edu/sympa/subscribe/google_dsc?previous_action=info"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="gray">
                  Join Our Mailing List
                </Button>
              </a>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
