import { css } from '@emotion/react'
import { ReactNode, Dispatch, SetStateAction } from 'react'
import { colors } from '@/styles/colors'

type ModalProps = {
  children: ReactNode
  isModalOpen: boolean
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

export const PModal = (props: ModalProps) => {
  const { children, isModalOpen, setIsModalOpen } = props

  return (
    <div
      css={[
        ModalWrapper,
        isModalOpen ? css({ opacity: 1, pointerEvents: 'auto' }) : css({}),
      ]}
    >
      <div css={ModalBackground} onClick={() => setIsModalOpen(false)}></div>
      <div css={ModalStyle}>
        <button css={IconWrapper} onClick={() => setIsModalOpen(false)}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.1118 16.0005L0.000474509 29.1118L2.88866 32L16 18.8887L29.1118 32.0005L32 29.1123L18.8882 16.0005L32.0005 2.88818L29.1123 0L16 13.1123L2.88818 0.000493231L0 2.88867L13.1118 16.0005Z"
              fill="#181617"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  )
}

const ModalWrapper = css({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 50000000,
  opacity: 0,
  pointerEvents: 'none',
  transition: '0.2s',
})

const ModalBackground = css({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgb(0 0 0 / 40%)',
})

const ModalStyle = css({
  maxWidth: 757,
  width: '90%',
  transform: 'translate(-50%, -50%)',
  position: 'absolute',
  top: '50%',
  left: '50%',
  padding: 40,
  background: `${colors.bg}`,
  fontSize: '1.6rem',
})

const IconWrapper = css({
  position: 'absolute',
  top: 24,
  right: 24,
})
