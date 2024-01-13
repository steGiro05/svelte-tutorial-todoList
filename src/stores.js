import {writable} from 'svelte/store'

export const items=writable([
{
    id:1,
    text: 'Take out the bins',
    completed: false,
},

{
    id:1,
    text: 'Go to school',
    completed: true,
}

])