<?php get_header();

?><main>
<?php if (is_user_logged_in()){
    $user = wp_get_current_user();
    if ((in_array( 'reader-member', (array) $user->roles )) || (in_array( 'creator-member', (array) $user->roles )) || (in_array( 'administrator', (array) $user->roles ))){
        while ( have_posts() ) :
        the_post();
            ?><div class="full-screen">
            <!-- <div class="full-screen margin-20"> -->
                <?php wp_reset_postdata();
                the_content(); 
                wp_link_pages();?>
            </div>
        <?php endwhile;
    } else {
        ?><div class="half-screen">
            <p class="centered-text">This space is for <a href="<?php echo esc_url(site_url('/own'));?>">co-op members</a> only.</p>
        </div>
    <?php }
} else {
    ?><div class="half-screen">
        <p class="centered-text"><a href="<?php echo esc_url(site_url('/my-account'));?>">Login</a> to access this space.</p>
    </div>
<?php }
?></main>

<?php get_footer(); ?>