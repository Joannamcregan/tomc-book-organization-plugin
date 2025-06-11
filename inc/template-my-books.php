<?php global $wpdb;
$books_table = $wpdb->prefix .  "tomc_books";
// $product_types_table = $wpdb->prefix . "tomc_product_types";
// $book_products_table = $wpdb->prefix . "tomc_book_products";
// $pennames_table = $wpdb->prefix . "tomc_pennames";
// $user_pennames_table = $wpdb->prefix . "tomc_user_pennames";
// $pennames_books_table = $wpdb->prefix . "tomc_pennames_books";
// $book_readalikes_table = $wpdb->prefix . "tomc_book_readalikes";
// $genres_table = $wpdb->prefix . "tomc_genres";
// $book_genres_table = $wpdb->prefix . "tomc_book_genres";
// $users_table = $wpdb->prefix . "users";
// $posts_table = $wpdb->prefix . "posts";
$user = wp_get_current_user();
$userid = $user->ID;

get_header();

?><main class="half-screen">    
    <?php if (is_user_logged_in()){
        ?><div class="banner"><h1 class="centered-text banner-heading-46">Manage Your Books</h1></div>
        <?php if (in_array( 'dc_vendor', (array) $user->roles ) ){
            $query = "SELECT * from %i WHERE createdby = %d ORDER BY title";
            $books = $wpdb->get_results($wpdb->prepare($query, $books_table, $userid), ARRAY_A);
            if ($books){
                ?><div class="third-screen">
                    <h2 class="centered-text">Choose a Book to Edit</h2>
                    <?php for($i = 0; $i < count($books); $i++){
                        ?><div class="tomc-book-organization--book-to-edit page-accent-alt-thin">
                            <p class="centered-text"><strong class="tomc-book-organization--book-to-edit-title tomc-book-options--cursor-pointer underlined-text"><?php echo $books[$i]['title']; ?></strong></p>
                            <div class="tomc-book-organization--edit-book-options hidden" data-book="<?php echo $books[$i]['id']; ?>" data-title="<?php echo $books[$i]['title']; ?>" data-edition="<?php echo $books[$i]['publication_edition']; ?>">
                                <p class="transparent-stripe-0 centered-text tomc-book-organization--blue-text tomc-book-options--cursor-pointer tomc-book-organization--edit-basic-info">basic info</p>
                                <p class="transparent-stripe-1 centered-text tomc-book-organization--blue-text tomc-book-options--cursor-pointer tomc-book-organization--edit-languages">languages</p>
                                <p class="transparent-stripe-2 centered-text tomc-book-organization--blue-text tomc-book-options--cursor-pointer tomc-book-organization--edit-genres">genres</p>
                                <p class="transparent-stripe-0 centered-text tomc-book-organization--blue-text tomc-book-options--cursor-pointer tomc-book-organization--edit-character-identities">character identities</p>
                                <p class="transparent-stripe-1 centered-text tomc-book-organization--blue-text tomc-book-options--cursor-pointer tomc-book-organization--edit-readalikes">read-alikes</p>
                                <p class="transparent-stripe-2 centered-text tomc-book-organization--blue-text tomc-book-options--cursor-pointer tomc-book-organization--edit-content-warnings">content warnings</p>
                                <p class="transparent-stripe-0 centered-text tomc-book-organization--blue-text tomc-book-options--cursor-pointer tomc-book-organization--edit-author-name">author name</p>
                                <p class="transparent-stripe-1 centered-text tomc-book-organization--blue-text tomc-book-options--cursor-pointer tomc-book-organization--edit-linked-products">linked products</p>
                                <?php if ($books[$i]['islive'] == 1){
                                    ?><button data-toggle=0 class="tomc-book-organization--save-button tomc-book-organization--unpublish">unpublish</button>
                                    <p class="centered-text"><em>Unpublishing your book will remove it from search results and browsing areas.</em></p>
                                <?php } else {
                                    ?><button data-toggle=1 class="tomc-book-organization--save-button tomc-book-organization--publish">publish</button>
                                    <p class="centered-text"><em>Publishing your book will add it to search results and browsing areas.</em></p>
                                    <button class="tomc-book-organization--delete">delete</button>
                                <?php } ?>
                            </div>
                        </div>
                    <?php }

                    ?><div class="tomc-book-organization__overlay" id="tomc-book-organization__edit-basic-info-overlay">
                        <div class="overlay-main-container">
                            <br>
                            <!-- <i class="fa fa-window-close tomc-book-organization__overlay__close tomc-book-organization--close-overlay" aria-label="close overlay"></i> -->
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 30 30" class="tomc-book-organization__overlay__close tomc-book-organization--close-overlay">
                                <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABWVJREFUWEfNmHtQ1FUUx7+/H08BRRTDMTABETXGhMxEBZTl5UiLzqRhY2EN5pj5ABSyIRBtGmiC1IqaMCUtGZRpUBoNZbd4+MhHUKZoiPkg0RRBVAwEbnN+Kz9h2XV/v90d2/PPzu7ee87nnnPvuedcDhYuXG++zKCwSJ5nC1k3AsGBf7LsjFiO8YzfuaaybE+PbREwK0SRB4b4Jwul11phSoUqlv4VAD8KDo1g4EotBE7A4Dj2anK5ukAAzAoK2w6OvWZJgIyxk+9WqidpAIMVfwLw0QVoY28Hryn+aL1+E4215822BjtHB3hPfR6NtXVobrimS29LSoXKRQMYojgPBm9do0KXxcE7MACMMRzc+DUunTxlMiQtWpm+CkM8RqCzowO713yIu03NffRyQGtyhcrZIOCs5KVwnzBWmEzKSjZsxs2/rhgNyfE8Ile/BY8J4zQ6GEPR2iw0NzQaB+g4dDDmZCTBYfAgQUFbSyuK07Nxr6nFKMhpi+ZhfNh0ce7xXT+gZu/Bfroke5Bmuo5yR3TqClBoSG5dvoq96zfiwb/tsiD9omYgcOFccc5Z9WFUbi3UqUMWIGnwmDgekYmLQSEiuVJzBqU5eWDd3ZIgRwb4ISIhHhynSb2Xa07jQM4WvfNlA5LScYppmP7GfBHo9MFKHP6myCDg0FHuUL6/EtZ2tsJY2sMlH2xGZ3uH3rlGAZK2ybFKPBetEBUf2fE9/igt12vI0cUZMeuTQJ8kd27cwp51Obh/+85jF2Y0IDgOinfi4PWiv+YQdnfjwCdbcLn6dD+D5DHyHHmQpP1um7B3W65eN+h14wEBWNnYYPZ7y+Dm4ykYosNSsmETmi79LRqmvRaeEI9nAvyE37oedGJf5ue4du6CQTgaYBIgKbB3coRyXQKchw8TDN671YLi9By0Nd8WvtNppVOrcTOD6rN8XPilRhKcWQBJySA3V8SsS4T9QEfB8M2LDYInxwRNBuW7Hjn6XTFO7f9JMpzZAEkRhZnCTWEnuVF/Ca6eHmI6ogNEB0mumBzi3gY9J09E2PJFVCP14bh44neUbdoq3ONyxayAZHxq3Mt4NjxI5KArsTBxPTo7HshlE8abFdDFfTiUaatg6zCgD8yxwhL8VlL2/wJSERGTkQinoS7iiRVDzRjUuTtQf+SkbEizeJCKh5dSV4iJmHJdafZXCJgbieG+mvKSftuflYvGs/WyIE0G5K14RCT1revUudtRf+RX2Dk5IEbIkU8JUO332rA3Q9oN0rMKkwGD4mMxdkag6BXt/aadI6XewWYB9I+JwKR5s0W4WvUhVG3d1S+EbmO8MHst5Uhr4T8pVYzJgKOnTcLMpY8aQEN1IfUzoW+/LuZIQ3WgSYAjxvuAehTe2krjkYdX2+PqOho3URmOF+ZHP/K46hCqtvX3eO8QyN6D2rmOurA9VBy0tEo6ncGLF8A3ZIrePautRBagdq7raLsv1HV6+lmdwLyVFaLWLMHTfr5ivnxcjpQMqJ3ruru6sD/rC1w9UyfJc70H0U1DNw5Fw1COlAwYtXqJ0DD1yM9ffou6quOy4XomOLkOwZyMRAxwHijmyOK0bOHlQvYepDShTFspzjtRtA/Vxaa/MQ3zGono1OWwttU0UefKj6Iir0A+IIXklY9TYT/ICVI7OKmupTaUehuCPJS/G2fKqvQDZgYr6jnAS5dyKkSdXF1wu/EfqbYlj6OF29jZCp2eoVNcAAbhwdCCpDqlQhXw8PltphLgxWdXi4Dk2Jsp5eptj56Ag8J2gmMLLAKO4ceUStUsYtF6RFfE8hwSGdhogHvCj+iCa+o5xj5NrlTn9ziqb5djEe7rC/EfEN2XR0giN+8AAAAASUVORK5CYII=" x="0" y="0" width="30" height="30" alt="X close icon" />
                            </svg>
                            <h2 class="centered-text" id="tomc-book-organization__edit-basic-info-overlay--heading"></h2>
                            <div class="tomc-book-organization__edit-basic-info-container tomc-book-organization__container tomc-book-org-html"></div>
                            <div class="tomc-book-organization--form-div hidden tomc-book-organization--red-text centered-text" id="tomc-book-organization--edit-basic-info-errors">
                                <p class="hidden" id="tomc-book-organization--edit-basic-info-errors-title">Your book's title cannot be blank.</p>
                                <p class="hidden" id="tomc-book-organization--edit-basic-info-errors-description">Add a description to help readers who will love your book find it.</p>
                                <p class="hidden" id="tomc-book-organization--edit-basic-info-errors-excerpt">Add an excerpt to help readers get a feel for your book.</p>
                                <p class="hidden" id="tomc-book-organization--edit-basic-info-no-changes">No changes appear to have been made.</p>
                            </div>
                            <button class="tomc-book-organization--save-button" id="tomc-book-organization--save-basic-info-edits">save</button>
                        </div>
                    </div>

                    <div class="tomc-book-organization__overlay" id="tomc-book-organization__edit-pen-name-overlay">
                        <div class="overlay-main-container">
                            <br>
                            <!-- <i class="fa fa-window-close tomc-book-organization__overlay__close tomc-book-organization--close-overlay" aria-label="close overlay" id="tomc-book-organization__edit-pen-name-overlay-close"></i> -->
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 30 30" class="tomc-book-organization__overlay__close tomc-book-organization--close-overlay" id="tomc-book-organization__edit-pen-name-overlay-close">
                                <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABWVJREFUWEfNmHtQ1FUUx7+/H08BRRTDMTABETXGhMxEBZTl5UiLzqRhY2EN5pj5ABSyIRBtGmiC1IqaMCUtGZRpUBoNZbd4+MhHUKZoiPkg0RRBVAwEbnN+Kz9h2XV/v90d2/PPzu7ee87nnnPvuedcDhYuXG++zKCwSJ5nC1k3AsGBf7LsjFiO8YzfuaaybE+PbREwK0SRB4b4Jwul11phSoUqlv4VAD8KDo1g4EotBE7A4Dj2anK5ukAAzAoK2w6OvWZJgIyxk+9WqidpAIMVfwLw0QVoY28Hryn+aL1+E4215822BjtHB3hPfR6NtXVobrimS29LSoXKRQMYojgPBm9do0KXxcE7MACMMRzc+DUunTxlMiQtWpm+CkM8RqCzowO713yIu03NffRyQGtyhcrZIOCs5KVwnzBWmEzKSjZsxs2/rhgNyfE8Ile/BY8J4zQ6GEPR2iw0NzQaB+g4dDDmZCTBYfAgQUFbSyuK07Nxr6nFKMhpi+ZhfNh0ce7xXT+gZu/Bfroke5Bmuo5yR3TqClBoSG5dvoq96zfiwb/tsiD9omYgcOFccc5Z9WFUbi3UqUMWIGnwmDgekYmLQSEiuVJzBqU5eWDd3ZIgRwb4ISIhHhynSb2Xa07jQM4WvfNlA5LScYppmP7GfBHo9MFKHP6myCDg0FHuUL6/EtZ2tsJY2sMlH2xGZ3uH3rlGAZK2ybFKPBetEBUf2fE9/igt12vI0cUZMeuTQJ8kd27cwp51Obh/+85jF2Y0IDgOinfi4PWiv+YQdnfjwCdbcLn6dD+D5DHyHHmQpP1um7B3W65eN+h14wEBWNnYYPZ7y+Dm4ykYosNSsmETmi79LRqmvRaeEI9nAvyE37oedGJf5ue4du6CQTgaYBIgKbB3coRyXQKchw8TDN671YLi9By0Nd8WvtNppVOrcTOD6rN8XPilRhKcWQBJySA3V8SsS4T9QEfB8M2LDYInxwRNBuW7Hjn6XTFO7f9JMpzZAEkRhZnCTWEnuVF/Ca6eHmI6ogNEB0mumBzi3gY9J09E2PJFVCP14bh44neUbdoq3ONyxayAZHxq3Mt4NjxI5KArsTBxPTo7HshlE8abFdDFfTiUaatg6zCgD8yxwhL8VlL2/wJSERGTkQinoS7iiRVDzRjUuTtQf+SkbEizeJCKh5dSV4iJmHJdafZXCJgbieG+mvKSftuflYvGs/WyIE0G5K14RCT1revUudtRf+RX2Dk5IEbIkU8JUO332rA3Q9oN0rMKkwGD4mMxdkag6BXt/aadI6XewWYB9I+JwKR5s0W4WvUhVG3d1S+EbmO8MHst5Uhr4T8pVYzJgKOnTcLMpY8aQEN1IfUzoW+/LuZIQ3WgSYAjxvuAehTe2krjkYdX2+PqOho3URmOF+ZHP/K46hCqtvX3eO8QyN6D2rmOurA9VBy0tEo6ncGLF8A3ZIrePautRBagdq7raLsv1HV6+lmdwLyVFaLWLMHTfr5ivnxcjpQMqJ3ruru6sD/rC1w9UyfJc70H0U1DNw5Fw1COlAwYtXqJ0DD1yM9ffou6quOy4XomOLkOwZyMRAxwHijmyOK0bOHlQvYepDShTFspzjtRtA/Vxaa/MQ3zGono1OWwttU0UefKj6Iir0A+IIXklY9TYT/ICVI7OKmupTaUehuCPJS/G2fKqvQDZgYr6jnAS5dyKkSdXF1wu/EfqbYlj6OF29jZCp2eoVNcAAbhwdCCpDqlQhXw8PltphLgxWdXi4Dk2Jsp5eptj56Ag8J2gmMLLAKO4ceUStUsYtF6RFfE8hwSGdhogHvCj+iCa+o5xj5NrlTn9ziqb5djEe7rC/EfEN2XR0giN+8AAAAASUVORK5CYII=" x="0" y="0" width="30" height="30" alt="X close icon" />
                            </svg>
                            <br>
                            <h2 class="centered-text" id="tomc-book-organization__edit-pen-name-overlay--heading"></h2>
                            <h3 class="centered-text">Which name are you publishing this book under?</h3>
                            <div class="tomc-book-organization__edit-pen-name-container tomc-book-organization__container tomc-book-org-html"></div>
                            <span class="tomc-book-organization--add-pen-name tomc-book-organization--add-option margin-auto-block fit-content" data-user-id="<?php echo $userid; ?>">add a new author name</span>
                            <button class="tomc-book-organization--save-button" id="tomc-book-organization--save-pen-name-edits">save</button>
                        </div>
                    </div>                    

                    <div class="tomc-book-organization__overlay" id="tomc-book-organization__edit-genres-overlay">
                        <div class="overlay-main-container">
                            <br><br>
                            <!-- <i class="fa fa-window-close tomc-book-organization__overlay__close tomc-book-organization--close-overlay" aria-label="close overlay"></i> -->
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 30 30" class="tomc-book-organization__overlay__close tomc-book-organization--close-overlay">
                                <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABWVJREFUWEfNmHtQ1FUUx7+/H08BRRTDMTABETXGhMxEBZTl5UiLzqRhY2EN5pj5ABSyIRBtGmiC1IqaMCUtGZRpUBoNZbd4+MhHUKZoiPkg0RRBVAwEbnN+Kz9h2XV/v90d2/PPzu7ee87nnnPvuedcDhYuXG++zKCwSJ5nC1k3AsGBf7LsjFiO8YzfuaaybE+PbREwK0SRB4b4Jwul11phSoUqlv4VAD8KDo1g4EotBE7A4Dj2anK5ukAAzAoK2w6OvWZJgIyxk+9WqidpAIMVfwLw0QVoY28Hryn+aL1+E4215822BjtHB3hPfR6NtXVobrimS29LSoXKRQMYojgPBm9do0KXxcE7MACMMRzc+DUunTxlMiQtWpm+CkM8RqCzowO713yIu03NffRyQGtyhcrZIOCs5KVwnzBWmEzKSjZsxs2/rhgNyfE8Ile/BY8J4zQ6GEPR2iw0NzQaB+g4dDDmZCTBYfAgQUFbSyuK07Nxr6nFKMhpi+ZhfNh0ce7xXT+gZu/Bfroke5Bmuo5yR3TqClBoSG5dvoq96zfiwb/tsiD9omYgcOFccc5Z9WFUbi3UqUMWIGnwmDgekYmLQSEiuVJzBqU5eWDd3ZIgRwb4ISIhHhynSb2Xa07jQM4WvfNlA5LScYppmP7GfBHo9MFKHP6myCDg0FHuUL6/EtZ2tsJY2sMlH2xGZ3uH3rlGAZK2ybFKPBetEBUf2fE9/igt12vI0cUZMeuTQJ8kd27cwp51Obh/+85jF2Y0IDgOinfi4PWiv+YQdnfjwCdbcLn6dD+D5DHyHHmQpP1um7B3W65eN+h14wEBWNnYYPZ7y+Dm4ykYosNSsmETmi79LRqmvRaeEI9nAvyE37oedGJf5ue4du6CQTgaYBIgKbB3coRyXQKchw8TDN671YLi9By0Nd8WvtNppVOrcTOD6rN8XPilRhKcWQBJySA3V8SsS4T9QEfB8M2LDYInxwRNBuW7Hjn6XTFO7f9JMpzZAEkRhZnCTWEnuVF/Ca6eHmI6ogNEB0mumBzi3gY9J09E2PJFVCP14bh44neUbdoq3ONyxayAZHxq3Mt4NjxI5KArsTBxPTo7HshlE8abFdDFfTiUaatg6zCgD8yxwhL8VlL2/wJSERGTkQinoS7iiRVDzRjUuTtQf+SkbEizeJCKh5dSV4iJmHJdafZXCJgbieG+mvKSftuflYvGs/WyIE0G5K14RCT1revUudtRf+RX2Dk5IEbIkU8JUO332rA3Q9oN0rMKkwGD4mMxdkag6BXt/aadI6XewWYB9I+JwKR5s0W4WvUhVG3d1S+EbmO8MHst5Uhr4T8pVYzJgKOnTcLMpY8aQEN1IfUzoW+/LuZIQ3WgSYAjxvuAehTe2krjkYdX2+PqOho3URmOF+ZHP/K46hCqtvX3eO8QyN6D2rmOurA9VBy0tEo6ncGLF8A3ZIrePautRBagdq7raLsv1HV6+lmdwLyVFaLWLMHTfr5ivnxcjpQMqJ3ruru6sD/rC1w9UyfJc70H0U1DNw5Fw1COlAwYtXqJ0DD1yM9ffou6quOy4XomOLkOwZyMRAxwHijmyOK0bOHlQvYepDShTFspzjtRtA/Vxaa/MQ3zGono1OWwttU0UefKj6Iir0A+IIXklY9TYT/ICVI7OKmupTaUehuCPJS/G2fKqvQDZgYr6jnAS5dyKkSdXF1wu/EfqbYlj6OF29jZCp2eoVNcAAbhwdCCpDqlQhXw8PltphLgxWdXi4Dk2Jsp5eptj56Ag8J2gmMLLAKO4ceUStUsYtF6RFfE8hwSGdhogHvCj+iCa+o5xj5NrlTn9ziqb5djEe7rC/EfEN2XR0giN+8AAAAASUVORK5CYII=" x="0" y="0" width="30" height="30" alt="X close icon" />
                            </svg>
                            <h2 class="centered-text" id="tomc-book-organization__edit-genres-overlay--heading"></h2>
                            <div class="tomc-book-organization__edit-genres-container">
                                <h3 class="centered-text">Genres</h3>
                                <div class="tomc-book-organization__edit-genres-container--1 tomc-book-organization--options-container tomc-book-org-html"></div>
                                <h3 class="centered-text">Subgenres</h3>
                                <div class="tomc-book-organization__edit-genres-container--2 tomc-book-organization--options-container tomc-book-org-html" id="tomc-book-organization--genres-2">
                                    <span class="tomc-book-organization--add-genre tomc-book-organization--add-option" data-genre-level="2" data-user-id="<?php echo $userid; ?>" id="add-genre-2-button">add a new genre</span>
                                </div>
                                <div class="hidden tomc-book-organization--red-text tomc-book-organization--genres2-error-section centered-text">
                                    <p class="tomc-book-organization--genres-error-section-mobile">To add another category, first deselect one of the genres you've already chosen by tapping it again.</p>
                                    <p class="tomc-book-organization--genres-error-section-desktop">To add another category, first deselect one of the genres you've already chosen by clicking it again.</p>
                                    <br><br>
                                </div>
                                <h3 class="centered-text">Topics</h3>
                                <div class="tomc-book-organization__edit-genres-container--3 tomc-book-organization--options-container tomc-book-org-html" id="tomc-book-organization--genres-3">
                                    <span class="tomc-book-organization--add-genre tomc-book-organization--add-option" data-genre-level="3" data-user-id="<?php echo $userid; ?>" id="add-genre-3-button">add a new subgenre</span>
                                </div>
                                <div class="hidden tomc-book-organization--red-text tomc-book-organization--genres3-error-section centered-text">
                                    <p class="tomc-book-organization--genres-error-section-mobile">To add another category, first deselect one of the genres you've already chosen by tapping it again.</p>
                                    <p class="tomc-book-organization--genres-error-section-desktop">To add another category, first deselect one of the genres you've already chosen by clicking it again.</p>
                                    <br><br>
                                </div>
                            </div>
                            <div class="tomc-book-organization--form-div hidden tomc-book-organization--red-text tomc-book-organization--no-genres-added-edit-error">
                                <p class="centered-text">Please choose at least one thing that your book is about.</p>
                            </div>
                            <p class="hidden centered-text tomc-book-organization--red-text" id="tomc-book-organization--edit-genres-no-changes">No changes appear to have been made.</p>
                            <button class="tomc-book-organization--save-button" id="tomc-book-organization--save-genres-edits">save</button>
                        </div>
                    </div>

                    <div class="tomc-book-organization__overlay" id="tomc-book-organization__edit-languages-overlay">
                        <div class="overlay-main-container"> 
                            <br><br>
                            <!-- <i class="fa fa-window-close tomc-book-organization__overlay__close tomc-book-organization--close-overlay" aria-label="close overlay"></i> -->
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 30 30" class="tomc-book-organization__overlay__close tomc-book-organization--close-overlay">
                                <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABWVJREFUWEfNmHtQ1FUUx7+/H08BRRTDMTABETXGhMxEBZTl5UiLzqRhY2EN5pj5ABSyIRBtGmiC1IqaMCUtGZRpUBoNZbd4+MhHUKZoiPkg0RRBVAwEbnN+Kz9h2XV/v90d2/PPzu7ee87nnnPvuedcDhYuXG++zKCwSJ5nC1k3AsGBf7LsjFiO8YzfuaaybE+PbREwK0SRB4b4Jwul11phSoUqlv4VAD8KDo1g4EotBE7A4Dj2anK5ukAAzAoK2w6OvWZJgIyxk+9WqidpAIMVfwLw0QVoY28Hryn+aL1+E4215822BjtHB3hPfR6NtXVobrimS29LSoXKRQMYojgPBm9do0KXxcE7MACMMRzc+DUunTxlMiQtWpm+CkM8RqCzowO713yIu03NffRyQGtyhcrZIOCs5KVwnzBWmEzKSjZsxs2/rhgNyfE8Ile/BY8J4zQ6GEPR2iw0NzQaB+g4dDDmZCTBYfAgQUFbSyuK07Nxr6nFKMhpi+ZhfNh0ce7xXT+gZu/Bfroke5Bmuo5yR3TqClBoSG5dvoq96zfiwb/tsiD9omYgcOFccc5Z9WFUbi3UqUMWIGnwmDgekYmLQSEiuVJzBqU5eWDd3ZIgRwb4ISIhHhynSb2Xa07jQM4WvfNlA5LScYppmP7GfBHo9MFKHP6myCDg0FHuUL6/EtZ2tsJY2sMlH2xGZ3uH3rlGAZK2ybFKPBetEBUf2fE9/igt12vI0cUZMeuTQJ8kd27cwp51Obh/+85jF2Y0IDgOinfi4PWiv+YQdnfjwCdbcLn6dD+D5DHyHHmQpP1um7B3W65eN+h14wEBWNnYYPZ7y+Dm4ykYosNSsmETmi79LRqmvRaeEI9nAvyE37oedGJf5ue4du6CQTgaYBIgKbB3coRyXQKchw8TDN671YLi9By0Nd8WvtNppVOrcTOD6rN8XPilRhKcWQBJySA3V8SsS4T9QEfB8M2LDYInxwRNBuW7Hjn6XTFO7f9JMpzZAEkRhZnCTWEnuVF/Ca6eHmI6ogNEB0mumBzi3gY9J09E2PJFVCP14bh44neUbdoq3ONyxayAZHxq3Mt4NjxI5KArsTBxPTo7HshlE8abFdDFfTiUaatg6zCgD8yxwhL8VlL2/wJSERGTkQinoS7iiRVDzRjUuTtQf+SkbEizeJCKh5dSV4iJmHJdafZXCJgbieG+mvKSftuflYvGs/WyIE0G5K14RCT1revUudtRf+RX2Dk5IEbIkU8JUO332rA3Q9oN0rMKkwGD4mMxdkag6BXt/aadI6XewWYB9I+JwKR5s0W4WvUhVG3d1S+EbmO8MHst5Uhr4T8pVYzJgKOnTcLMpY8aQEN1IfUzoW+/LuZIQ3WgSYAjxvuAehTe2krjkYdX2+PqOho3URmOF+ZHP/K46hCqtvX3eO8QyN6D2rmOurA9VBy0tEo6ncGLF8A3ZIrePautRBagdq7raLsv1HV6+lmdwLyVFaLWLMHTfr5ivnxcjpQMqJ3ruru6sD/rC1w9UyfJc70H0U1DNw5Fw1COlAwYtXqJ0DD1yM9ffou6quOy4XomOLkOwZyMRAxwHijmyOK0bOHlQvYepDShTFspzjtRtA/Vxaa/MQ3zGono1OWwttU0UefKj6Iir0A+IIXklY9TYT/ICVI7OKmupTaUehuCPJS/G2fKqvQDZgYr6jnAS5dyKkSdXF1wu/EfqbYlj6OF29jZCp2eoVNcAAbhwdCCpDqlQhXw8PltphLgxWdXi4Dk2Jsp5eptj56Ag8J2gmMLLAKO4ceUStUsYtF6RFfE8hwSGdhogHvCj+iCa+o5xj5NrlTn9ziqb5djEe7rC/EfEN2XR0giN+8AAAAASUVORK5CYII=" x="0" y="0" width="30" height="30" alt="X close icon" />
                            </svg>
                            <h2 class="centered-text" id="tomc-book-organization__edit-languages-overlay--heading"></h2>
                            <h3 class="centered-text">Languages</h3>
                            <div class="tomc-book-organization__edit-languages-container tomc-book-organization--options-container tomc-book-org-html" id="tomc-book-organization--languages">
                                <span class="tomc-book-organization--add-language tomc-book-organization--add-option" data-user-id="<?php echo $userid; ?>">add a new language</span>
                            </div>
                            <div class="hidden tomc-book-organization--red-text tomc-book-organization--languages-error-section">
                                <p class="centered-text tomc-book-organization--genres-error-section-mobile">To add another language, first deselect one of the languages you've already chosen by tapping it again.</p>
                                <p class="centered-text tomc-book-organization--genres-error-section-desktop">To add another language, first deselect one of the languages you've already chosen by clicking it again.</p>
                            </div>
                            <div class="centered-text tomc-book-organization--form-div hidden tomc-book-organization--red-text" id="tomc-book-organization--edit-languages-errors">
                                <p class="hidden" id="tomc-book-organization--edit-no-languages-selected">Please choose as least one language to ensure your book shows up in search results.</p>
                                <p class="hidden" id="tomc-book-organization--edit-languages-no-changes">No changes appear to have been made.</p>
                            </div>
                            <button class="tomc-book-organization--save-button" id="tomc-book-organization--save-languages-edits">save</button>
                        </div>
                    </div>

                    <div class="tomc-book-organization__overlay" id="tomc-book-organization__edit-identities-overlay">
                        <div class="overlay-main-container">
                            <br><br>
                            <!-- <i class="fa fa-window-close tomc-book-organization__overlay__close tomc-book-organization--close-overlay" aria-label="close overlay"></i> -->
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 30 30" class="tomc-book-organization__overlay__close tomc-book-organization--close-overlay">
                                <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABWVJREFUWEfNmHtQ1FUUx7+/H08BRRTDMTABETXGhMxEBZTl5UiLzqRhY2EN5pj5ABSyIRBtGmiC1IqaMCUtGZRpUBoNZbd4+MhHUKZoiPkg0RRBVAwEbnN+Kz9h2XV/v90d2/PPzu7ee87nnnPvuedcDhYuXG++zKCwSJ5nC1k3AsGBf7LsjFiO8YzfuaaybE+PbREwK0SRB4b4Jwul11phSoUqlv4VAD8KDo1g4EotBE7A4Dj2anK5ukAAzAoK2w6OvWZJgIyxk+9WqidpAIMVfwLw0QVoY28Hryn+aL1+E4215822BjtHB3hPfR6NtXVobrimS29LSoXKRQMYojgPBm9do0KXxcE7MACMMRzc+DUunTxlMiQtWpm+CkM8RqCzowO713yIu03NffRyQGtyhcrZIOCs5KVwnzBWmEzKSjZsxs2/rhgNyfE8Ile/BY8J4zQ6GEPR2iw0NzQaB+g4dDDmZCTBYfAgQUFbSyuK07Nxr6nFKMhpi+ZhfNh0ce7xXT+gZu/Bfroke5Bmuo5yR3TqClBoSG5dvoq96zfiwb/tsiD9omYgcOFccc5Z9WFUbi3UqUMWIGnwmDgekYmLQSEiuVJzBqU5eWDd3ZIgRwb4ISIhHhynSb2Xa07jQM4WvfNlA5LScYppmP7GfBHo9MFKHP6myCDg0FHuUL6/EtZ2tsJY2sMlH2xGZ3uH3rlGAZK2ybFKPBetEBUf2fE9/igt12vI0cUZMeuTQJ8kd27cwp51Obh/+85jF2Y0IDgOinfi4PWiv+YQdnfjwCdbcLn6dD+D5DHyHHmQpP1um7B3W65eN+h14wEBWNnYYPZ7y+Dm4ykYosNSsmETmi79LRqmvRaeEI9nAvyE37oedGJf5ue4du6CQTgaYBIgKbB3coRyXQKchw8TDN671YLi9By0Nd8WvtNppVOrcTOD6rN8XPilRhKcWQBJySA3V8SsS4T9QEfB8M2LDYInxwRNBuW7Hjn6XTFO7f9JMpzZAEkRhZnCTWEnuVF/Ca6eHmI6ogNEB0mumBzi3gY9J09E2PJFVCP14bh44neUbdoq3ONyxayAZHxq3Mt4NjxI5KArsTBxPTo7HshlE8abFdDFfTiUaatg6zCgD8yxwhL8VlL2/wJSERGTkQinoS7iiRVDzRjUuTtQf+SkbEizeJCKh5dSV4iJmHJdafZXCJgbieG+mvKSftuflYvGs/WyIE0G5K14RCT1revUudtRf+RX2Dk5IEbIkU8JUO332rA3Q9oN0rMKkwGD4mMxdkag6BXt/aadI6XewWYB9I+JwKR5s0W4WvUhVG3d1S+EbmO8MHst5Uhr4T8pVYzJgKOnTcLMpY8aQEN1IfUzoW+/LuZIQ3WgSYAjxvuAehTe2krjkYdX2+PqOho3URmOF+ZHP/K46hCqtvX3eO8QyN6D2rmOurA9VBy0tEo6ncGLF8A3ZIrePautRBagdq7raLsv1HV6+lmdwLyVFaLWLMHTfr5ivnxcjpQMqJ3ruru6sD/rC1w9UyfJc70H0U1DNw5Fw1COlAwYtXqJ0DD1yM9ffou6quOy4XomOLkOwZyMRAxwHijmyOK0bOHlQvYepDShTFspzjtRtA/Vxaa/MQ3zGono1OWwttU0UefKj6Iir0A+IIXklY9TYT/ICVI7OKmupTaUehuCPJS/G2fKqvQDZgYr6jnAS5dyKkSdXF1wu/EfqbYlj6OF29jZCp2eoVNcAAbhwdCCpDqlQhXw8PltphLgxWdXi4Dk2Jsp5eptj56Ag8J2gmMLLAKO4ceUStUsYtF6RFfE8hwSGdhogHvCj+iCa+o5xj5NrlTn9ziqb5djEe7rC/EfEN2XR0giN+8AAAAASUVORK5CYII=" x="0" y="0" width="30" height="30" alt="X close icon" />
                            </svg>
                            <h2 class="centered-text" id="tomc-book-organization__edit-identities-overlay--heading"></h2>
                            <h3 class="centered-text">Main Character Identities</h3>
                            <div class="tomc-book-organization__edit-identities-container  tomc-book-organization--options-container tomc-book-org-html" id="tomc-book-organization--identities">
                                <span class="tomc-book-organization--add-identity tomc-book-organization--add-option" data-user-id="<?php echo $userid; ?>">add a new identity</span>
                            </div>
                            <div class="hidden tomc-book-organization--red-text tomc-book-organization--identities-error-section centered-text">
                                <p class="tomc-book-organization--genres-error-section-mobile">To add another identity, first deselect one of the identities you've already chosen by tapping it again.</p>
                                <p class="tomc-book-organization--genres-error-section-desktop">To add another identity, first deselect one of the identities you've already chosen by clicking it again.</p>
                            </div>
                            <div class="hidden centered-text tomc-book-organization--red-text" id="tomc-book-organization--edit-no-identities-selected">
                                <p>Please choose as least one character identity.</p>
                            </div>
                            <div id="tomc-book-organization--edit-identities-no-changes" class="hidden">
                                <p class="centered-text tomc-book-organization--red-text">No changes appear to have been made.</p>
                            </div>
                            <button class="tomc-book-organization--save-button" id="tomc-book-organization--save-identities-edits">save</button>
                        </div>
                    </div>

                    <div class="tomc-book-organization__overlay" id="tomc-book-organization__edit-readalikes-overlay">
                        <div class="overlay-main-container"> 
                            <br><br>
                            <!-- <i class="fa fa-window-close tomc-book-organization__overlay__close tomc-book-organization--close-overlay" aria-label="close overlay"></i> -->
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 30 30" class="tomc-book-organization__overlay__close tomc-book-organization--close-overlay">
                                <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABWVJREFUWEfNmHtQ1FUUx7+/H08BRRTDMTABETXGhMxEBZTl5UiLzqRhY2EN5pj5ABSyIRBtGmiC1IqaMCUtGZRpUBoNZbd4+MhHUKZoiPkg0RRBVAwEbnN+Kz9h2XV/v90d2/PPzu7ee87nnnPvuedcDhYuXG++zKCwSJ5nC1k3AsGBf7LsjFiO8YzfuaaybE+PbREwK0SRB4b4Jwul11phSoUqlv4VAD8KDo1g4EotBE7A4Dj2anK5ukAAzAoK2w6OvWZJgIyxk+9WqidpAIMVfwLw0QVoY28Hryn+aL1+E4215822BjtHB3hPfR6NtXVobrimS29LSoXKRQMYojgPBm9do0KXxcE7MACMMRzc+DUunTxlMiQtWpm+CkM8RqCzowO713yIu03NffRyQGtyhcrZIOCs5KVwnzBWmEzKSjZsxs2/rhgNyfE8Ile/BY8J4zQ6GEPR2iw0NzQaB+g4dDDmZCTBYfAgQUFbSyuK07Nxr6nFKMhpi+ZhfNh0ce7xXT+gZu/Bfroke5Bmuo5yR3TqClBoSG5dvoq96zfiwb/tsiD9omYgcOFccc5Z9WFUbi3UqUMWIGnwmDgekYmLQSEiuVJzBqU5eWDd3ZIgRwb4ISIhHhynSb2Xa07jQM4WvfNlA5LScYppmP7GfBHo9MFKHP6myCDg0FHuUL6/EtZ2tsJY2sMlH2xGZ3uH3rlGAZK2ybFKPBetEBUf2fE9/igt12vI0cUZMeuTQJ8kd27cwp51Obh/+85jF2Y0IDgOinfi4PWiv+YQdnfjwCdbcLn6dD+D5DHyHHmQpP1um7B3W65eN+h14wEBWNnYYPZ7y+Dm4ykYosNSsmETmi79LRqmvRaeEI9nAvyE37oedGJf5ue4du6CQTgaYBIgKbB3coRyXQKchw8TDN671YLi9By0Nd8WvtNppVOrcTOD6rN8XPilRhKcWQBJySA3V8SsS4T9QEfB8M2LDYInxwRNBuW7Hjn6XTFO7f9JMpzZAEkRhZnCTWEnuVF/Ca6eHmI6ogNEB0mumBzi3gY9J09E2PJFVCP14bh44neUbdoq3ONyxayAZHxq3Mt4NjxI5KArsTBxPTo7HshlE8abFdDFfTiUaatg6zCgD8yxwhL8VlL2/wJSERGTkQinoS7iiRVDzRjUuTtQf+SkbEizeJCKh5dSV4iJmHJdafZXCJgbieG+mvKSftuflYvGs/WyIE0G5K14RCT1revUudtRf+RX2Dk5IEbIkU8JUO332rA3Q9oN0rMKkwGD4mMxdkag6BXt/aadI6XewWYB9I+JwKR5s0W4WvUhVG3d1S+EbmO8MHst5Uhr4T8pVYzJgKOnTcLMpY8aQEN1IfUzoW+/LuZIQ3WgSYAjxvuAehTe2krjkYdX2+PqOho3URmOF+ZHP/K46hCqtvX3eO8QyN6D2rmOurA9VBy0tEo6ncGLF8A3ZIrePautRBagdq7raLsv1HV6+lmdwLyVFaLWLMHTfr5ivnxcjpQMqJ3ruru6sD/rC1w9UyfJc70H0U1DNw5Fw1COlAwYtXqJ0DD1yM9ffou6quOy4XomOLkOwZyMRAxwHijmyOK0bOHlQvYepDShTFspzjtRtA/Vxaa/MQ3zGono1OWwttU0UefKj6Iir0A+IIXklY9TYT/ICVI7OKmupTaUehuCPJS/G2fKqvQDZgYr6jnAS5dyKkSdXF1wu/EfqbYlj6OF29jZCp2eoVNcAAbhwdCCpDqlQhXw8PltphLgxWdXi4Dk2Jsp5eptj56Ag8J2gmMLLAKO4ceUStUsYtF6RFfE8hwSGdhogHvCj+iCa+o5xj5NrlTn9ziqb5djEe7rC/EfEN2XR0giN+8AAAAASUVORK5CYII=" x="0" y="0" width="30" height="30" alt="X close icon" />
                            </svg>
                            <h2 class="centered-text" id="tomc-book-organization__edit-readalikes-overlay--heading"></h2>
                            <h3 class="centered-text">Similar Books</h3>
                            <div class="tomc-book-organization__edit-readalikes-container  tomc-book-org-html"></div>
                            <div id="tomc-book-organization--edit-readalikes-no-changes" class="hidden">
                                <p class="centered-text tomc-book-organization--red-text">No changes appear to have been made.</p>
                            </div>
                            <button class="tomc-book-organization--save-button" id="tomc-book-organization--save-readalikes-edits">save</button>
                        </div>
                    </div>

                    <div class="tomc-book-organization__overlay" id="tomc-book-organization__edit-content-warnings-overlay">
                        <div class="overlay-main-container">
                            <br><br>
                            <!-- <i class="fa fa-window-close tomc-book-organization__overlay__close tomc-book-organization--close-overlay" aria-label="close overlay"></i> -->
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 30 30" class="tomc-book-organization__overlay__close tomc-book-organization--close-overlay">
                                <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABWVJREFUWEfNmHtQ1FUUx7+/H08BRRTDMTABETXGhMxEBZTl5UiLzqRhY2EN5pj5ABSyIRBtGmiC1IqaMCUtGZRpUBoNZbd4+MhHUKZoiPkg0RRBVAwEbnN+Kz9h2XV/v90d2/PPzu7ee87nnnPvuedcDhYuXG++zKCwSJ5nC1k3AsGBf7LsjFiO8YzfuaaybE+PbREwK0SRB4b4Jwul11phSoUqlv4VAD8KDo1g4EotBE7A4Dj2anK5ukAAzAoK2w6OvWZJgIyxk+9WqidpAIMVfwLw0QVoY28Hryn+aL1+E4215822BjtHB3hPfR6NtXVobrimS29LSoXKRQMYojgPBm9do0KXxcE7MACMMRzc+DUunTxlMiQtWpm+CkM8RqCzowO713yIu03NffRyQGtyhcrZIOCs5KVwnzBWmEzKSjZsxs2/rhgNyfE8Ile/BY8J4zQ6GEPR2iw0NzQaB+g4dDDmZCTBYfAgQUFbSyuK07Nxr6nFKMhpi+ZhfNh0ce7xXT+gZu/Bfroke5Bmuo5yR3TqClBoSG5dvoq96zfiwb/tsiD9omYgcOFccc5Z9WFUbi3UqUMWIGnwmDgekYmLQSEiuVJzBqU5eWDd3ZIgRwb4ISIhHhynSb2Xa07jQM4WvfNlA5LScYppmP7GfBHo9MFKHP6myCDg0FHuUL6/EtZ2tsJY2sMlH2xGZ3uH3rlGAZK2ybFKPBetEBUf2fE9/igt12vI0cUZMeuTQJ8kd27cwp51Obh/+85jF2Y0IDgOinfi4PWiv+YQdnfjwCdbcLn6dD+D5DHyHHmQpP1um7B3W65eN+h14wEBWNnYYPZ7y+Dm4ykYosNSsmETmi79LRqmvRaeEI9nAvyE37oedGJf5ue4du6CQTgaYBIgKbB3coRyXQKchw8TDN671YLi9By0Nd8WvtNppVOrcTOD6rN8XPilRhKcWQBJySA3V8SsS4T9QEfB8M2LDYInxwRNBuW7Hjn6XTFO7f9JMpzZAEkRhZnCTWEnuVF/Ca6eHmI6ogNEB0mumBzi3gY9J09E2PJFVCP14bh44neUbdoq3ONyxayAZHxq3Mt4NjxI5KArsTBxPTo7HshlE8abFdDFfTiUaatg6zCgD8yxwhL8VlL2/wJSERGTkQinoS7iiRVDzRjUuTtQf+SkbEizeJCKh5dSV4iJmHJdafZXCJgbieG+mvKSftuflYvGs/WyIE0G5K14RCT1revUudtRf+RX2Dk5IEbIkU8JUO332rA3Q9oN0rMKkwGD4mMxdkag6BXt/aadI6XewWYB9I+JwKR5s0W4WvUhVG3d1S+EbmO8MHst5Uhr4T8pVYzJgKOnTcLMpY8aQEN1IfUzoW+/LuZIQ3WgSYAjxvuAehTe2krjkYdX2+PqOho3URmOF+ZHP/K46hCqtvX3eO8QyN6D2rmOurA9VBy0tEo6ncGLF8A3ZIrePautRBagdq7raLsv1HV6+lmdwLyVFaLWLMHTfr5ivnxcjpQMqJ3ruru6sD/rC1w9UyfJc70H0U1DNw5Fw1COlAwYtXqJ0DD1yM9ffou6quOy4XomOLkOwZyMRAxwHijmyOK0bOHlQvYepDShTFspzjtRtA/Vxaa/MQ3zGono1OWwttU0UefKj6Iir0A+IIXklY9TYT/ICVI7OKmupTaUehuCPJS/G2fKqvQDZgYr6jnAS5dyKkSdXF1wu/EfqbYlj6OF29jZCp2eoVNcAAbhwdCCpDqlQhXw8PltphLgxWdXi4Dk2Jsp5eptj56Ag8J2gmMLLAKO4ceUStUsYtF6RFfE8hwSGdhogHvCj+iCa+o5xj5NrlTn9ziqb5djEe7rC/EfEN2XR0giN+8AAAAASUVORK5CYII=" x="0" y="0" width="30" height="30" alt="X close icon" />
                            </svg>
                            <h2 class="centered-text" id="tomc-book-organization__edit-content-warnings-overlay--heading"></h2>
                            <h3 class="centered-text">Content Warnings</h3>
                            <div class="tomc-book-organization__edit-content-warnings-container  tomc-book-organization--options-container tomc-book-org-html" id="tomc-book-organization--warnings">
                                <span class="tomc-book-organization--add-warning tomc-book-organization--add-option" data-user-id="<?php echo $userid; ?>">add a new warning</span>
                            </div>
                            <div id="tomc-book-organization--edit-warnings-no-changes" class="hidden">
                                <p class="centered-text tomc-book-organization--red-text">No changes appear to have been made.</p>
                            </div>
                            <button class="tomc-book-organization--save-button" id="tomc-book-organization--save-content-warnings-edits">save</button>
                        </div>
                    </div>

                    <div class="tomc-book-organization__overlay" id="tomc-book-organization__edit-products-overlay">
                        <div class="overlay-main-container">
                            <br><br>
                            <!-- <i class="fa fa-window-close tomc-book-organization__overlay__close tomc-book-organization--close-overlay" aria-label="close overlay"></i> -->
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 30 30" class="tomc-book-organization__overlay__close tomc-book-organization--close-overlay">
                                <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABWVJREFUWEfNmHtQ1FUUx7+/H08BRRTDMTABETXGhMxEBZTl5UiLzqRhY2EN5pj5ABSyIRBtGmiC1IqaMCUtGZRpUBoNZbd4+MhHUKZoiPkg0RRBVAwEbnN+Kz9h2XV/v90d2/PPzu7ee87nnnPvuedcDhYuXG++zKCwSJ5nC1k3AsGBf7LsjFiO8YzfuaaybE+PbREwK0SRB4b4Jwul11phSoUqlv4VAD8KDo1g4EotBE7A4Dj2anK5ukAAzAoK2w6OvWZJgIyxk+9WqidpAIMVfwLw0QVoY28Hryn+aL1+E4215822BjtHB3hPfR6NtXVobrimS29LSoXKRQMYojgPBm9do0KXxcE7MACMMRzc+DUunTxlMiQtWpm+CkM8RqCzowO713yIu03NffRyQGtyhcrZIOCs5KVwnzBWmEzKSjZsxs2/rhgNyfE8Ile/BY8J4zQ6GEPR2iw0NzQaB+g4dDDmZCTBYfAgQUFbSyuK07Nxr6nFKMhpi+ZhfNh0ce7xXT+gZu/Bfroke5Bmuo5yR3TqClBoSG5dvoq96zfiwb/tsiD9omYgcOFccc5Z9WFUbi3UqUMWIGnwmDgekYmLQSEiuVJzBqU5eWDd3ZIgRwb4ISIhHhynSb2Xa07jQM4WvfNlA5LScYppmP7GfBHo9MFKHP6myCDg0FHuUL6/EtZ2tsJY2sMlH2xGZ3uH3rlGAZK2ybFKPBetEBUf2fE9/igt12vI0cUZMeuTQJ8kd27cwp51Obh/+85jF2Y0IDgOinfi4PWiv+YQdnfjwCdbcLn6dD+D5DHyHHmQpP1um7B3W65eN+h14wEBWNnYYPZ7y+Dm4ykYosNSsmETmi79LRqmvRaeEI9nAvyE37oedGJf5ue4du6CQTgaYBIgKbB3coRyXQKchw8TDN671YLi9By0Nd8WvtNppVOrcTOD6rN8XPilRhKcWQBJySA3V8SsS4T9QEfB8M2LDYInxwRNBuW7Hjn6XTFO7f9JMpzZAEkRhZnCTWEnuVF/Ca6eHmI6ogNEB0mumBzi3gY9J09E2PJFVCP14bh44neUbdoq3ONyxayAZHxq3Mt4NjxI5KArsTBxPTo7HshlE8abFdDFfTiUaatg6zCgD8yxwhL8VlL2/wJSERGTkQinoS7iiRVDzRjUuTtQf+SkbEizeJCKh5dSV4iJmHJdafZXCJgbieG+mvKSftuflYvGs/WyIE0G5K14RCT1revUudtRf+RX2Dk5IEbIkU8JUO332rA3Q9oN0rMKkwGD4mMxdkag6BXt/aadI6XewWYB9I+JwKR5s0W4WvUhVG3d1S+EbmO8MHst5Uhr4T8pVYzJgKOnTcLMpY8aQEN1IfUzoW+/LuZIQ3WgSYAjxvuAehTe2krjkYdX2+PqOho3URmOF+ZHP/K46hCqtvX3eO8QyN6D2rmOurA9VBy0tEo6ncGLF8A3ZIrePautRBagdq7raLsv1HV6+lmdwLyVFaLWLMHTfr5ivnxcjpQMqJ3ruru6sD/rC1w9UyfJc70H0U1DNw5Fw1COlAwYtXqJ0DD1yM9ffou6quOy4XomOLkOwZyMRAxwHijmyOK0bOHlQvYepDShTFspzjtRtA/Vxaa/MQ3zGono1OWwttU0UefKj6Iir0A+IIXklY9TYT/ICVI7OKmupTaUehuCPJS/G2fKqvQDZgYr6jnAS5dyKkSdXF1wu/EfqbYlj6OF29jZCp2eoVNcAAbhwdCCpDqlQhXw8PltphLgxWdXi4Dk2Jsp5eptj56Ag8J2gmMLLAKO4ceUStUsYtF6RFfE8hwSGdhogHvCj+iCa+o5xj5NrlTn9ziqb5djEe7rC/EfEN2XR0giN+8AAAAASUVORK5CYII=" x="0" y="0" width="30" height="30" alt="X close icon" />
                            </svg>
                            <h2 class="centered-text" id="tomc-book-organization__edit-products-overlay--heading"></h2>
                            <h3 class="centered-text">Linked Products</h3>
                            <div class="tomc-book-organization__edit-products-container  tomc-book-org-html"></div>
                            <div id="tomc-book-organization--product-image-error" class="hidden">
                                <p class="centered-text">Please select the product whose image you want to use as the main image for this book.</p>
                            </div>
                            <button class="tomc-book-organization--save-button" id="tomc-book-organization--save-products-edits">save</button>
                        </div>
                    </div>

                    <div class="tomc-book-organization__overlay" id="tomc-book-organization__genre-overlay">
                        <div class="overlay-main-container"> 
                            <!-- <i class="fa fa-window-close tomc-book-organization__overlay__close" aria-label="close overlay" id="tomc-book-organization__genre-overlay-close"></i> -->
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 30 30" class="tomc-book-organization__overlay__close">
                                <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABWVJREFUWEfNmHtQ1FUUx7+/H08BRRTDMTABETXGhMxEBZTl5UiLzqRhY2EN5pj5ABSyIRBtGmiC1IqaMCUtGZRpUBoNZbd4+MhHUKZoiPkg0RRBVAwEbnN+Kz9h2XV/v90d2/PPzu7ee87nnnPvuedcDhYuXG++zKCwSJ5nC1k3AsGBf7LsjFiO8YzfuaaybE+PbREwK0SRB4b4Jwul11phSoUqlv4VAD8KDo1g4EotBE7A4Dj2anK5ukAAzAoK2w6OvWZJgIyxk+9WqidpAIMVfwLw0QVoY28Hryn+aL1+E4215822BjtHB3hPfR6NtXVobrimS29LSoXKRQMYojgPBm9do0KXxcE7MACMMRzc+DUunTxlMiQtWpm+CkM8RqCzowO713yIu03NffRyQGtyhcrZIOCs5KVwnzBWmEzKSjZsxs2/rhgNyfE8Ile/BY8J4zQ6GEPR2iw0NzQaB+g4dDDmZCTBYfAgQUFbSyuK07Nxr6nFKMhpi+ZhfNh0ce7xXT+gZu/Bfroke5Bmuo5yR3TqClBoSG5dvoq96zfiwb/tsiD9omYgcOFccc5Z9WFUbi3UqUMWIGnwmDgekYmLQSEiuVJzBqU5eWDd3ZIgRwb4ISIhHhynSb2Xa07jQM4WvfNlA5LScYppmP7GfBHo9MFKHP6myCDg0FHuUL6/EtZ2tsJY2sMlH2xGZ3uH3rlGAZK2ybFKPBetEBUf2fE9/igt12vI0cUZMeuTQJ8kd27cwp51Obh/+85jF2Y0IDgOinfi4PWiv+YQdnfjwCdbcLn6dD+D5DHyHHmQpP1um7B3W65eN+h14wEBWNnYYPZ7y+Dm4ykYosNSsmETmi79LRqmvRaeEI9nAvyE37oedGJf5ue4du6CQTgaYBIgKbB3coRyXQKchw8TDN671YLi9By0Nd8WvtNppVOrcTOD6rN8XPilRhKcWQBJySA3V8SsS4T9QEfB8M2LDYInxwRNBuW7Hjn6XTFO7f9JMpzZAEkRhZnCTWEnuVF/Ca6eHmI6ogNEB0mumBzi3gY9J09E2PJFVCP14bh44neUbdoq3ONyxayAZHxq3Mt4NjxI5KArsTBxPTo7HshlE8abFdDFfTiUaatg6zCgD8yxwhL8VlL2/wJSERGTkQinoS7iiRVDzRjUuTtQf+SkbEizeJCKh5dSV4iJmHJdafZXCJgbieG+mvKSftuflYvGs/WyIE0G5K14RCT1revUudtRf+RX2Dk5IEbIkU8JUO332rA3Q9oN0rMKkwGD4mMxdkag6BXt/aadI6XewWYB9I+JwKR5s0W4WvUhVG3d1S+EbmO8MHst5Uhr4T8pVYzJgKOnTcLMpY8aQEN1IfUzoW+/LuZIQ3WgSYAjxvuAehTe2krjkYdX2+PqOho3URmOF+ZHP/K46hCqtvX3eO8QyN6D2rmOurA9VBy0tEo6ncGLF8A3ZIrePautRBagdq7raLsv1HV6+lmdwLyVFaLWLMHTfr5ivnxcjpQMqJ3ruru6sD/rC1w9UyfJc70H0U1DNw5Fw1COlAwYtXqJ0DD1yM9ffou6quOy4XomOLkOwZyMRAxwHijmyOK0bOHlQvYepDShTFspzjtRtA/Vxaa/MQ3zGono1OWwttU0UefKj6Iir0A+IIXklY9TYT/ICVI7OKmupTaUehuCPJS/G2fKqvQDZgYr6jnAS5dyKkSdXF1wu/EfqbYlj6OF29jZCp2eoVNcAAbhwdCCpDqlQhXw8PltphLgxWdXi4Dk2Jsp5eptj56Ag8J2gmMLLAKO4ceUStUsYtF6RFfE8hwSGdhogHvCj+iCa+o5xj5NrlTn9ziqb5djEe7rC/EfEN2XR0giN+8AAAAASUVORK5CYII=" x="0" y="0" width="30" height="30" alt="X close icon" />
                            </svg>
                            <div class="overlay-input-container">
                                <input type="text" placeholder="What's your book about?" id="tomc-book-organization__new-genre">
                                <p class="hidden centered-text" id="tomc-book-organization--genre-overlay-error">Cannot be blank.</p>
                                <button class="tomc-book-organization--save-button" id="tomc-book-organization--new-genre">save</button>
                            </div>
                        </div>
                    </div>
                    <div class="tomc-book-organization__overlay" id="tomc-book-organization__warning-overlay">
                        <div class="overlay-main-container"> 
                            <!-- <i class="fa fa-window-close tomc-book-organization__overlay__close" aria-label="close overlay" id="tomc-book-organization__warning-overlay-close"></i> -->
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 30 30" class="tomc-book-organization__overlay__close" id="tomc-book-organization__warning-overlay-close">
                                <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABWVJREFUWEfNmHtQ1FUUx7+/H08BRRTDMTABETXGhMxEBZTl5UiLzqRhY2EN5pj5ABSyIRBtGmiC1IqaMCUtGZRpUBoNZbd4+MhHUKZoiPkg0RRBVAwEbnN+Kz9h2XV/v90d2/PPzu7ee87nnnPvuedcDhYuXG++zKCwSJ5nC1k3AsGBf7LsjFiO8YzfuaaybE+PbREwK0SRB4b4Jwul11phSoUqlv4VAD8KDo1g4EotBE7A4Dj2anK5ukAAzAoK2w6OvWZJgIyxk+9WqidpAIMVfwLw0QVoY28Hryn+aL1+E4215822BjtHB3hPfR6NtXVobrimS29LSoXKRQMYojgPBm9do0KXxcE7MACMMRzc+DUunTxlMiQtWpm+CkM8RqCzowO713yIu03NffRyQGtyhcrZIOCs5KVwnzBWmEzKSjZsxs2/rhgNyfE8Ile/BY8J4zQ6GEPR2iw0NzQaB+g4dDDmZCTBYfAgQUFbSyuK07Nxr6nFKMhpi+ZhfNh0ce7xXT+gZu/Bfroke5Bmuo5yR3TqClBoSG5dvoq96zfiwb/tsiD9omYgcOFccc5Z9WFUbi3UqUMWIGnwmDgekYmLQSEiuVJzBqU5eWDd3ZIgRwb4ISIhHhynSb2Xa07jQM4WvfNlA5LScYppmP7GfBHo9MFKHP6myCDg0FHuUL6/EtZ2tsJY2sMlH2xGZ3uH3rlGAZK2ybFKPBetEBUf2fE9/igt12vI0cUZMeuTQJ8kd27cwp51Obh/+85jF2Y0IDgOinfi4PWiv+YQdnfjwCdbcLn6dD+D5DHyHHmQpP1um7B3W65eN+h14wEBWNnYYPZ7y+Dm4ykYosNSsmETmi79LRqmvRaeEI9nAvyE37oedGJf5ue4du6CQTgaYBIgKbB3coRyXQKchw8TDN671YLi9By0Nd8WvtNppVOrcTOD6rN8XPilRhKcWQBJySA3V8SsS4T9QEfB8M2LDYInxwRNBuW7Hjn6XTFO7f9JMpzZAEkRhZnCTWEnuVF/Ca6eHmI6ogNEB0mumBzi3gY9J09E2PJFVCP14bh44neUbdoq3ONyxayAZHxq3Mt4NjxI5KArsTBxPTo7HshlE8abFdDFfTiUaatg6zCgD8yxwhL8VlL2/wJSERGTkQinoS7iiRVDzRjUuTtQf+SkbEizeJCKh5dSV4iJmHJdafZXCJgbieG+mvKSftuflYvGs/WyIE0G5K14RCT1revUudtRf+RX2Dk5IEbIkU8JUO332rA3Q9oN0rMKkwGD4mMxdkag6BXt/aadI6XewWYB9I+JwKR5s0W4WvUhVG3d1S+EbmO8MHst5Uhr4T8pVYzJgKOnTcLMpY8aQEN1IfUzoW+/LuZIQ3WgSYAjxvuAehTe2krjkYdX2+PqOho3URmOF+ZHP/K46hCqtvX3eO8QyN6D2rmOurA9VBy0tEo6ncGLF8A3ZIrePautRBagdq7raLsv1HV6+lmdwLyVFaLWLMHTfr5ivnxcjpQMqJ3ruru6sD/rC1w9UyfJc70H0U1DNw5Fw1COlAwYtXqJ0DD1yM9ffou6quOy4XomOLkOwZyMRAxwHijmyOK0bOHlQvYepDShTFspzjtRtA/Vxaa/MQ3zGono1OWwttU0UefKj6Iir0A+IIXklY9TYT/ICVI7OKmupTaUehuCPJS/G2fKqvQDZgYr6jnAS5dyKkSdXF1wu/EfqbYlj6OF29jZCp2eoVNcAAbhwdCCpDqlQhXw8PltphLgxWdXi4Dk2Jsp5eptj56Ag8J2gmMLLAKO4ceUStUsYtF6RFfE8hwSGdhogHvCj+iCa+o5xj5NrlTn9ziqb5djEe7rC/EfEN2XR0giN+8AAAAASUVORK5CYII=" x="0" y="0" width="30" height="30" alt="X close icon" />
                            </svg>
                            <div class="overlay-input-container">
                                <input type="text" placeholder="Content Warning" id="tomc-book-organization__new-warning">
                                <p class="hidden centered-text" id="tomc-book-organization--warning-overlay-error">Cannot be blank.</p>
                                <button class="tomc-book-organization--save-button" id="tomc-book-organization--new-warning">save</button>
                            </div>
                        </div>
                    </div>
                    <div class="tomc-book-organization__overlay" id="tomc-book-organization__identity-overlay">
                        <div class="overlay-main-container"> 
                            <!-- <i class="fa fa-window-close tomc-book-organization__overlay__close" aria-label="close overlay" id="tomc-book-organization__identity-overlay-close"></i> -->
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 30 30" class="tomc-book-organization__overlay__close" id="tomc-book-organization__identity-overlay-close">
                                <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABWVJREFUWEfNmHtQ1FUUx7+/H08BRRTDMTABETXGhMxEBZTl5UiLzqRhY2EN5pj5ABSyIRBtGmiC1IqaMCUtGZRpUBoNZbd4+MhHUKZoiPkg0RRBVAwEbnN+Kz9h2XV/v90d2/PPzu7ee87nnnPvuedcDhYuXG++zKCwSJ5nC1k3AsGBf7LsjFiO8YzfuaaybE+PbREwK0SRB4b4Jwul11phSoUqlv4VAD8KDo1g4EotBE7A4Dj2anK5ukAAzAoK2w6OvWZJgIyxk+9WqidpAIMVfwLw0QVoY28Hryn+aL1+E4215822BjtHB3hPfR6NtXVobrimS29LSoXKRQMYojgPBm9do0KXxcE7MACMMRzc+DUunTxlMiQtWpm+CkM8RqCzowO713yIu03NffRyQGtyhcrZIOCs5KVwnzBWmEzKSjZsxs2/rhgNyfE8Ile/BY8J4zQ6GEPR2iw0NzQaB+g4dDDmZCTBYfAgQUFbSyuK07Nxr6nFKMhpi+ZhfNh0ce7xXT+gZu/Bfroke5Bmuo5yR3TqClBoSG5dvoq96zfiwb/tsiD9omYgcOFccc5Z9WFUbi3UqUMWIGnwmDgekYmLQSEiuVJzBqU5eWDd3ZIgRwb4ISIhHhynSb2Xa07jQM4WvfNlA5LScYppmP7GfBHo9MFKHP6myCDg0FHuUL6/EtZ2tsJY2sMlH2xGZ3uH3rlGAZK2ybFKPBetEBUf2fE9/igt12vI0cUZMeuTQJ8kd27cwp51Obh/+85jF2Y0IDgOinfi4PWiv+YQdnfjwCdbcLn6dD+D5DHyHHmQpP1um7B3W65eN+h14wEBWNnYYPZ7y+Dm4ykYosNSsmETmi79LRqmvRaeEI9nAvyE37oedGJf5ue4du6CQTgaYBIgKbB3coRyXQKchw8TDN671YLi9By0Nd8WvtNppVOrcTOD6rN8XPilRhKcWQBJySA3V8SsS4T9QEfB8M2LDYInxwRNBuW7Hjn6XTFO7f9JMpzZAEkRhZnCTWEnuVF/Ca6eHmI6ogNEB0mumBzi3gY9J09E2PJFVCP14bh44neUbdoq3ONyxayAZHxq3Mt4NjxI5KArsTBxPTo7HshlE8abFdDFfTiUaatg6zCgD8yxwhL8VlL2/wJSERGTkQinoS7iiRVDzRjUuTtQf+SkbEizeJCKh5dSV4iJmHJdafZXCJgbieG+mvKSftuflYvGs/WyIE0G5K14RCT1revUudtRf+RX2Dk5IEbIkU8JUO332rA3Q9oN0rMKkwGD4mMxdkag6BXt/aadI6XewWYB9I+JwKR5s0W4WvUhVG3d1S+EbmO8MHst5Uhr4T8pVYzJgKOnTcLMpY8aQEN1IfUzoW+/LuZIQ3WgSYAjxvuAehTe2krjkYdX2+PqOho3URmOF+ZHP/K46hCqtvX3eO8QyN6D2rmOurA9VBy0tEo6ncGLF8A3ZIrePautRBagdq7raLsv1HV6+lmdwLyVFaLWLMHTfr5ivnxcjpQMqJ3ruru6sD/rC1w9UyfJc70H0U1DNw5Fw1COlAwYtXqJ0DD1yM9ffou6quOy4XomOLkOwZyMRAxwHijmyOK0bOHlQvYepDShTFspzjtRtA/Vxaa/MQ3zGono1OWwttU0UefKj6Iir0A+IIXklY9TYT/ICVI7OKmupTaUehuCPJS/G2fKqvQDZgYr6jnAS5dyKkSdXF1wu/EfqbYlj6OF29jZCp2eoVNcAAbhwdCCpDqlQhXw8PltphLgxWdXi4Dk2Jsp5eptj56Ag8J2gmMLLAKO4ceUStUsYtF6RFfE8hwSGdhogHvCj+iCa+o5xj5NrlTn9ziqb5djEe7rC/EfEN2XR0giN+8AAAAASUVORK5CYII=" x="0" y="0" width="30" height="30" alt="X close icon" />
                            </svg>
                            <div class="overlay-input-container">
                                <input type="text" placeholder="Main Character Identity" id="tomc-book-organization__new-identity">
                                <p class="hidden centered-text" id="tomc-book-organization--identity-overlay-error">Cannot be blank.</p>
                                <button class="tomc-book-organization--save-button" id="tomc-book-organization--new-identity">save</button>
                            </div>
                        </div>
                    </div>
                    <div class="tomc-book-organization__overlay" id="tomc-book-organization__pen-name-overlay">
                        <div class="overlay-main-container"> 
                            <!-- <i class="fa fa-window-close tomc-book-organization__overlay__close" aria-label="close overlay" id="tomc-book-organization__pen-name-overlay-close"></i> -->
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 30 30" class="tomc-book-organization__overlay__close" id="tomc-book-organization__pen-name-overlay-close">
                                <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABWVJREFUWEfNmHtQ1FUUx7+/H08BRRTDMTABETXGhMxEBZTl5UiLzqRhY2EN5pj5ABSyIRBtGmiC1IqaMCUtGZRpUBoNZbd4+MhHUKZoiPkg0RRBVAwEbnN+Kz9h2XV/v90d2/PPzu7ee87nnnPvuedcDhYuXG++zKCwSJ5nC1k3AsGBf7LsjFiO8YzfuaaybE+PbREwK0SRB4b4Jwul11phSoUqlv4VAD8KDo1g4EotBE7A4Dj2anK5ukAAzAoK2w6OvWZJgIyxk+9WqidpAIMVfwLw0QVoY28Hryn+aL1+E4215822BjtHB3hPfR6NtXVobrimS29LSoXKRQMYojgPBm9do0KXxcE7MACMMRzc+DUunTxlMiQtWpm+CkM8RqCzowO713yIu03NffRyQGtyhcrZIOCs5KVwnzBWmEzKSjZsxs2/rhgNyfE8Ile/BY8J4zQ6GEPR2iw0NzQaB+g4dDDmZCTBYfAgQUFbSyuK07Nxr6nFKMhpi+ZhfNh0ce7xXT+gZu/Bfroke5Bmuo5yR3TqClBoSG5dvoq96zfiwb/tsiD9omYgcOFccc5Z9WFUbi3UqUMWIGnwmDgekYmLQSEiuVJzBqU5eWDd3ZIgRwb4ISIhHhynSb2Xa07jQM4WvfNlA5LScYppmP7GfBHo9MFKHP6myCDg0FHuUL6/EtZ2tsJY2sMlH2xGZ3uH3rlGAZK2ybFKPBetEBUf2fE9/igt12vI0cUZMeuTQJ8kd27cwp51Obh/+85jF2Y0IDgOinfi4PWiv+YQdnfjwCdbcLn6dD+D5DHyHHmQpP1um7B3W65eN+h14wEBWNnYYPZ7y+Dm4ykYosNSsmETmi79LRqmvRaeEI9nAvyE37oedGJf5ue4du6CQTgaYBIgKbB3coRyXQKchw8TDN671YLi9By0Nd8WvtNppVOrcTOD6rN8XPilRhKcWQBJySA3V8SsS4T9QEfB8M2LDYInxwRNBuW7Hjn6XTFO7f9JMpzZAEkRhZnCTWEnuVF/Ca6eHmI6ogNEB0mumBzi3gY9J09E2PJFVCP14bh44neUbdoq3ONyxayAZHxq3Mt4NjxI5KArsTBxPTo7HshlE8abFdDFfTiUaatg6zCgD8yxwhL8VlL2/wJSERGTkQinoS7iiRVDzRjUuTtQf+SkbEizeJCKh5dSV4iJmHJdafZXCJgbieG+mvKSftuflYvGs/WyIE0G5K14RCT1revUudtRf+RX2Dk5IEbIkU8JUO332rA3Q9oN0rMKkwGD4mMxdkag6BXt/aadI6XewWYB9I+JwKR5s0W4WvUhVG3d1S+EbmO8MHst5Uhr4T8pVYzJgKOnTcLMpY8aQEN1IfUzoW+/LuZIQ3WgSYAjxvuAehTe2krjkYdX2+PqOho3URmOF+ZHP/K46hCqtvX3eO8QyN6D2rmOurA9VBy0tEo6ncGLF8A3ZIrePautRBagdq7raLsv1HV6+lmdwLyVFaLWLMHTfr5ivnxcjpQMqJ3ruru6sD/rC1w9UyfJc70H0U1DNw5Fw1COlAwYtXqJ0DD1yM9ffou6quOy4XomOLkOwZyMRAxwHijmyOK0bOHlQvYepDShTFspzjtRtA/Vxaa/MQ3zGono1OWwttU0UefKj6Iir0A+IIXklY9TYT/ICVI7OKmupTaUehuCPJS/G2fKqvQDZgYr6jnAS5dyKkSdXF1wu/EfqbYlj6OF29jZCp2eoVNcAAbhwdCCpDqlQhXw8PltphLgxWdXi4Dk2Jsp5eptj56Ag8J2gmMLLAKO4ceUStUsYtF6RFfE8hwSGdhogHvCj+iCa+o5xj5NrlTn9ziqb5djEe7rC/EfEN2XR0giN+8AAAAASUVORK5CYII=" x="0" y="0" width="30" height="30" alt="X close icon" />
                            </svg>
                            <div class="overlay-input-container">
                                <input type="text" placeholder="New Name" id="tomc-book-organization__new-pen-name">
                                <textarea class="tomc-book-organization-textarea--edit" id="tomc-book-organization__new-name-bio" placeholder="Author bio (up to 1000 characters)"></textarea>
                                <p class="hidden centered-text" id="tomc-book-organization--pen-name-overlay-error">Cannot be blank.</p>
                                <button class="tomc-book-organization--save-button" id="tomc-book-organization--new-pen-name">save</button>
                            </div>
                        </div>
                    </div>
                    <div class="tomc-book-organization__overlay" id="tomc-book-organization__language-overlay">
                        <div class="overlay-main-container"> 
                            <!-- <i class="fa fa-window-close tomc-book-organization__overlay__close" aria-label="close overlay" id="tomc-book-organization__language-overlay-close"></i> -->
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 30 30" class="tomc-book-organization__overlay__close" id="tomc-book-organization__language-overlay-close">
                                <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABWVJREFUWEfNmHtQ1FUUx7+/H08BRRTDMTABETXGhMxEBZTl5UiLzqRhY2EN5pj5ABSyIRBtGmiC1IqaMCUtGZRpUBoNZbd4+MhHUKZoiPkg0RRBVAwEbnN+Kz9h2XV/v90d2/PPzu7ee87nnnPvuedcDhYuXG++zKCwSJ5nC1k3AsGBf7LsjFiO8YzfuaaybE+PbREwK0SRB4b4Jwul11phSoUqlv4VAD8KDo1g4EotBE7A4Dj2anK5ukAAzAoK2w6OvWZJgIyxk+9WqidpAIMVfwLw0QVoY28Hryn+aL1+E4215822BjtHB3hPfR6NtXVobrimS29LSoXKRQMYojgPBm9do0KXxcE7MACMMRzc+DUunTxlMiQtWpm+CkM8RqCzowO713yIu03NffRyQGtyhcrZIOCs5KVwnzBWmEzKSjZsxs2/rhgNyfE8Ile/BY8J4zQ6GEPR2iw0NzQaB+g4dDDmZCTBYfAgQUFbSyuK07Nxr6nFKMhpi+ZhfNh0ce7xXT+gZu/Bfroke5Bmuo5yR3TqClBoSG5dvoq96zfiwb/tsiD9omYgcOFccc5Z9WFUbi3UqUMWIGnwmDgekYmLQSEiuVJzBqU5eWDd3ZIgRwb4ISIhHhynSb2Xa07jQM4WvfNlA5LScYppmP7GfBHo9MFKHP6myCDg0FHuUL6/EtZ2tsJY2sMlH2xGZ3uH3rlGAZK2ybFKPBetEBUf2fE9/igt12vI0cUZMeuTQJ8kd27cwp51Obh/+85jF2Y0IDgOinfi4PWiv+YQdnfjwCdbcLn6dD+D5DHyHHmQpP1um7B3W65eN+h14wEBWNnYYPZ7y+Dm4ykYosNSsmETmi79LRqmvRaeEI9nAvyE37oedGJf5ue4du6CQTgaYBIgKbB3coRyXQKchw8TDN671YLi9By0Nd8WvtNppVOrcTOD6rN8XPilRhKcWQBJySA3V8SsS4T9QEfB8M2LDYInxwRNBuW7Hjn6XTFO7f9JMpzZAEkRhZnCTWEnuVF/Ca6eHmI6ogNEB0mumBzi3gY9J09E2PJFVCP14bh44neUbdoq3ONyxayAZHxq3Mt4NjxI5KArsTBxPTo7HshlE8abFdDFfTiUaatg6zCgD8yxwhL8VlL2/wJSERGTkQinoS7iiRVDzRjUuTtQf+SkbEizeJCKh5dSV4iJmHJdafZXCJgbieG+mvKSftuflYvGs/WyIE0G5K14RCT1revUudtRf+RX2Dk5IEbIkU8JUO332rA3Q9oN0rMKkwGD4mMxdkag6BXt/aadI6XewWYB9I+JwKR5s0W4WvUhVG3d1S+EbmO8MHst5Uhr4T8pVYzJgKOnTcLMpY8aQEN1IfUzoW+/LuZIQ3WgSYAjxvuAehTe2krjkYdX2+PqOho3URmOF+ZHP/K46hCqtvX3eO8QyN6D2rmOurA9VBy0tEo6ncGLF8A3ZIrePautRBagdq7raLsv1HV6+lmdwLyVFaLWLMHTfr5ivnxcjpQMqJ3ruru6sD/rC1w9UyfJc70H0U1DNw5Fw1COlAwYtXqJ0DD1yM9ffou6quOy4XomOLkOwZyMRAxwHijmyOK0bOHlQvYepDShTFspzjtRtA/Vxaa/MQ3zGono1OWwttU0UefKj6Iir0A+IIXklY9TYT/ICVI7OKmupTaUehuCPJS/G2fKqvQDZgYr6jnAS5dyKkSdXF1wu/EfqbYlj6OF29jZCp2eoVNcAAbhwdCCpDqlQhXw8PltphLgxWdXi4Dk2Jsp5eptj56Ag8J2gmMLLAKO4ceUStUsYtF6RFfE8hwSGdhogHvCj+iCa+o5xj5NrlTn9ziqb5djEe7rC/EfEN2XR0giN+8AAAAASUVORK5CYII=" x="0" y="0" width="30" height="30" alt="X close icon" />
                            </svg>
                            <div>
                                <input type="text" placeholder="New Language" id="tomc-book-organization__new-language">
                                <p class="hidden centered-text" id="tomc-book-organization--language-overlay-error">Cannot be blank.</p>
                                <button class="tomc-book-organization--save-button" id="tomc-book-organization--new-language">save</button>
                            </div>
                        </div>
                    </div>
                    <div class="tomc-book-organization__overlay" id="tomc-book-organization__permanently-delete-book-overlay">
                        <div class="overlay-main-container">
                            <p class="centered-text" id="tomc-book-org__permanent-deletion-warning-message">Are you sure you want to permanently delete this book and its related information?</p>
                            <button id="tomc-book-org__permanently-delete-button">Yes, delete this book</button>
                            <p class="red-text centered-text hidden" id="tomc-book-org__deletion-error">We're sorry! Something went wrong. Please try again later.</p>
                            <button id="tomc-book-org__cancel-permanent-deletion-button" class="tomc-book-organization--cancel-button">Cancel</button>
                        </div>
                    </div>

                </div>
            <?php } else {
                ?><div class="generic-content">
                    <h2 class="left-text">Looks like you haven't added any searchable books yet.</h2>
                    <p>You may have already added ebooks, audiobooks, or physical books as products, but you need to add a searchable book to link your products to so that readers can find them. <a href="<?php echo esc_url(site_url('/add-a-book')); ?>">Add books</a></p>
                </div>
            <?php }
        } else {
            ?><div>
                <p class="centered-text padding-x-20">Only authors can edit books.</p>
                <p class="centered-text padding-x-20">Looking for books you've purchased? You can find your ebook and audiobook downloads <a href="<?php echo esc_url(site_url('/my-account/downloads'));?>">here</a>.</p>
                <p class="centered-text padding-x-20">As a reader, you can also create and manage <a href="<?php echo esc_url(site_url('/my-bookshelves')); ?>">bookshelves</a>.</p>
            </div>
        <?php }
    } else {
        ?><div class="half-screen">
            <p class="centered-text">Only logged-in authors can edit books. <a href="<?php echo esc_url(site_url('/my-account'));?>">Login</a></p>
        </div>
    <?php }
?></main>

<?php get_footer(); ?>