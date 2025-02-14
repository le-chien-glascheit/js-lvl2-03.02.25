import {NoteApi} from '@dev/tsclient';

const api = new NoteApi();

document.querySelector('#create').addEventListener('click', async(ev) => {
  try {
    const response = await api.createNote({
      note: {
        message: 'frontend note',
        tags: ['#frontend'],
      }
    });
    console.log(response);
  } catch (e) {
    console.warn(e);
  }
});

document.querySelector('#getById').addEventListener('click', async(ev) => {
  try {
    const response = await api.getNoteById({noteId: 1});
    console.log(response);
  } catch (e) {
    debugger;
    console.warn(e);
  }
});