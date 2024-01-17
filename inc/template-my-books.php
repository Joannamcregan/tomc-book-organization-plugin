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
            ?><div class="banner"><h1 class="centered-text">Your Books</h1></div>
            <div>
                <button id="add-book-button">Add a New Book</button>
            </div>
            <div id="tomc-book-organization--new-book-overlay">
                <h2 class="centered-text">Your Book's Details</h2>
                <form class="tomc-book-organization--form" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="POST">
                    <input type="hidden" name="action" value="addbook">
                    <label for="tomc-book-organization--title"  class="tomc-book-organization--new-book centered-text">What is your book's title? </label><br>
                    <input type="text" class="tomc-book-organization--new-book centered-text" name="tomc-book-organization--title">
                    <br><br>
                    <p>Does your book have a subtitle?</p>
                    <input type="radio" id="tomc-book-organization--subtitle-yes" name="tomc-book-organization--subtitle" value="yes">
                    <label for="tomc-book-organization--subtitle-yes">yes</label>
                    <input type="radio" id="tomc-book-organization--subtitle-no" name="tomc-book-organization--subtitle" value="no">
                    <label for="tomc-book-organization--subtitle-no">no</label>
                    <br><br><br>
                    <label for="tomc-book-organization--subtitle">What is your book's subtitle?</label><br>
                    <input type="text" class="tomc-book-organization--new-book centered-text" name="tomc-book-organization--subtitle">
                    <br><br>
                    <label for="tomc-book-organization--image">Please upload a main image for your book. If you like, you can choose different images to use on the individual product pages for each format of your book.</label><br>
                    
                    <br><br>
                    <p>Is this book a new edition of a previously published work? (Please note: we consider a new edition to be a book with updated content, not a book that was previously published in another format or on another platform.)</p>
                    <input type="radio" id="tomc-book-organization--new-edition-yes" name="tomc-book-organization--new-edition" value="yes">
                    <label for="tomc-book-organization--new-edition-yes">yes</label>
                    <input type="radio" id="tomc-book-organization--new-edition-no" name="tomc-book-organization--new-edition" value="no">
                    <label for="tomc-book-organization--new-edition-no">no</label>
                    <br><br><br>
                    <label for="tomc-book-organization--edition">What is your book's current edition number?</label><br>
                    <input type="text" class="tomc-book-organization--new-book centered-text" name="tomc-book-organization--edition">
                    <br><br>
                    <label for="tomc-book-organization--description">Please enter your book's description (up to 1000 characters). </label><br>
                    <textarea class="tomc-book-organization--new-book centered-text" name="tomc-book-organization--description"></textarea>
                    <br><br>
                    <label for="tomc-book-organization--excerpt">Please enter an excerpt from your book (up to 500 characters). </label><br>
                    <textarea class="tomc-book-organization--new-book centered-text" name="tomc-book-organization--excerpt"></textarea>
                    
                    <label for="tomc-book-organization--book-pen-name">Which pen name will you be using for this book? </label><br>
                    <label for="tomc-book-organization--book-coauthors">Did you write this book with any co-authors? </label><br>
                    <button class="tomc-book-organization--next-button">next</button>
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