import { css } from "../../../styled-system/css";
import { gridItem } from "../../../styled-system/patterns";
import { HTMLStyledProps } from "../../../styled-system/types";
import { GridStyle as s } from "./grid.style";

type WrapperProps = Omit<HTMLStyledProps<"div">, "start" | "span">

export type GridColumnIndexMobile = 0 | 1 | 2 | 3 | 4;
export type GridColumnIndexTablet = GridColumnIndexMobile | 5 | 6 | 7 | 8;
export type GridColumnIndexDesktop = GridColumnIndexTablet | 9 | 10 | 11 | 12;

export interface GridProps extends WrapperProps {
  children: React.ReactNode
}

export const Grid = ({ children, ...props}: GridProps) => {
  return (
    <s.Grid {...props}>
      {children}
    </s.Grid>
  )
}

export interface GridItemProps extends WrapperProps  {
  start?: {
    mobile?: GridColumnIndexMobile;
    tablet?: GridColumnIndexTablet;
    desktop?: GridColumnIndexDesktop;
  };
  span?: {
    mobile?: GridColumnIndexMobile;
    tablet?: GridColumnIndexTablet;
    desktop?: GridColumnIndexDesktop;
  };
  children: React.ReactNode
}

export const GridItem = ({
  start,
  span = { mobile: 4, tablet: 8, desktop: 12 },
  children,
  ...props
}: GridItemProps) => {
  const cssGrid = gridItem({colSpan: [span.mobile, span.tablet, span.desktop]})
  // const cssStyle = css({
  //   gridColumnStart: [start.mobile, start.tablet, start.desktop],
  //   columnSpan: [`${span.mobile}`, `${span.tablet}`, `${span.desktop}`],
  // })

  // const mergedClassName = cx(props.className, cssGrid)
  return (
    <s.Item  className={cssGrid} {...props}>
      {children}
    </s.Item>
  )
}