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
</style>

<nav class="navbar navbar-expand-sm fixed-top">
    <div class="container-fluid">
        <!-- Links -->
        <ul class="navbar-nav">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src="/profpic.jpg" alt="A photo with the snow in the winter" style="width:40px; height:40px" class="rounded-pill">
            <a class="navbar-brand" href="/">Novangeline Santoso</a>
            <li class="nav-item">
                <a class="nav-link" href="https://linkedin.com/in/novangeline-santoso">LinkedIn</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://github.com/Novangeline">GitHub</a>
            </li>
            <li class="nav-item">
                <Link to="/hobbies" class="nav-link" style="color: #83c5be; text-decoration: none;">What I Do For Fun</Link>
            </li>
        </ul>
    </div>
</nav>