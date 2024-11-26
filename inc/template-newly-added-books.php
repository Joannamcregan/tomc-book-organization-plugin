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
        limit 12';
$results = $wpdb->get_results($wpdb->prepare($query, $books_table, $book_products_table, $product_types_table, $pen_names_table, $posts_table, $posts_table, 'e-books'), ARRAY_A);

?><main class="half-screen">
    <div class="banner"><h1 class="centered-text banner-heading-46">Books By Our Authors</h1></div>
    <div class="tomc-shop-books--format-section">
        <div class="sub-banner--slim">
            <h2 class="centered-text large-heading yellow-shadow-text georgia-text">ebooks</h2>
        </div>
        <div>
            <?php if ($results) {
                ?><div class="tomc-shop-books-sort-by-section" data-format="e-books">
                    <span>sort by</span>
                    <span aria-label="The 'oldest' option is selected" class="tomc-shop-books-sort-options tomc-shop-books-sort-options-selected tomc-shop-books-oldest" data-order='asc'>oldest</span>
                    <span aria-label="The 'newest' option is not selected" class="tomc-shop-books-sort-options tomc-shop-books-newest" data-order="desc">newest</span>
                    <span aria-label="The 'random' option is not selected" class="tomc-shop-books-sort-options tomc-shop-books-random">random</span>
                </div>
                <div class="tomc-book-org--columns-container">
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
            <?php } else {
                ?><p class="centered-text padded-paragraph-20-x">No ebooks have been added yet. Check back soon!</p>
            <?php } ?>
            <!-- </div>  tomc-book-organization--newly-added-continued-ebooks -->
        </div>
    </div>

    <?php $query = 'select distinct b.id, b.title, f.post_title as pen_name, b.book_description, b.createdate, g.id as product_url
        from %i b
        join %i c on b.id = c.bookid
        join %i d on c.typeid = d.id
        join %i e on b.id = e.bookid
        join %i f on e.pennameid = f.id
        join %i g on c.productid = g.id
        where d.type_name = %s
        order by b.createdate asc
        limit 12';
    $results = $wpdb->get_results($wpdb->prepare($query, $books_table, $book_products_table, $product_types_table, $pen_names_table, $posts_table, $posts_table, 'audiobooks'), ARRAY_A);

    ?><div class="tomc-shop-books--format-section">
        <div class="sub-banner--slim">
            <h2 class="centered-text large-heading yellow-shadow-text georgia-text">audiobooks</h2>
        </div>
        <div>
            <?php if ($results) {
                ?><div class="tomc-shop-books-sort-by-section" data-format="audiobooks">
                    <span>sort by</span>
                    <span aria-label="The 'oldest' option is selected" class="tomc-shop-books-sort-options tomc-shop-books-sort-options-selected tomc-shop-books-oldest" data-order='asc'>oldest</span>
                    <span aria-label="The 'newest' option is not selected" class="tomc-shop-books-sort-options tomc-shop-books-newest" data-order="desc">newest</span>
                    <span aria-label="The 'random' option is not selected" class="tomc-shop-books-sort-options tomc-shop-books-random">random</span>
                </div>
                <div class="tomc-book-org--columns-container">
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
                        <a href="<?php echo get_permalink($results[$index]['product_url']); ?>">
                            <h3><?php echo $results[$index]['title']; ?></h3>
                        </a>
                        <p><strong><?php echo $results[$index]['pen_name'] ? 'by ' . $results[$index]['pen_name'] : 'by unknown or anonymous author'; ?></strong></p>
                        <div class="tomc-browse--search-result-bottom-section prewrap">
                            <p><?php echo $results[$index]['book_description'].substr(0, 500) . '...'; ?></p>
                        </div>
                    </div>
                <?php }
                ?></div>
            <?php } else {
                ?><p class="centered-text">No audiobooks have been added yet. Check back soon!</p>
            <?php } ?>
            <!-- </div>  tomc-book-organization--newly-added-continued-audiobooks -->
        </div>
    </div>

    <?php $query = 'select distinct b.id, b.title, f.post_title as pen_name, b.book_description, b.createdate, g.id as product_url
        from %i b
        join %i c on b.id = c.bookid
        join %i d on c.typeid = d.id
        join %i e on b.id = e.bookid
        join %i f on e.pennameid = f.id
        join %i g on c.productid = g.id
        where d.type_name in (%s, %s)
        order by b.createdate asc
        limit 12';
    $results = $wpdb->get_results($wpdb->prepare($query, $books_table, $book_products_table, $product_types_table, $pen_names_table, $posts_table, $posts_table, 'paperbacks', 'hardcovers'), ARRAY_A);

    ?><div class="tomc-shop-books--format-section">
        <div class="sub-banner--slim">
            <h2 class="centered-text large-heading yellow-shadow-text georgia-text">physical books</h2>
        </div>
        <div>
            <?php if ($results) {
                ?><div class="tomc-shop-books-sort-by-section" data-format="physical">
                    <span>sort by</span>
                    <span aria-label="The 'oldest' option is selected" class="tomc-shop-books-sort-options tomc-shop-books-sort-options-selected tomc-shop-books-oldest" data-order='asc'>oldest</span>
                    <span aria-label="The 'newest' option is not selected" class="tomc-shop-books-sort-options tomc-shop-books-newest" data-order="desc">newest</span>
                    <span aria-label="The 'random' option is not selected" class="tomc-shop-books-sort-options tomc-shop-books-random">random</span>
                </div>
                <div class="tomc-book-org--columns-container">
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
                        <a class="centered-text"href="<?php echo get_permalink($results[$index]['product_url']); ?>">
                            <h3><?php echo $results[$index]['title']; ?></h3>
                        </a>
                        <p class="centered-text"><strong><?php echo $results[$index]['pen_name'] ? 'by ' . $results[$index]['pen_name'] : 'by unknown or anonymous author'; ?></strong></p>
                        <div class="tomc-browse--search-result-bottom-section">
                            <p><?php echo $results[$index]['book_description'].substr(0, 500) . '...'; ?></p>
                        </div>
                <?php }
                ?></div>
            <?php } else {
                ?><p class="centered-text">No physical books have been added yet. Check back soon!</p>
            <?php } ?>
            <!-- </div>  tomc-book-organization--newly-added-continued-ebooks -->
        </div>
    </div>
</main>

<?php get_footer(); ?>