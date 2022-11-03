import { styled } from "linaria/react";
import React from "react";
// ______________________________________________________
//
export type Props = {
  /**
   * ボタンに表示する文字
   */
  children: string;
  /**
   * フォントサイズ
   */
  fontSize: string;
  /**
   * aria-label
   */
  ariaLabel?: string;
};
// ______________________________________________________
//
export const Button: React.FC<Props> = ({
  children = "action",
  fontSize = "32px",
  ariaLabel,
}: Props) => {
  return (
    <StyledButton fontSize={fontSize} aria-label={ariaLabel}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<Props>`
  font-size: ${(props) => props.fontSize ?? "14px"};
`;
