/** @jsx jsx */
import { jsx } from '@emotion/react'
import { css } from '@emotion/react'
import React, { useContext } from 'react'
import { VisualEditorContext } from '../../context/VisualEditorContext'

type ButtonProps = Omit<JSX.IntrinsicElements['button'], 'icon'> & {
  secondary?: boolean
  outline?: boolean
  size?: 'small' | 'default'
}

export function Button({
  children,
  size = 'default',
  secondary = false,
  outline = false,
  ...props
}: ButtonProps) {
  const {theme} = useContext(VisualEditorContext)
  console.log(theme);

  const Secondary = {
    backgroundColor: 'transparent',
    color: theme.colors.primary,
    '&:hover, &:focus': { backgroundColor: theme.colors.primaryLight },
  }

  const Small = {
    height: 40,
  }

  const Outline = {
    border: `solid 1px ${theme.colors.primary}`,
    background: 'transparent',
    color: theme.colors.primary,
    '&:hover, &:focus': { backgroundColor: theme.colors.primary, color: '#FFF' },
  }

  return (
    <BaseButton
      css={css([
        secondary && Secondary,
        size === 'small' && Small,
        outline && Outline,
      ])}
      {...props}
    >
      {children}
    </BaseButton>
  )
}

const BaseButton = ({children, className}: {children: React.ReactNode, className?: string}) => {
  const {theme} = useContext(VisualEditorContext)
  return <button
    css={css({
      outline: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5em',
      fontWeight: 700,
      backgroundColor: theme.colors.primary,
      border: 'none',
      color: '#fff',
      alignSelf: 'flex-end',
      fontSize: '0.9rem',
      height: 40,
      padding: '0 1em',
      lineHeight: '1.25rem',
      cursor: 'pointer',
      borderRadius: 4,
      transition: 'background-color 0.3s',
      '&:hover, &:focus': { backgroundColor: theme.colors.primaryHover },
    })}
    className={className}
  >
    {children}
  </button>
}
