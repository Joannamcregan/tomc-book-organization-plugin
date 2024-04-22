<?php

add_action('rest_api_init', 'tomcPennamesRegisterRoute');

function tomcPennamesRegisterRoute() {
    register_rest_route('tomcPennames/v1', 'submitEdit', array(
        'methods' => 'POST',
        'callback' => 'submitEdit'
    ));
    register_rest_route('tomcPennames/v1', 'submitNewName', array(
        'methods' => 'POST',
        'callback' => 'submitNewName'
    ));
}

function submitEdit($data) {
    $postId = sanitize_text_field($data['postId']);
    $content = sanitize_text_field($data['content']);
    $user = wp_get_current_user();
    global $wpdb;
    $posts_table = $wpdb->prefix . "posts";
    if (is_user_logged_in()){
        $wpdb->update($posts_table, 
        array(
            'post_content' => $content
        ), 
        array('ID' => $postId));
        return 'success';
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}
