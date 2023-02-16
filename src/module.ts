import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { GreetingsPanel } from './components/SimplePanel';
import { TagsEditor } from 'components/TagsEditor';

export const plugin = new PanelPlugin<SimpleOptions>(GreetingsPanel).setPanelOptions((builder) => {
  return builder
    .addTextInput({
      path: 'text',
      name: 'Simple text option',
      description: 'Description of panel option',
      defaultValue: 'Default value of text input option',
    })
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
        "Have beautiful day!"
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
