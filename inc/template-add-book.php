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
            ?><div class="banner"><h1 class="centered-text">Add a Book</h1></div>
            <div id="tomc-book-organization--new-book-forms-section">
                <h2 class="centered-text">Your Book's Details</h2>
                <div class="tomc-book-organization--form" id="tomc-book-organization--add-book" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="POST">
                    <input type="hidden" name="action" value="addbook">
                    <div class="tomc-book-organization--form-div">
                        <label for="tomc-book-organization--title"  class="tomc-book-organization--new-book centered-text">What is your book's title? </label><br>
                        <input type="text" class="tomc-book-organization--new-book centered-text" name="tomc-book-organization--title" id="tomc-book-organization--title" required>
                    </div>
                    <div class="tomc-book-organization--form-div">
                        <p>Does your book have a subtitle?</p>
                        <input type="radio" id="tomc-book-organization--subtitle-yes" name="tomc-book-organization--subtitle" value="yes">
                        <label for="tomc-book-organization--subtitle-yes">yes</label>
                        <input type="radio" id="tomc-book-organization--subtitle-no" name="tomc-book-organization--subtitle" value="no" checked>
                        <label for="tomc-book-organization--subtitle-no">no</label>
                    </div>
                    <div class="tomc-book-organization--form-div hidden" id="tomc-book-organization--subtitle-div">
                        <label for="tomc-book-organization--subtitle">What is your book's subtitle?</label><br>
                        <input type="text" class="tomc-book-organization--new-book centered-text" name="tomc-book-organization--subtitle" id="tomc-book-organization--subtitle">
                    </div>
                    <div class="tomc-book-organization--form-div">
                        <p>Is this book a new edition of a previously published work? (Please note: we consider a new edition to be a book with updated content, not a book that was previously published in another format or on another platform.)</p>
                        <input type="radio" id="tomc-book-organization--new-edition-yes" name="tomc-book-organization--new-edition" value="yes">
                        <label for="tomc-book-organization--new-edition-yes">yes</label>
                        <input type="radio" id="tomc-book-organization--new-edition-no" name="tomc-book-organization--new-edition" value="no" checked>
                        <label for="tomc-book-organization--new-edition-no">no</label>
                    </div>
                    <div class="tomc-book-organization--form-div hidden" id="tomc-book-organization--edition-div">
                        <label for="tomc-book-organization--edition">What is your book's current edition number?</label><br>
                        <input type="text" class="tomc-book-organization--new-book centered-text" name="tomc-book-organization--edition" id="tomc-book-organization--edition">
                    </div>
                    <div class="tomc-book-organization--form-div">
                        <label for="tomc-book-organization--description">Please enter your book's description (up to 1000 characters). </label><br>
                        <textarea class="tomc-book-organization--new-book centered-text" name="tomc-book-organization--description" id="tomc-book-organization--description" required></textarea>
                    </div>
                    <div class="tomc-book-organization--form-div">
                        <label for="tomc-book-organization--excerpt">Please enter a short excerpt from your book (up to 500 characters. You can add longer excerpts on the individual product pages for each format of your book.)</label><br>
                        <textarea class="tomc-book-organization--new-book centered-text" name="tomc-book-organization--excerpt" id="tomc-book-organization--excerpt" required></textarea>
                    </div>     
                    <div class="tomc-book-organization--form-div hidden tomc-book-organization--red-text left-text" id="tomc-book-organization--add-book-errors">
                        <p class="hidden" id="tomc-book-organization--add-book-errors-title">Your book's title cannot be blank.</p>
                        <p class="hidden" id="tomc-book-organization--add-book-errors-description">Add a description to help readers who will love your book find it.</p>
                        <p class="hidden" id="tomc-book-organization--add-book-errors-excerpt">Add an excerpt to help readers get a feel for your book.</p>
                    </div>                                    
                    <button class="tomc-book-organization--save-button" id="tomc-book-organization--save-book" data-user="<?php echo get_current_user_id(); ?>">save and continue</button>
                </div>

                <div class="tomc-book-organization--form hidden" id="tomc-book-organization--book-genre-form" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="POST">
                    <h3>Which medium did you use to create your book? (Please choose only one option.)</h3>
                    <?php $genres1 = $wpdb->get_results("SELECT * from $genres_table WHERE genre_level = 1 ORDER BY genre_name;"); ?>
                    <div class="tomc-book-organization--options-container" id="tomc-book-organization--genres-1">
                        <?php if ($genres1) {
                            foreach($genres1 as $genre1) {
                                ?><span id="tomc-book-organization-genre1-<?php echo $genre1->id; ?>" data-genre-level="1" data-genre-id="<?php echo $genre1->id; ?>" class="tomc-book-organization--option"><?php echo $genre1 ->genre_name;  ?></span>
                            <?php }
                        }
                        ?><div class="hidden tomc-book-organization--red-text left-text" id="tomc-book-organization--genres1-error-section">
                            <p class="tomc-book-organization--genres-error-section-mobile">To add another category, first deselect one of the genres you've already chosen by tapping it again.</p>
                            <p class="tomc-book-organization--genres-error-section-desktop">To add another category, first deselect one of the genres you've already chosen by clicking it again.</p>
                        </div>
                    </div>
                    <h3>What is your book about? (Please select up to two options.)</h3>
                    <?php $genres2 = $wpdb->get_results("SELECT * from $genres_table WHERE genre_level = 2 ORDER BY genre_name;"); ?>
                    <div class="tomc-book-organization--options-container" id="tomc-book-organization--genres-2">
                        <?php if ($genres2) {
                            foreach($genres2 as $genre2) {
                                ?><span id="tomc-book-organization-genre2-<?php echo $genre2->id; ?>" data-genre-level="2" data-genre-id="<?php echo $genre2->id; ?>" class="tomc-book-organization--option" aria-checked="false"><?php echo $genre2 ->genre_name;  ?></span>
                            <?php }
                            ?><span class="tomc-book-organization--add-genre" data-genre-level="2" data-user-id="<?php echo $userid; ?>">add a new genre</span>
                        <?php }
                        ?><div class="hidden tomc-book-organization--red-text left-text" id="tomc-book-organization--genres2-error-section">
                            <p class="tomc-book-organization--genres-error-section-mobile">To add another category, first deselect one of the genres you've already chosen by tapping it again.</p>
                            <p class="tomc-book-organization--genres-error-section-desktop">To add another category, first deselect one of the genres you've already chosen by clicking it again.</p>
                        </div>
                    </div>
                    <h3>What else is it about? (Please select up to ten options.)</h3>
                    <?php $genres3 = $wpdb->get_results("SELECT * from $genres_table WHERE genre_level = 3 ORDER BY genre_name;"); ?>
                    <div class="tomc-book-organization--options-container" id="tomc-book-organization--genres-3">
                        <?php if ($genres3) {
                            foreach($genres3 as $genre3) {
                                ?><span id="tomc-book-organization-genre3-<?php echo $genre3->id; ?>" data-genre-level="3" data-genre-id="<?php echo $genre3->id; ?>" class="tomc-book-organization--option"><?php echo $genre3 ->genre_name;  ?></span>
                            <?php }
                            ?><span class="tomc-book-organization--add-genre" data-genre-level="3" data-user-id="<?php echo $userid; ?>">add a new subgenre</span>
                        <?php }
                        ?><div class="hidden tomc-book-organization--red-text left-text" id="tomc-book-organization--genres3-error-section">
                            <p class="tomc-book-organization--genres-error-section-mobile">To add another category, first deselect one of the genres you've already chosen by tapping it again.</p>
                            <p class="tomc-book-organization--genres-error-section-desktop">To add another category, first deselect one of the genres you've already chosen by clicking it again.</p>
                        </div>
                    </div>     
                    <div class="tomc-book-organization--form-div hidden tomc-book-organization--red-text left-text" id="tomc-book-organization--add-book-genre-errors">
                        <p>Please choose at least one thing that your book is about.</p>
                    </div>  
                    <button class="tomc-book-organization--save-button" id="tomc-book-organization--save-book-genres">save and continue</button>
                </div>

                <div class="tomc-book-organization--form hidden" id="tomc-book-organization--book-pen-name" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="POST">
                    <p>Which name will you be publishing this book under?</p>
                    <select name="tomc-book-organization--book-pen-name">
                        <option value="test">test</option>
                    </select>
                    <button class="tomc-book-organization--save-button-alt" id="tomc-book-organization--new-pen-name">a new pen name</button>
                    <button class="tomc-book-organization--save-button" id="tomc-book-organization--save-book-pen-name">save and continue</button>
                </div>
            </div>

            <div class="tomc-book-organization__overlay" id="tomc-book-organization__genre-overlay">
            <div class="tomc-book-organization__overlay__top">
                <div class="overlay-main-container"> 
                    <!-- <i class="fa fa-window-close tomc-book-organization__overlay__close" aria-hidden = "true"></i> -->
                    <span class="fa fa-window-close tomc-book-organization__overlay__close" aria-hidden = "true" aria-label = "close button">X</span>
                    <div class="overlay-input-container">
                        <input type="text" placeholder = "What's your book about?" id = "tomc-book-organization__new-genre">
                        <p class="hidden" id="tomc-book-organization--genre-overlay-error">Cannot be blank.</p>
                        <button class="tomc-book-organization--save-button" id="tomc-book-organization--new-genre">save</button>
                    </div>
                </div>
            </div>
        <?php } else {
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