import React from 'react';
import { TinaContentfulProviderProps } from './TinacmsContentfulProvider';

export interface ContentfulEditingProps extends Omit<TinaContentfulProviderProps, 'children'> {}

export const ContentfulEditingContext = React.createContext<ContentfulEditingProps | null>(
  null
);

export const ContentfulEditingProvider = ContentfulEditingContext.Provider;

export const ContentfulEditingConsumer = ContentfulEditingContext.Consumer;
