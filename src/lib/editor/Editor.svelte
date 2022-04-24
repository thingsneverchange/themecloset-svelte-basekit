<script type="ts">
  // @ts-nocheck

  import '$lib/assets/editor/module/redactorx.min.css';
  import { onMount } from 'svelte'
  import { createEventDispatcher } from 'svelte';

  export let placeholder : string = 'Wrtie some texts...';
  export let value : string = '';
  let editorEntry : HTMLElement;

  const dispatch = createEventDispatcher();
  const change = () => dispatch('change');

  onMount( async () => {
    if(editorEntry && window){
      let RedactorModule = await import('$lib/assets/js/redactorx.min.js')

      RedactorModule.default(editorEntry,{
      source: false,
      editor: {
          minHeight: '200px',
          maxHeight: '200px'
      },
      placeholder: placeholder ? placeholder  : '',
      subscribe: {
        'editor.change': (event: any) => { // should be any as redactor doesn't support ts
						value = event.params.html
					},
      }
      });
    }
  })
</script>
<textarea style="display:none" id="entry" on:change="{change}" bind:this="{editorEntry}">
  {value}
</textarea>
