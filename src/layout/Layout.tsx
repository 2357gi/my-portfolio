import { css, SerializedStyles } from '@emotion/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactElement, useEffect, useState } from 'react'
import useKonami from 'react-konami-hook'
import { colors } from '@/styles/colors'

type LayoutProps = Required<{
  readonly children: ReactElement
}>

export const Layout = ({ children }: LayoutProps) => {
  const [isCommanded, setIsCommanded] = useState(false)
  const router = useRouter()
  useKonami(() => {
    setIsCommanded(!isCommanded)
  })

  const [headerStyle, setHeaderStyle] = useState<SerializedStyles[]>()
  const [box1Style, setBox1Style] = useState<SerializedStyles[]>()
  const [box2Style, setBox2Style] = useState<SerializedStyles[]>()
  const [box3Style, setBox3Style] = useState<SerializedStyles[]>()
  const [box4Style, setBox4Style] = useState<SerializedStyles[]>()
  const [box5Style, setBox5Style] = useState<SerializedStyles[]>()
  const [tStyle, setTStyle] = useState<SerializedStyles[]>()
  const [oStyle, setOStyle] = useState<SerializedStyles[]>()
  const [mainContentStyle, setMainContentStyle] = useState<SerializedStyles[]>()
  const [descriptionStyle, setDescriptionStyle] = useState<SerializedStyles[]>()
  const [navBoxStyle, setNavBoxStyle] = useState<SerializedStyles[]>()

  const [pageTitle, setPageTitle] = useState('')

  useEffect(() => {
    console.log(router.pathname)
    if (router.pathname === '/') {
      setHeaderStyle([headerBaseStyle, headerHiddenStyle])
      setBox1Style([boxBaseStyle, box1RootStyle])
      setBox2Style([boxBaseStyle, box2RootStyle])
      setBox3Style([boxBaseStyle, box3RootStyle])
      setBox4Style([boxBaseStyle, box4RootStyle])
      setBox5Style([boxBaseStyle, box5RootStyle])
      setTStyle([tBaseStyle])
      setOStyle([oBaseStyle])
      setMainContentStyle([mainContentBaseStyle])
      setDescriptionStyle([descriptionBaseStyle])
      setNavBoxStyle([navBoxBaseStyle, navBox0Style])

      setPageTitle('')
    } else if (router.pathname === '/welcome') {
      setHeaderStyle([headerBaseStyle, headerWelcomeStyle])
      setBox1Style([boxBaseStyle, box1WelcomeStyle])
      setBox2Style([boxBaseStyle, box2WelcomeStyle])
      setBox3Style([boxBaseStyle, box3WelcomeStyle])
      setBox4Style([boxBaseStyle, box4WelcomeStyle])
      setBox5Style([boxBaseStyle, box5WelcomeStyle])
      setTStyle([tBaseStyle, hiddenStyle])
      setOStyle([oBaseStyle, hiddenStyle])
      setMainContentStyle([mainContentBaseStyle, mainContentWelcomeStyle])
      setDescriptionStyle([descriptionBaseStyle, descriptionShowStyle])
      setNavBoxStyle([navBoxBaseStyle, navBoxWelcomeStyle])

      setPageTitle('')
    } else {
      setHeaderStyle([headerBaseStyle])
      setBox1Style([boxBaseStyle, box1OtherStyle])
      setBox2Style([boxBaseStyle, box2OtherStyle])
      setBox3Style([boxBaseStyle, box3OtherStyle])
      setBox4Style([boxBaseStyle, box4OtherStyle])
      setBox5Style([boxBaseStyle, box5OtherStyle])
      setTStyle([tBaseStyle, hiddenStyle])
      setOStyle([oBaseStyle, hiddenStyle])
      setMainContentStyle([mainContentBaseStyle, mainContentOtherStyle])
      setDescriptionStyle([descriptionBaseStyle])
      if (router.pathname === '/about') {
        setNavBoxStyle([navBoxBaseStyle, navBoxAboutStyle])
        setPageTitle('About me')
      } else if (router.pathname === '/works') {
        setNavBoxStyle([navBoxBaseStyle, navBoxWorksStyle])
        setPageTitle('Works')
      } else if (router.pathname === '/contact') {
        setNavBoxStyle([navBoxBaseStyle, navBoxContactStyle])
        setPageTitle('Contact')
      }
    }
  }, [router.pathname])

  return (
    <div css={backGroundBaseStyle}>
      <div css={contentBaseStyle}>
        <header css={headerStyle}>
          {router.pathname === '/welcome' ? (
            ''
          ) : (
            <Link href={'/'}>
              <h1 css={headerNameStyle}>
                Kento
                <br />
                Ohgi
              </h1>
            </Link>
          )}

          <nav css={navStyle}>
            <Link href={'/welcome'}>
              <p css={linkStyle}>welcome</p>
            </Link>
            <Link href={'/about'}>
              <p css={linkStyle}>about</p>
            </Link>
            <Link href={'/works'}>
              <p css={linkStyle}>works</p>
            </Link>
            <Link href={'/contact'}>
              <p css={linkStyle}>contact</p>
            </Link>
            <div css={navBoxStyle}></div>
          </nav>
        </header>
        <div css={pageContentStyle}>
          <h1 css={pageTitleStyle}>{pageTitle}</h1>
          <div css={pageChildrenStyle}>{children}</div>
        </div>
        <div css={backGroundStyle}>
          <div css={box1Style}></div>
          <div css={box2Style}></div>
          <div css={box3Style}></div>
          <div css={box4Style}></div>
          <div css={box5Style}></div>
          <div css={tStyle}>O</div>
          <div css={oStyle}>K</div>
          <img
            css={isCommanded ? {} : { display: 'none' }}
            src="/me.png"
            alt="ohgi"
          />
        </div>

        <div css={mainContentStyle}>
          <div css={titleStyle}>
            <p css={roleStyle}>
              <span css={{ color: colors.primary }}>Site reliability</span>{' '}
              engineer
            </p>
            <h1 css={nameStyle}>
              Kento
              <br />
              Ohgi
            </h1>
          </div>
          <p css={descriptionStyle}>
            はじめまして、おおぎ(8gn)です。
            <br />
            好きなものは女とスノボ
            <br />
            よろしくおねがいします。よろしくおねがいします。よろしくおねがいします。
          </p>
        </div>
      </div>
    </div>
  )
}

