const { Product } = require('../models');

exports.renderHome = (req, res) => {
    res.render('home', { header: true });
}

exports.renderPanel = (req, res) => {
    res.render('panel', { header: false });
}
exports.renderAdmin = (req, res) => {
    res.render('admin', { header: false });
}

exports.renderAddAdmin = (req, res) => {
    res.render('addAdmin', { header: false });
}

exports.renderAddProduct = (req, res) => {
    res.render('addProduct', { header: false });
}

exports.createProduct = async (req, res) => {
    const { name, description, amount, price } = req.body;
    const img = req.file ? `uploads/${req.file.filename}` : null;
    try {
        const product = await Product.create({
            name,
            img,
            description,
            amount,
            price
        });
        res.redirect('/panel');
    } catch (error) {
        console.error("Erro ao criar produto:", error);
        res.status(500).send("Erro ao criar produto");
    }
};

exports.listProducts = async (req, res) => {
    try {
        const products = await Product.findAll();

        const sanitizedProducts = products.map(product => ({
            id: product.id,
            name: product.name,
            img: product.img,
            description: product.description,
            amount: product.amount,
            price: product.price
        }));

        res.render('panel', { header: false, products: sanitizedProducts });
    } catch (error) {
        console.error("Erro ao listar produtos:", error);
        res.status(500).send("Erro ao listar produtos");
    }
};

exports.deleteProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await Product.findByPk(productId);
        if (!product) {
           res.redirect('/panel');
        }
        await product.destroy();
        res.redirect('/panel');
    } catch (error) {
        console.error("Erro ao excluir produto:", error);
        res.status(500).send("Erro ao excluir produto");
    }
};