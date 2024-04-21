<?php global $wpdb;
$posts_table = $wpdb->prefix . "posts";
$userid = get_current_user_id();
$user = wp_get_current_user();

get_header();

?><main class="half-screen">    
    <?php if (is_user_logged_in()){
        if (in_array( 'dc_vendor', (array) $user->roles ) ){
            ?><div class="banner"><h1 class="centered-text">Manage Your Author Names</h1></div>
            <p class="centered-text"><strong>Please add any name you publish books under, whether it's your legal name or a pen name.</strong></p>
            <?php $query = 'select p.id, p.post_title, p.post_content from %i p where p.post_type = "author-profile" and p.post_author = %d';
            $names = $wpdb->get_results($wpdb->prepare($query, $posts_table, $userid));
            if ($names){
                ?><div class="third-screen">
                    <?php foreach($names as $name){
                        ?><div class="tomc-book-organization--book-to-edit page-accent-alt-thin" data="<?php echo 'pen-name-' . $name->id; ?>">
                            <h2 class="centered-text"><?php echo $name->post_title; ?></h2>
                            <p class="generic-content"><?php echo $name->post_content; ?></p>
                            <button class="tomc-book-organization--save-button tomc-book-organization--edit-bio">edit bio</button>
                        </div>
                    <?php }
                ?></div>                    
            <?php } 
        } else {
            ?><div>
                <p class="centered-text">Only authors can add and edit author names.</p>
            </div>
        <?php }
    } else {
        ?><div class="half-screen">
            <p class="centered-text">Only logged-in authors can add and edit author names. <a href="<?php echo esc_url(site_url('/my-account'));?>">Login</a></p>
        </div>
    <?php }
?></main>

<?php get_footer(); ?>