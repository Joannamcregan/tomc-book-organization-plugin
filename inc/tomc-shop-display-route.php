<?php

add_action('rest_api_init', 'tomcShopDisplayRegisterRoute');

function tomcShopDisplayRegisterRoute() {
    register_rest_route('tomcShopDisplay/v1', 'byDateAndFormat', array(
        'methods' => 'GET',
        'callback' => 'getBooksByDateAndFormat'
    ));
    register_rest_route('tomcShopDisplay/v1', 'byFormatRandom', array(
        'methods' => 'GET',
        'callback' => 'getBooksByFormatRandom'
    ));
    register_rest_route('tomcShopDisplay/v1', 'updateFormatDisplay', array(
        'methods' => 'GET',
        'callback' => 'updateFormatDisplay'
    ));
}

function updateFormatDisplay($data) {
    //need to account for order by selection and included genres
    global $wpdb;
    $books_table = $wpdb->prefix . "tomc_books";
    $book_genres_table = $wpdb->prefix .  "tomc_book_genres";
    $book_products_table = $wpdb->prefix . "tomc_book_products";
    $posts_table = $wpdb->prefix . "posts";
    $product_types_table = $wpdb->prefix . "tomc_product_types";
    $pen_names_table = $wpdb->prefix . "tomc_pen_names_books";
    $book_genres_table = $wpdb->prefix .  "tomc_book_genres";
    $genres_table = $wpdb->prefix . "tomc_genres";

    $startingCount = sanitize_text_field($data['count']);
    $format = sanitize_text_field($data['format']);
    $orderBy = sanitize_text_field($data['orderBy']);
    $genres = explode(',', trim(sanitize_text_field($data['genres']), '[]'));

    $genresClause = '';
    foreach($genres as $genre){
        $genresClause .= $genre;
        $genresClause .= ', ';
    }
    $genresClause = rtrim($genresClause, ', ');

    if ($format == 'physical'){
        $query = 'select distinct b.id, b.title, f.post_title as pen_name, b.book_description, b.createdate, g.id as product_url
        from %i b
        join %i bookgenres on b.id = bookgenres.bookid
        join %i genres on bookgenres.genreid = genres.id
        join %i c on b.id = c.bookid
        join %i d on c.typeid = d.id
        join %i e on b.id = e.bookid
        join %i f on e.pennameid = f.id
        join %i g on c.productid = g.id
        where d.type_name in (%s, %s)
        and genres.genre_name in (' . $genresClause . ')
        order by b.createdate ' . $orderBy .
        ' limit 2'; //change to 48
        $results = $wpdb->get_results($wpdb->prepare($query, $books_table, $book_genres_table, $genres_table, $book_products_table, $product_types_table, $pen_names_table, $posts_table, $posts_table, 'paperback books', 'hardcover books'), ARRAY_A);
    } else {
        $query = 'select distinct b.id, b.title, f.post_title as pen_name, b.book_description, b.createdate, g.id as product_url
        from %i b
        join %i bookgenres on b.id = bookgenres.bookid
        join %i genres on bookgenres.genreid = genres.id
        join %i c on b.id = c.bookid
        join %i d on c.typeid = d.id
        join %i e on b.id = e.bookid
        join %i f on e.pennameid = f.id
        join %i g on c.productid = g.id
        where d.type_name = %s
        and genres.genre_name in (' . $genresClause . ')
        order by b.createdate ' . $orderBy . 
        ' limit 2'; //change to 48
        $results = $wpdb->get_results($wpdb->prepare($query, $books_table, $book_genres_table, $genres_table, $book_products_table, $product_types_table, $pen_names_table, $posts_table, $posts_table, $format), ARRAY_A);
    }
    for($index = 0; $index < count($results); $index++){
        $results[$index]['product_url'] = get_permalink($results[$index]['product_url']);
    }
    return $results;
    // return $wpdb->prepare($query, $books_table, $book_genres_table, $genres_table, $book_products_table, $product_types_table, $pen_names_table, $posts_table, $posts_table, $format);
}

