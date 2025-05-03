import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio dolorum rem, dolorem cumque voluptatem eum incidunt quas ea magni aperiam blanditiis ratione odio cum consequatur molestiae error exercitationem quia eveniet.',
    },
};
