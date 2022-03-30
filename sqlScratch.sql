-- Join Books and Categories, join on catetgoryid

CALL getBooksJoined();


DELIMITER //
CREATE PROCEDURE getBooksJoined()
    BEGIN
        SELECT b.id as book_id, b.categoryid as b_catid, b.title as b_title, b.author as b_author, 
        b.price as b_price, b._created as b_created, c.name as cat_name
        FROM Books b
            JOIN Categories c
                ON b.categoryid=c.id
                ORDER BY b._created DESC;
    END //
    DELIMITER //;