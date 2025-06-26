import {
  Tree,
  formatFiles,
  generateFiles,
  names,
  joinPathFragments,
} from '@nx/devkit';
import { MyComponentGeneratorSchema } from './schema';
import {plural} from 'pluralize';

export async function myComponentGenerator(tree: Tree, options: MyComponentGeneratorSchema) {
  const userDir = process.cwd().split("hotel-reservation-ui")[1];

  const targetPath = joinPathFragments(userDir, names(options.name).fileName);

  generateFiles(
    tree,
    joinPathFragments(__dirname, './files'),
    targetPath,
    {
      ...names(options.name),
      pluralize: plural(options.name),
      tmpl: '',
    }
  );

  await formatFiles(tree);
}

export default myComponentGenerator;
