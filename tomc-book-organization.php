<?php
/* 
    Plugin Name: TOMC Book Organization
    Version: 1.0
    Author: Joanna
    Description: Improve organization of books and related information, such as book genres and author pennames and
*/

if( ! defined('ABSPATH') ) exit;
require_once plugin_dir_path(__FILE__) . 'inc/tomc-bookorg-route.php';
require_once plugin_dir_path(__FILE__) . 'inc/tomc-browse-route.php';
require_once plugin_dir_path(__FILE__) . 'inc/tomc-suggestions-route.php';
require_once plugin_dir_path(__FILE__) . 'inc/tomc-authornames-route.php';
require_once plugin_dir_path(__FILE__) . 'inc/tomc-shop-display-route.php';

class TOMCBookOrganizationPlugin {
    function __construct() {
        global $wpdb;
        $this->charset = $wpdb->get_charset_collate();
        $this->books_table = $wpdb->prefix .  "tomc_books";
        $this->product_types_table = $wpdb->prefix . "tomc_product_types";
        $this->book_products_table = $wpdb->prefix . "tomc_book_products";
        $this->user_pen_names_table = $wpdb->prefix . "tomc_user_pen_names";
        $this->pen_names_books_table = $wpdb->prefix . "tomc_pen_names_books";
        $this->book_readalikes_table = $wpdb->prefix . "tomc_book_readalikes";
        $this->genres_table = $wpdb->prefix . "tomc_genres";
        $this->book_genres_table = $wpdb->prefix . "tomc_book_genres";
        $this->content_warnings_table = $wpdb->prefix . "tomc_content_warnings";
        $this->book_warnings_table = $wpdb->prefix . "tomc_book_warnings";
        $this->publication_languages_table = $wpdb->prefix . "tomc_publication_languages";
        $this->book_languages_table = $wpdb->prefix . "tomc_book_languages";
        $this->character_identities_table = $wpdb->prefix . "tomc_character_identities";
        $this->book_identities_table = $wpdb->prefix . "tomc_book_identities";
        $this->users_table = $wpdb->prefix . "users";
        $this->posts_table = $wpdb->prefix . "posts";
        $this->lookup_table = $wpdb->prefix . "wc_order_product_lookup";
        $this->reader_triggers_table = $wpdb->prefix . "tomc_reader_triggers";
        $this->reader_languages_table = $wpdb->prefix . "tomc_reader_languages";
        $this->suggestion_types_table = $wpdb->prefix . "tomc_suggestion_types";
        $this->suggestions_table = $wpdb->prefix . "tomc_suggestions";
        $this->terms_table = $wpdb->prefix . "terms";
        $this->term_relationships_table = $wpdb->prefix . "term_relationships";
        $this->term_taxonomy_table = $wpdb->prefix . "term_taxonomy";

        wp_localize_script('tomc-bookorg-js', 'tomcBookorgData', array(
            'root_url' => get_site_url()
        ));

        add_action('activate_tomc-book-organization/tomc-book-organization.php', array($this, 'onActivate'));
        // register_activation_hook( __FILE__, array($this, 'onActivate'));
        // add_action('init', array($this, 'onActivate'));
        add_action('init', array($this, 'registerScripts'));
        add_action('wp_enqueue_scripts', array($this, 'pluginFiles'));
        add_filter('template_include', array($this, 'loadTemplate'), 99);
        add_action('init', array($this, 'author_profile_custom_post_types'));
        add_action( 'woocommerce_after_order_notes', array($this, 'checkBookProducts'));
    }

