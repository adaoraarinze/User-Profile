import * as React from 'react';
import SelectUnstyled, {
  SelectUnstyledProps,
  selectUnstyledClasses,
} from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';

const StyledButton = styled('button')(
  ({ }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: bold;
  font-color: #0d324d;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 60px;
  background: #ffffff66;
  border: 3px solid #0d324d;
  border-radius: 0.75em;
  margin-top: 10px;
  margin-right: 12px;
  padding: 10px;
  text-align: center;
  line-height: 1.5;
  color: #0d324d;

  &:hover {
    border-color: #26618c;
  }

  &.${selectUnstyledClasses.focusVisible} {
    outline: 3px solid #f2b1b1;
  }

  &.${selectUnstyledClasses.expanded} {
  &::after {
    content: '▾';
    float: right;
  }
  `,
);

const StyledListbox = styled('ul')(
  ({ }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px 0;
  min-width: 320px;
  background: #cad4db;
  border: 1px solid #0d324d;
  border-radius: 0.75em;
  color: black;
  overflow: auto;
  outline: 0px;
  `,
);

const StyledOption = styled(OptionUnstyled)(
  ({ }) => `
  list-style: none;
  padding: 8px;
  border-radius: 0.45em;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: #0d324d7c;
    color: #0d324d;
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: #0d324d7c;
    color: #0d324d;
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: #0d324d7c;
    color: #0d324d;
  }

  &.${optionUnstyledClasses.disabled} {
    color: #0d324d;
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: #86a7bf7c;
    color: #0d324d;
  } 
  `,
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const CustomSelect = React.forwardRef(function CustomSelect<TValue>(
  props: SelectUnstyledProps<TValue>,
  ref: React.ForwardedRef<HTMLUListElement>,
) {
  const components: SelectUnstyledProps<TValue>['components'] = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} ref={ref} components={components} />;
}) as <TValue>(
  props: SelectUnstyledProps<TValue> & React.RefAttributes<HTMLUListElement>,
) => JSX.Element;

export const Roles = ({
}) => {
  return (
    <CustomSelect defaultValue={0}>
        <StyledOption value={0}>
            <em>select</em>
        </StyledOption>
      <StyledOption value={1}>player</StyledOption>
      <StyledOption value={2}>caster</StyledOption>
      <StyledOption value={3}>spectator</StyledOption>
      <StyledOption value={4}>commentator</StyledOption>
    </CustomSelect>
  );
}