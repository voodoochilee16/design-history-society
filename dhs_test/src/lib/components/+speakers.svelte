<section class="speakers">
    <header><h1>Speakers</h1></header>
   <div class="speakersimg">
    <figure>
        <img src="" alt="">
        <figcaption>speaker1</figcaption>
    </figure>
    <figure>
        <img src="" alt="">
        <figcaption>speaker2</figcaption>
    </figure>
    <figure>
        <img src="" alt="">
        <figcaption>Speaker3</figcaption>
    </figure>
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
    .speakersimg{
        display: flex;
        gap: 2rem;
        justify-content: center;
    }

</style>