exports.GetAllProducts = 'SELECT * FROM product';

/**
 * <VAR 1> = Category ID
 */
exports.GetAllProductsWhereCategory =
    'SELECT * FROM product where product_categoryid = <VAR1>';
