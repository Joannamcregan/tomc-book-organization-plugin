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
                    <div class="tomc-book-organization--form-div hidden" id="tomc-book-organization--additional-genres-option">
                        <p>Which category does your book fit into best?</p>
                        <input type="radio" id="tomc-book-organization--fiction" name="tomc-book-organization--fiction" value="fiction">
                        <label for="tomc-book-organization--fiction">Fiction</label>
                        <input type="radio" id="tomc-book-organization--nonfiction" name="tomc-book-organization--nonfiction" value="nonfiction">
                        <label for="tomc-book-organization--nonfiction">Nonfiction</label>
                        <input type="radio" id="tomc-book-organization--poetry" name="tomc-book-organization--poetry" value="poetry">
                        <label for="tomc-book-organization--poetry">Poetry</label>
                    </div>
                    <div class="tomc-book-organization--form-div hidden tomc-book-organization--red-text left-text" id="tomc-book-organization--add-book-errors">
                        <p class="hidden" id="tomc-book-organization--add-book-errors-title">Your book's title cannot be blank.</p>
                        <p class="hidden" id="tomc-book-organization--add-book-errors-description">Add a description to help readers who will love your book find it.</p>
                        <p class="hidden" id="tomc-book-organization--add-book-errors-excerpt">Add an excerpt to help readers get a feel for your book.</p>
                    </div>                                    
                    <button class="tomc-book-organization--save-button" id="tomc-book-organization--save-book" data-user="<?php get_current_user_id(); ?>">save and continue</button>
                </div>

                <?php $genres = $wpdb->get_results("SELECT * from $genres_table WHERE parentid1 is NULL and parentid2 is NULL and parentid3 is NULL;"); ?>
                <div class="tomc-book-organization--form <!--hidden-->" id="tomc-book-organization--book-genre-form" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="POST">
                    <div class="tomc-book-organization--form-div">
                        <p>Please choose the genre that best represents your book.</p>
                        <select name="tomc-book-organization--genre-0">
                            <?php foreach($genres as $genre){
                                ?><option value="<?php echo $genre->genre_name ?>"><?php echo $genre->genre_name ?></option>
                            <?php }                           
                        ?></select>
                    </div>
                    <div id="tomc-book-organization--genre-0-subgenres" class="tomc-book-organization--form-div">
                        <p>Now choose two subgenres to help readers find your book.</p>
                        <select name="tomc-book-organization--genre-0-subgenre-0">
                            <option value="test">test</option>
                        </select>
                        <select name="tomc-book-organization--genre-0-subgenre-1">
                            <option value="test">test</option>
                        </select>  
                    </div>
                    <div class="tomc-book-organization--form-div hidden" id="tomc-book-organization--additional-genres-option">
                        <p>Would you like to add additional genres or subgenres?</p>
                        <input type="radio" id="tomc-book-organization--additional-genre" name="tomc-book-organization--additional-genre" value="genre">
                        <label for="tomc-book-organization--additional-genre">An additional genre</label>
                        <input type="radio" id="tomc-book-organization--additional-subgenre" name="tomc-book-organization--additional-subgenre" value="subgenre">
                        <label for="tomc-book-organization--additional-subgenre">Additional subgenres</label>
                        <input type="radio" id="tomc-book-organization--no-additional-genres" name="tomc-book-organization--no-additional-genres" value="no">
                        <label for="tomc-book-organization--no-additional-genres">Neither</label>
                    </div>
                    <div class="tomc-book-organization--form-div hidden" id="tomc-book-organization--genre-1">
                        <p>Please choose the next genre that best represents your book.</p>
                        <select name="tomc-book-organization--genre-0">
                            <option value="test">test</option>
                        </select>
                    </div>
                    <div id="tomc-book-organization--genre-0-additional-subgenres" class="tomc-book-organization--form-div">
                        <p>Please choose three more subgenres.</p>
                        <select name="tomc-book-organization--genre-0-subgenre-2">
                            <option value="test">test</option>
                        </select>
                        <select name="tomc-book-organization--genre-0-subgenre-3">
                            <option value="test">test</option>
                        </select>  
                        <select name="tomc-book-organization--genre-0-subgenre-4">
                            <option value="test">test</option>
                        </select>  
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