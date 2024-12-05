<script>
    import { Router, Route, Link } from 'svelte-routing';
    import Dashboard from './Dashboard.svelte';
    import Hobbies from './Hobbies.svelte';
    import Journey from './Journey.svelte';
    import Header from './Header.svelte';
</script>

<!-- Router for Page Navigation -->
<Router>
    <!-- Global header component -->
    <Header /> 

    <Route path="/" component={Dashboard} />
    <Route path="/hobbies" component={Hobbies} />
    <Route path="/journey" component={Journey} />

</Router>