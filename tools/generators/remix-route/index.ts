import { Tree, formatFiles, readProjectConfiguration, generateFiles, joinPathFragments } from '@nrwl/devkit';

export default async function (tree: Tree, schema: any) {
  const appRoot = readProjectConfiguration(tree, schema.name).root;
  generateFiles(
    tree, // the virtual file system
    joinPathFragments(__dirname, './files'), // path to the file templates
    appRoot + '/app/routes', // destination path of the files
    {
      name: schema.name,
      route: schema.route,
      tpl: ''
    } // config object to replace variable in file templates
  );  
  await formatFiles(tree);
}
