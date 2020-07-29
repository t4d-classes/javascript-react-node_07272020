import React from 'react';

import { useColorToolStoreContext } from '../contexts/colorToolContext';
import { ColorTool } from '../components/ColorTool';

export const ColorToolContainer = () => {

  const colorToolStore = useColorToolStoreContext();

  const [ colors, appendColor ] = colorToolStore;

  return <ColorTool colors={colors} onAppendColor={appendColor} />;
};