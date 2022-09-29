<svelte:head>
    <title>DHS TEST</title>
</svelte:head>

<script>
// @ts-nocheck


import Nav from "$lib/components/+nav.svelte";
import {onMount} from "svelte";
import {api_data, personNames, personImages} from "./store.js"

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
// let api_data= [];

// onMount(async () => {
//     const res = await fetch("https://bi6ewrih.directus.app/items/keynotes_person")
//     api_data = await res.json();
//     console.log(api_data)

// }

</script>




<Nav></Nav>


<main>
    <h1>Speakers</h1>
    <ul>
        {#each $personNames as personName}
            <li>{personName}</li>
        {/each}
    </ul>
    <ul>
        {#each $personImages as pic}
            <!-- <img src={"https://bi6ewrih.directus.app/assets/"+{pic}} alt=""> -->
            <img src={"https://bi6ewrih.directus.app/assets/" + pic} alt="">
        {/each}

    </ul>
</main>


<style>
    img {
        width: 200px;
        height: auto;
    }
</style>

<!-- 

    <div class="div">
        {#each api_data as data }
        <img src="{data.image_person}" alt="">
        {/each}
    </div> -->