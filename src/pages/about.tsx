import { css } from '@emotion/react'
import { createClient } from '@prismicio/client'
import { PLabel } from '@/components/PLabel'
import { colors } from '@/styles/colors'

type ExperienceProps = {
  season: string
  content: string
}

type SkillsProps = {
  category: string
  skill: string
}

type AboutProps = {
  aboutPost: {
    data: {
      about: string
      experience: ExperienceProps[]
      skills: SkillsProps[]
    }
  }
}

const About = (props: AboutProps) => {
  const aboutProps = props.aboutPost.data

  console.log(props)

  return (
    <div css={AboutStyle}>
      <PLabel labelHeading="About">{aboutProps.about}</PLabel>
      <PLabel labelHeading="Experience & Education">
        <ul css={ExperienceStyle}>
          {aboutProps.experience.map(
            (experience: ExperienceProps, index: number) => {
              return (
                <li key={index}>
                  <p css={ExperiencePeriodStyle}>{experience.season}</p>
                  <p>{experience.content}</p>
                </li>
              )
            },
          )}
        </ul>
      </PLabel>
      <PLabel labelHeading="Skills">
        <ul css={ExperienceStyle}>
          {aboutProps.skills.map((skill: SkillsProps, index: number) => {
            return (
              <li key={index}>
                <p>- {skill.category}</p>
                <p>{skill.skill}</p>
              </li>
            )
          })}
        </ul>
      </PLabel>
    </div>
  )
}

export async function getStaticProps() {
  const client = createClient('2357gi-portfolio')
  const aboutPost = await client.getSingle('about')

  return { props: { aboutPost } }
}

const AboutStyle = css({
  fontSize: '1.6rem',
  display: 'flex',
  flexDirection: 'column',
  gap: 80,
  marginTop: '12rem',
})

const ExperienceStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
})

const ExperiencePeriodStyle = css({
  color: `${colors.primary}`,
  fontWeight: 700,
  paddingBottom: '0.4rem',
})

export default About
