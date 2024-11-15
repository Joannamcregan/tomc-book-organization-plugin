<?php global $wpdb;
$posts_table = $wpdb->prefix . "posts";
$userid = get_current_user_id();
$user = wp_get_current_user();

get_header();

?><main class="half-screen">    
    <?php if (is_user_logged_in()){
        if (in_array( 'dc_vendor', (array) $user->roles ) ){
            ?><div class="banner"><h1 class="centered-text banner-heading-46">Manage Your Author Names</h1></div>
            <p class="centered-text"><strong>Add any name you publish books under, whether it's your legal name or a pen name.</strong></p>
            <p class="centered-text">Author bios must be 1000 characters or less.</p>
            <div class="tomc-book-organization--book-to-edit page-accent-alt-thin">
                <h2 class="centered-text">Add a new name</h2>
                <input type="text" class="tomc-book-organization-text-input centered-text" id="tomc-book-organization-new-penname"></input>
                <textarea class="tomc-book-organization-textarea--edit" id="tomc-book-organization--ew-name-bio"></textarea>
                <p id="tomc-blank-new-name-message" class="hidden centered-text tomc-book-organization--red-text">Name cannot be blank.</p>
                <p id="tomc-blank-new-bio-message" class="hidden centered-text tomc-book-organization--red-text">Bio cannot be blank.</p>
                <div class="flex justify-content-center">
                    <button id="tomc-book-organization--save-new-penname">save bio</button>
                    <button id="tomc-book-organization--cancel-new-penname">cancel</button>
                </div>
            </div>
            <?php $query = 'select p.id, p.post_title, p.post_content from %i p where p.post_type = "author-profile" and p.post_author = %d';
            $names = $wpdb->get_results($wpdb->prepare($query, $posts_table, $userid));
            if ($names){
                ?><div class="third-screen">
                    <?php foreach($names as $name){
                        ?><div class="tomc-book-organization--book-to-edit page-accent-alt-thin" data-pen-name="<?php echo $name->id; ?>">
                            <h2 class="centered-text"><?php echo $name->post_title; ?></h2>
                            <div class="tomc-book-organization--display-penname-section">
                                <p class="generic-content"><?php echo $name->post_content; ?></p>
                                <button class="tomc-book-organization--save-button tomc-book-organization--edit-penname-bio">edit bio</button>
                            </div>
                            <div class="hidden tomc-book-organization--edit-penname-section">
                                <textarea class="tomc-book-organization-textarea--edit"><?php echo $name->post_content; ?></textarea>
                                <p class="hidden centered-text tomc-book-organization--red-text tomc-blank-bio-message">Bio cannot be blank.</p>
                                <div class="flex justify-content-center">
                                    <button class="tomc-book-organization--save-penname-edit">save bio</button>
                                    <button class="tomc-book-organization--cancel-penname-edit">cancel</button>
                                </div>
                            </div>
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