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
$warnings_table = $wpdb->prefix . "tomc_content_warnings";
$identities_table = $wpdb->prefix . "tomc_character_identities";
$product_types_table = $wpdb->prefix . "tomc_product_types";
$publication_languages_table = $wpdb->prefix . "tomc_publication_languages";
$book_languages_table = $wpdb->prefix . "tomc_book_languages";
$term_relationships_table = $wpdb->prefix . "term_relationships";
$term_taxonomy_table = $wpdb->prefix . "term_taxonomy";
$terms_table = $wpdb->prefix . "terms";
$user = wp_get_current_user();
$userid = $user->ID;

get_header();

?><main class="half-screen">    
    <?php if (is_user_logged_in()){
        if (in_array( 'dc_vendor', (array) $user->roles ) ){
            ?><div class="banner"><h1 class="centered-text banner-heading-46">Add Book Details</h1></div>
            <p class="centered-text">Before adding book details, <a href="<?php echo esc_url(site_url('/dashboard/edit-product'));?>">enter product details</a> (one product for each format, such as audiobook and e-book.)</p>
            <p class="centered-text">Feeling lost when it comes to adding your book? Check out our <a href="<?php echo esc_url(site_url('/creator-roadmap'));?>">Creator Roadmap</a>.</p>
            <div id="tomc-book-organization--new-book-forms-section">
                <div class="tomc-book-organization--form" id="tomc-book-organization--add-book" >
                    <h2 class="centered-text">Your Book's Details</h2>
                    <input type="hidden" name="action" value="addbook">
                    <div class="tomc-book-organization--form-div">
                        <label for="tomc-book-organization--title"  class="tomc-book-organization--new-book centered-text">Enter your book's title. </label><br>
                        <input type="text" class="tomc-book-organization--new-book centered-text" name="tomc-book-organization--title" id="tomc-book-organization--title" required>
                    </div>
                    <div class="tomc-book-organization--form-div" id="tomc-book-organization--subtitle-div">
                        <label for="tomc-book-organization--subtitle">If your book has a subtitle, enter it here</label><br>
                        <input type="text" class="tomc-book-organization--new-book centered-text" name="tomc-book-organization--subtitle" id="tomc-book-organization--subtitle">
                    </div>
                    <div class="tomc-book-organization--form-div" id="tomc-book-organization--edition-div">
                        <label for="tomc-book-organization--edition">If your book has an edition number, please enter it here. (Please note: we consider a new edition to be a book with updated content, not a book with a new cover or one that was previously published in another format or on another platform.)</label><br>
                        <input type="text" class="tomc-book-organization--new-book centered-text" name="tomc-book-organization--edition" id="tomc-book-organization--edition">
                    </div>
                    <div class="tomc-book-organization--form-div">
                        <label for="tomc-book-organization--description">Enter your book's description (up to 3000 characters). </label><br>
                        <textarea class="tomc-book-organization--new-book centered-text" name="tomc-book-organization--description" id="tomc-book-organization--description" required></textarea>
                    </div>
                    <div class="tomc-book-organization--form-div">
                        <label for="tomc-book-organization--excerpt">Enter a short excerpt from your book (up to 10,00 characters.)</label><br>
                        <textarea class="tomc-book-organization--new-book centered-text" name="tomc-book-organization--excerpt" id="tomc-book-organization--excerpt" required></textarea>
                    </div>     
                    <div class="tomc-book-organization--form-div hidden tomc-book-organization--red-text" id="tomc-book-organization--add-book-errors">
                        <p class="hidden" id="tomc-book-organization--add-book-errors-title">Your book's title cannot be blank.</p>
                        <p class="hidden" id="tomc-book-organization--add-book-errors-description">Add a description to help readers who will love your book find it.</p>
                        <p class="hidden" id="tomc-book-organization--add-book-errors-excerpt">Add an excerpt to help readers get a feel for your book.</p>
                    </div>                                    
                    <button class="tomc-book-organization--save-button" id="tomc-book-organization--save-book" data-user="<?php echo get_current_user_id(); ?>">save and continue</button>
                </div>

                <div class="tomc-book-organization--form opacity-30" aria-disabled="true" id="tomc-book-organization--book-languages-form" >
                    <h3>Which language(s) is your book written in?</h3>
                    <p>Please choose up to three.</p>
                    <?php $languages = $wpdb->get_results("SELECT * from $publication_languages_table ORDER BY language_name;"); ?>
                    <div class="tomc-book-organization--options-container" id="tomc-book-organization--languages">
                        <?php if ($languages) {
                            foreach($languages as $language) {
                                ?><span tabindex="0" aria-label="<?php echo $language ->language_name . ' is not selected'; ?>" data-language-id="<?php echo $language->id; ?>" class="tomc-book-organization--option-languages tomc-book-organization--option-span"><?php echo $language ->language_name;  ?></span>
                            <?php }
                        }
                        ?><span class="tomc-book-organization--add-language tomc-book-organization--add-option hidden" data-user-id="<?php echo $userid; ?>">add a new language</span>
                    </div>
                    <div class="hidden tomc-book-organization--red-text tomc-book-organization--languages-error-section">
                        <p class="tomc-book-organization--genres-error-section-mobile">To add another language, first deselect one of the identities you've already chosen by tapping it again.</p>
                        <p class="tomc-book-organization--genres-error-section-desktop">To add another language, first deselect one of the identities you've already chosen by clicking it again.</p>
                    </div>
                    <div class="tomc-book-organization--form-div hidden tomc-book-organization--red-text tomc-book-organization--add-no-languages-selected">
                        <p>Please choose as least one language to ensure your book shows up in search results.</p>
                    </div>
                    <button class="hidden" id="tomc-book-organization--save-book-languages">save and continue</button>
                </div>

                <div class="tomc-book-organization--form opacity-30" aria-disabled="true" id="tomc-book-organization--book-genre-form" >
                    <div>
                        <h3>Which genre(s) does your book fit?</h3>
                        <?php $genres1 = $wpdb->get_results("SELECT * from $genres_table WHERE genre_level = 1 and genre_name is not null and genre_name <> '' ORDER BY genre_name;"); ?>
                        <div class="tomc-book-organization--options-container" id="tomc-book-organization--genres-1">
                            <?php if ($genres1) {
                                foreach($genres1 as $genre1) {
                                    ?><span aria-label="<?php echo $genre1 ->genre_name . ' is not selected'; ?>" id="tomc-book-organization-genre1-<?php echo $genre1->id; ?>" data-genre-level="1" data-genre-id="<?php echo $genre1->id; ?>" class="tomc-book-organization--option tomc-book-organization--option-span"><?php echo $genre1 ->genre_name;  ?></span>
                                <?php }
                            }
                            ?>
                            <!-- <div class="hidden tomc-book-organization--red-text" id="tomc-book-organization--genres1-error-section">
                                <p class="tomc-book-organization--genres-error-section-mobile">To add another category, first deselect one of the genres you've already chosen by tapping it again.</p>
                                <p class="tomc-book-organization--genres-error-section-desktop">To add another category, first deselect one of the genres you've already chosen by clicking it again.</p>
                            </div> -->
                        </div>
                    </div>
                    <div>
                        <h3>Which subgenres does your book fit? (Please select up to two options.)</h3>
                        <?php $genres2 = $wpdb->get_results("SELECT * from $genres_table WHERE genre_level = 2 and genre_name is not null and genre_name <> '' ORDER BY genre_name;"); ?>
                        <div class="tomc-book-organization--options-container" id="tomc-book-organization--genres-2">
                            <?php if ($genres2) {
                                foreach($genres2 as $genre2) {
                                    ?><span aria-label="<?php echo $genre2 ->genre_name . ' is not selected'; ?>" id="tomc-book-organization-genre2-<?php echo $genre2->id; ?>" data-genre-level="2" data-genre-id="<?php echo $genre2->id; ?>" class="tomc-book-organization--option tomc-book-organization--option-span"><?php echo $genre2 ->genre_name;  ?></span>
                                <?php }
                            }
                            ?><span class="tomc-book-organization--add-genre tomc-book-organization--add-option hidden" data-genre-level="2" data-user-id="<?php echo $userid; ?>" id="add-genre-2-button">add a new genre</span>
                            <div class="hidden tomc-book-organization--red-text tomc-book-organization--genres2-error-section">
                                <p class="tomc-book-organization--genres-error-section-mobile">To add another category, first deselect one of the genres you've already chosen by tapping it again.</p>
                                <p class="tomc-book-organization--genres-error-section-desktop">To add another category, first deselect one of the genres you've already chosen by clicking it again.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Which topics does your book include? (Please select up to ten options.)</h3>
                        <?php $genres3 = $wpdb->get_results("SELECT * from $genres_table WHERE genre_level = 3 and genre_name is not null and genre_name <> '' ORDER BY genre_name;"); ?>
                        <div class="tomc-book-organization--options-container" id="tomc-book-organization--genres-3">
                            <?php if ($genres3) {
                                foreach($genres3 as $genre3) {
                                    ?><span aria-label="<?php echo $genre3 ->genre_name . ' is not selected'; ?>" id="tomc-book-organization-genre3-<?php echo $genre3->id; ?>" data-genre-level="3" data-genre-id="<?php echo $genre3->id; ?>" class="tomc-book-organization--option tomc-book-organization--option-span"><?php echo $genre3 ->genre_name;  ?></span>
                                <?php }
                            }
                            ?><span class="tomc-book-organization--add-genre tomc-book-organization--add-option hidden" data-genre-level="3" data-user-id="<?php echo $userid; ?>" id="add-genre-3-button">add a new subgenre</span>
                            <div class="hidden tomc-book-organization--red-text tomc-book-organization--genres3-error-section">
                                <p class="tomc-book-organization--genres-error-section-mobile">To add another category, first deselect one of the genres you've already chosen by tapping it again.</p>
                                <p class="tomc-book-organization--genres-error-section-desktop">To add another category, first deselect one of the genres you've already chosen by clicking it again.</p>
                            </div>
                        </div>     
                    </div>
                    <div class="tomc-book-organization--form-div hidden tomc-book-organization--red-text tomc-book-organization--no-genres-added-error">
                        <p>Please choose at least one thing that your book is about.</p>
                    </div>
                    <button class="hidden" id="tomc-book-organization--save-book-genres">save and continue</button>
                </div>

                <div class="tomc-book-organization--form opacity-30" aria-disabled="true" id="tomc-book-organization--book-identities-form" >
                    <h3>Which identities describe your main character(s)?</h3>
                    <p>Please choose up to five.</p>
                    <?php $identities = $wpdb->get_results("SELECT * from $identities_table ORDER BY identity_name;"); ?>
                    <div class="tomc-book-organization--options-container" id="tomc-book-organization--identities">
                        <?php if ($identities) {
                            foreach($identities as $identity) {
                                ?><span aria-label="<?php echo $identity ->identity_name . ' is not selected'; ?>" data-identity-id="<?php echo $identity->id; ?>" class="tomc-book-organization--option-alt-0 tomc-book-organization--option-span"><?php echo $identity ->identity_name;  ?></span>
                            <?php }
                        }
                        ?><span class="tomc-book-organization--add-identity tomc-book-organization--add-option hidden" data-user-id="<?php echo $userid; ?>">add a new identity</span>
                    </div>
                    <div class="hidden tomc-book-organization--red-text tomc-book-organization--identities-error-section">
                        <p class="tomc-book-organization--genres-error-section-mobile">To add another identity, first deselect one of the identities you've already chosen by tapping it again.</p>
                        <p class="tomc-book-organization--genres-error-section-desktop">To add another identity, first deselect one of the identities you've already chosen by clicking it again.</p>
                    </div>
                    <button class="hidden" id="tomc-book-organization--save-book-identities">save and continue</button>
                </div>

                <div class="tomc-book-organization--form opacity-30" aria-disabled="true" id="tomc-book-organization--book-warnings-form" >
                    <h3>Does your book need any content warnings?</h3>
                    <p>Please choose up to ten.</p>
                    <p><em>This step is optional but appreciated by many readers. If a reader indicates that they find certain topics triggering, we will exclude books with matching content warnings from their search results.</em></p>
                    <?php $warnings = $wpdb->get_results("SELECT * from $warnings_table ORDER BY warning_name;"); ?>
                    <div class="tomc-book-organization--options-container" id="tomc-book-organization--warnings">
                        <?php if ($warnings) {
                            foreach($warnings as $warning) {
                                ?><span aria-label="<?php echo $warning ->warning_name . ' is not selected'; ?>" data-warning-id="<?php echo $warning->id; ?>" class="tomc-book-organization--option-alt tomc-book-organization--option-span"><?php echo $warning ->warning_name;  ?></span>
                            <?php }
                        }
                        ?><span class="tomc-book-organization--add-warning tomc-book-organization--add-option hidden" data-user-id="<?php echo $userid; ?>">add a new warning</span>
                    </div>
                    <div class="hidden tomc-book-organization--red-text tomc-book-organization--warnings-error-section">
                        <p class="tomc-book-organization--genres-error-section-mobile">To add another warning, first deselect one of the triggers you've already chosen by tapping it again.</p>
                        <p class="tomc-book-organization--genres-error-section-desktop">To add another warning, first deselect one of the triggers you've already chosen by clicking it again.</p>
                    </div>
                    <button class="hidden" id="tomc-book-organization--save-book-warnings">continue</button>
                </div>

                <div class="tomc-book-organization--form opacity-30" aria-disabled="true" id="tomc-book-organization--readalikes" >
                    <h3>Add one or two books you feel are similar to yours. (This is optional, but can help readers find your book.)</h3>
                    <div class="tomc-book-organization--form-div">
                        <input type="text" placeholder = "book title" id = "tomc-book-organization__readalike-book-0">
                        <span>by</span>
                        <input type="text" placeholder = "author" id = "tomc-book-organization__readalike-author-0">
                    </div>
                    <div class="tomc-book-organization--form-div">
                        <input type="text" placeholder = "book title" id = "tomc-book-organization__readalike-book-1">
                        <span>by</span>
                        <input type="text" placeholder = "author" id = "tomc-book-organization__readalike-author-1">
                    </div>   
                    <button class="hidden" id="tomc-book-organization--save-book-readalikes">continue</button>
                </div>

                <div class="tomc-book-organization--form opacity-30" aria-disabled="true" id="tomc-book-organization--book-pen-name" >
                    <h3>Which name will you be publishing this book under?</h3>
                    <?php $pen_names = $wpdb->get_results("SELECT * from $posts_table WHERE post_type = 'author-profile' and post_author = $userid ORDER BY post_title;");
                    ?><select aria-label="your author names" name="tomc-book-organization--book-pen-name" id="tomc-book-organization--book-pen-name-select">
                    <?php foreach($pen_names as $name) {
                        ?><option value="<?php echo $name->ID; ?>"><?php echo $name->post_title; ?></option>
                    <?php }
                    ?></select><br>         
                    <span class="tomc-book-organization--add-pen-name tomc-book-organization--add-option hidden" data-user-id="<?php echo $userid; ?>">add a new author name</span>
                    <br>
                    <button class="hidden" id="tomc-book-organization--save-book-pen-name">save and continue</button>
                </div>

                <div class="tomc-book-organization--form opacity-30" aria-disabled="true" id="tomc-book-organization--book-products" >
                    <h3 class="centered-text">Please select all products associated with this book.</h3>
                    <div id="tomc-bookorg--author-products-container" class="tomc-book-org--columns-container"></div>
                    <?php $author_products = [];
                    // $product_types = $wpdb->get_results("SELECT * from $product_types_table ORDER BY type_name;"); 
                    // $author_products = $wpdb->get_results("SELECT p.post_title, p.id, terms.name as type_name from $posts_table p JOIN $term_relationships_table tr on p.id = tr.object_id JOIN $terms_table terms on tr.term_taxonomy_id = terms.term_id AND terms.name <> 'services' JOIN $term_taxonomy_table tt on terms.term_id = tt.term_id AND tt.taxonomy = 'product_cat'  WHERE p.post_type = 'product' and p.post_status = 'publish' and p.post_author = $userid ORDER BY p.post_title;");
                    foreach($author_products as $product) {
                        ?><div class="tomc-book-organization--book-products-div">
                            <div class="tomc-book-organization--product-option">
                                <input class="tomc-book-organization--product-checkbox" type="checkbox" id="<?php echo 'tomc-book-organization--book-product-id-' . $product->ID; ?>" value="<?php echo $product->ID; ?>">
                                <label class="tomc-book-organization--large-label" for="<?php echo 'tomc-book-organization--book-product-id-' . $product->ID; ?>"><?php echo $product->post_title; ?></label></br>
                                <img alt="<?php echo 'the cover for ' . $product->post_title; ?>" src="<?php echo get_the_post_thumbnail_url($product->ID); ?>" /><br><br>
                                <label class="tomc-book-organization--select-label" for="<?php echo 'tomc-book-organization--select-for-' . $product->ID; ?>">Which format is this product?</label>
                                <select class="tomc-book-organization--centered-select tomc-book-organization--product-format" id="<?php echo 'tomc-book-organization--select-for-' . $product->ID; ?>">
                                    <?php foreach($product_types as $type) {
                                        if ($type->type_name == $product->type_name){
                                            ?><option value="<?php echo $type->id; ?>" selected="selected"><?php echo $type->type_name; ?></option>
                                        <?php } else {
                                            ?><option value="<?php echo $type->id; ?>"><?php echo $type->type_name; ?></option>
                                        <?php }
                                    }
                                ?></select><br>
                                <input type="radio" name="tomc-book-organization--main-image-product" value="<?php echo $product->ID; ?>" id="<?php echo 'tomc-book-organization--book-product-image-' . $product->ID; ?>">
                                <label for="<?php echo 'tomc-book-organization--book-product-image-' . $product->ID; ?>">use this product's image as the main image for this book.</labal>
                            </div>                        
                        </div>
                    <?php }
                    ?><div id="tomc-bookorg--no-matching-products" class="hidden padding-5">
                        <p class="centered-text">We couldn't find any products you've published with that title. <span class="underlined-text" id="tomc-bookorg--no-matching-products--see-all">See all products you've published</span> or <a href="<?php echo esc_url(site_url('/dashboard/edit-product/'));?>">upload a new product</a> then <a href="<?php echo esc_url(site_url('/dashboard/edit-product/'));?>">edit book info</a> to link it to this book. We've saved everything you've entered so far.</p>
                    </div>
                    <p class="centered-text underlined-text hidden" id="tomc-bookorg--see-all-products">show all products you've published</p>
                    <div id="tomc-book-organization--product-image-error" class="hidden">
                        <p class="centered-text">Please select the product whose image you want to use as the main image for this book.</p>
                    </div>
                    <button class="hidden" id="tomc-book-organization--save-book-products">save</button>
                    <button class="hidden" id="tomc-book-organization--save-book-products-publish">save and publish</button>
                </div>

                <div class="tomc-book-organization--form hidden" aria-disabled="true" id="tomc-book-organization--complete">
                    <h3>Thank you!</h3>
                    <br><br>
                    <p><a href="<?php echo esc_url(site_url('/add-a-book'));?>">add info for another book</a></p>
                    <p><a href="<?php echo esc_url(site_url('/my-books'));?>">edit info for books you've added</a></p>
                    <p><a href="<?php echo esc_url(site_url('/dashboard'));?>">add a product</a>, like an ebook or audiobook</p>
                </div>
            </div>

            <div class="tomc-book-organization__overlay" id="tomc-book-organization__genre-overlay">
                <div class="overlay-main-container"> 
                    <i class="fa fa-window-close tomc-book-organization__overlay__close" aria-label="close overlay" id="tomc-book-organization__genre-overlay-close"></i>
                    <!-- <span class="fa fa-window-close tomc-book-organization__overlay__close" aria-hidden = "true" aria-label = "close button" id="tomc-book-organization__genre-overlay-close">X</span> -->
                    <div class="overlay-input-container">
                        <input type="text" placeholder="What's your book about?" id="tomc-book-organization__new-genre">
                        <p class="hidden centered-text" id="tomc-book-organization--genre-overlay-error">Cannot be blank.</p>
                        <button class="tomc-book-organization--save-button" id="tomc-book-organization--new-genre">save</button>
                    </div>
                </div>
            </div>
            <div class="tomc-book-organization__overlay" id="tomc-book-organization__warning-overlay">
                <div class="overlay-main-container"> 
                    <i class="fa fa-window-close tomc-book-organization__overlay__close" aria-label="close overlay" id="tomc-book-organization__warning-overlay-close"></i>
                    <!-- <span class="fa fa-window-close tomc-book-organization__overlay__close" aria-hidden = "true" aria-label = "close button" id="tomc-book-organization__warning-overlay-close">X</span> -->
                    <div class="overlay-input-container">
                        <input type="text" placeholder="Content Warning" id="tomc-book-organization__new-warning">
                        <p class="hidden centered-text" id="tomc-book-organization--warning-overlay-error">Cannot be blank.</p>
                        <button class="tomc-book-organization--save-button" id="tomc-book-organization--new-warning">save</button>
                    </div>
                </div>
            </div>
            <div class="tomc-book-organization__overlay" id="tomc-book-organization__identity-overlay">
                <div class="overlay-main-container"> 
                    <i class="fa fa-window-close tomc-book-organization__overlay__close" aria-label="close overlay" id="tomc-book-organization__identity-overlay-close"></i>
                    <!-- <span class="fa fa-window-close tomc-book-organization__overlay__close" aria-hidden = "true" aria-label = "close button" id="tomc-book-organization__identity-overlay-close">X</span> -->
                    <div class="overlay-input-container">
                        <input type="text" placeholder="Main Character Identity" id="tomc-book-organization__new-identity">
                        <p class="hidden centered-text" id="tomc-book-organization--identity-overlay-error">Cannot be blank.</p>
                        <button class="tomc-book-organization--save-button" id="tomc-book-organization--new-identity">save</button>
                    </div>
                </div>
            </div>
            <div class="tomc-book-organization__overlay" id="tomc-book-organization__pen-name-overlay">
                <div class="overlay-main-container"> 
                    <i class="fa fa-window-close tomc-book-organization__overlay__close" aria-label="close overlay" id="tomc-book-organization__pen-name-overlay-close"></i>
                    <!-- <span class="fa fa-window-close tomc-book-organization__overlay__close" aria-hidden = "true" aria-label = "close button" id="tomc-book-organization__pen-name-overlay-close">X</span> -->
                    <div class="overlay-input-container">
                        <input type="text" placeholder="New Name" id="tomc-book-organization__new-pen-name">
                        <textarea class="tomc-book-organization-textarea--edit" id="tomc-book-organization__new-name-bio" placeholder="Author bio (up to 1000 characters)"></textarea>
                        <p class="hidden centered-text" id="tomc-book-organization--pen-name-overlay-error">Cannot be blank.</p>
                        <button class="tomc-book-organization--save-button" id="tomc-book-organization--new-pen-name">save</button>
                    </div>
                </div>
            </div>
            <div class="tomc-book-organization__overlay" id="tomc-book-organization__language-overlay">
                <div class="overlay-main-container"> 
                    <i class="fa fa-window-close tomc-book-organization__overlay__close" aria-label="close overlay" id="tomc-book-organization__pen-name-overlay-close"></i>
                    <!-- <span class="fa fa-window-close tomc-book-organization__overlay__close" aria-hidden = "true" aria-label = "close button" id="tomc-book-organization__language-overlay-close">X</span> -->
                    <div>
                        <input type="text" placeholder="New Language" id="tomc-book-organization__new-language">
                        <p class="hidden centered-text" id="tomc-book-organization--pen-name-overlay-error">Cannot be blank.</p>
                        <button class="tomc-book-organization--save-button" id="tomc-book-organization--new-language">save</button>
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