import Head from "next/head";
import Link from "next/link";
import { AppShell, Hero, Section, CTASection } from "../components";
import { homeContent, links } from "../data";

const { hero, sectionStats, sectionRoles } = homeContent;

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Talents.tech - Hire the most talented software developers.
        </title>
      </Head>

      <AppShell>
        <Hero
          title={hero.title}
          titleHighlight={hero.titleHighlight}
          description={hero.description}
        >
          <div className="rounded-md shadow">
            <Link href={links.hire}>
              <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                {hero.primaryButtonText}
              </a>
            </Link>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Link href={links.bookACall}>
              <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                {hero.secondaryButtonText}
              </a>
            </Link>
          </div>
        </Hero>

        <Section
          className="bg-slate-50"
          title={sectionStats.title}
          caption={sectionStats.caption}
        >
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {sectionStats.stats.map((stat) => (
              <div key={stat.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <stat.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {stat.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {stat.description}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section
          className="bg-white"
          title={sectionRoles.title}
          caption={sectionRoles.caption}
          orientation="horizontal"
        >
          <dl className="grid grid-cols-2-max md:grid-cols-3-max lg:grid-cols-4-max gap-8">
            {sectionRoles.skills.map((skill) => (
              <div key={skill.name} className="relative">
                <dt className="flex items-center" aria-label={skill.name}>
                  <div className="flex items-center justify-center h-8 w-8">
                    <i className={`${skill.icon} colored text-2xl`} />
                  </div>
                  <p className="ml-2 font-medium text-gray-900">{skill.name}</p>
                </dt>
              </div>
            ))}
          </dl>
        </Section>

        <CTASection />
      </AppShell>
    </>
  );
}
