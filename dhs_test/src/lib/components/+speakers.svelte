
<script>
import {onMount} from "svelte";
import {api_data, personNames, personImages, personDescription} from "/src/routes/team/store.js";



   onMount(async() => {
   fetch ("https://bi6ewrih.directus.app/items/keynotes_person")
   .then(response => response.json())
   .then(data => {
    console.log(data);
    api_data.set(data);
   }).catch(error => {
    console.log(error);
    return [];
   });
});
</script>


<section class="speakers">
    <header><h1>Speakers</h1></header>
   <div class="speakersimg">
    
        <div class="img_2">
           
            {#each $personImages as pic}
                <img src="{"https://bi6ewrih.directus.app/assets/" + pic}" alt="">
            {/each}
        </div>
   </div>
</section>

<slot></slot>

<style>
    .speakers {
        margin-top: 2rem;
    }
    header {
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
    }

    .speakersimg {
        display: flex;
        justify-content: center;
    }
    .img_2{
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto auto;
        column-gap: 20px;
        row-gap: 20px;
    }

    img {
        height: 250px;
        width: auto;
    }

</style>