import { css } from '@emotion/react'
import { colors } from '@/styles/colors'

const Contact = () => {
  return (
    <div css={ContactStyle}>
      <div css={ContentStyle}>
        <p css={ContentTitle}>Twitter</p>
        <a
          css={ContentLink}
          href="https://twitter.com/2357gi"
          target="_blank"
          rel="noopener noreferrer"
        >
          @2357gi
        </a>
      </div>
      <div css={ContentStyle}>
        <p css={ContentTitle}>Facebook</p>
        <a
          css={ContentLink}
          href="https://facebook.com/2357gi"
          target="_blank"
          rel="noopener noreferrer"
        >
          大木 建人
        </a>
      </div>
      <div css={ContentStyle}>
        <p css={ContentTitle}>Email</p>
        <a 
          css={ContentLink}
          href="mailto:2357.gi@gmail.com"
        >
          2357.gi@gmail.com
        </a>
      </div>
      <p>お仕事のご依頼、ご検討、その他何でも気軽にお問い合わせください。</p>
    </div>
  )
}

const ContactStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 40,
  fontSize: '1.6rem',
  marginTop: '25vh',
})

const ContentStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  fontSize: '1.6rem',
  color: '#3E76A9',
})

const ContentTitle = css({
  fontFamily: 'roboto, sans-serif',
  fontWeight: 700,
  fontSize: '2rem',
  color: colors.black,
})

const ContentLink = css({
  fontFamily: 'roboto, sans-serif',
  fontWeight: 700,
  fontSize: '1.6rem',
  color: '#93cddb',
})

export default Contact
