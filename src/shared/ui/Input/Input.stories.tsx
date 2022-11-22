import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers';
import { ThemeDecorator } from 'shared/config/storybook';
import { Input } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Type text',
  value: '123123',
};

export const PrimaryDarkTheme = Template.bind({});
PrimaryDarkTheme.args = {
  placeholder: 'Type text',
  value: '123123',
};
PrimaryDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
