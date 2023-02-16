import { PanelPlugin } from '@grafana/data';
import { GreetingsOptions } from './types';
import { GreetingsPanel } from './components/GreetingsPanel';
import { TagsEditor } from 'components/TagsEditor';

export const plugin = new PanelPlugin<GreetingsOptions>(GreetingsPanel).setPanelOptions((builder) => {
  return builder
    .addCustomEditor({
      id: 'phrases',
      name: 'Phrases',
      path: 'phrases',
      description: 'Phrases that are randomly selected when dashboard is loaded',
      editor: TagsEditor,
      settings: {
        inputPlaceholder: "Add phrase"
      },
      defaultValue: [
        "Greetings, fellow traveler!",
        "Cheerio!",
        "Have beautiful day!",
        "Keep on rocking!"
      ]
    })
    .addCustomEditor({
      id: 'imageFilter',
      name: 'Image Filter',
      path: 'imageFilter',
      description: 'Keywords that are used when fetching images',
      editor: TagsEditor,
      settings: {
        inputPlaceholder: "Add image filter"
      },
      defaultValue: []
    });
});
