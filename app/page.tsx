"use client";

import { Card, Title, Text } from '@tremor/react';
import WorldPresetJsonEditor from './components/jsoneditor/jsoneditor';
import React, { useContext } from 'react';
import { themeContext, useTheme } from './hooks/useTheme';

export default function IndexPage() {
  const theme = useContext(themeContext);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title style={{ color: theme.dark ? "black" : "white" }}>Edit json</Title>
      <Text style={{ color: theme.dark ? "black" : "white" }}>設定ファイルを編集します</Text>
      <Card  className="mt-6">
        <WorldPresetJsonEditor />
      </Card>
    </main>
  );
}
