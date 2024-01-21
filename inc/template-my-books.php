<?php global $wpdb;
$books_table = $wpdb->prefix .  "tomc_books";
$product_types_table = $wpdb->prefix . "tomc_product_types";
$book_products_table = $wpdb->prefix . "tomc_book_products";
$pennames_table = $wpdb->prefix . "tomc_pennames";
$user_pennames_table = $wpdb->prefix . "tomc_user_pennames";
$pennames_books_table = $wpdb->prefix . "tomc_pennames_books";
$book_readalikes_table = $wpdb->prefix . "tomc_book_readalikes";
$genres_table = $wpdb->prefix . "tomc_genres";
$book_genres_table = $wpdb->prefix . "tomc_book_genres";
$users_table = $wpdb->prefix . "users";
$posts_table = $wpdb->prefix . "posts";
$userid = get_current_user_id();
$user = wp_get_current_user();

get_header();

?><main class="half-screen">    
    <?php if (is_user_logged_in()){
        ?><div class="banner">
            <h2 class="centered-text">Manage Your Books</h2>
        </div>
        <?php if (in_array( 'dc_vendor', (array) $user->roles ) ){
            $books = $wpdb->get_results("SELECT b.* from $books_table b JOIN $pennames_books_table pb ON b.id = pb.bookid JOIN $user_pennames_table u on pb.pennameid = u.pennameid WHERE u.userid = $userid;");
            if ($books){
                ?><div class="third-screen">
                    <p>books will go here</p>
                </div>
            <?php } else {
                ?><div class="generic-content">
                    <p>Looks like you haven't added any searchable books yet.</p>
                    <p>You may have already added ebooks, audiobooks, or physical books as products, but you need to add a searchable book to link your products to so that readers can find them. <a href="<?php echo esc_url(site_url('/add-a-book')); ?>">Add books</a></p>
                </div>
            <?php }
        } else {
            ?><div class="half-screen">
                <p class="centered-text">Only authors can edit books.</p>
                <p class="centered-text">Looking for books you've purchased? You can find your ebook and audiobook downloads <a href="<?php echo esc_url(site_url('/my-account/downloads'));?>">here</a>.</p>
                <p class="centered-text">As a reader, you can also create and manage <a href="<?php echo esc_url(site_url('/my-bookshelves')); ?>">bookshelves</a>.</p>
            </div>
        <?php }
    } else {
        ?><div class="half-screen">
            <p class="centered-text">Only logged-in authors can edit books. <a href="<?php echo esc_url(site_url('/my-account'));?>">Login</a></p>
        </div>
    <?php }
?></main>

<?php get_footer(); ?>