import { styled } from "../../../styled-system/jsx";

// type Device = "mobile" | "tablet" | "desktop";

// export const createGridColumnProperty = (
//   start: GridColumnIndexDesktop | undefined,
//   span: GridColumnIndexDesktop | undefined,
//   device: Device,
// ): string => {
//   const gridColumnStart = start || "";
//   const gridColumnSeparator = start && span ? "/" : "";
//   const gridColumnSpan = span ? `span ${clampSpan(span, device)}` : "";

//   return `${gridColumnStart} ${gridColumnSeparator} ${gridColumnSpan}`;
// };

// const clampSpan = (span: number, breakpoint: Device): number => {
//   switch (breakpoint) {
//   case "mobile":
//     return Math.min(span, 4);
//   case "tablet":
//     return Math.min(span, 8);
//   case "desktop":
//     return Math.min(span, 12);
//   }
// };

const Grid = styled("div", {
  base: {
    gridTemplateColumns: ["repeat(4, 1fr)", "repeat(8, 1fr)", "repeat(12, 1fr)"],
    columnGap: [4, 5],
    rowGap: 5,
    paddingX: [4, 5, 10],
    width: "100%",
    margin : "0 auto",
    maxWidth: "1600px",
    display: "grid",
  },
})

const Item = styled("div", {
  base: {
    display: "block",
  },
})



export const GridStyle = {
  Grid,
  Item,
}