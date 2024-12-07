<?php get_header();
global $wpdb;
$books_table = $wpdb->prefix . "tomc_books";
$book_genres_table = $wpdb->prefix .  "tomc_book_genres";
$book_products_table = $wpdb->prefix . "tomc_book_products";
$posts_table = $wpdb->prefix . "posts";
$product_types_table = $wpdb->prefix . "tomc_product_types";
$pen_names_table = $wpdb->prefix . "tomc_pen_names_books";

$query = 'select distinct b.id, b.title,f.post_title as pen_name, b.book_description, b.createdate, g.id as product_url
        from %i b
        join %i c on b.id = c.bookid
        join %i d on c.typeid = d.id
        join %i e on b.id = e.bookid
        join %i f on e.pennameid = f.id
        join %i g on c.productid = g.id
        where d.type_name = %s
        order by b.createdate asc
        limit 30'; //48
$results = $wpdb->get_results($wpdb->prepare($query, $books_table, $book_products_table, $product_types_table, $pen_names_table, $posts_table, $posts_table, 'e-books'), ARRAY_A);

?><main class="half-screen">
    <div class="banner"><h1 class="centered-text banner-heading-46">Ebooks By Our Authors</h1></div>
    <div>
        <?php if ($results) {
            ?><div class="tomc-shop-books-sort-by-section">
                <span>sort by</span>
                <span aria-label="This option is selected" class="tomc-shop-books-sort-options tomc-shop-books-sort-options-selected tomc-shop-books-oldest" data-order='asc'>oldest</span>
                <span aria-label="This option is not selected" class="tomc-shop-books-sort-options tomc-shop-books-newest" data-order="desc">newest</span>
            </div>
            <div class="tomc-shop-books-include-section">
                <span>include</span>
                <span aria-label="This option is selected" class="tomc-shop-books-include-options tomc-shop-books-include-options-selected tomc-shop-books-fiction">fiction</span>
                <span aria-label="This option is selected" class="tomc-shop-books-include-options tomc-shop-books-include-options-selected tomc-shop-books-nonfiction">nonfiction</span>
                <span aria-label="This option is selected" class="tomc-shop-books-include-options tomc-shop-books-include-options-selected tomc-shop-books-poetry">poetry</span>
            </div>
            <span id="tomc-bookorg--shop-by-format--update">update</span>
            <div class="tomc-book-org--columns-container" data-format="e-books">
                <?php for($index = 0; $index < count($results); $index++){
                    ?><div class="tomc-bookorg--all-columns
                        <?php if ($index % 3 == 0){
                            echo ' tomc-book-org--three-of-three';
                        } else if ($index % 2 == 0){
                            echo ' tomc-book-org--two-of-three';
                        } else {
                            echo ' tomc-book-org--one-of-three';
                        }
                        if ($index % 4 == 0){
                            echo ' tomc-book-org--four-of-four';
                        } else if ($index % 3 == 0){
                            echo ' tomc-book-org--three-of-four';
                        } else if ($index % 2 == 0){
                            echo ' tomc-book-org--two-of-four';
                        } else {
                            echo ' tomc-book-org--one-of-four';
                        }
                        ?>">
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
            <?php if (count($results) >= 3){
                ?><span class="purple-width-fit-button tomc-bookorg--see-more-format">see more</span>
            <?php }
        } else {
            ?><p class="centered-text padded-paragraph-20-x">No ebooks have been added yet. Check back soon!</p>
        <?php } ?>
    </div>
</main>

<?php get_footer(); ?>