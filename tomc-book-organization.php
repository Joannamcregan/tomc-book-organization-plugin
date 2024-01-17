<?php
/* 
    Plugin Name: TOMC Book Organization
    Version: 1.0
    Author: Joanna
    Description: Improve organization of books and related information, such as book genres and author pennames and
*/

if( ! defined('ABSPATH') ) exit;

class TOMCBookOrganizationPlugin {
    function __construct() {
        global $wpdb;
        $this->charset = $wpdb->get_charset_collate();
        $this->books_table = $wpdb->prefix .  "tomc_books";
        $this->product_types_table = $wpdb->prefix . "tomc_product_types";
        $this->book_products_table = $wpdb->prefix . "tomc_book_products";
        $this->pennames_table = $wpdb->prefix . "tomc_pennames";
        $this->user_pennames_table = $wpdb->prefix . "tomc_user_pennames";
        $this->pennames_books_table = $wpdb->prefix . "tomc_pennames_books";
        $this->book_readalikes_table = $wpdb->prefix . "tomc_book_readalikes";
        $this->genres_table = $wpdb->prefix . "tomc_genres";
        $this->book_genres_table = $wpdb->prefix . "tomc_book_genres";
        $this->content_warnings_table = $wpdb->prefix . "tomc_content_warnings";
        $this->book_warnings_table = $wpdb->prefix . "tomc_book_warnings";
        $this->users_table = $wpdb->prefix . "users";
        $this->posts_table = $wpdb->prefix . "posts";

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

    function addMyPennamesPage() {
        $my_pennames_page = array(
            'post_title' => 'My Pen Names',
            'post_content' => '',
            'post_status' => 'publish',
            'post_author' => 0,
            'post_type' => 'page'
        );
        wp_insert_post($my_pennames_page);
    }

    function onActivate() {
        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');

        dbDelta("CREATE TABLE IF NOT EXISTS $this->books_table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            title varchar(200) NOT NULL,
            subtitle varchar(200),
            publication_edition int,
            book_description varchar(2000) NOT NULL,
            book_excerpt varchar(500),
            image_address varchar(200),
            createdate datetime NOT NULL,
            islive bit NOT NULL DEFAULT 0,
            PRIMARY KEY  (id)
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
            PRIMARY KEY  (id),
            FOREIGN KEY  (bookid) REFERENCES $this->books_table(id),
            FOREIGN KEY  (productid) REFERENCES $this->posts_table(id),
            FOREIGN KEY  (typeid) REFERENCES $this->product_types_table(id)
        ) $this->charset;");

        dbDelta("CREATE TABLE IF NOT EXISTS $this->pennames_table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            penname varchar(200) NOT NULL,
            bio varchar(2000) NOT NULL,
            image_address varchar(200),
            createdate datetime NOT NULL,
            PRIMARY KEY  (id)
        ) $this->charset;");

        dbDelta("CREATE TABLE IF NOT EXISTS $this->user_pennames_table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            userid bigint(20) unsigned NOT NULL,
            pennameid bigint(20) unsigned NOT NULL,
            createdate datetime NOT NULL,
            PRIMARY KEY  (id),
            FOREIGN KEY  (userid) REFERENCES $this->users_table(id),
            FOREIGN KEY  (pennameid) REFERENCES $this->pennames_table(id)
        ) $this->charset;");

        dbDelta("CREATE TABLE IF NOT EXISTS $this->pennames_books_table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            pennameid bigint(20) unsigned NOT NULL,
            bookid bigint(20) unsigned NOT NULL,
            createdate datetime NOT NULL,
            PRIMARY KEY  (id),
            FOREIGN KEY  (bookid) REFERENCES $this->books_table(id),
            FOREIGN KEY  (pennameid) REFERENCES $this->pennames_table(id)
        ) $this->charset;");

        dbDelta("CREATE TABLE IF NOT EXISTS $this->book_readalikes_table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            bookid bigint(20) unsigned NOT NULL,
            createdate datetime NOT NULL,
            readalike_title varchar(200) NOT NULL,
            readalike_author varchar(200)
            PRIMARY KEY  (id),
            FOREIGN KEY  (bookid) REFERENCES $this->books_table(id)
        ) $this->charset;");

        dbDelta("CREATE TABLE IF NOT EXISTS $this->genres_table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            genre_name varchar(200) NOT NULL,
            parentid1 bigint(20) unsigned,
            parentid2 bigint(20) unsigned,
            parentid3 bigint(20) unsigned,
            genre_description varchar(500),
            createdate datetime NOT NULL,
            PRIMARY KEY  (id)
        ) $this->charset;");

        dbDelta("CREATE TABLE IF NOT EXISTS $this->book_genres_table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            bookid bigint(20) unsigned NOT NULL,
            genreid bigint(20) unsigned NOT NULL,
            createdate datetime NOT NULL,
            PRIMARY KEY  (id),
            FOREIGN KEY  (bookid) REFERENCES $this->books_table(id),
            FOREIGN KEY  (genreid) REFERENCES $this->genres_table(id)
        ) $this->charset;");

        dbDelta("CREATE TABLE IF NOT EXISTS $this->content_warnings_table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            warning_name varchar(200) NOT NULL,
            createdate datetime NOT NULL,
            PRIMARY KEY  (id)
        ) $this->charset;");

        dbDelta("CREATE TABLE IF NOT EXISTS $this->book_warnings_table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            bookid bigint(20) unsigned NOT NULL,
            warningid bigint(20) unsigned NOT NULL,
            createdate datetime NOT NULL,
            PRIMARY KEY  (id),
            FOREIGN KEY  (bookid) REFERENCES $this->books_table(id),
            FOREIGN KEY  (warningid) REFERENCES $this->content_warnings_table(id)
        ) $this->charset;");

        if (post_exists('My Books', '', '', 'page', 'publish') == 0){
            $this->addMyBooksPage();
        }

        if (post_exists('My Pen Names', '', '', 'page', 'publish') == 0){
            $this->addMyPenNamesPage();
        }

    }

    function loadTemplate($template){
        if (is_page('my-books')){
            return plugin_dir_path(__FILE__) . 'inc/template-my-books.php';
        } elseif (is_page('my-pen-names')){
            return plugin_dir_path(__FILE__) . 'inc/template-my-pen-names.php';
        } else
        return $template;
    }
}

$tomcBookOrganization = new TOMCBookOrganizationPlugin();