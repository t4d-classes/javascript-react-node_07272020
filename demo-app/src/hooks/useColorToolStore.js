import { useList } from './useList';

// all of the Color Tool application state is going to be
// managed here...
export const useColorToolStore = (initialColors = []) => {

  // picture having additional state and functionality for the color tool

  const [ colors, appendColor, removeColor ] = useList(initialColors.concat());

  return [
    colors,
    appendColor,
    removeColor,
  ];

};