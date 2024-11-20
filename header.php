<! DOCTYPE html>
<html <?php language_attributes();?>>
<head>
    <meta charset='<?php bloginfo('charset'); ?>'>
    <meta name = "viewport" content = "width=device-width", initial-scale=1>
    <script src="https://kit.fontawesome.com/9d40013081.js" crossorigin="anonymous"></script>
    <title><?php wp_title('|', true, 'right'); ?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz@6..12&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<header class="header--top">
  <div class="top-nav-container">
    <a href="#" class="site-header__menu-trigger fa fa-bars" aria-label="menu" tabindex="-1"><i aria-label="close overlay"></i></a>
    <a href="<?php echo esc_url(site_url()) ?>"><img class="logo-image" src="<?php echo get_theme_file_uri('/images/logo.jpg'); ?>" alt="Trunk of My Car Cooperative" /></a>
    <div class="top-nav-section" id="top-nav-right">
      <a href="<?php echo esc_url(site_url('/search'));?>" class="js-search-trigger" aria-label="search"><i class="fa fa-search" aria-label="search"></i></a>
      <?php if (is_user_logged_in()){
        ?><a href="#" class="js-settings-trigger" aria-label="settings"><i class="fa-solid fa-gear" aria-label="settings"></i></a>
      <?php } ?>
      <a class="glowing-text" href="<?php echo wc_get_cart_url(); ?>" aria-label="shopping cart"><i class="fa-solid fa-cart-shopping" aria-label="cart"></i></a>
    </div>
  </div>
</header>
<div class="header--main">      
  <nav class="main-nav" aria-label="main navigation bar top row">  
    <div class="nav-container site-header__menu group">    
      <a href="<?php echo esc_url(site_url('/newly-added-books'));?>">Shop</a>
      <a href="<?php echo esc_url(site_url('/browse-by-genre'));?>">Genres</a> 
      <?php if (is_user_logged_in()){ 
        ?><a href="<?php echo esc_url(site_url('/my-bookshelves')); ?>">My Bookshelves</a>
        <a href="<?php echo esc_url(site_url('/my-account/downloads'));?>">My Book Downloads</a>
        <?php $user = wp_get_current_user();
        if (in_array( 'dc_vendor', (array) $user->roles )){
          ?><a href="<?php echo esc_url(site_url('/add-a-book'));?>">Add Book Info</a>
          <a href="<?php echo esc_url(site_url('/my-books'));?>">Books By Me</a>
        <?php }
      } else {
        ?><a href="<?php echo esc_url(site_url('/my-account'));?>">Login</a>
      <?php }
    ?></div>
  </nav>
</div>
<div class="header--sub">      
  <nav class="main-nav" aria-label="main navigation bar bottom row">  
    <div class="nav-container site-header__menu group">   
      <?php if (is_user_logged_in()){
        $user = wp_get_current_user();
        if (in_array( 'dc_vendor', (array) $user->roles )){
          ?><a href="<?php echo esc_url(site_url('/dashboard'));?>">Creator Dashboard</a>
        <?php }
        // $tomc_user = get_userdata(get_current_user_id());
        $user = wp_get_current_user();
        $tomc_user = get_userdata($user->ID);
        $tomc_username = $tomc_user->user_login;
        ?><a href="<?php echo esc_url(site_url('/members') . '/' . str_replace(' ', '-', $tomc_username)); ?>">
          My Profile
        </a>
      <?php }
      ?><a href="<?php echo esc_url(site_url('/coop'));?>">The Co-op</a>
      <a href="<?php echo esc_url(site_url('/services'));?>">Creative Services</a>
      <?php if (is_user_logged_in()){ ?><a href="<?php echo esc_url(site_url('/discussions')); ?>">Discussions</a><?php } ?>
      <!-- <a href="<?php echo esc_url(get_post_type_archive_link('event')); ?>">Events</a> -->
    </div>
  </nav>
</div>

