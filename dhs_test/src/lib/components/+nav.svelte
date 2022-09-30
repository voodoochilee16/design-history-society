<nav class = "navbar1">
    <ul class="navbar">
        <a href="/">Home Page</a>
        <a href="/team">Team</a>
    </ul>
</nav>


<slot></slot>

<style>
    .navbar1{
        display: flex;
        justify-content: center;
        margin: 1rem;
    }
    .navbar{
    display: flex;
    gap: 10em;
    font-size: 20px;
    position: fixed;
    margin: auto;
    margin-bottom: 1rem;
    justify-content: center;
    align-items: center;
}
</style>