    function author_profile_custom_post_types() {
        register_post_type('author-profile', array(
            'show_in_rest' => true,
            'supports' => array('title', 'editor', 'thumbnail'),
            'rewrite' => array('slug' => 'pen-name'),
            'has_archive' => false,
            'public' => true,
            'menu_position' => 1,
            'labels' => array(
                'name' => 'Author-Profiles',
                'add_new' => 'Add New Pen Name',
                'edit_item' => 'Edit Pen Name',
                'all_items' => 'All Pen Names',
                'singular_name' => 'Pen Name'
            ),
            'menu_icon' => 'dashicons-edit',
            'map_meta_cap' => true,
            'capability_type' => 'author-profile',
            'capabilities' => [
                'create_posts' => 'create_author-profiles',
                'delete_others_posts' => 'delete_others_author-profiles',
                'delete_posts' => 'delete_author-profiles',
                'delete_private_posts' => 'delete_private_author-profiles',
                'delete_published_posts' => 'delete_published_author-profiles',
                'edit_posts' => 'edit_author-profiles',
                'edit_others_posts' => 'edit_others_author-profiles',
                'edit_private_posts' => 'edit_private_author-profiles',
                'edit_published_posts' => 'edit_published_author-profiles',
                'publish_posts' => 'publish_author-profiles',
                'read_private_posts' => 'read_private_author-profiles',
                'read' => 'read',
            ]
        ));
    }

    function registerScripts(){
        wp_register_style('tomc_bookorg_styles', plugins_url('css/tomc-book-organization-styles.css', __FILE__), false, '1.0', 'all');
    }

    function pluginFiles(){
        wp_enqueue_style('tomc_bookorg_styles');
        wp_enqueue_script('tomc-bookorg-js', plugin_dir_url(__FILE__) . '/build/index.js', array('jquery'), '1.0', true);
        wp_localize_script('tomc-bookorg-js', 'tomcBookorgData', array(
            'root_url' => get_site_url()
        ));
    }

    function addSuggestionsPage() {
        $suggestions_page = array(
            'post_title' => 'Suggestions',
            'post_content' => '',
            'post_status' => 'publish',
            'post_author' => 0,
            'post_type' => 'page'
        );
        wp_insert_post($suggestions_page);
    }

    function addPennamesPage() {
        $pennames_page = array(
            'post_title' => 'My Pen Names',
            'post_content' => '',
            'post_status' => 'publish',
            'post_author' => 0,
            'post_type' => 'page'
        );
        wp_insert_post($pennames_page);
    }

    function addShopBooksPage() {
        $shop_books_page = array(
            'post_title' => 'Coop Shop',
            'post_content' => '',
            'post_status' => 'publish',
            'post_author' => 0,
            'post_type' => 'page'
        );
        wp_insert_post($shop_books_page);
    }

    function addMyBooksPage() {
        $my_books_page = array(
            'post_title' => 'My Books',
            'post_content' => '',
            'post_status' => 'publish',
            'post_author' => 0,
            'post_type' => 'page'
        );
        wp_insert_post($my_books_page);
    }

    function addAddBookPage() {
        $add_book_page = array(
            'post_title' => 'Add a Book',
            'post_content' => '',
            'post_status' => 'publish',
            'post_author' => 0,
            'post_type' => 'page'
        );
        wp_insert_post($add_book_page);
    }

    function browseByGenrePage() {
        $add_book_page = array(
            'post_title' => 'Browse by Genre',
            'post_content' => '',
            'post_status' => 'publish',
            'post_author' => 0,
            'post_type' => 'page'
        );
        wp_insert_post($add_book_page);
    }

    function ebooksDisplayPage() {
        $add_book_page = array(
            'post_title' => 'Ebooks',
            'post_content' => '',
            'post_status' => 'publish',
            'post_author' => 0,
            'post_type' => 'page'
        );
        wp_insert_post($add_book_page);
    }

    function audiobooksDisplayPage() {
        $add_book_page = array(
            'post_title' => 'Audiobooks',
            'post_content' => '',
            'post_status' => 'publish',
            'post_author' => 0,
            'post_type' => 'page'
        );
        wp_insert_post($add_book_page);
    }