const backGroundBaseStyle = css({
  background: colors.bg,
  width: '100%',
  minHeight: '100vh',
})

const backGroundStyle = css({
  position: 'fixed',
  width: '100%',
  maxWidth: 1512,
  height: '100vh',
  overflow: 'visible',
  zIndex: 1,
})
const contentBaseStyle = css({
  position: 'relative',
  paddingLeft: '4.4rem',
  width: '100%',
  maxWidth: 1512,
  margin: '0 auto',
  height: '100vh',
})

const headerBaseStyle = css({
  position: 'absolute',
  padding: '4.4rem',
  top: 0,
  left: 0,
  zIndex: 1001,
  display: 'flex',
  alignItems: 'center',
  transition: '0.3s',
  opacity: 1,
})
const headerHiddenStyle = css({
  opacity: 0,
})
const headerWelcomeStyle = css({
  top: 'calc(100vh - 20rem)',
  left: 'calc(50% - 19rem)',
})
const headerNameStyle = css({
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 'normal',
  fontSize: '2.4rem',
  lineHeight: '101.3%',
  letterSpacing: '0.055em',
  paddingRight: '6.4rem',
  cursor: 'pointer',
})
const navStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '4rem',
  position: 'relative',
})
const linkStyle = css({
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 300,
  fontSize: '2rem',
  lineHeight: '150%',
  letterSpacing: '0.02em',
  cursor: 'pointer',
})
const navBoxBaseStyle = css({
  height: 4,
  width: 0,
  background: colors.primary,
  position: 'absolute',
  bottom: '0.1rem',
  left: 0,
  transition: '0.3s',
})
const navBox0Style = css({
  left: 0,
  width: 0,
})
const navBoxWelcomeStyle = css({
  left: 0,
  width: '8.2em',
})
const navBoxAboutStyle = css({
  left: '12rem',
  width: '5.8em',
})
const navBoxWorksStyle = css({
  left: '21.3rem',
  width: '5.8em',
})
const navBoxContactStyle = css({
  left: '30.9rem',
  width: '7.2em',
})
const pageContentStyle = css({
  width: '100%',
  maxWidth: 1512,
  height: '100%',
  position: 'fixed',
  zIndex: 100000,
  pointerEvents: 'none',
})
const pageChildrenStyle = css({
  marginLeft: '78rem',
  marginRight: '4.4rem',
  marginTop: '4.4rem',
  marginBottom: '4.4rem',
  maxHeight: 'calc(100% - 8.8rem)',
  pointerEvents: 'auto',
  overflow: 'auto',
})
const pageTitleStyle = css({
  position: 'absolute',
  top: '30%',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: '700',
  fontSize: '6.4rem',
  lineHeight: '101.3%',
  /* identical to box height, or 65px */

  letterSpacing: '0.025em',
})

