import { styled } from "../../../styled-system/jsx";
import { RecipeVariant, RecipeVariantProps } from "../../../styled-system/types";

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
    margin: "0 auto",
    maxWidth: "1600px",
    display: "grid",
  },
})


const Item = styled("div", {
  base: {
    display: "block",
  },

  // variants: {
  //   start: {
  //     mobile: {
  //       "1": {
  //         gridColumnStart: 1,
  //       },
  //       "2": {
  //         gridColumnStart: 2,
  //       },
  //       "3": {
  //         gridColumnStart: 3,
  //       },
  //       4: {
  //         gridColumnStart: 4,
  //       },
  //     },
  //     tablet: {
  //       1: {
  //         gridColumnStart: 1,
  //       },
  //       2: {
  //         gridColumnStart: 2,
  //       },
  //       3: {
  //         gridColumnStart: 3,
  //       },
  //       4: {
  //         gridColumnStart: 4,
  //       },
  //       5: {
  //         gridColumnStart: 5,
  //       },
  //       6: {
  //         gridColumnStart: 6,
  //       },
  //       7: {
  //         gridColumnStart: 7,
  //       },
  //       8: {
  //         gridColumnStart: 8,
  //       }
  //     },
  //     desktop: {
  //       1: {
  //         gridColumnStart: 1,
  //       },
  //       2: {
  //         gridColumnStart: 2,
  //       },
  //       3: {
  //         gridColumnStart: 3,
  //       },
  //       4: {
  //         gridColumnStart: 4,
  //       },
  //       5: {
  //         gridColumnStart: 5,
  //       },
  //       6: {
  //         gridColumnStart: 6,
  //       },
  //       7: {
  //         gridColumnStart: 7,
  //       },
  //       8: {
  //         gridColumnStart: 8,
  //       },
  //       9: {
  //         gridColumnStart: 9,
  //       },
  //       10: {
  //         gridColumnStart: 10,
  //       },
  //       11: {
  //         gridColumnStart: 11,
  //       },
  //       12: {
  //         gridColumnStart: 12,
  //       }
  //     },
  //   },
  //   span: {
  //     mobile: {
  //       1: {
  //         gridColumn: "span 1",
  //       },
  //       2: {
  //         gridColumn: "span 2",
  //       },
  //       3: {
  //         gridColumn: "span 3",
  //       },
  //       4: {
  //         gridColumn: "span 4",
  //       },
  //     },
  //     tablet: {
  //       1: {
  //         gridColumn: "span 1",
  //       },
  //       2: {
  //         gridColumn: "span 2",
  //       },
  //       3: {
  //         gridColumn: "span 3",
  //       },
  //       4: {
  //         gridColumn: "span 4",
  //       },

  //       5: {
  //         gridColumn: "span 5",
  //       },
  //       6: {
  //         gridColumn: "span 6",
  //       },
  //       7: {
  //         gridColumn: "span 7",
  //       },
  //       8: {
  //         gridColumn: "span 8",
  //       },
  //     },
  //     desktop: {
  //       1: {
  //         gridColumn: "span 1",
  //       },
  //       2: {
  //         gridColumn: "span 2",
  //       },
  //       3: {
  //         gridColumn: "span 3",
  //       },
  //       4: {
  //         gridColumn: "span 4",
  //       },
  //       5: {
  //         gridColumn: "span 5",
  //       },
  //       6: {
  //         gridColumn: "span 6",
  //       },
  //       7: {
  //         gridColumn: "span 7",
  //       },
  //       8: {
  //         gridColumn: "span 8",
  //       },
  //       9: {
  //         gridColumn: "span 9",
  //       },
  //       10: {
  //         gridColumn: "span 10",
  //       },
  //       11: {
  //         gridColumn: "span 11",
  //       },
  //       12: {
  //         gridColumn: "span 12",
  //       },
  //     }
  //   }
  // }
})



export const GridStyle = {
  Grid,
  Item,
}