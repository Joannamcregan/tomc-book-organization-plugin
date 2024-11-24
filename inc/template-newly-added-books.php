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
        limit 100';
$results = $wpdb->get_results($wpdb->prepare($query, $books_table, $book_products_table, $product_types_table, $pen_names_table, $posts_table, $posts_table, 'e-books'), ARRAY_A);

?><main class="half-screen">
    <div class="banner"><h1 class="centered-text banner-heading-46">Books By Our Authors</h1></div>
    <div class="sub-banner--slim">
        <h2 class="centered-text large-heading yellow-shadow-text georgia-text">ebooks</h2>
    </div>
    <div>
        <?php if ($results) {
            ?><div class="tomc-shop-books-sort-by-section">
                <span>sort by</span>
                <input type="radio" id="tomc-shop-ebooks-sort-by-oldest" name="tomc-shop-ebooks-sort-by" value="asc" checked>
                <label for="tomc-shop-ebooks-sort-by-oldest">oldest</label>
                <input type="radio" id="tomc-shop-ebooks-sort-by-newest" name="tomc-shop-ebooks-sort-by" value="desc">
                <label for="tomc-shop-ebooks-sort-by-newest">newest</label><br>
            </div>
            <?php for($index = 0; $index < count($results); $index++){
                ?><div class="
                    <?php if ($index % 2 == 0){
                        echo 'tomc-book-org--two-column--even';
                    } else {
                        echo 'tomc-book-org--two-column--odd';
                    }
                    if ($index % 3 == 0){
                        echo 'tomc-book-org--three-column--three';
                    } else if ($index % 2 == 0){
                        echo 'tomc-book-org--three-column--two';
                    } else {
                        echo 'tomc-book-org--three-column--one';
                    }
                    if ($index % 4 == 0){
                        echo 'tomc-book-org--four-column--four';
                    } else if ($index % 3 == 0){
                        echo 'tomc-book-org--four-column--three';
                    } else if ($index % 2 == 0){
                        echo 'tomc-book-org--four-column--two';
                    } else {
                        echo 'tomc-book-org--four-column--one';
                    }
                ?>">
                    <div class="tomc-browse--search-result-top-section">
                        <div class="tomc-result-top-border-2">
                            <div class="tomc-result-top-border-1">
                                <div class="tomc-result-top-border-0">
                                    <a href="<?php echo get_permalink($results[$index]['product_url']); ?>">
                                        <h3><?php echo $results[$index]['title']; ?></h3>
                                    </a>
                                    <h4><?php echo $results[$index]['pen_name'] ? 'by ' . $results[$index]['pen_name'] : 'by unknown or anonymous author'; ?></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tomc-browse--search-result-bottom-section">
                        <p><?php echo $results[$index]['book_description'].substr(0, 500) . '...'; ?></p>
                    </div>
                </div>
            <?php }
        } else {
            ?><p class="centered-text padded-paragraph-20-x">No ebooks have been added yet. Check back soon!</p>
        <?php } ?>
        <!-- </div>  tomc-book-organization--newly-added-continued-ebooks -->
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
        limit 100';
    $results = $wpdb->get_results($wpdb->prepare($query, $books_table, $book_products_table, $product_types_table, $pen_names_table, $posts_table, $posts_table, 'audiobooks'), ARRAY_A);

    ?><div class="sub-banner--slim">
        <h2 class="centered-text large-heading yellow-shadow-text georgia-text">audiobooks</h2>
    </div>
    <div>
        <?php if ($results) {
            ?><div class="tomc-shop-books-sort-by-section">
                <span>sort by</span>
                <input type="radio" id="tomc-shop-audiobooks-sort-by-oldest" name="tomc-shop-audiobooks-sort-by" value="asc" checked>
                <label for="tomc-shop-audiobooks-sort-by-oldest">oldest</label>
                <input type="radio" id="tomc-shop-audiobooks-sort-by-newest" name="tomc-shop-audiobooks-sort-by" value="desc">
                <label for="tomc-shop-audiobooks-sort-by-newest">newest</label><br>
            </div>
            <?php for($index = 0; $index < count($results); $index++){
                ?><div class="
                    <?php if ($index % 2 == 0){
                        echo 'tomc-book-org--two-column--even';
                    } else {
                        echo 'tomc-book-org--two-column--odd';
                    }
                    if ($index % 3 == 0){
                        echo 'tomc-book-org--three-column--three';
                    } else if ($index % 2 == 0){
                        echo 'tomc-book-org--three-column--two';
                    } else {
                        echo 'tomc-book-org--three-column--one';
                    }
                    if ($index % 4 == 0){
                        echo 'tomc-book-org--four-column--four';
                    } else if ($index % 3 == 0){
                        echo 'tomc-book-org--four-column--three';
                    } else if ($index % 2 == 0){
                        echo 'tomc-book-org--four-column--two';
                    } else {
                        echo 'tomc-book-org--four-column--one';
                    }
                ?>">
                    <div class="tomc-browse--search-result-top-section">
                        <div class="tomc-result-top-border-2">
                            <div class="tomc-result-top-border-1">
                                <div class="tomc-result-top-border-0">
                                    <a href="<?php echo get_permalink($results[$index]['product_url']); ?>">
                                        <h3><?php echo $results[$index]['title']; ?></h3>
                                    </a>
                                    <h4><?php echo $results[$index]['pen_name'] ? 'by ' . $results[$index]['pen_name'] : 'by unknown or anonymous author'; ?></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tomc-browse--search-result-bottom-section">
                        <p><?php echo $results[$index]['book_description'].substr(0, 500) . '...'; ?></p>
                    </div>
                </div>
            <?php }
        } else {
            ?><p class="centered-text">No audiobooks have been added yet. Check back soon!</p>
        <?php } ?>
        <!-- </div>  tomc-book-organization--newly-added-continued-audiobooks -->
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
        limit 100';
    $results = $wpdb->get_results($wpdb->prepare($query, $books_table, $book_products_table, $product_types_table, $pen_names_table, $posts_table, $posts_table, 'paperbacks', 'hardcovers'), ARRAY_A);

    ?><div class="sub-banner--slim">
        <h2 class="centered-text large-heading yellow-shadow-text georgia-text">physical books</h2>
    </div>
    <div>
        <?php if ($results) {
            ?><div class="tomc-shop-books-sort-by-section">
                <span>sort by</span>
                <input type="radio" id="tomc-shop-physical-books-sort-by-oldest" name="tomc-shop-physical-books-sort-by" value="asc" checked>
                <label for="tomc-shop-physical-books-sort-by-oldest">oldest</label>
                <input type="radio" id="tomc-shop-physical-books-sort-by-newest" name="tomc-shop-physical-books-sort-by" value="desc">
                <label for="tomc-shop-physical-books-sort-by-newest">newest</label><br>
            </div>
            <?php for($index = 0; $index < count($results); $index++){
                ?><div class="
                    <?php if ($index % 2 == 0){
                        echo 'tomc-book-org--two-column--even';
                    } else {
                        echo 'tomc-book-org--two-column--odd';
                    }
                    if ($index % 3 == 0){
                        echo 'tomc-book-org--three-column--three';
                    } else if ($index % 2 == 0){
                        echo 'tomc-book-org--three-column--two';
                    } else {
                        echo 'tomc-book-org--three-column--one';
                    }
                    if ($index % 4 == 0){
                        echo 'tomc-book-org--four-column--four';
                    } else if ($index % 3 == 0){
                        echo 'tomc-book-org--four-column--three';
                    } else if ($index % 2 == 0){
                        echo 'tomc-book-org--four-column--two';
                    } else {
                        echo 'tomc-book-org--four-column--one';
                    }
                ?>">
                    <div class="tomc-browse--search-result-top-section">
                        <div class="tomc-result-top-border-2">
                            <div class="tomc-result-top-border-1">
                                <div class="tomc-result-top-border-0">
                                    <a href="<?php echo get_permalink($results[$index]['product_url']); ?>">
                                        <h3><?php echo $results[$index]['title']; ?></h3>
                                    </a>
                                    <h4><?php echo $results[$index]['pen_name'] ? 'by ' . $results[$index]['pen_name'] : 'by unknown or anonymous author'; ?></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tomc-browse--search-result-bottom-section">
                        <p><?php echo $results[$index]['book_description'].substr(0, 500) . '...'; ?></p>
                    </div>
                </div>
            <?php }
        } else {
            ?><p class="centered-text">No physical books have been added yet. Check back soon!</p>
        <?php } ?>
        <!-- </div>  tomc-book-organization--newly-added-continued-ebooks -->
    </div>
</main>

<?php get_footer(); ?>