    function physicalBooksDisplayPage() {
        $add_book_page = array(
            'post_title' => 'Physical Books',
            'post_content' => '',
            'post_status' => 'publish',
            'post_author' => 0,
            'post_type' => 'page'
        );
        wp_insert_post($add_book_page);
    }

    function onActivate() {
        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');

        dbDelta("CREATE TABLE IF NOT EXISTS $this->books_table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            title varchar(200) NOT NULL,
            subtitle varchar(200),
            publication_edition int,
            book_description varchar(3000) NOT NULL,
            book_excerpt varchar(10000),
            product_image_id bigint(20) unsigned,
            createdate datetime NOT NULL,
            createdby bigint(20) unsigned NOT NULL,
            lastupdated datetime,
            islive bit NOT NULL DEFAULT 0,
            PRIMARY KEY  (id),
            FOREIGN KEY  (product_image_id) REFERENCES $this->posts_table(id),
            FOREIGN KEY  (createdby) REFERENCES $this->users_table(id)
        ) $this->charset;");

        dbDelta("CREATE TABLE IF NOT EXISTS $this->product_types_table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            type_name varchar(200) NOT NULL,
            createdate datetime NOT NULL,
            PRIMARY KEY  (id)
        ) $this->charset;");

        dbDelta("CREATE TABLE IF NOT EXISTS $this->book_products_table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            bookid bigint(20) unsigned NOT NULL,
            productid bigint(20) unsigned NOT NULL,
            typeid bigint(20) unsigned NOT NULL,
            createdate datetime NOT NULL,
            lastupdated datetime,
            PRIMARY KEY  (id),
            FOREIGN KEY  (bookid) REFERENCES $this->books_table(id),
            FOREIGN KEY  (productid) REFERENCES $this->posts_table(id),
            FOREIGN KEY  (typeid) REFERENCES $this->product_types_table(id)
        ) $this->charset;");

        dbDelta("CREATE TABLE IF NOT EXISTS $this->user_pen_names_table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            userid bigint(20) unsigned NOT NULL,
            pennameid bigint(20) unsigned NOT NULL,
            createdate datetime NOT NULL,
            lastupdated datetime,
            PRIMARY KEY  (id),
            FOREIGN KEY  (userid) REFERENCES $this->users_table(id),
            FOREIGN KEY  (pennameid) REFERENCES $this->posts_table(id)
        ) $this->charset;");

        dbDelta("CREATE TABLE IF NOT EXISTS $this->pen_names_books_table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            pennameid bigint(20) unsigned NOT NULL,
            bookid bigint(20) unsigned NOT NULL,
            createdate datetime NOT NULL,
            lastupdated datetime,
            PRIMARY KEY  (id),
            FOREIGN KEY  (bookid) REFERENCES $this->books_table(id),
            FOREIGN KEY  (pennameid) REFERENCES $this->posts_table(id)
        ) $this->charset;");

        dbDelta("CREATE TABLE IF NOT EXISTS $this->book_readalikes_table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            bookid bigint(20) unsigned NOT NULL,
            createdate datetime NOT NULL,
            lastupdated datetime,
            readalike_title varchar(200) NOT NULL,
            readalike_author varchar(200),
            PRIMARY KEY  (id),
            FOREIGN KEY  (bookid) REFERENCES $this->books_table(id)
        ) $this->charset;");

        dbDelta("CREATE TABLE IF NOT EXISTS $this->genres_table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            genre_name varchar(200) NOT NULL,
            genre_level bigint(20) unsigned,
            genre_description varchar(500),
            createdate datetime NOT NULL,
            createdby bigint(20) unsigned NOT NULL,
            PRIMARY KEY  (id),
            FOREIGN KEY  (createdby) REFERENCES $this->users_table(id)
        ) $this->charset;");

        dbDelta("CREATE TABLE IF NOT EXISTS $this->book_genres_table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            bookid bigint(20) unsigned NOT NULL,
            genreid bigint(20) unsigned NOT NULL,
            createdate datetime NOT NULL,
            lastupdated datetime,
            PRIMARY KEY  (id),
            FOREIGN KEY  (bookid) REFERENCES $this->books_table(id),
            FOREIGN KEY  (genreid) REFERENCES $this->genres_table(id)
        ) $this->charset;");

        dbDelta("CREATE TABLE IF NOT EXISTS $this->character_identities_table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            identity_name varchar(200) NOT NULL,
            createdate datetime NOT NULL,
            createdBy bigint(20) unsigned NOT NULL,
            PRIMARY KEY  (id),
            FOREIGN KEY  (createdby) REFERENCES $this->users_table(id)
        ) $this->charset;");

        dbDelta("CREATE TABLE IF NOT EXISTS $this->book_identities_table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            bookid bigint(20) unsigned NOT NULL,
            identityid bigint(20) unsigned NOT NULL,
            createdate datetime NOT NULL,
            lastupdated datetime,
            PRIMARY KEY  (id),
            FOREIGN KEY  (bookid) REFERENCES $this->books_table(id),
            FOREIGN KEY  (identityid) REFERENCES $this->character_identities_table(id)
        ) $this->charset;");
        
        dbDelta("CREATE TABLE IF NOT EXISTS $this->content_warnings_table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            warning_name varchar(200) NOT NULL,
            createdate datetime NOT NULL,
            createdBy bigint(20) unsigned NOT NULL,
            PRIMARY KEY  (id),
            FOREIGN KEY  (createdby) REFERENCES $this->users_table(id)
        ) $this->charset;");

        dbDelta("CREATE TABLE IF NOT EXISTS $this->book_warnings_table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            bookid bigint(20) unsigned NOT NULL,
            warningid bigint(20) unsigned NOT NULL,
            createdate datetime NOT NULL,
            lastupdated datetime,
            PRIMARY KEY  (id),
            FOREIGN KEY  (bookid) REFERENCES $this->books_table(id),
            FOREIGN KEY  (warningid) REFERENCES $this->content_warnings_table(id)
        ) $this->charset;");

        dbDelta("CREATE TABLE IF NOT EXISTS $this->publication_languages_table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            language_name varchar(200) NOT NULL,
            createdate datetime NOT NULL,
            createdBy bigint(20) unsigned NOT NULL,
            PRIMARY KEY  (id),
            FOREIGN KEY  (createdby) REFERENCES $this->users_table(id)
        ) $this->charset;");

        dbDelta("CREATE TABLE IF NOT EXISTS $this->book_languages_table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            bookid bigint(20) unsigned NOT NULL,
            languageid bigint(20) unsigned NOT NULL,
            createdate datetime NOT NULL,
            lastupdated datetime,
            PRIMARY KEY  (id),
            FOREIGN KEY  (bookid) REFERENCES $this->books_table(id),
            FOREIGN KEY  (languageid) REFERENCES $this->publication_languages_table(id)
        ) $this->charset;");

        dbDelta("CREATE TABLE IF NOT EXISTS $this->reader_triggers_table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            readerid bigint(20) unsigned NOT NULL,
            triggerid bigint(20) unsigned NOT NULL,
            createdate datetime NOT NULL,
            PRIMARY KEY  (id),
            FOREIGN KEY  (readerid) REFERENCES $this->users_table(id),
            FOREIGN KEY  (triggerid) REFERENCES $this->content_warnings_table(id)
        ) $this->charset;");

        dbDelta("CREATE TABLE IF NOT EXISTS $this->reader_languages_table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            readerid bigint(20) unsigned NOT NULL,
            languageid bigint(20) unsigned NOT NULL,
            createdate datetime NOT NULL,
            PRIMARY KEY  (id),
            FOREIGN KEY  (readerid) REFERENCES $this->users_table(id),
            FOREIGN KEY  (languageid) REFERENCES $this->publication_languages_table(id)
        ) $this->charset;");

        dbDelta("CREATE TABLE IF NOT EXISTS $this->suggestion_types_table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            type_name varchar(200) NOT NULL,
            createdate datetime NOT NULL,
            instruction_text varchar(300) NULL,
            PRIMARY KEY  (id)
        ) $this->charset;");

        dbDelta("CREATE TABLE IF NOT EXISTS $this->suggestions_table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            suggestion_name varchar(200) NOT NULL,
            typeid bigint(20) unsigned NOT NULL,
            createdby bigint(20) unsigned NOT NULL,
            createdate datetime NOT NULL,
            PRIMARY KEY  (id),
            FOREIGN KEY  (createdby) REFERENCES $this->users_table(id),
            FOREIGN KEY  (typeid) REFERENCES $this->suggestion_types_table(id)
        ) $this->charset;");

        if (post_exists('Suggestions', '', '', 'page', 'publish') == 0){
            $this->addSuggestionsPage();
        }

        if (post_exists('My Pen Names', '', '', 'page', 'publish') == 0){
            $this->addPennamesPage();
        }

        // if (post_exists('Coop Shop', '', '', 'page', 'publish') == 0){
        //     $this->addShopBooksPage();
        // }

        if (post_exists('My Books', '', '', 'page', 'publish') == 0){
            $this->addMyBooksPage();
        }

        if(post_exists('Add a Book', '', '', 'page', 'publish') == 0){
            $this->addAddBookPage();
        }

        if(post_exists('Browse by Genre', '', '', 'page', 'publish') == 0){
            $this->browseByGenrePage();
        }

        if(post_exists('Ebooks', '', '', 'page', 'publish') == 0){
            $this->ebooksDisplayPage();
        }

        if(post_exists('Audiobooks', '', '', 'page', 'publish') == 0){
            $this->audiobooksDisplayPage();
        }

        if(post_exists('Physical Books', '', '', 'page', 'publish') == 0){
            $this->physicalBooksDisplayPage();
        }
    }

