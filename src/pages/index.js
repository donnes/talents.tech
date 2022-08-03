import Head from "next/head";
import { AppShell, Section } from "../components";
import { features } from "../data";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Talents.tech - Hire the most talented software developers.
        </title>
        <meta
          name="description"
          content="Boost your engineering team with the world's most experienced software engineers."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppShell>
        <Section
          title="Build successful remote teams"
          caption="Easily find, hire and onboard tech talent from Latin America"
        >
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </Section>
      </AppShell>
    </>
  );
}
