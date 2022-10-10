import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers';
import { ThemeDecorator } from 'shared/config/storybook';
import { Button, ButtonTheme } from '.';
import { ButtonSize } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryTheme = Template.bind({});
PrimaryTheme.args = {
  children: 'text',
};

export const ClearTheme = Template.bind({});
ClearTheme.args = {
  children: 'text',
  theme: ButtonTheme.CLEAR,
};

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
  children: 'text',
  theme: ButtonTheme.BACKGROUND,
};

export const BackgroundDarkTheme = Template.bind({});
BackgroundDarkTheme.args = {
  children: 'text',
  theme: ButtonTheme.BACKGROUND,
};
BackgroundDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
  children: 'text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const BackgroundInvertedDarkTheme = Template.bind({});
BackgroundInvertedDarkTheme.args = {
  children: 'text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};
BackgroundInvertedDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.M,
  square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.L,
  square: true,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.XL,
  square: true,
};

export const Square = Template.bind({});
Square.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  round: false,
};

export const RoundCorners = Template.bind({});
RoundCorners.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  round: true,
};

export const RoundAndSquare = Template.bind({});
RoundAndSquare.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  round: true,
  square: true,
};
