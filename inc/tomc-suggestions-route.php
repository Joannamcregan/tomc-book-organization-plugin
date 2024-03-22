<?php

add_action('rest_api_init', 'tomcSuggestionsRegisterRoute');

function tomcSuggestionsRegisterRoute() {
    register_rest_route('tomcSuggestions/v1', 'simpleTriggerSuggestion', array(
        'methods' => 'POST',
        'callback' => 'simpleTriggerSuggestion'
    ));
}

function simpleTriggerSuggestion($data){
    $suggestion = sanitize_text_field($data['suggestion']);
    $user = wp_get_current_user();
    $userid = get_current_user_id();
    $now = date('Y-m-d H:i:s');
    global $wpdb;
    $suggestions_table = $wpdb->prefix . "tomc_suggestions";
    if (is_user_logged_in()){
        $newSuggestion = [];
        $newSuggestion['typeid'] = 2; //content warning
        $newSuggestion['suggestion_name'] = $suggestion;
        $newSuggestion['createdby'] = $userid;
        $newSuggestion['createdate'] = $now;
        $wpdb->insert($suggestions_table, $newSuggestion);
        return 'success';
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}