import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers';
import { ThemeDecorator } from 'shared/config/storybook';
import { Modal } from './Modal';

export default {
  title: 'widgets/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
  children: 'Modal text',
  isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Modal text',
  isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
