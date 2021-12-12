exports.GetAllProducts = 'SELECT * FROM product';

exports.GetAProducts = 'SELECT * FROM product where id = <VAR1>';

/**
 * <VAR 1> = Category ID
 */
exports.GetAllProductsWhereCategory =
    'SELECT * FROM product where product_categoryid = <VAR1>';