    function loadTemplate($template){
        global $post;
        if (is_page('my-books')){
            return plugin_dir_path(__FILE__) . 'inc/template-my-books.php';
        } elseif (is_page('add-a-book')){
            return plugin_dir_path(__FILE__) . 'inc/template-add-book.php';
        } elseif (is_page('my-pen-names')){
            return plugin_dir_path(__FILE__) . 'inc/template-pen-names.php';
        } elseif (is_page('browse-by-genre')){
            return plugin_dir_path(__FILE__) . 'inc/template-browse-by-genre.php';
        } elseif (is_page('suggestions')){
            return plugin_dir_path(__FILE__) . 'inc/template-suggestions.php';
        } elseif (is_page('ebooks')){
            return plugin_dir_path(__FILE__) . 'inc/template-ebooks.php';
        } elseif (is_page('audiobooks')){
            return plugin_dir_path(__FILE__) . 'inc/template-audiobooks.php';
        } elseif (is_page('physical-books')){
            return plugin_dir_path(__FILE__) . 'inc/template-physical-books.php';
        } elseif (is_page('physical-zines')){
            return plugin_dir_path(__FILE__) . 'inc/template-physical-zines.php';
        } elseif (is_page('digital-zines')){
            return plugin_dir_path(__FILE__) . 'inc/template-digital-zines.php';
        } elseif (!(is_null($post))){
            if (str_contains($post->post_name, 'members-only-space')){
                return plugin_dir_path(__FILE__) . 'inc/template-private-forum.php';
            } else {
                return $template;
            }
        } else
        return $template;
    }

