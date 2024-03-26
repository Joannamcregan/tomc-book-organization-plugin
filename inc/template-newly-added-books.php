<?php global $wpdb;
$books_table = $wpdb->prefix . "tomc_books";
$book_genres_table = $wpdb->prefix .  "tomc_book_genres";
$book_products_table = $wpdb->prefix . "tomc_book_products";
$posts_table = $wpdb->prefix . "posts";
$product_types_table = $wpdb->prefix . "tomc_product_types";
$pen_names_table = $wpdb->prefix . "tomc_pen_names_books";

$query = 'select distinct b.id, b.title, b.product_image_id, f.post_title as pen_name, b.book_description, b.createdate, d.type_name, g.id as product_url
        from %i b
        join %i c on b.id = c.bookid
        join %i d on c.typeid = d.id
        join %i e on b.id = e.bookid
        join %i f on e.pennameid = f.id
        join %i g on c.productid = g.id
        order by b.createdate desc
        limit 300';
$results = $wpdb->get_results($wpdb->prepare($query, $books_table, $book_products_table, $product_types_table, $pen_names_table, $posts_table, $posts_table), ARRAY_A);

get_header();

?><main class="half-screen">
    <div class="banner"><h1 class="centered-text">Newly Added Books</h1></div>
    <br><br>
    <div id="tomc-browse--new-books-container">
    <?php for($index = 0; $index < count($results); $index++){
        if ($index % 3 == 0){
            ?><div class="tomc-book-organization--new-book-3">
                <div class="tomc-browse--search-result-top-section">
                    <h2><?php echo $results[$index]['title']; ?></h2>
                    <h3><?php echo $results[$index]['pen_name'] ? 'by ' . $results[$index]['pen_name'] : 'by unknown or anonymous author'; ?></h3>
                    <img class="book-cover--small" alt="<?php echo 'book cover for ' . $results[$index]['title']; ?>" src="<?php echo get_the_post_thumbnail_url($results[$index]['product_image_id']); ?>" />
                </div>
                <div class="tomc-browse--new-book-bottom-section">
                    <p><?php echo $results[$index]['book_description'].substr(0, 500) . '...'; ?></p>
                </div>
            </div>
        <?php } else if (($index + 1) % 3 == 0){
            ?><div class="tomc-book-organization--new-book-2">
            <div class="tomc-browse--search-result-top-section">
                <h2><?php echo $results[$index]['title']; ?></h2>
                <h3><?php echo $results[$index]['pen_name'] ? 'by ' . $results[$index]['pen_name'] : 'by unknown or anonymous author'; ?></h3>
                <img class="book-cover--small" alt="<?php echo 'book cover for ' . $results[$index]['title']; ?>" src="<?php echo get_the_post_thumbnail_url($results[$index]['product_image_id']); ?>" />
            </div>
            <div class="tomc-browse--new-book-bottom-section">
                <p><?php echo $results[$index]['book_description'].substr(0, 500) . '...'; ?></p>
            </div>
        </div>
        <?php } else {
            ?><div class="tomc-book-organization--new-book-1">
                <div class="tomc-browse--search-result-top-section">
                    <h2><?php echo $results[$index]['title']; ?></h2>
                    <h3><?php echo $results[$index]['pen_name'] ? 'by ' . $results[$index]['pen_name'] : 'by unknown or anonymous author'; ?></h3>
                    <img class="book-cover--small" alt="<?php echo 'book cover for ' . $results[$index]['title']; ?>" src="<?php echo get_the_post_thumbnail_url($results[$index]['product_image_id']); ?>" />
                </div>
                <div class="tomc-browse--new-book-bottom-section">
                    <p><?php echo $results[$index]['book_description'].substr(0, 500) . '...'; ?></p>
                </div>
            </div>
        <?php }
        $results[$index]['product_url'] = get_permalink($results[$index]['product_url']);
        $results[$index]['product_image_id'] = get_the_post_thumbnail_url($results[$index]['product_image_id']);
    } ?>
    </div>
</main>

<?php get_footer(); ?>