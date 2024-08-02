import { aboutMe } from '#content'

import { Title } from '~/components/title'
import { MDXContent } from '~/components/mdx-content'

import { ImageCard } from '../_components/image-card'

export function AboutMe() {
  return (
    <div className="flex flex-col gap-3 md:flex-row-reverse md:items-center">
      <div className="hidden md:block">
        <ImageCard />
      </div>
      <div className="md:flex-1">
        <Title text="About Me" />
        <div className="flex justify-center md:hidden">
          <ImageCard mobile />
        </div>
        <div className="about-rendered-mdx my-5 flex flex-col gap-3 text-xl md:text-left">
          <MDXContent code={aboutMe.content} />
        </div>
      </div>
    </div>
  )
}
