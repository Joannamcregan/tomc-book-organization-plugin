<?php

add_action('rest_api_init', 'tomcBookorgRegisterRoute');

function tomcBookorgRegisterRoute() {
    register_rest_route('tomcBookorg/v1', 'addBook', array(
        'methods' => 'POST',
        'callback' => 'addNewBook'
    ));
    register_rest_route('tomcBookorg/v1', 'addGenre', array(
        'methods' => 'POST',
        'callback' => 'addNewGenre'
    ));
    register_rest_route('tomcBookorg/v1', 'addBookGenres', array(
        'methods' => 'POST',
        'callback' => 'addNewBookGenres'
    ));
}

function addNewBook($data){
    $title = sanitize_text_field($data['title']);
    $subtitle = sanitize_text_field($data['subtitle']);
    $edition = sanitize_text_field($data['edition']);
    $description = sanitize_text_field($data['description']);
    $excerpt = sanitize_text_field($data['excerpt']);
    $userId = $data['user'];
    $user = wp_get_current_user();
    global $wpdb;
    $books_table = $wpdb->prefix .  "tomc_books";
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $newBook = [];
        $newBook['title'] = $title;
        $newBook['subtitle'] = $subtitle != '' ? $subtitle : NULL;
        $newBook['publication_edition'] = is_int($edition) ? $edition : NULL;
        $newBook['product_image_id'] = NULL;
        $newBook['book_description'] = $description;
        $newBook['book_excerpt'] = $excerpt;
        $newBook['createdate'] = date('Y-m-d H:i:s'); 
        $newBook['createdby'] = $userId;
        $wpdb->insert($books_table, $newBook);
        $newBookId = $wpdb->insert_id;
        return $newBookId;
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}

function addNewGenre($data) {
    $genre_name = sanitize_text_field($data['genre_name']);
    $genre_level = sanitize_text_field($data['genre_level']);
    $userid = sanitize_text_field($data['user']);
    $user = wp_get_current_user();
    global $wpdb;
    $genres_table = $wpdb->prefix . "tomc_genres";
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $newGenre = [];
        $newGenre['genre_name'] = $genre_name;
        $newGenre['genre_level'] = $genre_level;
        $newGenre['createdby'] = $userid;
        $newGenre['createdate'] = date('Y-m-d H:i:s');
        $wpdb->insert($genres_table, $newGenre);
        $newGenreId = $wpdb->insert_id;
        return $newGenreId;
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}

function addNewBookGenres($data) {
    $book = sanitize_text_field($data['book']);
    $genres1 = sanitize_text_field($data['genres1']);
    $genres2 = explode(',', trim(sanitize_text_field($data['genres2']), '[]'));
    $genres3 = explode(',', trim(sanitize_text_field($data['genres3']), '[]'));
    $now = date('Y-m-d H:i:s');
    $user = wp_get_current_user();
    global $wpdb;
    $book_genres_table = $wpdb->prefix . "tomc_book_genres";
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $bookGenresQuery = 'insert into ' . $book_genres_table . '(bookid, genreid, createdate) values (' . $book . ', ' . $genres1 . ', "' . $now . '")';
        if (count($genres2) > 0){
            foreach($genres2 as $genre){
                if (is_numeric($genre)){
                    $values = ', (' . $book . ', ' . $genre . ', "' . $now . '")';
                    $bookGenresQuery .= $values;
                }
            }
        }
        if (count($genres3) > 0){
            foreach($genres3 as $genre){
                if (is_numeric($genre)){
                    $values = ', (' . $book . ', ' . $genre . ', "' . $now . '")';
                    $bookGenresQuery .= $values;
                }
            }
        }
        $wpdb->query($bookGenresQuery);
        return 'success';
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}