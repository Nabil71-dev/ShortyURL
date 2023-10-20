'use client';

import { CacheProvider } from '@emotion/react';
import { useEmotionCache, MantineProvider } from '@mantine/core';
import { useServerInsertedHTML } from 'next/navigation';
import { ModalsProvider } from '@mantine/modals';
import { NotificationsProvider } from '@mantine/notifications';
import Providers from '@/store/providers';

export default function RootStyleRegistry({ children }) {
  const cache = useEmotionCache();
  cache.compat = true;

 
  useServerInsertedHTML(() => (
    <style
      data-emotion={
        `${cache.key} ${Object.keys(cache.inserted).join(" ")}`
      }
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(" "),
      }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <NotificationsProvider >
          <ModalsProvider>
            <Providers>
              {children}
            </Providers>
          </ModalsProvider>
        </NotificationsProvider>
      </MantineProvider>
    </CacheProvider>
  );
}