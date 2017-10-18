import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Box, Input, Label, theme } from '../src'

storiesOf('Input', module)
  .add('Input component', withInfo({
    inline: true,
    text: 'Simple styled input component that accepts a color and whether or not to show an error container.'
  })(() => (
    <Label m={3}>
      Label Component
    </Label>
  )))
  .add('Colors', () => (
    <Box width={400}>
      <Input mb={3} id="input-colors-1" placeholder="No color"/>
      <Input mb={3} id="input-colors-2" color={theme.colors.red} placeholder="Red"/>
      <Input mb={3} id="input-colors-3" color={theme.colors.green} placeholder="Green"/>
      <Input mb={3} id="input-colors-4" color={theme.colors.orange} placeholder="Orange"/>
      <Input mb={3} id="input-colors-5" color={theme.colors.blue} placeholder="Blue"/>
    </Box>
  ))
  .add('With external label', () => (
    <Box width={400}>
      <Label fontSize={4} htmlFor="sample-input">Label!</Label>
      <Input id="sample-input" placeholder="Click the label"/>
    </Box>
  ))
