<?php

add_action('rest_api_init', 'tomcBookorgRegisterRoute');

function tomcBookorgRegisterRoute() {
    register_rest_route('tomcBookorg/v1', 'addBook', array(
        'methods' => 'POST',
        'callback' => 'addNewBook'
    ));
    register_rest_route('tomcBookorg/v1', 'getChildGenres', array(
        'methods' => 'POST',
        'callback' => 'returnChildGenres'
    ));
}

function addNewBook($data){
    $title = sanitize_text_field($data['title']);
    $subtitle = sanitize_text_field($data['subtitle']);
    $edition = sanitize_text_field($data['edition']);
    $description = sanitize_text_field($data['description']);
    $excerpt = sanitize_text_field($data['excerpt']);
    global $wpdb;
    $books_table = $wpdb->prefix .  "tomc_books";
    if (is_user_logged_in()){
        $newBook = [];
        $newBook['title'] = $title;
        $newBook['subtitle'] = $subtitle != '' ? $subtitle : NULL;
        $newBook['publication_edition'] = is_int($edition) ? $edition : NULL;
        $newBook['book_description'] = $description;
        $newBook['book_excerpt'] = $excerpt;
        $newBook['createdate'] = date('Y-m-d H:i:s'); 
        $wpdb->insert($books_table, $newBook);
        $newBookId = $wpdb->insert_id;
        return $newBookId;
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}

function returnChildGenres($data){
    global $wpdb;
    $genreTable = $wpdb->prefix . "tomc_genres";
    $parentGenre = sanitize_text_field($data['category']);
    $genreQuery = $wpdb->get_results($wpdb->prepare(
        "SELECT g1.id, g1.genre_name from %i g
        left join %i g1 on g.id = g1.parentId1 
        where g.genre_name = %s 
        and g.parentId1 is NULL
        and g1.parentId1 is Not NULL
        union
        SELECT g2.id, g2.genre_name from %i g
        left join %i g2 on g.id = g2.parentId2 
        where g.genre_name = %s
        and g.parentId1 is NULL
        and g2.parentId2 is Not NULL
        union
        SELECT g3.id, g3.genre_name from %i g
        left join %i g3 on g.id = g3.parentId3 
        where g.genre_name = %s
        and g.parentId1 is NULL
        and g3.parentId3 is Not NULL",
        array(
            $genreTable,
            $genreTable,
            $parentGenre,
            $genreTable,
            $genreTable,
            $parentGenre,
            $genreTable,
            $genreTable,
            $parentGenre
        )
    ));
    // $genreQuery = $wpdb->get_results($wpdb->prepare(
    //     "SELECT g.genre_name as 'child' from %i g
    //     where g.genre_name = %s",
    //     array(
    //         $genreTable,
    //         $parentGenre
    //     )
    // ));
    return $genreQuery;
}