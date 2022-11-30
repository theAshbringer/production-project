import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers';
import { ThemeDecorator } from 'shared/config/storybook';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const LightTheme = Template.bind({});
LightTheme.args = {
  title: 'Title',
  textContent: 'Text',
};

export const ErrorTheme = Template.bind({});
ErrorTheme.args = {
  title: 'Title',
  textContent: 'Text',
  theme: TextTheme.ERROR,
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  title: 'Title',
  textContent: 'Text',
};
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  textContent: 'Text',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Title',
};
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  textContent: 'Text',
};
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
