import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { LoginModal } from './LoginModal';

export default {
  title: 'features/LoginModal',
  component: LoginModal,
  decorators: [StoreDecorator({
    login: {
      username: '123',
      password: '123',
    },
  })],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Primary = Template.bind({});
Primary.args = { isOpen: true };

export const PrimaryDarkTheme = Template.bind({});
PrimaryDarkTheme.args = {
  isOpen: true,
};
PrimaryDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
