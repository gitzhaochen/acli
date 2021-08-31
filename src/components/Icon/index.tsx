import React from 'react'
import './index.less'
import classNames from 'classnames'

interface IIconsProps {
  name?: string
  style?: Record<string, unknown>
  onClick?: () => void
  className?: string
}

export default function SvgIcon({ name, style, className, onClick }: IIconsProps): JSX.Element {
  const svgCls = classNames(['pmy-svg-icon', className])
  const onClickHandler = () => {
    onClick?.()
  }
  return (
    <svg onClick={onClickHandler} className={svgCls} style={style}>
      <use xlinkHref={`#${name}`} />
    </svg>
  )
}