const boxBaseStyle = css({
  height: '3.7rem',
  width: '57rem',
  position: 'absolute',
  background: colors.black,
  transition: '0.3s',
})
const box1RootStyle = css({
  transform: 'rotate(135deg)',
  top: '-4rem',
  left: '-5rem',
})
const box1WelcomeStyle = css({
  transform: 'rotate(135deg)',
  top: '-13rem',
  left: '2rem',
})
const box1OtherStyle = css({
  transform: 'rotate(135deg)',
  top: '-24rem',
  left: '15rem',
})
const box2RootStyle = css({
  transform: 'rotate(45deg)',
  top: '30rem',
  left: '11rem',
  width: '17rem',
  background: colors.primary,
})
const box2WelcomeStyle = css({
  transform: 'rotate(45deg)',
  top: '66%',
  left: '8rem',
  width: '17rem',
  background: colors.primary,
})
const box2OtherStyle = css({
  transform: 'rotate(45deg)',
  top: '60%',
  left: '-6rem',
  width: '17rem',
  background: colors.primary,
})
const box3RootStyle = css({
  transform: 'rotate(135deg)',
  top: '66rem',
  left: '-34rem',
})
const box3WelcomeStyle = css({
  transform: 'rotate(135deg)',
  top: '98%',
  left: '-35rem',
})
const box3OtherStyle = css({
  transform: 'rotate(135deg)',
  top: '94%',
  left: '-14rem',
})
const box4RootStyle = css({
  transform: 'rotate(45deg)',
  top: '-40rem',
  left: '-18rem',
  background: colors.primary,
})
const box4WelcomeStyle = css({
  transform: 'rotate(45deg)',
  top: '8rem',
  left: '28rem',
  background: colors.primary,
})
const box4OtherStyle = css({
  transform: 'rotate(0deg)',
  top: '0',
  left: '65rem',
  width: '7.4rem',
  height: '100vh',
  background: colors.primary,
})
const box5RootStyle = css({
  transform: 'rotate(135deg)',
  top: '2rem',
  right: '-32rem',
})
const box5WelcomeStyle = css({
  transform: 'rotate(135deg)',
  top: '3rem',
  right: '-28em',
})
const box5OtherStyle = css({
  transform: 'rotate(135deg)',
  top: '-8rem',
  right: '-32rem',
})
const tBaseStyle = css({
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 200,
  fontSize: '92rem',
  lineHeight: '117.8%',
  color: colors.white,
  position: 'absolute',
  transform: 'rotate(-45deg)',
  right: '30rem',
  top: '-20rem',
  zIndex: 3,
  opacity: 1,
  transition: '0.3s',
  '@media (max-width: 1512px)': {
    fontSize: '60vw',
  },
})
const oBaseStyle = css({
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 800,
  fontSize: '90rem',
  lineHeight: '117.8%',
  color: colors.black,
  position: 'absolute',
  right: '8rem',
  top: '14rem',
  zIndex: 2,
  opacity: 1,
  transition: '0.3s',
  '@media (max-width: 1512px)': {
    fontSize: '60vw',
  },
})
const hiddenStyle = css({
  opacity: 0,
  top: '-40rem',
})

const mainContentBaseStyle = css({
  paddingTop: '65vh',
  position: 'relative',
  zIndex: 5,
  width: '100%',
  paddingLeft: '13.5rem',

  display: 'flex',
  alignItems: 'flex-end',
  gap: 40,
  opacity: 1,
  transition: '0.3s',
})
const mainContentWelcomeStyle = css({
  paddingTop: '40vh',
})
const mainContentOtherStyle = css({
  paddingTop: '-35vh',
  opacity: 0,
})
const titleStyle = css({
  display: 'flex',
  flexDirection: 'column',
})
const roleStyle = css({
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 500,
  fontSize: '2.4rem',
  lineHeight: '117.8%',
  letterSpacing: '0.07em',
})
const nameStyle = css({
  paddingTop: '0.8rem',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 500,
  fontSize: '9.8rem',
  lineHeight: '101.3%',
  letterSpacing: '0.05em',
})
const descriptionBaseStyle = css({
  fontSize: '1.6rem',
  lineHeight: '150%',
  letterSpacing: '0.02em',
  paddingLeft: '4rem',
  opacity: 0,
  transition: '0.3s',
})
const descriptionShowStyle = css({
  opacity: 1,
})
