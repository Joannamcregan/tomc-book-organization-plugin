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
    $description = sanitize_text_field($data['description']);
    $excerpt = sanitize_text_field($data['excerpt']);
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

function getGenres($data){
    $user = wp_get_current_user();
    global $wpdb;
    $genres_table = $wpdb->prefix . "tomc_genres";
    $book_genres_table = $wpdb->prefix .  "tomc_book_genres";
    $book = sanitize_text_field($data['book']);
    $query = 'WITH cte AS (SELECT genreid FROM %i WHERE bookid = %d)
    SELECT a.id, a.genre_name, a.genre_level, b.genreid
    FROM %i a
    LEFT JOIN cte b ON a.id = b.genreid';
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
        $wpdb->query($wpdb->prepare($bookReadalikesQuery));
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
        return $bookLanguagesQuery;
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
        return 'success';
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}