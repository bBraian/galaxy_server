const clients = [
    {"id": 1, "title": "Galaxy Menu", "logo":"https://i.imgur.com/EyaZoph.png", "background":"https://i.imgur.com/XrwvnNU.png", "url":"galaxymenu" },
    {"id": 2, "title": "Braian's Bar", "logo":"https://i.imgur.com/EyaZoph.png", "background":"https://i.imgur.com/XrwvnNU.png", "url":"braiansbar" },
    {"id": 3, "title": "Kelly's Bar", "logo":"https://i.imgur.com/EyaZoph.png", "background":"https://i.imgur.com/XrwvnNU.png", "url":"kellysbar" }
];

const categories = [
    { "id": 1, "title": "Todos", "clientId": 1 },
    { "id": 2, "title": "🍔 Hambúrgueres", "clientId": 1 },
    { "id": 3, "title": "🍕 Pizzas", "clientId": 1 },
    { "id": 4, "title": "🌭 Lanches", "clientId": 1 },
    { "id": 5, "title": "🍟 Fritas", "clientId": 1 },
    { "id": 6, "title": "🥗 Porções", "clientId": 1 },
    { "id": 7, "title": "🥟 Pasteis", "clientId": 1 },
    { "id": 8, "title": "🥤 Bebidas", "clientId": 1 },
    { "id": 9, "title": "🍺 Cervejas", "clientId": 1 },
    { "id": 10, "title": "🍷 Vinhos", "clientId": 1 },
    { "id": 11, "title": "🍸 Drinks", "clientId": 1 },
    { "id": 12, "title": "Todos", "clientId": 2 },
    { "id": 13, "title": "🍔 Hambúrgueres", "clientId": 2 },
    { "id": 14, "title": "🍕 Pizzas", "clientId": 2 },
    { "id": 15, "title": "🌭 Lanches", "clientId": 2 }
];