function getBooksByDateAndFormat($data) {
    global $wpdb;
    $books_table = $wpdb->prefix . "tomc_books";
    $book_genres_table = $wpdb->prefix .  "tomc_book_genres";
    $book_products_table = $wpdb->prefix . "tomc_book_products";
    $posts_table = $wpdb->prefix . "posts";
    $product_types_table = $wpdb->prefix . "tomc_product_types";
    $pen_names_table = $wpdb->prefix . "tomc_pen_names_books";
    $orderBy = sanitize_text_field($data['order']);
    $format = sanitize_text_field($data['format']);
    if ($format == 'physical'){
        $query = 'select distinct b.id, b.title, f.post_title as pen_name, b.book_description, b.createdate, g.id as product_url
        from %i b
        join %i c on b.id = c.bookid
        join %i d on c.typeid = d.id
        join %i e on b.id = e.bookid
        join %i f on e.pennameid = f.id
        join %i g on c.productid = g.id
        where d.type_name in (%s, %s)
        order by b.createdate ' . $orderBy .
        ' limit 12';
        $results = $wpdb->get_results($wpdb->prepare($query, $books_table, $book_products_table, $product_types_table, $pen_names_table, $posts_table, $posts_table, 'paperbacks', 'hardcovers'), ARRAY_A);
    } else {
        $query = 'select distinct b.id, b.title, f.post_title as pen_name, b.book_description, b.createdate, g.id as product_url
        from %i b
        join %i c on b.id = c.bookid
        join %i d on c.typeid = d.id
        join %i e on b.id = e.bookid
        join %i f on e.pennameid = f.id
        join %i g on c.productid = g.id
        where d.type_name = %s
        order by b.createdate ' . $orderBy . 
        ' limit 12';
        $results = $wpdb->get_results($wpdb->prepare($query, $books_table, $book_products_table, $product_types_table, $pen_names_table, $posts_table, $posts_table, $format), ARRAY_A);
    }
    for($index = 0; $index < count($results); $index++){
        $results[$index]['product_url'] = get_permalink($results[$index]['product_url']);
    }
    return $results;
}

function getBooksByFormatRandom($data) {
    global $wpdb;
    $books_table = $wpdb->prefix . "tomc_books";
    $book_genres_table = $wpdb->prefix .  "tomc_book_genres";
    $book_products_table = $wpdb->prefix . "tomc_book_products";
    $posts_table = $wpdb->prefix . "posts";
    $product_types_table = $wpdb->prefix . "tomc_product_types";
    $pen_names_table = $wpdb->prefix . "tomc_pen_names_books";
    $format = sanitize_text_field($data['format']);
    if ($format == 'physical'){
        $query = 'select distinct b.id, b.title, f.post_title as pen_name, b.book_description, b.createdate, g.id as product_url
        from %i b
        join %i c on b.id = c.bookid
        join %i d on c.typeid = d.id
        join %i e on b.id = e.bookid
        join %i f on e.pennameid = f.id
        join %i g on c.productid = g.id
        where d.type_name in (%s, %s)
        order by rand()
        limit 12';
        $results = $wpdb->get_results($wpdb->prepare($query, $books_table, $book_products_table, $product_types_table, $pen_names_table, $posts_table, $posts_table, 'paperbacks', 'hardcovers'), ARRAY_A);
    } else {
        $query = 'select distinct b.id, b.title, f.post_title as pen_name, b.book_description, b.createdate, g.id as product_url
        from %i b
        join %i c on b.id = c.bookid
        join %i d on c.typeid = d.id
        join %i e on b.id = e.bookid
        join %i f on e.pennameid = f.id
        join %i g on c.productid = g.id
        where d.type_name = %s
        order by rand()
        limit 12';
        $results = $wpdb->get_results($wpdb->prepare($query, $books_table, $book_products_table, $product_types_table, $pen_names_table, $posts_table, $posts_table, $format), ARRAY_A);
    }
    for($index = 0; $index < count($results); $index++){
        $results[$index]['product_url'] = get_permalink($results[$index]['product_url']);
    }
    return $results;
}