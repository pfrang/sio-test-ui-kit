import { HTMLStyledProps } from "../../styled-system/types";
import { splitCssProps, styled  } from "../../styled-system/jsx";
import { css } from "../../styled-system/css";
import { useMemo } from "react";


export type GridProps = HTMLStyledProps<'div'>; 

const Div = styled('div')

export const Grid3 = ({ children, ...props}: GridProps) => {

  const [cssProps, restProps] = splitCssProps(props)
  const { css: cssProp, background, ...styleProps } = cssProps

  const backgroundColor = useMemo(() => background ? background : "transparent", [background]) 
 
  const className = css(
    // { bg: backgroundColor },
    styleProps,
    cssProp
  )

  return <Div {...restProps} bgOpac={backgroundColor} className={className}>{children}</Div>
}