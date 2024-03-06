<?php global $wpdb;
$books_table = $wpdb->prefix .  "tomc_books";
// $product_types_table = $wpdb->prefix . "tomc_product_types";
// $book_products_table = $wpdb->prefix . "tomc_book_products";
// $pennames_table = $wpdb->prefix . "tomc_pennames";
// $user_pennames_table = $wpdb->prefix . "tomc_user_pennames";
// $pennames_books_table = $wpdb->prefix . "tomc_pennames_books";
// $book_readalikes_table = $wpdb->prefix . "tomc_book_readalikes";
// $genres_table = $wpdb->prefix . "tomc_genres";
// $book_genres_table = $wpdb->prefix . "tomc_book_genres";
// $users_table = $wpdb->prefix . "users";
// $posts_table = $wpdb->prefix . "posts";
$userid = get_current_user_id();
$user = wp_get_current_user();

get_header();

?><main class="half-screen">    
    <?php if (is_user_logged_in()){
        ?><div class="banner"><h1 class="centered-text">Manage Your Books</h1></div>
        <?php if (in_array( 'dc_vendor', (array) $user->roles ) ){
            $books = $wpdb->get_results("SELECT * from $books_table WHERE createdby = $userid ORDER BY title;");
            if ($books){
                ?><div class="third-screen">
                    <h2 class="centered-text">Choose a Book to Edit</h2>
                    <?php foreach($books as $book){
                        ?><div class="tomc-book-organization--book-to-edit page-accent-alt-thin">
                            <p class="centered-text"><strong class="tomc-book-organization--book-to-edit-title tomc-book-options--cursor-pointer"><?php echo $book->title; ?></strong></p>
                            <div class="tomc-book-organization--edit-book-options hidden" data-book="<?php echo $book->id; ?>">
                                <p class="transparent-stripe-0 centered-text tomc-book-organization--blue-text tomc-book-options--cursor-pointer tomc-book-organization--edit-basic-info">basic info</p>
                                <p class="transparent-stripe-1 centered-text tomc-book-organization--blue-text tomc-book-options--cursor-pointer tomc-book-organization--edit-languages">languages</p>
                                <p class="transparent-stripe-2 centered-text tomc-book-organization--blue-text tomc-book-options--cursor-pointer tomc-book-organization--edit-genres">genres</p>
                                <p class="transparent-stripe-0 centered-text tomc-book-organization--blue-text tomc-book-options--cursor-pointer tomc-book-organization--edit-character-identities">character identities</p>
                                <p class="transparent-stripe-1 centered-text tomc-book-organization--blue-text tomc-book-options--cursor-pointer tomc-book-organization--edit-readalikes">read-alikes</p>
                                <p class="transparent-stripe-2 centered-text tomc-book-organization--blue-text tomc-book-options--cursor-pointer tomc-book-organization--edit-content-warnings">content warnings</p>
                                <p class="transparent-stripe-0 centered-text tomc-book-organization--blue-text tomc-book-options--cursor-pointer tomc-book-organization--edit-linked-products">linked products</p>
                            </div>
                        </div>
                    <?php }

                    ?><div class="tomc-book-organization__overlay" id="tomc-book-organization__edit-basic-info-overlay">
                        <div class="overlay-main-container">
                            <br>
                            <i class="fa fa-window-close tomc-book-organization__overlay__close tomc-book-organization--close-overlay" aria-hidden = "true" id="tomc-book-organization__editing-overlay-close"></i>
                            <!-- <span class="fa fa-window-close tomc-book-organization__overlay__close tomc-book-organization--close-overlay" aria-hidden = "true" aria-label = "close button" id="tomc-book-organization__edit-basic-info-overlay-close">X</span> -->
                            <div class="tomc-book-organization__edit-basic-info-container tomc-book-organization__container tomc-book-org-html"></div>
                            <div class="tomc-book-organization--form-div hidden tomc-book-organization--red-text centered-text" id="tomc-book-organization--edit-basic-info-errors">
                                <p class="hidden" id="tomc-book-organization--edit-basic-info-errors-title">Your book's title cannot be blank.</p>
                                <p class="hidden" id="tomc-book-organization--edit-basic-info-errors-description">Add a description to help readers who will love your book find it.</p>
                                <p class="hidden" id="tomc-book-organization--edit-basic-info-errors-excerpt">Add an excerpt to help readers get a feel for your book.</p>
                                <p class="hidden" id="tomc-book-organization--edit-basic-info-no-changes">No changes appear to have been made.</p>
                            </div>
                            <button class="tomc-book-organization--save-button" id="tomc-book-organization--save-basic-info-edits">save</button>
                        </div>
                    </div>

                    <div class="tomc-book-organization__overlay" id="tomc-book-organization__edit-languages-overlay">
                        <div class="overlay-main-container"> 
                            <br><br>
                            <i class="fa fa-window-close tomc-book-organization__overlay__close tomc-book-organization--close-overlay" aria-hidden = "true" id="tomc-book-organization__editing-overlay-close"></i>
                            <!-- <span class="fa fa-window-close tomc-book-organization__overlay__close tomc-book-organization--close-overlay" aria-hidden = "true" aria-label = "close button" id="tomc-book-organization__edit-languages-overlay-close">X</span> -->
                            <h3 class="centered-text">Languages</h3>
                            <div class="tomc-book-organization__edit-languages-container tomc-book-organization--options-container tomc-book-org-html"></div>
                            <div class="hidden tomc-book-organization--red-text tomc-book-organization--languages-error-section">
                                <p class="centered-text tomc-book-organization--genres-error-section-mobile">To add another language, first deselect one of the identities you've already chosen by tapping it again.</p>
                                <p class="centered-text tomc-book-organization--genres-error-section-desktop">To add another language, first deselect one of the identities you've already chosen by clicking it again.</p>
                            </div>
                            <div class="centered-text tomc-book-organization--form-div hidden tomc-book-organization--red-text" id="tomc-book-organization--edit-languages-errors">
                                <p class="hidden" id="tomc-book-organization--edit-no-languages-selected">Please choose as least one language to ensure your book shows up in search results.</p>
                                <p class="hidden" id="tomc-book-organization--edit-languages-no-changes">No changes appear to have been made.</p>
                            </div>
                            <button class="tomc-book-organization--save-button" id="tomc-book-organization--save-languages-edits">save</button>
                        </div>
                    </div>

                    <div class="tomc-book-organization__overlay" id="tomc-book-organization__edit-genres-overlay">
                        <div class="overlay-main-container">
                            <br><br>
                            <i class="fa fa-window-close tomc-book-organization__overlay__close tomc-book-organization--close-overlay" aria-hidden = "true" id="tomc-book-organization__editing-overlay-close"></i>
                            <!-- <span class="fa fa-window-close tomc-book-organization__overlay__close tomc-book-organization--close-overlay" aria-hidden = "true" aria-label = "close button" id="tomc-book-organization__edit-genres-overlay-close">X</span> -->
                            <div class="tomc-book-organization__edit-genres-container">
                                <h3 class="centered-text">Genres</h3>
                                <div class="tomc-book-organization__edit-genres-container--1 tomc-book-organization--options-container tomc-book-org-html"></div>
                                <h3 class="centered-text">Subgenres</h3>
                                <div class="tomc-book-organization__edit-genres-container--2 tomc-book-organization--options-container tomc-book-org-html"></div>
                                <div class="hidden tomc-book-organization--red-text tomc-book-organization--genres2-error-section centered-text">
                                    <p class="tomc-book-organization--genres-error-section-mobile">To add another category, first deselect one of the genres you've already chosen by tapping it again.</p>
                                    <p class="tomc-book-organization--genres-error-section-desktop">To add another category, first deselect one of the genres you've already chosen by clicking it again.</p>
                                    <br><br>
                                </div>
                                <h3 class="centered-text">Topics</h3>
                                <div class="tomc-book-organization__edit-genres-container--3 tomc-book-organization--options-container tomc-book-org-html"></div>
                                <div class="hidden tomc-book-organization--red-text tomc-book-organization--genres3-error-section centered-text">
                                    <p class="tomc-book-organization--genres-error-section-mobile">To add another category, first deselect one of the genres you've already chosen by tapping it again.</p>
                                    <p class="tomc-book-organization--genres-error-section-desktop">To add another category, first deselect one of the genres you've already chosen by clicking it again.</p>
                                    <br><br>
                                </div>
                            </div>
                            <div class="tomc-book-organization--form-div hidden tomc-book-organization--red-text tomc-book-organization--no-genres-added-edit-error">
                                <p class="centered-text">Please choose at least one thing that your book is about.</p>
                            </div>
                            <p class="hidden centered-text tomc-book-organization--red-text" id="tomc-book-organization--edit-genres-no-changes">No changes appear to have been made.</p>
                            <button class="tomc-book-organization--save-button" id="tomc-book-organization--save-genres-edits">save</button>
                        </div>
                    </div>

                    <div class="tomc-book-organization__overlay" id="tomc-book-organization__edit-identities-overlay">
                        <div class="overlay-main-container">
                            <br><br>
                            <i class="fa fa-window-close tomc-book-organization__overlay__close tomc-book-organization--close-overlay" aria-hidden = "true" id="tomc-book-organization__editing-overlay-close"></i>
                            <!-- <span class="fa fa-window-close tomc-book-organization__overlay__close tomc-book-organization--close-overlay" aria-hidden = "true" aria-label = "close button" id="tomc-book-organization__edit-identities-overlay-close">X</span> -->
                            <h3 class="centered-text">Main Character Identities</h3>
                            <div class="tomc-book-organization__edit-identities-container  tomc-book-organization--options-container tomc-book-org-html"></div>
                            <div class="hidden tomc-book-organization--red-text tomc-book-organization--identities-error-section centered-text">
                                <p class="tomc-book-organization--genres-error-section-mobile">To add another identity, first deselect one of the identities you've already chosen by tapping it again.</p>
                                <p class="tomc-book-organization--genres-error-section-desktop">To add another identity, first deselect one of the identities you've already chosen by clicking it again.</p>
                            </div>
                            <div class="hidden centered-text tomc-book-organization--red-text" id="tomc-book-organization--edit-no-identities-selected">
                                <p>Please choose as least one character identity.</p>
                            </div>
                            <div id="tomc-book-organization--edit-identities-no-changes" class="hidden">
                                <p class="centered-text tomc-book-organization--red-text">No changes appear to have been made.</p>
                            </div>
                            <button class="tomc-book-organization--save-button" id="tomc-book-organization--save-identities-edits">save</button>
                        </div>
                    </div>

                    <div class="tomc-book-organization__overlay" id="tomc-book-organization__edit-readalikes-overlay">
                        <div class="overlay-main-container"> 
                            <br><br>
                            <i class="fa fa-window-close tomc-book-organization__overlay__close tomc-book-organization--close-overlay" aria-hidden = "true" id="tomc-book-organization__editing-overlay-close"></i>
                            <!-- <span class="fa fa-window-close tomc-book-organization__overlay__close tomc-book-organization--close-overlay" aria-hidden = "true" aria-label = "close button" id="tomc-book-organization__edit-readalikes-overlay-close">X</span> -->
                            <h3 class="centered-text">Similar Books</h3>
                            <div class="tomc-book-organization__edit-readalikes-container  tomc-book-org-html"></div>
                            <div id="tomc-book-organization--edit-readalikes-no-changes" class="hidden">
                                <p class="centered-text tomc-book-organization--red-text">No changes appear to have been made.</p>
                            </div>
                            <button class="tomc-book-organization--save-button" id="tomc-book-organization--save-readalikes-edits">save</button>
                        </div>
                    </div>

                    <div class="tomc-book-organization__overlay" id="tomc-book-organization__edit-content-warnings-overlay">
                        <div class="overlay-main-container">
                            <br><br>
                            <i class="fa fa-window-close tomc-book-organization__overlay__close tomc-book-organization--close-overlay" aria-hidden = "true" id="tomc-book-organization__editing-overlay-close"></i>
                            <!-- <span class="fa fa-window-close tomc-book-organization__overlay__close tomc-book-organization--close-overlay" aria-hidden = "true" aria-label = "close button" id="tomc-book-organization__edit-content-warnings-overlay-close">X</span> -->
                            <h3 class="centered-text">Content Warnings</h3>
                            <div class="tomc-book-organization__edit-content-warnings-container  tomc-book-organization--options-container tomc-book-org-html"></div>
                            <div id="tomc-book-organization--edit-warnings-no-changes" class="hidden">
                                <p class="centered-text tomc-book-organization--red-text">No changes appear to have been made.</p>
                            </div>
                            <button class="tomc-book-organization--save-button" id="tomc-book-organization--save-content-warnings-edits">save</button>
                        </div>
                    </div>

                    <div class="tomc-book-organization__overlay" id="tomc-book-organization__edit-products-overlay">
                        <div class="overlay-main-container">
                            <br><br>
                            <i class="fa fa-window-close tomc-book-organization__overlay__close tomc-book-organization--close-overlay" aria-hidden = "true" id="tomc-book-organization__editing-overlay-close"></i>
                            <!-- <span class="fa fa-window-close tomc-book-organization__overlay__close tomc-book-organization--close-overlay" aria-hidden = "true" aria-label = "close button" id="tomc-book-organization__edit-products-overlay-close">X</span> -->
                            <h3 class="centered-text">Linked Products</h3>
                            <div class="tomc-book-organization__edit-products-container  tomc-book-org-html"></div>
                            <button class="tomc-book-organization--save-button" id="tomc-book-organization--save-products-edits">save</button>
                        </div>
                    </div>

                </div>
            <?php } else {
                ?><div class="generic-content">
                    <h2 class="left-text">Looks like you haven't added any searchable books yet.</h2>
                    <p>You may have already added ebooks, audiobooks, or physical books as products, but you need to add a searchable book to link your products to so that readers can find them. <a href="<?php echo esc_url(site_url('/add-a-book')); ?>">Add books</a></p>
                </div>
            <?php }
        } else {
            ?><div>
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