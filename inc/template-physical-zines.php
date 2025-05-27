<?php get_header();
global $wpdb;
$books_table = $wpdb->prefix . "tomc_books";
$book_genres_table = $wpdb->prefix .  "tomc_book_genres";
$book_products_table = $wpdb->prefix . "tomc_book_products";
$posts_table = $wpdb->prefix . "posts";
$product_types_table = $wpdb->prefix . "tomc_product_types";
$pen_names_table = $wpdb->prefix . "tomc_pen_names_books";
$book_genres_table = $wpdb->prefix .  "tomc_book_genres";
$genres_table = $wpdb->prefix . "tomc_genres";

$query = 'select distinct b.id, b.product_image_id, b.title, f.post_title as pen_name, b.book_description, b.createdate, g.id as product_url
        from %i b
        join %i bookgenres on b.id = bookgenres.bookid
        join %i genres on bookgenres.genreid = genres.id
        join %i c on b.id = c.bookid
        join %i d on c.typeid = d.id
        join %i e on b.id = e.bookid
        join %i f on e.pennameid = f.id
        join %i g on c.productid = g.id
        where d.type_name = %s
        and genres.genre_name in ("fiction", "nonfiction", "poetry")
        and b.isLive = 1
        order by b.createdate asc
        limit 48'; //48
$results = $wpdb->get_results($wpdb->prepare($query, $books_table, $book_genres_table, $genres_table, $book_products_table, $product_types_table, $pen_names_table, $posts_table, $posts_table, 'physical zines'), ARRAY_A);
for($index = 0; $index < count($results); $index++){
    $results[$index]['product_url'] = get_permalink($results[$index]['product_url']);
    $results[$index]['product_image_id'] = get_the_post_thumbnail_url($results[$index]['product_image_id']);
}

?><main class="full-screen">
    <div class="banner"><h1 class="centered-text banner-heading-46">Physical Zines By Our Authors</h1></div>
    <div>
        <?php if ($results) {
            ?><div class="tomc-shop-books-sort-by-section">
                <span>sort by</span>
                <span aria-label="This option is selected" class="tomc-shop-books-sort-options tomc-shop-books-sort-options-selected tomc-shop-format-order" data-order='asc'>oldest</span>
                <span aria-label="This option is not selected" class="tomc-shop-books-sort-options tomc-shop-format-order" data-order="desc">newest</span>
            </div>
            <div class="tomc-shop-books-include-section">
                <span>include</span>
                <span aria-label="This option is selected" class="tomc-shop-books-include-options tomc-shop-books-include-options-selected tomc-shop-books-fiction">fiction</span>
                <span aria-label="This option is selected" class="tomc-shop-books-include-options tomc-shop-books-include-options-selected tomc-shop-books-nonfiction">nonfiction</span>
                <span aria-label="This option is selected" class="tomc-shop-books-include-options tomc-shop-books-include-options-selected tomc-shop-books-poetry">poetry</span>
            </div>
            <p class="centered-text red-text hidden tomc-shop-format--no-genres-error">Please select at least one genre.</p>
            <div class="tomc-book-org--columns-container tomc-shop-format--results-container" data-format="e-books">
                <?php for($index = 0; $index < count($results); $index++){
                    ?><div class="tomc-bookorg--all-columns tomc-shop-format--books" data-bookid=<?php echo $results[$index]['id']; ?>>
                        <img src="<?php echo $results[$index]['product_image_id']; ?>" alt="<?php echo 'cover for ' . $results[$index]['title']; ?>" />
                        <a class="centered-text" href="<?php echo get_permalink($results[$index]['product_url']); ?>">
                            <h3><?php echo $results[$index]['title']; ?></h3>
                        </a>
                        <p class="centered-text"><strong><?php echo $results[$index]['pen_name'] ? 'by ' . $results[$index]['pen_name'] : 'by unknown or anonymous author'; ?></strong></p>
                        <div class="tomc-browse--search-result-bottom-section">
                            <p style="white-space: pre-line"><?php echo $results[$index]['book_description'].substr(0, 500) . '...'; ?></p>
                        </div>
                    </div>
                <?php }
            ?></div>
            <p class="centered-text hidden tomc-shop-format--no-more-results">That's all for now.</p>
            <span class="tomc-bookorg--see-more-format <?php echo count($results) >= 1 /*change to 48 later*/ ? 'purple-width-fit-button' : 'hidden' ?>">see more</span>
        <?php } else {
            ?><p class="centered-text padded-paragraph-20-x">No physical zines have been added yet. Check back soon!</p>
        <?php } ?>
    </div>
</main>

<?php get_footer(); ?>