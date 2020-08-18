import { WebPlugin } from '@capacitor/core';
import { JonnyContactPluginPlugin } from './definitions';

export class JonnyContactPluginWeb extends WebPlugin
  implements JonnyContactPluginPlugin {
  constructor() {
    super({
      name: 'JonnyContactPlugin',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async getContacts(filter: string): Promise<{ results: any[] }> {
    console.log('filter: ', filter);
    return {
      results: [
        {
          firstName: 'Dummy',
          lastName: 'Entry',
          telephone: '123456',
        },
      ],
    };
  }
}

const JonnyContactPlugin = new JonnyContactPluginWeb();

export { JonnyContactPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(JonnyContactPlugin);
