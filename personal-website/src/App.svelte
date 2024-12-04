<script>
    import { Router, Route, Link } from 'svelte-routing';
    import Dashboard from './Dashboard.svelte';
    import Hobbies from './Hobbies.svelte';
    import Journey from './Journey.svelte';
</script>

<Router>
	<nav>
		<!-- Use <Link> components for navigation -->
		<Link to="/">Home</Link> |
		<Link to="/hobbies">What I Do For Fun</Link> |
		<Link to="/journey">Journey</Link>
	</nav>
    <Route path="/" component={Dashboard} />
    <Route path="/hobbies" component={Hobbies} />
    <Route path="/journey" component={Journey} />
</Router>