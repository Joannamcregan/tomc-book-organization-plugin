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
        $this->reader_triggers_table = $wpdb->prefix . "tomc_reader_triggers";
        $this->reader_languages_table = $wpdb->prefix . "tomc_reader_languages";
        $this->suggestion_types_table = $wpdb->prefix . "tomc_suggestion_types";
        $this->suggestions_table = $wpdb->prefix . "tomc_suggestions";

        wp_localize_script('tomc-bookorg-js', 'tomcBookorgData', array(
            'root_url' => get_site_url()
        ));

        add_action('activate_tomc-book-organization/tomc-book-organization.php', array($this, 'onActivate'));
        add_action('init', array($this, 'registerScripts'));
        add_action('wp_enqueue_scripts', array($this, 'pluginFiles'));
        add_filter('template_include', array($this, 'loadTemplate'), 99);
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

        if (post_exists('My Books', '', '', 'page', 'publish') == 0){
            $this->addMyBooksPage();
        }

        if(post_exists('Add a Book', '', '', 'page', 'publish') == 0){
            $this->addAddBookPage();
        }

        if(post_exists('Browse by Genre', '', '', 'page', 'publish') == 0){
            $this->browseByGenrePage();
        }
    }

    function loadTemplate($template){
        if (is_page('my-books')){
            return plugin_dir_path(__FILE__) . 'inc/template-my-books.php';
        } elseif (is_page('add-a-book')){
            return plugin_dir_path(__FILE__) . 'inc/template-add-book.php';
        } elseif (is_page('browse-by-genre')){
            return plugin_dir_path(__FILE__) . 'inc/template-browse-by-genre.php';
        } elseif (is_page('suggestions')){
            return plugin_dir_path(__FILE__) . 'inc/template-suggestions.php';
        } else
        return $template;
    }
}

$tomcBookOrganization = new TOMCBookOrganizationPlugin();