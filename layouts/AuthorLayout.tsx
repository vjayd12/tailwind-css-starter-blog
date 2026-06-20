import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, bluesky, linkedin, github, medium } =
    content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:space-y-0 xl:gap-x-8">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pt-4 pb-2 text-2xl leading-8 font-bold tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="text-gray-500 dark:text-gray-400">
              <h1 className="text-xl leading-9 font-extrabold tracking-tight text-gray-700 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14 dark:text-gray-100">
                Get In Touch
              </h1>
            </div>

            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="x" href={twitter} />
              <SocialIcon kind="bluesky" href={bluesky} />
              <SocialIcon kind="medium" href={medium} />
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none pt-8 pb-8 xl:col-span-2">
            {children}
          </div>
        </div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Skills & Expertise -{' '}
            <p className="text-gray-500 dark:text-gray-400">Technologies and tools I work with</p>
          </h1>
          <div className="flex space-x-3 pt-6">
            <div className="grid w-full max-w-5xl gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-primary/10 rounded-full p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary h-6 w-6"
                  >
                    <path d="M18 20.7c-.6.3-2.6 1.3-6 1.3s-5.4-1-6-1.3"></path>
                    <path d="M12 4v16"></path>
                    <path d="M8.5 7.5 12 4l3.5 3.5"></path>
                    <path d="M20 8c-.6-1.5-1.6-3-3-4"></path>
                    <path d="M4 8c.6-1.5 1.6-3 3-4"></path>
                    <path d="M20 12c0 1.3-.3 2.6-.9 3.7"></path>
                    <path d="M4 12c0 1.3.3 2.6.9 3.7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Frontend / Backend</h3>
                <p className="text-muted-foreground text-sm">
                  React, Vue.js , HTML, CSS / Laravel, Java, PHP{' '}
                </p>
              </div>
              {/* <div className="flex flex-col items-center space-y-2">
                <div className="bg-primary/10 rounded-full p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary h-6 w-6"
                  >
                    <path d="M2 13a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5a5 5 0 0 0-5-5H7"></path>
                    <path d="M7 8a5 5 0 0 0-5 5"></path>
                    <circle cx="9" cy="13" r="1"></circle>
                    <circle cx="15" cy="13" r="1"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Backend</h3>
                <p className="text-muted-foreground text-sm">Laravel, Java, PHP</p>
              </div> */}
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-primary/10 rounded-full p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary h-6 w-6"
                  >
                    <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4"></path>
                    <path d="M17 8h2a2 2 0 0 1 2 2v1"></path>
                    <path d="M3 11V9a2 2 0 0 1 2-2h2"></path>
                    <path d="M10 2v7.5"></path>
                    <path d="M14 2v7.5"></path>
                    <path d="M10 12a2 2 0 0 0 4 0"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Database</h3>
                <p className="text-muted-foreground text-sm">SQL, MySQL</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-primary/10 rounded-full p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary h-6 w-6"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                    <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                    <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">DevOps</h3>
                <p className="text-muted-foreground text-sm">AWS, CI/CD, Git, GitHub, Jenkins</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-primary/10 rounded-full p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary h-6 w-6"
                  >
                    <path d="M2 13a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5a5 5 0 0 0-5-5H7"></path>
                    <path d="M7 8a5 5 0 0 0-5 5"></path>
                    <circle cx="9" cy="13" r="1"></circle>
                    <circle cx="15" cy="13" r="1"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Tools</h3>
                <p className="text-muted-foreground text-sm">
                  Jira, AEM , Magento (Adobe Commerce) , ProofHub, Confluence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
