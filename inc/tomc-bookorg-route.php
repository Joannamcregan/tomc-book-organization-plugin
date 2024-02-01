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
    register_rest_route('tomcBookorg/v1', 'addBookReadalikes', array(
        'methods' => 'POST',
        'callback' => 'addNewBookReadalikes'
    ));
    register_rest_route('tomcBookorg/v1', 'addWarning', array(
        'methods' => 'POST',
        'callback' => 'addNewWarning'
    ));
    register_rest_route('tomcBookorg/v1', 'addBookWarnings', array(
        'methods' => 'POST',
        'callback' => 'addNewBookWarnings'
    ));
    register_rest_route('tomcBookorg/v1', 'addIdentity', array(
        'methods' => 'POST',
        'callback' => 'addNewIdentity'
    )); 
    register_rest_route('tomcBookorg/v1', 'addBookIdentities', array(
        'methods' => 'POST',
        'callback' => 'addNewBookIdentities'
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

function addNewBookReadalikes($data) {
    $book = sanitize_text_field($data['book']);
    $book0 = sanitize_text_field($data['book0']);
    $author0 = sanitize_text_field($data['author0']);
    $book1 = sanitize_text_field($data['book1']);
    $author1 = sanitize_text_field($data['author1']);
    $now = date('Y-m-d H:i:s');
    $user = wp_get_current_user();
    global $wpdb;
    $book_readalikes_table = $wpdb->prefix . "tomc_book_readalikes";
    $bookReadalikesQuery = 'insert into ' . $book_readalikes_table . '(bookid, createdate, readalike_title, readalike_author) values';
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        if ($book0 != ''){
            $value = '(' . $book . ', "' . $now . '", "' . $book0 . '", ';
            $value .= ($author0 == '') ? 'NULL' : '"' . $author0 . '"';
            $value .= ')';
            $bookReadalikesQuery .= $value;
        }
        if ($book0 != '' && $book1 != '') {
            $bookReadalikesQuery .= ', ';
        }
        if ($book1 != ''){
            $value = '(' . $book . ', "' . $now . '", "' . $book1 . '", ';
            $value .= ($author1 == '') ? 'NULL' : '"' . $author1 . '"';
            $value .= ')';
            $bookReadalikesQuery .= $value;
        }
        $wpdb->query($bookReadalikesQuery);
        return 'success';
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

function addNewIdentity($data) {
    $identity_name = sanitize_text_field($data['identity_name']);
    $userid = sanitize_text_field($data['user']);
    $user = wp_get_current_user();
    global $wpdb;
    $identities_table = $wpdb->prefix . "tomc_character_identities";
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $newIdentity = [];
        $newIdentity['identity_name'] = $identity_name;
        $newIdentity['createdBy'] = $userid;
        $newIdentity['createdate'] = date('Y-m-d H:i:s');
        $wpdb->insert($identities_table, $newIdentity);
        $newIdentityId = $wpdb->insert_id;
        return $newIdentityId;
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}

function addNewWarning($data) {
    $warning_name = sanitize_text_field($data['warning_name']);
    $userid = sanitize_text_field($data['user']);
    $user = wp_get_current_user();
    global $wpdb;
    $warnings_table = $wpdb->prefix . "tomc_content_warnings";
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $newWarning = [];
        $newWarning['warning_name'] = $warning_name;
        $newWarning['createdBy'] = $userid;
        $newWarning['createdate'] = date('Y-m-d H:i:s');
        $wpdb->insert($warnings_table, $newWarning);
        $newWarningId = $wpdb->insert_id;
        return $newWarningId;
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

function addNewBookIdentities($data) {
    $book = sanitize_text_field($data['book']);
    $identities = explode(',', trim(sanitize_text_field($data['identities']), '[]'));
    $now = date('Y-m-d H:i:s');
    $user = wp_get_current_user();
    global $wpdb;
    $book_identities_table = $wpdb->prefix . "tomc_book_identities";
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $bookIdentitiesQuery = 'insert into ' . $book_identities_table . '(bookid, identityid, createdate) values ';
        if (count($identities) > 0){
            for($i = 0; $i < count($identities); $i++){
                if (is_numeric($identities[$i])){
                    if($i == 0){
                        $values = '(' . $book . ', ' . $identities[$i] . ', "' . $now . '")';                        
                    }else{
                        $values = ', (' . $book . ', ' . $identities[$i] . ', "' . $now . '")';  
                    }
                    $bookIdentitiesQuery .= $values;
                }
            }
        }
        $wpdb->query($bookIdentitiesQuery);
        return $bookIdentitiesQuery;
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}

function addNewBookWarnings($data) {
    $book = sanitize_text_field($data['book']);
    $warnings = explode(',', trim(sanitize_text_field($data['warnings']), '[]'));
    $now = date('Y-m-d H:i:s');
    $user = wp_get_current_user();
    global $wpdb;
    $book_warnings_table = $wpdb->prefix . "tomc_book_warnings";
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $bookWarningsQuery = 'insert into ' . $book_warnings_table . '(bookid, warningid, createdate) values ';
        if (count($warnings) > 0){
            for($i = 0; $i < count($warnings); $i++){
                if (is_numeric($warnings[$i])){
                    if($i == 0){
                        $values = '(' . $book . ', ' . $warnings[$i] . ', "' . $now . '")';                        
                    }else{
                        $values = ', (' . $book . ', ' . $warnings[$i] . ', "' . $now . '")';  
                    }
                    $bookWarningsQuery .= $values;
                }
            }
        }
        $wpdb->query($bookWarningsQuery);
        return 'success';
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}