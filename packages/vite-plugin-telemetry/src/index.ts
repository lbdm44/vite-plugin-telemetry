import type { Plugin } from 'vite';

const VITE_PLUGIN_NAME = 'vite-plugin-telemetry';

export default function TelemetryPlugin(): Plugin {
  return {
    name: VITE_PLUGIN_NAME,
  };
}
