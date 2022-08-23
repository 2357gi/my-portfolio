import { css } from '@emotion/react'
import { ReactNode } from 'react'
import { colors } from '@/styles/colors'

type LabelProps = {
  labelHeading: string
  children: ReactNode
}

export const PLabel = (props: LabelProps) => {
  const { labelHeading, children } = props

  return (
    <label>
      <div css={LabelStyle}>{labelHeading}</div>
      {children}
    </label>
  )
}

const LabelStyle = css({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1.6rem',
  fontSize: '2rem',
  fontWeight: '700',
  marginRight: '0.8rem',
  color: `${colors.black}`,
})
