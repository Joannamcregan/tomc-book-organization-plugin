<?php global $wpdb;
$books_table = $wpdb->prefix .  "tomc_books";
$genres_table = $wpdb->prefix . "tomc_genres";
$book_genres_table = $wpdb->prefix . "tomc_book_genres";

$genres1 = $wpdb->get_results("SELECT * from $genres_table WHERE genre_level = 1 ORDER BY genre_name;");
$genres2 = $wpdb->get_results("SELECT * from $genres_table WHERE genre_level = 2 ORDER BY genre_name;");
$genres3 = $wpdb->get_results("SELECT * from $genres_table WHERE genre_level = 3 ORDER BY genre_name;");


get_header();

?><main class="half-screen">
    <div class="banner"><h1 class="centered-text">Browse Books by Genre</h1></div>
    <div class="sub-banner--slim">
        <h2 class="centered-text large-heading yellow-shadow-text georgia-text">show me...</h2>
    </div>
    <?php if ($genres1) {
        ?><div class="tomc-book-organization--options-container">
        <?php foreach($genres1 as $genre1) {
            ?><span aria-label="<?php echo $genre1 ->genre_name . ' is selected'; ?>" data-genre-level="1" data-genre-id="<?php echo $genre1->id; ?>" class="tomc-book-organization--browse-option-1 tomc-book-organization--browse-option-1-selected"><?php echo $genre1 ->genre_name;  ?></span>
        <?php }
        ?></div>
        <div id="tomc-book-organization--browse-genres-1-error" class="hidden tomc-book-organization--red-text">
            <p class="centered-text">Choose at least one of the above options.</p>
        </div>
    <?php }
    if ($genres2) {
        ?><div class="tomc-book-organization--options-container" data-count="<?php echo count($genres2); ?>">
            <span aria-label="the 'any genre' option is selected" data-genre-level="2" data-genre-id="0" class="tomc-book-organization--browse-option-2 tomc-book-organization--browse-option-2-selected" id="tomc-book-organization--browse-genre-any-2">any genre</span>
            <?php foreach($genres2 as $genre2) {
                ?><span aria-label="<?php echo $genre2 ->genre_name . ' is not selected'; ?>" data-genre-level="2" data-genre-id="<?php echo $genre2->id; ?>" class="tomc-book-organization--browse-option-2 tomc-book-organization--browse-normal-2"><?php echo $genre2 ->genre_name;  ?></span>
            <?php }
        ?></div>
        <div id="tomc-book-organization--browse-genres-2-error" class="hidden tomc-book-organization--red-text">
            <p class="centered-text">Choose at least one of the above options.</p>
        </div>
    <?php }
    ?><div class="sub-banner--slim">
        <h2 class="centered-text large-heading yellow-shadow-text georgia-text">books about...</h2>
    </div>
    <?php if ($genres3) {
        ?><div class="tomc-book-organization--options-container" data-count="<?php echo count($genres2); ?>">
            <span aria-label="The 'anything' option is selected" data-genre-level="3" data-genre-id="0" class="tomc-book-organization--browse-option-3 tomc-book-organization--browse-option-3-selected" id="tomc-book-organization--browse-genre-any-3">anything</span>
            <?php foreach($genres3 as $genre3) {
                ?><span aria-label="<?php echo $genre3 ->genre_name . ' is not selected'; ?>" data-genre-level="3" data-genre-id="<?php echo $genre3->id; ?>" class="tomc-book-organization--browse-option-3 tomc-book-organization--browse-normal-3"><?php echo $genre3 ->genre_name;  ?></span>
            <?php }
        ?></div>
        <div id="tomc-book-organization--browse-genres-3-error" class="hidden tomc-book-organization--red-text">
            <p class="centered-text">Choose at least one of the above options.</p>
        </div>
    <?php }
?><button id="tomc-book-organization--lets-roll-genres purple-button">let's roll!</button>
<div id="tomc-browse--search-results-container" class="hidden">

</div>
</main>

<?php get_footer(); ?>