<script>
    import Nav from "$lib/components/+nav.svelte";
    import Headerdesc from "$lib/components/+headerdesc.svelte";
    import Callforpapers from "$lib/components/+callforpapers.svelte";
    import Speakers from "$lib/components/+speakers.svelte";
    import Agenda from "$lib/components/+agenda.svelte";
    import Savethedate from "$lib/components/+savethedate.svelte";
    import Venue from "$lib/components/+venue.svelte";
    import Footer from "$lib/components/+footer.svelte";

</script>

<slot></slot>


<style>
@font-face {
    font-family: 'Untitled-Sans';
    src: url("fonts/UntitledSans-Medium.otf");
    font-weight: 500
}

    /*
  1. Use a more-intuitive box-sizing model.
*/
:global(*, *::before, *::after) {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
:global(*) {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
:global(html), :global(body) {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
:global(body) {
  font-family: "Untitled-Sans";
  background-color: black;
  color: white;
  line-height: 1.8;
  -webkit-font-smoothing: antialiased;
}
/*
  6. Improve media defaults
*/
:global(img, picture, video, canvas, svg) {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
:global(input, button, textarea, select) {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
:global(p, h1, h2, h3, h4, h5, h6) {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
:global(#root, #__next) {
  isolation: isolate;
}
</style>