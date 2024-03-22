<?php global $wpdb;
$suggestion_types_table = $wpdb->prefix .  "tomc_suggestion_types";
$userid = get_current_user_id();
$user = wp_get_current_user();

get_header();

?><main class="half-screen">    
    <?php if (is_user_logged_in()){
        ?><h1 class="centered-text">Thank you for sharing your thoughts.</h1>
        <h2 class="centered-text">Suggestions will be brought before our co-op members for consideration at a future meeting.</h2>
        <p class="centered-text">Choose your suggestion type.</p>
        <?php $suggestion_types = $wpdb->get_results("SELECT * from $suggestion_types_table ORDER BY type_name;");  
        ?><select class="tomc-book-organization--product-format" id="tomc-book-organization--suggestion-types-select">
            <option value="0"></option>
            <?php foreach($suggestion_types as $type) {
                ?><option value="<?php echo $type->id; ?>"><?php echo $type->type_name; ?></option>
            <?php }
        ?></select><br>
        <div id="tomc-book-organization--enter-suggestion-section" class="hidden">
            <p id="tomc-book-organization--suggestion-instructions"></p>
            <textarea></textarea>
            <button class="purple-button" id="tomc-book-organization--submit-suggestion">submit</button>
        </div>
    <?php } else {
        ?><div class="half-screen">
            <p class="centered-text">You must login to leave suggestions. <a href="<?php echo esc_url(site_url('/my-account'));?>">Login</a></p>
        </div>
    <?php }
?></main>

<?php get_footer(); ?>