    function checkBookProducts(){
        global $wpdb;               
        $user = wp_get_current_user();
        $userId = $user->ID;
        //this is what we're working on, need to get user id and product id into the query
        //also need to add check and warning if they're trying to buy multiple copies of an e-book or audiobook
        foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ){
            if ( has_term( 'audiobooks', 'product_cat', $cart_item['product_id'] ) || has_term( 'ebooks', 'product_cat', $cart_item['product_id'] ) || has_term( 'event-tickets', 'product_cat', $cart_item['product_id'] )) {
                $query = 'select p.post_title, terms.name
                    from %i l
                    join %i p on l.product_id = p.id
                    join %i tr on p.id = tr.object_id
                    join %i terms on tr.term_taxonomy_id = terms.term_id
                    join %i tt on tr.term_taxonomy_id = tt.term_taxonomy_id
                    and tt.taxonomy = "product_cat"
                    where l.customer_id = %d
                    and l.product_id = %d';
                $existingBookPurchase = $wpdb->get_results($wpdb->prepare($query, $this->lookup_table, $this->posts_table, $this->term_relationships_table, $this->terms_table, $this->term_taxonomy_table, $userId, $cart_item['product_id']), ARRAY_A);
                if (($existingBookPurchase) && count($existingBookPurchase) > 0){
                    $format = $existingBookPurchase[0]['name'];
                    $product = $existingBookPurchase[0]['post_title'];
                    if ($format == 'event tickets'){
                        wc_print_notice('Our records indicate you have already purchased ' . $product, 'notice');
                    } else {
                        wc_print_notice('Our records indicate you have already purchased ' . $product . ' in ' . substr_replace($format, "",-1) . ' format.', 'notice');
                    }
                }
             }
        }

