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

    .card {
        width: 300px;
    }

</style>

<nav class="navbar navbar-expand-sm fixed-top">
    <div class="container-fluid">
        <!-- Links -->
        <ul class="navbar-nav">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src="/profpic.jpg" alt="A photo with the snow in the winter" style="width:40px; height:40px" class="rounded-pill">
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

<div class="container mt-5 pt-5">
    <div class="row">
        <!-- Profile Card -->
        <div class="col-md-4">
            <div class="card">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img class="card-img-top" src="/photocard.jpg" alt="Card image" style="width:100%; height:auto;">
                <div class="card-body">
                    <h4 class="card-title">Novangeline Santoso</h4>
                    <p class="card-text">
                        Uni: Monash University<br>
                        Major: Computer Science<br>
                        Hobbies: Golf, shopping, cooking
                    </p>
                    <Link to="/journey" class="btn btn-btn" style="background-color: #006d77; color: white; text-decoration: none;">See My Journey</Link>
                </div>
            </div>
        </div>
        <!-- About Me Section -->
        <div class="col-md-8 text-center" id="main-page">
            <div>
                <br>
                <h1>Hey! Welcome to my personal website</h1><br><br><br>
                <h3>About Me</h3><br>
                <p>
                    I am a third-year Monash University student majoring in advanced computer science and minoring in cybersecurity.
                    I didn't know I loved to code until I wrote my first line of code back in my first year of college. I've been loving
                    it ever since, and that's how I built this website!
                </p><br><br><br>
                <h6>Nothing feels better than finding a bug you've been trying to solve for days!</h6>
            </div>
        </div>
    </div>
</div>