import type { Theme } from '@emotion/react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import type { ReactNode } from 'react';
import { useMemo } from 'react';

const TEXT_SIZES = {
  large: 14,
  medium: 12,
  small: 10,
};

export const SIZES = {
  large: 32,
  medium: 24,
  small: 16,
};

export const PROMINENCES = {
  default: 'default',
  strong: 'strong',
};

/**
 * Generate all styles available for badge based on prominence and sentiments
 */
const generateStyles = ({
  prominence,
  theme,
}: {
  prominence: string;
  theme: Theme;
}): Record<'disabled' | 'neutral', string> => ({
  disabled: `
      color: ${theme.colors.neutral.textWeak};
      background: ${theme.colors.neutral.backgroundStrong};
      border: none;
    `,
  neutral: `
      color: ${
        prominence === PROMINENCES.strong
          ? theme.colors.neutral.textStronger
          : theme.colors.neutral.text
      };
      background: ${
        prominence === PROMINENCES.strong
          ? theme.colors.neutral.backgroundStronger
          : theme.colors.neutral.backgroundWeak
      };
      border: 1px solid ${
        prominence === PROMINENCES.strong
          ? theme.colors.neutral.borderStronger
          : theme.colors.neutral.border
      };
    `,
});

const StyledSpan = styled.div<{
  size: number;
  sentimentStyles: string;
  fontSize: number;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: ${({ theme }) => theme.radii.xlarge};
  padding: 0
    ${({ theme, size }) =>
      size === SIZES.small ? theme.space['1'] : theme.space['2']};
  gap: ${({ theme, size }) =>
    size === SIZES.small ? theme.space['0.5'] : theme.space['1']};
  width: fit-content;
  height: ${({ size }) => size}px;
  text-transform: uppercase;
  font-size: ${({ fontSize }) => fontSize}px;
  color: inherit;
  ${({ sentimentStyles }) => sentimentStyles}
`;

type BadgeProps = {
  size?: keyof typeof SIZES;
  prominence?: keyof typeof PROMINENCES;
  /**
   * Defines icon to display on left side of badge. **Only available on medium and large sizes**.
   */
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  'data-testid'?: string;
};

/**
 * Badge component is used to display a status or a label in a small container.
 */
export const Badge = ({
  // sentiment = 'neutral',
  size = 'medium',
  prominence = 'default',
  // disabled = false,
  className,
  children,
  'data-testid': dataTestId,
}: BadgeProps) => {
  const theme = useTheme();

  const generatedStyles = useMemo(
    () => generateStyles({ prominence, theme }),
    [prominence, theme],
  );

  const sizeValue = SIZES[size];

  return (
    <StyledSpan
      // aria-label={ariaLabel}
      sentimentStyles={generatedStyles['disabled']}
      size={sizeValue}
      // variant="bodyStrong"
      as="span"
      fontSize={TEXT_SIZES[size]}
      // prominence={disabled ? 'weak' : 'default'}
      className={className}
      data-testid={dataTestId}
    >
      {children}
    </StyledSpan>
  );
};
