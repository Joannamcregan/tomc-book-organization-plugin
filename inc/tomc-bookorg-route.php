<?php

add_action('rest_api_init', 'tomcBookorgRegisterRoute');

function tomcBookorgRegisterRoute() {
    register_rest_route('tomcBookorg/v1', 'addBook', array(
        'methods' => 'POST',
        'callback' => 'addNewBook'
    ));
    register_rest_route('tomcBookorg/v1', 'addLanguage', array(
        'methods' => 'POST',
        'callback' => 'addNewLanguage'
    ));
    register_rest_route('tomcBookorg/v1', 'addBookLanguages', array(
        'methods' => 'POST',
        'callback' => 'addNewBookLanguages'
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
    register_rest_route('tomcBookorg/v1', 'addBookPenName', array(
        'methods' => 'POST',
        'callback' => 'addNewBookPenName'
    ));
    register_rest_route('tomcBookorg/v1', 'getAllPenNamesByCreator', array(
        'methods' => 'POST',
        'callback' => 'getAllPenNamesByCreator'
    ));
    register_rest_route('tomcBookorg/v1', 'addBookProducts', array(
        'methods' => 'POST',
        'callback' => 'addNewBookProducts'
    ));
    register_rest_route('tomcBookorg/v1', 'addBookPublish', array(
        'methods' => 'POST',
        'callback' => 'publishNewBook'
    ));
    register_rest_route('tomcBookorg/v1', 'getBasicInfo', array(
        'methods' => 'POST',
        'callback' => 'getBasicInfo'
    ));
    register_rest_route('tomcBookorg/v1', 'updateBasicInfo', array(
        'methods' => 'POST',
        'callback' => 'updateBasicInfo'
    ));
    register_rest_route('tomcBookorg/v1', 'getLanguages', array(
        'methods' => 'POST',
        'callback' => 'getLanguages'
    ));
    register_rest_route('tomcBookorg/v1', 'editBookLanguages', array(
        'methods' => 'POST',
        'callback' => 'editBookLanguages'
    ));
    register_rest_route('tomcBookorg/v1', 'getGenres', array(
        'methods' => 'POST',
        'callback' => 'getGenres'
    ));
    register_rest_route('tomcBookorg/v1', 'editBookGenres', array(
        'methods' => 'POST',
        'callback' => 'editBookGenres'
    ));
    register_rest_route('tomcBookorg/v1', 'getIdentities', array(
        'methods' => 'POST',
        'callback' => 'getIdentities'
    ));
    register_rest_route('tomcBookorg/v1', 'editBookIdentities', array(
        'methods' => 'POST',
        'callback' => 'editBookIdentities'
    ));
    register_rest_route('tomcBookorg/v1', 'getContentWarnings', array(
        'methods' => 'POST',
        'callback' => 'getContentWarnings'
    ));
    register_rest_route('tomcBookorg/v1', 'editBookWarnings', array(
        'methods' => 'POST',
        'callback' => 'editBookWarnings'
    ));
    register_rest_route('tomcBookorg/v1', 'getReadalikes', array(
        'methods' => 'POST',
        'callback' => 'getReadalikes'
    ));
    register_rest_route('tomcBookorg/v1', 'getPenNameInfo', array(
        'methods' => 'POST',
        'callback' => 'getPenNameInfo'
    ));
    register_rest_route('tomcBookorg/v1', 'updateReadalikes', array(
        'methods' => 'POST',
        'callback' => 'editReadalikes'
    ));
    register_rest_route('tomcBookorg/v1', 'getProductTypes', array(
        'methods' => 'GET',
        'callback' => 'getProductTypes'
    ));
    register_rest_route('tomcBookorg/v1', 'getProductsByAuthor', array(
        'methods' => 'GET',
        'callback' => 'getProductsByAuthor'
    ));
    register_rest_route('tomcBookorg/v1', 'getProductsByAuthorAndTitle', array(
        'methods' => 'GET',
        'callback' => 'getProductsByAuthorAndTitle'
    ));
    register_rest_route('tomcBookorg/v1', 'getBookProducts', array(
        'methods' => 'POST',
        'callback' => 'getBookProducts'
    ));
    register_rest_route('tomcBookorg/v1', 'editBookPenName', array(
        'methods' => 'POST',
        'callback' => 'editBookPenName'
    ));
    register_rest_route('tomcBookorg/v1', 'updateBookProducts', array(
        'methods' => 'POST',
        'callback' => 'editBookProducts'
    ));
    register_rest_route('tomcBookorg/v1', 'togglePublish', array(
        'methods' => 'POST',
        'callback' => 'togglePublish'
    ));
}

function addNewBook($data){
    $title = sanitize_text_field($data['title']);
    $subtitle = sanitize_text_field($data['subtitle']);
    $edition = sanitize_text_field($data['edition']);
    $description = sanitize_textarea_field($data['description']);
    $excerpt = sanitize_textarea_field($data['excerpt']);
    $userId = $data['user'];
    $user = wp_get_current_user();
    global $wpdb;
    $books_table = $wpdb->prefix .  "tomc_books";
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $newBook = [];
        $newBook['title'] = $title;
        $newBook['subtitle'] = $subtitle != '' ? $subtitle : NULL;
        $newBook['publication_edition'] = $edition;
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

function editReadalikes($data){
    $user = wp_get_current_user();
    global $wpdb;
    $readalikes_table = $wpdb->prefix .  "tomc_readalikes";
    $book = sanitize_text_field($data['book']);
    $book0 = sanitize_text_field($data['book0']);
    $author0 = sanitize_text_field($data['author0']);
    $book1 = sanitize_text_field($data['book1']);
    $author1 = sanitize_text_field($data['author1']);
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $wpdb->delete(
            $readalikes_table,
            array('bookid' => $book));
            addNewBookReadalikes($data);
            return 'success';
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}

function getReadalikes($data){
    $user = wp_get_current_user();
    global $wpdb;
    $readalikes_table = $wpdb->prefix .  "tomc_book_readalikes";
    $book = sanitize_text_field($data['book']);
    $query = 'SELECT * FROM ' . $readalikes_table . ' WHERE bookid = ' . $book . ' LIMIT 2';
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $result = $wpdb->get_results($query, ARRAY_A);
        return $result;
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}

function getAllPenNamesByCreator(){
    $user = wp_get_current_user();
    $userId = $user->ID;
    global $wpdb;
    $pennames_table = $wpdb->prefix . "posts";
    $query = 'SELECT id, post_title FROM %i WHERE post_type = "author-profile" and post_status = "publish" and post_author = %d;';
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $results = $wpdb->get_results($wpdb->prepare($query, $pennames_table, $userId), ARRAY_A);
        return $results;
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}

function getPenNameInfo($data){
    $user = wp_get_current_user();
    $userId = $user->ID;
    global $wpdb;
    $pennames_books_table = $wpdb->prefix .  "tomc_pen_names_books";
    $pennames_table = $wpdb->prefix . "posts";
    $book = sanitize_text_field($data['book']);
    $query = 'SELECT p.id, p.post_title FROM %i pb JOIN %i p ON pb.pennameid = p.id WHERE pb.bookid = %d AND p.post_type = "author-profile" and p.post_status = "publish" and p.post_author = %d;';
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $results = $wpdb->get_results($wpdb->prepare($query, $pennames_books_table, $pennames_table, $book, $userId), ARRAY_A);
        return $results;
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}

function getBasicInfo($data){
    $user = wp_get_current_user();
    global $wpdb;
    $books_table = $wpdb->prefix .  "tomc_books";
    $book = sanitize_text_field($data['book']);
    $query = 'SELECT * FROM ' . $books_table . ' WHERE ID = ' . $book;
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $result = $wpdb->get_row($query, ARRAY_A);
        return $result;
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}

function updateBasicInfo($data){
    $user = wp_get_current_user();
    global $wpdb;
    $books_table = $wpdb->prefix .  "tomc_books";
    $book = sanitize_text_field($data['book']);
    $title = sanitize_text_field($data['title']);
    $subtitle = sanitize_text_field($data['subtitle']);
    $edition = sanitize_text_field($data['edition']);
    $description = sanitize_textarea_field($data['description']);
    $excerpt = sanitize_textarea_field($data['excerpt']);
    $query = 'SELECT * FROM ' . $books_table . ' WHERE ID = ' . $book;
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $wpdb->update(
            $books_table, 
            array(
                'title' => $title,
                'subtitle' => $subtitle,
                'publication_edition' => $edition,
                'book_description' => $description,
                'book_excerpt' => $excerpt
            ), 
            array('id' => $book));
            return 'success';
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}

function editBookGenres($data) {
    $book = sanitize_text_field($data['book']);
    $user = wp_get_current_user();
    global $wpdb;
    $book_genres_table = $wpdb->prefix . "tomc_book_genres";
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $wpdb->delete(
            $book_genres_table,
            array('bookid' => $book));
            addNewBookGenres($data);
            return 'success';
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}

function editBookLanguages($data) {
    $book = sanitize_text_field($data['book']);
    $languages = explode(',', trim(sanitize_text_field($data['languages']), '[]'));
    $now = date('Y-m-d H:i:s');
    $user = wp_get_current_user();
    global $wpdb;
    $book_languages_table = $wpdb->prefix . "tomc_book_languages";
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $wpdb->delete(
            $book_languages_table,
            array('bookid' => $book));
            addNewBookLanguages($data);
            return 'success';
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}

function addNewLanguage($data) {
    $language_name = sanitize_text_field($data['language_name']);
    $userid = sanitize_text_field($data['user']);
    $user = wp_get_current_user();
    global $wpdb;
    $languages_table = $wpdb->prefix . "tomc_publication_languages";
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $newLanguage = [];
        $newLanguage['language_name'] = $language_name;
        $newLanguage['createdBy'] = $userid;
        $newLanguage['createdate'] = date('Y-m-d H:i:s');
        $wpdb->insert($languages_table, $newLanguage);
        $newLanguageId = $wpdb->insert_id;
        return $newLanguageId;
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}

function getLanguages($data){
    $user = wp_get_current_user();
    global $wpdb;
    $languages_table = $wpdb->prefix . "tomc_publication_languages";
    $book_languages_table = $wpdb->prefix .  "tomc_book_languages";
    $book = sanitize_text_field($data['book']);
    // $query = 'SELECT a.id, a.language_name, CASE WHEN a.id IN (SELECT b.languageid FROM %i b WHERE b.bookid = %s) THEN 1 ELSE 0 END AS isselected FROM %i a;';
    $query = 'WITH cte AS (SELECT languageid FROM %i WHERE bookid = %d)
    SELECT a.id, a.language_name, b.languageid
    FROM %i a
    LEFT JOIN cte b ON a.id = b.languageid';
    // $query = 'SELECT a.id, a.language_name, if(a.id IN (SELECT b.languageid FROM %i b WHERE b.bookid = %s), true, false) AS selected FROM %i a;';
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        // $prepare = $wpdb->prepare($query, $book_languages_table, $book, $languages_table);
        $results = $wpdb->get_results($wpdb->prepare($query, $book_languages_table, $book, $languages_table), ARRAY_A);
        return $results;
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}

function editBookIdentities($data) {
    $book = sanitize_text_field($data['book']);
    $identities = explode(',', trim(sanitize_text_field($data['identities']), '[]'));
    $user = wp_get_current_user();
    global $wpdb;
    $book_identities_table = $wpdb->prefix . "tomc_book_identities";
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $wpdb->delete(
            $book_identities_table,
            array('bookid' => $book));
            addNewBookIdentities($data);
            return 'success';
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}

function getIdentities($data){
    $user = wp_get_current_user();
    global $wpdb;
    $identities_table = $wpdb->prefix . "tomc_character_identities";
    $book_identities_table = $wpdb->prefix .  "tomc_book_identities";
    $book = sanitize_text_field($data['book']);
    $query = 'WITH cte AS (SELECT identityid FROM %i WHERE bookid = %d)
    SELECT a.id, a.identity_name, b.identityid
    FROM %i a
    LEFT JOIN cte b ON a.id = b.identityid';
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $results = $wpdb->get_results($wpdb->prepare($query, $book_identities_table, $book, $identities_table), ARRAY_A);
        return $results;
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}

function editBookPenName($data){
    $book = sanitize_text_field($data['book']);
    $pennameid = sanitize_text_field($data['pennameid']);
    $user = wp_get_current_user();
    global $wpdb;
    $pennames_books_table = $wpdb->prefix . "tomc_pen_names_books";
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $wpdb->update(
            $pennames_books_table,
            array(
                'pennameid' => $pennameid
            ),
            array(
                'bookid' => $book
            )
        );
            return 'success';
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}

function editBookWarnings($data) {
    $book = sanitize_text_field($data['book']);
    $warnings = explode(',', trim(sanitize_text_field($data['warnings']), '[]'));
    $user = wp_get_current_user();
    global $wpdb;
    $book_warnings_table = $wpdb->prefix . "tomc_book_warnings";
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $wpdb->delete(
            $book_warnings_table,
            array('bookid' => $book));
            addNewBookWarnings($data);
            return 'success';
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}

function getContentWarnings($data){
    $user = wp_get_current_user();
    global $wpdb;
    $warnings_table = $wpdb->prefix . "tomc_content_warnings";
    $book_warnings_table = $wpdb->prefix .  "tomc_book_warnings";
    $book = sanitize_text_field($data['book']);
    $query = 'WITH cte AS (SELECT warningid FROM %i WHERE bookid = %d)
    SELECT a.id, a.warning_name, b.warningid
    FROM %i a
    LEFT JOIN cte b ON a.id = b.warningid';
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $results = $wpdb->get_results($wpdb->prepare($query, $book_warnings_table, $book, $warnings_table), ARRAY_A);
        return $results;
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}

function getGenres($data){
    $user = wp_get_current_user();
    global $wpdb;
    $genres_table = $wpdb->prefix . "tomc_genres";
    $book_genres_table = $wpdb->prefix .  "tomc_book_genres";
    $book = sanitize_text_field($data['book']);
    $query = 'WITH cte AS (SELECT genreid FROM %i WHERE bookid = %d)
    SELECT a.id, a.genre_name, a.genre_level, b.genreid
    FROM %i a
    LEFT JOIN cte b ON a.id = b.genreid
    WHERE a.genre_name is not null
    and a.genre_name <> ""';
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $results = $wpdb->get_results($wpdb->prepare($query, $book_genres_table, $book, $genres_table), ARRAY_A);
        return $results;
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
        if ($book0 != '' || $book1 != ''){
            $wpdb->query($wpdb->prepare($bookReadalikesQuery));
        }
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
    $genres1 = explode(',', trim(sanitize_text_field($data['genres1']), '[]'));
    $genres2 = explode(',', trim(sanitize_text_field($data['genres2']), '[]'));
    $genres3 = explode(',', trim(sanitize_text_field($data['genres3']), '[]'));
    $now = date('Y-m-d H:i:s');
    $user = wp_get_current_user();
    global $wpdb;
    $book_genres_table = $wpdb->prefix . "tomc_book_genres";
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $bookGenresQuery = 'insert into ' . $book_genres_table . '(bookid, genreid, createdate) values '; //(' . $book . ', ' . $genres1 . ', "' . $now . '")
        if (count($genres1) > 0){
            foreach($genres1 as $genre){
                if (is_numeric($genre)){
                    $values = '(' . $book . ', ' . $genre . ', "' . $now . '"), ';
                    $bookGenresQuery .= $values;
                }
            }
        }
        if (count($genres2) > 0){
            foreach($genres2 as $genre){
                if (is_numeric($genre)){
                    $values = '(' . $book . ', ' . $genre . ', "' . $now . '"), ';
                    $bookGenresQuery .= $values;
                }
            }
        }
        if (count($genres3) > 0){
            foreach($genres3 as $genre){
                if (is_numeric($genre)){
                    $values = '(' . $book . ', ' . $genre . ', "' . $now . '"), ';
                    $bookGenresQuery .= $values;
                }
            }
        }
        $bookGenresQuery = rtrim($bookGenresQuery, ', ');
        $wpdb->query($wpdb->prepare($bookGenresQuery));
        return 'success';
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}

function addNewBookLanguages($data) {
    $book = sanitize_text_field($data['book']);
    $languages = explode(',', trim(sanitize_text_field($data['languages']), '[]'));
    $now = date('Y-m-d H:i:s');
    $user = wp_get_current_user();
    global $wpdb;
    $book_languages_table = $wpdb->prefix . "tomc_book_languages";
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $bookLanguagesQuery = 'insert into ' . $book_languages_table . '(bookid, languageid, createdate) values ';
        if (count($languages) > 0){
            for($i = 0; $i < count($languages); $i++){
                if (is_numeric($languages[$i])){
                    if($i == 0){
                        $values = '(' . $book . ', ' . $languages[$i] . ', "' . $now . '")';                        
                    }else{
                        $values = ', (' . $book . ', ' . $languages[$i] . ', "' . $now . '")';  
                    }
                    $bookLanguagesQuery .= $values;
                }
            }
        }
        $wpdb->query($wpdb->prepare($bookLanguagesQuery));
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
        $wpdb->query($wpdb->prepare($bookIdentitiesQuery));
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
        $wpdb->query($wpdb->prepare($bookWarningsQuery));
        return 'success';
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}

function addNewBookPenName($data) {
    $book = sanitize_text_field($data['book']);
    $penname = sanitize_text_field($data['penname']);
    $now = date('Y-m-d H:i:s');
    $user = wp_get_current_user();
    global $wpdb;
    $book_pen_name_table = $wpdb->prefix . "tomc_pen_names_books";
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $newBookPenName = [];
        $newBookPenName['bookid'] = $book;
        $newBookPenName['pennameid'] = $penname;
        $newBookPenName['createdate'] = date('Y-m-d H:i:s');
        $wpdb->insert($book_pen_name_table, $newBookPenName);
        $newBookPenNameId = $wpdb->insert_id;
        return $newBookPenNameId;
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}

function getProductTypes(){
    $user = wp_get_current_user();
    global $wpdb;
    $types_table = $wpdb->prefix . "tomc_product_types";
    $query = 'SELECT id, type_name FROM %i';
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $results = $wpdb->get_results($wpdb->prepare($query, $types_table), ARRAY_A);
        return $results;
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}

function getProductsByAuthor(){
    $user = wp_get_current_user();
    $userid = $user->ID;
    global $wpdb;
    $posts_table = $wpdb->prefix . "posts";
    $term_relationships_table = $wpdb->prefix . "term_relationships";
    $terms_table = $wpdb->prefix . "terms";
    $term_taxonomy_table = $wpdb->prefix . "term_taxonomy";
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $query="SELECT p.post_title, p.id, terms.name as type_name from %i p JOIN %i tr on p.id = tr.object_id JOIN %i terms on tr.term_taxonomy_id = terms.term_id AND terms.name <> 'services' JOIN %i tt on terms.term_id = tt.term_id AND tt.taxonomy = 'product_cat'  WHERE p.post_type = 'product' and p.post_status = 'publish' and p.post_author = %d ORDER BY p.post_title;";
        $results = $wpdb->get_results($wpdb->prepare($query, $posts_table, $term_relationships_table, $term_relationships_table, $term_relationships_table, $userid), ARRAY_A);
        return $results;
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}

function getProductsByAuthorAndTitle($data){
    $title = sanitize_text_field($data['title']);
    $user = wp_get_current_user();
    $userid = $user->ID;
    global $wpdb;
    $posts_table = $wpdb->prefix . "posts";
    $term_relationships_table = $wpdb->prefix . "term_relationships";
    $terms_table = $wpdb->prefix . "terms";
    $term_taxonomy_table = $wpdb->prefix . "term_taxonomy";
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $query="SELECT p.post_title, p.id, terms.name as type_name, '' as thumbnail from %i p JOIN %i tr on p.id = tr.object_id JOIN %i terms on tr.term_taxonomy_id = terms.term_id AND terms.name <> 'services' JOIN %i tt on terms.term_id = tt.term_id AND tt.taxonomy = 'product_cat'  WHERE p.post_type = 'product' and p.post_status = 'publish' and p.post_author = %d and p.post_title like %s ORDER BY p.post_title;";
        $results = $wpdb->get_results($wpdb->prepare($query, $posts_table, $term_relationships_table, $terms_table, $term_taxonomy_table, $userid, '%' . $wpdb->esc_like($title) . '%'), ARRAY_A);
        for($index = 0; $index < count($results); $index++){
            $results[$index]['thumbnail'] = get_the_post_thumbnail_url($results[$index]['id']);
        }
        return $results;
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}

function editBookProducts($data){
    $user = wp_get_current_user();
    global $wpdb;
    $products_table = $wpdb->prefix .  "tomc_book_products";
    $book = sanitize_text_field($data['book']);
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $wpdb->delete(
            $products_table,
            array('bookid' => $book));
            addNewBookProducts($data);
            return $book;
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}

function getBookProducts($data){
    $book = sanitize_text_field($data['book']);
    $now = date('Y-m-d H:i:s');
    $user = wp_get_current_user();
    $userId = $user->ID;
    global $wpdb;
    $posts_table = $wpdb->prefix . "posts";
    $meta_table = $wpdb->prefix . "postmeta";
    $book_products_table = $wpdb->prefix . "tomc_book_products";
    $books_table = $wpdb->prefix .  "tomc_books";
    $terms_table = $wpdb->prefix . "terms";
    $term_relationships_table = $wpdb->prefix . "term_relationships";
    $term_taxonomy_table = $wpdb->prefix . "term_taxonomy";
    $query = 'WITH cte AS 
        (SELECT b.*, a.product_image_id
        FROM %i a 
        JOIN %i b ON a.id = b.bookid 
        WHERE a.id = %d)
    SELECT a.id, a.post_title, terms.name, p.guid, b.productid, b.typeid, p.guid, b.product_image_id
    FROM %i a
    JOIN %i tr on a.id = tr.object_id
    JOIN %i terms on tr.term_taxonomy_id = terms.term_id
    -- AND terms.name in ("E-Books", "Audiobooks", "Paperback Books", "Hardcover Books")
    AND terms.name <> "services"
    JOIN %i tt on terms.term_id = tt.term_id
    AND tt.taxonomy = "product_cat"
    JOIN %i m ON a.id = m.post_id
    AND m.meta_key = %s
    JOIN %i p ON m.meta_value =  p.id
    LEFT JOIN cte b ON a.id = b.productid
    WHERE a.post_type = %s and a.post_status = %s and a.post_author = %d 
    ORDER BY a.post_title;';
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $results = $wpdb->get_results($wpdb->prepare($query, $books_table, $book_products_table, $book, $posts_table, $term_relationships_table, $terms_table, $term_taxonomy_table, $meta_table, '_thumbnail_id', $posts_table, 'product', 'publish', $userId), ARRAY_A);
        return $results;
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
    // return $wpdb->prepare($query, $books_table, $book_products_table, $book, $posts_table, $term_relationships_table, $terms_table, $term_taxonomy_table, $meta_table, '_thumbnail_id', $posts_table, 'product', 'publish', $userId);
}

function addNewBookProducts($data) {
    $book = sanitize_text_field($data['book']);
    $products = explode(',', trim(sanitize_text_field($data['products']), '[]'));
    $types = explode(',', trim(sanitize_text_field($data['types']), '[]'));
    $imageProductId = sanitize_text_field($data['image']);
    $now = date('Y-m-d H:i:s');
    $user = wp_get_current_user();
    global $wpdb;
    $book_products_table = $wpdb->prefix . "tomc_book_products";
    $books_table = $wpdb->prefix .  "tomc_books";

    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $bookProductsQuery = 'INSERT INTO ' . $book_products_table . '(bookid, productid, typeid, createdate) VALUES ';
        if (count($products) > 0){
            for($i = 0; $i < count($products); $i++){
                if ($i == 0){
                    $values = '(' . $book . ', ' . $products[$i] . ', ' . $types[$i] . ', "' . $now . '")';                        
                } else {
                    $values = ', (' . $book . ', ' . $products[$i] . ', ' . $types[$i] . ', "' . $now . '")';  
                }
                $bookProductsQuery .= $values;
            }
        }
        $wpdb->query($wpdb->prepare($bookProductsQuery));
        $wpdb->update(
            $books_table,
            array(
                'product_image_id' => $imageProductId
            ),
            array(
                'id' => $book
            )
        );
        return 'success';
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}

function publishNewBook($data) {
    $book = sanitize_text_field($data['book']);
    $products = explode(',', trim(sanitize_text_field($data['products']), '[]'));
    $types = explode(',', trim(sanitize_text_field($data['types']), '[]'));
    $imageProductId = sanitize_text_field($data['image']);
    $now = date('Y-m-d H:i:s');
    $user = wp_get_current_user();
    global $wpdb;
    $book_products_table = $wpdb->prefix . "tomc_book_products";
    $books_table = $wpdb->prefix .  "tomc_books";

    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $bookProductsQuery = 'INSERT INTO ' . $book_products_table . '(bookid, productid, typeid, createdate) VALUES ';
        if (count($products) > 0){
            for($i = 0; $i < count($products); $i++){
                if ($i == 0){
                    $values = '(' . $book . ', ' . $products[$i] . ', ' . $types[$i] . ', "' . $now . '")';                        
                } else {
                    $values = ', (' . $book . ', ' . $products[$i] . ', ' . $types[$i] . ', "' . $now . '")';  
                }
                $bookProductsQuery .= $values;
            }
        }
        $wpdb->query($wpdb->prepare($bookProductsQuery));
        $wpdb->update(
            $books_table,
            array(
                'product_image_id' => $imageProductId,
                'isLive' => 1
            ),
            array(
                'id' => $book
            )
        );
        // return 'success';
        return $wpdb->prepare($bookProductsQuery);
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}

function togglePublish($data){
    $user = wp_get_current_user();
    global $wpdb;
    $books_table = $wpdb->prefix .  "tomc_books";
    $book = sanitize_text_field($data['book']);
    $isLive = sanitize_text_field($data['status']);
    if (is_user_logged_in() && (in_array( 'dc_vendor', (array) $user->roles ) )){
        $wpdb->update(
            $books_table, 
            array(
                'islive' => boolval($isLive)
            ), 
            array('id' => $book));
            return 'success';
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}