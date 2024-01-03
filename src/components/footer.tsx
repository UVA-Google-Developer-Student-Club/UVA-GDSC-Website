import { Typography, Button, Input } from "@material-tailwind/react";

const LINKS = ["About Us", "Careers", "Press", "Blog", "Pricing"];
const SUB_LINKS = ["Claim", "Privacy", "Terms"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-end justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <Typography
              as="a"
              href="https://www.material-tailwind.com"
              target="_blank"
              variant="h4"
              className="mb-6"
            >
              Material Tailwind
            </Typography>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {LINKS.map((link, idx) => (
                <li key={link}>
                  <Typography
                    as="a"
                    href="#"
                    className={`py-1 font-medium !text-gray-700 transition-colors hover:!text-gray-900 ${
                      idx === 0 ? "pr-3" : "px-3"
                    }`}
                  >
                    {link}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full sm:w-[24rem] sm:min-w-[24rem]">
            
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-blue-gray-50 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} UVA Google Developer Student Club
          </Typography>

          <ul className="flex items-center">
            <div className="flex flex-col gap-3 sm:flex-row">
              {/* @ts-ignore */}
              <a href="https://lists.virginia.edu/sympa/subscribe/google_dsc?previous_action=info" target="_blank" rel="noopener noreferrer">
                <Button color="gray" className="flex-shrink-0">
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
