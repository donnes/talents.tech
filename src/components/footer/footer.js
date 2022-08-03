import Link from "next/link";
import { Logo } from "../logo";
import { IconInstagram, IconLinkedIn, IconGithub } from "../icons";
import { links } from "../../data/links";

const sections = [
  {
    title: "Customers",
    links: [
      {
        href: links.hire,
        label: "Hire Top Talents",
      },
      {
        href: links.bookACall,
        label: "Book a Call",
      },
      {
        href: links.skills,
        label: "Hire for Specific Skills",
      },
      {
        href: "/faq",
        label: "FAQ",
      },
    ],
  },
  {
    title: "Developers",
    links: [
      {
        href: links.jobs,
        label: "Apply for Jobs",
      },
      {
        href: links.devCamps,
        label: "Dev Camp",
      },
      {
        href: links.devCamps,
        label: "Tech Interview Camp",
      },
      {
        href: links.careerConsulting,
        label: "Career Consulting",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        href: links.aboutUs,
        label: "About Us",
      },
      {
        href: links.contact,
        label: "Contact Us",
      },
      {
        href: links.legal,
        label: "Legal",
      },
    ],
  },
];

const socials = [
  {
    href: "https://linkedin.com/in/talents.tech",
    label: "LinkedIn",
    icon: IconLinkedIn,
  },
  {
    href: "https://instagram.com/talents.tech",
    label: "Instagram",
    icon: IconInstagram,
  },
  {
    href: "https://github.com/talents.tech",
    label: "Github",
    icon: IconGithub,
  },
];

export function Footer() {
  return (
    <footer className="text-base text-center lg:text-left bg-white text-gray-900">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <h6 className="flex items-center uppercase font-semibold text-indigo-600 justify-center md:justify-start">
                <Logo className="sm:h-6" />
                <span className="ml-2">Talents.tech</span>
              </h6>

              <p className="text-gray-500">
                Boost your team with high-performing Software Engineers.
              </p>

              <div className="flex items-center justify-center md:justify-start gap-4">
                {socials.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a className="text-indigo-600" aria-label={link.label}>
                      <span className="flex w-5 h-5">
                        <link.icon />
                      </span>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            {sections.map((section) => (
              <div key={section.title}>
                <h6 className="flex justify-center uppercase font-semibold text-indigo-600 mb-4 md:justify-start">
                  {section.title}
                </h6>
                {section.links.map((link) => (
                  <p key={link.label} className="mb-4">
                    <Link href={link.href}>
                      <a>{link.label}</a>
                    </Link>
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center p-6 bg-slate-50">© 2022 Talents.tech</div>
    </footer>
  );
}
