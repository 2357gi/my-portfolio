import { css } from '@emotion/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { colors } from '@/styles/colors'
const pageBaseStyle = css({
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100vw',
  height: '100vh',
  overflow: 'auto ',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
})
const pageScrollStyle = css({
  height: 'calc(100% + 1px)',
})
const moreButtonStyle = css({
  zIndex: 10,
  position: 'absolute',
  bottom: '5rem',
  left: 'calc(50% - 1.25rem)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  transition: '0.1s',

  ':hover': {
    transform: 'scale(1.04)',
  },

  p: {
    color: colors.primary,
    fontFamily: 'Roboto, sans-serif',
    fontSize: '2rem',
    fontWeight: 500,
  },
})

const Home: NextPage = () => {
  const router = useRouter()
  const handleScroll = () => {
    router.push('/welcome')
  }
  return (
    <div css={pageBaseStyle} onScroll={handleScroll}>
      <div css={pageScrollStyle}>
        <Link href="/welcome">
          <div css={moreButtonStyle}>
            <p>more</p>
            <svg
              width="35"
              height="53"
              viewBox="0 0 35 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="34.4785"
                y="35.2306"
                width="24.0107"
                height="5.22586"
                transform="rotate(135 34.4785 35.2306)"
                fill="#50C8E2"
              />
              <rect
                x="4.21777"
                y="31.5347"
                width="24.0107"
                height="5.22586"
                transform="rotate(45 4.21777 31.5347)"
                fill="#50C8E2"
              />
              <rect
                x="34.4785"
                y="16.9785"
                width="24.0107"
                height="5.22586"
                transform="rotate(135 34.4785 16.9785)"
                fill="#50C8E2"
              />
              <rect
                x="4.21777"
                y="13.2826"
                width="24.0107"
                height="5.22586"
                transform="rotate(45 4.21777 13.2826)"
                fill="#50C8E2"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home
