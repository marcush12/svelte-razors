<script>
 // cart button
 import CartButton from '../Cart/CartButton.svelte'
 // global store
 import globalStore from '../../stores/globalStore'
 import {link} from 'svelte-routing'

 let openSidebar = globalStore.toggleItem
</script>

<nav class="navbar">
 <div class="nav-center">
  <!-- sidebar toggle -->
  <button 
   class="btn-sidebar-toggle"
   on:click={() => {
    openSidebar('sidebar', true)
   }}
  >
   <i class="fas fa-bars" />
  </button>
  <!-- logo -->
  <a href="/" use:link class='nav-logo'>
   <img class='logo' src="/assets/images/logo.svg" alt="razors logo">
  </a>
  <!-- cart button -->
  <CartButton />
 </div>
</nav>