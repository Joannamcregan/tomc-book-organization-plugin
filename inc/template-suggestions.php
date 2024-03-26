<?php global $wpdb;
$suggestion_types_table = $wpdb->prefix .  "tomc_suggestion_types";
$userid = get_current_user_id();
$user = wp_get_current_user();

get_header();

?><main class="half-screen">    
    <?php if (is_user_logged_in()){ ?>
        <h1 class="centered-text large-heading yellow-shadow-text georgia-text">Thank you for sharing.</h1>
        <h2 class="centered-text">Your suggestion will be presented to members in an upcoming vote.</h2>
        <!-- uncomment the below if/when we add multiple types of suggestions------------------------ -->
        <!-- <p class="centered-text">Choose your suggestion type.</p> -->
        <!-- <?php $suggestion_types = $wpdb->get_results("SELECT * from $suggestion_types_table ORDER BY type_name;"); ?> -->
        <!-- <select class="tomc-book-organization--product-format" id="tomc-book-organization--suggestion-types-select">
            <option value="0"></option> -->
            <!-- <?php foreach($suggestion_types as $type) { ?> -->
                <!-- <option class="centered-text" value="<?php echo $type->id; ?>" data-instruction="<?php echo $type->instruction_text; ?>"><?php echo $type->type_name; ?></option> -->
            <!-- <?php } ?> -->
        <!-- </select><br> -->
        <!-- <div id="tomc-book-organization--enter-suggestion-section" class="hidden"> -->
        <div id="tomc-book-organization--enter-suggestion-section">
            <p id="tomc-book-organization--suggestion-instructions">Describe the suggested content warning option (in 200 characters or less).</p>
            <textarea id="tomc-book-organization--suggestion-text"></textarea>
            <button class="purple-button" id="tomc-book-organization--submit-suggestion">submit</button>
            <p class="centered-text">Submission of a suggested trigger does not guarantee acceptance. If a suggestion is denied, it cannot be resubmitted for a period of one year from the date it is denied.</p>
        </div>
        <div id="tomc-book-organization--got-suggestion" class="hidden">
            <p class="centered-text">Got it!</p>
        </div>
        

    <?php } else {
        ?><div class="half-screen">
            <p class="centered-text">You must login to leave suggestions. <a href="<?php echo esc_url(site_url('/my-account'));?>">Login</a></p>
        </div>
    <?php }
?></main>

<?php get_footer(); ?>