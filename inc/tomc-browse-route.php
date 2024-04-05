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
        $query = 'select distinct b.id, b.title, b.product_image_id, f.post_title as pen_name, b.book_description, b.createdate, d.type_name, g.id as product_url
        from %i b
        join %i c on b.id = c.bookid
        join %i d on c.typeid = d.id
        join %i e on b.id = e.bookid
        join %i f on e.pennameid = f.id
        join %i g on c.productid = g.id
        where b.islive = 1
        order by b.createdate desc
        limit 200';
        $results = $wpdb->get_results($wpdb->prepare($query, $books_table, $book_products_table, $product_types_table, $pen_names_table, $posts_table, $posts_table), ARRAY_A);
        for($index = 0; $index < count($results); $index++){
            $results[$index]['product_url'] = get_permalink($results[$index]['product_url']);
            $results[$index]['product_image_id'] = get_the_post_thumbnail_url($results[$index]['product_image_id']);
        }
        return $results;
    } else if ($anyLevel1 > 0 && $anyLevel2 > 0){
        $level3clause = '';
        foreach($selectedGenres3 as $genre){
            $level3clause .= intval($genre);
            $level3clause .= ', ';
        }
        $level3clause = rtrim($level3clause, ', ');
        $query = 'select distinct b.id, b.title, b.product_image_id, f.post_title as pen_name, b.book_description, b.createdate, d.type_name, g.id as product_url
        from %i b
        join %i c on b.id = c.bookid
        join %i d on c.typeid = d.id
        join %i e on b.id = e.bookid
        join %i f on e.pennameid = f.id
        join %i g on c.productid = g.id
        where b.id in (select bookid from %i where genreid in (' . $level3clause . '))
        and b.islive = 1
        order by b.createdate desc';
        $results = $wpdb->get_results($wpdb->prepare($query, $books_table, $book_products_table, $product_types_table, $pen_names_table, $posts_table, $posts_table, $book_genres_table), ARRAY_A);
        for($index = 0; $index < count($results); $index++){
            $results[$index]['product_url'] = get_permalink($results[$index]['product_url']);
            $results[$index]['product_image_id'] = get_the_post_thumbnail_url($results[$index]['product_image_id']);
        }
        return $results;
    } else if ($anyLevel1 > 0 && $anyLevel3 > 0){
        $level2clause = '';
        foreach($selectedGenres2 as $genre){
            $level2clause .= intval($genre);
            $level2clause .= ', ';
        }
        $level2clause = rtrim($level2clause, ', ');
        $query = 'select distinct b.id, b.title, b.product_image_id, f.post_title as pen_name, b.book_description, b.createdate, d.type_name, g.id as product_url
        from %i b
        join %i c on b.id = c.bookid
        join %i d on c.typeid = d.id
        join %i e on b.id = e.bookid
        join %i f on e.pennameid = f.id
        join %i g on c.productid = g.id
        where b.id in (select bookid from %i where genreid in (' . $level2clause . '))
        and b.islive = 1
        order by b.createdate desc';
        $results = $wpdb->get_results($wpdb->prepare($query, $books_table, $book_products_table, $product_types_table, $pen_names_table, $posts_table, $posts_table, $book_genres_table), ARRAY_A);
        return $results;
    } else if ($anyLevel2 > 0 && $anyLevel3 > 0){
        $level1clause = '';
        foreach($selectedGenres1 as $genre){
            $level1clause .= intval($genre);
            $level1clause .= ', ';
        }
        $level1clause = rtrim($level1clause, ', ');
        $query = 'select distinct b.id, b.title, b.product_image_id, f.post_title as pen_name, b.book_description, b.createdate, d.type_name, g.id as product_url
        from %i b
        join %i c on b.id = c.bookid
        join %i d on c.typeid = d.id
        join %i e on b.id = e.bookid
        join %i f on e.pennameid = f.id
        join %i g on c.productid = g.id
        where b.id in (select bookid from %i where genreid in (' . $level1clause . '))
        and b.islive = 1
        order by b.createdate desc';
        $results = $wpdb->get_results($wpdb->prepare($query, $books_table, $book_products_table, $product_types_table, $pen_names_table, $posts_table, $posts_table, $book_genres_table), ARRAY_A);
        for($index = 0; $index < count($results); $index++){
            $results[$index]['product_url'] = get_permalink($results[$index]['product_url']);
            $results[$index]['product_image_id'] = get_the_post_thumbnail_url($results[$index]['product_image_id']);
        }
        return $results;
    } else if ($anyLevel1){
        $level2clause = '';
        foreach($selectedGenres2 as $genre){
            $level2clause .= intval($genre);
            $level2clause .= ', ';
        }
        $level3clause = '';
        foreach($selectedGenres3 as $genre){
            $level3clause .= intval($genre);
            $level3clause .= ', ';
        }
        $level2clause = rtrim($level2clause, ', ');
        $level3clause = rtrim($level3clause, ', ');
        $query = 'select distinct b.id, b.title, b.product_image_id, f.post_title as pen_name, b.book_description, b.createdate, d.type_name, g.id as product_url
        from %i b
        join %i c on b.id = c.bookid
        join %i d on c.typeid = d.id
        join %i e on b.id = e.bookid
        join %i f on e.pennameid = f.id
        join %i g on c.productid = g.id
        where b.id in (select bookid from %i where genreid in (' . $level2clause . '))
        and b.id in (select bookid from %i where genreid in (' . $level3clause . '))
        and b.islive = 1
        order by b.createdate desc';
        $results = $wpdb->get_results($wpdb->prepare($query, $books_table, $book_products_table, $product_types_table, $pen_names_table, $posts_table, $posts_table, $book_genres_table, $book_genres_table), ARRAY_A);
        for($index = 0; $index < count($results); $index++){
            $results[$index]['product_url'] = get_permalink($results[$index]['product_url']);
            $results[$index]['product_image_id'] = get_the_post_thumbnail_url($results[$index]['product_image_id']);
        }
        return $results;
    } else if ($anyLevel2){
        $level1clause = '';
        foreach($selectedGenres1 as $genre){
            $level1clause .= intval($genre);
            $level1clause .= ', ';
        }
        $level3clause = '';
        foreach($selectedGenres3 as $genre){
            $level3clause .= intval($genre);
            $level3clause .= ', ';
        }
        $level1clause = rtrim($level1clause, ', ');
        $level3clause = rtrim($level3clause, ', ');
        $query = 'select distinct b.id, b.title, b.product_image_id, f.post_title as pen_name, b.book_description, b.createdate, d.type_name, g.id as product_url
        from %i b
        join %i c on b.id = c.bookid
        join %i d on c.typeid = d.id
        join %i e on b.id = e.bookid
        join %i f on e.pennameid = f.id
        join %i g on c.productid = g.id
        where b.id in (select bookid from %i where genreid in (' . $level1clause . '))
        and b.id in (select bookid from %i where genreid in (' . $level3clause . '))
        and b.islive = 1
        order by b.createdate desc';
        $results = $wpdb->get_results($wpdb->prepare($query, $books_table, $book_products_table, $product_types_table, $pen_names_table, $posts_table, $posts_table, $book_genres_table, $book_genres_table), ARRAY_A);
        for($index = 0; $index < count($results); $index++){
            $results[$index]['product_url'] = get_permalink($results[$index]['product_url']);
            $results[$index]['product_image_id'] = get_the_post_thumbnail_url($results[$index]['product_image_id']);
        }
        return $results;
    } else if ($anyLevel3){
        $level1clause = '';
        foreach($selectedGenres1 as $genre){
            $level1clause .= intval($genre);
            $level1clause .= ', ';
        }
        $level2clause = '';
        foreach($selectedGenres2 as $genre){
            $level2clause .= intval($genre);
            $level2clause .= ', ';
        }
        $level1clause = rtrim($level1clause, ', ');
        $level2clause = rtrim($level2clause, ', ');
        $query = 'select distinct b.id, b.title, b.product_image_id, f.post_title as pen_name, b.book_description, b.createdate, d.type_name, g.id as product_url
        from %i b
        join %i c on b.id = c.bookid
        join %i d on c.typeid = d.id
        join %i e on b.id = e.bookid
        join %i f on e.pennameid = f.id
        join %i g on c.productid = g.id
        where b.id in (select bookid from %i where genreid in (' . $level1clause . '))
        and b.id in (select bookid from %i where genreid in (' . $level2clause . '))
        and b.islive = 1
        order by b.createdate desc';
        $results = $wpdb->get_results($wpdb->prepare($query, $books_table, $book_products_table, $product_types_table, $pen_names_table, $posts_table, $posts_table, $book_genres_table, $book_genres_table), ARRAY_A);
        for($index = 0; $index < count($results); $index++){
            $results[$index]['product_url'] = get_permalink($results[$index]['product_url']);
            $results[$index]['product_image_id'] = get_the_post_thumbnail_url($results[$index]['product_image_id']);
        }
        return $results;
    } else {
        $level1clause = '';
        foreach($selectedGenres1 as $genre){
            $level1clause .= intval($genre);
            $level1clause .= ', ';
        }
        $level2clause = '';
        foreach($selectedGenres2 as $genre){
            $level2clause .= intval($genre);
            $level2clause .= ', ';
        }
        $level3clause = '';
        foreach($selectedGenres3 as $genre){
            $level3clause .= intval($genre);
            $level3clause .= ', ';
        }
        $level1clause = rtrim($level1clause, ', ');
        $level2clause = rtrim($level2clause, ', ');
        $level3clause = rtrim($level3clause, ', ');
        $query = 'select distinct b.id, b.title, b.product_image_id, f.post_title as pen_name, b.book_description, b.createdate, d.type_name, g.id as product_url
        from %i b
        join %i c on b.id = c.bookid
        join %i d on c.typeid = d.id
        join %i e on b.id = e.bookid
        join %i f on e.pennameid = f.id
        join %i g on c.productid = g.id
        where b.id in (select bookid from %i where genreid in (' . $level1clause . '))
        and b.id in (select bookid from %i where genreid in (' . $level2clause . '))
        and b.id in (select bookid from %i where genreid in (' . $level3clause . '))
        and b.islive = 1
        order by b.createdate desc';
        $results = $wpdb->get_results($wpdb->prepare($query, $books_table, $book_products_table, $product_types_table, $pen_names_table, $posts_table, $posts_table, $book_genres_table, $book_genres_table, $book_genres_table), ARRAY_A);
        for($index = 0; $index < count($results); $index++){
            $results[$index]['product_url'] = get_permalink($results[$index]['product_url']);
            $results[$index]['product_image_id'] = get_the_post_thumbnail_url($results[$index]['product_image_id']);
        }
        return $results;
    }
}