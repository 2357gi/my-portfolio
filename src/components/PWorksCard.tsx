import { css } from '@emotion/react'
import { Dispatch, SetStateAction } from 'react'
import { colors } from '@/styles/colors'

type WorksCardProps = {
  work: { thumbnailImage: string; season: string; title: string }
  index: number
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  setModalNumber: Dispatch<SetStateAction<number>>
}

export const PWorksCard = (props: WorksCardProps) => {
  const { work, index, setIsModalOpen, setModalNumber } = props

  const worksCardOnClick = () => {
    setIsModalOpen(true)
    setModalNumber(index)
  }

  return (
    <li css={WorksCardStyle} onClick={worksCardOnClick}>
      <img src={work.thumbnailImage} alt={work.title} css={ThumbnailStyle} />
      <p css={SeasonStyle}>{work.season}</p>
      <p>{work.title}</p>
    </li>
  )
}

const WorksCardStyle = css({
  display: 'flex',
  flexDirection: 'column',
  fontSize: '2rem',
  fontWeight: 500,
  width: 'calc(50% - 30px)',
  color: `${colors.black}`,
  cursor: 'pointer',
})

const ThumbnailStyle = css({
  marginBottom: 12,
  background: '#C4C4C4',
  height: 175,
  objectFit: 'cover',
})

const SeasonStyle = css({
  marginBottom: 4,
  fontSize: '1.4rem',
  color: `${colors.primary}`,
})
