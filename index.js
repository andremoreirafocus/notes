import { InMemoryNotesStore } from './notes-memory.js';
const NotesStore = new InMemoryNotesStore();

(async () => {
  console.log(await NotesStore.create('Andre', 'Arquiteto', '5 estrelas'));
  console.log(await NotesStore.create('Thatty', 'Professora', '7 estrelas'));
  console.log(await NotesStore.keylist());
  console.log(await NotesStore.count());
})();