const products = [
    { "categoryId": 1, "clientId": 1, "categoryTitle": "🍔 Hambúrgueres", "categoryProducts": [
      { "id": 1, "imageUrl": "https://www.vpjalimentos.com.br/wp-content/uploads/elementor/thumbs/Burger_Paula_Labaki_Texto_Reinenc%CC%A7a%CC%83o_do_Hambu%CC%81rguer_ok-px12mzvmm8br83abzy5y2xpu323h16k5psw5ya3ocg.png", "title": "Hamburguer Simples", "description": "Pão, carne de hambúrguer e queijo muçarela", "price": {"original": "24,00", "discounted": "21,90"}},
      { "id": 2, "imageUrl": "https://www.dicasdemulher.com.br/wp-content/uploads/2018/10/hamburguer-de-frango.jpg", "title": "Hamburguer de Frango", "description": "Pão, bife de brango, bacon, molho barbecue, queijo muçarela, alface e tomate", "price": {"original": "27,00", "discounted": "24,90"}},
      { "id": 3, "imageUrl": "https://digital-menu-seven.vercel.app/assets/h6.1b08aa0b.jpg", "title": "Hamburguer 08", "description": "Pão, carne de hambúrguer, bacon, molho barbecue, queijo muçarela, alface, tomate, maionese e batata frita", "price": {"original": "28,00", "discounted": "24,90"}}
    ]},
    { "categoryId": 2, "clientId": 1, "categoryTitle": "🍕 Pizzas", "categoryProducts": [
      { "id": 4, "imageUrl": "https://storage.googleapis.com/domain-images/745830aa-587c-44db-9b4d-c3782b9f2f7a/products/gallery_5b7756af-6288-4c86-9240-63103e302d3f.jpg", "title": "Pizza de Frango", "description": "Pizza de frango com queijo catupiry", "price": {"original": "30,00", "discounted": ""}},
      { "id": 5, "imageUrl": "https://sachefmio.blob.core.windows.net/fotos/pizza-strogonoff-de-carne-28521.jpg", "title": "Pizza de Strogonoff com Palhas", "description": "Pizza de strogonoff, batata palha e queijo", "price": {"original": "30,00", "discounted": ""}},
      { "id": 6, "imageUrl": "http://delivery.devenado.com/IMG/pizza-calabresa-id5150_1-w500-h500-m1.jpg", "title": "Pizza de Calabresa", "description": "Pizza de calabresa e queijo", "price": {"original": "30,00", "discounted": ""}},
      { "id": 7, "imageUrl": "https://www.pizzatec.com.br/assets/uploads/images/2018/10/pizza-de-sorvete.jpg", "title": "Pizza de Sorvete", "description": "Pizza de sorvete", "price": {"original": "30,00", "discounted": ""}},
      { "id": 8, "imageUrl": "https://digital-menu-seven.vercel.app/assets/p3.3494d5d3.jpg", "title": "Pizza de MM's", "description": "Pizza de chocolate preto com MM's", "price": {"original": "30,00", "discounted": ""}}
    ]},
    { "categoryId": 3, "clientId": 1, "categoryTitle": "🌭 Lanches", "categoryProducts": [
      { "id": 9, "imageUrl": "https://t3.ftcdn.net/jpg/02/81/37/90/360_F_281379065_Na6UBRImfR8OGxjd5PM7XcgSEUo35VBJ.jpg", "title": "Cachorro Quente", "description": "Pão, 1 salsicha, molho de cachorro quente, maionese e batata palha", "price": {"original": "14,00", "discounted": ""}},
      { "id": 10,  "imageUrl": "https://t4.ftcdn.net/jpg/04/76/10/49/360_F_476104972_qG8FFDUwtfh3YaK6T8lHKoqpRRtxY6JO.jpg", "title": "Cachorro Quente Calabresinha", "description": "Pão, calabresinha, molho de cachorro quente, maionese, ketchup e batata palha", "price": {"original": "16,00", "discounted": ""}},
      { "id": 11,  "imageUrl": "https://guerreirolanches.com.br/wp-content/uploads/2017/08/xis_banner_1.jpg", "title": "Xis Salada", "description": "Pão, alface, tomate, ovo, carne, maionese e milho", "price": {"original": "22,00", "discounted": ""}},
      { "id": 12,  "imageUrl": "https://guerreirolanches.com.br/wp-content/uploads/2017/08/Xis-Lombinho.jpg", "title": "Xis Bacon", "description": "Pão, bacon, alface, tomate, maionese e barbecue", "price": {"original": "26,00", "discounted": ""}}
    ]},
    { "categoryId": 4, "clientId": 1, "categoryTitle": "🍟 Fritas", "categoryProducts": [
      { "id": 13, "imageUrl": "https://thumbs.dreamstime.com/b/bacia-com-as-fritadas-da-batata-doce-na-tabela-de-madeira-146862208.jpg", "title": "Porção de Fritas", "description": "Porção de batatas fritas", "price": {"original": "14,00", "discounted": ""}},
      { "id": 14, "imageUrl": "https://www.easyanddelish.com/wp-content/uploads/2022/03/AIR-FRYER-POTATO-WEDGES-AS-AN-APPETIZER-BATATA-RUSTICA-NA-AIRFRYER-APERITIVO-1-500x500.jpg", "title": "Porção de Fritas Rústicas", "description": "Porção de batatas fritas rústicas", "price": {"original": "14,50", "discounted": ""}},
      { "id": 15, "imageUrl": "https://img77.uenicdn.com/image/upload/v1616190843/business/bd5702a8-492f-4f41-bf80-d46b97087e87.jpg", "title": "Porção Fritas, Calabresa e Cheddar", "description": "Porção de batatas fritas, calabresa e queijo cheddar", "price": {"original": "28,00", "discounted": ""}}
    ]},
    { "categoryId": 5, "clientId": 2, "categoryTitle": "🍔 Hambúrgueres", "categoryProducts": [
      { "id": 1, "imageUrl": "https://www.vpjalimentos.com.br/wp-content/uploads/elementor/thumbs/Burger_Paula_Labaki_Texto_Reinenc%CC%A7a%CC%83o_do_Hambu%CC%81rguer_ok-px12mzvmm8br83abzy5y2xpu323h16k5psw5ya3ocg.png", "title": "Hamburguer Simples", "description": "Pão, carne de hambúrguer e queijo muçarela", "price": {"original": "24,00", "discounted": "21,90"}},
      { "id": 2, "imageUrl": "https://www.dicasdemulher.com.br/wp-content/uploads/2018/10/hamburguer-de-frango.jpg", "title": "Hamburguer de Frango", "description": "Pão, bife de brango, bacon, molho barbecue, queijo muçarela, alface e tomate", "price": {"original": "27,00", "discounted": "24,90"}},
      { "id": 3, "imageUrl": "https://digital-menu-seven.vercel.app/assets/h6.1b08aa0b.jpg", "title": "Hamburguer 08", "description": "Pão, carne de hambúrguer, bacon, molho barbecue, queijo muçarela, alface, tomate, maionese e batata frita", "price": {"original": "28,00", "discounted": "24,90"}}
    ]},
    { "categoryId": 6, "clientId": 2, "categoryTitle": "🍕 Pizzas", "categoryProducts": [
      { "id": 4, "imageUrl": "https://storage.googleapis.com/domain-images/745830aa-587c-44db-9b4d-c3782b9f2f7a/products/gallery_5b7756af-6288-4c86-9240-63103e302d3f.jpg", "title": "Pizza de Frango", "description": "Pizza de frango com queijo catupiry", "price": {"original": "30,00", "discounted": ""}},
      { "id": 5, "imageUrl": "https://sachefmio.blob.core.windows.net/fotos/pizza-strogonoff-de-carne-28521.jpg", "title": "Pizza de Strogonoff com Palhas", "description": "Pizza de strogonoff, batata palha e queijo", "price": {"original": "30,00", "discounted": ""}},
      { "id": 6, "imageUrl": "http://delivery.devenado.com/IMG/pizza-calabresa-id5150_1-w500-h500-m1.jpg", "title": "Pizza de Calabresa", "description": "Pizza de calabresa e queijo", "price": {"original": "30,00", "discounted": ""}},
      { "id": 7, "imageUrl": "https://www.pizzatec.com.br/assets/uploads/images/2018/10/pizza-de-sorvete.jpg", "title": "Pizza de Sorvete", "description": "Pizza de sorvete", "price": {"original": "30,00", "discounted": ""}},
      { "id": 8, "imageUrl": "https://digital-menu-seven.vercel.app/assets/p3.3494d5d3.jpg", "title": "Pizza de MM's", "description": "Pizza de chocolate preto com MM's", "price": {"original": "30,00", "discounted": ""}}
    ]},
    { "categoryId": 7, "clientId": 2, "categoryTitle": "🌭 Lanches", "categoryProducts": [
      { "id": 9, "imageUrl": "https://t3.ftcdn.net/jpg/02/81/37/90/360_F_281379065_Na6UBRImfR8OGxjd5PM7XcgSEUo35VBJ.jpg", "title": "Cachorro Quente", "description": "Pão, 1 salsicha, molho de cachorro quente, maionese e batata palha", "price": {"original": "14,00", "discounted": ""}},
      { "id": 10,  "imageUrl": "https://t4.ftcdn.net/jpg/04/76/10/49/360_F_476104972_qG8FFDUwtfh3YaK6T8lHKoqpRRtxY6JO.jpg", "title": "Cachorro Quente Calabresinha", "description": "Pão, calabresinha, molho de cachorro quente, maionese, ketchup e batata palha", "price": {"original": "16,00", "discounted": ""}},
      { "id": 11,  "imageUrl": "https://guerreirolanches.com.br/wp-content/uploads/2017/08/xis_banner_1.jpg", "title": "Xis Salada", "description": "Pão, alface, tomate, ovo, carne, maionese e milho", "price": {"original": "22,00", "discounted": ""}},
      { "id": 12,  "imageUrl": "https://guerreirolanches.com.br/wp-content/uploads/2017/08/Xis-Lombinho.jpg", "title": "Xis Bacon", "description": "Pão, bacon, alface, tomate, maionese e barbecue", "price": {"original": "26,00", "discounted": ""}}
    ]}
];

const options = [
  { "id": 1, "categoryId": 1, "required": false, "title": "Adicionais", "description": "Selecione adicionais", "optionsList": [
    { "id": 1, "title": "Carne", "price": 4.50 },
    { "id": 2, "title": "Bacon", "price": 4 },
    { "id": 3, "title": "Queijo cheddar", "price": 2 }
  ]},
  { "id": 2, "categoryId": 2, "required": true, "title": "Tamanho", "description": "Selecione o tamanho", "optionsList": [
    { "id": 4, "title": "Meia", "price": 17.50 },
    { "id": 5, "title": "Inteira", "price": 28 }
  ]},
  { "id": 3, "categoryId": 2, "required": false, "title": "Adicionais", "description": "Selecione adicionais", "optionsList": [
    { "id": 6, "title": "Extra queijo", "price": 2 },
    { "id": 7, "title": "Extra bacon", "price": 3.50 },
    { "id": 8, "title": "Extra calabresa", "price": 2.50 },
    { "id": 9, "title": "Extra cebola", "price": 1 },
    { "id": 10, "title": "Extra palhas", "price": 1.50 }
  ]}
];

module.exports = {
    clients,
    categories,
    products,
    options
};