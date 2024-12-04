<script>
    import { Link } from 'svelte-routing';
</script>

<style>

    nav {
        background-color: #006d77;
    }

    .navbar-brand, .nav-link {
        color: #83c5be;
        text-decoration: none;
    }

    .carousel {
        max-width: 800px;
        max-height: 600px;
        margin: auto;
    }

    .carousel-item img {
        width: 100%;
        height: auto;
    }
</style>

<nav class="navbar navbar-expand-sm fixed-top">
    <div class="container-fluid">
        <ul class="navbar-nav">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src="/profpic.jpg" alt="Profile Picture" style="width:40px; height:40px" class="rounded-pill">
            <a class="navbar-brand" href="/">Novangeline Santoso</a>
            <li class="nav-item">
                <a class="nav-link" href="https:/linkedin.com/in/novangeline-santoso">LinkedIn</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https:/github.com/Novangeline">GitHub</a>
            </li>
            <li class="nav-item">
                <Link to="/hobbies" class="nav-link" style="color: #83c5be; text-decoration: none;">What I Do For Fun</Link>
            </li>
        </ul>
    </div>
</nav>

<div id="demo" class="carousel slide shadow-lg" data-bs-ride="carousel">
    <!-- Indicators -->
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    </div>

    <!-- Slideshow -->
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="golf.jpg" alt="Golf">
            <div class="carousel-caption">
                <h3>Golfing</h3>
                <p>I love to hit the driving range on my free time!</p>
            </div>
        </div>
        <div class="carousel-item">
            <img src="snow.jpg" alt="Snow">
            <div class="carousel-caption">
                <h3>Roadtrips</h3>
                <p>Short escapes are the best!</p>
            </div>
        </div>
        <div class="carousel-item">
            <img src="concert.jpg" alt="Concert">
            <div class="carousel-caption">
                <h3>Concerts</h3>
                <p>I'm a concert girlie!</p>
            </div>
        </div>
    </div>

    <!-- Controls -->
    <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
    </button>
</div>

<div class="container-fluid mt-3">
    <h3>More photos picturing my lifestyle!</h3>
</div>
