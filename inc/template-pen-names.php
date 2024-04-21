<?php global $wpdb;
$user_pennames_table = $wpdb->prefix . "tomc_user_pennames";
$posts_table = $wpdb->prefix . "posts";
$userid = get_current_user_id();
$user = wp_get_current_user();

get_header();

?><main class="half-screen">    
    <?php if (is_user_logged_in()){
        if (in_array( 'dc_vendor', (array) $user->roles ) ){
            ?><div class="banner"><h1 class="centered-text">Manage Your Author Names</h1></div>
            <?php $query = 'select p.id, p.post_title, p.post_content from %i upn join %i p on upn.pennameid = p.id where upn.userid = %d';
            $names = $wpdb->get_results($wpdb->prepare($query, $user_pennames_table, $posts_table, $userid));
            if ($names){
                ?><div class="third-screen">
                    <?php foreach($names as $name){
                        ?><div class="tomc-book-organization--book-to-edit page-accent-alt-thin">
                            <h2 class="centered-text"><?php echo $name->id; ?></h2>
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