        // if ($cart_contains_ISBN == true){
        //     if (($_POST['tomc_isbn_product']) && $_POST['tomc_isbn_product'] > 0){
        //         $query = 'select isbn from %i where assignedproductid = %d';
        //         $existingIsbn = $wpdb->get_results($wpdb->prepare($query, $this->isbn_numbers_table, $_POST['tomc_isbn_product']), ARRAY_A);
        //         if (($existingIsbn) && count($existingIsbn) > 0){
        //             wc_add_notice(__('Our records indicate you have already obtained an ISBN for this product. ') , 'error');
        //         }
        //     }
        //     if (!$_POST['tomc_isbn_title']) wc_add_notice(__('You must enter a book title if you are purchasing an ISBN registration service. ') , 'error');
        //     if (!$_POST['tomc_isbn_description']) wc_add_notice(__('You must enter a book description if you are purchasing an ISBN registration service. ') , 'error');
        //     if (!$_POST['tomc_isbn_format']) wc_add_notice(__('You must select a book format if you are purchasing an ISBN registration service. ') , 'error');
        //     if (!$_POST['tomc_isbn_first_genre']) wc_add_notice(__("You must select one of Bowker's genres if you are purchasing an ISBN registration service. ") , 'error');
        //     if (!$_POST['tomc_isbn_contributor1']) wc_add_notice(__('You must enter the name you published your book under if you are purchasing an ISBN registration service. ') , 'error');
        //     if (!$_POST['tomc_isbn_biography1']) wc_add_notice(__('You must enter a biography if you are purchasing an ISBN registration service. ') , 'error');
        //     if (!$_POST['tomc_isbn_function1']) wc_add_notice(__('You must select your relationship to the work if you are purchasing an ISBN registration service. ') , 'error');
        //     if (!$_POST['tomc_isbn_publication_date']) wc_add_notice(__("You must enter your book's publication date if you are purchasing an ISBN registration service. ") , 'error');
        //     if (!$_POST['tomc_isbn_status']) wc_add_notice(__("You must enter your book's publication status if you are purchasing an ISBN registration service. ") , 'error');
        //     if (!$_POST['tomc_isbn_target_audience']) wc_add_notice(__("You must enter your book's target audience if you are purchasing an ISBN registration service. ") , 'error');
        //     if (!$_POST['tomc_isbn_book_price']) wc_add_notice(__("You must enter your book's current price if you are purchasing an ISBN registration service. ") , 'error');
        // }
    }
}

$tomcBookOrganization = new TOMCBookOrganizationPlugin();