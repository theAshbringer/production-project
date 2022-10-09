import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers';
import { ThemeDecorator } from 'shared/config/storybook';
import { Button, ThemeButton } from '.';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'text',
  theme: ThemeButton.CLEAR,
};

export const Solid = Template.bind({});
Solid.args = {
  children: 'text',
  theme: ThemeButton.SOLID,
};

export const SolidDark = Template.bind({});
SolidDark.args = {
  children: 'text',
  theme: ThemeButton.SOLID,
};
SolidDark.decorators = [ThemeDecorator(Theme.DARK)];
