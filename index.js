import { InMemoryNotesStore } from './notes-memory.js';
import * as util from 'util';

const NotesStore = new InMemoryNotesStore();

process.on('uncaughtException', function(err) { 
  console.error(`System crashed due to unhandled exception!!! - ${(err.stack || err)}`); 
});

process.on('unhandledRejection', (reason, p) => {
  console.error(`System crashed due to unhandled rejection at: ${util.inspect(p)} reason: ${reason}`);
 }); 

(async () => {
  console.loag(await NotesStore.create('Andre', 'Arquiteto', '5 estrelas'));
  console.log(await NotesStore.create('Thatty', 'Professora', '7 estrelas'));
  console.log(await NotesStore.keylist());
  console.log(await NotesStore.count());
})();
console.loa2g();
