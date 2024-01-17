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
        if (in_array( 'dc_vendor', (array) $user->roles ) ){
            ?><div class="banner"><h1 class="centered-text">Your Bookshelves</h1></div>
            <div>
                <button id="add-book-button">Add a New Book</button>
            </div>
            <div id="tomc-book-organization--new-book-overlay">
                <h2 class="centered-text">Your Book's Details</h2>
                <form action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="POST">
                    <input type="hidden" name="action" value="addbook">
                    <label for="tomc-book-organization--title">your book's title (required): </label>
                    <input class="tomc-book-organization--new-book centered-text" name="tomc-book-organization--title">
                    <br><br>
                    <label for="tomc-book-organization--subtitle">your book's subtitle: </label>
                    <input class="tomc-book-organization--new-book centered-text" name="tomc-book-organization--subtitle">
                    <br><br>
                    <label for="tomc-book-organization--edition">If this is a new edition of a previously published work, please enter the edition number here. </label>
                    <input class="tomc-book-organization--new-book centered-text" name="tomc-book-organization--edition">
                    <button class="tomc-bookshelves--save-name">save</button>
                </form>
            </div>
            <?php $books = $wpdb->get_results("SELECT b.* from $books_table b JOIN $pennames_books_table pb ON b.id = pb.bookid JOIN $user_pennames_table u on pb.pennameid = u.pennameid WHERE u.userid = $userid;");
            if ($books){
                ?><div class="third-screen">
                    <div class="sub-banner">
                        <h2 class="center-right-center-text">Manage Your Books</h2>
                    </div>
                </div>
            <?php }
        } else {
            ?><div class="half-screen">
                <p class="centered-text">Only authors can create books.</p>
                <p class="centered-text">Looking for books you've purchased? You can find your ebook and audiobook downloads <a href="<?php echo esc_url(site_url('/my-account/downloads'));?>">here</a>.</p>
                <p class="centered-text">As a reader, you can also create and manage <a href="<?php echo esc_url(site_url('/my-bookshelves')); ?>">bookshelves</a>.</p>
            </div>
        <?php }
    } else {
        ?><div class="half-screen">
            <p class="centered-text">Only logged-in authors can create books. <a href="<?php echo esc_url(site_url('/my-account'));?>">Login</a></p>
        </div>
    <?php }
?></main>

<?php get_footer(); ?>