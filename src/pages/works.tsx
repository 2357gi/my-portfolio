import { css } from '@emotion/react'
import { createClient } from '@prismicio/client'
import { useState } from 'react'

import { PModal } from '@/components/PModal'
import { PWorksCard } from '@/components/PWorksCard'
import { colors } from '@/styles/colors'

type TechProps = {
  tech: { tech: string }
}

type WorkProps = {
  data: {
    thumbnail: { url: string }
    season: string
    title: string
    content: string
    usedtech: TechProps[]
    people: number
    range: string
  }
}

type WorksProps = {
  worksPost: WorkProps[]
}

const Works = (props: WorksProps) => {
  const worksProps = props.worksPost
  console.log(worksProps)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalNumber, setModalNumber] = useState(0)

  return (
    <div>
      <ul css={WorksStyle}>
        {worksProps.map((work: WorkProps, index: number) => (
          <PWorksCard
            key={index}
            index={index}
            work={{
              thumbnailImage: work.data.thumbnail.url,
              season: work.data.season,
              title: work.data.title,
            }}
            setIsModalOpen={setIsModalOpen}
            setModalNumber={setModalNumber}
          />
        ))}
      </ul>
      <PModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <img
          src={worksProps[modalNumber].data.thumbnail.url}
          alt="サムネ"
          css={ModalImage}
        />
        <p css={SeasonStyle}>{worksProps[modalNumber].data.season}</p>
        <h4 css={ModalHeading}>{worksProps[modalNumber].data.title}</h4>
        <div css={ModalContents}>
          <p>{worksProps[modalNumber].data.content}</p>
          <div>
            <p>使用技術</p>
            <ul css={TechList}>
              {worksProps[modalNumber].data.usedtech.map(
                (tech: TechProps, index: number) => {
                  return (
                    <li key={index}>
                      <p>{index === 0 ? `${tech.tech}` : `/ ${tech.tech}`}</p>
                    </li>
                  )
                },
              )}
            </ul>
          </div>
          <div>
            <p>制作人数</p>
            <p>{worksProps[modalNumber].data.people}名</p>
          </div>
          <div>
            <p>担当範囲</p>
            <p>{worksProps[modalNumber].data.range}</p>
          </div>
        </div>
      </PModal>
    </div>
  )
}

export async function getStaticProps() {
  const client = createClient('2357gi-portfolio')
  const worksPost = await client.getAllByType('works')

  return { props: { worksPost } }
}

const WorksStyle = css({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '40px 60px',
  marginTop: 76,
})

const ModalImage = css({
  width: '100%',
  height: 362,
  marginBottom: 12,
  objectFit: 'cover',
})

const ModalHeading = css({
  fontSize: '2.4rem',
  fontWeight: 500,
  margin: '4px 0 20px',
})

const TechList = css({
  display: 'flex',
  gap: 4,
})

const ModalContents = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
})

const SeasonStyle = css({
  color: `${colors.primary}`,
  fontWeight: 700,
})

export default Works
