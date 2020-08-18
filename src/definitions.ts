declare module '@capacitor/core' {
  interface PluginRegistry {
    JonnyContactPlugin: JonnyContactPluginPlugin;
  }
}

export interface JonnyContactPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  getContacts(filter: string): Promise<{ results: any[] }>;
}
