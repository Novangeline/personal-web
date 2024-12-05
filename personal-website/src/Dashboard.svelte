<script>
    import { Link } from 'svelte-routing';
</script>

<style>
    .card {
        width: 300px;
    }
</style>

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