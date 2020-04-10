<script>
 import CartButton from '../Cart/CartButton.svelte'
 import {link} from 'svelte-routing'
 import links from '../../constants/links'
 import LoginLink from '../LoginLink.svelte'
</script>

<nav class="navbar">
 <div class="nav-container">
  <div class="nav-center">
   <!-- nav link -->
   <ul class="nav-links">
    {#each links as navLink}
    <li>
     <a href={navLink.url} use:link >{navLink.text}</a>
    </li>
   {/each}
   </ul>
   
   <!-- nav logo -->
   <a class='nav-logo big-logo' href="/" use:link>
    <img class='logo' src="/assets/images/logo.svg" alt="razor logo">
   </a>
   <!-- cart toggle -->
    <div class='nav-aside'>
      <LoginLink />
     <CartButton />
    </div>   
  </div>
 </div>
</nav>