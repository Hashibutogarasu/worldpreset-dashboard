"use client";

import React from "react";
import { JsonEditorScreen } from '../components/screen/jsoneditorscreen';
import { Screen } from "@/components/screen/screen";

export default function IndexPage() {
  return (
    <Screen>
      <JsonEditorScreen />
    </Screen>
  );
}
