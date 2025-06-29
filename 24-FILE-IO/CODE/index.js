// __dirname is not enabling in the es moduling
import { writeFile } from 'fs/promises';
import { readFile } from 'fs/promises';
console.log(import.meta.url);
// give me the filepath
// in the es6 miduling
const filepath = new URL('./index.html', import.meta.url);
let content = await readFile(filepath, { encoding: 'utf-8' });
console.log(content);
// all the html will load
//  templated strings
const data = {
  name: 'he',
  company: 'wf',
};
for (const [key, value] of Object.entries(data)) {
  content = content.replace(`{{${key}}}`, value);
  //   found double curcly place in the content of html and replace it with the value of our data by the key
}
console.log(content);
await writeFile(filepath, content);
await writeFile(new URL('./newindex.html', import.meta.url), content);
