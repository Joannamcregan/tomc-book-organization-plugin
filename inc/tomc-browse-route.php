<?php

add_action('rest_api_init', 'tomcBrowseRegisterRoute');

function tomcBrowseRegisterRoute() {
    register_rest_route('tomcBrowse/v1', 'byGenres', array(
        'methods' => 'POST',
        'callback' => 'getBooksByGenre'
    ));
}

function getBooksByGenre($data){
    $anyLevel1 = sanitize_text_field($data['anyLevel1']);
    $anyLevel2 = sanitize_text_field($data['anyLevel2']);
    $anyLevel3 = sanitize_text_field($data['anyLevel3']);
    $selectedGenres1 = explode(',', trim(sanitize_text_field($data['selectedGenres1']), '[]'));
    $selectedGenres2 = explode(',', trim(sanitize_text_field($data['selectedGenres2']), '[]'));
    $selectedGenres3 = explode(',', trim(sanitize_text_field($data['selectedGenres3']), '[]'));
    $user = wp_get_current_user();
    global $wpdb;
    $books_table = $wpdb->prefix . "tomc_books";
    $book_genres_table = $wpdb->prefix .  "tomc_book_genres";
    $book_products_table = $wpdb->prefix . "tomc_book_products";
    $posts_table = $wpdb->prefix . "posts";
    $product_types_table = $wpdb->prefix . "tomc_product_types";
    $pen_names_table = $wpdb->prefix . "tomc_pen_names_books";
    if ($anyLevel1 > 0 && $anyLevel2 > 0 && $anyLevel3 > 0){
        $query = 'select distinct b.id, b.title, f.post_title as pen_name, b.book_description
        from %i b
        join %i c on b.id = c.bookid
        join %i d on c.typeid = d.id
        join %i e on b.id = e.bookid
        join %i f on e.pennameid = f.id
        order by b.createdate desc
        limit 200';
        $results = $wpdb->get_results($wpdb->prepare($query, $books_table, $book_products_table, $product_types_table, $pen_names_table, $posts_table), ARRAY_A);
        return $results;
    } else if ($anyLevel1 > 0 && $anyLevel2 > 0){
        $level3clause = '';
        foreach($selectedGenres3 as $genre){
            $level3clause .= intval($genre);
            $level3clause .= ', ';
        }
        $level3clause = rtrim($level3clause, ', ');
        $query = 'select distinct b.id, b.title, f.post_title as pen_name, b.book_description
        from %i b
        join %i c on b.id = c.bookid
        join %i d on c.typeid = d.id
        join %i e on b.id = e.bookid
        join %i f on e.pennameid = f.id
        where b.id in (select bookid from %i where genreid in (' . $level3clause . '))
        order by b.createdate desc';
        $results = $wpdb->get_results($wpdb->prepare($query, $books_table, $book_products_table, $product_types_table, $pen_names_table, $posts_table, $book_genres_table), ARRAY_A);
        return $results;
    // } else if ($anyLevel1 && $anyLevel3){

    // } else if ($anyLevel2 && $anyLevel3){

    // } else if ($anyLevel1){

    // } else if ($anyLevel2){

    // } else if ($anyLevel3){

    } else {
        $query = 'select distinct b.id, b.title, f.post_title as pen_name, b.book_description
        from %i b
        join %i c on b.id = c.bookid
        join %i d on c.typeid = d.id
        join %i e on b.id = e.bookid
        join %i f on e.pennameid = f.id
        where b.id in (select bookid from %i where genreid in (1,2))
        and b.id in (select bookid from %i where genreid in (4,5,6,7))
        and b.id in (select bookid from %i where genreid in (44,45,46,47))
        order by b.createdate desc';
        $results = $wpdb->get_results($wpdb->prepare($query, $books_table, $book_products_table, $product_types_table, $pen_names_table, $posts_table, $book_genres_table, $book_genres_table, $book_genres_table), ARRAY_A);
        return $results;
    }
}