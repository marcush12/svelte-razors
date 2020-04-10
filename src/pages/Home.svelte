<script>
 import Hero from '../components/Hero.svelte'
 import {link} from 'svelte-routing'
 // featured products
 import Featured from '../components/Products/Featured.svelte' 
</script>

<Hero>
 <a class="btn btn-primary btn-hero" href='/products' use:link>shop now</a>
</Hero>
<Featured title = 'featured products' />