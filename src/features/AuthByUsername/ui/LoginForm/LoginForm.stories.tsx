import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers';
import { ThemeDecorator, StoreDecorator } from 'shared/config/storybook';
import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  decorators: [StoreDecorator({
    login: {
      username: '123',
      password: '123',
    },
  })],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const PrimaryDarkTheme = Template.bind({});
PrimaryDarkTheme.args = {};
PrimaryDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [StoreDecorator({
  login: {
    username: '123',
    password: '123',
    error: 'Ошибочка вышла',
  },
})];

export const WithErrorDarkTheme = Template.bind({});
WithErrorDarkTheme.args = {};
WithErrorDarkTheme.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  login: {
    username: '123',
    password: '123',
    error: 'Ошибочка вышла',
  },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
  login: {
    isLoading: true,
  },
})];
